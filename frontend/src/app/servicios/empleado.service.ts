import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../modelos/empleado';
import { EmpleadosComponent } from '../componentes/empleados/empleados.component';
import { TouchSequence } from '../../../node_modules/@types/selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  selectedEmpleado: Empleado;
  empleados: Empleado[];
  readonly URL_API = 'http://localhost:3000/api/empleados';

  constructor(private http: HttpClient) {
      this.selectedEmpleado = new Empleado();
  }

  getEmpleados() {
    return this.http.get(this.URL_API);
  }

  postEmpleado(empleado: Empleado) {
    return this.http.post(this.URL_API, empleado);
  }

  putEmpleado(empleado: Empleado) {
    return this.http.put(this.URL_API + `/${empleado._id}`, empleado);
  }

  deleteEmpleado(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
