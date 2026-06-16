let currentQuoteIndex = 0;

function pickRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  renderQuote();
}

function renderQuote() {
  const q = quotes[currentQuoteIndex];

  document.getElementById("quote").textContent = q.testo;
  document.getElementById("result").textContent = "";
  document.getElementById("meta").textContent = "";

  document.getElementById("guess").value = "";
}

function normalize(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}

function checkAnswer() {
  const userGuess = normalize(document.getElementById("guess").value);
  const correct = normalize(quotes[currentQuoteIndex].autore);

  const result = document.getElementById("result");

  if (userGuess === correct) {
    result.textContent = "✔ Corretto!";
    result.style.color = "green";
  } else {
    result.textContent = `✖ Sbagliato. Era: ${quotes[currentQuoteIndex].autore}`;
    result.style.color = "red";
  }

  document.getElementById("meta").textContent =
    `Destinatario: ${quotes[currentQuoteIndex].destinatario}`;
}

function nextQuote() {
  pickRandomQuote();
}

// init
pickRandomQuote();
