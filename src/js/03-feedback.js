import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const formData = {};

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
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedMessage) {
        if (savedMessage.email !== undefined) { 
            input.value = savedMessage.email;
        }
        if (savedMessage.message !== undefined) {
            textarea.value = savedMessage.message;
        }
    }
}
function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
}

