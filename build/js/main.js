'use strict';

var accordionToggles = document.querySelectorAll('.faq-list__button');
var accordionQuestions = document.querySelectorAll('.faq-list__question');
var accordionAnswers = document.querySelectorAll('.faq-list__answer');
var CLOSED_QUESTION_CLASS = 'faq-list__question--closed';
var CLOSED_ANSWER_CLASS = 'faq-list__answer--closed';

var getClosedClass = function getClosedClass(block, blockClass) {
  if (block) {
    block.forEach(function (item) {
      item.classList.add(blockClass);
    });
  }
};

getClosedClass(accordionAnswers, CLOSED_ANSWER_CLASS);
getClosedClass(accordionQuestions, CLOSED_QUESTION_CLASS);

if (accordionToggles) {
  accordionToggles.forEach(function (toggle) {
    toggle.addEventListener('click', function (evt) {
      var parentQuestion = evt.target.parentNode;
      parentQuestion.classList.toggle(CLOSED_QUESTION_CLASS);
      var answer = parentQuestion.nextElementSibling;
      answer.classList.toggle(CLOSED_ANSWER_CLASS);
      var currentQuestions = document.querySelectorAll('.faq-list__question');
      currentQuestions.forEach(function (element) {
        if (parentQuestion !== element && !element.classList.contains(CLOSED_QUESTION_CLASS)) {
          element.classList.toggle(CLOSED_QUESTION_CLASS);
          element.nextElementSibling.classList.toggle(CLOSED_ANSWER_CLASS);
        }
      });
    });
  });
}
/* eslint-disable no-unused-vars */
'use strict';

var swiperCatalog;
var sliderCatalogContainer = document.querySelector('.catalog__sliders');
var sliderNavigation = document.querySelector('.catalog__sliders-navigation');

var initCatalogSwiper = function initCatalogSwiper() {
  swiperCatalog = new window.Swiper('.catalog__sliders', {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: document.querySelector('.catalog-sliders-navigation__pagination'),
      clickable: 'true',
      renderBullet: function renderBullet(index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
    },
    navigation: {
      nextEl: '.catalog-sliders-navigation__button--next',
      prevEl: '.catalog-sliders-navigation__button--prev'
    }
  });
};

var initCatalogSlider = function initCatalogSlider() {
  if (sliderCatalogContainer && sliderNavigation) {
    initCatalogSwiper();
  }
};

initCatalogSlider();
'use strict';

var accordionFilterBlock = document.querySelector('.filter__form');

var initAccordion = function initAccordion(fields, toggles) {
  fields.forEach(function (elem) {
    elem.classList.toggle('filter-field--closed');
  });
  toggles.forEach(function (elem) {
    elem.addEventListener('click', toggleClickHandler);
  });
};

var toggleClickHandler = function toggleClickHandler(evt) {
  var currentField = evt.target.parentNode;
  currentField.classList.toggle('filter-field--closed');
};

if (accordionFilterBlock) {
  var accordionFilterToggles = accordionFilterBlock.querySelectorAll('.filter-field__toggle');
  var accordionFilterFields = accordionFilterBlock.querySelectorAll('.filter-field');

  if (accordionFilterToggles && accordionFilterFields) {
    initAccordion(accordionFilterFields, accordionFilterToggles);
  }
}
'use strict';

var filterBlock = document.querySelector('.filter');
var closeFilterButton = document.querySelector('.filter__close');
var openFilterButton = document.querySelector('.catalog__filter-link');

var escapeFilterHandler = function escapeFilterHandler(evt) {
  if (evt.code === 'Escape') {
    evt.preventDefault();
    changeStateFilter();
  }
};

var openFilterButtonHandler = function openFilterButtonHandler(evt) {
  evt.preventDefault();
  changeStateFilter();
};

var changeStateFilter = function changeStateFilter() {
  if (filterBlock.classList.contains('filter--opened')) {
    closeFilterButton.removeEventListener('click', closeFilterButtonHandler);
  } else {
    closeFilterButton.addEventListener('click', closeFilterButtonHandler);
  }

  filterBlock.classList.toggle('filter--opened');
};

var closeFilterButtonHandler = function closeFilterButtonHandler() {
  filterBlock.classList.toggle('filter--opened');
  closeFilterButton.removeEventListener('click', closeFilterButtonHandler);
};

var initFilter = function initFilter() {
  if (filterBlock && openFilterButton) {
    openFilterButton.addEventListener('click', openFilterButtonHandler);
    window.addEventListener('keydown', escapeFilterHandler);
  }
};

initFilter();
'use strict';

var burgerButton = document.querySelector('.header__burger-menu');
var header = document.querySelector('.header');
var logo = document.querySelector('.header__logo');
var search = document.querySelector('.search');
var cart = document.querySelector('.cart');
var nav = document.querySelector('.nav');

