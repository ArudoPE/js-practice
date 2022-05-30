const userNumber = +(prompt("Please, enter the number you'd like to FizzBuzz up to:"));
//console.log(typeof(answer));

const fizzBuzz = userNumber => {
    for(let i = 1; i <= userNumber; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz(userNumber);
