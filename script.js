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
        if (playerSelection === "fire") {
            playerCharAttack.style.display = "flex";
            rivalCharAttack.style.display = "flex";
        }
        else if (playerSelection ==="water") {
            playerSquirtAttack.style.display = "flex";
            rivalSquirtAttack.style.display = "flex";
        }
        else {
            playerBulbAttack.style.display = "flex";
            rivalBulbAttack.style.display = "flex";
        }
    }
    else if (playerSelection === "fire") {
        if (computerSelection === "grass") {
            roundResultDiv.textContent = `You win! ${playerSelection} type beats ${computerSelection} type.`;
            playerCharAttack.style.display = "flex";
            rivalBulbFaint.style.display = "flex";
        }
        else {
            roundResultDiv.textContent = `You lose! ${computerSelection} type beats ${playerSelection} type.`;
            playerCharFaint.style.display = "flex";
            rivalSquirtAttack.style.display = "flex";
        }
    }
    else if (playerSelection === "water") {
        if (computerSelection === "fire") {
            roundResultDiv.textContent = `You win! ${playerSelection} type beats ${computerSelection} type.`;
            playerSquirtAttack.style.display = "flex";
            rivalCharFaint.style.display = "flex";
        }
        else {
            roundResultDiv.textContent = `You lose! ${computerSelection} type beats ${playerSelection} type.`;
            playerSquirtFaint.style.display = "flex";
            rivalBulbAttack.style.display = "flex";
        }
    }
    else if (playerSelection === "grass") {
        if (computerSelection === "water") {
            roundResultDiv.textContent = `You win! ${playerSelection} type beats ${computerSelection} type.`;
            playerBulbAttack.style.display = "flex";
            rivalSquirtFaint.style.display = "flex";
        }
        else {
            roundResultDiv.textContent = `You lose! ${computerSelection} type beats ${playerSelection} type.`;
            playerBulbFaint.style.display = "flex";
            rivalCharAttack.style.display = "flex";
        }
    }
    else {
        roundResultDiv.textContent = `You did not input a valid choice!`;
    }
}

