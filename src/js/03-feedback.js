import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('[name="email"'),
    message: document.querySelector('[name="message"]'),
}
let formData = {
    email: '',
    message: '',
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateFormData();

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
  
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

function onFormSubmit(evt) {
    evt.preventDefault();

    const savedFormData = (JSON.parse(localStorage.getItem('feedback-form-state')));

    if (savedFormData)
    console.log(savedFormData);
    
    evt.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
    
};

function populateFormData(evt) {
    const savedFormData = (JSON.parse(localStorage.getItem('feedback-form-state')));
    
    if (!savedFormData) return;
 
    refs.email.value = savedFormData.email;
    refs.message.value = savedFormData.message;
}