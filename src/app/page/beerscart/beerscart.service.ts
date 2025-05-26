import { Injectable } from '@angular/core';
import { CartItem } from '../../services/beers-company.service';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cart: CartItem[] = [];

  getCart(): CartItem[] {
    if (this.cart.length === 0) {
      const saved = localStorage.getItem('cart');
      this.cart = saved ? JSON.parse(saved) : [];
    }
    return this.cart;
  }

  setCart(cart: CartItem[]) {
    this.cart = cart;
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  clearCart() {
    this.cart = [];
    localStorage.setItem('cart', JSON.stringify([]));
  }
}