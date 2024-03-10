
// let juan = { nombre: "juan" };
// let ana = { ...juan };
// ana.nombre = "Ana"
// console.log({ juan, ana });


const frutas = ["manzana", "pera", "piña"];

console.time('spread');
const otrasFrutas1 = [...frutas];
console.time('spread');

console.time('slice'); //verificar rendimiento 
const otrasFrutas = frutas.slice(); // eliminar referencia
console.time('slice ');



otrasFrutas.push("mango")

console.table({ frutas, otrasFrutas });
