//Modelo de datos para el empleado

//definir schemas de datos
const mongoose = require('mongoose');
const { Schema } = mongoose;

//Definir mi modelo
const empleadoSchema = new Schema({
    nombre : { type : String , required:true},
    cargo : { type: String , required: true},
    oficina : { type : String, required: true},
    salario : { type : Number , required:true}
});

//pasarlo a un modelo de datos de mongoose y exportar

module.exports = mongoose.model('Empleado', empleadoSchema);

