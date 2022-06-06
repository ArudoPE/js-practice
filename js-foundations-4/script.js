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