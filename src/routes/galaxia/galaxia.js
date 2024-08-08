const{Router} = require("express");
const{check} = require("express-validator");

const {mostrarGalaxias, mostrarGalaxiasConPlanetas, buscarGalaxiaNombre, crearGalaxia, actualizarGalaxia, eliminarGalaxia}= require("../../controllers/galaxia/galaxia.controller.js")

const galaxiaRouter = Router();
galaxiaRouter.get("/readAll", [], mostrarGalaxias);
galaxiaRouter.get("/ListarGalaxias", [], mostrarGalaxiasConPlanetas)
galaxiaRouter.get("/search/:nombre", [], buscarGalaxiaNombre);
galaxiaRouter.post("/create", [], crearGalaxia);
galaxiaRouter.put("/update/:id", [], actualizarGalaxia);
galaxiaRouter.delete("/delete/:id", [], eliminarGalaxia);

module.exports = galaxiaRouter;