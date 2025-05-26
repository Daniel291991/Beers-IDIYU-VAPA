import { Component } from '@angular/core';
import { BeerloadingService } from './beerloading.service';

@Component({
  standalone:false,
  selector: 'app-beerloading',
  templateUrl: './beerloading.component.html',
  styleUrl: './beerloading.component.css'
})
export class BeerloadingComponent {
  isLoading = false;

  constructor(private beerloadingService: BeerloadingService) {}

  ngOnInit() {
    this.beerloadingService.loading$.subscribe(val => this.isLoading = val);
  }
}