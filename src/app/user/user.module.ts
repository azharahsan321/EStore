import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CartComponent } from './Components/cart/cart.component';
import { FavouritesComponent } from './Components/favourites/favourites.component';
import { SharedModule } from '../shared/shared.module';
import { CheckoutComponent } from './Components/checkout/checkout.component';


@NgModule({
  declarations: [
    CartComponent,
    FavouritesComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
