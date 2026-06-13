document.addEventListener("DOMContentLoaded", () => {

const guessedCharacters = [];

const select = document.getElementById("guessInput");
const tbody = document.querySelector("#results tbody");

// ===============================
// PERSONAGGIO DEL GIORNO
// ===============================
const today = new Date();

const seed =
    today.getFullYear() * 10000 +
    (today.getMonth() + 1) * 100 +
    today.getDate();

const index = seed % characters.length;

const secretCharacter = characters[index];

document.getElementById("daily-number").textContent =
    `Personaggio del giorno #${seed}`;

// ===============================
// POPOLA DROPDOWN
// ===============================
function renderDropdown() {

    select.innerHTML = "";

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "-- Seleziona un personaggio --";
    select.appendChild(defaultOption);

    characters
        .filter(c =>
            !guessedCharacters
                .some(g => g.toLowerCase() === c.nome.toLowerCase())
        )
        .sort((a, b) => a.nome.localeCompare(b.nome))
        .forEach(c => {

            const option = document.createElement("option");
            option.value = c.nome;
            option.textContent = c.nome;

            select.appendChild(option);
        });
}

renderDropdown();

// ===============================
// CHECK GUESS
// ===============================
document.getElementById("guessButton").addEventListener("click", checkGuess);

function checkGuess() {

    const guessName = select.value;

    if (!guessName) return;

    const guess = characters.find(c => c.nome === guessName);

    if (!guess) {
        alert("Personaggio non trovato");
        return;
    }

    if (guessedCharacters.includes(guess.nome)) {
        alert("Già provato!");
        return;
    }

    guessedCharacters.push(guess.nome);

    displayResult(guess);

    renderDropdown();

    select.value = "";

    if (guess.nome === secretCharacter.nome) {
    alert("Hai vinto!");
}
}

// ===============================
// DISPLAY RESULT
// ===============================
function displayResult(character) {

    const row = document.createElement("tr");
    tbody.prepend(row);

    const data = [
        {
            value: character.nome,
            correct: character.nome === secretCharacter.nome
        },
        {
            value: character.casata,
            correct: character.casata === secretCharacter.casata
        },
        {
            value: character.sesso,
            correct: character.sesso === secretCharacter.sesso
        },
        {
            value: character.regione,
            correct: character.regione === secretCharacter.regione
        },
        {
    value:
        character.stagione === secretCharacter.stagione
            ? character.stagione
            : character.stagione + " " +
              (character.stagione < secretCharacter.stagione ? "↑" : "↓"),

    correct: character.stagione === secretCharacter.stagione
},
        {
            value: character.stato,
            correct: character.stato === secretCharacter.stato
        }
    ];

    data.forEach((cell, i) => {

        setTimeout(() => {

            const td = document.createElement("td");

            td.textContent = cell.value;

            td.style.background =
    cell.correct
        ? "#7c9c5b"
        : "#8b3a3a";

            td.style.animation = "flipIn 0.35s ease forwards";

            row.appendChild(td);

        }, i * 500);
    });
}

});
