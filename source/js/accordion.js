'use strict';

let accordionToggles = document.querySelectorAll('.faq-list__button');
let accordionQuestions = document.querySelectorAll('.faq-list__question');
let accordionAnswers = document.querySelectorAll('.faq-list__answer');

const CLOSED_QUESTION_CLASS = 'faq-list__question--closed';
const CLOSED_ANSWER_CLASS = 'faq-list__answer--closed';

let getClosedClass = (block, blockClass) => {
  if (block) {
    block.forEach((item) => {
      item.classList.add(blockClass);
    });
  }
};

getClosedClass(accordionAnswers, CLOSED_ANSWER_CLASS);
getClosedClass(accordionQuestions, CLOSED_QUESTION_CLASS);

if (accordionToggles) {
  accordionToggles.forEach((toggle) => {
    toggle.addEventListener('click', (evt) => {
      let parentQuestion = evt.target.parentNode;
      parentQuestion.classList.toggle(CLOSED_QUESTION_CLASS);
      let answer = parentQuestion.nextElementSibling;
      answer.classList.toggle(CLOSED_ANSWER_CLASS);
      let currentQuestions = document.querySelectorAll('.faq-list__question');
      currentQuestions.forEach((element) => {
        if (parentQuestion !== element && !element.classList.contains(CLOSED_QUESTION_CLASS)) {
          element.classList.toggle(CLOSED_QUESTION_CLASS);
          element.nextElementSibling.classList.toggle(CLOSED_ANSWER_CLASS);
        }
      });
    });
  });
}
