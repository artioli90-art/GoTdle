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
let debugMode = false;

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
// STATE ENGINE (SINGLE SOURCE OF TRUTH)
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

    console.log("MAP →", state.index, state.current.name);

    showDebugInfo();
}

// ==========================
// MARKER
// ==========================
function placeMarker() {

    const state = getState();
    const current = state.current;

    if (!mapImage || !marker) return;

    marker.style.display = "block";

    const rect = mapImage.getBoundingClientRect();

    const scaleX = rect.width / mapImage.naturalWidth;
    const scaleY = rect.height / mapImage.naturalHeight;

    marker.style.left = (current.x * scaleX) + "px";
    marker.style.top = (current.y * scaleY) + "px";
}

// ==========================
// INIT
// ==========================
refreshMap();

// ==========================
// DROPDOWN
// ==========================
function setupDropdown() {

    if (!select) return;

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

    const guess = select?.value;

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

    tbody?.prepend(row);

    if (feedback) {
        feedback.textContent = correct
            ? "🏆 Corretto!"
            : "✖ Sbagliato";
    }
}

document.getElementById("checkBtn")?.addEventListener("click", checkGuess);

// ==========================
// DEBUG CONTROLS
// ==========================
document.getElementById("nextMapBtn")?.addEventListener("click", () => {
    debugDayOffset++;
    refreshMap();
});

document.getElementById("prevMapBtn")?.addEventListener("click", () => {
    debugDayOffset--;
    refreshMap();
});

// ==========================
// DEBUG TOGGLE + OVERLAY
// ==========================
document.getElementById("toggleDebugBtn")?.addEventListener("click", () => {
    debugMode = !debugMode;
    console.log("DEBUG MODE:", debugMode);
    showDebugInfo();
});

function showDebugInfo() {

    const overlay = document.getElementById("debugOverlay");
    if (!overlay) return;

    if (!debugMode) {
        overlay.style.display = "none";
        return;
    }

    const state = getState();

    overlay.style.display = "block";
    overlay.innerHTML = `
        🧭 DEBUG MODE<br>
        Index: ${state.index}<br>
        Name: ${state.current.name}<br>
        Map: ${state.current.map}
    `;
}

// ==========================
// CLICK → COORDINATE DEBUG
// ==========================
mapImage?.addEventListener("click", (e) => {

    if (!debugMode) return;

    const rect = mapImage.getBoundingClientRect();

    const scaleX = mapImage.naturalWidth / rect.width;
    const scaleY = mapImage.naturalHeight / rect.height;

    const x = Math.round((e.clientX - rect.left) * scaleX);
    const y = Math.round((e.clientY - rect.top) * scaleY);

    console.log("📍 COORDS:", x, y);
    console.log(`{ x: ${x}, y: ${y}, map: "${getState().current.map}" }`);

    marker.style.display = "block";
    marker.style.left = (e.clientX - rect.left) + "px";
    marker.style.top = (e.clientY - rect.top) + "px";
});
