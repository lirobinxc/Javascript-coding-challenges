// Run in Chrome console

var a = prompt("1st number: ");
var b = prompt("2nd number: ");
var c = prompt("+, -, /, *: ");
var sum = Number(a) + Number(b);
var subtract = Number(a) - Number(b);
var multiply = Number(a) * Number(b);
var divide = Number(a) / Number(b);

if (String(c) == "+") {
    sum;
}

else if (String(c) == "-") {
    subtract;
}

else if (String(c) == "*") {
    multiply;
}

else if (String(c) == "/") {
    divide;
}

else {
    console.log("Error!");
}