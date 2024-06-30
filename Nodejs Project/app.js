
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// Cargar los archivos de rutas


//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//CORS



//Rutas
app.get('/', (req,res) => {
    res.status(200).send(
        "<h2>Pagina de inicio<h2>"
    )
})

app.post('/test',(req,res)=> {
    res.status(200).send(
         "Hola Developer, volvimos a praticar sobre RestApi"
    )
})



//Exportar modulos
module.exports = app;

