import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '../app/page/about-us/about-us.component'
import { BeersComponent } from '../app/page/beers/beers.component';

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'beers', component: BeersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
