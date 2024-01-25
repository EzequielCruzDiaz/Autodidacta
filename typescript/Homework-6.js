"use strict";
// Practica 6 - Convertidor de Nota a Calificación en Letras
const estudiante = prompt(" Introduzca el nombre del estudiante");
if (estudiante === null) {
    console.log(" Introduzca un nombre de usuario valido");
}
const nota = prompt("Ingrese la califacion Obtenida");
if (nota) {
    const califacion = parseInt(nota);
    if ((califacion >= 90 && califacion <= 100)) {
        console.log(`${estudiante} Tu califacion es ${nota} Obtuviste una A`);
    }
    else if ((califacion >= 80 && califacion <= 89)) {
        console.log(`${estudiante} Tu califacion es ${nota} Obtuviste una B`);
    }
    else if ((califacion >= 70 && califacion <= 79)) {
        console.log(`${estudiante} Tu califacion es ${nota} Obtuviste una C`);
    }
    else if ((califacion === 60)) {
        console.log(`${estudiante} Tu califacion es ${nota} Obtuviste una F`);
    }
    else {
        console.log("La nota no se encuentra dentro del rango establecido (60-100)");
    }
}
