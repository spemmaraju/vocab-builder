# ⚡ VocabForge — Vocabulary Builder

An interactive vocabulary builder with mnemonics, etymology, and spaced-practice quizzes.

## Quick Start

```bash
cd vocab-builder
python3 server.py
```

Then open **http://localhost:5000** in your browser.

> No dependencies needed — uses Python's built-in `http.server`.

---

## Features

### Learn Mode
- One word at a time with full definition, pronunciation, and part of speech
- **Memory Hook** — vivid mnemonic story or etymology-based image for each word
- Collapsible etymology showing Latin/Greek roots and related words
- Word forms (noun, verb, adjective, adverb variants)
- 3 example sentences with the word highlighted
- Mark words as **Known** to track progress
- Progress bar + keyboard navigation (`→` next, `←` prev, `k` toggle known)

### Quiz Mode — 4 Types
| Type | Description |
|------|-------------|
| **Word → Definition** | See the word, pick the correct definition (multiple choice) |
| **Definition → Word** | Read the definition, pick or identify the word |
| **Fill in the Blank** | Sentence with the word removed — pick which word fits |
| **✨ Story Time** | The mnemonic is shown with the word masked — type the word |

**Timer:** 30-second countdown (adjustable in Settings)
**Progressive hints** appear automatically:
- At 67% time remaining → first letter
- At 50% → etymology/root clue
- At 27% → fragment of the mnemonic hook

**Scoring:** 100 pts (no hints) → 70 (1 hint) → 50 (2 hints) → 10 (3 hints)
**Streak bonus:** ×1.5 XP every 3 correct in a row

### Word Ledger
- Every word you've seen or looked up, in a searchable/filterable grid
- Status badges: Known / Learning / Unseen / Lookup
- Click any word to jump straight to its full card in Learn mode

### Word Lookup
- Type any English word → Claude generates a full vocabulary card:
  - Definition, pronunciation, word forms
  - Real etymology with root breakdown
  - Custom mnemonic story (in the style of the Maverick example)
  - 3 example sentences
- Looked-up words are saved to your collection and appear in the Ledger

### Settings
- Anthropic API key (stored locally in browser only)
- Adjustable quiz timer (15–60 seconds)
- Keyboard shortcuts reference
- Reset all progress

---

## Word Lookup Setup

To enable AI-powered lookups for any word:

1. Get an API key from [console.anthropic.com](https://console.anthropic.com)
2. Open the app → **Settings** → paste your `sk-ant-...` key → Save
3. Go to **Lookup** → type any word → hit Look Up

The server proxies the request to Anthropic's API. Your key is stored in browser localStorage only.

---

## Pre-loaded Words (35)

Maverick · Abscond · Acrimony · Alacrity · Ambivalent · Ameliorate · Anachronism · Anomaly · Antipathy · Arduous · Astute · Audacious · Austere · Banal · Bellicose · Benevolent · Cacophony · Capricious · Cogent · Complacent · Copious · Credulous · Dauntless · Debacle · Deleterious · Didactic · Ebullient · Egregious · Ephemeral · Equanimity · Equivocate · Erudite · Euphemism · Exacerbate · Gregarious · Impecunious · Loquacious · Mendacious · Obsequious · Perfidious · Sanguine · Temerity

---

## File Structure

```
vocab-builder/
├── index.html       # App shell
├── styles.css       # Dark theme styles
├── server.py        # Local HTTP server + API proxy (no dependencies)
├── js/
│   ├── data.js      # 35 pre-built words with mnemonics
│   └── app.js       # All application logic
└── README.md
```

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `→` or `n` | Next word |
| `←` or `p` | Previous word |
| `k` | Toggle Known status |
| `Enter` | Submit quiz answer (text input) |
