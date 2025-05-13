import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-productos',
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {
  @Input() info:any;
  @Output() seleccionado = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  seleccionar() {
    this.seleccionado.emit(this.info)
  }
}
