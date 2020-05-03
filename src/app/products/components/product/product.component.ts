import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Product} from '../../../core/models/product.model';

import { CartService } from './../../../core/services/car/cart.service'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {

    @Input() product: Product;
    @Output() addCarEvent: EventEmitter<any> = new EventEmitter();

    today = new Date();

    constructor(
      private cartService: CartService
    ) {}

    addCar() {
        console.log('añadir al carrito');
        this.cartService.addCart(this.product);
        //this.addCarEvent.emit(this.product.id);
    }
}
