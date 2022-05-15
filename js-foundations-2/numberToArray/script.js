
function digitize(n) {
    let numberAsString = n.toString();
    let result = [];
    let arraySize = numberAsString.length;
    for (let i = 0; i < numberAsString.length ; i++) {
        result[i] = numberAsString.charAt(arraySize - 1);
        arraySize--;
    }
    return result;
}

const result = digitize(30);
console.log(result);