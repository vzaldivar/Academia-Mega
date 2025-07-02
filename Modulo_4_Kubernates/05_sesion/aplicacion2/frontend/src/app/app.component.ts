import { Component, NgModule } from '@angular/core';
import { ItemListComponent } from "./components/item-list/item-list.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false
})
export class AppComponent {
  title = 'frontend';
}
