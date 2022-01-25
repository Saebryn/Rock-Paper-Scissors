function computerPlay() {
    let moves = ["rock", "paper", "scissors"];
    let randomSelection = moves[Math.floor(Math.random()*3)];
    return randomSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundResultDiv.textContent = `Its a tie! You both chose ${playerSelection}`
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            roundResultDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        }
        else {
            roundResultDiv.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            roundResultDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        }
        else {
            roundResultDiv.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            roundResultDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        }
        else {
            roundResultDiv.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }
    else {
        roundResultDiv.textContent = `You did not input a valid choice!`;
    }
}

let userScore = 0;
let computerScore = 0;

function playGame() {

    
    console.log(this.classList[0]);

    const playerInput = this.classList[0]; //prompt("Rock, Paper or Scissors?","");
    /* const playerLowerCaseInput = playerInput.toLowerCase();
    if (playerInput !== "rock" && playerInput !== "paper" && playerInput !== "scissors") {
        do {
            //console.log(`You did not input a valid choice!`);
            const playerInput = prompt("You did not input a valid choice! Rock, Paper or Scissors?","");
            playerLowerCaseInput = playerInput.toLowerCase();
            //console.log(i);
        }
        while (playerLowerCaseInput !== "rock" && playerLowerCaseInput !== "paper" && playerLowerCaseInput !== "scissors")      
    } */
    
    const computerSelection = computerPlay();
    playRound(playerInput, computerSelection);
    console.log(playRound(playerInput, computerSelection));
    if (roundResultDiv.textContent.slice(0,8) === "You win!") {
        userScore++;
        //console.log(`Your Score: ${userScore}, Computer Score: ${computerScore}`);
    }
    else if (roundResultDiv.textContent.slice(0,8) === "You lose") {
        computerScore++;
        //console.log(`Your Score: ${userScore}, Computer Score: ${computerScore}`);
    }
    scoreDiv.textContent = `---Your Score: ${userScore}, Computer Score: ${computerScore}---`;

    if (userScore == 5 || computerScore == 5) {
        if (userScore > computerScore) {
            finalResultDiv.textContent = "You've won Charlie!";
        }
        else if (userScore < computerScore) {
            finalResultDiv.textContent = "You lose! You get nothing!";
        }
        else {
            finalResultDiv.textContent = "You tied!";
        }
    userScore = 0;
    computerScore = 0;
    }
}

const roundResultDiv = document.querySelector('.roundResult');

const scoreDiv = document.querySelector('.score');

const finalResultDiv = document.querySelector('.finalResult');


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', playGame)
});



    
    
    


//const playerInput = "RocK";
//const playerLowerCaseInput = playerInput.toLowerCase();
//const computerSelection = computerPlay(); //this constant is cahnged within the scope of game() by re-declaring. it does not need to exist outside the game() function

//playGame();