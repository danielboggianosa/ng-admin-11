import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplicacion',
  templateUrl: './multiplicacion.component.html',
  styleUrls: ['./multiplicacion.component.css']
})
export class MultiplicacionComponent implements OnInit {

  multiplo: number = 1
  cifras: number = 1
  numero: number = 1
  resultado: number = 0
  respuesta: number
  correctos: number = 0
  incorrectos: number = 0
  showRespuesta: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  configurar($event?) {
    this.numero = Math.floor(Math.random() * (10 ^ Math.pow(10, this.cifras)))
  }

  comprobar() {
    this.resultado = this.numero * this.multiplo
    if (this.resultado === this.respuesta){
      this.correctos++
      this.showRespuesta = false
    }
    else{
      this.incorrectos++
      this.showRespuesta = true
    }
    this.configurar()
    this.respuesta = undefined
  }

}
