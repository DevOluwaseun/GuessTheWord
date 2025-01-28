const scrambledContainer = document.querySelector(".scrambled_word_container");
const wordsContainer = document.querySelector(".words-container");
const tries = document.querySelector(".tries");
const mistakes = document.querySelector(".mistakes");
const randomBtn = document.querySelector(".random");
const resetBtn = document.querySelector(".reset");

const words = [
  "pencil",
  "computer",
  "elephant",
  "mountain",
  "guitar",
  "umbrella",
  "coffee",
  "basketball",
  "friend",
  "sunglasses",
  "turtle",
  "rocket",
  "horizon",
  "birthday",
  "dolphin",
  "waterfall",
  "piano",
  "dinosaur",
  "sunflower",
  "chocolate",
];

let counter = 0;
let mistakesArr = [];

function shuffleArray(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function isAlphabet(input) {
  return /^[a-zA-Z]+$/.test(input);
}

function resetGame() {
  counter = 0;
  mistakesArr = [];
  mistakes.textContent = `Mistakes: ${mistakesArr.join(",")}`;
  tries.textContent = `Tries(${counter}/5):`;
  updateDots(counter);
}

function createInputs(randomWord) {
  const splitsWord = randomWord.split("");
  wordsContainer.innerHTML = splitsWord
    .map(
      (curr, index) =>
        `<input disabled type="text" maxlength="1" id="${index}">`
    )
    .join("");
  scrambledContainer.textContent = shuffleArray(splitsWord).join(" ");
}

function handleKeyUpEvent(input, randomWord, inputs) {
  return function (e) {
    e.preventDefault();
    let previousValue = input.getAttribute("data-previous-value");

    if (previousValue !== input.value && isAlphabet(input.value)) {
      input.setAttribute("data-previous-value", input.value);
      if (
        randomWord.split("")[parseInt(input.id)] !== input.value &&
        counter < 5
      ) {
        counter++;
        mistakesArr.push(input.value);
        input.style.color = "yellow";
        updateTries();
      }
    }

    if (
      randomWord.split("")[parseInt(input.id)] === input.value &&
      input.value.length === input.maxLength
    ) {
      input.style.color = "#f2f5f9";
      if (parseInt(input.id) + 1 < inputs.length) {
        inputs[parseInt(input.id) + 1].removeAttribute("disabled");
        inputs[parseInt(input.id) + 1].focus();
      }
    }

    if (parseInt(input.id) + 1 === inputs.length) {
      alert("🎉 Success");
      resetGame();
      scrambleWord();
    }
    if (counter >= 5) {
      setTimeout(() => {
        resetGame();
        scrambleWord();
      }, 500);
    }
  };
}

function updateDots(counter) {
  tries.innerHTML = `<p class="tries-counter">Tries (${counter}/5): </p>`;
  for (let i = 1; i <= 5; i++) {
    const dotElement = document.createElement("span");
    dotElement.classList.add("dot");
    dotElement.style.backgroundColor = i <= counter ? "#7429C6" : "grey";
    tries.appendChild(dotElement);
  }
}

function updateTries() {
  tries.textContent = `Tries(${counter}/5):`;
  updateDots(counter);
  mistakes.textContent = `Mistakes: ${mistakesArr.join(",")}`;
}

function scrambleWord() {
  const randomWord = words[Math.floor(Math.random() * words.length)];
  createInputs(randomWord);

  resetGame();

  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.addEventListener(
      "keyup",
      handleKeyUpEvent(input, randomWord, inputs)
    );
  });

  inputs[0].removeAttribute("disabled");
  inputs[0].focus();
}

randomBtn.addEventListener("click", function (e) {
  e.preventDefault();
  resetGame();
  scrambleWord();
});

resetBtn.addEventListener("click", function (e) {
  e.preventDefault();
  resetGame();
  const inputElements = document.querySelectorAll("input");
  inputElements.forEach((input) => {
    input.value = "";
    input.setAttribute("disabled", true);
  });

  inputElements[0].removeAttribute("disabled");
  inputElements[0].focus();
});

scrambleWord();
