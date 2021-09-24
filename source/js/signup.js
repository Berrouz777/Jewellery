'use strict';

let signUpMail = document.querySelector('#email');

if (signUpMail) {
  signUpMail.addEventListener('blur', () => {
    localStorage.setItem('usermail', signUpMail.value);
  });
}
