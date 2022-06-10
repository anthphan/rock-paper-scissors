

function computerPlay() {
    let computerSelection;
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        computerSelection = "Rock"
    }
    else if (randomNumber === 1) {
        computerSelection = "Paper"
    }
    else {
        computerSelection = "Scissors"
    }
    return computerSelection
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock"
    }
    else if (playerSelection === computerSelection) {
        return "Its a tie!"
    }
    else {
        return "You Win! Rock beats Scissors"
    }

    if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper"
    }
    else if (playerSelection === computerSelection) {
        return "Its a tie!"
    }
    else {
        return "You Win! Paper beats Rock"
    }

    if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors"
    }
    else if (playerSelection === computerSelection) {
        return "Its a tie!"
    }
    else {
        return "You Win! Scissors beats Paper"
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = (window.prompt("Rock, Paper or Scissors", ""));
        const computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection));
    }
}