import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

let formData = {};

const form = document.querySelector('.feedback-form');
const input = document.querySelector('[name="email"]');
const textarea = document.querySelector('[name="message"]');

populateForm();

form.addEventListener('input', throttle(onFormClick, 500));
form.addEventListener('submit', onFormSubmit);

function onFormClick(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm(e) {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (formData) {
        if (formData.email !== undefined) {
            input.value = formData.email;
        }
        if (formData.message !== undefined) {
            textarea.value = formData.message;
        }
    }
}
function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
}

