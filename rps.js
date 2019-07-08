let randomNum = Math.floor((Math.random() * 3) + 1);
const sharkButton = document.getElementById("sharkButton");
const manateeButton = document.getElementById("manateeButton");
const humanButton = document.getElementById("humanButton");
const results = document.querySelector(".results");
const playerSharkMessage = document.createElement('p');
const playerManateeMessage = document.createElement('p');
const playerHumanMessage = document.createElement('p');
const computerSharkMessage = document.createElement('p');
const computerManateeMessage = document.createElement('p');
const computerHumanMessage = document.createElement('p');
const sameMessage = document.createElement('h2');
const sharkWinMessage = document.createElement('h2');
const sharkLoseMessage = document.createElement('h2');
const manateeWinMessage = document.createElement('h2');
const manateeLoseMessage = document.createElement('h2');
const humanWinMessage = document.createElement('h2');
const humanLoseMessage = document.createElement('h2');
const playButton = document.querySelector('.playButton');
const replayButton = document.querySelector('.replay');
let currentScore = 0;
let playerResult = "";
let computerResult = "";


playerSharkMessage.textContent = "You chose shark!";
playerManateeMessage.textContent = "You chose manatee!";
playerHumanMessage.textContent = "You chose human!";
computerSharkMessage.textContent = "I chose shark!";
computerManateeMessage.textContent = "I chose manatee!";
computerHumanMessage.textContent = "I chose human!";
sameMessage.textContent = "Samesies! Refresh the page and try again."
sharkWinMessage.textContent = "Shark eats human. You win!"
sharkLoseMessage.textContent = "Manatee gazes lovingly into Shark's eyes until dead. You lose!"
manateeWinMessage.textContent = "Manatee gazes lovingly into Shark's eyes until dead. You win!"
manateeLoseMessage.textContent = "Manitee's habitat is slowly decimated by Rick Scott.  You lose!"
humanWinMessage.textContent = "Manitee's habitat is slowly decimated by Rick Scott. You win!"
humanLoseMessage.textContent = "Shark eats human. You lose!"

// add points when player wins
function add10() {
    currentScore = currentScore + 10;
    document.getElementById('result').innerHTML = currentScore;
}

// subtract points when player loses
function sub10() {
    currentScore = currentScore - 10;
    document.getElementById('result').innerHTML = currentScore;
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
    sharkButton.addEventListener('click', (e) => {
        results.appendChild(playerSharkMessage);
        let playerResult = 1;
        computerPlay();
        playButton.style.display = "none";
        results.style.display = "block";
        if (randomNum === playerResult) {
            results.appendChild(sameMessage);
        } else if (randomNum === 2) {
            results.appendChild(sharkLoseMessage);
            sub10();
        } else if (randomNum === 3) {
            results.appendChild(sharkWinMessage);
            add10();
        }
        replayButton.style.display = "block";
    });

    // manatee plays
    manateeButton.addEventListener('click', (e) => {
        results.appendChild(playerManateeMessage);
        let playerResult = 2;
        computerPlay();
        playButton.style.display = "none";
        results.style.display = "block";
        if (randomNum === playerResult) {
            results.appendChild(sameMessage);
        } else if (randomNum === 1) {
            results.appendChild(manateeWinMessage);
            add10();
        } else if (randomNum === 3) {
            results.appendChild(manateeLoseMessage);
            sub10();
        }
        replayButton.style.display = "block";
    });

    // human plays
    humanButton.addEventListener('click', (e) => {
        results.appendChild(playerHumanMessage);
        let playerResult = 3;
        computerPlay();
        playButton.style.display = "none";
        results.style.display = "block";
        if (randomNum === playerResult) {
            results.appendChild(sameMessage);
        } else if (randomNum === 1) {
            results.appendChild(humanLoseMessage);
            sub10();
        } else if (randomNum === 2) {
            results.appendChild(humanWinMessage);
            add10();
        }
        replayButton.style.display = "block";
    });
}

playRound();

// starts a new round of play
replayButton.addEventListener('click', (e) => {
    randomNum = Math.floor((Math.random() * 3) + 1);
    playButton.style.display = "block";
    results.textContent = "";
    playRound();
    replayButton.style.display = "none";
});



