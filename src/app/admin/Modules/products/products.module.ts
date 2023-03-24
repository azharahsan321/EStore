import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { MyProductsComponent } from './Components/my-products/my-products.component';
import { NewProductComponent } from './Components/new-product/new-product.component';


@NgModule({
  declarations: [
    MyProductsComponent,
    NewProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
