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
  empresa2 = "Ramones";

  getEdad(){
    return this.edad;
  }

  llamaEmpresa(value:String) {
    console.log(value)
  }

  habilitacionCuadro = false;
  usuRegistrado = false;
  textoDeRegistro = "No hay nadie registrado";
  
  getRegistroUsuario() {
    this.usuRegistrado=false;
  }

  setUsuarioRegistrado(event:Event) {

    if ((<HTMLInputElement>event.target).value == 'si') {
      this.textoDeRegistro = "El usuario se acaba de registrar";
    } else {
      this.textoDeRegistro = "No hay nadie registrado";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
