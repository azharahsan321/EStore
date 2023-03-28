import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-swiper-slider',
  templateUrl: './swiper-slider.component.html',
  styleUrls: ['./swiper-slider.component.css']
})
export class SwiperSliderComponent {
  @Input() position: any;

  slideConfig = { "slidesToShow": 1, "slidesToScroll": 1, infinite: false, vertical: false, arrows: true, asNavFor: '.vertical-slider' };

  slideConfig2 = { "slidesToShow": 4, "slidesToScroll": 1, infinite: false, vertical: true, verticalSwiping: true, arrows: false, asNavFor: '.horizontal-slider' };

  slides = [
    { img: "assets/images/product-detail-1.023bc49d.jpg" },
    { img: "assets/images/product-detail-2.62056b28.jpg" },
    { img: "assets/images/product-detail-3.4edd674c.jpg" },
    { img: "assets/images/product-detail-3.4edd674c.jpg" },
    { img: "assets/images/product-detail-3.4edd674c.jpg" },
    { img: "assets/images/product-detail-3.4edd674c.jpg" },
    { img: "assets/images/product-detail-3.4edd674c.jpg" },
    { img: "assets/images/product-detail-3.4edd674c.jpg" },
    { img: "assets/images/product-detail-3.4edd674c.jpg" },
    { img: "assets/images/product-detail-3.4edd674c.jpg" },
    { img: "assets/images/product-detail-3.4edd674c.jpg" },
    { img: "assets/images/product-detail-3.4edd674c.jpg" },
    { img: "assets/images/product-detail-3.4edd674c.jpg" },
    { img: "assets/images/product-detail-3.4edd674c.jpg" },
    { img: "assets/images/product-detail-3.4edd674c.jpg" },
    { img: "assets/images/product-detail-4.072fd9d4.jpg" }
  ];
  // ngOnInit() {
  //   debugger
  //   // if (this.position == 'vertical') {
  //   const mySwiper = new Swiper('.swiper', {
  //     // Optional parameters
  //     direction: 'vertical',
  //     // loop: true,

  //     // If we need pagination
  //     // pagination: {
  //     //   el: '.swiper-pagination',
  //     // },

  //     // Navigation arrows
  //     // navigation: {
  //     //   nextEl: '.swiper-button-next',
  //     //   prevEl: '.swiper-button-prev',
  //     // },

  //     // And if we need scrollbar
  //     // scrollbar: {
  //     //   el: '.swiper-scrollbar',
  //     // },
  //   });
  //   // } else if (this.position == 'horizontal') {
  //   const mySwiper2 = new Swiper('.swiper2', {
  //     // Optional parameters
  //     direction: 'horizontal',
  //     // loop: true,

  //     // If we need pagination
  //     // pagination: {
  //     //   el: '.swiper-pagination',
  //     // },

  //     // Navigation arrows
  //     // navigation: {
  //     //   nextEl: '.swiper-button-next',
  //     //   prevEl: '.swiper-button-prev',
  //     // },

  //     // And if we need scrollbar
  //     // scrollbar: {
  //     //   el: '.swiper-scrollbar',
  //     // },
  //   });
  //   // }
  // }
}
