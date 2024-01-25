"use strict";
//Practica 7 - Función para convertir un string separado a Title Case
let titlecase = (palabra) => {
    let convertir = palabra[0].toUpperCase();
    for (let i = 1; i < palabra.length; i++) {
        convertir += palabra[i].toLowerCase();
        return convertir;
    }
};
console.log("yo quiero un tacobell");
