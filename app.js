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

    if (number === 1 || number === -1) {
        guessesLeft--; // guessesLeft = guessesLeft - 1;
        displayNumberOfGuessesLeft.textContent = guessesLeft;
    } else if (number === 0) {
        alert('You Win!');
        submitButton.disabled = true;
    } 
    
    if (guessesLeft <= 0) {
        alert('You Lose!');
        submitButton.disabled = true;
    } 




    


console.log(number)
console.log(randomNumber);
});