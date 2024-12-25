




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
    const winner = humanScore === 5 ? "Human" : "Computer";
    resultDisplay.textContent = `${winner} wins the game!`;
    buttons.forEach(button => button.disabled =true);
    tryAgainButton.style.display = "block"
    tryAgainButton.disabled=false;
    resultDisplay.style.fontSize ='40px'
    return true;
  }
  return false;
}


function playRound(humanChoice){
 
  if(humanScore === 5 || compScore === 5){
    return;
  }

  const choices = ["rock", "paper", "scissors"];
   computerChoice = choices[Math.floor(Math.random()* choices.length)]

  if (humanChoice === computerChoice.toLowerCase()){
    resultDisplay.textContent = `It's a DRAW `
    humanScore++, compScore++

  }else if((humanChoice === 'rock' && computerChoice.toLowerCase() === 'scissors') ||
   (humanChoice === "paper" && computerChoice.toLowerCase() === "rock")
   || (humanChoice === 'scissors' && computerChoice.toLowerCase() === "paper")){
    resultDisplay.textContent = `You Win!  ${humanChoice}  beats  ${computerChoice}.`
    humanScore++
   }else{
    resultDisplay.textContent = `You lose!!  ${computerChoice}  beats  ${humanChoice}. `
    compScore++
   }
   updateScore()
   checkWinner()
   
 }


buttons.forEach(button =>{
  button.addEventListener('click', (e) =>{
    const playerChoice = e.target.closest('button').getAttribute('data-choice');

    playRound(playerChoice);
  });
  
})

tryAgainButton.addEventListener('click', () =>{
  humanScore = 0;
  compScore= 0;
  updateScore();
  resultDisplay.innerHTML = ''
  tryAgainButton.style.display ='none';

  
  buttons.forEach(button => button.disabled = false);
});

const hideResult = document.getElementById('show')

updateScore()



 






