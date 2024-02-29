//Show random hint that correlates with mystery word
const HINTS = ["energy centers of the body","opening of the third eye","a state of deep immersion and focus","bend so you dont break","tranquility","the deep blue abyss"]




const WORDS = ["shakra", "enlightenment", "flow", "stretch", "calm", "ocean"] // array of words
let randWordIdx = Math.floor(Math.random() * WORDS.length);
let chosenWord = WORDS[randWordIdx];
let displayHint = HINTS[randWordIdx];
document.querySelector('.hint').innerHTML = "Hint: " + displayHint


console.log(chosenWord)

/*------state variables------*/




/*------cached elements------*/
let holdList = []; // for correct letters guessed
let numGuesses = 6;
let typedLetter = document.getElementById("insert-letter"); // typedletter is player's guess
let displayWord = document.getElementById("displayWord"); // *hidden* reveal word if guessed correctly
let placeHolder = document.getElementById("placeholders"); // guessing area
let guessesLeft = document.getElementById("guesscount"); // incorrect guesses
let tryLetterButton = document.getElementById("try"); 
let correctGuess = document.getElementById("good-job"); 
let tryAgain = document.getElementById("try-again"); 
let winAlert = document.getElementById("winAlert");

let chosenWordArr = new Array(chosenWord.length).fill("_");
let messageEl = document.querySelector("h3");
let letter

/*----- event listeners -----*/
tryLetterButton.addEventListener ('click', updateDisplay); // make try button link add correct letter to playfield 


/*--------functions----------*/
updateDisplay();
// gamOver(); // player didn't guess word 

// function gamOver(){}

function displayWordWithUnderscores() {
  let displayString = chosenWordArr.join(" ");
  placeHolder.innerText = displayString;
}


//* Check if typedLetter exists in chosenWord
function checkLetter() {
  let letter = typedLetter.value.toLowerCase();
  for (let i = 0; i < chosenWord.length; i++) {
    if (letter === chosenWord[i]) {
      chosenWordArr[i] = letter; {
        if (letter !== (chosenWord[i]));
        holdList.push(letter);
        // console.log(holdList)
      }
    } 
   }
  }

function updateDisplay() {
  checkLetter();
  letterGuess();
  correctPlacement()
  typedLetter.value = "";
  displayWordWithUnderscores();
  
}

function correctPlacement() {
  let letter = typedLetter.value.toLowerCase();
  for (let i = 0; i < chosenWord.length; i++) {
    if (chosenWord[i] === letter) {
      chosenWordArr[i] = letter;}
      win();
      // (console.log(chosenWordArr))
    }
  }

 //* Send to holdList if letter is incorrect

function letterGuess() {
if (holdList.includes(letter)) {
 holdList.push(letter);} 
else
if (!chosenWord.includes(letter)) {
  numGuesses = numGuesses -1;
  guessesLeft.innerText = `Guesses left: ${numGuesses}`;
}
} 

/*--------------* need help here-----------*/
// function guessCount() {
// numGuesses = document.getElementById("guesscount")
// if (numGuesses >= 6 === true); (numGuesses + 1);
// // console.log(numGuesses)
//         (typedLetter !== chosenWord); 
//         (numGuesses -1);

//     chosenWord = displayWord
//     if (numGuesses = 6); 
//     alert ("The word was:" (chosenWord))

function win() {
if (chosenWordArr.join("") === chosenWord) {
  winAlert.innerText = "Namaste. You successfully guessed the word."
} 
}

 function revealWord() {
 let unFinishedGuess = chosenWord
 if (chosenWordArr.join("") !== chosenWord && (numGuesses = 0)); 
 messageEl.innerText = "The word was: " + `${chosenWord}`
 }

