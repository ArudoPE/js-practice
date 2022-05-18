//NORMAL FUNCTION

// function logKey(event) {
//     console.log(`You've pressed "${event.key}".`);
// }

// const textBox = document.getElementById('textBox');

// textBox.addEventListener('keydown', logKey);

//ANONYMOUS FUNCTION

// const textBox = document.getElementById('textBox');

// textBox.addEventListener('keydown',
// function(event) {
//     console.log(`You've pressed "${event.key}".`);
// });

//ARROW FUNCTION

// const textBox = document.getElementById('textBox');

// textBox.addEventListener('keydown', (event) => {
//     console.log(`You've pressed "${event.key}".`);
// });

//ARROW FUNCTION WITHOUT BRACKETS AND CURLY BRACKET

// const textBox = document.getElementById('textBox');

// textBox.addEventListener('keydown', event =>
// console.log(`You've pressed "${event.key}".`));

//Example showing results in the web:

const textBox = document.getElementById('textBox');

const output = document.getElementById('output');

const cleanButton = document.getElementById('cleanButton');

textBox.addEventListener('keydown', event => {
    output.textContent = `You've pressed the "${event.key}" key.`;
});

//I added a function to clean the input and the result :3
cleanButton.addEventListener('click', event => {
    textBox.value = '';
    output.textContent = '';
}
);




