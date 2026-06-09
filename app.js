const letters = [
  { id: "g", symbol: "ㄱ", name: "기역", roman: "g / k", sound: "g suave", example: "고마워, 가지마" },
  { id: "n", symbol: "ㄴ", name: "니은", roman: "n", sound: "n", example: "나, 너, 안녕" },
  { id: "d", symbol: "ㄷ", name: "디귿", roman: "d / t", sound: "d suave", example: "도, 다" },
  { id: "r", symbol: "ㄹ", name: "리을", roman: "r / l", sound: "r entre vocales, l al final", example: "사랑, 를" },
  { id: "m", symbol: "ㅁ", name: "미음", roman: "m", sound: "m", example: "마, 미안해" },
  { id: "b", symbol: "ㅂ", name: "비읍", roman: "b / p", sound: "b suave", example: "보, 비" },
  { id: "s", symbol: "ㅅ", name: "시옷", roman: "s", sound: "s, suena sh antes de ㅣ", example: "사, 서" },
  { id: "ng", symbol: "ㅇ", name: "이응", roman: "muda / ng", sound: "muda al inicio, ng al final", example: "아, 오, 영" },
  { id: "j", symbol: "ㅈ", name: "지읒", roman: "j", sound: "j suave", example: "진짜, 자" },
  { id: "ch", symbol: "ㅊ", name: "치읓", roman: "ch", sound: "ch aspirada", example: "축하해" },
  { id: "k", symbol: "ㅋ", name: "키읔", roman: "k", sound: "k fuerte", example: "ㅋㅋ" },
  { id: "t", symbol: "ㅌ", name: "티읕", roman: "t", sound: "t fuerte", example: "티" },
  { id: "p", symbol: "ㅍ", name: "피읖", roman: "p", sound: "p fuerte", example: "파" },
  { id: "h", symbol: "ㅎ", name: "히읗", roman: "h", sound: "h suave", example: "해, 하" },
  { id: "kk", symbol: "ㄲ", name: "쌍기역", roman: "kk", sound: "k tensa", example: "꼭" },
  { id: "tt", symbol: "ㄸ", name: "쌍디귿", roman: "tt", sound: "t tensa", example: "따라" }, // wait, line 1143 was example: "따라"
  { id: "pp", symbol: "ㅃ", name: "쌍비읍", roman: "pp", sound: "p tensa", example: "오빠" },
  { id: "ss", symbol: "ㅆ", name: "쌍시옷", roman: "ss", sound: "s tensa", example: "있어" },
  { id: "jj", symbol: "ㅉ", name: "쌍지읒", roman: "jj", sound: "j tensa", example: "진짜" },
  { id: "a", symbol: "ㅏ", name: "아", roman: "a", sound: "a de casa", example: "사, 랑, 마" },
  { id: "ya", symbol: "ㅑ", name: "야", roman: "ya", sound: "ya", example: "야" },
  { id: "eo", symbol: "ㅓ", name: "어", roman: "eo", sound: "o abierta", example: "너, 서" },
  { id: "yeo", symbol: "ㅕ", name: "여", roman: "yeo", sound: "yeo", example: "여" },
  { id: "o", symbol: "ㅗ", name: "오", roman: "o", sound: "o cerrada", example: "고, 오빠" },
  { id: "yo", symbol: "ㅛ", name: "요", roman: "yo", sound: "yo", example: "요" },
  { id: "u", symbol: "ㅜ", name: "우", roman: "u", sound: "u", example: "구, 추" },
  { id: "yu", symbol: "ㅠ", name: "유", roman: "yu", sound: "yu", example: "유" },
  { id: "eu", symbol: "ㅡ", name: "으", roman: "eu", sound: "sonido cerrado sin equivalente exacto", example: "그, 는" },
  { id: "i", symbol: "ㅣ", name: "이", roman: "i", sound: "i", example: "니, 미, 지" },
  { id: "ae", symbol: "ㅐ", name: "애", roman: "ae", sound: "e abierta", example: "해, 애" },
  { id: "e", symbol: "ㅔ", name: "에", roman: "e", sound: "e cerrada", example: "네" },
  { id: "wa", symbol: "ㅘ", name: "와", roman: "wa", sound: "wa", example: "와" },
  { id: "we", symbol: "ㅙ", name: "왜", roman: "wae", sound: "we", example: "왜" },
  { id: "wi", symbol: "ㅟ", name: "위", roman: "wi", sound: "wi", example: "위" },
  { id: "ui", symbol: "ㅢ", name: "의", roman: "ui", sound: "eui", example: "의" }
];

