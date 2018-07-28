import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../servicios/empleado.service';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { Empleado } from '../../modelos/empleado';

// para el toast
declare var M: any;

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  providers: [EmpleadoService]
})
export class EmpleadosComponent implements OnInit {

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit() {
    this.obtenerEmpleados();
  }

  agregarEmpleado(form: NgForm) {
    if (form.value._id) {
      this.empleadoService.putEmpleado(form.value)
        .subscribe(res => {
          this.resetFormulario(form);
          M.toast({html: 'Actualizado con exito'});
          this.obtenerEmpleados();
        });
    } else {
    this.empleadoService.postEmpleado(form.value)
      .subscribe(res => {
        this.resetFormulario(form);
        M.toast({html: 'Gaurdado con exito'});
        this.obtenerEmpleados();
      });
    }
  }

  editarEmpleado(empleado: Empleado) {
    this.empleadoService.selectedEmpleado = empleado;
  }

  borrarEmpleado(_id: string) {
    if (confirm('¿Está seguro de querer eliminar el registro')) {
    this.empleadoService.deleteEmpleado(_id)
      .subscribe(res => {
        this.obtenerEmpleados();
        M.toast({html: 'Eliminado con exito'});
      });
    }
  }
  obtenerEmpleados() {
    this.empleadoService.getEmpleados()
      .subscribe(res => {
        this.empleadoService.empleados = res as Empleado[];
        console.log(res);
      });
  }
  resetFormulario(form?: NgForm) {
    if (form) {
      form.reset();
      this.empleadoService.selectedEmpleado = new Empleado();
    }
  }
}
