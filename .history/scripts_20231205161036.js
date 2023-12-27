let computerChoice = '';
let playerChoice = '';


function playRound(playerChoice, computerChoice){

}


function getPlayerChoice(){
    do {
        console.log(playerChoice);
        playerChoice = prompt("Please input a valid choice (Rock, Paper, Scissors)");
        console.log(playerChoice.toUpperCase +== "ROCK");

    }
    while (playerChoice.toUpperCase() !== "ROCK" || "PAPER" || "SCISSORS");
}


function getComputerChoice() {
     switch(getRandomInt(1,3)){
        case 1:
            computerChoice = 'Rock';
            break;
        case 2:
            computerChoice = 'Paper';
            break;
        case 3:
            computerChoice = 'Scissors';
            break;
     }
}

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

getComputerChoice();
getPlayerChoice();
console.log(computerChoice);