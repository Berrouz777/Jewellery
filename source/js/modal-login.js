'use strict';

let pageBody = document.querySelector('.body');
let modal = document.querySelector('.modal');
let loginLinks = document.querySelectorAll('.log-js');
let closeLoginFormBtn = document.querySelector('.login__close');
let inputFocused = document.querySelector('#useremail');

let initModalClickHandler = (logins) => {
  if (logins) {
    logins.forEach((login) => {
      login.addEventListener('click', setModalActiveState);
    });
  }
};

let setModalActiveState = (evt) => {
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

let escapeHandler = (evt) => {
  if (evt.code === 'Escape') {
    evt.preventDefault();
    setModalInactiveState();
  }
};

let closeBtnClickHandler = () => {
  setModalInactiveState();
};

let overlayClickHandler = (evt) => {
  let element = evt.target;
  if (element.classList.contains('modal')) {
    setModalInactiveState();
  } else {
    return;
  }
};

let setModalInactiveState = () => {
  modal.classList.toggle('modal--opened');
  pageBody.classList.toggle('body--overflow');
  window.removeEventListener('keydown', escapeHandler);
  closeLoginFormBtn.removeEventListener('click', closeBtnClickHandler);
  modal.removeEventListener('click', overlayClickHandler);
};

initModalClickHandler(loginLinks);
