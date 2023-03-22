import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { FavouritesComponent } from './Components/favourites/favourites.component';

const routes: Routes = [
  { path: 'user/cart', component: CartComponent },
  { path: 'user/favourites', component: FavouritesComponent },
  { path: 'user/checkout', component: CheckoutComponent },
  {
    path: '',
    loadChildren: () => import('./Modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'user/product',
    loadChildren: () => import('./Modules/products/products.module').then(m => m.ProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
