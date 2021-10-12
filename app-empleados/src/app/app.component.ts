import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { EmpleadosService } from './empleados.service';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private miServicio: ServicioEmpleadosService,
    private empleadosService: EmpleadosService
  ) { }
  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }

  empleados: Empleado[] = [];

  titulo = 'Listado de empleados';

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;

  agregarEmpleado() {
    let miEmpleado = new Empleado(
      this.cuadroNombre, 
      this.cuadroApellido, 
      this.cuadroCargo, 
      this.cuadroSalario
    );
    // this.miServicio.muestraMensaje(
    //   `Se registró con exito el usuario: 
    //   ${this.cuadroNombre} ${this.cuadroApellido}
    //   con el cargo de ${this.cuadroCargo}`
    // );
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
  }
}
