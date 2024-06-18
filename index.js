//Importaciones de ejecucion
require("dotenv").config();


//Importaciones de express
const express = require("express");
const cors = require("cors");


//Importando Swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");


//Importaciones de Coonexion
const conexionDB = require("./db/config");

//CONFIGURACIONES de variables de entorno
const app = express();
conexionDB()//al ser una funcion en config.js, entonces la llamamos como funcion


//Importacion de rutas








const path = require("path");



app.use(cors());
app.use(express.json());



//RUTAS ESTATICAS
app.use("/", express.static(__dirname + "/public"));




//RUTAS DINAMICAS#####################





//SERVER
app.listen(process.env.PORT, () => {
    console.log("Aplicacion corriendo en el puerto "+process.env.PORT);
})