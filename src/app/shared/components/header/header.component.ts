import { Component, OnInit } from '@angular/core';

// map permite transformar
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { CartService } from './../../../core/services/car/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    totalProductosCarrito$: Observable<number>;

  constructor(
    private cartService: CartService
  ) {
    this.totalProductosCarrito$ = this.cartService.cart$.pipe(
      map(products => products.length)
    );

   }

  ngOnInit(): void {
  }

}
