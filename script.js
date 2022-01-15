function computerPlay() {
    let moves = ["rock", "paper", "scissors"];
    let randomSelection = moves[Math.floor(Math.random()*3)];
    return randomSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Its a tie! You both chose ${playerSelection}`
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
        else {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
        else {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
        else {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }
    else {
        return `You did not input a valid choice!`;
    }
}

function game() {
    let userScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerInput = prompt("Rock, Paper or Scissors?","");
        let playerLowerCaseInput = playerInput.toLowerCase();
        if (playerLowerCaseInput !== "rock" && playerLowerCaseInput !== "paper" && playerLowerCaseInput !== "scissors") {
            do {
                //console.log(`You did not input a valid choice!`);
                const playerInput = prompt("You did not input a valid choice! Rock, Paper or Scissors?","");
                playerLowerCaseInput = playerInput.toLowerCase();
                //console.log(i);
            }
            while (playerLowerCaseInput !== "rock" && playerLowerCaseInput !== "paper" && playerLowerCaseInput !== "scissors")      
        }
        
        const computerSelection = computerPlay();
        playRound(playerLowerCaseInput, computerSelection);
        console.log(playRound(playerLowerCaseInput, computerSelection));
        if (playRound(playerLowerCaseInput, computerSelection).slice(0,8) === "You win!") {
            userScore++;
            //console.log(`Your Score: ${userScore}, Computer Score: ${computerScore}`);
        }
        else if (playRound(playerLowerCaseInput, computerSelection).slice(0,8) === "You lose") {
            computerScore++;
            //console.log(`Your Score: ${userScore}, Computer Score: ${computerScore}`);
        }
        console.log(`---Your Score: ${userScore}, Computer Score: ${computerScore}---`);
    }
    if (userScore > computerScore) {
        console.log("You've won Charlie!");
    }
    else if (userScore < computerScore) {
        console.log("You lose! You get nothing!");
    }
    else {
        console.log("You tied!");
    }
}

//const playerInput = "RocK";
//const playerLowerCaseInput = playerInput.toLowerCase();
//const computerSelection = computerPlay(); //this constant is cahnged within the scope of game() by re-declaring. it does not need to exist outside the game() function