if (burgerButton) {
  burgerButton.classList.toggle('header__burger-menu--js');
  burgerButton.addEventListener('click', function () {
    burgerButton.classList.toggle('header__burger-menu--menu');
    header.classList.toggle('header--menu');
    logo.classList.toggle('header__logo--menu');
    nav.classList.toggle('nav--menu');
    search.classList.toggle('search--menu');
    cart.classList.toggle('cart--menu');
  });
}

if (nav) {
  nav.classList.toggle('nav--menu');
}

if (header) {
  header.classList.toggle('header--menu');
}

if (logo) {
  logo.classList.toggle('header__logo--menu');
}

if (cart) {
  cart.classList.toggle('cart--menu');
}

if (search) {
  search.classList.toggle('search--menu');
}
'use strict';

var pageBody = document.querySelector('.body');
var modal = document.querySelector('.modal');
var loginLinks = document.querySelectorAll('.log-js');
var closeLoginFormBtn = document.querySelector('.login__close');
var inputFocused = document.querySelector('#useremail');

var initModalClickHandler = function initModalClickHandler(logins) {
  if (logins) {
    logins.forEach(function (login) {
      login.addEventListener('click', setModalActiveState);
    });
  }
};

var setModalActiveState = function setModalActiveState(evt) {
  evt.preventDefault();

  if (modal) {
    modal.classList.toggle('modal--opened');
    pageBody.classList.toggle('body--overflow');
    inputFocused.focus();
  }

  window.addEventListener('keydown', escapeHandler);

  if (closeLoginFormBtn) {
    closeLoginFormBtn.addEventListener('click', closeBtnClickHandler);
  }

  if (modal) {
    modal.addEventListener('click', overlayClickHandler);
  }
};

var escapeHandler = function escapeHandler(evt) {
  if (evt.code === 'Escape') {
    evt.preventDefault();
    setModalInactiveState();
  }
};

var closeBtnClickHandler = function closeBtnClickHandler() {
  setModalInactiveState();
};

var overlayClickHandler = function overlayClickHandler(evt) {
  var element = evt.target;

  if (element.classList.contains('modal')) {
    setModalInactiveState();
  } else {
    return;
  }
};

var setModalInactiveState = function setModalInactiveState() {
  modal.classList.toggle('modal--opened');
  pageBody.classList.toggle('body--overflow');
  window.removeEventListener('keydown', escapeHandler);
  closeLoginFormBtn.removeEventListener('click', closeBtnClickHandler);
  modal.removeEventListener('click', overlayClickHandler);
};

initModalClickHandler(loginLinks);
'use strict';

var signUpMail = document.querySelector('#email');

if (signUpMail) {
  signUpMail.addEventListener('blur', function () {
    localStorage.setItem('usermail', signUpMail.value);
  });
}
'use strict';

var sliderContainer = document.querySelector('.swiper');
var paginationBlock = document.querySelector('.sliders-pagination');
var currentDotOut = document.querySelector('.sliders-pagination-mobile__current');
var totalDotsOut = document.querySelector('.sliders-pagination-mobile__total');
var swiper;
var ACTIVE_BULLET_CLASS = 'swiper-pagination-bullet-active';

var initSwiper = function initSwiper() {
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
      renderBullet: function renderBullet(index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
    },
    navigation: {
      nextEl: '.sliders-buttons__item--next',
      prevEl: '.sliders-buttons__item--prev'
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      1023: {
        slidesPerView: 3,
        slidesPerGroup: 3
      },
      1169: {
        slidesPerView: 4,
        slidesPerGroup: 4
      }
    }
  });
};

var getBullets = function getBullets() {
  var bullets;

  if (paginationBlock) {
    bullets = paginationBlock.children;
  }

  return bullets;
};

var setMobileTotalBullet = function setMobileTotalBullet(bullets) {
  var totalBullets = bullets.length;
  return totalBullets;
};

var setMobileCurrentBullet = function setMobileCurrentBullet(bullets) {
  var currentBullet;
  Array.from(bullets).forEach(function (element) {
    if (element.classList.contains(ACTIVE_BULLET_CLASS)) {
      currentBullet = +element.textContent;
    }
  });
  return currentBullet;
};

var renderMobilePagination = function renderMobilePagination(bullets) {
  totalDotsOut.textContent = setMobileTotalBullet(bullets);
  currentDotOut.textContent = setMobileCurrentBullet(bullets);
};

var realIndexChangeHandler = function realIndexChangeHandler(bullets) {
  swiper.on('transitionEnd', function () {
    renderMobilePagination(bullets);
  });
};

var setMobilePagination = function setMobilePagination() {
  var bullets = getBullets();
  realIndexChangeHandler(bullets);
};

var breakpointChangeHandler = function breakpointChangeHandler() {
  var viewport = document.documentElement.clientWidth;

  if (viewport < 767) {
    setMobilePagination();
  }
};

var initMobilePagination = function initMobilePagination() {
  var bullets = getBullets();
  renderMobilePagination(bullets);
};

var initSlider = function initSlider() {
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
//# sourceMappingURL=main.js.map
