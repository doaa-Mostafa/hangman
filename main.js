// Letters
const letters = "abcdefghijklmnopqrstuvwxyz";

// Get Array From Letters
let lettersArray = Array.from(letters);

// Select Letters Container
let lettersContainer = document.querySelector(".letters");

// Generate Letters
lettersArray.forEach((letter) => {
  // Create Span
  let span = document.createElement("span");

  // Create Letter Text Node
  let theLetter = document.createTextNode(letter);

  // Append The Letter To Span
  span.appendChild(theLetter);

  // Add Class On Span
  span.className = "letter-box";

  // Append Span To The Letters Container
  lettersContainer.appendChild(span);
});

// Object Of Words + Categories
const words = {
  programming: [
    "php",
    "javascript",
    "go",
    "scala",
    "fortran",
    "r",
    "mysql",
    "python",
  ],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "Whiplash",
    "Memento",
    "Coco",
    "Up",
  ],
  people: [
    "Albert Einstein",
    "Hitchcock",
    "Alexander",
    "Cleopatra",
    "Mahatma Ghandi",
  ],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};

// Get Random Property

let allkeys = Object.keys(words);

// Random Number Depend on Keys Length
let randomPropNumber = Math.floor(Math.random() * allkeys.length);
// Category
let randomPropName = allkeys[randomPropNumber];
// Category Words
let randomPropValue = words[randomPropName];

// Random number Depend on Words
let randomValueNamber = Math.floor(Math.random() * randomPropValue.length);

// The Chosen Word
let randomValueValue = randomPropValue[randomValueNamber];
console.log(randomValueValue);

// Set Category Info
document.querySelector(".game-info .category span").innerHTML =
  randomPropName ;

// Select Letters Guess Element
let lettersGuessContainer = document.querySelector(".letter-guess");

// Convert chosen Word To Array
let lettersAndSpace = Array.from(randomValueValue);

// Create Spans Depend On Words
lettersAndSpace.forEach((letter) => {
  // Create Empty Span
  let emptySpan = document.createElement("span");

  // If Letter Is Space
  if (letter == " ") {
    // Add Class To THe Span
    emptySpan.className = "has-space";
  }

  // Append Spans To THe Letters Guess Container
  lettersGuessContainer.appendChild(emptySpan);
});
// Select Guess Spans
let guessSpans = document.querySelectorAll(".letter-guess span");

// Set Wrong Attempts
let wrongAttemps = 0;

// Select The Draw Element
let theDraw = document.querySelector(".hangman-draw");

// Handle Clicking On
document.addEventListener("click", (e) => {
  // Set The Choose Status
  let theStatus = false;

  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");

    // Get Clicked Letter
    let theClickedLetter = e.target.innerHTML.toLowerCase();

    // The Chosen Word
    let theChosenWord = Array.from(randomValueValue.toLowerCase());
    // console.log(lettersAndSpace)

    theChosenWord.forEach((wordLetter, WordIndex) => {
      // If The Cliced Letter Equal ONe Of THe Chosen Letter
      if (theClickedLetter == wordLetter) {
        // Set Status To Correct
        theStatus = true;
        // Loop On All Guess Spans
        guessSpans.forEach((span, spanIndex) => {
          if (WordIndex === spanIndex) {
            span.innerHTML = theClickedLetter;
          }
        });
      }
    });
    // Outside Loop
    // if letters Is Wrong
    if (theStatus !== true) {
      // Increase The Wrong Attemps
      wrongAttemps++;

      // Add Class Wrong On The Draw Element
      theDraw.classList.add(`wrong-${wrongAttemps}`);

      // Play Fail Sound
      document.getElementById("fail").play();
      if (wrongAttemps === 8) {
        endGame();
        lettersContainer.classList.add("finished");
      }
    } else {
      document.getElementById("success").play();
    }
  }
});

// End Game Function
function endGame() {
  // Create Ppupup Div
  let div = document.createElement("div");

  // Create Text
  let divText = document.createTextNode(
    `Game Over The Word Is ${randomValueValue}`
  );

  // Append Text TO div
  div.appendChild(divText);

  // Add Class On Div
  div.className = "popup";

  // Append To The Body
  document.body.appendChild(div);
}
