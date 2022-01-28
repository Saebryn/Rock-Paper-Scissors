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
        playerHeaderScore.textContent = userScore;
    }
    else if (roundResultDiv.textContent.slice(0,8) === "You lose") {
        computerScore++;
        rivalHeaderScore.textContent = computerScore;
    }

    command.textContent = `Choose your next Pokemon.`;
    //scoreDiv.textContent = `---Your Score: ${userScore}, Rival Score: ${computerScore}---`;

    if (userScore == 6 || computerScore == 6) {
        command.textContent = "";
        buttons.forEach((button) => {
            button.style.display = "none";
        });
        if (userScore > computerScore) {
            finalResultDiv.textContent = "You're the new Pokemon League Champion!";
            finalResultDiv.style.lineHeight = "264px";
        }
        else if (userScore < computerScore) {
            finalResultDiv.textContent = "You ran out of Pokemon. You whited out...";
            finalResultDiv.style.lineHeight = "264px";
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
    command.textContent = `Choose your first Pokemon.`;
    roundResultDiv.textContent = "";
    //scoreDiv.textContent = "";
    finalResultDiv.textContent = "";
    finalResultDiv.style.lineHeight = "0px";
    buttons.forEach((button) => {
        button.style.display = "block";
    });
    newGameButton.style.display = "none";
    playerHeaderScore.textContent = "0";
    rivalHeaderScore.textContent = "0";
}

let userScore = 5;
let computerScore = 5;

const command = document.querySelector('.command');

const roundResultDiv = document.querySelector('.roundResult');

//const scoreDiv = document.querySelector('.score');

const playerHeaderScore = document.querySelector('.playerHeaderScore')

const rivalHeaderScore = document.querySelector('.rivalHeaderScore')

const finalResultDiv = document.querySelector('.finalResult');

const buttons = document.querySelectorAll('.buttons div');
buttons.forEach((button) => {
    button.addEventListener('click', playGame)
});

const newGameButton = document.querySelector('.newGameButton');
newGameButton.addEventListener('click', newGame);
newGameButton.style.display = "none";