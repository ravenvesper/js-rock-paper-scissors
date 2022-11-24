function getComputerChoice() {
    let gameChoices = [ //creating an array to pick a choice
        "Rock",
        "Paper",
        "Scissors"
    ];

    let randomizer = gameChoices[Math.floor(Math.random()*gameChoices.length)]; //chooses a random choice from the given array

    return randomizer; //returns a choice with the variable "randomizer"
}

let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase(); //asks a user for an input and converts it to lower case 
let computerSelection = getComputerChoice(); //declares the previous function

function oneRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "Draw!" //if the user's input is equal to computer selection, it returns draw
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        return "You lose!" 
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        return "You lose!"
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        return "You lose!"
    } else {
        return "You win!" 
    }
}

function game() {
    oneRound(); //declare the function

    for (let i = 0; i <= 5; i++) { //loop for five rounds
        if (i < 5) {
            oneRound();
        } else if (i === 5) {
            console.log("End of round.")
        }
    }
}

