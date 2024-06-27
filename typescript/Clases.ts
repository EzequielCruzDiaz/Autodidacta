//L clase es el molde un objecto en el cual se definen sus caracteristicias y propiedades
// Un objeto es una instancia de una clase, la cual representa un objeto del mundo real.

import { error } from "console";


class camiseta { // Molde del objeto
    public color:string;
    public modelo:string;
    public marca:string; // propiedades
    public talla:string;
    public precio:number;



    constructor(color:string,modelo:string,marca:string,talla:string,precio:number) {
        
        if (!color||!modelo||!marca||!talla|| precio <= 0) {
            throw  error 
            ("Invalid parameter providad ")
        }
                                                                                            //constructor
                                                                                            //throw new manejar errores
        this.color = color;
        this.modelo = modelo;
        this.precio = precio;
        this.marca = marca
        this.talla = talla;

    }
}

try {
var camisa = new camiseta("negro","Mangas cortas","Apolo","M",120) //objecto
var playera = new camiseta("Blanco","Desmangado","polo","S",15)

console.log("Camisa:", camisa,)
console.log("Playera:", playera)
                                        // try/catch to handle  error
} catch {
    console.error(error)
}
