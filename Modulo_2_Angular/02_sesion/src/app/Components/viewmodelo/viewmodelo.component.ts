import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../modelos/alumnos.model';

@Component({
  selector: 'app-viewmodelo',
  imports: [],
  templateUrl: './viewmodelo.component.html',
  styleUrl: './viewmodelo.component.css'
})
export class ViewmodeloComponent implements OnInit {

  alumno1 = new Alumno(1, "Victor", "Zaldivar", "Guadalajara")

  constructor() { }

  ngOnInit() {

  }
}
