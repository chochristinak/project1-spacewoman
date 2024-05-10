window.onload = function () {
  document.getElementById("insert-letter").focus();
};

const HINTS = [
  "energy centers of the body",
  "opening of the third eye",
  "a state of deep immersion and focus",
  "bend so you dont break",
  "tranquil",
  "the deep blue abyss",
  "mother nature",
  "a creative style of yoga that connects breath and movement",
  "dark and feminine principle of the universe",
  "spore-bearing fruit, some might call breakthrough medicine",
];

const WORDS = [
  "chakra",
  "enlightenment",
  "flow",
  "stretch",
  "calm",
  "ocean",
  "earth",
  "vinyasa",
  "yin",
  "psilocybin",
];
let randWordIdx = Math.floor(Math.random() * WORDS.length);
let chosenWord = WORDS[randWordIdx];
let displayHint = HINTS[randWordIdx];
document.querySelector(".hint").innerHTML = "Hint: " + displayHint;

let holdList = [];
let numGuesses = chosenWord.length + 1;
let maxGuesses = chosenWord.length + 1;
let incorrectGuesses = 0;
let typedLetter = document.getElementById("insert-letter");
// let displayWord = document.getElementById("displayWord");
let placeHolder = document.getElementById("placeholders");
let guessesLeft = document.getElementById("guesscount");
let tryLetterButton = document.getElementById("try");
let winAlert = document.getElementById("winAlert");
let chosenWordArr = new Array(chosenWord.length).fill("_");
let messageEl = document.querySelector("h3");
let letter;
let image = new Image();
image.src =
  "https://totemsurftribe.files.wordpress.com/2024/02/img_1983-2.jpg?resize=438%2C438";
let canvas = document.getElementById("spacewoman");
let ctx = canvas.getContext("2d");

tryLetterButton.addEventListener("click", updateDisplay);
typedLetter.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    updateDisplay();
  }
});

updateDisplay();

function displayWordWithUnderscores() {
  let displayString = chosenWordArr.join(" ");
  placeHolder.innerText = displayString;
}

function checkLetter() {
  let letter = typedLetter.value.toLowerCase();
  holdList.push(letter);
  let letterFound = false;
  for (let i = 0; i < chosenWord.length; i++) {
    if (letter === chosenWord[i]) {
      chosenWordArr[i] = letter;
      letterFound = true;
    }
  }
  if (!letterFound && holdList.lastIndexOf(letter) === holdList.length - 1) {
    if (numGuesses > 0) {
      incorrectGuesses++;
      numGuesses--;
    }
  }
}

function drawImage() {
  let opacity = 1 - incorrectGuesses / maxGuesses;
  canvas.style.opacity = opacity < 0 ? 0 : opacity;
}

function updateDisplay() {
  checkLetter();
  typedLetter.value = "";
  displayWordWithUnderscores();
  drawImage();
  typedLetter.focus();
  guessesLeft.innerText = `Guesses left: ${numGuesses}`;
  if (numGuesses === 0) {
    messageEl.innerText =
      "Oh no, looks like we're still on planet Earth... \n and SPACEWOMAN has gone up \n\n The word was: ";
    const wordElement = document.createElement("span");
    wordElement.textContent = `${chosenWord.toUpperCase()}`;
    wordElement.style.fontSize = "30px";
    wordElement.style.fontWeight = "600";
    messageEl.appendChild(wordElement);
    canvas.style.opacity = 1;
    canvas.style.backgroundImage =
      "url(https://totemsurftribe.files.wordpress.com/2024/03/clipart-psilocybe-mushroom-psychedelic-art-acid-art-ai-generated-image_894117-1385-1.jpg)";
    canvas.style.backgroundSize = "cover";
    tryLetterButton.style.display = "none";
    onLoss();
    return;
  }
  win();
}

function onLoss() {
  document.body.style.backgroundColor = "white";
  document.getElementById("try").style.display = "none";
  const resetButton = document.getElementById("reset");
  resetButton.disabled = false;
  resetButton.classList.add("rainbow-gradient");
}

function win() {
  if (chosenWordArr.join("") === chosenWord) {
    winAlert.innerText = "NAMASTE. You successfully guessed the word.";
    document.body.style.backgroundColor = "black";
    canvas.style.backgroundImage = "url(https://totemsurftribe.files.wordpress.com/2024/02/img_1981.jpg)";
    canvas.style.backgroundSize = "cover";
    typedLetter.disabled = true;
    const resetButton = document.getElementById("reset");
    resetButton.disabled = false;
    resetButton.classList.add("rainbow-gradient");
    resetButton.style.display = "center"; 
    drawImage();
    const allTextElements = document.querySelectorAll("body *");
    allTextElements.forEach(element => {
      element.style.color = "white";
    });
  }
}
  