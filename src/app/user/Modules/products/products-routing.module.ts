import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';

const routes: Routes = [
  { path: 'all', component: AllProductsComponent },
  { path: ':id', component: ProductDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
