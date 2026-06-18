const canvas = document.getElementById("mapCanvas");
const marker = document.getElementById("marker");
const select = document.getElementById("guessInput");
const feedback = document.getElementById("feedback");
const tbody = document.querySelector("#results tbody");

let guessed = [];

// ==========================
// MAP SETTINGS
// ==========================
const MAP_W = 3358;
const MAP_H = 1681;

const VIEW_W = 900;
const VIEW_H = 500;

// zoom base (più piccolo = più zoom)
const BASE_ZOOM = 0.25;

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
// INIT DROPDOWN
// ==========================
function setupDropdown() {
    select.innerHTML = `<option value="">Seleziona luogo</option>`;

    locations.forEach(l => {
        const opt = document.createElement("option");
        opt.value = l.name;
        opt.textContent = l.name;
        select.appendChild(opt);
    });
}

setupDropdown();

// ==========================
// PLACE MARKER
// ==========================
function placeMarker() {
    marker.style.left = current.x + "px";
    marker.style.top = current.y + "px";
}

// ==========================
// CAMERA (zoom + focus)
// ==========================
function centerOnTarget() {

    const scale = BASE_ZOOM;

    const scaledX = current.x * scale;
    const scaledY = current.y * scale;

    const offsetX = (VIEW_W / 2) - scaledX;
    const offsetY = (VIEW_H / 2) - scaledY;

    canvas.style.transform =
        `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
}

// ==========================
// INIT MAP
// ==========================
window.onload = () => {
    placeMarker();
    centerOnTarget();
};

// ==========================
// GAME
// ==========================
function checkGuess() {
    const guess = select.value;

    if (!guess || guessed.includes(guess)) return;
    guessed.push(guess);

    const correct = guess === current.name;

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${guess}</td>
        <td class="${correct ? "correct" : "wrong"}">
            ${correct ? "✔" : "✖"}
        </td>
    `;

    tbody.prepend(row);

    if (correct) {
        feedback.textContent = "🏆 Corretto!";
        marker.style.background = "lime";
    } else {
        feedback.textContent = "✖ Sbagliato";

        // piccolo shake “game feel”
        let z = parseFloat(canvas.dataset.zoom || BASE_ZOOM);
        z = Math.max(0.18, z - 0.02);
        canvas.dataset.zoom = z;

        canvas.style.transform =
            `translate(${parseFloat(canvas.style.left||0)}px, ${parseFloat(canvas.style.top||0)}px) scale(${z})`;
    }
}

document.getElementById("checkBtn").addEventListener("click", checkGuess);
