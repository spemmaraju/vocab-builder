/* ===================================================
   VocabForge — Application Logic
   =================================================== */

// ─── Constants ───
const TIMER_CIRCUMFERENCE = 339.29; // 2 * π * 54 (SVG circle radius)
const QUIZ_TYPES = ['word-to-def', 'def-to-word', 'fill-blank', 'story-time'];
const QUIZ_TYPE_LABELS = {
  'word-to-def': 'Word → Definition',
  'def-to-word': 'Definition → Word',
  'fill-blank':  'Fill in the Blank',
  'story-time':  '✨ Story Time'
};
const HINT_THRESHOLDS = [0.67, 0.5, 0.27]; // fractions of time remaining when hints appear

// ─── State ───
let state = {
  currentWordIndex: 0,
  seenWords: new Set(),
  knownWords: new Set(),
  customWords: [],      // words added via API lookup
  quizScores: {},       // { wordId: { correct: 0, incorrect: 0 } }
  totalXP: 0,
  globalStreak: 0,
  settings: {
    timerDuration: 30,
    apiKey: ''
  },
  quiz: {
    active: false,
    type: 'random',
    pool: 'all',
    score: 0,
    streak: 0,
    questionsAnswered: 0,
    currentWord: null,
    currentType: null,
    options: [],
    answered: false,
    timerInterval: null,
    timeRemaining: 30,
    totalTime: 30,
    hintsShown: 0
  }
};

// ─── Storage ───
function saveState() {
  try {
    const serializable = {
      currentWordIndex: state.currentWordIndex,
      seenWords: [...state.seenWords],
      knownWords: [...state.knownWords],
      customWords: state.customWords,
      quizScores: state.quizScores,
      totalXP: state.totalXP,
      globalStreak: state.globalStreak,
      settings: state.settings
    };
    localStorage.setItem('vocabforge_state', JSON.stringify(serializable));
  } catch (e) { console.warn('Could not save state:', e); }
}

function loadState() {
  try {
    const raw = localStorage.getItem('vocabforge_state');
    if (!raw) return;
    const saved = JSON.parse(raw);
    state.currentWordIndex = saved.currentWordIndex || 0;
    state.seenWords = new Set(saved.seenWords || []);
    state.knownWords = new Set(saved.knownWords || []);
    state.customWords = saved.customWords || [];
    state.quizScores = saved.quizScores || {};
    state.totalXP = saved.totalXP || 0;
    state.globalStreak = saved.globalStreak || 0;
    state.settings = { ...state.settings, ...(saved.settings || {}) };
  } catch (e) { console.warn('Could not load state:', e); }
}

// ─── Word Pool ───
function getAllWords() {
  return [...WORD_DATABASE, ...state.customWords];
}

function getQuizPool() {
  const all = getAllWords();
  switch (state.quiz.pool) {
    case 'seen':    return all.filter(w => state.seenWords.has(w.id));
    case 'learning': return all.filter(w => state.seenWords.has(w.id) && !state.knownWords.has(w.id));
    default:         return all;
  }
}

function markWordSeen(wordId) {
  if (!state.seenWords.has(wordId)) {
    state.seenWords.add(wordId);
    saveState();
    updateHeaderStats();
  }
}

// ─── Navigation ───
function initNav() {
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => switchView(tab.dataset.view));
  });
}

function switchView(viewName) {
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.querySelector(`.nav-tab[data-view="${viewName}"]`).classList.add('active');
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(`view-${viewName}`).classList.add('active');
  if (viewName === 'ledger') renderLedger();
  if (viewName === 'settings') renderSettings();
  if (viewName === 'quiz' && !state.quiz.active) renderQuizStart();
}

// ─── Header Stats ───
function updateHeaderStats() {
  document.getElementById('stat-known').textContent = state.knownWords.size;
  document.getElementById('stat-streak').textContent = state.globalStreak;
}

