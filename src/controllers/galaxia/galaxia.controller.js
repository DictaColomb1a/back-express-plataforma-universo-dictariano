const Galaxia = require("../../models/galaxia/galaxia.model")

const mostrarGalaxia =  async (req, res)=>{
    try {
        const cursos = await Galaxia.find().sort({createdAt: -1});

        return res.json(
            cursos
        );
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: "Galaxia no encontrado"
        });
    }
};
const buscarGalaxiaNombre = async (req, res) => {
    const { nombre } = req.params;

    try {
        const galaxia = await Galaxia.findOne({ nombre });

        if (!galaxia) {
            return res.status(404).json({
                ok: false,
                msg: "Galaxia no encontrado",
            });
        }

        return res.json(
            galaxia
        );
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: "Error al buscar el galaxia ",
        });
    }
};


const crearGalaxia =  async (req, res)=>{
    const id = req.uid;
    const {nombre, descripcion, fechaCreacion } = req.body;

    try {
        let galaxia = await Galaxia.findOne({nombre});

        if (galaxia) {
            return res.status(501).json({
                ok:false,
                msg:"Galaxia ya Registrado"
            });
        }

        const nuevoGalaxia = new Galaxia({nombre, descripcion, fechaCreacion});
        await nuevoGalaxia.save();
        res.status(200).json({
            ok:true,
            msg:"Galaxia Creado",
            nuevoGalaxia
        });
    } catch (error) {
        res.json({
            ok:false,
            msg:"Error al guardar galaxia"
        });
    }
};
const actualizarGalaxia =  async (req, res)=>{
    const {id} = req.params;
    const {nombre, descripcion, fechaCreacion} = req.body;
    try {
        const galaxia = await Galaxia.findByIdAndUpdate(id, {nombre, descripcion, fechaCreacion}, {new: true});
        return res.json({
            ok: true,
            msg:"Galaxia actualizado",
            galaxia
        });
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: "Galaxia no actualizada"
        });
    }
};

const eliminarGalaxia =  async (req, res)=>{
    const {id} = req.params;

    try {
        const cursos = await Galaxia.findByIdAndRemove(id);
        
        return res.json({
            ok: true,
            msg:"Galaxia eliminado",
            cursos
        });
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: "Error al eliminar"
        });
    }
};

module.exports = {
    mostrarGalaxia, buscarGalaxiaNombre, crearGalaxia, actualizarGalaxia, eliminarGalaxia
}