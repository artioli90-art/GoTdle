const mapImage = document.getElementById("mapImage");
const marker = document.getElementById("marker");
const select = document.getElementById("guessInput");
const tbody = document.querySelector("#results tbody");
const feedback = document.getElementById("feedback");

let guessed = [];

// ==========================
// DAILY SEED
// ==========================
function getDailyIndex(seed, length) {
    let value = 0;

    for (let i = 0; i < seed.toString().length; i++) {
        value = ((value << 5) - value) + seed.toString().charCodeAt(i);
        value |= 0;
    }

    return Math.abs(value) % length;
}

const today = new Date();
const seed =
    today.getFullYear() * 10000 +
    (today.getMonth() + 1) * 100 +
    today.getDate();

// ==========================
// LOAD DATA (da map.js)
// ==========================
const index = getDailyIndex(seed, locations.length);
const current = locations[index];

// immagine fissa mappa
mapImage.src = "images/map/map.png";

mapImage.style.left = "-800px";
mapImage.style.top = "-200px";

// ==========================
// MARKER POSITION - versione vecchia
// ==========================
//function placeMarker() {
  //  marker.style.display = "block";

  //  marker.style.left = current.x + "px";
  //  marker.style.top = current.y + "px";
//}

// ==========================
// MARKER POSITION - versione nuova
// ==========================
function placeMarker() {
    marker.style.display = "block";

    marker.style.left = current.x + "px";
    marker.style.top = current.y + "px";

    marker.style.zIndex = "999";
}
// ==========================
// DROPDOWN
// ==========================
function setupDropdown() {
    select.innerHTML = `<option value="">Seleziona un luogo</option>`;

    const names = [...new Set(locations.map(l => l.name))];

    names.forEach(name => {
        const opt = document.createElement("option");
        opt.value = name;
        opt.textContent = name;
        select.appendChild(opt);
    });
}

setupDropdown();

// ==========================
// HINTS
// ==========================
function getHint() {
    if (guessed.length === 3) {
        feedback.textContent = "📍 Regione: " + current.region;
    }

    if (guessed.length === 6) {
        feedback.textContent = "🏰 Casata: " + current.house;
    }

    if (guessed.length === 9) {
        feedback.textContent = "🔤 Inizia con: " + current.name[0].toUpperCase();
    }
}

// ==========================
// RESULTS
// ==========================
function addResult(name, correct) {
    const row = document.createElement("tr");

    const guessCell = document.createElement("td");
    guessCell.textContent = name;

    const resultCell = document.createElement("td");
    resultCell.textContent = correct ? "✔" : "✖";

    resultCell.className = correct ? "correct" : "wrong";

    row.appendChild(guessCell);
    row.appendChild(resultCell);

    tbody.prepend(row);
}

// ==========================
// CHECK
// ==========================
function checkGuess() {
    const guess = select.value;

    if (!guess) return;
    if (guessed.includes(guess)) return;

    guessed.push(guess);

    const correct = guess === current.name;

    addResult(guess, correct);

    if (correct) {
        feedback.textContent = "🏆 Corretto!";
        placeMarker();
        return;
    }

    feedback.textContent = "✖ Sbagliato";

    getHint();
}

document.getElementById("checkBtn").addEventListener("click", checkGuess);
