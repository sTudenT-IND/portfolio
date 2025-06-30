import random

print("🎯 Welcome to the Number Guessing Game!")
print("I'm thinking of a number between 1 and 100.")

# Difficulty level selection
difficulty = input("Choose difficulty (Easy/Hard): ").strip().lower()

if difficulty == "easy":
    max_attempts = 10
elif difficulty == "hard":
    max_attempts = 5
else:
    print("🤔 Invalid choice! Defaulting to Easy mode.")
    max_attempts = 10

secret_number = random.randint(1, 100)
guess = None
attempts = 0

print(f"\n🌟 You have {max_attempts} attempts. Take your time and have fun!\n")

# Gentle supportive messages (only shown if user wins)
gentle_messages = [
    "🌼 You did it! Small steps like this are proof that you can figure things out. Always. 💪",
    "🎉 This win might feel small, but it matters. Just like you do. 🌟",
    "💖 Look at you! Figuring things out, one number at a time.",
    "✨ Sometimes all we need is a little success to believe in ourselves again. Here it is 💫",
    "👏 You guessed it right! May this little victory brighten your day ☀️",
]

# Fun facts (random TV, biology, or quirky science)
fun_facts = [
    "🐙 Octopuses have 9 brains and 3 hearts. No wonder they’re smart and sensitive!",
    "🎬 In *Friends*, Joey never actually knew what Chandler’s job was. Even after 10 seasons!",
    "🦒 Giraffes only sleep for 30 minutes a day. Talk about hustle!",
    "🎸 The *Stranger Things* team confirmed that Eddie's guitar solo was played for real!",
    "🧠 Your brain can generate about 20 watts of power – enough to power a lightbulb!",
    "🍌 Bananas are technically berries, but strawberries aren’t!",
    "🚀 Saturn could float in water because it’s mostly gas. Imagine a planet-sized rubber duck!",
    "🦠 You have more bacteria in your mouth than people on Earth. Still cute though 😄",
]

# Main game loop
while attempts < max_attempts:
    try:
        print(f"❤️ Attempt {attempts + 1} of {max_attempts}")
        guess = int(input("👉 Enter your guess: "))
        attempts += 1

        if guess < secret_number:
            print("🔻 Too low!\n")
        elif guess > secret_number:
            print("🔺 Too high!\n")
        else:
            print(f"\n🎉 Woohoo! You guessed it right in {attempts} attempts!")
            print(random.choice(gentle_messages))
            print("💡 Fun Fact:", random.choice(fun_facts))
            break

    except ValueError:
        print("⚠️ Please enter a valid number.\n")

# If user didn't guess correctly
if guess != secret_number:
    print(f"\n💥 Out of attempts! The number was {secret_number}.")
    print("🌧️ It's okay to miss. The effort you made still counts.")
    print("🧸 Come back stronger next time. You’re more capable than you think.")
