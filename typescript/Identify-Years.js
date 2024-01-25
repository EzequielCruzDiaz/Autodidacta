"use strict";
function year_bisiesto(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    else {
        return false;
    }
}
const input = prompt("Ingrese un año:");
if (input) {
    const year = parseInt(input);
    if (year_bisiesto(year)) {
        console.log(`${year} Es un año bisiesto.`);
    }
    else {
        console.log(`${year} "No es un año bisiesto`);
    }
}
else {
    console.log("Ingresa un año valido");
}
