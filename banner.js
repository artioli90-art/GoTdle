document.addEventListener("DOMContentLoaded", () => {

console.log("BannerDle loaded");

const select = document.getElementById("guessInput");
const img = document.getElementById("bannerImage");

if (!select) console.error("SELECT NON TROVATO");
if (!img) console.error("IMG NON TROVATA");
if (typeof houses === "undefined") console.error("HOUSES NON CARICATO");

const guessed = [];

// sicurezza base
if (!houses || houses.length === 0) {
    console.error("houses.js vuoto o non caricato");
    return;
}

// seed daily
const today = new Date();
const seed =
    today.getFullYear() * 10000 +
    (today.getMonth() + 1) * 100 +
    today.getDate();

const secret = houses[seed % houses.length];

console.log("SECRET:", secret.nome);

// immagine
img.src = secret.immagine;

// dropdown
function renderDropdown() {

    select.innerHTML = "";

    const opt0 = document.createElement("option");
    opt0.textContent = "-- Seleziona --";
    opt0.value = "";
    select.appendChild(opt0);

    houses.forEach(h => {
        if (guessed.includes(h.nome)) return;

        const opt = document.createElement("option");
        opt.value = h.nome;
        opt.textContent = h.nome;

        select.appendChild(opt);
    });

    console.log("Dropdown size:", select.children.length);
}

renderDropdown();

// guess
document.getElementById("guessButton").addEventListener("click", () => {

    const value = select.value;
    if (!value) return;

    const h = houses.find(x => x.nome === value);
    if (!h) return;

    guessed.push(h.nome);

    console.log("Guess:", h.nome);

    renderDropdown();

    if (h.nome === secret.nome) {
        document.getElementById("victory-card").innerHTML =
            "<h2>VITTORIA</h2>";
    }
});

});
