'use strict';

const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

fruits.push('Strawberry');

const fruitsLength = fruits.length;

const myFunction = (value) => {
    text += "<li>" + value + "</li>";
}

let text = '<ul>';

fruits.forEach(myFunction);

// for(let i = 0; i <fruitsLength; i++) {
//     text += "<li>" + fruits[i] + "</li>";
// }

text += "</ul>";

document.getElementById('example').innerHTML = text;


const user = {
    name: "Aldo",
    lastName: "Ortiz",
    age: 23
};
console.log(user);

const lCats = cat => {
    return cat.startsWith("L");
}

const cats = ["Leopard", "Serval", "Jaguar",
    "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCats);

console.log(filtered);


const isSquare = (number) => {
    if(number === 0) {
        return true;
    }
    if (number % (Math.sqrt(number)) === 0) {
        return true;
    } else {
        return false;
    }
}

const opposite = number => {
    if(number >= 0) {
        return (number - (number * 2));
    } else if(number < 0) {
        return (number + ((number * 2) * -1));
    }
}