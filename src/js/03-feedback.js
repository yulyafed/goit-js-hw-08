import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const formData = {};

const form = document.querySelector('.feedback-form');
const input = document.querySelector('[name="email"]');
const textarea = document.querySelector('[name="message"]');



form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormClick,500));
input.addEventListener('input', onInputClick);
textarea.addEventListener('input', onTextareaClick);

function onFormClick(e) {
    formData[e.target.name] = e.target.value;
    // console.log(formData)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
 
function onFormSubmit(e) { 
    e.preventDefault();
    e.currentTarget.reset();
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
}

function populateForm(e) { 
    const savedMessage = localStorage.getItem(JSON.parse(STORAGE_KEY));
    console.log(savedMessage)
    if (savedMessage) { 
        input.value = savedMessage.email
        textarea.value = savedMessage.message
    }
}