// global variables
let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");
const result = document.createElement("p");
const score = document.createElement("p");
const results = document.querySelector("div")
results.appendChild(result);
results.appendChild(score);

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

function playRound(humanChoice, computerChoice) {
    // find winner
    let win = null;

    // tie condititon
    if (humanChoice == computerChoice) {
        result.textContent= 'tie round';
    
    // winning conditions
    } else if ((humanChoice == 'rock' && computerChoice == 'scissors') || 
               (humanChoice == 'paper' && computerChoice == 'rock') || 
               (humanChoice == 'scissors' && computerChoice == 'paper')) {
        result.textContent= 'you win this round';
        humanScore++;
    
    // losing conditions
    } else if ((humanChoice == 'rock' && computerChoice == 'paper') ||
               (humanChoice == 'paper' && computerChoice == 'scissors') ||
               (humanChoice == 'scissors' && computerChoice == 'rock')) {
        result.textContent= 'you lose this round';
        computerScore++;
    }
    score.textContent= `you: ${humanScore} computer: ${computerScore}`;
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (humanScore < 5 && computerScore < 5) {
            let humanChoice = button.id;
            let computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);

            if (humanScore === 5) {
                result.textContent = 'you won the game';
            } else if (computerScore === 5) {
                result.textContent = 'you lost the game';
            }
        }
    });
});