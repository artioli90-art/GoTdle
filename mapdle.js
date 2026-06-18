const mapImage = document.getElementById("mapImage");
const marker = document.getElementById("marker");
const select = document.getElementById("guessInput");
const tbody = document.querySelector("#results tbody");
const feedback = document.getElementById("feedback");

let guessed = [];

const VIEWPORT_W = 900;
const VIEWPORT_H = 500;
const MAP_W = 3358;
const MAP_H = 1681;

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

const index = getDailyIndex(seed, locations.length);
const current = locations[index];

// ==========================
// MAP INIT
// ==========================
mapImage.src = "images/map/map.png";

mapImage.onload = () => {
    render();
};

// ==========================
// CORE RENDER (MAP + MARKER)
// ==========================
function render() {

    const zoom = 1.2;

    // centro sul punto
    const offsetX = VIEWPORT_W / 2 - current.x * zoom;
    const offsetY = VIEWPORT_H / 2 - current.y * zoom;

    // applico SOLO alla mappa
    mapImage.style.transform =
        `translate(${offsetX}px, ${offsetY}px) scale(${zoom})`;

    // marker nello stesso sistema della mappa trasformata
    marker.style.display = "block";
    marker.style.left = (current.x * zoom + offsetX) + "px";
    marker.style.top = (current.y * zoom + offsetY) + "px";
}

// ==========================
// DROPDOWN
// ==========================
function setupDropdown() {

    select.innerHTML = `<option value="">Seleziona un luogo</option>`;

    const names = [...new Set(locations.map(l => l.name))];
    names.sort();

    for (const name of names) {
        const opt = document.createElement("option");
        opt.value = name;
        opt.textContent = name;
        select.appendChild(opt);
    }
}

setupDropdown();

// ==========================
// CHECK
// ==========================
document.getElementById("checkBtn").addEventListener("click", () => {

    const guess = select.value;
    if (!guess || guessed.includes(guess)) return;

    guessed.push(guess);

    const correct = guess === current.name;

    const row = document.createElement("tr");

    const a = document.createElement("td");
    const b = document.createElement("td");

    a.textContent = guess;
    b.textContent = correct ? "✔" : "✖";
    b.className = correct ? "correct" : "wrong";

    row.appendChild(a);
    row.appendChild(b);

    tbody.prepend(row);

    if (correct) {
        feedback.textContent = "🏆 Corretto!";
        return;
    }

    feedback.textContent = "✖ Sbagliato";
});
