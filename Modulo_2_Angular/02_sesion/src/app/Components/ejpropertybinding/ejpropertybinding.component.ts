import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejpropertybinding',
  imports: [],
  templateUrl: './ejpropertybinding.component.html',
  styleUrl: './ejpropertybinding.component.css'
})
export class EjpropertybindingComponent implements OnInit {

  texto = "Escribe algo...";

  constructor() {
    setTimeout(() => {
      this.texto = 'por favor';
    }, 3000);
  }

  ngOnInit() {

  }

}
