//Importaciones de ejecución
require('dotenv').config();

//Importaciones de express
const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./src/db/config');

const app = express();
db(); // Conecta a la base de datos

app.use(cors());
app.use(express.json());

// Importar rutas
const cursoRouter = require('./src/routes/cursos/cursos.routes');
const galaxiaRouter = require('./src/routes/galaxia/galaxia');
const planetaRouter = require('./src/routes/planeta/planeta.routes');
const menuRouter = require('./src/routes/menu/menu.routes');

// Rutas estáticas
app.use('/', express.static(path.join(__dirname, 'public')));

// Rutas dinámicas
app.use('/cursos', cursoRouter);
app.use('/galaxia', galaxiaRouter);
app.use('/planeta', planetaRouter);
app.use('/menu', menuRouter);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server corriendo correctamente en el puerto ${PORT}`));