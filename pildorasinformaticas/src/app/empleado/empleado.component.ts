import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre = "Juan";
  apellido = "Diaz";
  private edad = 18;
  // empresa = "Rolandolis";

  getEdad(){
    return this.edad;
  }

  llamaEmpresa(value:String) {
    console.log(value)
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
