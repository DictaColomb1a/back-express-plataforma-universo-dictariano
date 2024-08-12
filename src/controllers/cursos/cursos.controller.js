const Cursos = require("../../models/cursos/cursos.model")

const mostrarCursos =  async (req, res)=>{
    try {
        const cursos = await Cursos.find().sort({createdAt: -1});

        return res.json(
            cursos
        );
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: "Curso no encontrado"
        });
    }
};
const buscarCursoNombre = async (req, res) => {
    const { nombre } = req.params;

    try {
        const cursos = await Cursos.findOne({ nombre });

        if (!cursos) {
            return res.status(404).json({
                ok: false,
                msg: "Curso no encontrado",
            });
        }

        return res.json(
            cursos
        );
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: "Error al buscar el curso ",
        });
    }
};

const mostrarCursosninos = async (req, res) => {
    try {
        const categoria = "ninos"; 
        const cursos = await Cursos.find({ categoria }).sort({ createdAt: -1 });

        return res.json(
            cursos
        );

        
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: "Cursos de colaboradores no encontrados",
        });
    }
};
const mostrarCursosjovenes = async (req, res) => {
    try {
        const categoria = "jovenes"; 
        const cursos = await Cursos.find({ categoria }).sort({ createdAt: -1 });

        return res.json(
            cursos
        );

        
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: "Cursos de colaboradores no encontrados",
        });
    }
};
const mostrarCursosadultos = async (req, res) => {
    try {
        const categoria = "adultos"; 
        const cursos = await Cursos.find({ categoria }).sort({ createdAt: -1 });

        return res.json(
            cursos
        );

        
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: "Cursos de colaboradores no encontrados",
        });
    }
};

const crearCurso =  async (req, res)=>{

    const {nombre, descripcion, fechaPublicacion, texturaplaneta, categoria, tipoCurso, idioma, estado, precio, miniatura } = req.body;

    
    try {
        let cursos = await Cursos.findOne({nombre});

        if (cursos) {
            return res.status(501).json({
                ok:false,
                msg:"Curso ya Registrado"
            });
        }
        
        const nuevoCurso = new Cursos({nombre, descripcion, fechaPublicacion, texturaplaneta, categoria, tipoCurso, idioma, estado, precio, miniatura});
        
        await nuevoCurso.save();

        
        res.status(200).json({
            ok:true,
            msg:"Curso Creado",
            nuevoCurso
        });


    } catch (error) {
        res.json({
            ok:false,
            msg:"Error al guardar curso"
        });
    }
};


const actualizarCurso =  async (req, res)=>{
    const {id} = req.params;
    const {nombre, descripcion, fechaPublicacion, texturaplaneta, categoria, tipoCurso, idioma, estado, precio, miniatura} = req.body;
    try {
        const cursos = await Cursos.findByIdAndUpdate(id, {nombre, descripcion, fechaPublicacion, texturaplaneta, categoria, tipoCurso, idioma, estado, precio, miniatura}, {new: true});
        return res.json({
            ok: true,
            msg:"curso actualizado",
            cursos
        });
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: "curso no actualizada"
        });
    }
};

const eliminarCurso =  async (req, res)=>{
    const {id} = req.params;

    try {
        const cursos = await Cursos.findByIdAndRemove(id);
        
        return res.json({
            ok: true,
            msg:"Curso eliminado",
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
    mostrarCursos, buscarCursoNombre, mostrarCursosninos, mostrarCursosjovenes, mostrarCursosadultos, crearCurso, actualizarCurso, eliminarCurso
}