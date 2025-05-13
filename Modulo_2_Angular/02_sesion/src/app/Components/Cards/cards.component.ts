import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})

export class CardsComponent implements OnInit {
  constructor () {
    console.log(`Componente "Tarjeta" cargado`);
  }

  nombre: string = "";
  imagen: string = "https://";
  mensaje: string = "Bienvenido";

  cambiarSaludo () {
    this.mensaje = `!Hola ${this.nombre || "visitante"}¡`;
  }

  ngOnInit(): void {
    console.log("Componente inicializado");
  }

}
