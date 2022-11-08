// Variables from the DOM 

let water = document.getElementById('water');
let fire = document.getElementById('fire');
let wind = document.getElementById('wind');
let earth = document.getElementById('earth');
let lightning = document.getElementById('lightning');

let playerScore = 0;
let aiScore = 0;

let result = document.getElementById('game-text');

const options = ['water', 'fire', 'wind', 'earth', 'lightning'];

// AI (Computer) random pick 

function aiRandom() {
    let random = Math.floor(Math.random() * 5);
    return options[random];
}

// Player choice

function startGame(player) {
    let aiPlayer = aiRandom();
    gameResult(userPlayer, aiPlayer);
    return options[player];
}