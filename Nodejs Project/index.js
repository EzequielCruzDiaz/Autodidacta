
var mongoose = require("mongoose")
var app = require('./app')
var port = 3700;


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/')
        .then(() => {
            console.log("Conexion establecida")
            
            app.listen(port, () =>{ console.log(`Servidor iniciado, Puerto: ${port}`)})


        })
        .catch (err => console.log(err));

        