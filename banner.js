document.addEventListener("DOMContentLoaded", () => {

const select = document.getElementById("guessInput");
const tbody = document.querySelector("#results tbody");
const bannerImg = document.getElementById("bannerImage");
const hintOutput = document.getElementById("hint-output");
const victoryCard = document.getElementById("victory-card");

const guessed = [];
let wrongGuesses = 0;

// =====================
// CASATA DEL GIORNO
// =====================
const today = new Date();
const seed =
    today.getFullYear() * 10000 +
    (today.getMonth() + 1) * 100 +
    today.getDate();

const index = seed % houses.length;
const secret = houses[index];

// immagine casuale
bannerImg.src = secret.immagine;

// =====================
// DROPDOWN
// =====================
function renderDropdown() {

    select.innerHTML = "";

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "-- Seleziona una casata --";
    select.appendChild(defaultOption);

    houses
        .filter(h => !guessed.includes(h.nome))
        .sort((a, b) => a.nome.localeCompare(b.nome))
        .forEach(h => {

            const option = document.createElement("option");
            option.value = h.nome;
            option.textContent = h.nome;

            select.appendChild(option);
        });
}

renderDropdown();

// =====================
// GUESS
// =====================
document.getElementById("guessButton").addEventListener("click", checkGuess);

function checkGuess() {

    const value = select.value;
    if (!value) return;

    const house = houses.find(h => h.nome === value);
    if (!house) return;

    if (guessed.includes(house.nome)) return;

    guessed.push(house.nome);

    renderRow(house);
    renderDropdown();

    select.value = "";

    if (house.nome === secret.nome) {
        showVictory();
        return;
    }

    wrongGuesses++;
    checkHints();
}

// =====================
// ROW RESULT
// =====================
function renderRow(h) {

    const row = document.createElement("tr");
    tbody.prepend(row);

    const data = [
        { v: h.nome, ok: h.nome === secret.nome },
        { v: h.regione, ok: h.regione === secret.regione },
        { v: h.affiliazione, ok: h.affiliazione === secret.affiliazione }
    ];

    data.forEach((c, i) => {

        setTimeout(() => {

            const td = document.createElement("td");
            td.textContent = c.v;

            td.style.background = c.ok ? "#7c9c5b" : "#8b3a3a";

            row.appendChild(td);

        }, i * 200);
    });
}

// =====================
// HINTS (SEMPLICE MA FUNZIONANTE)
// =====================
function checkHints() {

    if (wrongGuesses === 3) {
        document.getElementById("hint-region").disabled = false;
    }

    if (wrongGuesses === 7) {
        document.getElementById("hint-affiliation").disabled = false;
    }

    if (wrongGuesses === 10) {
        document.getElementById("hint-letter").disabled = false;
    }

    document.getElementById("hint-region").onclick = () => {
        hintOutput.textContent = "Regione: " + secret.regione;
    };

    document.getElementById("hint-affiliation").onclick = () => {
        hintOutput.textContent = "Affiliazione: " + secret.affiliazione;
    };

    document.getElementById("hint-letter").onclick = () => {
        hintOutput.textContent = "Prima lettera: " + secret.nome.charAt(0);
    };
}

// =====================
// VICTORY CARD
// =====================
function showVictory() {

    victoryCard.innerHTML = `
        <div class="victory">
            <h2>🏆 Vittoria!</h2>
            <p>La casata era: <b>${secret.nome}</b></p>
        </div>
    `;
}

});    select.appendChild(defaultOption);

    houses
        .filter(h => !guessed.includes(h.nome))
        .sort((a, b) => a.nome.localeCompare(b.nome))
        .forEach(h => {

            const option = document.createElement("option");
            option.value = h.nome;
            option.textContent = h.nome;
            select.appendChild(option);
        });
}

// =========================
// CHECK GUESS
// =========================
document.getElementById("guessButton").addEventListener("click", checkGuess);

function checkGuess() {

    const guessName = select.value;
    if (!guessName) return;

    const guess = houses.find(h => h.nome === guessName);

    if (!guess) return;

    if (guessed.includes(guess.nome)) return;

    guessed.push(guess.nome);

    displayResult(guess);
    renderDropdown();
    select.value = "";

    if (guess.nome === secretHouse.nome) {
        showVictory();
    }

    updateHints();
}

