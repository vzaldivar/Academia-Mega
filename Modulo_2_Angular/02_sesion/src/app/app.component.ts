import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EdadPipe } from './Pipes/edad.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
            CommonModule,
            RouterLink,
            EdadPipe
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Bienvenido a mi pagina web';
  name = 'Victor Zaldivar';
  dato = 'Desarrollador Sr.';
  dato2 = 140;

  rolUsuario = 'user';
  tareaImportante = true;
  esUrgente = true;

  nombre = "Victor Gabriel Zaldivar Gonzalez"
  fechaNacimiento = '07/10/1964';
  salario = 25000.00;
}
