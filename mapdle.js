const mapInner = document.getElementById("mapInner");
const mapImage = document.getElementById("mapImage");
const marker = document.getElementById("marker");

const MAP_WIDTH = 3358;
const MAP_HEIGHT = 1681;

const VIEW_W = 900;
const VIEW_H = 500;

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

const index = getDailyIndex(seed, locations.length);
const current = locations[index];

// ==========================
// INIT MAP
// ==========================
mapImage.src = "images/map/map.png";

// ==========================
// PLACE MARKER (SEMPRE)
// ==========================
function placeMarker() {
    marker.style.left = current.x + "px";
    marker.style.top = current.y + "px";
}

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
// ==========================
// CENTER CAMERA ON TARGET
// ==========================
function centerMapOnTarget() {
    const scale = 0.32;

    const scaledW = MAP_WIDTH * scale;
    const scaledH = MAP_HEIGHT * scale;

    const targetX = current.x * scale;
    const targetY = current.y * scale;

    const offsetX = (VIEW_W / 2) - targetX;
    const offsetY = (VIEW_H / 2) - targetY;

    mapInner.style.transform =
        `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
}

// ==========================
// INIT
// ==========================
mapImage.onload = () => {
    placeMarker();
    centerMapOnTarget();
};

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
