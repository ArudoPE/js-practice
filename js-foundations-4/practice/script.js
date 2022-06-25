'use strict';

const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

console.log(fruits.toString());

console.log(fruits.join(' * '));

fruits.pop();//removes the last element

//removes the last element and assign it to "fruit"
const fruit = fruits.pop();

fruits.push('Kiwi');

console.log(fruits.shift());

fruits.unshift('Lemon');

const myGirls = ['Sophie', 'Lux'];
const myBoys = ['Carl', 'Tobias', 'Matt'];

const myChildren = myGirls.concat(myBoys);


const countries = ['Peru', 'Argentina', 'Brazil'];

countries.splice(1,2,'Colombia');

const cats = ["Leopard", "Serval", "Jaguar", "Tiger",
"Caracal", "Lion"];

for(const cat of cats) {
    console.log(cat);
}

const toUpper = (string) => {
    return string.toUpperCase();
}

const myCats = ['Leopard', 'Serval', 'Jaguar', 'Tiger',
'Caracal', 'Lion'];

const upperCats = myCats.map(toUpper);

console.log(upperCats);