const phrases = [
  { id: "saranghae", symbol: "사랑해", roman: "saranghae", sound: "te amo", example: "사랑해" },
  { id: "gomawo", symbol: "고마워", roman: "gomawo", sound: "gracias", example: "고마워" },
  { id: "hajima", symbol: "하지마", roman: "hajima", sound: "no lo hagas", example: "하지마" },
  { id: "gajima", symbol: "가지마", roman: "gajima", sound: "no te vayas", example: "가지마" },
  { id: "annyeong", symbol: "안녕", roman: "annyeong", sound: "hola / adiós", example: "안녕" },
  { id: "mianhae", symbol: "미안해", roman: "mianhae", sound: "lo siento", example: "미안해" },
  { id: "jinjja", symbol: "진짜", roman: "jinjja", sound: "de verdad / en serio", example: "진짜?" },
  { id: "gwaenchana", symbol: "괜찮아", roman: "gwaenchana", sound: "está bien", example: "괜찮아" },
  { id: "bogo", symbol: "보고 싶어", roman: "bogo sipeo", sound: "te extraño", example: "보고 싶어" },
  { id: "jalja", symbol: "잘 자", roman: "jal ja", sound: "duerme bien", example: "잘 자" },
  { id: "baegopa", symbol: "배고파", roman: "baegopa", sound: "tengo hambre", example: "배고파" },
  { id: "hwaiting", symbol: "화이팅", roman: "hwaiting", sound: "ánimo", example: "화이팅" }
];

const state = {
  deck: "letters",
  index: 0,
  flipped: false,
  quizIndex: 0,
  quizRight: 0,
  quizAnswered: false,
  quizSet: [],
  quizWrong: [],
  progress: loadProgress()
};

const els = {
  html: document.documentElement,
  navs: document.querySelectorAll("[data-nav]"),
  themeButtons: document.querySelectorAll("[data-theme-toggle]"),
  reset: document.querySelector("[data-reset]"),
  heroGlyph: document.querySelector("[data-hero-glyph]"),
  statKnown: document.querySelector("[data-stat-known]"),
  statTotal: document.querySelector("[data-stat-total]"),
  statScore: document.querySelector("[data-stat-score]"),
  statStreak: document.querySelector("[data-stat-streak]"),
  deckButtons: document.querySelectorAll("[data-deck]"),
  flashcard: document.querySelector("[data-flashcard]"),
  cardFront: document.querySelector("[data-card-front]"),
  cardMode: document.querySelector("[data-card-mode]"),
  cardAnswer: document.querySelector("[data-card-answer]"),
  cardExample: document.querySelector("[data-card-example]"),
  cardCount: document.querySelector("[data-card-count]"),
  cardKnown: document.querySelector("[data-card-known]"),
  cardDeck: document.querySelector("[data-card-deck]"),
  deckList: document.querySelector("[data-deck-list]"),
  prev: document.querySelector("[data-prev]"),
  next: document.querySelector("[data-next]"),
  speak: document.querySelector("[data-speak]"),
  known: document.querySelector("[data-known]"),
  quizSymbol: document.querySelector("[data-quiz-symbol]"),
  quizOptions: document.querySelector("[data-quiz-options]"),
  feedback: document.querySelector("[data-feedback]"),
  quizCount: document.querySelector("[data-quiz-count]"),
  quizRight: document.querySelector("[data-quiz-right]"),
  bestStreak: document.querySelector("[data-best-streak]"),
  newQuiz: document.querySelector("[data-new-quiz]"),
  alphabet: document.querySelector("[data-alphabet]"),
  vocab: document.querySelector("[data-vocab]"),
  toast: document.querySelector("[data-toast]")
};

init();

function init() {
  const savedTheme = localStorage.getItem("hangul-theme");
  if (savedTheme) {
    els.html.dataset.theme = savedTheme;
  }

  renderReference();
  renderVocab();
  renderFlashcard();
  startQuiz();
  bindEvents();
  observeSections();
  rotateHeroGlyph();
  updateStats();
}

