const characters = [...new Set(quotes.map(q => q.autore))];

let currentQuote = null;
let phase = "author"; // "author" → "dest"

// ==========================
// DAILY QUOTE
// ==========================

function getDailyIndex() {
  const start = new Date("2025-01-01");
  const now = new Date();

  const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  return diff % quotes.length;
}

function initGame() {
  const index = getDailyIndex();
  currentQuote = quotes[index];

  phase = "author";

  renderQuote();
  setupAutocomplete();
}

function renderQuote() {
  document.getElementById("quote").textContent = currentQuote.testo;
  document.getElementById("result").textContent = "";
  document.getElementById("meta").textContent = "";
  document.getElementById("guess").value = "";
}

// ==========================
// AUTOCOMPLETE
// ==========================

function normalize(str) {
  return str.toLowerCase().trim().replace(/\s+/g, " ");
}

function setupAutocomplete() {
  const input = document.getElementById("guess");
  const box = document.getElementById("suggestions");

  input.addEventListener("input", () => {
    const val = normalize(input.value);

    box.innerHTML = "";
    if (!val) return;

    const matches = characters
      .filter(c => normalize(c).includes(val))
      .slice(0, 8);

    matches.forEach(name => {
      const div = document.createElement("div");
      div.classList.add("suggestion");
      div.textContent = name;

      div.onclick = () => {
        input.value = name;
        box.innerHTML = "";
      };

      box.appendChild(div);
    });
  });

  document.addEventListener("click", (e) => {
    if (e.target !== input) {
      box.innerHTML = "";
    }
  });
}

// ==========================
// VICTORY
// ==========================

function showVictory(message = "✔ Risposta esatta!") {
  alert(message);
}

// ==========================
// GAME LOGIC 2 STEP
// ==========================

function checkAnswer() {
  const guess = normalize(document.getElementById("guess").value);
  if (!guess) return;

  const tbody = document.querySelector("#results tbody");
  const row = document.createElement("tr");

  // STEP 1: AUTORE
  if (phase === "author") {
    const correctAuthor = normalize(currentQuote.autore);

    const quoteCell = document.createElement("td");
    quoteCell.textContent = currentQuote.testo.slice(0, 40) + "...";

    const authorCell = document.createElement("td");

    if (guess === correctAuthor) {
      authorCell.textContent = currentQuote.autore;
      authorCell.classList.add("correct");

      showVictory("✔ Autore corretto! Ora indovina il destinatario 🎯");

      phase = "dest"; // passa allo step 2
      document.getElementById("guess").value = "";
    } else {
      authorCell.textContent = document.getElementById("guess").value;
      authorCell.classList.add("wrong");
    }

    row.appendChild(quoteCell);
    row.appendChild(authorCell);
    tbody.appendChild(row);
    return;
  }

  // STEP 2: DESTINATARIO
  if (phase === "dest") {
    const correctDest = normalize(currentQuote.destinatario);

    const quoteCell = document.createElement("td");
    quoteCell.textContent = "BONUS";

    const destCell = document.createElement("td");

    if (guess === correctDest) {
      destCell.textContent = currentQuote.destinatario;
      destCell.classList.add("correct");

      showVictory("🏆 Hai completato la quote!");
    } else {
      destCell.textContent = document.getElementById("guess").value;
      destCell.classList.add("wrong");
    }

    row.appendChild(quoteCell);
    row.appendChild(destCell);
    tbody.appendChild(row);
  }
}

// ==========================
// INIT
// ==========================

document.getElementById("checkBtn").addEventListener("click", checkAnswer);
initGame();
