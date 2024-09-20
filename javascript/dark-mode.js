const toggleButton = document.getElementById('toggle-button');
const addclass = document.querySelector('#add');
const body = document.body;

let darkmode = localStorage.getItem('dark-mode-cv');

const enableDarkMode = () => {
  body.classList.add('dark-mode');
  body.classList.add('transition');
  addclass.classList.add('white');
  addclass.classList.remove('black');
  body.classList.remove('light-mode');
  localStorage.setItem('dark-mode-cv', 'enabled');
}

const disableDarkMode = () => {
  body.classList.add('light-mode');
  body.classList.add('transition');
  addclass.classList.add('black');
  addclass.classList.remove('white')
  body.classList.remove('dark-mode');
  localStorage.setItem('dark-mode-cv', 'disabled');
}

if (darkmode === 'enabled') {
  enableDarkMode()
}

toggleButton.addEventListener('click', () => {
  darkmode = localStorage.getItem('dark-mode-cv');
  if (darkmode === 'disabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}); 




