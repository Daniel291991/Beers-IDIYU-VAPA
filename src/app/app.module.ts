import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { BeersComponent } from './page/beers/beers.component';
import { BeersCartComponent } from './page/beerscart/beerscart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BeerloadingComponent } from './beerloading/beerloading.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    BeersComponent,
    BeersCartComponent,
    NavbarComponent,
    BeerloadingComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
