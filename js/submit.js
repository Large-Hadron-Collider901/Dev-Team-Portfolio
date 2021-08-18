const contactForm = document.querySelector('form');
const nameInput = document.querySelector('[name="name"]');
const emailInput = document.querySelector('[name="email"]');
const messageInput = document.querySelector('[name="message"]');
const formFeedback = document.querySelector('#feedback');
const saveButton = document.querySelector('button');

contactForm.addEventListener('submit', event => {
  event.preventDefault();
const name = nameInput.value;
const email = emailInput.value;
const message = messageInput.value;
  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  localStorage.setItem('message', message);
  formFeedback.textContent = 'Saved!';
  nameInput.setAttribute('disabled', true);
  emailInput.setAttribute('disabled', true);
  messageInput.setAttribute('disabled', true);
  saveButton.setAttribute('disabled', true);
});
