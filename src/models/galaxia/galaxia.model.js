const {Schema, model} = require('mongoose')

const galaxia = new Schema({
    nombre:{
        type : String,
        required : true,
    },
    descripcion:{
        type: String,
        required: true
    },
    fechaCreacion:{
        type: Date,
        required: true,
        trim: true
    }
});

module.exports = model("Galaxia", galaxia)