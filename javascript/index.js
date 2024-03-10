//variables
let firstname = "junior";
let age = 30;
let isAproved = true;

//console.log(typeof (firstname))
//console.log(typeof (age))
//console.log(typeof (isAproved))


//objeto
let person = {
    firstname: "junior",
    age: 30,
    isAproved: true
}
//console.log(person.firstname)

//dot notation
person.firstname = "Ezequiel"

// bracket notation
person["firstname"] = "lulo"



//ejercicio de arrays
let arreglocosas = [
    true,
    123,
    "Eze",
    1 + 2,
    function () { },
    () => { },
    { a: 1 },
    ["X", "Megaman", "Zero", "Dr.light"]

]
//console.log(arreglocosas[7][3]) buscar un elemento de un array , dentro de otro array.

//console.log(arreglocosas[7].length) ver la cantidad de elemento

let juegos = ["Zelda", "Mario", "Metroid", "Chrono", "God of war", "spiderman"];

let primero = juegos[2 - 2] // esta parte varia, pero es una manera de ver el primero elemento.

let ultimo = juegos[juegos.length - 1] // ver el ultimo elemento de un array.

juegos.forEach((elemento, indice, arr) => {
    console.log(indice, elemento)
});

let nuevojuego = juegos.push("Gran Turismo") // agregar un nuevo elemento en un array
console.log({ nuevojuego, juegos })

nuevojuego = juegos.unshift("Uncharted4") // agregar un elemento al inicio
console.log({ nuevojuego, juegos })

juegoborrado = juegos.pop(); // borrar el ultimo elemento del array
console.log({ juegoborrado, juegos })

juegosborrados = juegos.splice(1, 2) //borrar especificamente un elemento
console.log({ juegosborrados, juegos })

let SearchGame = juegos.indexOf("God of war") // cnocer la posicion exacta de un elemento
console.log({ SearchGame })



