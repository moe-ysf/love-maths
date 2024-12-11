// Wait for DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("addition");
});

/**
 * The main game loop, called when the script is first loaded
 * and after the user's answer has been processed.
 */
function runGame(gameType) {
    // Creates 2 random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1; // Corrected `math` to `Math`
    let num2 = Math.floor(Math.random() * 25) + 1; // Corrected `math` to `Math`

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);

        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

/**
 * Displays the addition question
 */
function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

/**
 * Placeholder for the checkAnswer function
 */
function checkAnswer() {
    // Logic to check the answer will go here
}

/**
 * Placeholder for the calculateCorrectAnswer function
 */
function calculateCorrectAnswer() {
    // Logic to calculate the correct answer will go here
}

/**
 * Placeholder for the incrementScore function
 */
function incrementScore() {
    // Logic to increment the score will go here
}

/**
 * Placeholder for the incrementWrongAnswer function
 */
function incrementWrongAnswer() {
    // Logic to increment the wrong answer count will go here
}

/**
 * Placeholder for the displaySubtractQuestion function
 */
function displaySubtractQuestion() {
    // Logic to display subtraction questions will go here
}

/**
 * Placeholder for the displayMultiplicationQuestion function
 */
function displayMultiplicationQuestion() {
    // Logic to display multiplication questions will go here
}

/**
 * Placeholder for the displayDivisionQuestion function
 */
function displayDivisionQuestion() {
    // Logic to display division questions will go here
}
