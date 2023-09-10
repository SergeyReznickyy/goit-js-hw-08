import throttle from 'lodash.throttle';

export const form = document.querySelector('.feedback-form');
form.addEventListener(
  'input',
  throttle(() => {
    const savedInfo = {
      email: form.elements.email.value,
      message: form.elements.message.value,
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(savedInfo));
  }, 500)
);
const localStorageInfo = localStorage.getItem('feedback-form-state');
const parsedLocalStorage = JSON.parse(localStorageInfo);
if (localStorageInfo) {
  form.elements.email.value = parsedLocalStorage.email;
  form.elements.message.value = parsedLocalStorage.message;
} else {
  form.reset();
}
form.addEventListener('submit', onFormSubmit);
export function onFormSubmit(event) {
  event.preventDefault();
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  if (email === '' || message === '') {
    alert('Увага! Всі поля повинні бути заповненні!');
  } else {
    const savedInfo = {
      email: email,
      message: message,
    };

    console.log(savedInfo);

    form.reset();
  }
}
