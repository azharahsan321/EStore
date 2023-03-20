import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './Components/product-card/product-card.component';
import { PaginationComponent } from './Components/pagination/pagination.component';
import { SwiperSliderComponent } from './Components/swiper-slider/swiper-slider.component';



@NgModule({
  declarations: [
    ProductCardComponent,
    PaginationComponent,
    SwiperSliderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductCardComponent,
    SwiperSliderComponent
  ]
})
export class SharedModule { }
