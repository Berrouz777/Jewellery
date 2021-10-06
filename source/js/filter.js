'use strict';

let filterBlock = document.querySelector('.filter');
let closeFilterButton = document.querySelector('.filter__close');
let openFilterButton = document.querySelector('.catalog__filter-link');
let page = document.querySelector('.body');

let escapeFilterHandler = (evt) => {
  if (evt.code === 'Escape') {
    evt.preventDefault();
    changeStateFilter();
  }
};

let openFilterButtonHandler = (evt) => {
  evt.preventDefault();
  changeStateFilter();
};

let changeStateFilter = () => {
  if (filterBlock.classList.contains('filter--opened')) {
    closeFilterButton.removeEventListener('click', closeFilterButtonHandler);
  } else {
    closeFilterButton.addEventListener('click', closeFilterButtonHandler);
    page.classList.toggle('body--overflow');
  }
  filterBlock.classList.toggle('filter--opened');
};

let closeFilterButtonHandler = () => {
  filterBlock.classList.toggle('filter--opened');
  closeFilterButton.removeEventListener('click', closeFilterButtonHandler);
  page.classList.toggle('body--overflow');
};

let initFilter = () => {
  if (filterBlock && openFilterButton) {
    openFilterButton.addEventListener('click', openFilterButtonHandler);
    window.addEventListener('keydown', escapeFilterHandler);
  }
};

initFilter();
