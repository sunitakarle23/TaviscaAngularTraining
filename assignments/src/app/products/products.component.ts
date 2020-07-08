import { Component, OnInit } from '@angular/core';
import {Products, Product} from '../entities/product-entities';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})

export class ProductsComponent implements OnInit {
  productEntity: any;
  products: Array<Product>
  saveProductInfo: {
    error:'',
    message: ''
  };

  constructor() { 
    this.productEntity = new Products();
  }

  ngOnInit() {
    this.products = this.productEntity.getProducts();
  }
  addProduct() {
    this.saveProductInfo = this.productEntity.addProduct(
      { 
        productId: 111,
        productName: "Thinkpad",
        category: "Laptop",
        manufacturer: "Japan",
        description: "Laptop",
        price: 80000
      }
    )
  }
}
