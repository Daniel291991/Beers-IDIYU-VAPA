import { Component, Input, Output, EventEmitter } from '@angular/core';
import {CartItem, OrderDetails } from '../../services/beers-company.service';

@Component({
  standalone:false,
  selector: 'app-beerscart',
  templateUrl: './beerscart.component.html',
  styleUrls: ['./beerscart.component.css']
})
export class BeersCartComponent {
  @Input() cart: CartItem[] = [];
  @Output() removeFromCart = new EventEmitter<{ guid: string, pack: string }>();
  @Output() close = new EventEmitter<void>();
  @Output() placeOrder = new EventEmitter<OrderDetails>();
  @Output() clearCart = new EventEmitter<void>();

  contactName: string = '';
  contactEmail: string = '';
  contactAddress: string = '';
  contactPhone: string = '';

  showCheckout = false;
  showConfirmation = false;
  orderDetails: OrderDetails | null = null;

  get totalBottles(): number {
    return this.cart.reduce((sum, item) => {
    const bottlesPerPack = parseInt(item.pack.split(' ')[0], 10) || 1;
    return sum + bottlesPerPack * (item.cant || 1);
    }, 0);
  }

  get subTotal(): number {
    return this.cart.reduce((sum, item) => {
    const bottlesPerPack = parseInt(item.pack.split(' ')[0], 10) || 1;
    return sum + bottlesPerPack * (item.cant || 1) * item.price;
    }, 0);
  }

 get discount(): number {
    const totalBottles = this.totalBottles;
    let discount = 0;
    if(totalBottles >= 8 && totalBottles < 10) discount = 100;
    if (totalBottles >= 10 && totalBottles < 14) discount = 200;
    if (totalBottles >= 14) discount = 300;

    return this.cart.reduce((totalDiscount, item) => totalDiscount + discount * item.quantity, 0);
  }

  get total(): number {
    return this.subTotal - (this.discount || 0);
  }

  handleCheckout() {
    this.showCheckout = true;
  }

  handlePlaceOrder() {
    this.orderDetails = {
      items: this.cart,
      contact: {
        name: this.contactName,
        email: this.contactEmail,
        address: this.contactAddress,
        phone: this.contactPhone,
      }
    };
    this.showConfirmation = true;
    this.placeOrder.emit(this.orderDetails);
  }

  handleClearCart() {
    this.clearCart.emit();
    this.showConfirmation = false;
    this.showCheckout = false;
  }
}
