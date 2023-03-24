import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProductsComponent } from './Components/my-products/my-products.component';
import { NewProductComponent } from './Components/new-product/new-product.component';

const routes: Routes = [
  { path: '', component: MyProductsComponent },
  { path: 'new', component: NewProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
