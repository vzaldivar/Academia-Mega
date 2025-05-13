import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiServiceService } from '../../service/api-service.service';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: any[] = []

  constructor(private productServices: ApiServiceService){
  }

  ngOnInit(): void {
    this.productServices.getProduct().subscribe(data => {
      this.products = data;
    })
  }

}
