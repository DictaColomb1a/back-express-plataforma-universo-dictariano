const mongoose = require("mongoose");

const conexionDB = async ()=>{
    try {
        //
        //await mongoose.connect(process.env.DB_CONNECTION);
        await mongoose.connect(process.env.DB_CONNECTION,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Contectado a la Base de Datos Dicta")
    } catch (error) {
        console.log("El error es: " + error);
    }
}

module.exports = conexionDB;