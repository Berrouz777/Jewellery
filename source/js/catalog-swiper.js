/* eslint-disable no-unused-vars */
'use strict';

let swiperCatalog;
let sliderCatalogContainer = document.querySelector('.catalog__sliders');
let sliderNavigation = document.querySelector('.catalog__sliders-navigation');

let initCatalogSwiper = () => {
  swiperCatalog = new window.Swiper('.catalog__sliders', {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: document.querySelector('.catalog-sliders-navigation__pagination'),
      clickable: 'true',
      renderBullet(index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
    navigation: {
      nextEl: '.catalog-sliders-navigation__button--next',
      prevEl: '.catalog-sliders-navigation__button--prev',
    },
  });
};

let initCatalogSlider = () => {
  if (sliderCatalogContainer && sliderNavigation) {
    initCatalogSwiper();
  }
};

initCatalogSlider();
