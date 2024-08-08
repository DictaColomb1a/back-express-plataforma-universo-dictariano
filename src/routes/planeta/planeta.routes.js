const{Router} = require("express");

const{mostrarPlanetas, crearPlaneta}=require("../../controllers/planeta/planeta.controller");

const planetaRouter = Router();
planetaRouter.get("/readAll", [], mostrarPlanetas);
planetaRouter.post("/create", [], crearPlaneta);

module.exports = planetaRouter;