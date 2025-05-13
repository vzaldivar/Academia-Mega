import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-hijo-service',
  imports: [],
  templateUrl: './hijo-service.component.html',
  styleUrl: './hijo-service.component.css'
})
export class HijoServiceComponent implements OnInit {
  message = ""

  constructor(private dataservice: DataService) {

  }

  ngOnInit(): void {
    this.message = this.dataservice.getMessage();
  }

  ngDoCheck(): void {
    this.message = this.dataservice.getMessage();
  }
}
