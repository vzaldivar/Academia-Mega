import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ej2waybinding',
  imports: [FormsModule],
  templateUrl: './ej2waybinding.component.html',
  styleUrl: './ej2waybinding.component.css'
})
export class Ej2waybindingComponent implements OnInit {

  texto = "Texto original al cargar...";

  constructor() { }

  ngOnInit(): void {

  }
}
