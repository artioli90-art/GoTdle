// ==========================
// GLOBAL STATE
// ==========================
const mapImage = document.getElementById("mapImage");
const marker = document.getElementById("marker");
const select = document.getElementById("guessInput");
const tbody = document.querySelector("#results tbody");
const feedback = document.getElementById("feedback");

let guessed = [];
let debugDayOffset = 0;

// ==========================
// DAILY HASH
// ==========================
function getDailyIndex(seed, length) {

    let value = 0;
    const str = seed.toString();

    for (let i = 0; i < str.length; i++) {
        value = ((value << 5) - value) + str.charCodeAt(i);
        value |= 0;
    }

    return Math.abs(value) % length;
}

// ==========================
// STATE (SINGLE SOURCE OF TRUTH)
// ==========================
function getState() {

    const today = new Date();

    const seed =
        today.getFullYear() * 10000 +
        (today.getMonth() + 1) * 100 +
        (today.getDate() + debugDayOffset);

    const index = getDailyIndex(seed, locations.length);

    return {
        index,
        current: locations[index]
    };
}

// ==========================
// RENDER ENGINE
// ==========================
function refreshMap() {

    const state = getState();

    mapImage.src = `images/map/${state.current.map}`;

    mapImage.onload = () => {
        placeMarker();
    };

    console.log("MAP DEBUG → index:", state.index, state.current.name);

    showDebugInfo(); // 👈 aggiunto
}

// ==========================
// MARKER
// ==========================
function placeMarker() {

    const state = getState();
    const current = state.current;

    marker.style.display = "block";

    const rect = mapImage.getBoundingClientRect();

    const scaleX = rect.width / mapImage.naturalWidth;
    const scaleY = rect.height / mapImage.naturalHeight;

    const x = current.x * scaleX;
    const y = current.y * scaleY;

    marker.style.left = x + "px";
    marker.style.top = y + "px";
}
//DEBUG INFO
function showDebugInfo() {

    const overlay = document.getElementById("debugOverlay");

    if (!debugMode) {
        overlay.style.display = "none";
        return;
    }

    const state = getState();

    overlay.style.display = "block";
    overlay.innerHTML = `
        🧭 DEBUG MODE<br>
        Map Index: ${state.index}<br>
        Location: ${state.current.name}<br>
        Map file: ${state.current.map}
    `;
}

// ==========================
// INIT MAP
// ==========================
refreshMap();

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
// GUESS CHECK
// ==========================
function checkGuess() {

    const state = getState();
    const current = state.current;

    const guess = select.value;

    if (!guess) return;
    if (guessed.includes(guess)) return;

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

    feedback.textContent = correct
        ? "🏆 Corretto!"
        : "✖ Sbagliato";
}

// ==========================
// EVENTS
// ==========================
document.getElementById("checkBtn")
    .addEventListener("click", checkGuess);

// ==========================
// DEBUG CONTROLS (NEXT / PREV MAP)
// ==========================
document.getElementById("nextMapBtn")?.addEventListener("click", () => {
    debugDayOffset++;
    refreshMap();
});

document.getElementById("prevMapBtn")?.addEventListener("click", () => {
    debugDayOffset--;
    refreshMap();
});

mapImage.addEventListener("click", (e) => {

    if (!debugMode) return;

    const rect = mapImage.getBoundingClientRect();

    const scaleX = mapImage.naturalWidth / rect.width;
    const scaleY = mapImage.naturalHeight / rect.height;

    const x = Math.round((e.clientX - rect.left) * scaleX);
    const y = Math.round((e.clientY - rect.top) * scaleY);

    console.log("📍 COORDINATE:");
    console.log("x:", x, "y:", y);
    console.log(`{ x: ${x}, y: ${y}, map: "${getState().current.map}" }`);

    // marker visivo immediato (opzionale)
    marker.style.display = "block";
    marker.style.left = (e.clientX - rect.left) + "px";
    marker.style.top = (e.clientY - rect.top) + "px";
});

