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

function getHumanChoice(answer) {
    // prompt for answer
    let choice = prompt('shoot');
    
    // convert into lowercase for easier comparison later
    return choice.toLowerCase();
}

console.log(getHumanChoice());