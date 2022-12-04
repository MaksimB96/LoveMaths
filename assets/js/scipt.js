//Wait for DOM to finish loading before running the game 
//Get buttton events and add eveent listeners to them 

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
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
 * and aafter the users answer has been processed
 * I'm also using the doc string in order to describe
 * functions
 */

function runGame(gameType) {

    //create two random numbers between 1-25
    let num1 = Math.floor(Math.random() * 25)+1;
    let num2 = Math.floor(Math.random() * 25)+1;

    if(gameType === "addition"){
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game Type: ${gameType}`);
        throw `Unknown game Type: ${gameType}. Aborting!`;
    }
}

function checkAnswer() {

}

function calculateCorrectAnswer() {
    

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

// function displayDivideQuestion() {

// }