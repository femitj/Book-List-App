const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const notificationBox = document.getElementById('notification-div');
const notificationBoxCloser = document.getElementById('close-notification');
const notificationTextElement = notificationBox.querySelector('p');
const notificationTitle = notificationBox.querySelector('h5');

const loginButton = document.getElementById('login-btn');

notificationBoxCloser.addEventListener('click', () => {
  notificationBox.style.display = 'none';
});

function displayNotification() {
  notificationBox.style.display = 'flex';
}

function verifyRequiredFields() {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    notificationTitle.innerText = 'An error has occured';
    notificationTextElement.innerText = 'All fields are required. Please fill them all.'
    return displayNotification();
  }

  if (!/^.+@.+\..+$/.test(email)) {
    notificationTitle.innerText = 'An error has occured';
    notificationTextElement.innerText = 'The email is invalid. Please enter a valid email';
    return displayNotification();
  }

  if (password.length <= 5) {
    notificationTitle.innerText = 'An error has occured';
    notificationTextElement.innerText = 'Password needs to be at least 6 characters long.'
    return displayNotification()
  }
  return { email, password }
}