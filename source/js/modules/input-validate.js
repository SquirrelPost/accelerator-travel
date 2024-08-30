const form = document.querySelector('.form');
const emailInput = form.querySelector('#email');
const phoneInput = form.querySelector('#phone');
const inputs = form.querySelectorAll('input');

const errorClass = 'form__field--error';
const regExp = {
  email: /^(([a-zа-я0-9_-]+\.)*[a-zа-я0-9_-]+@[a-zа-я0-9-]+(\.[a-zа-я0-9-]+)*\.[a-zа-я]{2,6})?$/i,
  phone: /^((\+7|7|8)+([0-9]){10})$/,
};
const errorMessage = {
  email: 'Email может содержать любые буквы, арабские цифры, символы: "-","+", ".". Имя должно быть разделено @. Домен должен быть отделен ".". Допускается локальный домен (.рф)',
  phone: 'Телефон не принимает к отправке буквы, должен быть не менее 11 символов.',
};

let isFormSubmitted = false;

const validateEmail = () => {
  const emailValue = emailInput.value;
  const emailValidate = regExp.email;

  if (!emailValidate.test(emailValue) && isFormSubmitted) {
    emailInput.setCustomValidity(errorMessage.email);
    emailInput.classList.add(errorClass);
  } else {
    emailInput.setCustomValidity('');
    emailInput.classList.remove(errorClass);
  }
};

const validatePhone = () => {
  const phoneValue = phoneInput.value;
  const phoneValidate = regExp.phone;

  if (!phoneValidate.test(phoneValue) && isFormSubmitted) {
    phoneInput.setCustomValidity(errorMessage.phone);
    phoneInput.classList.add(errorClass);
  } else {
    phoneInput.setCustomValidity('');
    phoneInput.classList.remove(errorClass);
  }
};

const onInputChange = () => {
  if (emailInput.value === '' || phoneInput.value === '') {
    emailInput.classList.remove(errorClass);
    phoneInput.classList.remove(errorClass);
  } else if (isFormSubmitted) {
    validateEmail();
    validatePhone();
  }
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  isFormSubmitted = true;
  validateEmail();
  validatePhone();

  if (form.checkValidity()) {
    form.submit();
    form.reset();
    isFormSubmitted = false;
  } else {
    emailInput.reportValidity();
    phoneInput.reportValidity();
  }
};

inputs?.forEach((input) => {
  input.addEventListener('input', onInputChange);
});

const initForm = () => {
  form.addEventListener('submit', onFormSubmit);
};

export {initForm};
