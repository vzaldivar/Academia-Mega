import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HijoServiceComponent } from '../../Components/hijo-service/hijo-service.component';

@Component({
  selector: 'app-service-page',
  imports: [FormsModule, HijoServiceComponent],
  templateUrl: './service-page.component.html',
  styleUrl: './service-page.component.css'
})
export class ServicePageComponent implements OnInit {
  newMessage = "";

  constructor(private dataService: DataService) {
  }

  updateMessage() {
    console.log("Hola desde el boton");
    this.dataService.setMessage(this.newMessage);
  }

  ngOnInit(): void {
  }

}
