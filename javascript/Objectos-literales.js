let personajes = {
    nombre: "Peter Parker",
    CodeName: "Spiderman",
    edad: 23,
    vivo: true,
    Coordernadas: {
        lat: 34.034,
        lng: -118.70,
    },
    trajes: ["Simbiote", "Suit stark", "suit space"],
    direccion: {
        zipp: "10800, 90265",
        ubicacion: "Malibu, California"
    }
}

console.log(personajes["nombre"]);
console.log(personajes.Coordernadas.lat);
console.log(personajes.trajes.length);
console.log("ultimo traje:", personajes.trajes[personajes.trajes.length - 1]);

const x = "vivo";
console.log("vivo", personajes[x]);
console.log(personajes.direccion.ubicacion)

Object.freeze(personajes) // impedir que se agregen cambios.
personajes.direccion.ubicacion = "Republica Dominicana" //cambiar las propiedades de un array
console.log(personajes)

const propiedades = Object.getOwnPropertyNames(personajes); // ver los nombres de las propiedades
const valores = Object.values(personajes) // valores del array 
console.log({ propiedades, valores })

