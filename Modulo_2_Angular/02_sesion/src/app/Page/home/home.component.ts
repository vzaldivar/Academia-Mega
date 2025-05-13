import { HijoComponent } from './../../Components/hijo/hijo.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [HijoComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  //nombre = "Victor Zaldivar"

  // Simulacion de API
  usuarios = [
    {nombre: "Victor", edad: 60, profesion: "Ingeniero"},
    {nombre: "Gabriel", edad: 45, profesion: "Electronico"},
    {nombre: "Carlos", edad: 57, profesion: "Empresario"},
    {nombre: "Luis", edad: 58, profesion: "Artista"}
  ]

  constructor() { }

  ngOnInit(): void {
    this.mensajeDelHIjo = "valor desde el hijo";
  }

  mensajeDelHIjo: string = "";

  recibirMensaje(mensaje: string) {
    this.mensajeDelHIjo = mensaje;
  }
}
