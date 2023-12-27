

function game(){
    let round = 0;
    let playerScore = 0;
    let computerScore = 0;
    do{
        if (playRound(getComputerChoice(), getComputerChoice()) == 'Player'){
            playerScore++;
        } else computerScore++;

    } while (round < 5);
}

function playRound(playerChoice, computerChoice){
    let winner = 'Computer';
    if(computerChoice == playerChoice){
        console.log("Draw.");
        winner = playRound(getPlayerChoice(), getComputerChoice());
    } else{
        switch(computerChoice){
        
            case 'ROCK':
                if (playerChoice == 'PAPER'){
                    console.log("You win! Paper beats Rock.");
                    winner = 'Player';
                } else { console.log("You lose! Rock beats Scissors.");
            }
                break;
            case 'PAPER':
                if (playerChoice == 'SCISSORS'){
                    console.log("You win! Scissors beats Paper.");
                    winner = 'Player';
                } else { console.log("You lose! Paper beats Rock.");}   
                break;
            case 'SCISSORS':
                if (playerChoice == 'ROCK'){
                    console.log("You win! Rock beats Scissors.");
                    winner = 'Player';
                } else { console.log("You lose! Scissors beats Paper.");} 
                break;

        }
    }

    return winner;

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


game();