function bindEvents() {
  els.themeButtons.forEach((button) => {
    button.addEventListener("click", toggleTheme);
  });

  els.reset.addEventListener("click", () => {
    state.progress = defaultProgress();
    saveProgress();
    renderFlashcard();
    startQuiz();
    updateStats();
    showToast("Progreso reiniciado.");
  });

  els.deckButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.deck = button.dataset.deck;
      state.index = 0;
      state.flipped = false;
      renderFlashcard();
    });
  });

  els.flashcard.addEventListener("click", () => {
    state.flipped = !state.flipped;
    renderFlashcard();
  });

  els.prev.addEventListener("click", () => moveCard(-1));
  els.next.addEventListener("click", () => moveCard(1));
  els.speak.addEventListener("click", () => speak(currentDeck()[state.index].symbol));
  els.known.addEventListener("click", markKnown);
  els.newQuiz.addEventListener("click", startQuiz);

  document.addEventListener("keydown", (e) => {
    const onButton = document.activeElement?.tagName === "BUTTON";

    if (e.key === "ArrowLeft")  { e.preventDefault(); moveCard(-1); return; }
    if (e.key === "ArrowRight") { e.preventDefault(); moveCard(1);  return; }

    if (!onButton && (e.key === " " || e.key === "Enter")) {
      e.preventDefault();
      state.flipped = !state.flipped;
      renderFlashcard();
    }
  });
}

function currentDeck() {
  return state.deck === "letters" ? letters : phrases;
}

function renderFlashcard() {
  const deck = currentDeck();
  const item = deck[state.index];
  const known = state.progress.known.includes(item.id);
  els.deckButtons.forEach((button) => button.classList.toggle("active", button.dataset.deck === state.deck));
  els.flashcard.classList.toggle("flipped", state.flipped);
  els.cardFront.textContent = item.symbol;
  els.cardMode.textContent = state.flipped ? "Respuesta" : "Pregunta";
  els.cardAnswer.textContent = state.flipped ? `${item.roman} · ${item.sound}` : "Toca para revelar";
  els.cardExample.innerHTML = state.flipped
    ? `Ejemplo: <span class="hangul" lang="ko">${item.example}</span>`
    : "Intenta decirlo antes de mirar.";
  els.cardCount.textContent = `${state.index + 1} / ${deck.length}`;
  els.cardKnown.textContent = countKnown(deck);
  els.cardDeck.textContent = state.deck === "letters" ? "Letras" : "Frases";
  els.known.textContent = known ? "Repasar de nuevo" : "Domino esta";
  els.known.disabled = false;
  renderDeckList();
  updateStats();
}

function renderDeckList() {
  const deck = currentDeck();
  els.deckList.innerHTML = deck.map((item, index) => {
    const known = state.progress.known.includes(item.id);
    return `
      <button class="deck-item ${index === state.index ? "active" : ""}" type="button" data-jump="${index}">
        <span class="mini hangul" lang="ko">${item.symbol}</span>
        <span class="name">${item.roman}</span>
        <span class="check">${known ? "✓" : ""}</span>
      </button>
    `;
  }).join("");

  els.deckList.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => {
      state.index = Number(button.dataset.jump);
      state.flipped = false;
      renderFlashcard();
    });
  });
}

function moveCard(direction) {
  const deck = currentDeck();
  state.index = (state.index + direction + deck.length) % deck.length;
  state.flipped = false;
  renderFlashcard();
}

function markKnown() {
  const item = currentDeck()[state.index];
  const idx = state.progress.known.indexOf(item.id);
  if (idx === -1) {
    state.progress.known.push(item.id);
    showToast(`${item.symbol} marcado como dominado.`);
  } else {
    state.progress.known.splice(idx, 1);
    showToast(`${item.symbol} quitado de dominadas.`);
  }
  state.progress.lastStudyDate = todayKey();
  saveProgress();
  renderFlashcard();
}

function startQuiz() {
  const deck = currentDeck();
  state.quizSet = shuffle([...deck]).slice(0, Math.min(10, deck.length));
  state.quizIndex = 0;
  state.quizRight = 0;
  state.quizWrong = [];
  state.quizAnswered = false;
  renderQuiz();
}

function renderQuiz() {
  const deck = currentDeck();
  const item = state.quizSet[state.quizIndex];
  const options = shuffle([
    item.roman,
    ...shuffle(deck.filter((card) => card.id !== item.id))
      .slice(0, 3)
      .map((card) => card.roman)
  ]);

  els.quizSymbol.textContent = item.symbol;
  els.quizOptions.innerHTML = options
    .map((option) => `<button class="option" type="button" data-answer="${option}">${option}</button>`)
    .join("");
  els.feedback.textContent = "Elige una respuesta.";
  els.quizCount.textContent = `${state.quizIndex + 1} / ${state.quizSet.length}`;
  els.quizRight.textContent = state.quizRight;
  state.quizAnswered = false;

  els.quizOptions.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => answerQuiz(button, item));
  });
  updateStats();
}

