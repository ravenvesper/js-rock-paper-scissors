function getComputerChoice() {
    let gameChoices = [ //creating an array to pick a choice
        "Rock",
        "Paper",
        "Scissors"
    ];

    let randomizer = gameChoices[Math.floor(Math.random()*gameChoices.length)]; //chooses a random choice from the given array

    return randomizer; //returns a choice with the variable "randomizer"
}

function oneRound() {
    let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase(); //asks a user for an input and converts it to lower case 
    let computerSelection = getComputerChoice(); //declares the previous function

    if (playerSelection === computerSelection) {
        alert("Draw! No points for anyone."); //if the user's input is equal to computer selection, it returns draw
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        alert("You lose! Computer gains a point.");
        computerScore++; //if user input is 'rock' and computer is 'paper', user loses
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        alert("You lose! Computer gains a point.");
        computerScore++; //if user input is 'paper' and computer is 'scissors', user loses
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        alert("You lose! Computer gains a point.");
        computerScore++; //if user input is 'scissors' and computer is 'rock', user loses
    } else {
        alert("You win! You earn a point!");
        playerScore++; //if none of the above is the case, player wins
    }
}

let playerScore = 0; //player score starting point
let computerScore = 0; //computer score starting point

function game() {
    for (let i = 0; i < 5; i++)
    oneRound(i);
}

function isGameOver() {
    if (playerScore === 5) {
        console.log("You win the game!");
    } else {
        console.log("Better luck next time.");
    }
}

game();
isGameOver();