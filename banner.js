document.addEventListener("DOMContentLoaded", () => {

const select = document.getElementById("guessInput");
const tbody = document.querySelector("#results tbody");
const bannerImg = document.getElementById("bannerImage");

const hintRegionBtn = document.getElementById("hint-region");
const hintAffiliationBtn = document.getElementById("hint-affiliation");
const hintLetterBtn = document.getElementById("hint-letter");
const hintOutput = document.getElementById("hint-output");

const winPopup = document.getElementById("winPopup");
const closeWinPopup = document.getElementById("closeWinPopup");

const victoryCard = document.getElementById("victory-card");

const guessed = [];
let wrongCount = 0;

// =========================
// POPUP CLOSE
// =========================
closeWinPopup.addEventListener("click", () => {
    winPopup.classList.add("hidden");
});

// =========================
// DAILY SEED
// =========================
const today = new Date();

const seed =
    today.getFullYear() * 10000 +
    (today.getMonth() + 1) * 100 +
    today.getDate();

function getDailyIndex(seed, length) {

    let value = 0;
    const str = seed.toString();

    for (let i = 0; i < str.length; i++) {
        value = ((value << 5) - value) + str.charCodeAt(i);
        value |= 0;
    }

    return Math.abs(value) % length;
}

const index = getDailyIndex(seed, houses.length);
const secretHouse = houses[index];

bannerImg.src = secretHouse.immagine;

// =========================
// DROPDOWN
// =========================
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

// =========================
// CHECK GUESS
// =========================
document.getElementById("guessButton")
    .addEventListener("click", checkGuess);

function checkGuess() {

    const guessName = select.value;
    if (!guessName) return;

    const guess = houses.find(h => h.nome === guessName);
    if (!guess) return;

    if (guessed.includes(guess.nome)) return;

    guessed.push(guess.nome);

    const correct = guess.nome === secretHouse.nome;

    renderRow(guess);
    renderDropdown();
    select.value = "";

    if (correct) {

        winPopup.classList.remove("hidden");

        victoryCard.textContent = "🎉 Hai indovinato la casata!";
        victoryCard.style.color = "gold";

        return;
    }

    wrongCount++;
    updateHints();

    victoryCard.textContent = "";
}

// =========================
// ROW UI
// =========================
function renderRow(house) {

    const row = document.createElement("tr");
    tbody.prepend(row);

    const data = [
        {
            value: house.nome,
            ok: house.nome === secretHouse.nome
        },
        {
            value: house.regione,
            ok: house.regione === secretHouse.regione
        },
        {
            value: house.affiliazione,
            ok: house.affiliazione === secretHouse.affiliazione
        }
    ];

    data.forEach(cell => {

        const td = document.createElement("td");
        td.textContent = cell.value;

        td.style.backgroundColor = cell.ok
            ? "#6ea76e"
            : "#a34b4b";

        td.style.color = "white";
        td.style.padding = "8px";

        row.appendChild(td);
    });
}

// =========================
// HINT SYSTEM
// =========================
function updateHints() {

    if (wrongCount >= 3) {
        hintRegionBtn.disabled = false;
        hintRegionBtn.onclick = () => {
            hintOutput.textContent =
                "🌍 Regione: " + secretHouse.regione;
        };
    }

    if (wrongCount >= 7) {
        hintAffiliationBtn.disabled = false;
        hintAffiliationBtn.onclick = () => {
            hintOutput.textContent =
                "🏰 Affiliazione: " + secretHouse.affiliazione;
        };
    }

    if (wrongCount >= 10) {
        hintLetterBtn.disabled = false;
        hintLetterBtn.onclick = () => {
            hintOutput.textContent =
                "🔤 Iniziale: " + secretHouse.nome.charAt(0);
        };
    }
}

});
