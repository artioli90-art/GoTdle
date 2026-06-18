const mapImage = document.getElementById("mapImage");
const marker = document.getElementById("marker");
const select = document.getElementById("guessInput");
const tbody = document.querySelector("#results tbody");
const feedback = document.getElementById("feedback");

const scaleX = rect.width / getMapWidth(current.map);
const scaleY = rect.height / getMapHeight(current.map);

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
// LOAD LOCATION
// ==========================
const index = getDailyIndex(seed, locations.length);
const current = locations[index];

// normalizzazione coordinate (BASE 900x500 viewport) -- provoa a commentarli
//const VIEWPORT_W = 900;
//const VIEWPORT_H = 500;

// ==========================
// MAP LOAD
// ==========================
mapImage.src = `images/map/${current.map}`;

mapImage.onload = () => {
    placeMarker();
};

// fallback safety
mapImage.onerror = () => {
    console.error("Errore caricamento mappa:", mapImage.src);
};

// ==========================
// MARKER FIX (CORRETTO)
// ==========================
function placeMarker() {
    marker.style.display = "block";

    // IMPORTANTISSIMO:
    // coordinate normalizzate rispetto alla "mappa logica"
    // (assumiamo che tutte le mappe siano scalate a viewport)
   // const x = (current.x / getMapWidth(current.map)) * VIEWPORT_W;
   // const y = (current.y / getMapHeight(current.map)) * VIEWPORT_H;

//    marker.style.left = x + "px";
  //  marker.style.top = y + "px";
//}
    const x = current.x * scaleX;
    const y = current.y * scaleY;

    marker.style.left = x + "px";
    marker.style.top = y + "px";

// ==========================
// DIMENSIONI MAPPE (CRUCIALE)
// ==========================
function getMapWidth(map) {
    if (map === "map1.png") return 220;  // max X map1 ~ 202
    if (map === "map2.png") return 240;
    if (map === "map3.png") return 150;
    if (map === "map4.png") return 160;
    if (map === "map5.png") return 130;
    return 220;
}

function getMapHeight(map) {
    if (map === "map1.png") return 230;
    if (map === "map2.png") return 250;
    if (map === "map3.png") return 260;
    if (map === "map4.png") return 170;
    if (map === "map5.png") return 270;
    return 230;
}

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
    } else {
        feedback.textContent = "✖ Sbagliato";
    }
}

document.getElementById("checkBtn").addEventListener("click", checkGuess);
