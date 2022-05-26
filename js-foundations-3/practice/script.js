'use strict';

//Inputs

const inputFirstNumber = document.getElementById('inputFirstNumber');

const inputSecondNumber = document.getElementById('inputSecondNumber');

const inputString = document.getElementById('inputString');

//Buttons

const sumButton = document.getElementById('sumButton');

const multiplyButton = document.getElementById('multiplyButton');

const capitalizeFirstLetterButton = document.getElementById('capitalizeButton');

const lastLetterButton = document.getElementById('lastLetterButton');

//Result

const pResult = document.getElementById('pResult');

//Functions and events

const printResult = result => {
    pResult.textContent = result;
};

sumButton.addEventListener('click', () => {
    const result = (+inputFirstNumber.value) + 7;
    printResult(`The sum of ${inputFirstNumber.value} + 7 is: ${result}`);
});

multiplyButton.addEventListener('click', () => {
    const result = (+inputFirstNumber.value) * (+inputSecondNumber.value);
    printResult(`The multiplication of ${inputFirstNumber.value} with ${inputSecondNumber.value} is: ${result}`);
});

capitalizeFirstLetterButton.addEventListener('click', function() {
    const lowerCaseWord = (inputString.value).toLowerCase();
    const result = lowerCaseWord.replace(lowerCaseWord[0],lowerCaseWord[0].toUpperCase());
    printResult(`The word ${inputString.value} with only the first letter capitalized is: ${result}`);
});

lastLetterButton.addEventListener('click', function() {
    const completeWord = inputString.value;
    const lastLetter = completeWord[(completeWord.length - 1)];
    printResult(`The last letter in the word ${completeWord} is: ${lastLetter}`);
});