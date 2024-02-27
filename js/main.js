
  //Show random hint that correlates with mystery word
let HINTS = ["energy centers of the body","opening of the third eye","a state of deep immersion and focus","bend so you dont break","tranquility","the deep blue abyss"];
let randIdx = Math.floor(Math.random() * HINTS.length);
let displayHint = HINTS[randIdx];
document.querySelector('.hint').innerHTML = "Hint: " + HINTS[randIdx]


let WORDS = ["shakra", "enlightenment", "flow", "stretch", "calm", "ocean"] // array of words
let chosenWord = WORDS[randIdx] 
let chosenHint = HINTS[randIdx]
console.log(WORDS[randIdx])
console.log(HINTS[randIdx])


/*------state variables------*/
let holdList = []; // for letters already guessed
var typedLetter = document.getElementById("insert-letter") // typedletter is player's guess
var playField = document.getElementById("displayWord") // reveal word if guessed correctly
var placeHolder = document.getElementById("placeholders") // guessing area
var inCorrectGuess = document.querySelector('#igcount') // incorrect guesses
let numGuesses = 6;  // incorrect guess counter
var typeNewLetter = document.getElementById("typeNewLetter")
let tryLetterButton = document.getElementById('try'); 
tryLetterButton.addEventListener ('click', handleClick); // make try button link add correct letter to playfield 
let answerString = "";
            // Ensure player typed in a letter *MAIN GAME LOOP*
for (let i = 0; i < (WORDS[randIdx]).length; i++) {
    answerString += "_";
    placeHolder.innerText = answerString}

function handleClick(evt) {
  // iterates throught the string to see if typedLetter is correct
let letter = typedLetter.value.toLowerCase();
letterGuess(letter);
}

       //trials for interating through answerString
// (WORDS[randIdx]).forEach(letterGuess); 
// if (chosenWord.includes(aswerString))
// answerString.join(placeHolder + letter);
// } else { inCorrectGuess +1);


// for (var j = 0; j < answerString.length; j++) {
//   if (answerString === (WORDS[randIdx])[j]) {
//     typedLetter[j] = answerString;
//     console.log(letter);
//     answerString = answerString.join(" ");
//     console.log(answerString.join(" "))
// }
// }


          // Check if player guessed the correct letter
function letterGuess(letter) {
  typedLetter.value = "";
if (holdList.includes(letter)) {
  alert("Please guess a different letter.");
  holdList.push(letter);} 

           // Update the word display after each guess (correct = true, incorrect = false)
let guessUpdate = "";
let allGuesses = true;
for (let i = 0; i < chosenWord.length; i++) {
  if (holdList.includes(chosenWord[i])) {
    guessUpdate += chosenWord[i] + " ";
  } else {
    guessUpdate += "_";
    allGuesses = false; 
  }
}
if (allGuesses) {
  alert("Congratulations! You guessed the word.");
}
}


// function generateAnswerDisplay(chosenWord)
// answerDisplay.innerHTML = generateAnswerDisplay(chosenWord);


// function inCorrectGuesses (inCorrectGuess) {
//  if ((chosenWord).indexOf(typedLetter) == -1 && 
//  (chosenWord).indexOf(typedLetter) == -1) 
//  push.typedLetter(holdList);
// } else  { (inCorrectGuess) + 1 );

// }// increase incorrect guess count if typedletter is not in chosenword

