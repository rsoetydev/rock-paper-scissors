let computerChoice = '';
let playerChoice = '';


function playRound(playerChoice, computerChoice){

}


function getPlayerChoice(){
    for while (playerChoice.toUpperCase() != 'ROCK' || 'PAPER' || 'SCISSORS'){
        playerChoice = prompt("Please input a valid choice (Rock, Paper, Scissors)");
        console.log(playerChoice.toUpperCase());
        console.log(playerChoice);
    }
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