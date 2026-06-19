// --- CANCELLLA DOPO DEBUGGING - INIZIO ---
let debugDayOffset = 0;
// --- CANCELLLA DOPO DEBUGGING - FINE ---

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

    const str = seed.toString();

    for (let i = 0; i < str.length; i++) {
        value = ((value << 5) - value) + str.charCodeAt(i);
        value |= 0;
    }

    return Math.abs(value) % length;
}

// --- RIMETTILO POST DEBUG ---
//const today = new Date();

//const seed =
   //  today.getFullYear() * 10000 +
  //  (today.getMonth() + 1) * 100 +
//    today.getDate();

//SOSPESE PER ORA//
//const today = new Date();

//const seed =
   // today.getFullYear() * 10000 +
   // (today.getMonth() + 1) * 100 +
   // (today.getDate() + debugDayOffset);

// ==========================
// LOCATION OF THE DAY
// ==========================
//const index =
    //getDailyIndex(seed, locations.length);

//const current =
    //locations[index];
//DOPO TOGLI ANCHE QUESTO - INIZIO

function getCurrentLocation() {

    const today = new Date();

    const seed =
        today.getFullYear() * 10000 +
        (today.getMonth() + 1) * 100 +
        (today.getDate() + debugDayOffset);

    const index = getDailyIndex(seed, locations.length);

    return {
        index,
        location: locations[index]
    };
}
//DOPO TOGLI ANCHE QUESTO -FINE

// ==========================
// LOAD MAP
// ==========================
// SOSPESO
//mapImage.src =
  //  `images/map/${current.map}`;

//TOGLI DOPO
mapImage.src = `images/map/${getCurrentLocation().location.map}`;
//TOGLI DOPO - FINE

mapImage.onload = () => {
    placeMarker();
};

mapImage.onerror = () => {
    console.error(
        "Errore caricamento:",
        mapImage.src
    );
};

// ==========================
// MARKER . old
// ==========================
//function placeMarker() {

    //marker.style.display = "block";

    //marker.style.left =
        //current.x + "px";

  //  marker.style.top =
       // current.y + "px";
//}

//---NEW---
function placeMarker() {

    marker.style.display = "block";

    const rect = mapImage.getBoundingClientRect();

    // scala tra immagine originale e renderizzata
    const scaleX = rect.width / mapImage.naturalWidth;
    const scaleY = rect.height / mapImage.naturalHeight;

    const x = current.x * scaleX;
    const y = current.y * scaleY;

    marker.style.left = x + "px";
    marker.style.top = y + "px";
}
//--FINE NEW--

// ==========================
// DROPDOWN
// ==========================
function setupDropdown() {

    select.innerHTML =
        `<option value="">Seleziona un luogo</option>`;

    const names =
        [...new Set(locations.map(l => l.name))]
        .sort();

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

    const row =
        document.createElement("tr");

    row.innerHTML = `
        <td>${guess}</td>
        <td class="${correct ? "correct" : "wrong"}">
            ${correct ? "✔" : "✖"}
        </td>
    `;

    tbody.prepend(row);

    if (correct) {

        feedback.textContent =
            "🏆 Corretto!";

    } else {

        feedback.textContent =
            "✖ Sbagliato";
    }
}
//DEBUG
document.getElementById("nextMapBtn").addEventListener("click", () => {

    debugDayOffset++;

    // ricalcola tutto
    const newIndex = getDailyIndex(seed, locations.length);
    const newCurrent = locations[newIndex];

    current = newCurrent; // <-- IMPORTANT: vedi nota sotto

    mapImage.src = `images/map/${current.map}`;

    mapImage.onload = () => {
        placeMarker();
    };

    console.log("DEBUG MAP INDEX:", newIndex, current.name);
});
//FINE DEBUG
document
    .getElementById("checkBtn")
    .addEventListener("click", checkGuess);
