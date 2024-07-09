const {Schema, model} = require('mongoose')

const cursos = new Schema({
    nombre:{
        type : String,
        required : true,
    },
    descripcion:{
        type: String,
        required: true
    },
    fechaPublicacion:{
        type: Date,
        required: true,
        trim: true
    },
    texturaplaneta:{
        type: String,
        required: true,
        trim: true
    },
    categoria:{
        type: String,
        required: true,
        enum:['ninos', 'jovenes', 'adultos'],
        trim:true
    },
    tipoCurso:{
        type:String,
        required: true,
        trim: true
    },
    idioma:{
        type: String,
        required:true,
        trim: true
    },
    estado: {
            type: String,
            required: true,
            enum: ['activo', 'inactivo'],
            trim: true,
    },
    precio:{
        type: Number,
        required: true,
        trim: true,
    },
    miniatura:{
        type: String,
        required: true,
        trim: true
    }
});

module.exports = model("Cursos", cursos)