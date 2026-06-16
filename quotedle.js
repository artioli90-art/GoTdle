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
// CHECK ANSWER
// ==========================

function normalize(str) {
  return str.toLowerCase().trim().replace(/\s+/g, " ");
}
//OLD ANSWER
//function checkAnswer() {
  //const guess = normalize(document.getElementById("guess").value);
  //const correct = normalize(currentQuote.autore);

  //const result = document.getElementById("result");
  //const meta = document.getElementById("meta");

  //const row = document.createElement("div");
  //row.classList.add("result-row");

  //if (guess === correct) {
    //result.textContent = "✔ Corretto!";
    //result.style.color = "green";
    //showVictory();
  //} else {
    //result.textContent = `✖ Sbagliato. Era: ${currentQuote.autore}`;
    //result.style.color = "red";
  //}

  //meta.textContent = `Destinatario: ${currentQuote.destinatario}`;
//}

function checkAnswer() {
  const guess = normalize(document.getElementById("guess").value);

  const correctAuthor = normalize(currentQuote.autore);
  const correctDest = normalize(currentQuote.destinatario);

  const tbody = document.querySelector("#results tbody");

  const row = document.createElement("tr");

  // colonna quote
  const quoteCell = document.createElement("td");
  quoteCell.textContent = currentQuote.testo.slice(0, 40) + "...";

  // autore
  const authorCell = document.createElement("td");
  if (guess === correctAuthor) {
    authorCell.textContent = currentQuote.autore;
    authorCell.classList.add("correct");
  } else {
    authorCell.textContent = guess;
    authorCell.classList.add("wrong");
  }

  // destinatario (sempre reveal ma colorato rispetto al target reale)
  const destCell = document.createElement("td");
  destCell.textContent = currentQuote.destinatario;
  destCell.classList.add("wrong");

  // se vuoi renderlo “più Wordle-like”
  if (guess === correctAuthor) {
    destCell.classList.remove("wrong");
    destCell.classList.add("correct");
  }

  row.appendChild(quoteCell);
  row.appendChild(authorCell);
  row.appendChild(destCell);

  tbody.appendChild(row);

  // risultato globale
  if (guess === correctAuthor) {
    showVictory();
  }
}

function showVictory() {
  const card = document.getElementById("victory-card");
  if (!card) return;

  card.classList.remove("hidden");
  setTimeout(() => card.classList.add("show"), 50);
}
//aggiunta nuova
document.getElementById("checkBtn").addEventListener("click", checkAnswer);
// init
initGame();
