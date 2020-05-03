import { Injectable } from '@angular/core';

// principios reactivos de angular
import { BehaviorSubject } from 'rxjs';

import { Product } from './../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  // es observable para que cualquiera se
  // subscriba y se puedan ver cambios en tiempo real
  cart$ = this.cart.asObservable();

  constructor() { }

  addCart(product: Product) {
    this.products = [...this.products, product];
    this.cart.next(this.products);
  }
}
