'use strict';

let burgerButton = document.querySelector('.header__burger-menu');
let header = document.querySelector('.header');
let logo = document.querySelector('.header__logo');
let search = document.querySelector('.search');
let cart = document.querySelector('.cart');
let nav = document.querySelector('.nav');

if (burgerButton) {
  burgerButton.classList.toggle('header__burger-menu--js');
  burgerButton.addEventListener('click', () => {
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
