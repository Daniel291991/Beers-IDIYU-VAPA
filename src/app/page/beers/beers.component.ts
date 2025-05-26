import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BeersCompanyService, Beer, CartItem, OrderDetails } from '../../services/beers-company.service';
import { CartService } from '../beerscart/beerscart.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-beers',
  standalone: false,
  templateUrl: './beers.component.html',
  styleUrl: './beers.component.css'
})
export class BeersComponent implements OnInit {
  beers: Beer[] = [];
  selectedBeer: Beer | null = null;
  cart: CartItem[] = [];
  showConfirmation = false;
  isLoading = true;
  showCartModal = false;
  orderDetails: OrderDetails | null = null;
  @Output() openCart = new EventEmitter<void>();


  constructor (private beersCompanyService: BeersCompanyService, private cartService: CartService ) {}
  
  ngOnInit() {
    this.loadBeers();
    this.cart = this.cartService.getCart();
  }

  loadBeers() {
    this.isLoading = true;
    this.beersCompanyService.fetchBeers().subscribe({
      next: (beers) => {
        this.beers = beers;
        this.isLoading = false;
      },
      error: () => {
        this.beers = [];
        this.isLoading = false;
      }
    });
    console.log(this.beersCompanyService);
  }

  updateCart(cart: CartItem[]) {
    this.cart = cart;
    this.cartService.setCart(cart);
  }

  saveCartToStorage() {
    this.cartService.setCart(this.cart);
  }

  handleSelectBeer(beer: Beer) {
    this.selectedBeer = beer;
  }

  handleCloseModal() {
    this.selectedBeer = null;
  }

  handleAddToCart(beer: Beer, pack: string) {
    if (!this.selectedBeer) return;

    const quantity = parseInt(pack.split(' ')[0], 10);
    const existing = this.cart.find(item => item.id === beer.id && item.pack === pack);

    let updatedCart = [...this.cart];
    if (existing) {
       existing.cant = (existing.cant || existing.quantity || 1) + 1; // suma 1 pack
    } else {
      updatedCart.push({
        Guid: uuidv4(),
        id: this.selectedBeer.id,
        name: this.selectedBeer.name,
        quantity,
        cant: 1,
        color: this.selectedBeer.color,
        pack,
        image: this.selectedBeer.image,
        price: this.selectedBeer.price
      });
    }

    this.updateCart(updatedCart);
    this.selectedBeer = null;
  }

  handleSelectPack(pack: string, Beer: Beer) {
    this.handleAddToCart(Beer, pack);
    this.openCart.emit(); 
  }

  handleRemoveFromCart(event: { guid: string, pack: string }) {
    const updatedCart = this.cart.filter(item => !(item.Guid === event.guid && item.pack === event.pack));
     this.updateCart(updatedCart);
  }

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

  handleClearCart() {
    this.cart = [];
    this.cartService.clearCart();
    this.showConfirmation = false;
    this.showCartModal = false;
  }
}
