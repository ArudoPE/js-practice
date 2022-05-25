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

//const textBox = document.getElementById('textBox');

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

//(javascript.info functions lesson)

//task 2 with ternary
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}
checkAge(+prompt('Enter your age:'));

// task 2 with ||
function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}
checkAge(+prompt('Enter your age:'));

//task 3, return the min of two numbers

const minNumber = (a, b) => {
    if (a > b || a === b) {
        return b;
    } else if (a < b) {
        return a;
    }
}

console.log(minNumber(2, 5));
console.log(minNumber(3, -1));
console.log(minNumber(1, 1));

//task 4, return the x in power of n

const showResult = (result) => {
    alert(`The result is: ${result}`);
}

const checkNaturalInteger = (n) => {
    if (n >= 1 && typeof (n) === 'number') {
        return true;
    } else {
        return false;
    }
}

const pow = () => {
    let x = +prompt("Enter the base number:");
    const n = +prompt("Enter the exponent number");
    if (checkNaturalInteger(n)) {
        const value = x;
        for (let i = 1; i < n; i++) {
            x *= value;
        }
        showResult(x);
    } else {
        alert(`"${n}" is not a valid number (equal or more than 1)`);
    }
}
//arrow function
const sum = (a, b) => a + b;

//function expression
const division = function(a, b) {
    return a / b;
};


const textBox = document.getElementById('textBox');

textBox.addEventListener('keydown', event => {
    console.log(`You've pressed "${event.key}`);
});


//arrow function task 1!

const confirm = question => {
    const answer = prompt(question);
    if(answer === "yes") return true;
    else if (answer === "no") return false;
};

const ask = (question, yes, no) => {
    if(confirm(question)) yes();
    else no();
};

ask(
    "Do you agree?",
    () => { alert("You agreed."); },
    () => { alert("You canceled the execution."); }
);





