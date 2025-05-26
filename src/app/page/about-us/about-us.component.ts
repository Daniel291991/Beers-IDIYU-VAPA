import { Component } from '@angular/core';
import { CartItem, Beer, OrderDetails } from '../../services/beers-company.service';
import { CartService } from '../beerscart/beerscart.service';

@Component({
  selector: 'app-about-us',
  standalone: false,
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  cart: CartItem[] = [];
  showCartModal = false;
  beers: Beer[] = [];
  orderDetails: OrderDetails | null = null;
  showConfirmation = false;
  isLoading: boolean = false;

  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart();
  }

  handleOpenCart() {
    this.showCartModal = true;
  }
  saveCartToStorage() {
    this.cartService.setCart(this.cart);
  }

  handleRemoveFromCart(event: { guid: string, pack: string }) {
    this.cart = this.cart.filter(item => !(item.Guid === event.guid && item.pack === event.pack));
    this.saveCartToStorage();
  }


  handleCloseCart() {
    this.showCartModal = false;
    this.saveCartToStorage();
  }

  handlePlaceOrder(orderDetails: OrderDetails) {
    this.orderDetails = orderDetails;
    this.showConfirmation = true;
  }

  handleClearCart() {
    this.cart = [];
    this.cartService.clearCart();
    this.showConfirmation = false;
    this.showCartModal = false;
  }
}
