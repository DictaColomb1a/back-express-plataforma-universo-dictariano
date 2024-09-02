const{Router} = require("express");
const{check} = require("express-validator");

const {mostrarGalaxias,buscarGalaxiaPorId, mostrarGalaxiasConPlanetas, buscarGalaxiaNombre, crearGalaxia, actualizarGalaxia, eliminarGalaxia}= require("../../controllers/galaxia/galaxia.controller.js")

const galaxiaRouter = Router();
galaxiaRouter.post("/create", [], crearGalaxia);
galaxiaRouter.get("/readAll", [], mostrarGalaxias);
galaxiaRouter.get("/oneGalaxia/:id", [], buscarGalaxiaPorId);



galaxiaRouter.get("/ListarGalaxias", [], mostrarGalaxiasConPlanetas)
galaxiaRouter.get("/search/:nombre", [], buscarGalaxiaNombre);
galaxiaRouter.put("/update/:id", [], actualizarGalaxia);
galaxiaRouter.delete("/delete/:id", [], eliminarGalaxia);

module.exports = galaxiaRouter;