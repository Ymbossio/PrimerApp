import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  deshabilitar= false;
  Mensaje = 'Ninguna persona ha sido agregada';
  especialidad='';
  nombre='';

  numero1=''
  numero2=''
  resultado=''

  PesonaAgregada(){
    this.Mensaje = 'Persona agregada';
  }

  activa(){
    if(this.nombre==''){
      this.deshabilitar=true
    }
  }

  mensaje(){
    alert('se ha dado click');
  }

  Operacion(){
    this.resultado = this.numero1 + this.numero2;
  }

}
