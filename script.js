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

function playRound(){
  let humanChoice= prompt('Enter Rock Paper Scissors').toLowerCase();
  const computerSelection = getComputerChoice()
  
  if (humanChoice === computerSelection.toLowerCase()){
    alert(`Human Selected ${humanChoice} computer Selected ${computerSelection} ITS A DRAW`)
    humanScore++, compScore++
  }else if((humanChoice === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
   (humanChoice === "paper" && computerSelection.toLowerCase() === "rock")
   || (humanChoice === 'scissors' && computerSelection.toLowerCase() === "paper")){
    alert(`Human Selected:  ${humanChoice}  computer Selected:  ${computerSelection}. Human Won!!!`)
    humanScore++
   }else{
    alert(`Human Selected:  ${humanChoice}  computer Selected:  ${computerSelection}. Computer Won!!!`)
    compScore++
   }
   return;
}





function playGame(){
 
  let count = 0;

  while(count<5){
    playRound();
    count++;
    console.log(`Round  ${count} just ended`)
    console.log(`Human Total Score: ${humanScore}`)
    console.log(`Computer Total Score: ${compScore}`)
  }
  return;

 
}

function whoWon(){
  if(humanScore>compScore){
    console.log(`Human Score: ${humanScore}  x computer Score:${compScore}. HUMAN WON!!!`)
  }else{
    console.log(`Human Score: ${humanScore}  x ${compScore}:computer Score. COMPUTER WON!!!`)
  }
  return;
}
playGame()
whoWon()


