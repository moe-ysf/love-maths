// Wait for DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }
document.getElementById("answer-box").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
});
    // Start the game with addition
    runGame("addition");
});

/**
 * The main game loop, called when the script is first loaded
 * and after the user's answer has been processed.
 */
function runGame(gameType) {
    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

    // Creates 2 random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    // Display the correct question based on the game type
    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplicationQuestion(num1, num2);
    } else if (gameType === "division") {
        displayDivisionQuestion(num1, num2);
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
 * Displays the subtraction question
 */
function displaySubtractQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById("operator").textContent = "-";
}

/**
 * Displays the multiplication question
 */
function displayMultiplicationQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "*";
}

/**
 * Displays the division question
 */
function displayDivisionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "/";
}

/**
 * Checks the answer provided by the user
 */
function checkAnswer() {
    let correctAnswer = calculateCorrectAnswer();
    let userAnswer = parseInt(document.getElementById("answer-box").value);

    if (userAnswer === correctAnswer) {
        incrementScore();
        alert("Hey! You got it right!");
    } else {
        incrementWrongAnswer();
        alert(`Awwww.... you answered ${userAnswer} but it was ${correctAnswer}`);
    }
}

/**
 * Calculates the correct answer based on the current operator
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").textContent);
    let operand2 = parseInt(document.getElementById("operand2").textContent);
    let operator = document.getElementById("operator").textContent;

    if (operator === "+") {
        return operand1 + operand2;
    } else if (operator === "-") {
        return operand1 - operand2;
    } else if (operator === "*") {
        return operand1 * operand2;
    } else if (operator === "/") {
        return operand1 / operand2;
    } else {
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}

/**
 * Increments the score when the answer is correct
 */
function incrementScore() {
    let currentScore = parseInt(document.getElementById("score").textContent);
    currentScore++;
    document.getElementById("score").textContent = currentScore;
}

/**
 * Increments the incorrect answer count when the answer is wrong
 */
function incrementWrongAnswer() {
    let currentWrong = parseInt(document.getElementById("incorrect").textContent);
    currentWrong++;
    document.getElementById("incorrect").textContent = currentWrong;
}