// =========================
// DISPLAY RESULT
// =========================
function displayResult(house) {

    const row = document.createElement("tr");
    tbody.prepend(row);

    const data = [
        {
            value: house.nome,
            correct: house.nome === secretHouse.nome
        },
        {
            value: house.regione,
            correct: house.regione === secretHouse.regione
        },
        {
            value: house.affiliazione,
            correct: house.affiliazione === secretHouse.affiliazione
        }
    ];

    data.forEach((cell, i) => {

        setTimeout(() => {

            const td = document.createElement("td");

            td.textContent = cell.value;
            td.style.background = cell.correct ? "#4CAF50" : "#f44336";

            row.appendChild(td);

        }, i * 300);
    });
}

// =========================
// HINT SYSTEM (3-7-10)
// =========================
function updateHints() {

    const mistakes = guessed.length;

    const regionBtn = document.getElementById("hint-region");
    const affBtn = document.getElementById("hint-affiliation");
    const letterBtn = document.getElementById("hint-letter");
    const out = document.getElementById("hint-output");

    if (mistakes >= 3) {
        regionBtn.disabled = false;
        regionBtn.textContent = "Regione sbloccata";
    }

    if (mistakes >= 7) {
        affBtn.disabled = false;
        affBtn.textContent = "Affiliazione sbloccata";
    }

    if (mistakes >= 10) {
        letterBtn.disabled = false;
        letterBtn.textContent = "Prima lettera: " + secretHouse.nome[0];
    }

    regionBtn.onclick = () => out.textContent = secretHouse.regione;
    affBtn.onclick = () => out.textContent = secretHouse.affiliazione;
    letterBtn.onclick = () => out.textContent = secretHouse.nome[0];
}

// =========================
// VICTORY CARD
// =========================
function showVictory() {

    const card = document.getElementById("victory-card");

    card.innerHTML = `
        <h2>🏆 Vittoria!</h2>
        <p>Casata: ${secretHouse.nome}</p>
    `;

    card.style.opacity = "1";
}

renderDropdown();
updateHints();

});        .filter(h => !guessedCharacters.includes(h.nome))
        .sort((a, b) => a.nome.localeCompare(b.nome))
        .forEach(h => {
            const option = document.createElement("option");
            option.value = h.nome;
            option.textContent = h.nome;
            select.appendChild(option);
        });
}

renderDropdown();

// =====================
// AIUTI
// =====================
let errors = 0;

function updateHints() {
	

    const regionBtn = document.getElementById("hint-region");
    const affBtn = document.getElementById("hint-affiliation");
    const letterBtn = document.getElementById("hint-letter");

    if (errors >= 3) {
        regionBtn.disabled = false;
        regionBtn.textContent = "💡 Regione";
    }

    if (errors >= 7) {
        affBtn.disabled = false;
        affBtn.textContent = "💡 Affiliazione";
    }

    if (errors >= 10) {
        letterBtn.disabled = false;
        letterBtn.textContent = "💡 Prima lettera";
    }

    document.getElementById("hint-region").addEventListener("click", () => {
    hintOutput.textContent = `📍 Regione: ${secretHouse.regione}`;
});

document.getElementById("hint-affiliation").addEventListener("click", () => {
    hintOutput.textContent = `⚔️ Affiliazione: ${secretHouse.affiliazione}`;
});

document.getElementById("hint-letter").addEventListener("click", () => {
    hintOutput.textContent = `🔤 Iniziale: ${secretHouse.nome.charAt(0)}`;
});
}

// =====================
// CHECK GUESS
// =====================
document.getElementById("guessButton").addEventListener("click", checkGuess);

function checkGuess() {

    const guessName = select.value;
    if (!guessName) return;

    const guess = houses.find(h => h.nome === guessName);
    if (!guess) return;

    if (guessed.includes(guess.nome)) return;

    guessed.push(guess.nome);
    errors++;

    displayResult(guess);
    updateHints();
    renderDropdown();

    select.value = "";

if (guess.nome === secretHouse.nome) {
    alert("Hai vinto!");
}
}
    select.disabled = true;
    document.getElementById("guessButton").disabled = true;
}
}

// =====================
// RISULTATI
// =====================
function displayResult(house) {

    const row = document.createElement("tr");
    tbody.prepend(row);

    const data = [
        { value: house.nome, correct: house.nome === secretHouse.nome },
        { value: house.regione, correct: house.regione === secretHouse.regione },
        { value: house.affiliazione, correct: house.affiliazione === secretHouse.affiliazione }
    ];

    data.forEach((cell, i) => {

        setTimeout(() => {

            const td = document.createElement("td");
            td.textContent = cell.value;

            td.style.background = cell.correct ? "#7c9c5b" : "#8b3a3a";
            td.style.color = "black";

            row.appendChild(td);

        }, i * 400);
    });
}

// =====================
// FINE PARTITA
// =====================
function showWin() {

    const desc = secretHouse.descrizione;

    finalMessage.textContent = desc;
}
}
