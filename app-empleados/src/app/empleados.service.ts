import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService) {

   }

  empleados: Empleado[] = [
    new Empleado('Ricardo','Ruben','Presidente',600000),
    new Empleado('Pico','Monaco','Jefe',200000),
    new Empleado('Tata','Brown','Supervisor',160000),
    new Empleado('Ricky','Ricon','Empleado',120000),
  ];

  agregarEmpleadoServicio(empleado: Empleado) {
    this.empleados.push(empleado);
    this.servicioVentanaEmergente.muestraMensaje(
      `Se registró con exito el usuario: 
      ${empleado.nombre} ${empleado.apellido}
      con el cargo de ${empleado.cargo}`
    );

  }

}
