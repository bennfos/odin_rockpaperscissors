const randomNum = Math.floor((Math.random() * 3) + 1);
const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const results = document.querySelector(".results");
const playerRockMessage = document.createElement('p');
const playerPaperMessage = document.createElement('p');
const playerScissorsMessage = document.createElement('p');
const computerRockMessage = document.createElement('p');
const computerPaperMessage = document.createElement('p');
const computerScissorsMessage = document.createElement('p');
const sameMessage = document.createElement('h2');
const rockWinMessage = document.createElement('h2');
const rockLoseMessage = document.createElement('h2');
const paperWinMessage = document.createElement('h2');
const paperLoseMessage = document.createElement('h2');
const scissorsWinMessage = document.createElement('h2');
const scissorsLoseMessage = document.createElement('h2');
const button = document.querySelector('.button');
let playerResult = "";
let computerResult = "";


playerRockMessage.textContent = "You threw rock!";
playerPaperMessage.textContent = "You threw paper!";
playerScissorsMessage.textContent = "You threw scissors!";
computerRockMessage.textContent = "I threw rock!";
computerPaperMessage.textContent = "I threw paper!";
computerScissorsMessage.textContent = "I threw scissors!";
sameMessage.textContent = "Samesies! Refresh the page and try again."
rockLoseMessage.textContent = "Paper covers rock. You lose!"
rockWinMessage.textContent = "Rock smashes scissors! You win!"
paperWinMessage.textContent = "Paper covers rock! You win!"
paperLoseMessage.textContent = "Scissors cut paper. You lose!"
scissorsWinMessage.textContent = "Scissors cut paper! You win!"
scissorsLoseMessage.textContent = "Rock smashes scissors. You lose!"


function playRound () {
    function computerPlay() {
        if (randomNum === 1) {
            results.appendChild(computerRockMessage);
        } else if (randomNum === 2) {
            results.appendChild(computerPaperMessage);
        } else {
            results.appendChild(computerScissorsMessage);
        }
    }
    rockButton.addEventListener('click', (e) => {
        results.appendChild(playerRockMessage);
        let playerResult = 1;
        computerPlay();
        button.style.display = "none";
        if (randomNum === playerResult) {
            results.appendChild(sameMessage);
        } else if (randomNum === 2) {
            results.appendChild(rockLoseMessage);
        } else if (randomNum === 3) {
            results.appendChild(rockWinMessage);
        }
    });
    paperButton.addEventListener('click', (e) => {
        results.appendChild(playerPaperMessage);
        let playerResult = 2;
        computerPlay();
        button.style.display = "none";
        if (randomNum === playerResult) {
            results.appendChild(sameMessage);
        } else if (randomNum === 1) {
            results.appendChild(paperWinMessage);
        } else if (randomNum === 3) {
            results.appendChild(paperLoseMessage);
        }
    });
    scissorsButton.addEventListener('click', (e) => {
        results.appendChild(playerScissorsMessage);
        let playerResult = 3;
        computerPlay();
        button.style.display = "none";
        if (randomNum === playerResult) {
            results.appendChild(sameMessage);
        } else if (randomNum === 1) {
            results.appendChild(scissorsLoseMessage);
        } else if (randomNum === 2) {
            results.appendChild(scissorsWinMessage);
        }
    });
}

playRound();





// console.log(randomNum); 






// function playRound () {
//     computerPlay()
//     #rockButton.addEventListener
// }
  