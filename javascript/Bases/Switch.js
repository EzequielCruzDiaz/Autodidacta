let diasemana = 3;
let nombreDia;

switch (diasemana) {
    case 1:
        nombreDia = "lunes";
        break;
    case 2:
        nombreDia = "martes";
        break;
    case 3:
        nombreDia = "miercoles";
        break;
    default:
        nombreDia = "Dia no valido";
}


console.log(`Hoy es ${nombreDia}`);