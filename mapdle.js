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

const today = new Date();

const seed =
    today.getFullYear() * 10000 +
    (today.getMonth() + 1) * 100 +
    today.getDate();

// ==========================
// LOCATION OF THE DAY
// ==========================
const index =
    getDailyIndex(seed, locations.length);

const current =
    locations[index];

// ==========================
// LOAD MAP
// ==========================
mapImage.src =
    `images/map/${current.map}`;

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
// MARKER - SOSPESO PER ORA
// ==========================
//function placeMarker() {

  //  marker.style.display = "block";

  //  marker.style.left =
       // current.x + "px";

  //  marker.style.top =
      //  current.y + "px";
}
//DEBUG ON

console.log(
    current.name,
    current.x,
    current.y
);

marker.style.left = current.x + "px";
marker.style.top = current.y + "px";

//DEBUG OFF

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

document
    .getElementById("checkBtn")
    .addEventListener("click", checkGuess);
