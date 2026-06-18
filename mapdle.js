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
// PERSONAGGIO DEL GIORNO
// ==========================
const index = getDailyIndex(seed, locations.length);
const current = locations[index];

// ==========================
// COSTANTI VIEWPORT
// ==========================
const VIEWPORT_WIDTH = 900;
const VIEWPORT_HEIGHT = 500;

// ==========================
// MAPPA
// ==========================
mapImage.src = "images/map/map.png";

// ==========================
// ZOOM CENTRATO SUL PUNTO
// ==========================
function centerMap() {

    const zoom = 1.6; // 👈 regola qui zoom generale

    const offsetX = VIEWPORT_WIDTH / 2 - (current.x * zoom);
    const offsetY = VIEWPORT_HEIGHT / 2 - (current.y * zoom);

    mapImage.style.transformOrigin = "top left";
    mapImage.style.transform =
        `translate(${offsetX}px, ${offsetY}px) scale(${zoom})`;

    placeMarker(offsetX, offsetY, zoom);
}

// ==========================
// MARKER CORRETTO (FIX DEFINITIVO)
// ==========================
function placeMarker(offsetX, offsetY, zoom) {

    marker.style.display = "block";

    const x = current.x * zoom + offsetX;
    const y = current.y * zoom + offsetY;

    marker.style.left = x + "px";
    marker.style.top = y + "px";
}

// ==========================
// ON IMAGE LOAD
// ==========================
mapImage.onload = () => {
    centerMap();
};

// ==========================
// DROPDOWN
// ==========================
function setupDropdown() {

    select.innerHTML =
        `<option value="">Seleziona un luogo</option>`;

    const names =
        [...new Set(locations.map(l => l.name))];

    names.sort();

    names.forEach(name => {

        const opt =
            document.createElement("option");

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
        feedback.textContent =
            "📍 Regione: " + current.region;
    }

    if (guessed.length === 6) {
        feedback.textContent =
            "🏰 Casata: " + current.house;
    }

    if (guessed.length === 9) {
        feedback.textContent =
            "🔤 Inizia con: " +
            current.name[0].toUpperCase();
    }
}

// ==========================
// RESULTS
// ==========================
function addResult(name, correct) {

    const row =
        document.createElement("tr");

    const guessCell =
        document.createElement("td");

    const resultCell =
        document.createElement("td");

    guessCell.textContent = name;

    resultCell.textContent =
        correct ? "✔" : "✖";

    resultCell.className =
        correct ? "correct" : "wrong";

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

    if (guessed.includes(guess))
        return;

    guessed.push(guess);

    const correct =
        guess === current.name;

    addResult(guess, correct);

    if (correct) {

        feedback.textContent =
            "🏆 Corretto!";

        return;
    }

    feedback.textContent =
        "✖ Sbagliato";

    getHint();
}

document
    .getElementById("checkBtn")
    .addEventListener("click", checkGuess);
