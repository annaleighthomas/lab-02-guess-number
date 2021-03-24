// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

import { compareNumbers } from './utils.js';


const submitButton = document.getElementById('submit-guess');
const playersGuess = document.getElementById('players-guess');
const textDisplay = document.getElementById('text-display');
const displayNumberOfGuessesLeft = document.getElementById('display-guesses-left')


let guessesLeft = 4;
let randomNumber = Math.ceil(Math.random()*20);



submitButton.addEventListener('click', () => {

    let number = compareNumbers(playersGuess.valueAsNumber, randomNumber);

    if (number === 1) {
        textDisplay.textContent = 'Too High!';
    } else if (number === -1) {
        textDisplay.textContent = 'Too Low!';        
    } else {
        textDisplay.textContent = 'Nice!';
    }

    if (number === 1) {
        guessesLeft--;
     }

    




console.log(number)
    
console.log(randomNumber);
    

    


    //  // 2. compare guessed number to actual number
    //     - is guess too low too high or correct?
    //  // 3. display message
    //  // 4. decrement tries remaining
    //  // 5. no tries remaining 
    //      - display message
    //      - display lose message text.Content
    //      - disable game play
    //  // 6. correct guess?
    //      - display win message text.Content 
    //      - disable game play




});