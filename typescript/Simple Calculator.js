"use strict";
const input1 = prompt("Introduce a number");
if (input1 != null) {
    const number1 = parseFloat(input1);
    console.log("number1:", number1);
}
else {
    console.log("Introduzca un nuemero valido");
}
const input2 = prompt("introduce a number");
if (input2 != null) {
    const number2 = parseInt(input2);
    console.log("number2:", number2);
}
else {
    console.log("Introduzca un numero valido");
}
const calculadora = (number1, number2, op) => {
    if (!["divided", "rest", "add", "multiply"].includes(op)) {
        return console.log('the operation not defined');
    }
    if (op === "add")
        return number1 + number2;
    if (op === "rest")
        return number1 - number2;
    if (op === 'multiply')
        return number1 * number2;
    if (number2 === 0)
        return console.log("cant divided by 0 error");
    return number1 / number2;
};
console.log(calculadora(1, 2, 'multiply'));
