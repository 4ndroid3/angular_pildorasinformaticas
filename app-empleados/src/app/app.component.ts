import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de empleados';

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
    this.empleados.push(miEmpleado);
  }

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;

}
