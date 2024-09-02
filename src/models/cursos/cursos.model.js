const { Schema, model } = require('mongoose')

const cursos = new Schema({
    nombreCurso: {
        type: String,
        required: true,
    },
    descripcionCurso: {
        type: String,
        required: true
    },
    fechaPublicacionCurso: {
        type: Date,
        required: true,
        trim: true
    },
    texturaplanetaCurso: {
        type: String,
        required: true,
        trim: true
    },
    categoriaCurso: {
        type: String,
        required: true,
        enum: ['ninos', 'jovenes', 'adultos'],
        trim: true
    },
    tipoCurso: {
        type: String,
        required: true,
        trim: true
    },
    idioma: {
        type: String,
        required: true,
        trim: true
    },
    estadoCurso: {
        type: String,
        required: true,
        enum: ['activo', 'inactivo'],
        trim: true,
    },
    precio: {
        type: Number,
        required: true,
        trim: true,
    },
    miniatura: {
        type: String,
        required: true,
        trim: true
    },
    planetas: [{
        type: Schema.Types.ObjectId,
        ref: 'Planeta'
    }]
});

module.exports = model("Cursos", cursos)