
/*function game(){
    let round = 0;
    let playerScore = 0;
    let computerScore = 0;
    do{
        if (playRound(getPlayerChoice(), getComputerChoice()) == 'Player'){
            playerScore++;
        } else{ 
            computerScore++;
        }
        console.log("Player's score is: " + playerScore);
        console.log("Computer's score is: " + computerScore);
        round++;

    } while (round < 5);

    if (playerScore > computerScore){
        console.log("Congratulations, you win!");
    } else console.log("Sorry, you lose!");
}*/

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

const rockBtn = document.getElementById("rock");
console.log(rockBtn);
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

rockBtn.addEventListener("click", function(e){
    console.log("test");
});

const buttons = document.querySelectorAll('.btn');
buttons.forEach( function(button)  {
    button.addEventListener("click", function() {
        console.log("test");
    });
});