function answerQuiz(button, item) {
  if (state.quizAnswered) return;
  state.quizAnswered = true;
  const selected = button.dataset.answer;
  const correct = selected === item.roman;
  button.classList.add(correct ? "correct" : "wrong");

  els.quizOptions.querySelectorAll("[data-answer]").forEach((option) => {
    option.disabled = true;
    if (option.dataset.answer === item.roman) option.classList.add("correct");
  });

  if (correct) {
    state.quizRight += 1;
    state.progress.currentStreak += 1;
    state.progress.bestStreak = Math.max(state.progress.bestStreak, state.progress.currentStreak);
    els.feedback.textContent = `Correcto: ${item.symbol} suena ${item.roman}.`;
  } else {
    state.progress.currentStreak = 0;
    state.quizWrong.push(item);
    els.feedback.textContent = `Era ${item.roman}. Pista: ${item.sound}.`;
  }

  state.progress.quizTotal += 1;
  state.progress.quizRight += correct ? 1 : 0;
  state.progress.lastStudyDate = todayKey();
  saveProgress();
  updateStats();

  window.setTimeout(() => {
    if (state.quizIndex < state.quizSet.length - 1) {
      state.quizIndex += 1;
      renderQuiz();
    } else {
      if (state.quizWrong.length === 0) {
        els.feedback.innerHTML = `¡Set perfecto! ${state.quizRight} de ${state.quizSet.length}.`;
      } else {
        const list = state.quizWrong
          .map((i) => `<span class="missed-item"><span class="hangul">${i.symbol}</span> → ${i.roman}</span>`)
          .join("");
        els.feedback.innerHTML = `${state.quizRight} de ${state.quizSet.length}. Repasa: ${list}`;
      }
    }
  }, 950);
}

function renderReference() {
  els.alphabet.innerHTML = letters.map((item) => `
    <article class="tile">
      <div class="glyph hangul" lang="ko">${item.symbol}</div>
      <div>
        <b><span class="hangul" lang="ko">${item.name}</span> · ${item.roman}</b>
        <span>${item.sound}. Ejemplo: <span class="hangul" lang="ko">${item.example}</span></span>
      </div>
    </article>
  `).join("");
}

function renderVocab() {
  els.vocab.innerHTML = phrases.map((item) => `
    <article class="phrase">
      <div class="kr hangul" lang="ko">${item.symbol}</div>
      <div class="meta">
        <div class="rom">${item.roman}</div>
        <div class="mean">${item.sound}</div>
      </div>
      <button class="speak" type="button" aria-label="Escuchar ${item.roman}" data-say="${item.symbol}">▶</button>
    </article>
  `).join("");

  els.vocab.querySelectorAll("[data-say]").forEach((button) => {
    button.addEventListener("click", () => speak(button.dataset.say));
  });
}

function updateStats() {
  const total = letters.length + phrases.length;
  const percent = state.progress.quizTotal ? Math.round((state.progress.quizRight / state.progress.quizTotal) * 100) : 0;
  els.statKnown.textContent = state.progress.known.length;
  els.statTotal.textContent = total;
  els.statScore.textContent = `${percent}%`;
  els.statStreak.textContent = state.progress.currentStreak;
  els.bestStreak.textContent = state.progress.bestStreak;
}

function countKnown(deck) {
  return deck.filter((item) => state.progress.known.includes(item.id)).length;
}

function toggleTheme() {
  const next = els.html.dataset.theme === "dark" ? "light" : "dark";
  els.html.dataset.theme = next;
  localStorage.setItem("hangul-theme", next);
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    showToast("Este navegador no tiene lectura por voz.");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ko-KR";
  utterance.rate = 0.82;
  window.speechSynthesis.speak(utterance);
}

function observeSections() {
  const sections = document.querySelectorAll("main section[id]");
  const links = document.querySelectorAll("[data-nav] a");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: "-42% 0px -52% 0px", threshold: 0 });
  sections.forEach((section) => observer.observe(section));
}

function rotateHeroGlyph() {
  const samples = ["사", "랑", "해", "고", "마", "워", "안", "녕"];
  let index = 0;
  window.setInterval(() => {
    index = (index + 1) % samples.length;
    els.heroGlyph.textContent = samples[index];
  }, 1800);
}

function loadProgress() {
  try {
    return { ...defaultProgress(), ...JSON.parse(localStorage.getItem("hangul-progress") || "{}") };
  } catch {
    return defaultProgress();
  }
}

function defaultProgress() {
  return {
    known: [],
    quizRight: 0,
    quizTotal: 0,
    currentStreak: 0,
    bestStreak: 0,
    lastStudyDate: ""
  };
}

function saveProgress() {
  localStorage.setItem("hangul-progress", JSON.stringify(state.progress));
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function shuffle(items) {
  return items
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => els.toast.classList.remove("show"), 1800);
}
