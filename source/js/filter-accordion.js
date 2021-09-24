'use strict';

let accordionFilterBlock = document.querySelector('.filter__form');

let initAccordion = (fields, toggles) => {
  fields.forEach((elem) => {
    elem.classList.toggle('filter-field--closed');
  });

  toggles.forEach((elem) => {
    elem.addEventListener('click', toggleClickHandler);
  });
};

let toggleClickHandler = (evt) => {
  let currentField = evt.target.parentNode;
  currentField.classList.toggle('filter-field--closed');
};

if (accordionFilterBlock) {
  let accordionFilterToggles = accordionFilterBlock.querySelectorAll('.filter-field__toggle');
  let accordionFilterFields = accordionFilterBlock.querySelectorAll('.filter-field');

  if (accordionFilterToggles && accordionFilterFields) {
    initAccordion(accordionFilterFields, accordionFilterToggles);
  }
}
