const{Router} = require("express");
const{check} = require("express-validator");

const {mostrarCursos, buscarCursoNombre, mostrarCursosninos, mostrarCursosjovenes, mostrarCursosadultos, crearCurso, actualizarCurso, eliminarCurso}= require("../../controllers/cursos/cursos.controller.js")

const cursoRouter = Router();
cursoRouter.get("/readAll", [], mostrarCursos);
cursoRouter.get("/search/:nombre", [], buscarCursoNombre);
cursoRouter.get("/ninos", [], mostrarCursosninos);
cursoRouter.get("/jovenes", [], mostrarCursosjovenes);
cursoRouter.get("/adultos", [], mostrarCursosadultos);
cursoRouter.post("/create", [], crearCurso);
cursoRouter.put("/update/:id", [], actualizarCurso);
cursoRouter.delete("/delete/:id", [], eliminarCurso);

module.exports = cursoRouter;