function playGame() {
    playerCharAttack.style.display = "none";
    playerCharFaint.style.display = "none";
    playerSquirtAttack.style.display = "none";
    playerSquirtFaint.style.display = "none";
    playerBulbAttack.style.display = "none";
    playerBulbFaint.style.display = "none";
    rivalCharAttack.style.display = "none";
    rivalCharFaint.style.display = "none";
    rivalSquirtAttack.style.display = "none";
    rivalSquirtFaint.style.display = "none";
    rivalBulbAttack.style.display = "none";
    rivalBulbFaint.style.display = "none";

    const playerInput = this.classList[0];
    
    const computerSelection = computerPlay();
    playRound(playerInput, computerSelection);
    if (roundResultDiv.textContent.slice(0,8) === "You win!") {
        userScore++;
        rivalPokeballs.removeChild(rivalPokeballCount[6-userScore]);
    }
    else if (roundResultDiv.textContent.slice(0,8) === "You lose") {
        computerScore++;
        playerPokeballs.removeChild(playerPokeballCount[computerScore-1]);
    }

    command.textContent = `Choose your next Pokémon.`;

    if (userScore == 6 || computerScore == 6) {
        command.textContent = "";
        buttons.forEach((button) => {
            button.style.display = "none";
        });
        if (userScore > computerScore) {
            finalResultDiv.textContent = "You're the new Pokémon League Champion!";
            finalResultDiv.style.lineHeight = "220px";
        }
        else if (userScore < computerScore) {
            finalResultDiv.textContent = "You ran out of Pokémon. You whited out...";
            finalResultDiv.style.lineHeight = "220px";
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
    for (let i = 0; i < 6; i++) {
        rivalPokeballs.appendChild(rivalPokeballCount[i]);
        playerPokeballs.appendChild(playerPokeballCount[i]);
    }
    rivalPokeballCount.forEach((ball) => {
        ball.style.display = "in-line";
    });
    playerPokeballCount.forEach((ball) => {
        ball.style.display = "in-line";
    });
    command.textContent = `Choose your first Pokémon.`;
    roundResultDiv.textContent = "";
    finalResultDiv.textContent = "";
    finalResultDiv.style.lineHeight = "0px";
    buttons.forEach((button) => {
        button.style.display = "flex";
        button.style.flexDirection = "column";
    });

    newGameButton.style.display = "none";

    playerCharAttack.style.display = "none";
    playerCharFaint.style.display = "none";
    playerSquirtAttack.style.display = "none";
    playerSquirtFaint.style.display = "none";
    playerBulbAttack.style.display = "none";
    playerBulbFaint.style.display = "none";
    rivalCharAttack.style.display = "none";
    rivalCharFaint.style.display = "none";
    rivalSquirtAttack.style.display = "none";
    rivalSquirtFaint.style.display = "none";
    rivalBulbAttack.style.display = "none";
    rivalBulbFaint.style.display = "none";
}

function characterSelect() {
    const character = this.classList[0];

    if (character === "ashCharacter") {
        ashImage.style.display = "none";
        dawnImage.style.display = "none";
        ashHeaderImage.style.display = "flex";
        garyHeaderImage.style.display = "flex";
    }
    else {
        ashImage.style.display = "none";
        dawnImage.style.display = "none";
        dawnHeaderImage.style.display = "flex";
        zoeyHeaderImage.style.display = "flex";
    }
    headerStats.forEach((stats) => {
        stats.style.display = "flex";
    })
    newGame();
}

let userScore = 0;
let computerScore = 0;

const command = document.querySelector('.command');

const roundResultDiv = document.querySelector('.roundResult');

const playerPokeballs = document.querySelector('.playerPokeballs');

const playerPokeballCount = document.querySelectorAll('.playerPokeballCount');

const rivalPokeballs = document.querySelector('.rivalPokeballs');

const rivalPokeballCount = document.querySelectorAll('.rivalPokeballCount');

const finalResultDiv = document.querySelector('.finalResult');

const buttons = document.querySelectorAll('.buttons div');
buttons.forEach((button) => {
    button.addEventListener('click', playGame)
});

const playerCharAttack = document.querySelector('.leftField .charAttack');
const playerCharFaint = document.querySelector('.leftField .charFaint');
const playerSquirtAttack = document.querySelector('.leftField .squirtAttack');
const playerSquirtFaint = document.querySelector('.leftField .squirtFaint');
const playerBulbAttack = document.querySelector('.leftField .bulbAttack');
const playerBulbFaint = document.querySelector('.leftField .bulbFaint');
const rivalCharAttack = document.querySelector('.rightField .charAttack');
const rivalCharFaint = document.querySelector('.rightField .charFaint');
const rivalSquirtAttack = document.querySelector('.rightField .squirtAttack');
const rivalSquirtFaint = document.querySelector('.rightField .squirtFaint');
const rivalBulbAttack = document.querySelector('.rightField .bulbAttack');
const rivalBulbFaint = document.querySelector('.rightField .bulbFaint');

const ashImage = document.querySelector('.ashCharacter');
ashImage.addEventListener('click', characterSelect);

const dawnImage = document.querySelector('.dawnCharacter');
dawnImage.addEventListener('click', characterSelect);

const dawnHeaderImage = document.querySelector('.dawnHeaderImage');
const ashHeaderImage = document.querySelector('.ashHeaderImage');
const zoeyHeaderImage = document.querySelector('.zoeyHeaderImage');
const garyHeaderImage = document.querySelector('.garyHeaderImage');

const headerStats = document.querySelectorAll('.stats');

const newGameButton = document.querySelector('.newGameButton');
newGameButton.addEventListener('click', newGame);
newGameButton.style.display = "none";