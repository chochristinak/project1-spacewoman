//Show random hint that correlates with mystery word
const HINTS = ["energy centers of the body","opening of the third eye","a state of deep immersion and focus","bend so you dont break","tranquil","the deep blue abyss", "mother nature", "a creative style of yoga that connects breath and movement", "dark and feminine principle of the universe", "spore-bearing fruit, some might call breakthrough medicine"]




const WORDS = ["shakra", "enlightenment", "flow", "stretch", "calm", "ocean", "earth", "vinyasa", "yin", "psilocybin"] // array of words
let randWordIdx = Math.floor(Math.random() * WORDS.length);
let chosenWord = WORDS[randWordIdx];
let displayHint = HINTS[randWordIdx];
document.querySelector('.hint').innerHTML = "Hint: " + displayHint


console.log(chosenWord)

/*------state variables------*/
let holdList = []; // for correct letters guessed
let numGuesses = (chosenWord.length) + 1



/*------cached elements------*/
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
updateDisplay(); // update each correct letter in placeholder

// Create placeholders for letters in chosenWord
function displayWordWithUnderscores() {
  let displayString = chosenWordArr.join(" ");
  placeHolder.innerText = displayString;
}


// Check if typedLetter exists in chosenWord
function checkLetter() {
  let letter = typedLetter.value.toLowerCase();
  for (let i = 0; i < chosenWord.length; i++) {
    if (letter === chosenWord[i]) {
      chosenWordArr[i] = letter; {
        if (letter !== (chosenWord[i]));
        holdList.push(letter);
        numGuesses++;
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
    } 
    }

 // Send to holdList if letter is incorrect

function letterGuess() {
  if (numGuesses === 0) {
  {messageEl.innerText = "Oh no, you're out of guesses. The word was: " + `${chosenWord.toUpperCase()}`;
  document.getElementById("try").disabled = true;
  return; 
}

if (holdList.includes(letter)){
 holdList.push(letter)
 numGuesses=-1;
}
}

if (!chosenWord.includes(letter)){
  numGuesses--;
  guessesLeft.innerText = `Guesses left: ${numGuesses}`;
}
}
function win() {
if (chosenWordArr.join("") === chosenWord) {
  winAlert.innerText = "Namaste. You successfully guessed the word."
}
}
