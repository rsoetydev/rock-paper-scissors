

function playRound(playerChoice, computerChoice){

}


function getPlayerChoice(){
    let playerChoice;
    do {
        playerChoice = prompt("Please input a valid choice (Rock, Paper, Scissors)").toUpperCase();

    }
    while (playerChoice != "ROCK" &&  playerChoice != "PAPER" && playerChoice != "SCISSORS");
}


function getComputerChoice() {
    let computerChoice;
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

     return computerChoice;
}

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}


console.log(playRound(getPlayerChoice(), getComputerChoice()));