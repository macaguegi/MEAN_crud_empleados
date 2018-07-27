const Empleado = require('../models/empleado');

const empleadoCtrl = {};

//Solo debe tener funciones donde se dfinen las consultas a la BD

empleadoCtrl.getEmpleados = async (req, res) => {
   //Busque todos los datos que estan en mi BD
    const empleados = await Empleado.find();
    res.json(empleados);
};

empleadoCtrl.createEmpleado = async (req,res) => {

    const empleado = new Empleado(req.body);
    await empleado.save();
    res.json({
        "status" : "recibido cap . Empleado guardado"
    });
};

empleadoCtrl.getEmpleado = async (req,res) => {
   const empleado = await Empleado.findById(req.params.id);
   res.json(empleado);
};

empleadoCtrl.editEmpleado = async (req,res) => {
    const empleadoNuevo = {
        nombre : req.body.nombre,
        cargo : req.body.cargo,
        oficina : req.body.oficina,
        salario : req.body.salario
    }
    await Empleado.findByIdAndUpdate(req.params.id , {$set: empleadoNuevo} , {new : true});
    res.json({
        status : "Empleado actualizado"
    });

};

empleadoCtrl.deleteEmpleado = async (req,res) => {
    await Empleado.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Empleado eliminado'
    })
};

module.exports = empleadoCtrl;