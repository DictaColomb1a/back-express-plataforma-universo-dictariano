const {Schema, model} = require('mongoose')


const galaxia = new Schema({
    nombreGalaxia:{
        type : String,
        required : true,
    },
    descripcionGalaxia:{
        type: String,
        required: true
    },
    fechaCreacion:{
        type: Date,
        required: true,
        trim: true
    },
    estadoGalaxia:{
        type: String,
        required: true,
        enum: ['activo', 'inactivo'],
        trim: true
    },
    texturaGalaxia:{
        type: String,
        required: true,
        trim: true
    },
    coordenadasGalaxia:{
        type: String,
        requiered: true
    },
    planetas: [{
        type:Schema.Types.ObjectId,
        ref: 'Planeta'
    }],

});

module.exports = model("Galaxia", galaxia)