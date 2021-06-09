

import SwiperCore, { Navigation, Pagination } from 'swiper/core';
// import './../node_modules/swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});






function test(a, b) {
    return a + b
}
