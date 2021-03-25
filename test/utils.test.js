// IMPORT MODULES under test here:
import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('should take in a integer and return correct', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const guessNumber = 4;
    const correctNumber = 4;
    const expected = 0;
    const actualCorrect = compareNumbers(guessNumber, correctNumber);


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actualCorrect, expected);
});

test('should take in a integer and return too low', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const guessNumber = 6;
    const correctNumber = 9;
    const expected = -1;
    const actualCorrect = compareNumbers(guessNumber, correctNumber);


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actualCorrect, expected);
});

test('should take in a integer and return too high', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const guessNumber = 8;
    const correctNumber = 4;
    const expected = +1;
    const actualCorrect = compareNumbers(guessNumber, correctNumber);


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actualCorrect, expected);
});

