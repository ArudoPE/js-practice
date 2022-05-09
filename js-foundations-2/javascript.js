// let time = prompt("Enter time");

// time = +time;

// if (time < 10) {
//     alert("Good morning!");
// } else if (time < 20) {
//     alert("Good day!");
// } else {
//     alert("Good evening!");
// }

// let time = prompt("Enter time");

// time = +time;

// if (time < 10 || time > 20) {
//     alert("Sorry, the office is closed.");
// } else {
//     alert("The office is open :)");
// }

//exercise1
// let age = +prompt("Enter your age:");

// if(age >= 14 && age <= 90) {
//     alert("Your age is between 14 and 90.");
// }

//exercise2
// let age = +prompt("Enter your age:");

// if(!(age >= 14 && age <= 90)) {
//     alert("Your age is NOT between 14 and 90.");
// }

//Last: Check the login

let userName = prompt("Enter your username:");

if(userName === "Admin") {
    let inputPassword = prompt("Enter your Admin password:");
    if(inputPassword === "" || inputPassword === null) {
        alert("Cancelled!");
    } else if(inputPassword === "TheMaster") {
        alert("Welcome Master!");
    } else {
        alert("Wrong password!");
    }
} else {
    alert("Sorry, I don't know you.");
}