// ─── LEARN VIEW ───
function renderLearnView() {
  const words = getAllWords();
  if (!words.length) return;
  if (state.currentWordIndex >= words.length) state.currentWordIndex = 0;

  const word = words[state.currentWordIndex];
  markWordSeen(word.id);

  // Word title & pronunciation
  document.getElementById('word-display').textContent = word.word;
  document.getElementById('word-pronunciation').textContent = word.pronunciation || '';

  // Part of speech
  const posEl = document.getElementById('word-pos');
  if (Array.isArray(word.partOfSpeech)) {
    posEl.textContent = word.partOfSpeech.join(' / ');
  } else {
    posEl.textContent = word.partOfSpeech || '';
  }

  // Definition
  document.getElementById('definition-text').textContent = word.definition;

  // Mnemonic
  document.getElementById('mnemonic-text').textContent = word.mnemonic;

  // Etymology
  document.getElementById('etymology-text').textContent = word.etymology;

  // Known button
  const knownBtn = document.getElementById('btn-mark-known');
  if (state.knownWords.has(word.id)) {
    knownBtn.classList.add('marked');
    knownBtn.title = 'Marked as Known — click to unmark';
    knownBtn.textContent = '✓ Known';
  } else {
    knownBtn.classList.remove('marked');
    knownBtn.title = 'Mark as Known';
    knownBtn.textContent = '✓';
  }

  // Forms
  const formsGrid = document.getElementById('forms-grid');
  formsGrid.innerHTML = '';
  if (word.forms) {
    Object.entries(word.forms).forEach(([label, value]) => {
      if (!value) return;
      const item = document.createElement('div');
      item.className = 'form-item';
      item.innerHTML = `<div class="form-label">${label}</div><div class="form-value">${value}</div>`;
      formsGrid.appendChild(item);
    });
  }

  // Examples — highlight the word in examples
  const examplesList = document.getElementById('examples-list');
  examplesList.innerHTML = '';
  (word.examples || []).forEach(example => {
    const item = document.createElement('div');
    item.className = 'example-item';
    // Highlight the word (case-insensitive) in the example
    const highlighted = highlightWord(example, word.word);
    item.innerHTML = highlighted;
    examplesList.appendChild(item);
  });

  // Navigation counter and progress bar
  const total = words.length;
  document.getElementById('word-index').textContent = state.currentWordIndex + 1;
  document.getElementById('word-total').textContent = total;
  document.querySelector('.word-progress-fill').style.width =
    `${((state.currentWordIndex + 1) / total) * 100}%`;

  // Prev/Next
  document.getElementById('btn-prev').disabled = state.currentWordIndex === 0;
  document.getElementById('btn-next').textContent =
    state.currentWordIndex === total - 1 ? 'Wrap Around →' : 'Next →';
}

function highlightWord(sentence, word) {
  const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`\\b(${escapedWord}[a-z]*)\\b`, 'gi');
  return sentence.replace(regex, '<em>$1</em>');
}

function initLearnView() {
  document.getElementById('btn-next').addEventListener('click', () => {
    const words = getAllWords();
    state.currentWordIndex = (state.currentWordIndex + 1) % words.length;
    saveState();
    renderLearnView();
  });

  document.getElementById('btn-prev').addEventListener('click', () => {
    if (state.currentWordIndex > 0) {
      state.currentWordIndex--;
      saveState();
      renderLearnView();
    }
  });

  document.getElementById('btn-mark-known').addEventListener('click', () => {
    const word = getAllWords()[state.currentWordIndex];
    if (state.knownWords.has(word.id)) {
      state.knownWords.delete(word.id);
      showToast(`"${word.word}" moved back to learning`, '');
    } else {
      state.knownWords.add(word.id);
      showToast(`"${word.word}" marked as known! ✓`, 'success');
    }
    saveState();
    updateHeaderStats();
    renderLearnView();
  });

  // Collapsible etymology
  document.querySelectorAll('.collapsible-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const targetId = toggle.dataset.target;
      const content = document.getElementById(targetId);
      const isHidden = content.classList.contains('hidden-content');
      content.classList.toggle('hidden-content', !isHidden);
      toggle.classList.toggle('collapsed', !isHidden);
    });
  });

  // Keyboard navigation
  document.addEventListener('keydown', e => {
    const activeView = document.querySelector('.view.active');
    if (!activeView || activeView.id !== 'view-learn') return;
    if (e.target.tagName === 'INPUT') return;
    if (e.key === 'ArrowRight' || e.key === 'n') document.getElementById('btn-next').click();
    if (e.key === 'ArrowLeft' || e.key === 'p') document.getElementById('btn-prev').click();
    if (e.key === 'k') document.getElementById('btn-mark-known').click();
  });
}

// ─── QUIZ VIEW ───
function renderQuizStart() {
  document.getElementById('quiz-start').classList.remove('hidden');
  document.getElementById('quiz-active').classList.add('hidden');

  // Timer setting
  document.getElementById('settings-timer').value = state.settings.timerDuration;
  document.getElementById('settings-timer-display').textContent = `${state.settings.timerDuration} seconds`;
}

function initQuizView() {
  document.getElementById('btn-start-quiz').addEventListener('click', startQuiz);
  document.getElementById('btn-next-question').addEventListener('click', () => {
    document.getElementById('quiz-result').classList.add('hidden');
    nextQuestion();
  });
  document.getElementById('btn-submit-answer').addEventListener('click', submitTextAnswer);
  document.getElementById('quiz-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') submitTextAnswer();
  });
}

function startQuiz() {
  const typeEl = document.querySelector('input[name="quiz-type"]:checked');
  const poolEl = document.querySelector('input[name="quiz-pool"]:checked');
  state.quiz.type = typeEl ? typeEl.value : 'random';
  state.quiz.pool = poolEl ? poolEl.value : 'all';
  state.quiz.score = 0;
  state.quiz.streak = 0;
  state.quiz.questionsAnswered = 0;
  state.quiz.active = true;

  const pool = getQuizPool();
  if (pool.length < 2) {
    showToast('Need at least 2 words in your pool! Learn some words first.', 'error');
    return;
  }

  document.getElementById('quiz-start').classList.add('hidden');
  document.getElementById('quiz-active').classList.remove('hidden');
  document.getElementById('quiz-result').classList.add('hidden');
  document.getElementById('quiz-score').textContent = '0';
  document.getElementById('quiz-streak').textContent = '0';

  nextQuestion();
}

