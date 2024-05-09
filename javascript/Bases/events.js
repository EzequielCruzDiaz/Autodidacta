function cambiardecolor (){
var bg = boton.style.background;

if (bg == "green") {
    boton.style.background = "red";
}else {
    boton.style.background = "green";
}

    return true;
}

var boton = document.querySelector("#boton")

boton.addEventListener("click", function() {
    cambiardecolor();
})

