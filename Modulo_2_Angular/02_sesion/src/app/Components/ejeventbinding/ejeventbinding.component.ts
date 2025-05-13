import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejeventbinding',
  imports: [],
  templateUrl: './ejeventbinding.component.html',
  styleUrl: './ejeventbinding.component.css'
})
export class EjeventbindingComponent implements OnInit {

  texto = 'Originalmente el texto se carga asi';

  constructor() { }

  ngOnInit(): void {
  }

  modTexto(){
    this.texto = 'Al pulsar el boton el texto se muestra asi';
  }
}
