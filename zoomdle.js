const images = [
  {
    image: "images/daenerys1.png",
    answer: "Daenerys Targaryen"
  },
];

let errors = 0;

const today = new Date();

const seed =
    today.getFullYear() * 10000 +
    (today.getMonth() + 1) * 100 +
    today.getDate();

const index = getDailyIndex(seed, images.length);

const currentCharacter = images[index];

wrapper.style.backgroundImage =
  `url("${currentCharacter.image}")`;

const solution = currentCharacter.answer;

const wrapper = document.getElementById("imageWrapper");
const input = document.getElementById("guessInput");
const feedback = document.getElementById("feedback");

//NUOVO ZOOM
function setZoom(force = null) {
  wrapper.classList.remove("z400","z300","z200","z150","z100");

  const level = force !== null ? force : errors;

  if (level === 0) wrapper.classList.add("z400");
  else if (level === 1) wrapper.classList.add("z300");
  else if (level === 2) wrapper.classList.add("z200");
  else if (level === 3) wrapper.classList.add("z150");
  else wrapper.classList.add("z100");

function check() {
  const guess = input.value.trim();

  //MENU TENDINA:

const input = document.getElementById("guessInput");
  const options = [
  "Robb Stark",
  "Cersei Lannister",
  "Daenerys Targaryen",
  "Robert Baratheon"
];

options.forEach(name => {
  const option = document.createElement("option");
  option.value = name;
  option.textContent = name;

  input.appendChild(option);
});
  //FINE MENU TENDINA:

  if (!guess) return;
  
  //NUOVA
  if (guess.toLowerCase() === solution.toLowerCase()) {
  feedback.textContent = "✔ Corretto!";
  feedback.style.color = "green";

  setZoom(4); // forza 100% (vittoria)

  return;
}

  errors++;
  setZoom();

  feedback.textContent = "✖ Sbagliato";
  feedback.style.color = "red";
}

document.getElementById("checkBtn").addEventListener("click", check);

setZoom();
