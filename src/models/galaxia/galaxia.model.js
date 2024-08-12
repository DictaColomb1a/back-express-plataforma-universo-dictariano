const {Schema, model} = require('mongoose')


const galaxia = new Schema({
    name:{
        type : String,
        required : true,
    },
    description:{
        type: String,
        required: true
    },
    createAt:{
        type: Date,
        required: true,
        trim: true
    },
    state:{
        type: String,
        required: true,
        trim: true
    },
    texture:{
        type: String,
        required: true,
        trim: true
    },
    coordinates:{
        type: String,
        requiered: true
    },
});

module.exports = model("Galaxia", galaxia)