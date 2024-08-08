const Planeta = require("../../models/planetas/planeta.model");
const Galaxia = require("../../models/galaxia/galaxia.model");

const mostrarPlanetas =  async (req, res)=>{
    try {
        const planetas = await Planeta.find().sort({createdAt: -1});

        return res.json(
            planetas
        );
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: "Planetas no encontrados"
        });
    }
};
const crearPlaneta =  async (req, res)=>{
    
    const {nombreplaneta, descripcionplaneta, fechaCreacionplaneta, estadoplaneta, texturaPlaneta, coordenadasPlaneta, galaxiaId } = req.body;



    try {
        //verificar si existe un planeta con el mismo nombre
        let planetaExistente = await Planeta.findOne({nombreplaneta});

        if (planetaExistente) {
            return res.status(501).json({
                ok:false,
                msg:"Planeta ya Registrado"
            });
        }

        const galaxiaExistente = await Galaxia.findById(galaxiaId);
        if(!galaxiaExistente){
            return res.status(404).json({
                ok:false,
                msg: "Galaxia no encontrada"
            })
        }

        const nuevoPlaneta = new Planeta({
            nombreplaneta, 
            descripcionplaneta, 
            fechaCreacionplaneta, 
            estadoplaneta, 
            texturaPlaneta, 
            coordenadasPlaneta, 
            galaxia : galaxiaId
        });
        await nuevoPlaneta.save();
        res.status(200).json({
            ok:true,
            msg:"Planeta Creado",
            nuevoPlaneta
        });
    } catch (error) {
        res.json({
            ok:false,
            msg:"Error al crear planeta"
        });
    }
};

module.exports = {
    mostrarPlanetas, crearPlaneta
}