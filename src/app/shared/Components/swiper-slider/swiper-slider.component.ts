import { Component, Input } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-swiper-slider',
  templateUrl: './swiper-slider.component.html',
  styleUrls: ['./swiper-slider.component.css']
})
export class SwiperSliderComponent {
  @Input() position: any;

  ngOnInit() {
    debugger
    const mySwiper = new Swiper('.swiper', {
      // Optional parameters
      direction: this.position,
      // loop: true,

      // If we need pagination
      // pagination: {
      //   el: '.swiper-pagination',
      // },

      // Navigation arrows
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },

      // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    });
  }
}
