
window.onload = function () {
  

// Display word to guess
let displayWord = ""; 
for (let i = 0; i < selectedWord.length; i++) { 
    displayWord += "_ "; 
} 
document.getElementById("displayword").textContent = displayWord;   
  
  // Create array
  const words = ["shakra", "enlightenment", "flow", "stretch", "calm", "ocean", "wave", "sea", "water", "love", "compassion", "energy", "vitality", "strength", "discipline", "care", "vision", "goal", "determination", "float", "vibration", "earth", "fire"]

   // Random word from array
   var word = words[Math.floor(Math.random * words.length)];

   // Show character count using underscores
   var answerArray = [];
   for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
   }

   // Create variable for character count
   var remainingLetters = word.length;

   // Game loop
   // while any letters are left unguessed

   while (remainingLetters > 0) {
    // Inform player's progress
    alert(answerArray.join(" "));

      // Prompt player guess
      var guessLetter = prompt("Guess a letter, or click Reset for New Game")

     // No guess
     if (guessLetter == null) {
       break;

       // Player guess one or more letters
     } else if (guessLetter.length !== 1) {
      alert("Click a letter.");
     } else { 
      // Update with game with player guess
      for (var j = 0; j < word.length; j++) {
             // Correct guess
             // At the correct index
           if (word[j] === guessLetter)
             // Update answer array with correct letter at index
            answerArray[j] = guessLetter;
             // Subtract from remaining letters
             remainingLetters--;
       }
      }
     }
     // *****End Game Loop******



    // Display word
    alert(answerArray.join(" "));
    alert("You guessed correctly! The answer was " + word);
} 



