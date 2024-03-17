const dia = 3;
const horactual = 11;


let horaApertura;
let mensaje;

// if (dia === 0 || dia === 6) {
//     console.log("Fin de semana");
//     horaApertura = 9;
// } else {
//     console.log("Dia de semana");
//     horaApertura = 11;
// }

// if (horactual >= horaApertura) {
//     mensaje = "Esta abierto"

// } else {
//     mensaje = `Esta cerrado, hoy abrimos ${horaApertura}`;
// }

horaApertura = ([0, 6].includes(dia)) ? 9 : 11;
mensaje = ([horactual >= horaApertura]) ? "esta abierto" : `esta cerrado hora de apertura : ${horaApertura} `;

console.log({ horaApertura, mensaje });