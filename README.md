## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps

What ill need for app 

step 1 
- TDD in utils.text.js

step 2
- create function comparing the number guessed to the generated number
    // compareNumbers(guess, correctNumber) 
    //too low, too high, correct
    //import function to js 

step 3
-   make html doc of all elements needed for app

step 4
- pull DOM elements from html to js
    // make const using document.getElementById
    // console.log elements VALIDATE

step 5 
- make event handler for on 'click'
    // addEventListener('click', () => {

- what needs to happen in my event listener?

    // 1. computer needs to generate random number between 1-10
        Math.ceil(Math.random()*10);
    // 2. compare guessed number to actual number
       - is guess too low too high or correct?
    // 3. display message
    // 4. decrement tries remaining
    // 5. no tries remaining 
        - display message
        - display lose message text.Content
        - disable game play
    // 6. correct guess?
        - display win message text.Content 
        - disable game play


    });


    let is my state these are the things that are changing 

    let will be 
    - guesses left
    - random number




