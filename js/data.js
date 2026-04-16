// VocabForge — Pre-built Word Database
// 35 GRE-level words with etymologies, mnemonics, and examples

const WORD_DATABASE = [
  {
    id: "maverick",
    word: "Maverick",
    pronunciation: "MAV-er-ik",
    partOfSpeech: ["noun", "adjective"],
    definition: "An independent-minded person who refuses to follow the crowd; someone who behaves unconventionally and avoids conforming to established rules or norms.",
    forms: {
      noun: "maverick",
      adjective: "maverick (e.g., a maverick politician)"
    },
    etymology: "Named after Samuel Augustus Maverick (1803–1870), a Texas rancher who, unlike his neighbors, refused to brand his cattle. Neighboring ranchers started calling any unbranded steer a 'maverick.' The meaning expanded to anyone who refuses to be 'branded' by convention.",
    mnemonic: "The story IS the definition. Samuel MAVERICK refused to brand his cows when every rancher in Texas did. An unbranded calf became a 'maverick.' Now, any person who refuses to be 'stamped' by society's expectations is a maverick. Picture a lone calf walking away from the branding iron, head held high.",
    examples: [
      "Elon Musk is often described as a business maverick who disrupts industries others consider untouchable.",
      "Her maverick approach to therapy — combining art, music, and dialogue — divided the medical community.",
      "The senator was a maverick within her own party, voting against her colleagues on climate legislation."
    ],
    difficulty: "easy",
    category: "character / personality"
  },
  {
    id: "abscond",
    word: "Abscond",
    pronunciation: "ab-SKOND",
    partOfSpeech: ["verb"],
    definition: "To leave hurriedly and secretly, typically to escape from custody or avoid the consequences of wrongdoing.",
    forms: {
      verb: "abscond / absconded / absconding",
      noun: "absconder"
    },
    etymology: "From Latin 'abscondere' — ab (away, off) + condere (to hide, to store). Literally: 'to hide away completely.'",
    mnemonic: "ABS-CONNED: a thief who worked out his ABS every day finally used those abs to VAULT over the prison wall and ABSCOND with the loot. He was literally 'ABS-CONNED' — conned his way out using his physique. Or simpler: picture someone hiding their ABSolute CONfidence as they sneak away in the night.",
    examples: [
      "The treasurer absconded with $2 million in company funds, leaving behind only an empty safe.",
      "The suspect absconded before police could serve the arrest warrant.",
      "She absconded from the boarding school at midnight, duffel bag slung over one shoulder."
    ],
    difficulty: "medium",
    category: "action / movement"
  },
  {
    id: "acrimony",
    word: "Acrimony",
    pronunciation: "AK-ri-moh-nee",
    partOfSpeech: ["noun"],
    definition: "Bitterness and ill feeling, especially in speech or manner; sharpness or harshness of tone.",
    forms: {
      noun: "acrimony",
      adjective: "acrimonious",
      adverb: "acrimoniously"
    },
    etymology: "From Latin 'acrimonia' — from 'acer' (sharp, bitter, pungent). The same root gives us 'acrid' (bitter smell) and 'acerbic' (harshly critical).",
    mnemonic: "ACRID + MONEY = ACRIMONY. Imagine a bitter divorce where the couple fights over who gets the money — the arguments are as ACRID (sharp, burning) as battery acid. Every sentence is a stab. That burning, poisonous bitterness is ACRIMONY. When you smell something acrid, feel the bitterness — that's acrimony in word form.",
    examples: [
      "The divorce proceedings were marked by such acrimony that the couple could not be in the same room.",
      "Years of acrimony between the two departments had made collaboration nearly impossible.",
      "His acrimonious resignation letter burned every bridge he had built over a decade."
    ],
    difficulty: "medium",
    category: "emotion / attitude"
  },
  {
    id: "alacrity",
    word: "Alacrity",
    pronunciation: "uh-LAK-ri-tee",
    partOfSpeech: ["noun"],
    definition: "Brisk and cheerful readiness; eager willingness to do something, combined with speed.",
    forms: {
      noun: "alacrity",
      adjective: "alacritous (rare)"
    },
    etymology: "From Latin 'alacritas' — from 'alacer' (brisk, lively, eager). The same root gives us 'alert.'",
    mnemonic: "A LARK + CITY = ALACRITY. Picture a cheerful LARK (a famously joyful bird) flying eagerly through the CITY at dawn, ready for the day. That bright-eyed, springy, 'let's go!' energy is alacrity. Or: think 'A LACK of laziness' — someone with alacrity has NO LACK of enthusiasm. They jump at any opportunity.",
    examples: [
      "She accepted the job offer with alacrity, barely waiting for the recruiter to finish the sentence.",
      "The team responded to the new challenge with surprising alacrity, delivering results in half the expected time.",
      "He leaped from his chair with alacrity when his name was finally called."
    ],
    difficulty: "hard",
    category: "emotion / attitude"
  },
  {
    id: "ambivalent",
    word: "Ambivalent",
    pronunciation: "am-BIV-uh-lent",
    partOfSpeech: ["adjective"],
    definition: "Having mixed or contradictory feelings about something or someone; uncertain about which of two opposing feelings is stronger.",
    forms: {
      adjective: "ambivalent",
      noun: "ambivalence",
      adverb: "ambivalently"
    },
    etymology: "From Latin 'ambi' (both, on both sides) + 'valentia' (strength, power — from valere, to be strong). Literally: 'strong in both directions simultaneously.'",
    mnemonic: "AMBI (both) + VALENT (Valentine). Imagine getting TWO Valentine's cards from two people you like equally. You hold one in each hand, arms stretched out to BOTH sides, completely torn. That hopeless 'I feel strongly BOTH ways' paralysis is ambivalence. AMBI = both directions; VALENT = feeling strong about it.",
    examples: [
      "She felt deeply ambivalent about accepting the promotion — excited by the salary, terrified by the responsibility.",
      "His ambivalence toward his hometown showed in how he both mocked it and defended it to outsiders.",
      "The country remained ambivalent about military intervention, polls showing an almost perfect 50/50 split."
    ],
    difficulty: "medium",
    category: "emotion / attitude"
  },
  {
    id: "ameliorate",
    word: "Ameliorate",
    pronunciation: "uh-MEEL-yuh-rayt",
    partOfSpeech: ["verb"],
    definition: "To make something bad or unsatisfactory better; to improve a difficult or unsatisfactory situation.",
    forms: {
      verb: "ameliorate / ameliorated / ameliorating",
      noun: "amelioration",
      adjective: "ameliorative"
    },
    etymology: "From French 'améliorer' — from Latin 'melior' (better). The root 'mel-/melio-' means 'better,' same as in 'meliorate' and seen in 'meliorism' (the belief the world can be made better).",
    mnemonic: "A + MELIO (better) + RATE. Think of a doctor named Dr. Amelio who RATES patients 1-10 on recovery. When his rating goes UP (better), the patient is AMELIOrating. Or: 'A MEAL always makes things better.' You're having a terrible day and someone brings you a meal — that's ameliorating the situation. MEAL → MELIO → AMELIORATE.",
    examples: [
      "The new medication significantly ameliorated her chronic pain, allowing her to return to work.",
      "Aid organizations worked tirelessly to ameliorate the suffering caused by the flood.",
      "No amount of apology could fully ameliorate the damage done by the public accusation."
    ],
    difficulty: "hard",
    category: "change / improvement"
  },
  {
    id: "anachronism",
    word: "Anachronism",
    pronunciation: "uh-NAK-ruh-niz-um",
    partOfSpeech: ["noun"],
    definition: "A thing belonging or appropriate to a period other than that in which it exists; something placed in the wrong time period, especially something outdated surviving into the present.",
    forms: {
      noun: "anachronism",
      adjective: "anachronistic",
      adverb: "anachronistically"
    },
    etymology: "From Greek 'anachronismos' — ana (against, back) + chronos (time). Literally: 'against time' or 'placed backwards in time.'",
    mnemonic: "ANA (against) + CHRONOS (time, like chronological). Imagine ANA the time traveler who moves AGAINST the flow of time, showing up in ancient Rome with a smartphone and a Starbucks cup. That smartphone in ancient Rome is an ANACHRONISM — something violently out of its time. Whenever you see 'CHRON,' think TIME (chronology, chronicle, chronometer).",
    examples: [
      "A fax machine in a modern startup feels like a charming anachronism.",
      "The film was criticized for its anachronisms — characters using phrases that weren't coined until decades later.",
      "Sending a handwritten letter today feels like a deliberate anachronism, which is exactly why it means so much."
    ],
    difficulty: "medium",
    category: "time / context"
  },
  {
    id: "anomaly",
    word: "Anomaly",
    pronunciation: "uh-NOM-uh-lee",
    partOfSpeech: ["noun"],
    definition: "Something that deviates from what is standard, normal, or expected; an irregularity or inconsistency.",
    forms: {
      noun: "anomaly",
      adjective: "anomalous",
      adverb: "anomalously"
    },
    etymology: "From Greek 'anomalos' — an (not) + homalos (even, regular, from homos = same). Literally: 'not the same/even.' Not following the norm.",
    mnemonic: "AN + OMALY sounds like AN + ABNORMAL-Y. Strip it apart: AN = 'not' and OMALOS = 'normal/even.' So ANOMALY = literally 'not normal.' It's hidden in the spelling: ANOM is almost ABNORM with letters shuffled. Whenever something feels off — like a warm day in January or a left-handed pitcher throwing 100mph — that's your ANOMALY moment.",
    examples: [
      "Scientists discovered an anomaly in the data — one data point that refused to fit any known pattern.",
      "Her ability to remain calm under extreme pressure was an anomaly among her peers.",
      "The blood test revealed an anomaly that required further investigation."
    ],
    difficulty: "medium",
    category: "deviation / difference"
  },
  {
    id: "antipathy",
    word: "Antipathy",
    pronunciation: "an-TIP-uh-thee",
    partOfSpeech: ["noun"],
    definition: "A deep-seated feeling of dislike; strong aversion or hostility toward someone or something.",
    forms: {
      noun: "antipathy",
      adjective: "antipathetic",
      adverb: "antipathetically"
    },
    etymology: "From Greek 'antipatheia' — anti (against) + pathos (feeling, suffering). Literally: 'feeling against.' The root 'pathos/path' appears in sympathy, empathy, apathy, and pathology.",
    mnemonic: "The -PATHY family: symPATHY = feeling WITH someone. emPATHY = feeling INTO someone. aPATHY = feeling NOTHING. antiPATHY = feeling AGAINST someone. They're all variations on PATHOS (Greek for feeling). Anti = against. So antipathy is 'feeling strongly against.' Picture the anti- prefix as a force-field repelling the other person.",
    examples: [
      "His antipathy toward bureaucracy was evident in every interaction with government offices.",
      "Despite working together for years, the two editors maintained a deep antipathy that permeated the entire office.",
      "She couldn't explain her immediate antipathy toward him — it was instinctive, almost physical."
    ],
    difficulty: "medium",
    category: "emotion / attitude"
  },
  {
    id: "arduous",
    word: "Arduous",
    pronunciation: "AR-joo-us",
    partOfSpeech: ["adjective"],
    definition: "Involving or requiring strenuous effort; very difficult and tiring; hard to achieve or overcome.",
    forms: {
      adjective: "arduous",
      adverb: "arduously",
      noun: "arduousness"
    },
    etymology: "From Latin 'arduus' — meaning steep, high, difficult. Used by Latin writers to describe steep mountains that required great effort to climb.",
    mnemonic: "ARD = HARD with the H dropped. ARDUOUS = HARDUOUS — the H fell off because it was too exhausted to hold on. Read it phonetically and you hear it: ARD-you-us = 'HARD, you, us' — it's hard for you, hard for us, hard for everyone! Imagine a mountain climber gasping 'This is so HARD-uous!' as he scales a sheer cliff.",
    examples: [
      "The ascent of the north face was arduous even for the most experienced climbers.",
      "After the arduous interview process — five rounds and a case study — she finally received an offer.",
      "Writing a dissertation is an arduous undertaking, often taking years of painstaking research."
    ],
    difficulty: "medium",
    category: "difficulty / effort"
  },
  {
    id: "astute",
    word: "Astute",
    pronunciation: "uh-STOOT",
    partOfSpeech: ["adjective"],
    definition: "Having an ability to accurately assess situations or people and turn this to one's advantage; shrewd, clever in practical matters.",
    forms: {
      adjective: "astute",
      adverb: "astutely",
      noun: "astuteness / astutity (rare)"
    },
    etymology: "From Latin 'astutus' — crafty, shrewd, from 'astus' (cunning, craft). Related to the cleverness of craftsmen who must assess materials quickly.",
    mnemonic: "ASTUTE = AS + ACUTE. An astute person is AS ACUTE (sharp) as a razor. Think of Sherlock Holmes — he sees everything with acute (sharp) precision. AS ACUTE as Holmes = ASTUTE. Picture his magnifying glass making everything sharp and clear — that's astuteness. Or: 'AS TOOT (tooting his own horn)' — someone so sharp they have every right to boast.",
    examples: [
      "The astute investor recognized the company's potential three years before anyone else.",
      "She made an astute observation that changed the direction of the entire meeting.",
      "He was an astute judge of character — rarely fooled by charm or first impressions."
    ],
    difficulty: "medium",
    category: "intelligence / perception"
  },
  {
    id: "audacious",
    word: "Audacious",
    pronunciation: "aw-DAY-shus",
    partOfSpeech: ["adjective"],
    definition: "Showing a willingness to take bold, surprising risks; daring or fearless, sometimes to the point of impudence or recklessness.",
    forms: {
      adjective: "audacious",
      adverb: "audaciously",
      noun: "audacity",
      verb: "to be audacious (no single verb form)"
    },
    etymology: "From Latin 'audax' (bold, daring) — from 'audere' (to dare). The same root gives us 'audacity.' Related to 'audio' only superficially — 'audere' means dare, while 'audire' means hear.",
    mnemonic: "AUDI-ACIOUS. Picture someone so AUDACIOUS they drive an AUDI at 200mph with the top down, laughing into the wind. They DARE (audere = to dare) to do what no one else will. Or: Obama's campaign slogan 'The Audacity of Hope' — audacity means bold daring. The AUDI-ACIOUS driver is so daring, the car brand practically sounds like the word.",
    examples: [
      "It was audacious of the young architect to submit a design that completely ignored the brief.",
      "Her audacious negotiation tactics shocked the board — but they worked.",
      "The spy executed an audacious escape from what everyone believed was an impenetrable facility."
    ],
    difficulty: "medium",
    category: "character / personality"
  },
  {
    id: "austere",
    word: "Austere",
    pronunciation: "aw-STEER",
    partOfSpeech: ["adjective"],
    definition: "Severe or strict in manner or attitude; having no pleasures or comforts; plain and without decoration; (of an economic policy) reducing government spending.",
    forms: {
      adjective: "austere",
      adverb: "austerely",
      noun: "austerity"
    },
    etymology: "From Greek 'austeros' — harsh, bitter (like unripe grapes). The Greeks used it to describe dry, astringent wines. Evolved to mean any kind of harsh simplicity.",
    mnemonic: "AUSTERE = AUSTRALIA's outback at its harshest. Vast, bare, no luxury, brutal sun, no decoration — pure stripped-down survival. Or picture an AUSTER-ian monastery: stone walls, no color, cold floors, silent monks in plain robes, living on bread and water. That bleak, unornamented, self-denying harshness is austerity. When governments cut budgets, they call it 'austerity measures' — removing the comfort.",
    examples: [
      "The professor maintained an austere manner that students found intimidating but ultimately respected.",
      "She decorated her apartment in an austere style — white walls, no curtains, a single lamp.",
      "The government's austerity measures slashed public services to address the deficit."
    ],
    difficulty: "medium",
    category: "character / style"
  },
  {
    id: "banal",
    word: "Banal",
    pronunciation: "buh-NAL or BAY-nul",
    partOfSpeech: ["adjective"],
    definition: "So common and ordinary as to seem trite and unoriginal; lacking any interesting or fresh quality; predictable and dull.",
    forms: {
      adjective: "banal",
      adverb: "banally",
      noun: "banality"
    },
    etymology: "From Old French 'banal' — relating to feudal service obligatory to all (from 'ban,' a public proclamation). The village mill, oven, and wine-press were 'banal' — everyone had to use them — so they became associated with what was common to all, hence ordinary and dull.",
    mnemonic: "BANAL = BAN + AL. Things so painfully ordinary and dull they should be BANNED! A BANAL banana — the most yawn-inducing, everyday fruit on the planet. SO common it's boring. 'Oh, a banana. How original.' Or think: 'BAN-AL small talk' — small talk is the king of banality. 'Nice weather we're having' is the most banal sentence ever uttered.",
    examples: [
      "The film's plot was banal — predictable twists, stock characters, and a saccharine ending.",
      "He had a genius for making profound ideas sound banal in conversation.",
      "Beneath the banality of suburban life, the novel finds genuine drama and despair."
    ],
    difficulty: "medium",
    category: "quality / value"
  },
  {
    id: "bellicose",
    word: "Bellicose",
    pronunciation: "BEL-ih-kohs",
    partOfSpeech: ["adjective"],
    definition: "Demonstrating aggression and willingness to fight; inclined or eager to quarrel, fight, or go to war.",
    forms: {
      adjective: "bellicose",
      adverb: "bellicosely",
      noun: "bellicosity"
    },
    etymology: "From Latin 'bellicosus' — from 'bellum' (war). The same root gives us 'belligerent' (engaged in war), 'antebellum' (before the Civil War), and 'rebel' (re + bellum = to make war again).",
    mnemonic: "BELLY + CLOSE = BELLICOSE. A bellicose person gets BELLY-CLOSE to your face — chest-to-chest, nose-to-nose, looking for a fight! They're always itching for conflict. Or remember: BELLI = BELLY (as in war-belly, aggressive gut) and the -COSE ending = full of it (like verbose = full of words, lachrymose = full of tears). BELLI + full of = full of fight.",
    examples: [
      "The nation's bellicose rhetoric alarmed neighboring countries and drew international condemnation.",
      "He was known for a bellicose negotiating style — making demands rather than seeking compromise.",
      "The editorial board was surprised by the senator's bellicose response to a mild policy critique."
    ],
    difficulty: "hard",
    category: "character / attitude"
  },
  {
    id: "benevolent",
    word: "Benevolent",
    pronunciation: "buh-NEV-uh-lunt",
    partOfSpeech: ["adjective"],
    definition: "Well-meaning and kindly; generous in giving; intending or showing good will toward others.",
    forms: {
      adjective: "benevolent",
      adverb: "benevolently",
      noun: "benevolence"
    },
    etymology: "From Latin 'benevolens' — bene (well, good) + volens (wishing, from velle = to want/wish). Literally: 'wishing well for others.' Compare with 'malevolent' — mal (bad) + volens = wishing harm.",
    mnemonic: "BENE (good) + VOLENT (wishing). BENE = good (as in BENEficial, BENEfit, BENEfactor). VOLENT = wishing (as in VOLunteer — voluntarily wishing to help). A BENEVOLENT person BENEficially VOLunteers to help. Santa Claus is the world's most benevolent figure — he WISHES GOOD THINGS for everyone. MALEVOLENT is the evil twin: MALLY wishes you harm.",
    examples: [
      "The benevolent donor funded the entire hospital wing anonymously.",
      "Her benevolent reputation was built over decades of quiet charity work.",
      "Even a benevolent dictatorship is still a dictatorship — good intentions don't substitute for rights."
    ],
    difficulty: "easy",
    category: "character / morality"
  },
  {
    id: "cacophony",
    word: "Cacophony",
    pronunciation: "kuh-KOF-uh-nee",
    partOfSpeech: ["noun"],
    definition: "A harsh, discordant mixture of sounds; a jarring, unpleasant combination of noises.",
    forms: {
      noun: "cacophony",
      adjective: "cacophonous",
      adverb: "cacophonously"
    },
    etymology: "From Greek 'kakophonia' — kakos (bad, ugly) + phone (sound, voice). Literally: 'bad sound.' The root 'kakos' = bad (as in caca in many languages) and 'phone' = sound (as in microphone, saxophone, telephone).",
    mnemonic: "CAC + O + PHONY = bad + sound + fake. A CACO-PHONY is literally BAD (kakos = caca = bad) SOUND (phone). Think of the worst fake band you've ever heard — out-of-tune guitars, a drummer who can't keep time, someone screaming into a microphone. That's a CACOPHONY. CACOPHONY = CACA (garbage) + PHONY (fake) music. Your ears are suffering.",
    examples: [
      "The cacophony of jackhammers, honking taxis, and construction alarms made the city unbearable at rush hour.",
      "She opened the door to a cacophony of children shouting, pots clanging, and the TV at full volume.",
      "The experimental composer deliberately created cacophony, arguing that discomfort forces true listening."
    ],
    difficulty: "medium",
    category: "sound / perception"
  },
  {
    id: "capricious",
    word: "Capricious",
    pronunciation: "kuh-PRISH-us",
    partOfSpeech: ["adjective"],
    definition: "Given to sudden and unaccountable changes of mood, behavior, or ideas; impulsive and unpredictable.",
    forms: {
      adjective: "capricious",
      adverb: "capriciously",
      noun: "capriciousness / caprice"
    },
    etymology: "From Italian 'capriccio' — originally meaning a sudden shiver (of fear or excitement). Likely from 'capra' (goat in Latin and Italian). Goats are famous for jumping erratically and unpredictably from rock to rock. Capricorn (the zodiac goat) shares this root.",
    mnemonic: "CAPRI + CIOUS = GOAT + full of. CAPRA = goat in Italian/Latin. CAPRICORN is the zodiac GOAT. Goats leap UNPREDICTABLY from rock to rock with no logical pattern — you never know where they'll land next. A capricious person IS that goat. They change their mind as randomly as a goat changes direction on a cliff face. Picture a mountain goat mid-leap — that's capriciousness.",
    examples: [
      "The capricious weather on the island shifted from blazing sun to thunderstorm in minutes.",
      "Her capricious management style left employees anxious — they never knew which version of her would walk in.",
      "Ancient peoples attributed natural disasters to capricious gods who acted on whim rather than reason."
    ],
    difficulty: "medium",
    category: "character / behavior"
  },
  {
    id: "cogent",
    word: "Cogent",
    pronunciation: "KOH-jent",
    partOfSpeech: ["adjective"],
    definition: "Clear, logical, and convincing; powerfully persuasive; (of an argument) so well-constructed and reasoned that it compels agreement.",
    forms: {
      adjective: "cogent",
      adverb: "cogently",
      noun: "cogency"
    },
    etymology: "From Latin 'cogens' — from 'cogere' (to drive together, compel, force). Co (together) + agere (to drive, act). Literally: 'driving thoughts together' into a unified, compelling case.",
    mnemonic: "COG + ENT = COG + GENT. A COGENT argument has all its COGS turning in sync — like a perfect machine where every gear meshes with the next, driving toward an inevitable conclusion. Or: a gentle GENT (gentlemanly scholar) who presents COGS of logic so well-oiled and interlocking that you have no choice but to agree. COGENT = cogwork logic.",
    examples: [
      "Her cogent argument dismantled the opposing view without a single logical gap.",
      "The brief was the most cogent legal document the judge had read in years.",
      "He couldn't find a cogent reason to reject the offer, so he accepted."
    ],
    difficulty: "hard",
    category: "reasoning / communication"
  },
  {
    id: "complacent",
    word: "Complacent",
    pronunciation: "kum-PLAY-sunt",
    partOfSpeech: ["adjective"],
    definition: "Showing smug or uncritical satisfaction with oneself or one's achievements; so content with the status quo that one doesn't notice or address problems.",
    forms: {
      adjective: "complacent",
      adverb: "complacently",
      noun: "complacency / complacence"
    },
    etymology: "From Latin 'complacere' — com (thoroughly/intensely) + placere (to please). Literally: 'to please oneself thoroughly.' The problem is being so thoroughly pleased with yourself that you stop growing.",
    mnemonic: "COM + PLACE + NT = COMpletely PLACEd in a comfortable SPOT (place) that you Never Try harder. You're COM-PLETELY PLA-CENTLY sitting in your comfy place. Picture a cat in a sunbeam — utterly content, eyes half-closed, not noticing the mouse that just ran by. That smug self-satisfaction is complacency. The danger: while you're content, the world keeps moving.",
    examples: [
      "After years of market dominance, the company grew complacent and failed to innovate.",
      "The coach warned against complacency after the easy win — the next opponent was much stronger.",
      "She was complacent about her health until the test results arrived."
    ],
    difficulty: "easy",
    category: "character / attitude"
  },
  {
    id: "copious",
    word: "Copious",
    pronunciation: "KOH-pee-us",
    partOfSpeech: ["adjective"],
    definition: "Abundant in supply or quantity; large in amount; producing or yielding plentifully.",
    forms: {
      adjective: "copious",
      adverb: "copiously",
      noun: "copiousness"
    },
    etymology: "From Latin 'copiosus' — from 'copia' (abundance, plenty, supply). The word 'cornucopia' (horn of plenty) uses the same 'copia' root. Literally the horn overflowing with COPIOUS abundance.",
    mnemonic: "CORNucopia = CORN + COPIA (abundance). COP + IOUS: A COP who eats COPIOUS amounts of donuts — there's a COPI-ous supply at the police station. Or just remember cornuCOPIA — the harvest horn overflowing with fruits, vegetables, and grain. That overflowing abundance IS COPIA. COPIOUS = cornucopia-level amounts of something.",
    examples: [
      "She took copious notes during the lecture, filling three notebooks front to back.",
      "The region receives copious rainfall from May through October, making it ideal for agriculture.",
      "He produced copious amounts of work — three novels, a dozen short stories, and countless essays in a single decade."
    ],
    difficulty: "easy",
    category: "quantity / scale"
  },
  {
    id: "credulous",
    word: "Credulous",
    pronunciation: "KREJ-oo-lus",
    partOfSpeech: ["adjective"],
    definition: "Having too great a readiness to believe things without sufficient evidence; gullible; naively trusting.",
    forms: {
      adjective: "credulous",
      adverb: "credulously",
      noun: "credulity",
      opposite: "incredulous (disbelieving)"
    },
    etymology: "From Latin 'credulus' — from 'credere' (to believe, to trust). The same root gives us: credit (trust extended), credential (proof of trustworthiness), creed (what one believes), and incredulous (disbelieving).",
    mnemonic: "CRED + ULOUS = CREDIT + too willing. A CREDULOUS person gives CREDIT (trust) to every crazy story they hear. 'You won a million dollars from a Nigerian prince? I believe you!' The credulous person hands out CRED(it) like candy. Compare: inCREDulous = doesn't believe it; CREDulous = believes everything. One in, one out — the 'in' makes you NOT believe.",
    examples: [
      "He was so credulous that he sent money to three different 'charity' scams in a single year.",
      "The con artist specifically targeted the elderly, betting on credulity and loneliness.",
      "A credulous audience is any politician's dream and any journalist's nightmare."
    ],
    difficulty: "medium",
    category: "intelligence / perception"
  },
  {
    id: "dauntless",
    word: "Dauntless",
    pronunciation: "DAWNT-lis",
    partOfSpeech: ["adjective"],
    definition: "Showing fearlessness and determination; impossible to intimidate or discourage; intrepid.",
    forms: {
      adjective: "dauntless",
      adverb: "dauntlessly",
      noun: "dauntlessness"
    },
    etymology: "From Old French 'danter' — to tame (from Latin 'domitare,' to subdue). 'Daunt' = to intimidate/discourage. DAUNTLESS = less able to be daunted. The suffix -less means 'without' (hopeless, fearless, dauntless).",
    mnemonic: "DAUNT + LESS = less able to be daunted. To DAUNT = to frighten. DAUNTLESS = FRIGHT-LESS. The math is simple: DAUNT - the ability to feel daunt = DAUNTLESS. Picture a warrior who every time an enemy tries to scare them, the scare bounces off like rubber. They feel LESS daunt each time. Zero daunt. Totally dauntless. Lionhearted.",
    examples: [
      "The dauntless journalist continued her reporting despite repeated death threats.",
      "Even in the face of catastrophic loss, the dauntless crew refused to abandon the rescue mission.",
      "Her dauntless spirit in the courtroom earned her the nickname 'Iron Counsel.'"
    ],
    difficulty: "medium",
    category: "character / courage"
  },
  {
    id: "debacle",
    word: "Debacle",
    pronunciation: "di-BAH-kul or day-BAH-kul",
    partOfSpeech: ["noun"],
    definition: "A sudden, complete, and often humiliating failure or disaster; a chaotic collapse or rout.",
    forms: {
      noun: "debacle (plural: debacles)"
    },
    etymology: "From French 'débâcle' — from 'débâcler' (to unbar, to break up). Originally described the violent, chaotic breaking-up of ice on a frozen river in spring — a thunderous, destructive cascade. The metaphor: civilized order suddenly collapsing into chaotic ruin.",
    mnemonic: "DE + BACK + LE. A DEBACLE DE-BACKS you — it breaks your back completely. Or: picture a frozen French river in spring. The ice cracks with a BOOM. Giant chunks smash together. Floods roar through the village. That thunderous, unstoppable collapse of something frozen solid into total chaos IS the original debacle. Now we use it whenever a plan falls apart spectacularly.",
    examples: [
      "The product launch was a debacle — servers crashed, orders were lost, and customers flooded social media with complaints.",
      "The military campaign ended in a debacle that cost three generals their careers.",
      "What began as a routine merger turned into a legal debacle spanning four years and three countries."
    ],
    difficulty: "medium",
    category: "failure / disaster"
  },
  {
    id: "deleterious",
    word: "Deleterious",
    pronunciation: "del-uh-TEER-ee-us",
    partOfSpeech: ["adjective"],
    definition: "Causing harm or damage; injurious to health or well-being; harmful in a gradual or subtle way.",
    forms: {
      adjective: "deleterious",
      adverb: "deleteriously",
      noun: "deleteriousness"
    },
    etymology: "From Greek 'deleterios' — from 'deleisthai' (to harm, destroy). Related to 'delete' only etymologically — both trace back to the idea of erasing or removing something that existed.",
    mnemonic: "DELETE + RIOUS = something SERIOUSLY DELETES your health. A computer virus that DELETES your files is DELETERIOUS — it SERIOUSLY (rious) DELETES things. Smoking is deleterious: it DELETEs your lung capacity. Stress is deleterious: it DELETEs years from your life. Whenever you see DELETE in a word, think: something is being erased from health or wellbeing.",
    examples: [
      "The report confirmed the deleterious effects of microplastics on marine ecosystems.",
      "Prolonged social isolation has deleterious effects on both mental and physical health.",
      "The new pesticide was initially approved before its deleterious impact on pollinators was discovered."
    ],
    difficulty: "hard",
    category: "harm / damage"
  },
  {
    id: "didactic",
    word: "Didactic",
    pronunciation: "dy-DAK-tik",
    partOfSpeech: ["adjective"],
    definition: "Intended to teach, particularly moral lessons; (pejoratively) excessively inclined to lecture or moralize; too obviously instructive.",
    forms: {
      adjective: "didactic",
      adverb: "didactically",
      noun: "didacticism",
      person: "didact (one who is didactic)"
    },
    etymology: "From Greek 'didaktikos' — apt at teaching, from 'didaskein' (to teach). The Greek 'didaskalos' was a teacher or chorus-master. Modern 'didactics' is the science and art of teaching.",
    mnemonic: "DID + ACT + IC = someone whose DID (past action) ACTed as a lesson. A DIDACTIC story DIDS something (teaches by example through action). Or: 'DID your dad TEACH you this?' Your dad's DIDACTIC speeches — always teaching, always moralizing, always finding the lesson in everything. 'Son, this reminds me of a very important life principle...' That's didactic. Useful but often exhausting.",
    examples: [
      "Aesop's fables are didactic by design — each story exists to deliver a moral lesson.",
      "Her writing was condemned as didactic — critics felt she trusted readers too little, spelling out the message too clearly.",
      "The professor's didactic approach worked well for beginners but frustrated advanced students who wanted debate."
    ],
    difficulty: "hard",
    category: "learning / teaching"
  },
  {
    id: "ebullient",
    word: "Ebullient",
    pronunciation: "ih-BOOL-yunt",
    partOfSpeech: ["adjective"],
    definition: "Cheerful and full of energy; overflowing with enthusiasm and excitement; exuberant.",
    forms: {
      adjective: "ebullient",
      adverb: "ebulliently",
      noun: "ebullience / ebulliency",
      verb: "ebullate (rare — to boil)"
    },
    etymology: "From Latin 'ebullire' — e (out) + bullire (to boil). Literally: 'boiling over.' The image is of a pot so full of boiling liquid that it spills over the edges. Enthusiasm that cannot be contained.",
    mnemonic: "E + BULL + IENT = the energy of a BULL BOILING out of you. An EBULLIENT person has a RED BULL's worth of energy BOILING over. Picture a pot of water so vigorously boiling it sprays everywhere — that's ebullience. Or: Red BULL gives you ebullient energy. E-BULL-IENT = the bull's energy erupting outward. You can't contain it.",
    examples: [
      "The team returned from the championship game ebullient, cheering and honking all the way through town.",
      "Her ebullient personality made her the natural center of every gathering.",
      "Even after three defeats, his ebullient optimism was impossible to dampen."
    ],
    difficulty: "hard",
    category: "emotion / energy"
  },
  {
    id: "egregious",
    word: "Egregious",
    pronunciation: "ih-GREE-jus",
    partOfSpeech: ["adjective"],
    definition: "Outstandingly bad; shockingly awful; so conspicuously terrible that it stands out from all others of its kind.",
    forms: {
      adjective: "egregious",
      adverb: "egregiously",
      noun: "egregiousness"
    },
    etymology: "From Latin 'egregius' — e/ex (out of, away from) + grex (flock). Originally meant 'standing out from the flock' in a GOOD way — distinguished, eminent. Over time, ironic use flipped it to mean standing out for being the WORST. Now exclusively negative.",
    mnemonic: "E + GREG + IOUS. Think of GREG. Poor GREG stands out from the crowd — but not for good reasons. He's been EJECTED (E) from the FLOCK (grex) for being so outrageously bad. E-GREG-IOUS = GREG is SO bad, the flock pushed him out. An egregious error is so awful that it gets ejected from the realm of normal mistakes. GREG stands alone in his awfulness.",
    examples: [
      "The accounting error was so egregious that it had to be intentional fraud, not negligence.",
      "The referee's egregious call in the final minute decided the championship — and not fairly.",
      "She issued a public apology for her egregious remarks, which she called 'inexcusable.'"
    ],
    difficulty: "medium",
    category: "quality / degree"
  },
  {
    id: "ephemeral",
    word: "Ephemeral",
    pronunciation: "ih-FEM-er-ul",
    partOfSpeech: ["adjective"],
    definition: "Lasting for a very short time; transitory; existing only briefly before disappearing.",
    forms: {
      adjective: "ephemeral",
      adverb: "ephemerally",
      noun: "ephemerality / ephemera (plural noun: things that are short-lived, like old newspapers)"
    },
    etymology: "From Greek 'ephemeros' — epi (on, for) + hemera (day). Literally: 'lasting only a day.' The mayfly (called 'ephemeron' in Greek) was named for living just one day after metamorphosis. In biology, ephemeral plants bloom and die in a single day.",
    mnemonic: "EPI + HEMERA = on/for + day. Think of the MAYFLY — it spends years as a larva underwater, then emerges, lives ONE glorious day as an adult, mates, and dies. Its entire adult life is ephemeral. Or: EPHEM = sounds like 'A FEW moments.' Beautiful things are often ephemeral — a perfect sunset, cherry blossoms, a rainbow. Here and gone before you can hold them.",
    examples: [
      "Social media fame is largely ephemeral — yesterday's viral sensation is tomorrow's forgotten post.",
      "The ephemeral beauty of cherry blossoms is precisely what makes them precious in Japanese culture.",
      "He collected ephemera — concert tickets, menus, telegrams — artifacts of moments now gone."
    ],
    difficulty: "medium",
    category: "time / duration"
  },
  {
    id: "equanimity",
    word: "Equanimity",
    pronunciation: "ee-kwuh-NIM-ih-tee",
    partOfSpeech: ["noun"],
    definition: "Mental calmness and composure, especially in difficult situations; a serene, even-tempered state of mind that is not easily disturbed.",
    forms: {
      noun: "equanimity",
      adjective: "equanimous (rare)",
      adverb: "equanimously (rare)"
    },
    etymology: "From Latin 'aequanimitas' — aequus (equal, even) + animus (mind, spirit, soul). Literally: 'an equal, even mind.' The goal is a mind like still water — level, unruffled, always finding equilibrium.",
    mnemonic: "EQUA (equal/even) + ANIMA (soul/mind). EQUA = equator, equal, equilibrium — all about balance. ANIMA = soul (anime, animated, animal — all from anima = breath of life). EQUANIMITY = an EQUAL SOUL — perfectly balanced, never tipped by circumstances. Picture a perfectly still lake at dawn. No ripples. Just a mirror surface. That absolute stillness of mind is equanimity.",
    examples: [
      "She faced her diagnosis with such equanimity that the doctors asked if she had fully understood.",
      "Years of meditation practice had given him the equanimity to negotiate without emotional investment.",
      "The general's equanimity in crisis — never rattled, always deliberate — inspired his entire command."
    ],
    difficulty: "hard",
    category: "emotion / character"
  },
  {
    id: "equivocate",
    word: "Equivocate",
    pronunciation: "ih-KWIV-uh-kayt",
    partOfSpeech: ["verb"],
    definition: "To use ambiguous or unclear expressions in order to avoid committing to a position or to mislead; to deliberately be vague.",
    forms: {
      verb: "equivocate / equivocated / equivocating",
      noun: "equivocation / equivocator",
      adjective: "equivocal (ambiguous)",
      adverb: "equivocally"
    },
    etymology: "From Medieval Latin 'aequivocus' — aequus (equal) + vox/vocis (voice). Literally: 'speaking with equal voice to both sides.' The equivocator gives equal voice to every position, committing to none.",
    mnemonic: "EQUI (equal) + VOCAL (voice). A politician who EQUIVOCATES has an EQUAL VOCAL cord for BOTH sides — they speak EQUALLY to the left and the right, never committing. Or: a VOCAL EQUINE (horse) that speaks out of BOTH sides of its mouth. Watch a politician answer a direct question and watch them equivocate: 'Well, on the one hand... but on the other hand...' endlessly.",
    examples: [
      "When asked directly about the allegations, the CEO equivocated for ten minutes without saying anything.",
      "Hamlet is a masterwork of equivocation — characters who cannot or will not speak plainly.",
      "Stop equivocating and tell me whether you're coming to the wedding or not."
    ],
    difficulty: "hard",
    category: "language / honesty"
  },
  {
    id: "erudite",
    word: "Erudite",
    pronunciation: "ER-yoo-dyt",
    partOfSpeech: ["adjective"],
    definition: "Having or showing wide, deep, and impressive knowledge; scholarly; displaying the results of extensive learning.",
    forms: {
      adjective: "erudite",
      adverb: "eruditely",
      noun: "erudition",
      person: "an erudite scholar"
    },
    etymology: "From Latin 'eruditus' — e (out of) + rudis (rough, untrained, unskilled, raw). Literally: 'drawn out of roughness.' Education as the process of refining the raw, unskilled person. To be erudite is to have been completely polished out of ignorance.",
    mnemonic: "E + RUDE + ITE. An ERUDITE person has had the RUDENESS (rudeness = roughness, crudeness) educated OUT of them. E = out of, RUDIS = rough. Education REMOVES the rough, raw ignorance (RUDE state) and leaves a polished scholar. ERUDITE = EX-RUDE: no longer rude or raw. They've been refined by books into something the opposite of rude.",
    examples: [
      "Her erudite commentary on medieval architecture drew a crowd far larger than the museum expected.",
      "He was erudite but never condescending — he wore his learning lightly.",
      "The journal was written for an erudite audience familiar with postcolonial theory."
    ],
    difficulty: "hard",
    category: "intelligence / learning"
  },
  {
    id: "euphemism",
    word: "Euphemism",
    pronunciation: "YOO-fuh-miz-um",
    partOfSpeech: ["noun"],
    definition: "A mild or indirect expression substituted for one considered too harsh, blunt, or direct; pleasant language used to soften an uncomfortable truth.",
    forms: {
      noun: "euphemism",
      adjective: "euphemistic",
      adverb: "euphemistically",
      verb: "euphemize"
    },
    etymology: "From Greek 'euphemismos' — eu (good, well) + pheme (speech, utterance). Literally: 'good speech' or 'speaking well/pleasantly.' The practice of choosing pleasant-sounding words over accurate but harsh ones.",
    mnemonic: "EU (good) + PHEME (speech) = GOOD SPEECH. EU = good (as in EUphoria = good feeling, EUreka = 'I found it!' in good excitement). PHEME = speech (phone, microphone, telephone — all about sound/voice). A EUPHEMISM wraps an ugly truth in GOOD SPEECH. 'Passed away' is the euphemism for 'died.' 'Let go' is the euphemism for 'fired.' Sugar-coating as a language strategy.",
    examples: [
      "'Collateral damage' is a military euphemism for civilian casualties.",
      "The real estate listing used every euphemism in the book: 'cozy' meant tiny, 'character-filled' meant falling apart.",
      "Saying someone 'passed' instead of 'died' is a common euphemism that softens an unbearable fact."
    ],
    difficulty: "easy",
    category: "language / communication"
  },
  {
    id: "exacerbate",
    word: "Exacerbate",
    pronunciation: "ig-ZAS-er-bayt",
    partOfSpeech: ["verb"],
    definition: "To make a problem, bad situation, or negative feeling worse; to increase the severity, intensity, or bitterness of something already difficult.",
    forms: {
      verb: "exacerbate / exacerbated / exacerbating",
      noun: "exacerbation",
      adjective: "exacerbating"
    },
    etymology: "From Latin 'exacerbare' — ex (thoroughly, intensely) + acerbus (harsh, bitter, sharp — the same 'acer' root as acrimony, acrid, and acerbic). Literally: 'to make thoroughly bitter/harsh.'",
    mnemonic: "EX + ACERB + ATE. Your EX (former partner) was ACERBIC (bitter and sharp) and EXACERBated every problem — they made everything more bitter and worse. Or: EXACERBATE = EX (out) + ACER (sharp/bitter) = making the bitter sharpness come OUT in full force. Like squeezing lemon into a wound — it was already bad, now it's EXACERBATED. Adding acid to acid.",
    examples: [
      "Scratching a mosquito bite will only exacerbate the irritation.",
      "The miscommunication exacerbated an already tense diplomatic situation.",
      "Budget cuts exacerbated the hospital's staffing crisis, leading to longer wait times across all departments."
    ],
    difficulty: "medium",
    category: "change / worsening"
  },
  {
    id: "gregarious",
    word: "Gregarious",
    pronunciation: "grih-GAIR-ee-us",
    partOfSpeech: ["adjective"],
    definition: "Fond of company; sociable; (of animals) living in flocks or loosely organized communities rather than alone.",
    forms: {
      adjective: "gregarious",
      adverb: "gregariously",
      noun: "gregariousness"
    },
    etymology: "From Latin 'gregarius' — of or belonging to a flock, from 'grex/gregis' (flock, herd). Literally: 'of the flock.' SAME root as EGregious (e + grex = ejected from the flock). A gregarious person loves being in the flock; an egregious one gets thrown out of it.",
    mnemonic: "GREG + ARIOUS. GREG is the most GREGARIOUS guy in the office — always in the center of a crowd, laughing, connecting, gathering people around him. GREG = GREX = FLOCK. GREGARIOUS GREG is never alone because he IS the flock's gravity. Now remember: EGREGIOUS Greg was kicked OUT of the flock (E = out). GREGARIOUS Greg loves being IN it. Same root, opposite fates.",
    examples: [
      "She was so gregarious that every taxi ride turned into a twenty-minute conversation about the driver's life.",
      "Wolves are gregarious animals — their survival depends on the strength of the pack.",
      "His gregarious nature made him an excellent salesman but a difficult person to live with."
    ],
    difficulty: "medium",
    category: "character / social behavior"
  },
  {
    id: "impecunious",
    word: "Impecunious",
    pronunciation: "im-puh-KYOO-nee-us",
    partOfSpeech: ["adjective"],
    definition: "Having little or no money; chronically poor; without financial resources.",
    forms: {
      adjective: "impecunious",
      adverb: "impecuniously",
      noun: "impecuniosity / impecuniousness"
    },
    etymology: "From Latin 'impecuniosus' — in/im (not) + pecunia (money, wealth). 'Pecunia' comes from 'pecus' (cattle, flock) — because livestock was the original currency in ancient Rome. Impecunious = without cattle = without money.",
    mnemonic: "IM + PECUNI + OUS = IM (not) + PECUNIA (money). IM-PECUNIOUS = IMpossible to have MONEY. Or: 'I'M PECUNIOUS... wait, no I'M NOT.' The IM- (not) cancels out pecunia (money). Picture an ancient Roman without a single cow to his name — IMPECUNIOUS. Remember: PECUNIA = money (pecuniary = relating to money). IM = not. Simple algebra: not + money = impecunious.",
    examples: [
      "The impecunious student survived on ramen and library borrowings for her entire first year.",
      "Despite being impecunious for most of his life, he produced a body of art that sold for millions after his death.",
      "The organization specifically sought to help impecunious families access legal representation."
    ],
    difficulty: "hard",
    category: "wealth / economics"
  },
  {
    id: "loquacious",
    word: "Loquacious",
    pronunciation: "loh-KWAY-shus",
    partOfSpeech: ["adjective"],
    definition: "Tending to talk a great deal; talkative, often about inconsequential things; chatty to an excessive degree.",
    forms: {
      adjective: "loquacious",
      adverb: "loquaciously",
      noun: "loquacity / loquaciousness"
    },
    etymology: "From Latin 'loquax' — from 'loqui' (to speak). The same root gives us: eloquent (e + loqui = speaking out, beautifully), soliloquy (solus + loqui = speaking alone), colloquial (col + loqui = speaking together, informal speech), and ventriloquist (venter + loqui = speaking from the belly).",
    mnemonic: "LOQUA + CIOUS = TALK + full of. The LOQU root = talk/speak. A LOQUACIOUS person is so FULL of LOQUI (speech) they can't stop. LOQUACITY. Or: 'LOCA-cious' = a LOCA (crazy) talker who never stops. Remember the LOQU family: ELOQUent (beautiful talk), SOLILOQUy (alone talking), LOQUacious (too much talking). If it has LOQU, it's about speech.",
    examples: [
      "The loquacious professor never finished a lecture on time — there was always one more tangent.",
      "Her usually loquacious mother fell uncharacteristically silent when she heard the news.",
      "The loquacious salesman kept them at the car dealership for three hours before they escaped."
    ],
    difficulty: "medium",
    category: "language / communication"
  },
  {
    id: "mendacious",
    word: "Mendacious",
    pronunciation: "men-DAY-shus",
    partOfSpeech: ["adjective"],
    definition: "Not telling the truth; habitually dishonest; lying.",
    forms: {
      adjective: "mendacious",
      adverb: "mendaciously",
      noun: "mendacity / mendaciousness"
    },
    etymology: "From Latin 'mendax/mendacis' — lying, deceitful. From 'mendum' (fault, defect) — a lie was seen as a flaw or defect in character. Related to 'emend' and 'amend' — to fix faults.",
    mnemonic: "MEN + DACIOUS = MEN who are DACious liars. Or better: MENDA-CIOUS. Think of a MENDA (bends) the truth — a mendacious person BENDS facts until they break. Or: MENDACIOUS rhymes with BODACIOUS — a bold, bodacious LIAR. Or simply: MEND + A + FLAW = mendacious people have a fundamental FLAW (mendum) they try to MEND with lies, which only makes more flaws. They're 'fault-ful.'",
    examples: [
      "The mendacious campaign relied on fabricated statistics that no journalist could verify.",
      "She had a reputation for mendacity so deep that even her honest statements were doubted.",
      "History has judged his mendacious testimony to be the pivotal act of corruption in the scandal."
    ],
    difficulty: "hard",
    category: "character / honesty"
  },
  {
    id: "obsequious",
    word: "Obsequious",
    pronunciation: "ob-SEE-kwee-us",
    partOfSpeech: ["adjective"],
    definition: "Excessively eager to serve, please, or obey; fawning; servile in a way that seems insincere or repellent.",
    forms: {
      adjective: "obsequious",
      adverb: "obsequiously",
      noun: "obsequiousness / obsequy (a funeral rite — different word!)"
    },
    etymology: "From Latin 'obsequiosus' — from 'obsequium' (compliance, deference) — ob (toward) + sequi (to follow). Originally neutral: 'one who follows/complies.' Now carries the pejorative sense of excessive, sycophantic following.",
    mnemonic: "OB + SEQUI + OUS = toward + follow + full of. An OBSEQUIOUS person is completely (OB = toward, into) FOLLOWING (sequi = to follow, like SEQUEl, conSEQUence). They follow so close they're practically inside you. Picture a servile assistant who agrees with everything, laughs at every joke, says 'brilliant idea!' to every suggestion. That nauseating over-eagerness is obsequiousness. They're a shadow that talks.",
    examples: [
      "The obsequious junior executive laughed at every one of the boss's jokes, no matter how weak.",
      "Her obsequious tone in the email — 'your most insightful suggestion' — made her colleagues roll their eyes.",
      "The obsequious salesperson's constant flattery made the customer more suspicious, not less."
    ],
    difficulty: "hard",
    category: "character / social behavior"
  },
  {
    id: "perfidious",
    word: "Perfidious",
    pronunciation: "per-FID-ee-us",
    partOfSpeech: ["adjective"],
    definition: "Deceitful and untrustworthy; guilty of betrayal; treacherous — especially in breaking an oath, promise, or trust.",
    forms: {
      adjective: "perfidious",
      adverb: "perfidiously",
      noun: "perfidy / perfidiousness"
    },
    etymology: "From Latin 'perfidiosus' — per (through, beyond, thoroughly) + fides (faith, trust). Literally: 'going through/beyond faith' — breaking completely through the boundary of trust. 'Fides' also gives us: fidelity, fiduciary, confide, infidel, and Fido (faithful dog).",
    mnemonic: "PER + FIDI + OUS = completely through FAITH. FIDO (the trusty dog) + PER (through) = PERFIDIOUS. If FIDO turned on you and bit you, that would be PERFIDIOUS. Or: FIDELITY = faithfulness. PER-FID-IOUS = the PER (destruction) of FIDELITY. A perfidious person destroys the FIDE (faith) you had in them. They walk THROUGH your trust and out the other side, leaving wreckage.",
    examples: [
      "The perfidious ally signed a secret treaty with the enemy while still accepting supplies from both sides.",
      "His perfidious betrayal — selling the company's trade secrets — ended a fifteen-year friendship overnight.",
      "Shakespeare's Iago is literature's most coldly perfidious villain, acting the loyal friend while engineering ruin."
    ],
    difficulty: "hard",
    category: "character / trust"
  },
  {
    id: "sanguine",
    word: "Sanguine",
    pronunciation: "SANG-gwin",
    partOfSpeech: ["adjective"],
    definition: "Optimistic, especially in a difficult situation; having a positive, cheerful outlook; (historical) ruddy-complexioned — once believed to indicate a cheerful temperament.",
    forms: {
      adjective: "sanguine",
      adverb: "sanguinely",
      noun: "sanguinity / sanguineness"
    },
    etymology: "From Latin 'sanguineus' — from 'sanguis' (blood). In medieval humoral theory, a person dominated by blood (sanguis) was believed to be cheerful, confident, and optimistic. Blood = red complexion = optimistic temperament. Counter-intuitively, the word for blood became the word for optimism.",
    mnemonic: "SANGUI (blood) + NE = blood-filled with optimism. In medieval medicine, if you had lots of BLOOD (sanguine humor), you were ruddy, red-cheeked, healthy, and OPTIMISTIC. A pale (bloodless) person was pessimistic; a SANGUINE (blood-full) person was cheerful and confident. Picture a rosy-cheeked, barrel-chested optimist who sees every cloud with a silver lining — that's the SANGUINE temperament.",
    examples: [
      "Despite the setbacks, the coach remained sanguine about the team's playoff prospects.",
      "She was sanguine about the review, knowing the work could speak for itself.",
      "His sanguine predictions for the economy turned out to be wildly optimistic."
    ],
    difficulty: "hard",
    category: "emotion / outlook"
  },
  {
    id: "temerity",
    word: "Temerity",
    pronunciation: "tuh-MER-ih-tee",
    partOfSpeech: ["noun"],
    definition: "Excessive confidence or boldness; audacity that goes too far — especially behavior considered shockingly brazen or presumptuous by others.",
    forms: {
      noun: "temerity",
      adjective: "temerarious (rare)"
    },
    etymology: "From Latin 'temeritas' — from 'temere' (rashly, blindly, without reason). Literally: acting blindly, without thinking about consequences. Where audacity is admired boldness, temerity implies recklessness or presumption that shocks others.",
    mnemonic: "TEMER + ITY = TEMPER + RITY. Someone with TEMERITY has the TEMPER of a reckless daredevil. Or: TEME-RITY — think 'TAME-RITY': the OPPOSITE of tame. Someone NOT tame. Wildly, recklessly bold. Or the classic sentence: 'He had the TEMERITY to demand a raise after being late every day for a month.' The gall! The audacity! The reckless presumption — that's temerity. It's audacity that makes you gasp.",
    examples: [
      "She had the temerity to correct the Nobel laureate in front of the entire symposium.",
      "He showed extraordinary temerity in challenging the company's founder to a debate on company strategy.",
      "Only someone with remarkable temerity would submit a manuscript that critiques the editor's previous book."
    ],
    difficulty: "hard",
    category: "character / behavior"
  }
];

// Export for use in app.js
// This is a plain JS file — no module syntax needed
