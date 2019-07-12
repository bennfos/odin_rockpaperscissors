let randomNum = Math.floor((Math.random() * 3) + 1);
const sharkButton = document.getElementById("sharkButton");
const manateeButton = document.getElementById("manateeButton");
const humanButton = document.getElementById("humanButton");
const results = document.querySelector(".results");
const playerSharkMessage = document.createElement('img');
const playerManateeMessage = document.createElement('img');
const playerHumanMessage = document.createElement('img');
const computerSharkMessage = document.createElement('img');
const computerManateeMessage = document.createElement('img');
const computerHumanMessage = document.createElement('img');
const shootMessage = document.createElement('h2');
const vsMessage = document.createElement('h2');
const sameMessage = document.createElement('h2');
const sharkMessage = document.createElement('h2');
const sharkLoseMessage = document.createElement('h2');
const manateeMessage = document.createElement('h2');
const humanMessage = document.createElement('h2');
const winMessage = document.createElement('h2');
const loseMessage = document.createElement('h2');
const playButton = document.querySelector('.playButton');
const replayButton = document.querySelector('.replay');
const winningScore = 50;
let currentScore = 0;
let playerResult = "";
let computerResult = "";

playerSharkMessage.src = "shark.svg";
playerSharkMessage.className = "space-around";
playerManateeMessage.src = "manatee.svg";
playerManateeMessage.className = "space-around";
playerHumanMessage.src = "ceo-user.svg";
playerHumanMessage.className = "space-around";
computerSharkMessage.src = "shark.svg";
computerSharkMessage.className = "space-around";
computerManateeMessage.src = "manatee.svg";
computerManateeMessage.className = "space-around";
computerHumanMessage.src = "ceo-user.svg";
computerHumanMessage.className = "space-around";
sameMessage.textContent = "Samesies! Try again."
sharkMessage.textContent = "Shark eats human"
sharkMessage.style.fontFamily = "Rockwell";
manateeMessage.textContent = "Manatee gazes lovingly into Shark's eyes until dead"
manateeMessage.style.fontFamily = "Rockwell";
humanMessage.textContent = "Manitee's habitat is slowly decimated by Rick Scott"
humanMessage.style.fontFamily = "Rockwell";
shootMessage.textContent = "SHOOT!"
vsMessage.textContent = "vs."
winMessage.textContent = "You win!"
loseMessage.textContent = "You lose!"


// add 10 points when player wins
function add10() {
    currentScore = currentScore + 10;
    document.getElementById('score__number').innerHTML = currentScore;
}

// subtract 10 points when player loses
function sub10() {
    currentScore = currentScore - 5;
    document.getElementById('score__number').innerHTML = currentScore;
}

// returns a random number between 1 and 3
function getRandomNum () {
    return randomNum;
}
    
    

function playRound () {

    // gets a random number between 1 and 3 and associates that number with shark, manatee or human
    function computerPlay() {
        getRandomNum();
        if (randomNum === 1) {
            results.appendChild(computerSharkMessage);
        } else if (randomNum === 2) {
            results.appendChild(computerManateeMessage);
        } else {
            results.appendChild(computerHumanMessage);
        }
    }

    // shark plays
    sharkButton.addEventListener('click', () => {
        results.appendChild(shootMessage);
        results.appendChild(playerSharkMessage);
        results.appendChild(vsMessage);
        let playerResult = 1;
        computerPlay();
        playButton.style.display = "none";
        results.style.display = "block";
        if (randomNum === playerResult) {
            results.appendChild(sameMessage);
        } else if (randomNum === 2) {
            results.appendChild(manateeMessage);
            results.appendChild(loseMessage);
            sub10();
        } else if (randomNum === 3) {
            results.appendChild(sharkMessage);
            results.appendChild(winMessage);
            add10();
        }
        if (currentScore >= winningScore) {
            alert("You WIN THE GAME!!! Way to be DTL&F");
        }
        replayButton.style.display = "block";
    });

    // manatee plays
    manateeButton.addEventListener('click', () => {
        results.appendChild(shootMessage);
        results.appendChild(playerManateeMessage);
        results.appendChild(vsMessage);
        let playerResult = 2;
        computerPlay();
        playButton.style.display = "none";
        results.style.display = "block";
        if (randomNum === playerResult) {
            results.appendChild(sameMessage);
        } else if (randomNum === 1) {
            results.appendChild(manateeMessage);
            results.appendChild(winMessage);
            add10();
        } else if (randomNum === 3) {
            results.appendChild(humanMessage);
            results.appendChild(loseMessage);
            sub10();
        }
        replayButton.style.display = "block";
    });

    // human plays
    humanButton.addEventListener('click', () => {
        results.appendChild(shootMessage);
        results.appendChild(playerHumanMessage);
        results.appendChild(vsMessage);
        let playerResult = 3;
        computerPlay();
        playButton.style.display = "none";
        results.style.display = "block";
        if (randomNum === playerResult) {
            results.appendChild(sameMessage);
        } else if (randomNum === 1) {
            results.appendChild(sharkMessage);
            results.appendChild(loseMessage);
            sub10();
        } else if (randomNum === 2) {
            results.appendChild(humanMessage);
            results.appendChild(winMessage);
            add10();
        }
        replayButton.style.display = "block";
    });
}

playRound();

// starts a new round of play
replayButton.addEventListener('click', () => {
    randomNum = Math.floor((Math.random() * 3) + 1);
    playButton.style.display = "block";
    results.textContent = "";
    replayButton.style.display = "none";
    window.scrollTo(0, 0);
});



