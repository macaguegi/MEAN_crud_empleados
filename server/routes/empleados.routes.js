const express = require('express');
const router = express.Router();

const empleCtrl = require('../controllers/empleado.controller');

//cuando un usuario entre a la ruta inicial / , le respondo con un get Empleados
router.get('/', empleCtrl.getEmpleados );
router.post('/', empleCtrl.createEmpleado)
//Consultar info de un empleado consultando por id. Id es parametro
router.get('/:id',empleCtrl.getEmpleado);
//Put me permite editar datos de un usuario especifico por id
router.put('/:id', empleCtrl.editEmpleado)
//Delete me permite borrar un usuario por id
router.delete('/:id', empleCtrl.deleteEmpleado);

module.exports = router;