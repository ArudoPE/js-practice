let time = prompt("Enter time");

time = +time;

if (time < 10) {
    alert("Good morning!");
} else if (time < 20) {
    alert("Good day!");
} else {
    alert("Good evening!");
}