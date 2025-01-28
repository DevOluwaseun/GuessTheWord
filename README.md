# Word Scramble Game

A fun and interactive word scramble game that challenges users to guess a scrambled word by typing the correct letters into individual input fields. The game includes a limited number of tries and tracks mistakes, providing feedback to users in real time.

<img width="949" alt="guesstheword" src="https://github.com/user-attachments/assets/ab7ae7b3-310c-4b03-b825-b8333b0bfe28" />
---

## Features

- **Word Scrambling**: Random words are selected from a predefined list and scrambled for the user to guess.
- **Input Fields**: Each letter of the word is entered into a separate input field, which allows users to guess the correct letters.
- **Mistakes and Tries Counter**: Tracks the number of mistakes made and the tries used, with a maximum of 5 tries.
- **Dynamic UI**: The interface updates with each key press, and feedback is provided by changing the color of incorrect letters.
- **Game Reset**: The game can be reset using the "Reset" button, which clears all inputs and re-enables the first input field for the next round.
- **Success Notification**: When the word is guessed correctly, the game alerts the user with a success message.

---

## Installation

**1.** Clone the repository to your local machine:

**2.** Open the index.html file in your browser to play the game.

---

**Usage**
Start a New Game: Click the "Random" button to generate a new scrambled word for the user to solve.
Guess the Word: Type letters into the input fields. The correct letter will appear in the corresponding input box.
Mistakes and Tries: The game tracks your mistakes and tries. After 5 tries, the game will reset.
Game Reset: You can reset the game at any time by clicking the "Reset" button. All input fields will be cleared, and the first input field will be re-enabled for the next round.
Success: If you guess the word correctly, an alert will notify you of your success!

---
Code Overview
Main Components:
**HTML**: The structure of the game UI, including containers for the scrambled word, input fields, and buttons for starting and resetting the game.
**CSS**: Provides the styling for the game interface, including layout, colours, and animations for the game.
**JavaScript**: Manages the game logic, including word shuffling, input validation, tracking tries and mistakes, and updating the UI dynamically.
Handles user input and provides feedback based on correct/incorrect guesses.

---
*Functions*
**shuffleArray(array)**
  *Purpose*: Shuffles an array of elements randomly.
  *Parameters*:
      *array: The array to be shuffled.
  *Returns*: A new shuffled array.

**isAlphabet(input)**
  *Purpose: Checks if the given input is a valid alphabetic character.
  *Parameters:
      *input: The input string to check.
  *Returns: true if the input is alphabetic, false otherwise.
  
**reset()**
  *Purpose: Resets the game state, including the counter for tries, mistakes, and updates the UI elements accordingly.
  *Parameters: None
  *Returns: None

**scrambleWord()**
  *Purpose: Selects a random word from the list, splits it into characters, shuffles it, and updates the UI.
  *Parameters: None
  *Returns: None

**updateDots(counter)**
  *Purpose: Updates the tries section of the UI with a visual indicator of the number of tries taken (represented as dots).
  *Parameters:
  *counter: The number of tries taken.
  *Returns: None
  

Contact
For questions or feedback, feel free to open an issue or contact me directly at [DevOluwaseun@gmail.com].

License
This project is licensed under the MIT License - see the LICENSE file for details.


