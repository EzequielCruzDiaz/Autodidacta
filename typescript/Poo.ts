var bicicleta = {
    nombre:"RMX",
    Color: "Negro",
    Marca: "Toyota",
    Frenos: "Disco",
    Velocidadmaxima : 102,
    
    cambiarcolor: function(nuevo_color:string){
        this.Color = nuevo_color;
        console.log(this.Color)
    }
    
};  


bicicleta.cambiarcolor("azul")
