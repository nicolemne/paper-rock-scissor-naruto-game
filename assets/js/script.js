// DOM variables
let playerScore = 0;
let aiScore = 0;
let counter = 0;
let attemptCount = 0;

const water = document.getElementById('water');
const fire = document.getElementById('fire');
const wind = document.getElementById('wind');
const earth = document.getElementById('earth');
const lightning = document.getElementById('lightning');

const resetBtn = document.getElementById('resetBtn');
const helpBtn = document.getElementById('helpBtn');
const allButtons = document.getElementsByClassName('allBtns');

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
    winCombos(playerChoice, computerChoice);
}

// Update scores function
function updateScore() {
    let updateplayerScore = document.getElementById('player-score');
    updateplayerScore.innerHTML = playerScore;
    let updateComputerScore = document.getElementById('ai-score');
    updateComputerScore.innerHTML = aiScore;
}

// Combinations function
function winCombos(playerChoice, computerChoice) {    
    if (playerChoice === 'water' && computerChoice === 'fire') {
        result.innerHTML = "You WIN! Water beats Fire";
        playerScore++;
        updateScore();
    } else if (playerChoice === 'water' && computerChoice === 'earth') {
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
    } else if (playerChoice === 'earth' && computerChoice === 'water') {
        result.innerHTML = "You Lost! Water beats Earth";
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
    } else if (playerChoice === computerChoice) {
        result.innerHTML = "TIE!"
        updateScore();
    } else {
        result.innerHTML = "Starting New Game"
        updateScore();
        console.log(`${playerChoice} ${computerChoice}`)
    } 
};

function restartScores() {
    playerScore = 0;
    aiScore = 0;
    playerScore.innerHTML = playerScore;
    aiScore.innerHTML = aiScore;
    newGame();
  }

function helpAlert() {
    alert("Hi, welcome to my game! ◆ This game is just like Rock, Paper, Scissor, Lizard, Spock, but with new names. Water beats fire and rock. Fire beats wind and lightning. Wind beats earth and water. Earth beats fire and lightning. And finally, lightning beats wind and water. ◆ Hope you enjoy the game!");
}

resetBtn.addEventListener('click', function() {
    restartScores('resetBtn');
});

helpBtn.addEventListener('click', function() {
    helpAlert('helpBtn');
});

water.addEventListener('click', function() {
    newGame('water');
});

fire.addEventListener('click', function() {
    newGame('fire');
});

wind.addEventListener('click', function() {
    newGame('wind');
});

earth.addEventListener('click', function() {
    newGame('earth');
});

lightning.addEventListener('click', function() {
    newGame('lightning');
});