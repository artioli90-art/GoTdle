const characters = [
  ...new Set(quotes.map(q => q.autore))
];

let currentQuote = null;

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
// AUTOCOMPLETE DROPDOWN
// ==========================

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
// CHECK ANSWER - OLD
// ==========================

function normalize(str) {
  return str.toLowerCase().trim().replace(/\s+/g, " ");
  }
function showVictory() {
  alert("✔ Risposta esatta!");
  
}
function checkAnswer() {
  const guess = normalize(document.getElementById("guess").value);

  if (!guess) return;

  const correctAuthor = normalize(currentQuote.autore);

  const tbody = document.querySelector("#results tbody");

  const row = document.createElement("tr");

  //Citazione abbreviata
  const quoteCell = document.createElement("td");
  quoteCell.textContent = currentQuote.testo.slice(0, 40) + "...";

  //Risposta utente
  const authorCell = document.createElement("td");

  if (guess === correctAuthor) {
    authorCell.textContent = currentQuote.autore;
   authorCell.classList.add("correct");

    showVictory();
  } else {
    authorCell.textContent =
      document.getElementById("guess").value;

    authorCell.classList.add("wrong");
  }

  row.appendChild(quoteCell);
  row.appendChild(authorCell);

  tbody.appendChild(row);
}

//aggiunta nuova
document.getElementById("checkBtn").addEventListener("click", checkAnswer);
// init
initGame();
