//fire-water-grass
//rock-paper-scissors

function computerPlay() {
    let moves = ["fire", "water", "grass"];
    let randomSelection = moves[Math.floor(Math.random()*3)];
    return randomSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundResultDiv.textContent = `Its a tie! You both chose a ${playerSelection} type.`
    }
    else if (playerSelection === "fire") {
        if (computerSelection === "grass") {
            roundResultDiv.textContent = `You win! ${playerSelection} type beats ${computerSelection} type.`;
        }
        else {
            roundResultDiv.textContent = `You lose! ${computerSelection} type beats ${playerSelection} type.`;
        }
    }
    else if (playerSelection === "water") {
        if (computerSelection === "fire") {
            roundResultDiv.textContent = `You win! ${playerSelection} type beats ${computerSelection} type.`;
        }
        else {
            roundResultDiv.textContent = `You lose! ${computerSelection} type beats ${playerSelection} type.`;
        }
    }
    else if (playerSelection === "grass") {
        if (computerSelection === "water") {
            roundResultDiv.textContent = `You win! ${playerSelection} type beats ${computerSelection} type.`;
        }
        else {
            roundResultDiv.textContent = `You lose! ${computerSelection} type beats ${playerSelection} type.`;
        }
    }
    else {
        roundResultDiv.textContent = `You did not input a valid choice!`;
    }
}

function playGame() {
    const playerInput = this.classList[0];
    
    const computerSelection = computerPlay();
    playRound(playerInput, computerSelection);
    if (roundResultDiv.textContent.slice(0,8) === "You win!") {
        userScore++;
    }
    else if (roundResultDiv.textContent.slice(0,8) === "You lose") {
        computerScore++;
    }

    header.textContent = `Choose your next Pokemon.`;
    scoreDiv.textContent = `---Your Score: ${userScore}, Rival Score: ${computerScore}---`;

    if (userScore == 6 || computerScore == 6) {
        buttons.forEach((button) => {
            button.style.display = "none";
        });
        if (userScore > computerScore) {
            finalResultDiv.textContent = "You're the new Pokemon League Champion!";
        }
        else if (userScore < computerScore) {
            finalResultDiv.textContent = "You ran out of Pokemon. You whited out...";
        }
        else {
            finalResultDiv.textContent = "You tied!";
        }
        newGameButton.style.display = "block";
    } 
}

function newGame() {
    userScore = 0;
    computerScore = 0;
    header.textContent = `Choose your first Pokemon.`;
    roundResultDiv.textContent = "";
    scoreDiv.textContent = "";
    finalResultDiv.textContent = "";
    buttons.forEach((button) => {
        button.style.display = "inline";
    });
    newGameButton.style.display = "none";
}

let userScore = 0;
let computerScore = 0;

const header = document.querySelector('.header');

const roundResultDiv = document.querySelector('.roundResult');

const scoreDiv = document.querySelector('.score');

const finalResultDiv = document.querySelector('.finalResult');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', playGame)
});

const newGameButton = document.querySelector('.newGameButton');
newGameButton.addEventListener('click', newGame);
newGameButton.style.display = "none";