let computerChoice = '';
let playerChoice = '';


function playRound(playerChoice, computerChoice){

}


function getPlayerChoice(){
    do {
        playerChoice = prompt("Please input a valid choice (Rock, Paper, Scissors)").toUpperCase();

    }
    while (playerChoice != "ROCK" &&  playerChoice != "PAPER" && playerChoice != "SCISSORS");
}


function getComputerChoice() {
     switch(getRandomInt(1,3)){
        case 1:
            computerChoice = 'ROCK';
            break;
        case 2:
            computerChoice = 'PAPER';
            break;
        case 3:
            computerChoice = 'SCISSORS';
            break;
     }
}

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

getComputerChoice();
getPlayerChoice();
console.log(computerChoice);
console.log(playerChoice);