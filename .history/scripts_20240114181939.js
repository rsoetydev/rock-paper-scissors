const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const results = document.getElementById('results');

const buttons = document.querySelectorAll('.btn');
buttons.forEach( function(button)  {
    button.addEventListener("click", function() {
        playRound(this.id.toUpperCase(), getComputerChoice());
    });
});



function playRound(playerChoice, computerChoice){
    let winner = 'Computer';
    if(computerChoice == playerChoice){
        results.innerHTML = "Draw. Please select again";
    } else{
        switch(computerChoice){
        
            case 'ROCK':
                if (playerChoice == 'PAPER'){
                    results.innerHTML = "You win! Paper beats Rock.";
                    winner = 'Player';
                } else { results.innerHTML = "You lose! Rock beats Scissors.";
            }
                break;
            case 'PAPER':
                if (playerChoice == 'SCISSORS'){
                    results.innerHTML = "You win! Scissors beats Paper.";
                    winner = 'Player';
                } else { results.innerHTML = "You lose! Paper beats Rock.";}   
                break;
            case 'SCISSORS':
                if (playerChoice == 'ROCK'){
                    results.innerHTML = "You win! Rock beats Scissors.";
                    winner = 'Player';
                } else { results.innerHTML = "You lose! Scissors beats Paper.";} 
                break;

        }
    }

    return winner;

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

