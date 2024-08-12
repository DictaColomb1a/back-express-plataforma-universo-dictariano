const Galaxia = require("../../models/galaxia/galaxia.model");


//Metodo para crear una galaxia
const crearGalaxia = async (req, res) => {
    const { name } = req.body;

    try {
        let galaxia = await Galaxia.findOne({ name: name });

        if (galaxia) {
            return res.status(501).json({
                ok: false,
                msg: "Galaxia ya Registrado"
            });
        }

        const nuevoGalaxia = new Galaxia(req.body);

        await nuevoGalaxia.save();

        res.status(200).json({
            ok: true,
            msg: "Galaxia Creado",
            nuevoGalaxia
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Error al guardar galaxia"
        });
    }
};




//Metodo para listar todas las galaxias
const mostrarGalaxias = async (req, res) => {
    try {
        const galaxiasExistentes = await Galaxia.find().sort({ createdAt: -1 });

        return res.json(
            galaxiasExistentes
        );
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: "galaxias no encontradas"
        });
    }
};

//Metodo para buscar una galaxia por su id
const buscarGalaxiaPorId = async (req, res) => {
    const { id } = req.params;

    try {
        const galaxia = await Galaxia.findById(id);

        if (!galaxia) {
            return res.status(404).json({
                ok: false,
                msg: "Galaxia no encontrada",
            });
        }

        return res.json(
            galaxia
        );
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: "Error al buscar la galaxia",
        });
    }
};




const actualizarGalaxia = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, fechaCreacion } = req.body;
    try {
        const galaxia = await Galaxia.findByIdAndUpdate(id, { nombre, descripcion, fechaCreacion }, { new: true });
        return res.json({
            ok: true,
            msg: "Galaxia actualizado",
            galaxia
        });
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: "Galaxia no actualizada"
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






const mostrarGalaxiasConPlanetas = async (req, res) => {
    try {
        const galaxias = await Galaxia.find().populate('planetas')

        if (!galaxias.length) {
            return res.status(404).json({
                ok: false,
                msg: "No se encontraron galaxias"
            });
        }

        return res.status(200).json({
            ok: true,
            galaxias
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: "Error al obtener las galaxias"
        });
    }
};








const eliminarGalaxia = async (req, res) => {
    const { id } = req.params;

    try {
        const cursos = await Galaxia.findByIdAndRemove(id);

        return res.json({
            ok: true,
            msg: "Galaxia eliminado",
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
    mostrarGalaxias, mostrarGalaxiasConPlanetas, buscarGalaxiaNombre, crearGalaxia, actualizarGalaxia, eliminarGalaxia,
    buscarGalaxiaPorId
}
