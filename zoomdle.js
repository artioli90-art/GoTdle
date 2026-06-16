const solution = "Stark Banner"; // esempio

let errors = 0;

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
}
//VECCHIA //function setZoom() {
  //wrapper.classList.remove("z400","z300","z200","z150","z100");

 // if (errors === 0) wrapper.classList.add("z400");
 // else if (errors === 1) wrapper.classList.add("z300");
 // else if (errors === 2) wrapper.classList.add("z200");
 // else if (errors === 3) wrapper.classList.add("z150");
 // else wrapper.classList.add("z100");
//}

function check() {
  const guess = input.value.trim();

  if (!guess) return;
  
//VECCHIA
//  if (guess.toLowerCase() === solution.toLowerCase()) {
//    feedback.textContent = "✔ Corretto!";
//    feedback.style.color = "green";
//    return;
//  }

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
