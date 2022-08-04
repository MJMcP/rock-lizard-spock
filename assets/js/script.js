let userScore = 0;
let computerScore = 0;
let userScoreTotal = document.getElementById("cap-total");
let computerScoreTotal = document.getElementById("comp-total");
let scoreBoard = document.querySelector(".declare");
let resultsTally= document.querySelector(".tally > span > span");
let notice = document.getElementsByClassName("picked");
const rockIcon = document.getElementById("rk");
const papeIcon = document.getElementById("pr");
const scisIcon = document.getElementById("ss");
const lizaIcon = document.getElementById("ld");
const spocIcon = document.getElementById("sk");

/**
 * runGame() will be listening for the onclick for the icons 
 *  within the game-choice area to turn on.
 * it will only need one selection to activate and shouldnt
 * be affected if user changes selection choice  
 * this will change the display in the game-area to the game-stage
 * which will show the results
 * 
 * 
 * runGame();{
    let a= 3;
}*/


/**
* 3rd created with assistance of freeCodeCamp youtube tutorial- creates the random 
* generator for the comp choice
*/
function gameCompChoice() {
  let cChoices = ["rk", "pr", "ss", "ld", "sk"];
  let cPick = (Math.floor(Math.random()* 5));
  return cChoices[cPick];
}

console.log(gameCompChoice());

/**
* 5th created with assistance of freeCodeCamp youtube tutorial - inserts a human 
* readable word into the results notice the win() function's scoreBoard.innerHTML. 
* This element will be displayed on the second play stage but for the moment, 
* it is included here to ensure the coding actually works.
*/
function convertToWord(string) {
  if (string === "rk") return "Rock";
  if (string === "pr") return "Paper";
  if (string === "ss") return "Scissors";
  if (string === "ld") return "Lizard";
  return "Spock";
}
  
  
/**
* 4th created with assistance of freeCodeCamp youtube tutorial- creates the block 
* code for the win scenario  
*/
function win(captChoice, computerChoice) {
  userScore++;
  userScoreTotal.innerHTML = userScore;      
  computerScoreTotal.innerHTML = computerScore;
  scoreBoard.innerHTML = `You chose ${convertToWord(captChoice)}. That beats ${convertToWord(computerChoice)}. Proceed to next round!`;
}
  
/**  6th created with assistance of freeCodeCamp youtube tutorial - creates the block 
* code for the loss scenario
*/ 
function loss(captChoice, computerChoice) {
  computerScore++;
  userScoreTotal.innerHTML = userScore;   
  computerScoreTotal.innerHTML = computerScore;
  scoreBoard.innerHTML = `You chose ${convertToWord(captChoice)}. The computer chose ${convertToWord(computerChoice)}. Computer blocks your progress!`;
}
    
/**  7th created with the assistance of freeCodeCamp youtube tutorial - creates the block 
* code for the draw scenario 
*/
function draw(captChoice, computerChoice) {
  scoreBoard.innerHTML = `You chose ${convertToWord(captChoice)}. The computer chose ${convertToWord(computerChoice)}. Stalemate - you have another go!`;
}

  
/**
* 2nd created with the assistance of freeCodeCamp youtube tutorial - Begins by logging 
* the selection to the console. If the "captChoice + computerChoice" create a string 
* with a certain letter combination from first section of block code, 
* the user will be allowed to win the round. If the string combinatrion is from 
* the second section of block code, the computer will be allowed to win the round. 
*/
function rinka(captChoice) {
  console.log("You have selected " + captChoice);
  let computerChoice = gameCompChoice();
  switch (captChoice + computerChoice) {
    case "rkss":
    case "rkld":
    case "prrk":
    case "prsk":
    case "sspr":
    case "ssld":
    case "ldsk":
    case "ldpr":
    case "skss":
    case "skrk":
      win(captChoice, computerChoice);
      console.log("YOU PASSED ROUND 1.");
      break;        
    case "rkpr":
    case "rksp":        
    case "prss":
    case "prld":
    case "ssrk":
    case "sssp":
    case "ldrk":
    case "ldss":
    case "skpr":
    case "skld":
      loss(captChoice, computerChoice);
      console.log("COMPUTER HAS BLOCKED YOU.");
      break;
    case "rkrk": 
    case "prpr":
    case "ssss":
    case "ldld":
    case "sksk":
      draw(captChoice, computerChoice);
      console.log("STALEMATE - TRY AGAIN");
      break;  
  }
}

/**
* 1st created with the assistance of freeCodeCamp youtube tutorial - adds 
* listener event to icons and console logs.
*/
function main() {
    rockIcon.addEventListener("click", function() { 
      rinka("rk");
      console.log(rock);
    })
  
    papeIcon.addEventListener("click", function( ){
      rinka("pr");
      console.log(paper);
    })
  
    scisIcon.addEventListener("click", function(){
      rinka("ss");
      console.log(scissors);
    })
  
    lizaIcon.addEventListener("click", function(){
      rinka("ld");
      console.log("lizard");
    })
  
    spocIcon.addEventListener("click", function(){
      rinka("sk");
      console.log(spock)
      
    })
   }
  
main();
  
  





/**
 * compares the user choice and the computer
 * generated choice.
 
 checkAnswer();{ 
    let b= 2;
 }

 /**
  * replies with a text line of congrats or hard luck or its a tie
  * and provides the indicator for the increment on the tally
 
 calculateCorrectAns();{
    let i= 0;
 }

 //increments the tally on the captains score card
incrementCapt();{
    let j = 1;
}

//increments the tally on the computers score card

/**
 * this function lists for an event click on the end game button
 * once its turned on, the screen will ref
 */
