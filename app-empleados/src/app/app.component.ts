import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private miServicio: ServicioEmpleadosService) {
    
  }

  titulo = 'Listado de empleados';

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;

  empleados: Empleado[] = [
    new Empleado('Ricardo','Ruben','Presidente',600000),
    new Empleado('Pico','Monaco','Jefe',200000),
    new Empleado('Tata','Brown','Supervisor',160000),
    new Empleado('Ricky','Ricon','Empleado',120000),
  ];

  agregarEmpleado() {
    let miEmpleado = new Empleado(
      this.cuadroNombre, 
      this.cuadroApellido, 
      this.cuadroCargo, 
      this.cuadroSalario
    );
    this.miServicio.muestraMensaje(
      `Se registró con exito el usuario: 
      ${this.cuadroNombre} ${this.cuadroApellido}
      con el cargo de ${this.cuadroCargo}`
    );
    this.empleados.push(miEmpleado);
  }
}
