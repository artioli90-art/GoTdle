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

});
