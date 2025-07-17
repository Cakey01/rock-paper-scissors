// global variables
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(answer) {
    // create choice variable
    let pick = Math.floor(Math.random() * 3);

    // divide random number into three choices
    if (pick == 0) {
        return pick = 'rock';
    } else if (pick == 1) {
        return pick = 'paper';
    } else {
        return pick = 'scissors';
    }
}

function getHumanChoice(response) {
    // get response
    return response = prompt('shoot');

}

function playRound (humanChoice, computerChoice) {
}

console.log(getComputerChoice())