import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
   @Input() cartCount: number = 0;
  @Output() cartClick = new EventEmitter<void>();

  openCart() {
    this.cartClick.emit();
  }
}
