let userScore = 0;
let computerScore = 0;
let userScoreTotal = document.getElementById("cap-total");
let computerScoreTotal = document.getElementById("comp-total");

let choiceFirst = document.getElementsByClassName("choice-first");
let resultText = document.querySelector(".declare");
let champText = document.querySelector(".statement");

let resultsTally= document.querySelector(".tally > span > span");

let vanish = document.getElementsByClassName("beats-info");

const exitBtn = document.getElementById("btn-leave");
const engageBtn = document.getElementById("engage");

const rockIcon = document.getElementById("rk");
const papeIcon = document.getElementById("pr");
const scisIcon = document.getElementById("ss");
const lizaIcon = document.getElementById("ld");
const spocIcon = document.getElementById("sk");

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



exitBtn.addEventListener('click', (e) => {

  userScoreTotal.innerText = 0;
  computerScoreTotal.innerText = 0;
  resultText.innerHtml = "";
});
 

  /**
* 1st created with the assistance of freeCodeCamp youtube tutorial - adds 
* listener event to icons and console logs.
*/
function main() {
  rockIcon.addEventListener("click", (_e) => { 
    removeStyles();
    rockIcon.classList.toggle("user-picked");
    console.log("rock");
  })

  papeIcon.addEventListener("click", (_e) => {
    removeStyles();
    papeIcon.classList.toggle("user-picked");
    console.log("paper");
  })

  scisIcon.addEventListener("click", (_e) => {
    removeStyles();
    scisIcon.classList.toggle("user-picked");
    console.log("scissors");
  })

  lizaIcon.addEventListener("click", (_e) => {
    removeStyles();
    lizaIcon.classList.toggle("user-picked");
    console.log("lizard");
  })

  spocIcon.addEventListener("click", (_e) => {
    removeStyles();
    spocIcon.classList.toggle("user-picked");
    console.log("spock")
    
  })
 }

main();

// allows for the selection of a single icon at any one time
function removeStyles() {
  const items = document.querySelectorAll("th");
  items.forEach(item => {
      item.classList.remove("user-picked");
  })
};




engageBtn.addEventListener("click", () => {
  const clickedItem = document.querySelector(".user-picked");
  choice(clickedItem.id);
});


function winTotal() {
  let winningTotal = document.getElementsByClassName('total').innerHTML;
  document.getElementsByClassName('total').innerHTML = ++winTotal;

  if (winTotal === 3) {
    bossWin(winTotal);
  }
}

function bossWin(winTotal) {
  let gameIsAlive = false;

  if (winTotal === 3 && gameIsAlive === false) {
    if (userScore > computerScore) {
      champText.innerHTML = "Success! You regained control of the ship. Full speed ahead!";
    } else if (computerScore > userScore) {
      champText.innerHTML ="Warning, self desstruct sequence has been initiated. Detonation in 5...4..."
    }else {
      champText.style.display = "none";
    }
  }
}