"use strict";
function numero_romano(numero) {
    if (numero <= 0 || numero > 3999) {
        return " El numero introducido es esta fuera del rango permitido";
    }
    const valor = [1000, 900, 600, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romanos = ['M', 'CM', 'DC', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let resultado = "";
    for (let i = 0; i < valor.length; i++) {
        while (numero >= valor[i]) {
            resultado += romanos[i];
            numero -= valor[i];
        }
    }
    return resultado;
}
let numero = prompt("Introduzca un numero deseado");
console.log(`El número introducido en números romanos es: ${numero_romano(numero)}`);
