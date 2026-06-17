const images = [
  {
    image: "images/zoom/daenerys1.png",
    answer: "Daenerys Targaryen"
  },
  {
    image: "images/zoom/jon1.png",
    answer: "Jon Snow"
  },
  {
    image: "images/zoom/tyrion1.png",
    answer: "Tyrion Lannister"
  }
];

const wrapper = document.getElementById("imageWrapper");
const select = document.getElementById("guessInput");
const feedback = document.getElementById("feedback");
const tbody = document.querySelector("#results tbody");

let errors = 0;
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

const index = getDailyIndex(seed, images.length);
const current = images[index];
const solution = current.answer;

// ==========================
// INIT IMAGE old
// ==========================
wrapper.style.backgroundImage = `url("${current.image}")`;

// ==========================
// INIT IMAGE NEW
// ==========================
const img = new Image();


img.onload = () => {
  wrapper.style.backgroundImage = `url("${current.image}")`;
  wrapper.style.backgroundSize = "400%";
  wrapper.style.width = "320px";
  wrapper.style.height = "320px";
  wrapper.style.border = "3px solid black";
};
  
img.onerror = () => {
  console.error("Immagine non trovata:", current.image);
};
img.src = current.image;

// ==========================
// DROPDOWN
// ==========================
function setupDropdown() {
  select.innerHTML = `<option value="">Seleziona un personaggio</option>`;

  const names = [...new Set(images.map(i => i.answer))];

  names.forEach(name => {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    select.appendChild(opt);
  });
}

setupDropdown();

// ==========================
// ZOOM SYSTEM - OLD INIZIO
// ==========================
//function setZoom() {
  // reset SOLO classi zoom
  //wrapper.classList.forEach(c => {
   // if (c.startsWith("z")) wrapper.classList.remove(c);
  //});

  //let zoom = 400 - (errors * 10);
  //if (zoom < 100) zoom = 100;

  //wrapper.classList.add("z" + zoom);
//}

// setZoom();
//OLD ZOOM - FINE

//ZOOM NUOVO - INIZIO
function setZoom() {

  let zoom = 400 - (errors * 10);

  if (zoom < 100) zoom = 100;

  wrapper.style.backgroundSize = zoom + "%";

  console.log("Zoom:", zoom);
}

//ZOOM NUOVO - FINE

// ==========================
// RESULTS
// ==========================
function addResult(name, correct) {
  const row = document.createElement("tr");
  const td = document.createElement("td");

  td.textContent = name;
  td.className = correct ? "correct" : "wrong";

  row.appendChild(td);
  tbody.prepend(row);
}

// ==========================
// CHECK
// ==========================
function checkGuess() {
  const guess = select.value;

  if (!guess) return;
  
   if (guessed.includes(guess)) return;
  guessed.push(guess);
const correct = guess === solution;
    addResult(guess, correct);
  if (correct) {
    wrapper.style.backgroundSize = "100%";
    //wrapper.className = "image-wrapper z100";
    feedback.textContent = "🏆 Corretto!";
    feedback.style.color = "green";
    return;
  }

  errors++;
  setZoom();

  feedback.textContent = "✖ Sbagliato";
  feedback.style.color = "red";
}

document.getElementById("checkBtn").addEventListener("click", checkGuess);
