let userScore = 0;
let computerScore = 0;
let userScoreTotal = document.getElementById("cap-total");
let computerScoreTotal = document.getElementById("comp-total");

let resultText = document.querySelector(".declare");
let resultsTally= document.querySelector(".tally > span > span");

let play = document.querySelector(".picked");
const exitBtn = document.getElementById('btn-leave');

const rockIcon = document.getElementById("rk");
const papeIcon = document.getElementById("pr");
const scisIcon = document.getElementById("ss");
const lizaIcon = document.getElementById("ld");
const spocIcon = document.getElementById("sk");



/**
* 3rd created with assistance of freeCodeCamp youtube tutorial- creates the random 
* generator for the comp choice
*/
function gameCompChoice() {
  let cChoices = ["rk", "pr", "ss", "ld", "sk"];
  let cPick = (Math.floor(Math.random()* 5));
  return cChoices[cPick];
  console.log(gameCompChoice());
}



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
  resultText.innerHTML = `You chose ${convertToWord(captChoice)}. That beats the computer's ${convertToWord(computerChoice)}. Proceed to next round!`;
}
  
/**  6th created with assistance of freeCodeCamp youtube tutorial - creates the block 
* code for the loss scenario
*/ 
function loss(captChoice, computerChoice) {
  computerScore++;
  userScoreTotal.innerHTML = userScore;   
  computerScoreTotal.innerHTML = computerScore;
  resultText.innerHTML = `You chose ${convertToWord(captChoice)}. The computer chose ${convertToWord(computerChoice)}. Computer blocks your progress!`;
}
    
/**  7th created with the assistance of freeCodeCamp youtube tutorial - creates the block 
* code for the draw scenario 
*/
function draw(captChoice, computerChoice) {
  resultText.innerHTML = `You chose ${convertToWord(captChoice)}. The computer chose ${convertToWord(computerChoice)}. Stalemate - you have another go!`;
}

  
/**
* 2nd created with the assistance of freeCodeCamp youtube tutorial - Begins by logging 
* the selection to the console. . 
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
        break;

      case "rkrk": 
      case "prpr":
      case "ssss":
      case "ldld":
      case "sksk":
        draw(captChoice, computerChoice);
        break;  
    };

  let chosen = document.classList.add("user-picked");
  /*chosen.addEventListener("click", runGame());*/
}

/**
* 1st created with the assistance of freeCodeCamp youtube tutorial - adds 
* listener event to icons and console logs.
*/
function main() {
    rockIcon.addEventListener("click", function() { 
      rinka("rk");
      console.log("rock");
    })
  
    papeIcon.addEventListener("click", function( ){
      rinka("pr");
      console.log("paper");
    })
  
    scisIcon.addEventListener("click", function(){
      rinka("ss");
      console.log("scissors");
    })
  
    lizaIcon.addEventListener("click", function(){
      rinka("ld");
      console.log("lizard");
    })
  
    spocIcon.addEventListener("click", function(){
      rinka("sk");
      console.log("spock")
      
    })
   }
  
main();
  


/**
 * creates the reload function on the exit button
 * inspired from Veronica Louren example.
*/

exitBtn.addEventListener('click', (e) => {

  userScoreTotal.innerText = 0;
  computerScoreTotal.innerText = 0;
  resultText.innerHtml = "";

  // ensures settings returned to start settings.

  window.location.reload();

});
