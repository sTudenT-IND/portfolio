const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;

const encouragements = [
    "You're doing great! 🎈",
    "Take a deep breath, you've got this! 💪",
    "Even Einstein made mistakes. Try again! 😄",
    "You're smarter than you think! 🧠",
    "Keep going! The answer is closer than you think 👣"
];

const funFacts = [
    "🐙 An octopus has 9 brains and 3 hearts!",
    "🦒 Giraffes only sleep 30 minutes a day!",
    "🎸 Eddie's solo in Stranger Things was real!",
    "🧠 Your brain uses 20% of your body’s energy!",
    "🚀 Saturn can float in water. It’s that light!"
];

function checkGuess() {
    const userGuess = parseInt(document.getElementById("userInput").value);
    const feedback = document.getElementById("feedback");
    const encouragement = document.getElementById("encouragement");
    const fact = document.getElementById("fact");

    attempts++;

    if (userGuess === secretNumber) {
        feedback.textContent = `🎉 Correct! You guessed it in ${attempts} tries.`;
        encouragement.textContent = encouragements[Math.floor(Math.random() * encouragements.length)];
        fact.textContent = "💡 Fun Fact: " + funFacts[Math.floor(Math.random() * funFacts.length)];
    } else if (attempts >= maxAttempts) {
        feedback.textContent = `💥 Game over! The number was ${secretNumber}.`;
        encouragement.textContent = "🌧️ Don't worry, you're still awesome!";
        fact.textContent = "💡 Final Fun Fact: " + funFacts[Math.floor(Math.random() * funFacts.length)];
    } else if (userGuess < secretNumber) {
        feedback.textContent = "🔻 Too low! Try again.";
        encouragement.textContent = "";
        fact.textContent = "";
    } else if (userGuess > secretNumber) {
        feedback.textContent = "🔺 Too high! Try again.";
        encouragement.textContent = "";
        fact.textContent = "";
    }
}
