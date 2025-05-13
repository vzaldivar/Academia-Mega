import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejmetodo',
  imports: [],
  templateUrl: './ejmetodo.component.html',
  styleUrl: './ejmetodo.component.css'
})
export class EjmetodoComponent implements OnInit {

    puntuacion = 9;

    constructor() { }

    ngOnInit() {

    }

    getPuntuacion(){
      return this.puntuacion;
    }
}
