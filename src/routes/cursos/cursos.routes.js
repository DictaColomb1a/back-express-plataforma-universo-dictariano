const{Router} = require("express");
const{check} = require("express-validator");

const {mostrarCurso, crearCurso}= require("../../controllers/cursos/cursos.controller.js")

const cursoRouter = Router();
cursoRouter.get("/readAll", [], mostrarCurso);
cursoRouter.post("/create", [], crearCurso);

module.exports = cursoRouter;