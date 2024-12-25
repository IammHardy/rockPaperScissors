

function getComputerChoice(){
  let computerChoice = Math.random();
  let compOption;

  if(computerChoice <= 0.666){
    compOption = 'Rock'

  }else if(computerChoice < 0.333){
    compOption = 'Paper'
  } else{
    compOption = 'Scissors'
  }
  return compOption;
}


let humanScore = 0;
let compScore = 0;

const resultDisplay = document.getElementById('result')
const tryAgainButton = document.getElementById('tryAgain')
const scoreDisplay = document.getElementById('score')
const buttons = document.querySelectorAll('button')

function updateScore(){
  scoreDisplay.textContent = `Human: ${humanScore} Computer: ${compScore}`
}

function checkWinner(){
  if(humanScore === 5 || compScore === 5){
    const winner = humanScore === 5 ? "Human" : "Computer;"
    resultDisplay.textContent = `${winner} wins the game!`;
    buttons.forEach(button => button.disabled =true);
    tryAgainButton.style.display = "block"
    tryAgainButton.disabled=false;
    return true;
  }
  return false;
}
function playRound(humanChoice){
 
  if(humanScore === 5 || compScore === 5){
    return;
  }

  const computerSelection = getComputerChoice()

  if (humanChoice === computerSelection.toLowerCase()){
    resultDisplay.textContent = `It's a DRAW `
    humanScore++, compScore++

  }else if((humanChoice === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
   (humanChoice === "paper" && computerSelection.toLowerCase() === "rock")
   || (humanChoice === 'scissors' && computerSelection.toLowerCase() === "paper")){
    resultDisplay.textContent = `You Win!  ${humanChoice}  beats  ${computerSelection}.`
    humanScore++
   }else{
    resultDisplay.textContent = `You lose!!  ${computerSelection}  beats  ${humanChoice}. `
    compScore++
   }
   updateScore()
   checkWinner()
   
 }


buttons.forEach(button =>{
  button.addEventListener('click', (e) =>{
    const playerChoice = e.target.getAttribute('data-choice');

    playRound(playerChoice);
  });
  
})

tryAgainButton.addEventListener('click', () =>{
  humanScore = 0;
  compScore= 0;
  updateScore();

  tryAgainButton.style.display ='none';
  tryAgainButton.style.alignItems='center'
  tryAgainButton.style.justiItems ='center'

  
  
 

  buttons.forEach(button => button.disabled = false);
});
const ToggleOff = document.querySelector('.toggle')
updateScore()



 






