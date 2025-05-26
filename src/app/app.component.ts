import { Component } from '@angular/core';
import { BeersCompanyService, Beer, CartItem, OrderDetails } from './services/beers-company.service';
import { BeerloadingService } from './beerloading/beerloading.service';
import { CartService } from './page/beerscart/beerscart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLoading = false;
  title = 'idiyu-vapa';
  cart: CartItem[] = [];
  showCartModal = false;
  orderDetails: OrderDetails | null = null;
  showConfirmation = false;
  constructor(private BeerloadingService: BeerloadingService, private cartService: CartService ) {}

  handleOpenCart() {
    this.showCartModal = true;
  }

   handleCloseCart() {
    this.showCartModal = false;
    this.cartService.setCart(this.cart);
  }

  handlePlaceOrder(orderDetails: OrderDetails) {
    this.orderDetails = orderDetails;
    this.showConfirmation = true;
  }

  updateCart(cart: CartItem[]) {
    this.cart = cart;
    this.cartService.setCart(cart);
  }

  handleRemoveFromCart(event: { guid: string, pack: string }) {
    const updatedCart = this.cart.filter(item => !(item.Guid === event.guid && item.pack === event.pack));
     this.updateCart(updatedCart);
  }

  handleClearCart() {
    this.cart = [];
    this.cartService.clearCart();
    this.showConfirmation = false;
    this.showCartModal = false;
  }
}
