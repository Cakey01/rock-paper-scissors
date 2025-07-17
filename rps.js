// global variables
let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    // make 0-2 random number generator 
    let choice = Math.floor(Math.random() * 3);

    // make choice numbers into string choices 
    if (choice == 0) {
        choice = 'rock';
    } else if (choice == 1) {
        choice = 'paper';
    } else {
        choice = 'scissors';
    }

    // return computer choice string
    return choice;
}

function getHumanChoice() {
    // prompt for answer
    let choice = prompt('shoot');
    
    // convert into lowercase for easier comparison later
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    // find winner
    if (humanChoice == computerChoice) {
        console.log('tie');
    } else if ((humanChoice == 'rock' && computerChoice == 'scissors') || 
               (humanChoice == 'paper' && computerChoice == 'rock') || 
               (humanChoice == 'scissors' && computerChoice == 'rock')) {
        console.log('you win');
    } else if ((humanChoice == 'rock' && computerChoice == 'paper') ||
               (humanChoice == 'paper' && computerChoice == 'scissors') ||
               (humanChoice == 'scissors' && computerChoice == 'rock')) {
        console.log('you lose');
    } 
    

}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);