function nextQuestion() {
  const pool = getQuizPool();
  if (pool.length < 2) {
    endQuiz();
    return;
  }

  // Pick random word
  const word = pool[Math.floor(Math.random() * pool.length)];
  state.quiz.currentWord = word;

  // Pick quiz type
  let type = state.quiz.type;
  if (type === 'random') {
    // Weighted: word-to-def 30%, def-to-word 30%, fill-blank 25%, story-time 15%
    const r = Math.random();
    if (r < 0.30) type = 'word-to-def';
    else if (r < 0.60) type = 'def-to-word';
    else if (r < 0.85) type = 'fill-blank';
    else type = 'story-time';
  }
  state.quiz.currentType = type;

  // Generate distractors (3 wrong words from pool)
  const distractors = pool
    .filter(w => w.id !== word.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  state.quiz.options = shuffleArray([word, ...distractors]);
  state.quiz.answered = false;
  state.quiz.hintsShown = 0;

  // Reset hints
  ['hint-1','hint-2','hint-3'].forEach(id => {
    document.getElementById(id).classList.add('hidden');
  });

  renderQuestion(word, type, state.quiz.options);
  startTimer();
}

function renderQuestion(word, type, options) {
  const questionEl = document.getElementById('quiz-question');
  const answersEl = document.getElementById('quiz-answers');
  const inputWrap = document.getElementById('quiz-input-wrap');
  const input = document.getElementById('quiz-input');

  document.getElementById('quiz-type-badge').textContent = QUIZ_TYPE_LABELS[type];

  // Reset answer area
  answersEl.innerHTML = '';
  answersEl.classList.remove('hidden');
  inputWrap.classList.add('hidden');
  input.value = '';

  // Set hints
  document.getElementById('hint-1-text').textContent = `"${word.word[0].toUpperCase()}..."`;
  document.getElementById('hint-2-text').textContent = word.etymology.split('.')[0] || word.etymology.substring(0,100);
  document.getElementById('hint-3-text').textContent = word.mnemonic.substring(0, 120) + (word.mnemonic.length > 120 ? '…' : '');

  if (type === 'word-to-def') {
    questionEl.innerHTML = `
      <div class="q-label">What does this word mean?</div>
      <div class="q-word">${word.word}</div>
      <div style="font-size:0.85rem; color:var(--text-muted); margin-top:4px;">${word.pronunciation || ''}</div>`;
    options.forEach(opt => {
      const btn = createAnswerButton(opt.definition.substring(0,120) + (opt.definition.length > 120 ? '…' : ''), opt.id === word.id);
      answersEl.appendChild(btn);
    });

  } else if (type === 'def-to-word') {
    questionEl.innerHTML = `
      <div class="q-label">Which word matches this definition?</div>
      <div class="q-text">${word.definition}</div>`;
    options.forEach(opt => {
      const btn = createAnswerButton(opt.word, opt.id === word.id);
      answersEl.appendChild(btn);
    });

  } else if (type === 'fill-blank') {
    const examples = word.examples || [];
    const sentence = examples[Math.floor(Math.random() * examples.length)] || `The scholar used ${word.word} in an unexpected context.`;
    const blankedSentence = blankWord(sentence, word.word);
    questionEl.innerHTML = `
      <div class="q-label">Fill in the blank — which word completes the sentence?</div>
      <div class="q-sentence">${blankedSentence}</div>`;
    options.forEach(opt => {
      const btn = createAnswerButton(opt.word, opt.id === word.id);
      answersEl.appendChild(btn);
    });

  } else if (type === 'story-time') {
    // Show mnemonic with word removed, user types it
    const maskedMnemonic = maskWord(word.mnemonic, word.word);
    questionEl.innerHTML = `
      <div class="q-label">✨ Story Time — what word does this memory hook describe?</div>
      <div class="q-text" style="margin-top:10px; font-style:italic; color:var(--text-secondary); line-height:1.8;">"${maskedMnemonic}"</div>`;
    answersEl.classList.add('hidden');
    inputWrap.classList.remove('hidden');
    setTimeout(() => input.focus(), 100);
  }
}

function createAnswerButton(label, isCorrect) {
  const btn = document.createElement('button');
  btn.className = 'answer-option';
  btn.textContent = label;
  btn.dataset.correct = isCorrect ? 'true' : 'false';
  btn.addEventListener('click', () => handleMCAnswer(btn, isCorrect));
  return btn;
}

function handleMCAnswer(btn, isCorrect) {
  if (state.quiz.answered) return;
  state.quiz.answered = true;
  stopTimer();

  document.querySelectorAll('.answer-option').forEach(b => {
    b.disabled = true;
    if (b.dataset.correct === 'true') b.classList.add('correct');
  });

  if (!isCorrect) btn.classList.add('wrong');
  resolveQuestion(isCorrect);
}

function submitTextAnswer() {
  if (state.quiz.answered) return;
  const input = document.getElementById('quiz-input');
  const answer = input.value.trim().toLowerCase();
  const correct = state.quiz.currentWord.word.toLowerCase();
  const isCorrect = answer === correct || levenshteinDistance(answer, correct) <= 1;

  state.quiz.answered = true;
  stopTimer();
  resolveQuestion(isCorrect);
}

function resolveQuestion(isCorrect) {
  const word = state.quiz.currentWord;
  const hintsUsed = state.quiz.hintsShown;

  // Scoring: 100 base, -20 per hint used, 0 if wrong
  let pointsEarned = 0;
  if (isCorrect) {
    pointsEarned = Math.max(10, 100 - (hintsUsed * 20));
    state.quiz.streak++;
    state.globalStreak++;
    if (state.quiz.streak > 0 && state.quiz.streak % 3 === 0) {
      pointsEarned = Math.round(pointsEarned * 1.5); // streak bonus
    }
  } else {
    state.quiz.streak = 0;
    state.globalStreak = 0;
  }

  state.quiz.score += pointsEarned;
  state.quiz.questionsAnswered++;
  state.totalXP += pointsEarned;

  // Update word score tracking
  if (!state.quizScores[word.id]) state.quizScores[word.id] = { correct: 0, incorrect: 0 };
  if (isCorrect) state.quizScores[word.id].correct++;
  else state.quizScores[word.id].incorrect++;

  // Update UI
  document.getElementById('quiz-score').textContent = state.quiz.score;
  document.getElementById('quiz-streak').textContent = state.quiz.streak;
  updateHeaderStats();
  saveState();

  // Show result
  showQuizResult(word, isCorrect, pointsEarned);

  // Celebrate if correct
  if (isCorrect && state.quiz.streak >= 3) launchConfetti();
}

function showQuizResult(word, isCorrect, points) {
  const resultEl = document.getElementById('quiz-result');
  document.getElementById('result-icon').textContent = isCorrect ? '🎯' : '📖';
  document.getElementById('result-word').textContent = word.word;
  document.getElementById('result-definition').textContent = word.definition;
  document.getElementById('result-mnemonic').textContent = word.mnemonic.substring(0, 200) + (word.mnemonic.length > 200 ? '…' : '');

  const badge = document.querySelector('.result-score-badge') || document.createElement('div');
  badge.className = `result-score-badge ${isCorrect ? 'correct-badge' : 'wrong-badge'}`;
  badge.textContent = isCorrect
    ? `+${points} XP${state.quiz.streak >= 3 ? ' 🔥 Streak Bonus!' : ''}`
    : 'Study this one more!';

  // Insert badge before result-word
  const resultWord = document.getElementById('result-word');
  if (!document.querySelector('.result-score-badge')) {
    resultEl.insertBefore(badge, resultWord);
  } else {
    document.querySelector('.result-score-badge').replaceWith(badge);
  }

  resultEl.classList.remove('hidden');
}

function endQuiz() {
  state.quiz.active = false;
  showToast(`Quiz complete! Final score: ${state.quiz.score} XP`, 'success');
  renderQuizStart();
  switchView('quiz');
}

// ─── Timer ───
function startTimer() {
  stopTimer();
  state.quiz.totalTime = state.settings.timerDuration;
  state.quiz.timeRemaining = state.settings.timerDuration;
  updateTimerDisplay();

  state.quiz.timerInterval = setInterval(() => {
    state.quiz.timeRemaining--;
    updateTimerDisplay();
    checkHints();
    if (state.quiz.timeRemaining <= 0) {
      stopTimer();
      if (!state.quiz.answered) {
        state.quiz.answered = true;
        // Time's up — reveal as wrong
        document.querySelectorAll('.answer-option').forEach(b => {
          b.disabled = true;
          if (b.dataset.correct === 'true') b.classList.add('correct');
        });
        resolveQuestion(false);
      }
    }
  }, 1000);
}

function stopTimer() {
  if (state.quiz.timerInterval) {
    clearInterval(state.quiz.timerInterval);
    state.quiz.timerInterval = null;
  }
}

function updateTimerDisplay() {
  const t = state.quiz.timeRemaining;
  const total = state.quiz.totalTime;
  const fraction = t / total;

  document.getElementById('timer-text').textContent = t;

  // SVG ring
  const fill = document.getElementById('timer-ring-fill');
  if (fill) {
    const offset = TIMER_CIRCUMFERENCE * (1 - fraction);
    fill.style.strokeDashoffset = offset;
    fill.classList.remove('warning', 'danger');
    if (fraction <= 0.27) fill.classList.add('danger');
    else if (fraction <= 0.5) fill.classList.add('warning');
  }
}

function checkHints() {
  const fraction = state.quiz.timeRemaining / state.quiz.totalTime;
  if (state.quiz.hintsShown < 1 && fraction <= HINT_THRESHOLDS[0]) {
    document.getElementById('hint-1').classList.remove('hidden');
    state.quiz.hintsShown = 1;
  }
  if (state.quiz.hintsShown < 2 && fraction <= HINT_THRESHOLDS[1]) {
    document.getElementById('hint-2').classList.remove('hidden');
    state.quiz.hintsShown = 2;
  }
  if (state.quiz.hintsShown < 3 && fraction <= HINT_THRESHOLDS[2]) {
    document.getElementById('hint-3').classList.remove('hidden');
    state.quiz.hintsShown = 3;
  }
}

// ─── LEDGER VIEW ───
function renderLedger() {
  const allWords = getAllWords();
  const search = document.getElementById('ledger-search').value.toLowerCase();
  const filter = document.getElementById('ledger-filter').value;

  // Update stats
  document.getElementById('ledger-total').textContent = allWords.length;
  document.getElementById('ledger-known').textContent = state.knownWords.size;
  document.getElementById('ledger-learning').textContent =
    allWords.filter(w => state.seenWords.has(w.id) && !state.knownWords.has(w.id)).length;

  // Filter words
  let words = allWords.filter(w => {
    const matchesSearch = !search ||
      w.word.toLowerCase().includes(search) ||
      w.definition.toLowerCase().includes(search);

    const matchesFilter = filter === 'all' ||
      (filter === 'known' && state.knownWords.has(w.id)) ||
      (filter === 'learning' && state.seenWords.has(w.id) && !state.knownWords.has(w.id)) ||
      (filter === 'unseen' && !state.seenWords.has(w.id));

    return matchesSearch && matchesFilter;
  });

  // Sort: seen first, then alphabetical
  words.sort((a, b) => {
    const aS = state.seenWords.has(a.id) ? 0 : 1;
    const bS = state.seenWords.has(b.id) ? 0 : 1;
    if (aS !== bS) return aS - bS;
    return a.word.localeCompare(b.word);
  });

  const grid = document.getElementById('ledger-grid');
  grid.innerHTML = '';

  if (!words.length) {
    grid.innerHTML = '<p style="color:var(--text-muted); font-size:0.9rem; padding:20px 0;">No words match your filter.</p>';
    return;
  }

  words.forEach(word => {
    const isSeen = state.seenWords.has(word.id);
    const isKnown = state.knownWords.has(word.id);
    const isLookup = word.isLookup;

    const card = document.createElement('div');
    card.className = `ledger-card${isKnown ? ' known' : ''}${!isSeen ? ' unseen' : ''}`;

    const statusLabel = isKnown ? 'Known' : (isLookup ? 'Lookup' : (isSeen ? 'Learning' : 'Unseen'));
    const statusClass = isKnown ? 'status-known' : (isLookup ? 'status-lookup' : (isSeen ? 'status-learning' : 'status-unseen'));

    card.innerHTML = `
      <div class="ledger-status ${statusClass}">${statusLabel}</div>
      <div class="ledger-word">${word.word}</div>
      <div class="ledger-pos">${Array.isArray(word.partOfSpeech) ? word.partOfSpeech.join(', ') : (word.partOfSpeech || '')}</div>
      <div class="ledger-def">${word.definition}</div>`;

    card.addEventListener('click', () => {
      // Navigate to this word in Learn view
      const allW = getAllWords();
      const idx = allW.findIndex(w => w.id === word.id);
      if (idx !== -1) {
        state.currentWordIndex = idx;
        saveState();
        switchView('learn');
        renderLearnView();
      }
    });

    grid.appendChild(card);
  });
}

function initLedgerView() {
  document.getElementById('ledger-search').addEventListener('input', renderLedger);
  document.getElementById('ledger-filter').addEventListener('change', renderLedger);
}

// ─── LOOKUP VIEW ───
function initLookupView() {
  const input = document.getElementById('lookup-input');
  const btn = document.getElementById('btn-lookup');
  btn.addEventListener('click', () => lookupWord(input.value.trim()));
  input.addEventListener('keydown', e => { if (e.key === 'Enter') lookupWord(input.value.trim()); });
}

async function lookupWord(word) {
  if (!word) { showToast('Please enter a word to look up', 'error'); return; }

  // Already in collection? Jump straight to it.
  const existing = getAllWords().find(w => w.word.toLowerCase() === word.toLowerCase());
  if (existing) {
    state.currentWordIndex = getAllWords().findIndex(w => w.id === existing.id);
    saveState();
    switchView('learn');
    renderLearnView();
    showToast(`Showing "${existing.word}" from your collection`);
    return;
  }

  const resultEl = document.getElementById('lookup-result');
  resultEl.classList.remove('hidden');
  resultEl.innerHTML = `
    <div class="lookup-loading">
      <div class="spinner"></div>
      <p style="color:var(--text-muted);">Looking up "<strong style="color:var(--accent-gold)">${escapeHtml(word)}</strong>"…</p>
    </div>`;

  try {
    // Both are free, no key, CORS-enabled — fire in parallel for speed
    const [dictResult, wiktResult] = await Promise.allSettled([
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`)
        .then(r => { if (!r.ok) throw new Error('Word not found — check spelling or try manual entry below.'); return r.json(); }),
      fetchWiktionaryEtymology(word)
    ]);

    if (dictResult.status === 'rejected') throw new Error(dictResult.reason?.message || 'Word not found.');
    const wiktEtym = wiktResult.status === 'fulfilled' ? wiktResult.value : '';
    renderLookupForm(word, dictResult.value, wiktEtym);

  } catch (err) {
    resultEl.innerHTML = `
      <div style="text-align:center; padding:20px;">
        <div style="font-size:2rem; margin-bottom:12px;">⚠️</div>
        <p style="color:var(--accent-red); margin-bottom:16px;">${escapeHtml(err.message)}</p>
        <button class="btn btn-secondary" id="btn-manual-entry">Add Manually Instead</button>
      </div>`;
    document.getElementById('btn-manual-entry').addEventListener('click', () => renderManualEntry(word));
  }
}

// Free etymology from Wiktionary — no key, CORS-enabled via origin=* param
async function fetchWiktionaryEtymology(word) {
  try {
    const url = 'https://en.wiktionary.org/w/api.php?' + new URLSearchParams({
      action: 'query', titles: word, prop: 'revisions',
      rvprop: 'content', rvslots: 'main', format: 'json', origin: '*'
    });
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    let resp;
    try {
      resp = await fetch(url, {
        mode: 'cors',
        credentials: 'omit',
        signal: controller.signal
      });
    } finally {
      clearTimeout(timeout);
    }
    if (!resp.ok) return '';
    const data = await resp.json();
    const page = Object.values(data.query?.pages || {})[0];
    if (!page || page.missing !== undefined) return '';

    const wikitext = page.revisions?.[0]?.slots?.main?.['*']
                  || page.revisions?.[0]?.['*'] || '';
    if (!wikitext) return '';

    // Isolate the English section, then the Etymology section within it
    const engMatch = wikitext.match(/==English==([\s\S]*?)(?:\n==[^=]|$)/);
    const section = engMatch ? engMatch[1] : wikitext;
    const etymMatch = section.match(/===Etymology(?:\s*\d*)?===\s*\n([\s\S]*?)(?:===|$)/);
    if (!etymMatch) return '';

    return etymMatch[1]
      // {{der|en|la|verbum|t=word}} / {{bor|...}} / {{inh|...}} → "Latin verbum ('word')"
      .replace(/\{\{(?:der|bor|inh|uder|ubor)\|[^|]+\|([^|]+)\|([^|}\n]+)(?:\|t=([^|}]+))?\}\}/gi,
        (_, lang, w, t) => t ? `${lang} ${w} ('${t}')` : `${lang} ${w}`)
      // {{m|la|verbum|gloss}} or {{l|en|word}}
      .replace(/\{\{(?:m|l|cog|cognate)\|[^|]+\|([^|}\n]+)(?:\|([^|}\n=]+))?\}\}/gi,
        (_, w, gloss) => (gloss && !gloss.includes('=')) ? `${w} ('${gloss}')` : w)
      // {{affix|en|pre-|root|-suf}} → pre- + root + -suf
      .replace(/\{\{(?:affix|prefix|suffix|compound|blend)\|[^|]+\|([\s\S]*?)\}\}/gi,
        (_, parts) => parts.split('|').filter(p => p && !p.includes('=')).join(' + '))
      // {{gloss|text}} → (text)
      .replace(/\{\{gloss\|([^}]+)\}\}/gi, '($1)')
      // Strip remaining templates, wikilinks, bold/italic, list markers
      .replace(/\{\{[^}]+\}\}/g, '')
      .replace(/\[\[(?:[^\]|]+\|)?([^\]]+)\]\]/g, '$1')
      .replace(/'''?([^']+)'''?/g, '$1')
      .replace(/^[*#:;]+\s*/gm, '')
      .replace(/\n+/g, ' ').replace(/\s{2,}/g, ' ')
      .trim();
  } catch { return ''; }
}

function parseDictionaryData(data) {
  const entry = data[0];
  const phonetic = entry.phonetic ||
    (entry.phonetics || []).find(p => p.text)?.text || '';
  // origin field: dictionaryapi.dev includes this for many words — free, no extra call
  const origin = entry.origin || '';
  const meanings = entry.meanings || [];
  const partsOfSpeech = [...new Set(meanings.map(m => m.partOfSpeech))];
  const fullDefinition = meanings.map(m => {
    const defs = m.definitions.slice(0, 2).map(d => d.definition).join('; ');
    return `(${m.partOfSpeech}) ${defs}`;
  }).join('\n');
  const examples = [];
  meanings.forEach(m => m.definitions.forEach(d => {
    if (d.example && examples.length < 3) examples.push(d.example);
  }));
  const forms = {};
  meanings.forEach(m => { forms[m.partOfSpeech] = entry.word; });
  return { phonetic, partsOfSpeech, fullDefinition, examples, forms, origin };
}

function renderLookupForm(word, data, wiktEtym = '') {
  const resultEl = document.getElementById('lookup-result');
  const { phonetic, partsOfSpeech, fullDefinition, examples, forms, origin } = parseDictionaryData(data);
  const wordId = `lookup_${word.toLowerCase().replace(/\s+/g, '_')}`;

  // Best available etymology — dict origin beats Wiktionary (usually shorter & cleaner)
  const autoEtym = origin || wiktEtym;
  const etymSource = origin ? '📖 dictionary' : (wiktEtym ? '📚 Wiktionary' : '');

  resultEl.innerHTML = `
    <div style="margin-bottom:20px; padding-bottom:20px; border-bottom:1px solid var(--border);">
      <div style="display:flex; align-items:baseline; gap:12px; flex-wrap:wrap; margin-bottom:10px;">
        <span style="font-size:1.8rem; font-weight:800; color:var(--accent-gold);">${escapeHtml(word)}</span>
        <span style="color:var(--text-secondary); font-style:italic;">${escapeHtml(phonetic)}</span>
        <span class="word-pos">${partsOfSpeech.join(' / ')}</span>
      </div>
      <p style="color:var(--text-primary); line-height:1.7; white-space:pre-line;">${escapeHtml(fullDefinition)}</p>
    </div>

    ${examples.length ? `
    <div style="margin-bottom:20px;">
      <div class="section-label">Example Sentences (from dictionary)</div>
      ${examples.map(e => `<div class="example-item">${escapeHtml(e)}</div>`).join('')}
    </div>` : ''}

    <div style="margin-bottom:20px;">
      <div class="section-label" style="margin-bottom:6px;">
        Etymology &amp; Roots
        ${autoEtym
          ? `<span style="color:var(--accent-teal); font-weight:500; text-transform:none; letter-spacing:0; font-size:0.75rem; margin-left:6px;">✓ auto-filled via ${etymSource}</span>`
          : `<span style="color:var(--text-muted); font-weight:400; text-transform:none; letter-spacing:0; font-size:0.75rem; margin-left:6px;">(not found — <a href="https://en.wiktionary.org/wiki/${encodeURIComponent(word)}#English" target="_blank" rel="noopener" style="color:var(--accent-teal); text-decoration:none;">look up on Wiktionary ↗</a> then paste below)</span>`}
      </div>
      <textarea id="lookup-etymology" class="settings-input" rows="3"
        placeholder="Root words, Latin/Greek origins…"
        style="resize:vertical; line-height:1.6;">${escapeHtml(autoEtym)}</textarea>
    </div>

    <div style="margin-bottom:28px;">
      <div class="section-label" style="margin-bottom:6px;">
        Memory Hook
        <span style="color:var(--accent-purple); font-weight:400; text-transform:none; letter-spacing:0; font-size:0.78rem; margin-left:6px;">(write your own, or paste one from Claude)</span>
      </div>
      <div style="background:rgba(139,124,248,0.07); border:1px dashed rgba(139,124,248,0.3); border-radius:var(--radius-sm); padding:12px 14px; font-size:0.82rem; color:var(--text-secondary); margin-bottom:10px; line-height:1.7;">
        💡 Open <strong style="color:var(--accent-blue);">claude.ai</strong> in another tab and paste:<br>
        <span style="color:var(--accent-gold); font-family:var(--font-mono); font-size:0.8rem;">"Give me a vivid, story-based mnemonic for '${escapeHtml(word)}' — like how 'maverick' came from a real rancher named Maverick who refused to brand his cattle."</span>
      </div>
      <textarea id="lookup-mnemonic" class="settings-input" rows="4"
        placeholder="Paste your mnemonic here, or write one yourself…"
        style="resize:vertical; line-height:1.6;"></textarea>
    </div>

    <div style="display:flex; gap:10px;">
      <button class="btn btn-primary" id="btn-add-word">Add to My Collection →</button>
      <button class="btn btn-secondary" id="btn-skip-mnemonic">Add Without Mnemonic</button>
    </div>`;

  function saveWord(mnemonic, etymology) {
    const wordData = {
      id: wordId,
      word: word,
      pronunciation: phonetic,
      partOfSpeech: partsOfSpeech,
      definition: fullDefinition,
      forms,
      etymology: etymology || '',
      mnemonic: mnemonic || '(No mnemonic yet — look this word up again to add one)',
      examples,
      difficulty: 'medium',
      category: 'lookup',
      isLookup: true
    };
    addCustomWord(wordData);
  }

  document.getElementById('btn-add-word').addEventListener('click', () => {
    const mnemonic = document.getElementById('lookup-mnemonic').value.trim();
    const etymology = document.getElementById('lookup-etymology').value.trim();
    if (!mnemonic) { showToast('Add a memory hook first — it\'s the whole point!', 'error'); return; }
    saveWord(mnemonic, etymology);
  });

  document.getElementById('btn-skip-mnemonic').addEventListener('click', () => {
    saveWord('', document.getElementById('lookup-etymology').value.trim());
  });
}

function renderManualEntry(word) {
  const resultEl = document.getElementById('lookup-result');
  resultEl.innerHTML = `
    <p style="color:var(--text-secondary); font-size:0.85rem; margin-bottom:20px;">Dictionary couldn't find it — fill in what you know manually.</p>
    <div style="margin-bottom:16px;">
      <div class="section-label">Definition</div>
      <textarea id="manual-definition" class="settings-input" rows="2" placeholder="What does it mean?" style="resize:vertical;"></textarea>
    </div>
    <div style="margin-bottom:16px;">
      <div class="section-label">Memory Hook</div>
      <textarea id="manual-mnemonic" class="settings-input" rows="3" placeholder="Your mnemonic…" style="resize:vertical;"></textarea>
    </div>
    <div style="margin-bottom:24px;">
      <div class="section-label">Etymology (optional)</div>
      <textarea id="manual-etymology" class="settings-input" rows="2" placeholder="Root words, origin…" style="resize:vertical;"></textarea>
    </div>
    <button class="btn btn-primary" id="btn-add-manual">Add to Collection →</button>`;

  document.getElementById('btn-add-manual').addEventListener('click', () => {
    const definition = document.getElementById('manual-definition').value.trim();
    if (!definition) { showToast('Please add at least a definition', 'error'); return; }
    addCustomWord({
      id: `lookup_${word.toLowerCase().replace(/\s+/g, '_')}`,
      word,
      pronunciation: '',
      partOfSpeech: ['unknown'],
      definition,
      forms: {},
      etymology: document.getElementById('manual-etymology').value.trim() || '',
      mnemonic: document.getElementById('manual-mnemonic').value.trim() || '(No mnemonic yet)',
      examples: [],
      difficulty: 'medium',
      category: 'lookup',
      isLookup: true
    });
  });
}

function addCustomWord(wordData) {
  const idx = state.customWords.findIndex(w => w.id === wordData.id);
  if (idx !== -1) state.customWords[idx] = wordData;
  else state.customWords.push(wordData);
  saveState();
  const newIdx = getAllWords().findIndex(w => w.id === wordData.id);
  if (newIdx !== -1) { state.currentWordIndex = newIdx; saveState(); }
  showToast(`"${wordData.word}" added to your collection!`, 'success');
  switchView('learn');
  renderLearnView();
}

// ─── SETTINGS VIEW ───
function renderSettings() {
  const timerSlider = document.getElementById('settings-timer');
  timerSlider.value = state.settings.timerDuration;
  document.getElementById('settings-timer-display').textContent = `${state.settings.timerDuration} seconds`;
}

function initSettingsView() {
  document.getElementById('settings-timer').addEventListener('input', e => {
    state.settings.timerDuration = parseInt(e.target.value);
    document.getElementById('settings-timer-display').textContent = `${state.settings.timerDuration} seconds`;
    saveState();
  });

  document.getElementById('btn-reset').addEventListener('click', () => {
    if (confirm('Reset all progress? This cannot be undone.')) {
      localStorage.removeItem('vocabforge_state');
      state.seenWords = new Set();
      state.knownWords = new Set();
      state.customWords = [];
      state.quizScores = {};
      state.totalXP = 0;
      state.globalStreak = 0;
      state.currentWordIndex = 0;
      updateHeaderStats();
      renderLearnView();
      showToast('Progress reset', '');
    }
  });
}

// ─── HELPERS ───
function blankWord(sentence, word) {
  const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`\\b${escapedWord}\\b`, 'gi');
  return sentence.replace(regex, '<span class="q-blank">_______</span>');
}

function maskWord(text, word) {
  const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`\\b${escapedWord}[a-z]*\\b`, 'gi');
  return text.replace(regex, '[???]');
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function levenshteinDistance(a, b) {
  const dp = Array.from({ length: a.length + 1 }, (_, i) =>
    Array.from({ length: b.length + 1 }, (_, j) => i === 0 ? j : j === 0 ? i : 0)
  );
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
      dp[i][j] = a[i-1] === b[j-1]
        ? dp[i-1][j-1]
        : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
  return dp[a.length][b.length];
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function showToast(message, type = '') {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.className = `toast ${type}`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function launchConfetti() {
  const colors = ['#e2b86a','#8b7cf8','#4dc9b0','#4caf7d','#e25555'];
  const container = document.createElement('div');
  container.className = 'confetti-container';
  document.body.appendChild(container);
  for (let i = 0; i < 40; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.cssText = `
      left: ${Math.random() * 100}%;
      top: -10px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      width: ${6 + Math.random() * 8}px;
      height: ${6 + Math.random() * 8}px;
      animation-delay: ${Math.random() * 0.5}s;
      animation-duration: ${1.5 + Math.random()}s;`;
    container.appendChild(piece);
  }
  setTimeout(() => container.remove(), 2500);
}

// ─── INIT ───
function init() {
  loadState();
  initNav();
  initLearnView();
  initQuizView();
  initLedgerView();
  initLookupView();
  initSettingsView();
  renderLearnView();
  updateHeaderStats();

  // Add progress bar to word card
  const wordNav = document.querySelector('.word-nav');
  if (wordNav && !document.querySelector('.word-progress-bar')) {
    const bar = document.createElement('div');
    bar.className = 'word-progress-bar';
    bar.innerHTML = '<div class="word-progress-fill"></div>';
    wordNav.after(bar);
  }
}

document.addEventListener('DOMContentLoaded', init);
