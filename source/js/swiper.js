'use strict';

let sliderContainer = document.querySelector('.swiper');
let paginationBlock = document.querySelector('.sliders-pagination');
let currentDotOut = document.querySelector('.sliders-pagination-mobile__current');
let totalDotsOut = document.querySelector('.sliders-pagination-mobile__total');
let swiper;

const ACTIVE_BULLET_CLASS = 'swiper-pagination-bullet-active';
const BREAKPOINT_MOBILE = 767;

let initSwiper = () => {
  swiper = new window.Swiper('.swiper-main', {
    loop: true,
    slidesPerGroup: 2,
    slidesPerView: 2,
    centeredSlides: false,
    spaceBetween: 30,
    centeredSlidesBounds: true,
    pagination: {
      el: document.querySelector('.sliders-pagination'),
      clickable: 'true',
      renderBullet(index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
    navigation: {
      nextEl: '.sliders-buttons__item--next',
      prevEl: '.sliders-buttons__item--prev',
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1023: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1169: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
  });
};

let getBullets = () => {
  let bullets;
  if (paginationBlock) {
    bullets = paginationBlock.children;
  }
  return bullets;
};

let setMobileTotalBullet = (bullets) => {
  let totalBullets = bullets.length;
  return totalBullets;
};

let setMobileCurrentBullet = (bullets) => {
  let currentBullet;
  Array.from(bullets).forEach((element) => {
    if (element.classList.contains(ACTIVE_BULLET_CLASS)) {
      currentBullet = +element.textContent;
    }
  });

  return currentBullet;
};

let renderMobilePagination = (bullets) => {
  totalDotsOut.textContent = setMobileTotalBullet(bullets);
  currentDotOut.textContent = setMobileCurrentBullet(bullets);
};

let realIndexChangeHandler = (bullets) => {
  swiper.on('transitionEnd', () => {
    renderMobilePagination(bullets);
  });
};

let setMobilePagination = () => {
  let bullets = getBullets();
  realIndexChangeHandler(bullets);
};

let breakpointChangeHandler = () => {
  let viewport = document.documentElement.clientWidth;
  if (viewport < BREAKPOINT_MOBILE) {
    setMobilePagination();
  }
};

let initMobilePagination = () => {
  let bullets = getBullets();
  renderMobilePagination(bullets);
};

let initSlider = () => {
  if (sliderContainer) {
    initSwiper();

    if (paginationBlock && currentDotOut && totalDotsOut) {
      initMobilePagination();
      breakpointChangeHandler();
      swiper.on('breakpoint', breakpointChangeHandler);
    }
  }
};

initSlider();
