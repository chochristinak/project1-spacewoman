//Show random hint that correlates with mystery word
const HINTS = ["energy centers of the body","opening of the third eye","a state of deep immersion and focus","bend so you dont break","tranquility","the deep blue abyss"];
// let randHintIdx = Math.floor(Math.random() * HINTS.length);
// let chosenWord = 



const WORDS = ["shakra", "enlightenment", "flow", "stretch", "calm", "ocean"] // array of words
let randWordIdx = Math.floor(Math.random() * WORDS.length);
let chosenWord = WORDS[randWordIdx];
let displayHint = HINTS[randWordIdx];
document.querySelector('.hint').innerHTML = "Hint: " + displayHint


console.log(chosenWord)

/*------state variables------*/
let holdList = []; // for letters already guessed
let typedLetter = document.getElementById("insert-letter") // typedletter is player's guess
let displayWord = document.getElementById("displayWord") // *hidden* reveal word if guessed correctly
let placeHolder = document.getElementById("placeholders") // guessing area
let incorrectGuess = document.getElementById("guesscount") // incorrect guesses
let numGuesses = 6;
let tryLetterButton = document.getElementById("try"); 
tryLetterButton.addEventListener ('click', updateDisplay); // make try button link add correct letter to playfield 
let chosenWordArr = new Array(chosenWord.length).fill("_");
let winAlert = document.getElementById("winAlert")
let letter

/*--------functions----------*/



function displayWordWithUnderscores() {
  let displayString = chosenWordArr.join(" ");
  placeHolder.innerText = displayString;
}
//* Check if typedLetter exists in chosenWord
function checkLetter() {
  let letter = typedLetter.value.toLowerCase();
  for (let i = 0; i < chosenWord.length; i++) {
    if (letter === chosenWord[i]) {
      chosenWordArr[i] = letter;
    // } else if (letter !== chosenWord[i]) {
    //    (numGuesses + 1); 
    //   //  incorrectGuess.innerHTML = "1";
    }
   }
  }// else incorrect -> numguesses ++ -> update guessdisplay

// function alerts() {
//   incorrectGuess.innerHTML = "Incorrect Guesses" + 1
//   if (letter !== chosenWord[i])
// }


// function handleClick(evt) {
// letter = typedLetter.value.toLowerCase();
// // letterGuess(letter);
// checkLetter()
// // console.log(letter)
// }

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
      chosenWordArr[i] = letter;
    }
  }
}


 //* Send to holdList if letter has been gussed already
 function letterGuess() {
  typedLetter.value = "";
if (holdList.includes(letter)) {
  alert("Try another letter.");
  holdList.push(letter);}
  else alert("Awesome. Guess another letter!")
  console.log(holdList)
}

//* Update the word display or show win alert
function win() {
let guessUpdate = "";
let allGuesses = true;
for (let i = 0; i < chosenWord.length; i++) {
  if (holdList.includes(chosenWord[i])) {
    guessUpdate += chosenWord[i] + " ";
  } else {
    guessUpdate += "_";
    allGuesses = false; 
  }

if (allGuesses) { 
  alert("Namaste.");}
  console.log(allGuesses)
}
}

/*--------------* need help here-----------*/
// function guessCount() {
// numGuesses = document.querySelector('#igcount').innerText;
// if (numGuesses >= 6 == true); (numGuesses + 1);
// // console.log(numGuesses)
//         (typedLetter !== chosenWord); 
//         (numGuesses -1);

//     chosenWord = displayWord
//     if (numGuesses = 6); 
//     alert ("The word was:" (chosenWord))
//   }

//  (console.log(document.querySelector('#igcount').innerHTML));


////// revisit this function ///////
// function win() {
//   let allGuesses = chosenWordArr.every((letter) => holdList.includes(letter));
//   if (allGuesses) {
//     alert ("Namaste. You successfully guessed the word.")
//   }
// }

function win(){
  winAlert = document.getElementById("winAlert")
  if (chosenWordArr.every((letter)) === chosenWord); {
    showAlert(winAlert.innerHTML) = "Namaste. You successfully guessed the word."
  }
}


// function generateAnswerDisplay(chosenWord)
// answerDisplay.innerHTML = generateAnswerDisplay(chosenWord);
