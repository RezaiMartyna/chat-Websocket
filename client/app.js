const loginForm = document.getElementById('welcome-form');
const messagesSection = document.getElementById('messages-section');
const messagesList = document.getElementById('messages-list');
const addMessageForm = document.getElementById('add-messages-form');
const userNameInput = document.getElementById('username');
const messageContentInput = document.getElementById('message-content');

let userName; 

const login = function(event) {
    event.preventDefault();
    if(userNameInput.value) {
      userName = userNameInput.value;
      messagesSection.classList.add('show');
      loginForm.classList.remove('show');
      
    } else window.alert('Write your login!');
  };



function addMessage(author, content) {
    const message = document.createElement('li');
    message.classList.add('message');
    message.classList.add('message--received');
    if(author === userName) message.classList.add('message--self');
    message.innerHTML = `
      <h3 class="message__author">${userName === author ? 'You' : author }</h3>
      <div class="message__content">
        ${content}
      </div>
    `;
   messagesList.appendChild(message);
};

const sendMessage =function(event) {
    event.preventDefault();
    if(messageContentInput.value) {
        addMessage(userName, messageContentInput.value);
      
        messageContentInput.value = '';
    } else window.alert('You have to type your message');
};


loginForm.addEventListener('submit', login);
addMessageForm.addEventListener('submit', sendMessage);