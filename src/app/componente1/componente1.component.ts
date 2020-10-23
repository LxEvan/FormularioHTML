import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {
  erDNI='^[0-9]{8}[[A-Za-z]{1}$';
  infotexto = "";
  infomensaje= "";
  EnviarDatos(nombre, dni, mensaje){
    if(nombre.value ==""){
      alert("El nombre esta vacio");
    }
    if(dni.match(this.erDNI)){
      this.infotexto="Correcto";
    }else{
      this.infotexto="Incorrecto";
    }
    if (mensaje.value.length <= 2){
      this.infomensaje="El mensaje es demasiado corto";
    } else{
      this.infomensaje="Correcto";
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
