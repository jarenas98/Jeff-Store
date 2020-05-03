import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {Product} from '../../../core/models/product.model';

// importamos el servicio de detalle de producto
import { ProductsService } from './../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product [];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    });
  }


  addCarEscuchador(id) {

    console.log('producto = ' + id);


  }


}
