const phrases = [
  "PRIYA OJHA",
  "GIRL",
  "Developer",
  "Designer",
  "Dreamer",
  "Coder",
  "AI Enthusiast"
];

let i = 0; // phrase index
let j = 0; // letter index
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

const element = document.querySelector(".auto-type");

function loop() {
  isEnd = false;
  element.innerHTML = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      element.innerHTML = currentPhrase.join("");
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop();
      j--;
      element.innerHTML = currentPhrase.join("");
    }

    if (j === phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }
  const speed = isEnd ? 1500 : isDeleting ? 50 : 100;
  setTimeout(loop, speed);
}

loop();
