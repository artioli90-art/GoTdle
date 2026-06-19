// ==========================
// GLOBAL STATE
// ==========================
const mapImage = document.getElementById("mapImage");
const marker = document.getElementById("marker");
const select = document.getElementById("guessInput");
const tbody = document.querySelector("#results tbody");
const feedback = document.getElementById("feedback");

let guessed = [];

// ==========================
// SEEDED RANDOM
// ==========================
function mulberry32(seed) {

    return function() {

        let t = seed += 0x6D2B79F5;

        t = Math.imul(
            t ^ (t >>> 15),
            t | 1
        );

        t ^= t + Math.imul(
            t ^ (t >>> 7),
            t | 61
        );

        return (
            (t ^ (t >>> 14)) >>> 0
        ) / 4294967296;
    };
}

function shuffle(array, seed) {

    const rng = mulberry32(seed);

    const arr = [...array];

    for (let i = arr.length - 1; i > 0; i--) {

        const j = Math.floor(
            rng() * (i + 1)
        );

        [arr[i], arr[j]] =
            [arr[j], arr[i]];
    }

    return arr;
}

// ==========================
// STATE ENGINE
// ==========================
function getState() {

    const today = new Date();

    const seed =
        today.getFullYear() * 10000 +
        (today.getMonth() + 1) * 100 +
        today.getDate();

    const shuffled =
        shuffle(locations, seed);

    return {
        current: shuffled[0]
    };
}

// ==========================
// MAP RENDER
// ==========================
function refreshMap() {

    const state = getState();

    mapImage.src =
        `images/map/${state.current.map}`;

    mapImage.onload = () => {
        placeMarker();
    };
}

// ==========================
// MARKER
// ==========================
function placeMarker() {

    const state = getState();
    const current = state.current;

    if (!mapImage || !marker)
        return;

    marker.style.display = "block";

    const rect =
        mapImage.getBoundingClientRect();

    const scaleX =
        rect.width /
        mapImage.naturalWidth;

    const scaleY =
        rect.height /
        mapImage.naturalHeight;

    marker.style.left =
        (current.x * scaleX) + "px";

    marker.style.top =
        (current.y * scaleY) + "px";
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

    select.innerHTML =
        `<option value="">Seleziona un luogo</option>`;

    const names =
        [...new Set(
            locations.map(l => l.name)
        )].sort();

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
// GUESS CHECK
// ==========================
function checkGuess() {

    const state = getState();
    const current = state.current;

    const guess = select?.value;

    if (!guess) return;

    if (guessed.includes(guess))
        return;

    guessed.push(guess);

    const correct =
        guess === current.name;

    const row =
        document.createElement("tr");

    row.innerHTML = `
        <td>${guess}</td>
        <td class="${correct ? "correct" : "wrong"}">
            ${correct ? "✔" : "✖"}
        </td>
    `;

    tbody?.prepend(row);

    if (feedback) {

        feedback.textContent =
            correct
                ? "🏆 Corretto!"
                : "✖ Sbagliato";
    }
}

document
    .getElementById("checkBtn")
    ?.addEventListener(
        "click",
        checkGuess
    );
