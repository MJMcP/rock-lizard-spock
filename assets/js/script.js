let userScore = 0;
let computerScore = 0;
let userScoreTotal = document.getElementById("cap-total");
let computerScoreTotal = document.getElementById("comp-total");

let resultText = document.querySelector(".declare");
let resultsTally= document.querySelector(".tally > span > span");

let plays = document.querySelector(".picked");
const exitBtn = document.getElementById('btn-leave');

const rockIcon = document.getElementById("rk");
const papeIcon = document.getElementById("pr");
const scisIcon = document.getElementById("ss");
const lizaIcon = document.getElementById("ld");
const spocIcon = document.getElementById("sk");


/**
* 1st created with the assistance of freeCodeCamp youtube tutorial - adds 
* listener event to icons and console logs.
*/
function main() {
  rockIcon.addEventListener("click", function() { 
    choice("rk");
    console.log("rock");
  })

  papeIcon.addEventListener("click", function( ){
    choice("pr");
    console.log("paper");
  })

  scisIcon.addEventListener("click", function(){
    choice("ss");
    console.log("scissors");
  })

  lizaIcon.addEventListener("click", function(){
    choice("ld");
    console.log("lizard");
  })

  spocIcon.addEventListener("click", function(){
    choice("sk");
    console.log("spock")
    
  })
 }

main();

/**
* creates the reload function on the exit button
* inspired from Veronica Louren example.
*/

exitBtn.addEventListener('click', (_e) => {

userScoreTotal.innerText = 0;
computerScoreTotal.innerText = 0;
resultText.innerHtml = "";

// ensures settings returned to start settings.

window.location.reload();

});


/**
* 2nd created with the assistance of freeCodeCamp youtube tutorial - Begins by logging 
* the selection to the console. . 
*/
function choice(captChoice) {
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
    }

  let chosen = document.classList.add("user-picked");
  chosen.addEventListener("click", runGame());
  console.log("You have selected " + captChoice);
}

function finalStatement(){
  
  let engageBtn = document.getElementById("engage")
  
  if ( userScore === 3 ) {

    engageBtn.classList.add = "hidden";
    resultText.classList.add = "hidden";
    plays.innerHTML = `Congratulations, you have regained control of the ship. Time to Boldly Go...`;

  }

  if (computerScore === 3) {

    engageBtn.style.display = "none";
    resultText.innerHTML = "";
    plays.innerHTML = `Computer has activated self-destruct sequence. Detonation in 5....4...3`;
  };
} 
  

/**
* 3rd created with assistance of freeCodeCamp youtube tutorial- creates the random 
* generator for the comp choice
*/
function gameCompChoice() {
  let cChoices = ["rk", "pr", "ss", "ld", "sk"];
  let cPick = (Math.floor(Math.random()* 5));
  return cChoices[cPick];
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
* code for the win loss and draw scenario  
*/
function win(captChoice, computerChoice) { 
  userScore++;
  userScoreTotal.innerHTML = userScore;      
  computerScoreTotal.innerHTML = computerScore;
  resultText.innerHTML = `You chose ${convertToWord(captChoice)}. That beats the computer's ${convertToWord(computerChoice)}. Proceed to next round!`;
}

function loss(captChoice, computerChoice) {
  computerScore++;
  userScoreTotal.innerHTML = userScore;   
  computerScoreTotal.innerHTML = computerScore;
  resultText.innerHTML = `You chose ${convertToWord(captChoice)}. The computer chose ${convertToWord(computerChoice)}. Computer blocks your progress!`;
}
  
function draw(captChoice, computerChoice) {
  resultText.innerHTML = `You chose ${convertToWord(captChoice)}. The computer chose ${convertToWord(computerChoice)}. Stalemate - you have another go!`;
}

/**
 * Creates the text for the end of game statement 
 */
function endGame(resultsTally){
  if(userScore > computerScore ) {
    resultText.innerHTML = `Congratulations! You have regained control of the ship. Time to Boldly Go...`;
  } else if (computerScore > userScore) {
    resultText.innerHTML = `RED ALERT! Computer has set the self destruct! Detonation in 5...4...3`;
  }
  }

