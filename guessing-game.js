function guessingGame() {
    const randomNumber = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99
    let guessCount = 0; // Counter for the number of guesses
    let gameOver = false; // Flag to track if the game is over

    return function guess(num) {
        if (gameOver) {
            return "The game is over, you already won!";
        }
        
        guessCount++; // Increment the guess counter

        if (num < randomNumber) {
            return `${num} is too low!`;
        } else if (num > randomNumber) {
            return `${num} is too high!`;
        } else {
            gameOver = true; // End the game
            return `You win! You found ${randomNumber} in ${guessCount} guesses.`;
        }
    };
}


let game = guessingGame();
console.log(game(50)); // "50 is too low!"
console.log(game(90)); // "90 is too high!"
console.log(game(70)); // "You win! You found 70 in 3 guesses."
console.log(game(70)); // "The game is over, you already won!"

module.exports = { guessingGame };
