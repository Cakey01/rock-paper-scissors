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
    let win = null;

    // tie condititon
    if (humanChoice == computerChoice) {
        console.log('tie round');
    
    // winning conditions
    } else if ((humanChoice == 'rock' && computerChoice == 'scissors') || 
               (humanChoice == 'paper' && computerChoice == 'rock') || 
               (humanChoice == 'scissors' && computerChoice == 'rock')) {
        console.log('you win this round');
        humanScore++;
    
    // losing conditions
    } else if ((humanChoice == 'rock' && computerChoice == 'paper') ||
               (humanChoice == 'paper' && computerChoice == 'scissors') ||
               (humanChoice == 'scissors' && computerChoice == 'rock')) {
        console.log('you lose this round');
        computerScore++;
    }
    console.log('you: ' + humanScore, 'computer: ' + computerScore); 
    

}

function playGame(round) {

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

    if (computerScore == humanScore) {
        console.log("tie game");
    } else if (computerScore > humanScore) {
        console.log("you lost the game");
    } else {
        console.log('you won the game');
    }
}

playGame();