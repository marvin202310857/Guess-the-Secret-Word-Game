const secretWords = ["apple", "banana", "orange", "grape", "peach"];
const maxAttempts = 5;
let attemptsLeft = maxAttempts;
let secretWord = secretWords[Math.floor(Math.random() * secretWords.length)];

console.log("Secret word for testing:", secretWord);

const guessInput = document.getElementById("guess-input");
const submitBtn = document.getElementById("submit-btn");
const messageDiv = document.getElementById("message");

submitBtn.addEventListener("click", handleGuess);
guessInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        handleGuess();
    }
});

function handleGuess() {
    let guess = guessInput.value.trim().toLowerCase();
    if (guess === "") {
        messageDiv.textContent = `Incorrect guess. You have ${attemptsLeft - 1} attempts left. Try again!`;
        attemptsLeft--;
        checkGameOver();
        guessInput.value = "";
        return;
    }

    if (guess === secretWord) {
        messageDiv.textContent = "Congratulations! You guessed the secret word!";
        submitBtn.disabled = true;
        guessInput.disabled = true;
        document.body.style.backgroundColor = "#d4edda"; // green background for win
    } else {
        attemptsLeft--;
        if (attemptsLeft > 0) {
            messageDiv.textContent = `Incorrect guess. You have ${attemptsLeft} attempts left. Try again!`;
            guessInput.value = "";
        } else {
            messageDiv.textContent = `Game over! The secret word was '${secretWord}'.`;
            submitBtn.disabled = true;
            guessInput.disabled = true;
            document.body.style.backgroundColor = "#f8d7da"; // red background for lose
        }
    }
}

function checkGameOver() {
    if (attemptsLeft <= 0) {
        messageDiv.textContent = `Game over! The secret word was '${secretWord}'.`;
        submitBtn.disabled = true;
        guessInput.disabled = true;
        document.body.style.backgroundColor = "#f8d7da"; // red background for lose
    }
}
