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
// SAFETY CHECK (IMPORTANTISSIMO)
// ==========================
if (!window.locations || locations.length === 0) {
    console.error("❌ locations non caricato o vuoto");
}

// ==========================
// LOAD LOCATION
// ==========================
const index = getDailyIndex(seed, locations.length);
const current = locations[index];

console.log("DEBUG CURRENT:", current);

// ==========================
// MAP IMAGE SAFE LOAD
// ==========================
const mapFile = current.map || "map1"; // fallback sicuro
mapImage.src = `images/map/${mapFile}.png`;

// se non carica la mappa
mapImage.onerror = () => {
    console.error("❌ Errore caricamento mappa:", mapImage.src);
};

// ==========================
// MARKER
// ==========================
function placeMarker() {
    marker.style.display = "block";

    marker.style.left = current.x + "px";
    marker.style.top = current.y + "px";
}

// quando immagine pronta
mapImage.onload = () => {
    placeMarker();
};

// ==========================
// DROPDOWN
// ==========================
function setupDropdown() {
    select.innerHTML = `<option value="">Seleziona un luogo</option>`;

    const names = [...new Set(locations.map(l => l.name))].sort();

    names.forEach(name => {
        const opt = document.createElement("option");
        opt.value = name;
        opt.textContent = name;
        select.appendChild(opt);
    });
}

setupDropdown();

// ==========================
// CHECK
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
        return;
    }

    feedback.textContent = "✖ Sbagliato";
}

document.getElementById("checkBtn").addEventListener("click", checkGuess);
