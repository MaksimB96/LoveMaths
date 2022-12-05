//Every new game type needs to be put through gameType()
//They need a display function
//They need modifed calculateCorrectAnswer

//Wait for DOM to finish loading before running the game 
//Get buttton events and add eveent listeners to them 

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("addition");
});

/**
 * The main game "loop" called when the script is first loaded
 * and a fter the users answer has been processed
 * I'm also using the doc string in order to describe
 * functions
 */

function runGame(gameType) {

    //create two random numbers between 1-25
    let num1 = Math.floor(Math.random() * 25)+1;
    let num2 = Math.floor(Math.random() * 25)+1;

    if(gameType === "addition"){
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);

    } else {
        alert(`Unknown game Type: ${gameType}`);
        throw `Unknown game Type: ${gameType}. Aborting!`;
    }
}
/**
 * checks the answer against the first element in
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];
    //short way to ask if, is correct
    if (isCorrect) {
        alert('Hey! You got it right :)');
        incrementScore();
    } else {
        alert(`Awww.. you answered ${userAnswer}. This is the correct answer ${calculatedAnswer[0]}!`)
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}
/**
 * Gets operands (the numbers) and the operator (plus, minus etc.)
 * directly from the dom and rreturns the correct answer.
 */
function calculateCorrectAnswer() {
    // gets the inner text elemnts, parseInt makes sure the number is integer
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "x"){
        return [operand1 * operand2, "multiply"];
    } else {
        alert(`Unimplemented operator ${opertor}`);
        throw `Unimplemented operator ${opertor}. Aborting!`;
    }

}
/**
 * Gets the score from DOM and increments it by 1
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById('score').innerText);
    //++ operator used to update score in real time (you could use oldScore +1 here also)
    document.getElementById('score').innerText = ++oldScore;
}

/**
 * Gets the current tally of incorrect answer from DOM and increments it by 1
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    //++ operator used to update score in real time (you could use oldScore +1 here also)
    document.getElementById('incorrect').innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}

// function displayDivideQuestion() {

// }