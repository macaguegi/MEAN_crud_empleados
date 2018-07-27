const mongoose = require('mongoose');

//direccion de la BD, si no existe MongoDB la crea
const URI = "mongodb://localhost/mean_empleados";

mongoose.connect(URI)
    .then(db => console.log('La BD esta conectada'))
    .catch(err => console.error(err));

module.exports = mongoose;