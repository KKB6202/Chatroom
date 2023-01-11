const chatForm = document.getElementById('chatForm');
const messagesContainer = document.getElementById('messages');
const usernameInput = document.getElementById('username');
const messageInput = document.getElementById('message');

chatForm.addEventListener('submit', e => {
  e.preventDefault();
  if (usernameInput.value === '' || messageInput.value === '') {
    alert('Both username and message fields are required!');
    return;
  }

  const message = `${usernameInput.value}: ${messageInput.value}`;
  messagesContainer.innerHTML += `<div>${message}</div>`;
  messageInput.value = '';
});
