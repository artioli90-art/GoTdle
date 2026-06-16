const characters = [...new Set(quotes.map(q => q.autore))];
const recipients = [...new Set(quotes.map(q => q.destinatario))];

let currentQuote = null;
let step = 1; // 1 = autore, 2 = destinatario

// deterministico: 1 quote al giorno
function getDailyIndex() {
  const start = new Date("2025-01-01");
  const now = new Date();

  const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  return diff % quotes.length;
}

function initGame() {
  const index = getDailyIndex();
  currentQuote = quotes[index];

  step = 1;

  renderQuote();
  setupDropdowns();
}

// ==========================
// RENDER
// ==========================
function renderQuote() {
  document.getElementById("quote").textContent = currentQuote.testo;

  document.getElementById("guessAuthor").value = "";
  document.getElementById("guessDest").value = "";
}

// ==========================
// DROPDOWNS (NO AUTOCOMPLETE)
// ==========================
function setupDropdowns() {
  const authorSelect = document.getElementById("guessAuthor");
  const destSelect = document.getElementById("guessDest");

  // reset
  authorSelect.innerHTML = `<option value="">Seleziona autore</option>`;
  destSelect.innerHTML = `<option value="">Seleziona destinatario</option>`;

  characters
    .sort()
    .forEach(name => {
      const opt = document.createElement("option");
      opt.value = name;
      opt.textContent = name;
      authorSelect.appendChild(opt);
    });

  recipients
    .sort()
    .forEach(name => {
      const opt = document.createElement("option");
      opt.value = name;
      opt.textContent = name;
      destSelect.appendChild(opt);
    });

  // destinatario disabilitato all’inizio
  destSelect.disabled = true;
}

// ==========================
// NORMALIZE
// ==========================
function normalize(str) {
  return str.toLowerCase().trim().replace(/\s+/g, " ");
}

// ==========================
// VICTORY POPUP
// ==========================
function showVictory(message = "✔ Risposta esatta!") {
  alert(message);
}

// ==========================
// CHECK LOGIC 2 STEP
// ==========================
function checkAnswer() {
  const authorGuess = normalize(document.getElementById("guessAuthor").value);

  if (!authorGuess) return;

  const correctAuthor = normalize(currentQuote.autore);
  const correctDest = normalize(currentQuote.destinatario);

  const tbody = document.querySelector("#results tbody");
  const row = document.createElement("tr");

  // colonna autore
  const authorCell = document.createElement("td");
  authorCell.textContent = currentQuote.autore;

  if (authorGuess === correctAuthor) {
    authorCell.classList.add("correct");

    // passo 2 sblocca
    step = 2;
    document.getElementById("guessDest").disabled = false;

    showVictory("✔ Autore corretto! Ora il destinatario");
  } else {
    authorCell.classList.add("wrong");
    showVictory("✖ Autore sbagliato");
  }

  row.appendChild(authorCell);

  // NON aggiungo destinatario finché non si arriva al step 2
  if (step === 2) {
    const destGuess = normalize(document.getElementById("guessDest").value);

    const destCell = document.createElement("td");
    destCell.textContent = currentQuote.destinatario;

    if (destGuess === correctDest) {
      destCell.classList.add("correct");
      showVictory("🏆 Vittoria completa!");
    } else {
      destCell.classList.add("wrong");
    }

    row.appendChild(destCell);
  }

  tbody.prepend(row);
}

// ==========================
// EVENT
// ==========================
document.getElementById("checkBtn").addEventListener("click", checkAnswer);

// INIT
initGame();
