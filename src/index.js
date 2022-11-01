import { save } from './js/utils/localStorage';

const LOCAL_STORE_KEY = 'form-user';

refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', onSubmit);
refs.form.addEventListener('input', onChange);

const array = {};

function onChange(event) {
  console.log('onChange');
  console.log(event.currentTarget.length);
  for (let i = 0; i < event.currentTarget.length; i++) {
    if (event.currentTarget[i].name) {
      array[event.currentTarget[i].name] = event.currentTarget[i].value;
    }
  }
  save(LOCAL_STORE_KEY, array);
}

function onSubmit(event) {
  event.preventDefault();
  const array = {};

  for (let i = 0; i < event.target.length; i++) {
    if (event.target[i].name) {
      array[event.target[i].name] = event.target[i].value;
    }
  }
  save(LOCAL_STORE_KEY, array);
  console.log();
}
