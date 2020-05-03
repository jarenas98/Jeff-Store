import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Params} from '@angular/router';
// mportamos el servicio de detalle de producto
import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from '../../../core/models/product.model';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
    ) {}

  ngOnInit(): void {
    // el subscribe es por si cambia el id cambie la pagina
      this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);

    });
  }

  fetchProduct(id: string) {
    return this.productsService.getProduct(id)
    .subscribe(product => {
      this.product = product;
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: 'isjeffer1',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
      title: 'IG : @isjeffer',
      price: 66666666,
      description: 'Estudiante'
      };
    this.productsService.createProduct(newProduct)
    .subscribe(p => {
      console.log(p);
    });
  }

  updateProduct() {
    const updatedProduct: Partial<Product> = {
      title: 'Curso Angular',
      price: 7777777,
      description: '1Estudiante'
      };
    this.productsService.updateProduct('isjeffer1', updatedProduct)
    .subscribe(p => {
      console.log(p);
    });
  }

  deleteProduct() {
    this.productsService.deleteProduct('isjeffer1')
    .subscribe(rta => {
      console.log(rta);
    });
  }


}
