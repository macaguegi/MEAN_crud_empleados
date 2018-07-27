const express = require('express');
const morgan = require('morgan');
const app = express();
const { mongoose } = require('./database');

// Settings 

//Hacer una variable global para acceder al puerto 
app.set('port',process.env.PORT || 3000);

// Middlewares : Modulos

// Morgan sirve para visualizar las peticiones del usuario por consola
app.use(morgan('dev'));
// Para poder entender el codigo json mejor
app.use(express.json());


// Routes : Las vamos a usar como REST API

app.use('/api/empleados',require('./routes/empleados.routes'));

// Starting the server
app.listen(app.get('port'), () =>{
    console.log('Server corriendo en el puerto' , app.get('port'));
});