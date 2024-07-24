const{Router} = require("express");
const{check} = require("express-validator");

const {mostrarGalaxia, buscarGalaxiaNombre, crearGalaxia, actualizarGalaxia, eliminarGalaxia}= require("../../controllers/galaxia/galaxia.controller.js")

const galaxiaRouter = Router();
galaxiaRouter.get("/readAll", [], mostrarGalaxia);
galaxiaRouter.get("/search/:nombre", [], buscarGalaxiaNombre);
galaxiaRouter.post("/create", [], crearGalaxia);
galaxiaRouter.put("/update/:id", [], actualizarGalaxia);
galaxiaRouter.delete("/delete/:id", [], eliminarGalaxia);

module.exports = galaxiaRouter;