let playerLives = 10;
let computerLives = 10;
let playerPoints = 0;
let computerPoints = 0;

const resultDisplay = document.getElementById('result');
const tryAgainButton = document.getElementById('tryAgain');
const scoreDisplay = document.getElementById('score');
const buttons = document.querySelectorAll('.choice');
const show = document.getElementById('show');
const playerLiveSpan = document.getElementById("playerLives");
const computerLiveSpan = document.getElementById("computerLives");
const playerPointSpan = document.getElementById("playerPoints");
const computerPointSpan = document.getElementById("computerPoints");
const leaderboard = document.getElementById("leaderboard"); // New leaderboard element

// Function to get computer choice
function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

// Game rules including Lizard and Spock
const rules = {
    rock: ['scissors'],
    paper: ['rock'],
    scissors: ['paper'],
};

function playGame(humanChoice) {
    const computerChoice = getComputerChoice();

    console.log(`Human Choice: ${humanChoice}`);
    console.log(`Computer Choice: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        resultDisplay.textContent = "It's a tie!";
    } else if (rules[humanChoice].includes(computerChoice)) {
        resultDisplay.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
        playerPoints += 1;
        computerLives -= 1;
    } else {
        resultDisplay.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
        computerPoints += 1;
        playerLives -= 1;
    }

    // Update Lives and Points in the DOM
    playerLiveSpan.textContent = playerLives;
    computerLiveSpan.textContent = computerLives;
    playerPointSpan.textContent = playerPoints;
    computerPointSpan.textContent = computerPoints;

    // Check for Game Over
    if (playerLives === 0 || computerLives === 0) {
        resultDisplay.textContent = playerLives === 0
            ? "Game Over! You lost!"
            : "Congratulations! You won!";
        disableButtons();
        tryAgainButton.style.display = 'block';
    }

    // Update Leaderboard
    updateLeaderboard();
}

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    });
}

function enableButtons() {
    buttons.forEach(button => {
        button.disabled = false;
    });
}

tryAgainButton.addEventListener('click', () => {
    playerLives = 10;
    computerLives = 10;
    playerPoints = 0;
    computerPoints = 0;
    resultDisplay.textContent = '';
    scoreDisplay.textContent = '';
    playerLiveSpan.textContent = playerLives;
    computerLiveSpan.textContent = computerLives;
    playerPointSpan.textContent = playerPoints;
    computerPointSpan.textContent = computerPoints;
    tryAgainButton.style.display = 'none';
    enableButtons();
});

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const humanChoice = event.currentTarget.getAttribute('data-choice');
        playGame(humanChoice);
    });
});

// Update leaderboard with number of games won/lost
function updateLeaderboard() {
    leaderboard.textContent = `Player Points: ${playerPoints} | Computer Points: ${computerPoints}`;
  }

// Sound effects
function playSound(effect) {
    const audio = new Audio(`sounds/${effect}.mp3`);
    audio.play();
}

// Add sound effects to win/loss/tie
resultDisplay.addEventListener('DOMSubtreeModified', () => {
    if (resultDisplay.textContent.includes("Win")) {
        playSound('win');
    } else if (resultDisplay.textContent.includes("Lose")) {
        playSound('lose');
    } else if (resultDisplay.textContent.includes("tie")) {
        playSound('tie');
    }
});

// Add animations
buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('clicked');
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 300);
    });
});
