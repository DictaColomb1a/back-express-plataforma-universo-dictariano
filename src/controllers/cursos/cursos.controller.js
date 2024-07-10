const Cursos = require("../../models/cursos/cursos.model")

const mostrarCurso =  async (req, res)=>{//aprobado
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

const crearCurso =  async (req, res)=>{//aprobado
    const id = req.uid;
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

module.exports = {
    mostrarCurso, crearCurso
}