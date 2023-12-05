const inputField = document.getElementById('input-field');
const saveButton = document.getElementById('save-button');
const currentPasswordLabel = document.getElementById('current-password-label');

const DEFAULT_PASSWORD = 'gallebvba';
const LOCAL_STORAGE_KEY = 'gleeo-password-skipper-password';

saveButton.addEventListener('click', () => {
  const password = inputField.value;
  if (!password) return;
  updateStoredPassword(password);
});

const loadStoredPassword = async () => {
  const storedPassword = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (!storedPassword) {
    updateStoredPassword(DEFAULT_PASSWORD);
    return;
  }

  currentPasswordLabel.innerText = storedPassword;
};

const updateStoredPassword = password => {
  currentPasswordLabel.innerText = password;
  localStorage.setItem(LOCAL_STORAGE_KEY, password);
};

document.addEventListener('DOMContentLoaded', loadStoredPassword);
