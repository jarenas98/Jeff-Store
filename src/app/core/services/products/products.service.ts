import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Product } from '../../../core/models/product.model';

import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private https: HttpClient
  ) { }

  getAllProducts() {
    return this.https.get<Product[]>(`${environment.url_api}/products/`);
  }
  getProduct(id: string) {
    return this.https.get<Product>(`${environment.url_api}/products/${id}`);
  }

  createProduct(product: Product) {
    return this.https.post(`${environment.url_api}/products`, product);
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.https.put(`${environment.url_api}/products/${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.https.delete(`${environment.url_api}/products/${id}`);
  }

}
