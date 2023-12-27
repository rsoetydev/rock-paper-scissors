

function playRound(playerChoice, computerChoice){
    console.log(playerChoice);
    console.log(computerChoice);
    if(computerChoice == playerChoice){
        console.log("Draw.");
        playRound(playerChoice, computerChoice);
    } else{
        switch(computerChoice){
        
            case 'ROCK':
                if (playerChoice = 'PAPER'){
                    console.log("You win! Paper beats Rock.");
                } else { console.log("You lose! Rock beats Scissors.");}
            case 'PAPER':
                if (playerChoice = 'SCISSORS'){
                    console.log("You win! Scissors beats Paper.");
                } else { console.log("You lose! Paper beats Rock.");}   
            case 'SCISSORS':
                if (playerChoice = 'ROCK'){
                    console.log("You win! Rock beats Scissors.");
                } else { console.log("You lose! Scissors beats Paper.");} 

        }
    }

}


function getPlayerChoice(){
    let playerChoice;
    do {
        playerChoice = prompt("Please input a valid choice (Rock, Paper, Scissors)").toUpperCase();

    }
    while (playerChoice != "ROCK" &&  playerChoice != "PAPER" && playerChoice != "SCISSORS");

    return playerChoice;
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