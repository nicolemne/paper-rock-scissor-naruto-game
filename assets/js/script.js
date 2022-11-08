// Variables from the DOM

let playerScore = 0;
let aiScore = 0;

const water = document.getElementById('water');
const fire = document.getElementById('fire');
const wind = document.getElementById('wind');
const earth = document.getElementById('earth');
const lightning = document.getElementById('lightning');

const result = document.getElementById('game-text');
const options = ['water', 'fire', 'wind', 'earth', 'lightning'];

// AI (Computer) random pick 

function computerRandom() {
    let randomChoice = Math.floor(Math.random() * 5);
    return options[randomChoice];
}

// Game function

function newGame(playerChoice) {
    let computerChoice = computerRandom();
    displayResult(playerChoice, computerChoice);
}

// Update scores function

const updateScore = () => {
    const updateUserScore = document.getElementById("player-score");
    updateUserScore.innerHTML = playerScore;
    const updateComputerScore = document.getElementById("computer-score");
    updateComputerScore.innerHTML = aiScore;
};


// Combinations function

function winCombos(player, aiPlayer) {
    if (playerChoice === computerChoice) {
        result.innerHTML = "TIE!"
        playerScore++;
        aiScore++;
        updateScore();
    } else if (playerChoice === 'water' && computerChoice === 'fire') {
        result.innerHTML = "You WIN! Water beats Fire";
        playerScore++;
        updateScore();
    } else if (playerChoice === 'water' && computerChoice === 'rock') {
        result.innerHTML = "You WIN! Water beats Rock";
        playerScore++;
        updateScore();
    } else if (playerChoice === 'fire' && computerChoice === 'wind') {
        result.innerHTML = "You WIN! Fire beats Wind";
        playerScore++;
        updateScore();
    } else if (playerChoice === 'fire' && computerChoice === 'lightning') {
        result.innerHTML = "You WIN! Fire beats Lightning";
        playerScore++;
        updateScore();
    } else if (playerChoice === 'earth' && computerChoice === 'fire') {
        result.innerHTML = "You WIN! Earth beats Fire";
        playerScore++;
        updateScore();
    } else if (playerChoice === 'earth' && computerChoice === 'lightning') {
        result.innerHTML = "You WIN! Earth beats Lightning";
        playerScore++;
        updateScore();
    } else if (playerChoice === 'lightning' && computerChoice === 'water') {
        result.innerHTML = "You WIN! Lightning beats Water";
        playerScore++;
        updateScore();
    } else if (playerChoice === 'lightning' && computerChoice === 'wind') {
        result.innerHTML = "You WIN! Lightning beats Wind";
        playerScore++;
        updateScore();
    } else if (playerChoice === 'wind' && computerChoice === 'earth') {
        result.innerHTML = "You WIN! Wind beats Earth";
        playerScore++;
        updateScore();
    } else if (playerChoice === 'wind' && computerChoice === 'water') {
        result.innerHTML = "You WIN! Wind beats Water";
        playerScore++;
        updateScore();
    } else if (playerChoice === 'fire' && computerChoice === 'water') {
        result.innerHTML = "You Lost! Water beats Fire";
        aiScore++;
        updateScore();
    } else if (playerChoice === 'rock' && computerChoice === 'water') {
        result.innerHTML = "You Lost! Water beats Rock";
        aiScore++;
        updateScore();
    } else if (playerChoice === 'wind' && computerChoice === 'fire') {
        result.innerHTML = "You Lost! Fire beats Wind";
        aiScore++;
        updateScore();
    } else if (playerChoice === 'lightning' && computerChoice === 'fire') {
        result.innerHTML = "You Lost! Fire beats Lightning";
        aiScore++;
        updateScore();
    } else if (playerChoice === 'fire' && computerChoice === 'earth') {
        result.innerHTML = "You Lost! Earth beats Fire";
        aiScore++;
        updateScore();
    } else if (playerChoice === 'lightning' && computerChoice === 'earth') {
        result.innerHTML = "You Lost! Earth beats Lightning";
        aiScore++;
        updateScore();
    } else if (playerChoice === 'water' && computerChoice === 'lightning') {
        result.innerHTML = "You Lost! Lightning beats Water";
        aiScore++;
        updateScore();
    } else if (playerChoice === 'wind' && computerChoice === 'lightning') {
        result.innerHTML = "You Lost! Lightning beats Wind";
        aiScore++;
        updateScore();
    } else if (playerChoice === 'earth' && computerChoice === 'wind') {
        result.innerHTML = "You Lost! Wind beats Earth";
        aiScore++;
        updateScore();
    } else if (playerChoice === 'water' && computerChoice === 'wind') {
        result.innerHTML = "You Lost! Wind beats Water";
        aiScore++;
        updateScore();
}
};