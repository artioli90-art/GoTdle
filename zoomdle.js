const guessedCharacters = [];

const wrapper = document.getElementById("imageWrapper");
const select = document.getElementById("guessInput");
const tbody = document.querySelector("#results tbody");

// ==========================
// PERSONAGGIO DEL GIORNO
// ==========================

function getDailyIndex(seed, length) {
let hash = seed.toString();

```
let value = 0;

for (let i = 0; i < hash.length; i++) {
    value = ((value << 5) - value) + hash.charCodeAt(i);
    value |= 0;
}

return Math.abs(value) % length;
```

}

const today = new Date();

const seed =
today.getFullYear() * 10000 +
(today.getMonth() + 1) * 100 +
today.getDate();

const index = getDailyIndex(seed, zoomCharacters.length);

const secretCharacter = zoomCharacters[index];

// ==========================
// IMMAGINE
// ==========================

wrapper.style.backgroundImage =
`url("${secretCharacter.image}")`;

// ==========================
// DROPDOWN
// ==========================

function renderDropdown() {

```
select.innerHTML = "";

const defaultOption = document.createElement("option");

defaultOption.value = "";
defaultOption.textContent = "-- Seleziona un personaggio --";

select.appendChild(defaultOption);

zoomCharacters
    .map(c => c.answer)
    .sort()
    .forEach(name => {

        const option = document.createElement("option");

        option.value = name;
        option.textContent = name;

        select.appendChild(option);
    });
```

}

renderDropdown();

// ==========================
// ZOOM
// ==========================

let errors = 0;

function setZoom() {

```
wrapper.className = "image-wrapper";

const zoomValue = Math.max(100, 500 - (errors * 40));

wrapper.classList.add("z" + zoomValue);
```

}

setZoom();

// ==========================
// RISULTATI
// ==========================

function addResult(name, correct) {

```
const row = document.createElement("tr");

const td = document.createElement("td");

td.textContent = name;

td.classList.add(
    correct ? "correct" : "wrong"
);

row.appendChild(td);

tbody.prepend(row);
```

}

// ==========================
// CHECK
// ==========================

document
.getElementById("guessButton")
.addEventListener("click", checkGuess);

function checkGuess() {

```
const guess = select.value;

if (!guess) return;

if (guessedCharacters.includes(guess))
    return;

guessedCharacters.push(guess);

const correct =
    guess === secretCharacter.answer;

addResult(guess, correct);

if (correct) {

    wrapper.className =
        "image-wrapper z100";

    alert("🏆 Hai indovinato!");

    return;
}

errors++;

setZoom();
```

}
