const flashcard = document.getElementById("flashcard");
const questionDiv = document.getElementById("question");
const answerDiv = document.getElementById("answer");

const flashcards = [
  {
    question: "What is the capital of France?",
    answer: "🇫🇷 Paris"
  },
  {
    question: "What does CPU stand for?",
    answer: "Central Processing Unit"
  },
  {
    question: "What is 7 x 8?",
    answer: "56"
  },
  {
    question: "Who painted the Mona Lisa?",
    answer: "Leonardo da Vinci 🎨"
  },
  {
    question: "What is the chemical symbol for Gold?",
    answer: "Au 🧪"
  },
  {
    question: "What year did World War II end?",
    answer: "1945"
  },
  {
    question: "Octopus has how many legs?",
    answer: "8 🐙"
  }
];

let currentIndex = 0;
let isFlipped = false;

function showFlashcard(index) {
  flashcard.classList.remove("flip");
  questionDiv.textContent = flashcards[index].question;
  answerDiv.textContent = flashcards[index].answer;
  isFlipped = false;
}

function revealAnswer() {
  if (!isFlipped) {
    flashcard.classList.add("flip");
    isFlipped = true;
  }
}

function nextFlashcard() {
  currentIndex = (currentIndex + 1) % flashcards.length;
  showFlashcard(currentIndex);
}

showFlashcard(currentIndex);
