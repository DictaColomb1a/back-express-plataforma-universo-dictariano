//Importaciones de ejecucion
require("dotenv").config();


//Importaciones de express
const express = require("express");
const cors = require("cors");


//Importando Swagger
//const swaggerUI = require("swagger-ui-express");
//const swaggerJSDoc = require("swagger-jsdoc");


//Importaciones de Coonexion
const db = require("./src/db/config");

//CONFIGURACIONES de variables de entorno
const app = express();
db()//al ser una funcion en config.js, entonces la llamamos como funcion


//Importacion de rutas

const path = require("path");


app.use(cors());
app.use(express.json());

//importar routes

const cursoRouter = require("./src/routes/cursos/cursos.routes");

//RUTAS ESTATICAS
app.use("/", express.static(__dirname + "/public"));



//RUTAS DINAMICAS#####################

app.use("/cursos", cursoRouter);



//SERVER

const PORT = process.env.PORT || 9000
app.listen(PORT, () =>console.log(`server corriendo correctamente en el puerto ${PORT}`))
