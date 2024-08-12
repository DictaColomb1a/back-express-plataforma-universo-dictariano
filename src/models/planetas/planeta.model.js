const {Schema, model} = require('mongoose')


const planeta = new Schema({
    nombreplaneta:{
        type : String,
        required : true,
    },
    descripcionplaneta:{
        type: String,
        required: true
    },
    fechaCreacionplaneta:{
        type: Date,
        required: true,
        trim: true
    },
    estadoplaneta:{
        type: String,
        required: true,
        enum: ['activo', 'inactivo'],
        trim: true
    },
    texturaPlaneta:{
        type: String,
        required: true,
        trim: true
    },
    coordenadasPlaneta:{
        type: String,
        requiered: true
    },
    galaxia: {
        type: Schema.Types.ObjectId,
        ref: 'Galaxia',
        required: true
    }


});

module.exports = model("Planeta", planeta)