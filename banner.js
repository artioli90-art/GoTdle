const guessed = [];
const hintOutput = document.getElementById("hint-output");
const victoryCard = document.getElementById("victory-card");
const select = document.getElementById("guessInput");
const tbody = document.querySelector("#results tbody");
const bannerImg = document.getElementById("bannerImage");
const finalMessage = document.getElementById("final-message");

// =====================
// CASA DEL GIORNO
// =====================
const today = new Date();

const seed =
    today.getFullYear() * 10000 +
    (today.getMonth() + 1) * 100 +
    today.getDate();

const index = seed % houses.length;

const secretHouse = houses[index];

bannerImg.src = secretHouse.immagine;

// =====================
// POPOLA DROPDOWN
// =====================
function renderDropdown() {
    select.innerHTML = "";

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "-- Seleziona una casata --";
    select.appendChild(defaultOption);

    houses
        .filter(h => !guessedCharacters.includes(h.nome))
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
