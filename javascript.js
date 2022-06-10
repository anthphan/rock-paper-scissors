

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

    console.log(playerSelection);
    console.log(computerSelection);

    if (playerSelection === computerSelection) {
        return "Its a tie!"
    }

    if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors")
        || (playerSelection === "scissors" && computerSelection === "rock")) {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    else {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = (window.prompt("Rock, Paper or Scissors", ""));
        const computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection));
    }
}