import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector(`.feedback-form`),
  textarea: document.querySelector(`.feedback-form textarea`),
  email: document.querySelector(`.feedback-form input`),
};

const STORAGE_KEY = `feedback-form-state`;
const feedbackForm = {};

refs.form.addEventListener(`submit`, onFormSubmit);
refs.textarea.addEventListener(`input`, throttle(onTextareaInput, 500));
refs.email.addEventListener(`input`, throttle(onTextareaInput, 500));

//localStorage write in input, if it have.
dataFromLocalStorage();

//save in local storage what client write
function onTextareaInput(evt) {
  feedbackForm[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackForm));
}

//btn submit - reset msg
function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

//localStorage write in input, if it have.
function dataFromLocalStorage() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage) {
    refs.textarea.value = savedMessage.message;
    refs.email.value = savedMessage.email;
  }
  // if (savedMessage.message) {
  //   refs.textarea.value = savedMessage.message;
  // }
  // if (savedMessage.email) {
  //   refs.email.value = savedMessage.email;
  // }
}
