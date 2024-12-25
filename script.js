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


document.querySelectorAll('.choice').forEach(button =>{
  button.addEventListener('click', () =>{
    const playerChoice = button.dataset.choice;

    console.log(`PlayerSelected: ${playerChoice}`)
    playRound(playerChoice)
  })

})

function playRound(humanChoice){
  if(humanScore>=5 || compScore>= 5){
    return;
  }
 
  const computerSelection = getComputerChoice()
  console.log(`Human: ${humanChoice} Computer: ${computerSelection}`)

  const resultElement = document.querySelector('#result')
  const scoreElement = document.querySelector('#score')
  if (humanChoice === computerSelection.toLowerCase()){
    result.textContent = (`Human Selected ${humanChoice} computer Selected ${computerSelection} ITS A DRAW`)
    humanScore++, compScore++
  }else if((humanChoice === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
   (humanChoice === "paper" && computerSelection.toLowerCase() === "rock")
   || (humanChoice === 'scissors' && computerSelection.toLowerCase() === "paper")){
    result.textContent = (`Human Selected:  ${humanChoice}  computer Selected:  ${computerSelection}. Human Won!!!`)
    humanScore++
   }else{
    result.textContent = (`Human Selected:  ${humanChoice}  computer Selected:  ${computerSelection}. Computer Won!!!`)
    compScore++
   }

   scoreElement.textContent = `Human Score: ${humanScore} Computer Score: ${compScore}`

 if (humanScore === 5 && compScore === 5){
  result.textContent ='its a DRAW!!'
  disableButtons();
 } else if(humanScore === 5){
  result.textContent = 'Congratulations Human Won the game'
 }else{ if(compScore === 5)
  result.textContent ='Computer Won the Game'
 }
 }

function disableButtons(){
  document.querySelectorAll('.choice').forEach(button =>{
    button.disabled = true;
  })
}



 






