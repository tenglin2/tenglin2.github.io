
//Declaring all the constants and variables that I will be manipulating.
const rock = document.querySelector("#pic1");
const paper = document.querySelector("#pic2");
const scissors = document.querySelector("#pic3");

var pScore = 0;
var cScore = 0;
var tScore = 0;

var playerScore = document.getElementById("pscore");
var computerScore = document.getElementById("cscore");
var tieScore = document.getElementById("tscore");

var compChoice = document.getElementById("compChoice");
var resultText = document.getElementById("results");

var playerChoice, computerChoice;

var roundWinner = "";
var finalWinner = "";

var congratsText = document.getElementById("congrats");
var maybeText = document.getElementById("maybe");

var input;


//Reset button will reset everything on the event of clicking it.
const btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
  pScore = 0;
  playerScore.textContent = pScore;
  cScore = 0;
  computerScore.textContent = cScore;
  tScore = 0;
  tieScore.textContent = tScore;
  compChoice.textContent = "";
  resultText.textContent = "";
  finalWinner = "";
  congratsText.textContent = "";
  maybeText.textContent = "";
})

//Used to adhere to threeway deadlock theme, changing choices according to their animal.
function toAnimal(input){
  if (input === "rock"){
    return "Slug";
  }else if (input === "paper"){
    return "Frog";
  }else if (input === "scissors"){
    return "Snake";
  }else{
    return "ERROR";
  }
}

//Function called in the onClick events for the images. Basically chooses the computerChoice by using a Math.random function and multiplying by 3. Also outputs a text based on the result.
function getComputerChoice(){
  var number = Math.floor(3*Math.random() + 1);
  switch (number){
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
    default:
      alert("Something went horribly wrong.");
  }
  compChoice.textContent = `The Computer Chose ${computerChoice}`;
}


//Using multiple if/else statements, we compare the choices of the player and computer and determine a roundWinner. We adjust the scores according to the result and call the updateScore function which takes in several parameters.
function findRoundWinner(playerChoice, computerChoice) {
  if (playerChoice === "rock"){
    if (computerChoice === "scissors"){
      roundWinner = "player";
      pScore++;
    }else if(computerChoice === "paper"){
      roundWinner = "computer";
      cScore++;
    }else{
      roundWinner = "tie";
      tScore++;
    }
    updateScore(pScore, cScore, tScore, playerChoice, computerChoice, roundWinner);
  }else if(playerChoice === "paper"){
    if (computerChoice === "rock"){
      roundWinner = "player";
      pScore++;
    }else if (computerChoice === "scissors"){
      roundWinner = "computer";
      cScore++;
    }else{
      roundWinner = "tie";
      tScore++;
    }
    updateScore(pScore, cScore, tScore, playerChoice, computerChoice, roundWinner);
  }else if(playerChoice === "scissors"){
    if (computerChoice === "paper"){
      roundWinner = "player";
      pScore++;
    }else if (computerChoice === "rock"){
      roundWinner = "computer";
      cScore++;
    }else{
      roundWinner = "tie";
      tScore++;
    }
    updateScore(pScore, cScore, tScore, playerChoice, computerChoice, roundWinner);
  }
}

//The updateScore function is mainly textual. Using the information or roundWinner, we output the correct text for the situation. In the case where either the player or the computer reaches 5 points, we output a congrats or failure text and prompt the user to reset the game.
function updateScore(pScore, cScore, tScore, playerChoice, computerChoice, roundWinner){
  if (roundWinner === "player"){
    playerScore.textContent = pScore;
    resultText.textContent = `${toAnimal(playerChoice)} beats ${toAnimal(computerChoice)}! Player wins round!`;
  }else if (roundWinner === "computer"){
    computerScore.textContent = cScore;
    resultText.textContent = `${toAnimal(playerChoice)} loses to ${toAnimal(computerChoice)}. Computer wins round :(`;
  }else if (roundWinner === "tie"){
    tieScore.textContent = tScore;
    resultText.textContent = `${toAnimal(playerChoice)} ties with ${toAnimal(computerChoice)}. No round winner.`;
  }else{
    resultText.textContent = "Something went horribly wrong.";
  }
  if(finalWinner !== "player" && finalWinner !== "computer"){
    if (pScore === 5 ){
      finalWinner = "player";
      congratsText.textContent = "Congratulations, you just won the game!";
      maybeText.textContent = "Feel free to keep playing or press the reset button.";
    } else if(cScore === 5){
      finalWinner = "computer";
      congratsText.textContent = "Sorry, Computer beat you :(";
      maybeText.textContent = "Feel free to keep playing or press the reset button.";
    }
  }

}

//On click, we know what the player chose based on the image, so we can set playerChoice and start the whole process. Each click calls the findRoundWinner function which compares the player and computer choice.
rock.addEventListener("click", (e) =>{
  playerChoice = "rock";
  computerChoice = getComputerChoice();
  compChoice.textContent = `Computer Chooses ${toAnimal(computerChoice)}`;
  findRoundWinner(playerChoice, computerChoice);

})
paper.addEventListener("click", (e) =>{
  playerChoice = "paper";
  computerChoice = getComputerChoice();
  compChoice.textContent = `Computer Chooses ${toAnimal(computerChoice)}`;
  findRoundWinner(playerChoice, computerChoice);

})
scissors.addEventListener("click", (e) =>{
  playerChoice = "scissors";
  computerChoice = getComputerChoice();
  compChoice.textContent = `Computer Chooses ${toAnimal(computerChoice)}`;
  findRoundWinner(playerChoice, computerChoice);
})
