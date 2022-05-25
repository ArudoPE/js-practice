//Inputs

const inputFirstNumber = document.getElementById('inputFirstNumber');

const inputSecondNumber = document.getElementById('inputSecondNumber');

const inputString = document.getElementById('inputString');

//Buttons

const sumButton = document.getElementById('sumButton');

const multiplyButton = document.getElementById('multiplyButton');

const capitalizeButton = document.getElementById('capitalizeButton');

const lastLetterButton = document.getElementById('lastLetterButton');

//Result

const pResult = document.getElementById('pResult');

//Functions and events

const printResult = result => {
    pResult.textContent = result;
};

const firstNumber = inputFirstNumber.value;

const secondNumber = inputSecondNumber.value;

const stringToWorkOn = inputString.value;

sumButton.addEventListener('click', () => {
    const result = firstNumber + 7;
    printResult(`The result of ${firstNumber} + 7 is: ${result}`);
});

multiplyButton.addEventListener('click', () => {
    const result = firstNumber * secondNumber;
    printResult(`The result of ${firstNumber} * ${secondNumber} is: ${result}`);
});

multiplyButton.addEventListener('click', function() {
    let stringToWorkOn = inputString.value;
    printResult(stringToWorkOn);
});





// Write a function called add7 that takes one number and returns that number + 7.
// Write a function called multiply that takes 2 numbers and returns their product.
// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
// Write a function called lastLetter that takes a string and returns the very last letter of that string:
// lastLetter("abcd") should return "d"
