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
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

/**
 * The main game "loop" called when the script is first loaded
 * and aafter the users answer has been processed
 * I'm also using the doc string in order to describe
 * functions
 */
function runGame() {
    //create two random numbers between 1-25
    let num1 = Math.floor(Math.random()*25)+1;
    let num2 = Math.floor(Math.random()*25)+1;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {
    

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

// function displayDivideQuestion() {

// }