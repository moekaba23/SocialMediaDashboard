let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('.toggle input');

//const darkModeBtn = localStorage.getItem('darkModeBtn');
const darkBtn = () => {
  document.querySelector('span').className = 'input:checked+.dark-toggle';

}
//document.querySelector('span');

// Check if dark mode is enableDarkMode
// if enabled, turn it off
// if disabled, turn it on

const enableDarkMode = () => {
  // 1. add the class dark-theme to the body
  document.body.classList.add('dark-theme');
  // 2. update darkMode in the LocalStorage
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  // 1. remove the class dark-theme to the body
  document.body.classList.remove('dark-theme');
  // 2. update darkMode in the LocalStorage
  localStorage.setItem('darkMode', null);
};

if (darkMode === 'enabled') {
  enableDarkMode();
}

if (darkMode === 'enabled') {
  darkBtn();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');

  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});