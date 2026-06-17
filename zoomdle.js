const guessedCharacters = [];

const wrapper = document.getElementById("imageWrapper");
const input = document.getElementById("guessInput");
const feedback = document.getElementById("feedback");

const images = [
  {
    image: "images/zoom/daenerys1.png",
    answer: "Daenerys Targaryen"
  }
];

let errors = 0;
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

function getDailyIndex(seed, length) {
  let hash = seed.toString();
  let value = 0;

  for (let i = 0; i < hash.length; i++) {
    value = ((value << 5) - value) + hash.charCodeAt(i);
    value |= 0;
  }

  return Math.abs(value) % length;
}

const index = getDailyIndex(seed, images.length);
const currentCharacter = images[index];
const solution = currentCharacter.answer;

//  QUESTO QUI DOPO CHE WRAPPER
wrapper.style.backgroundImage = `url("${currentCharacter.image}")`;

// ==========================
// DROPDOWN
// ==========================

function setupDropdown() {
  const select = document.getElementById("guessInput");

  select.innerHTML = `<option value="">Seleziona un personaggio</option>`;

  const names = [...new Set(images.map(i => i.answer))];

  names.forEach(name => {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    select.appendChild(opt);

      
  });
}

setupDropdown();

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
