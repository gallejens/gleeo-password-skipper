const DEFAULT_PASSWORD = 'gallebvba';
const LOCAL_STORAGE_KEY = 'gleeo-password-skipper-password';

const INPUT_ID = 'INPUT_DOMAIN_PASSWORD';
const BUTTON_ID = 'BUTTON_APPLY';
const INPUT_DATA_ATTRIBUTE = 'gleeo-password-skipper-found';

const rootElement = document.getRootNode();
const observer = new MutationObserver(() => {
  const inputElement = document.getElementById(INPUT_ID);
  const buttonElement = document.getElementById(BUTTON_ID);
  if (!inputElement || !buttonElement) return;

  // mark the input element as processed to prevent multiple executions
  if (inputElement.getAttribute(INPUT_DATA_ATTRIBUTE)) return;
  inputElement.setAttribute(INPUT_DATA_ATTRIBUTE, 'true');

  const password = storage.local.get(LOCAL_STORAGE_KEY) || DEFAULT_PASSWORD;

  // we need to manually dispatch input event to trigger the sites input validator
  inputElement.value = password;
  inputElement.dispatchEvent(new Event('input'));

  setTimeout(() => {
    buttonElement.click();
  }, 100);
});

observer.observe(rootElement, {
  attributes: false,
  childList: true,
  subtree: true,
});
