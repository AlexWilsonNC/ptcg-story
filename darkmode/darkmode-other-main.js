let darkMode = localStorage.getItem('darkMode');

const toggle = document.getElementById('toggle');
const indicator = document.querySelector('.indicator');
const topnavr = document.getElementById('top-navr');
const menu = document.getElementById('menu');
const menuToggle = document.getElementById('menuToggle');
const navleftr = document.getElementById('nav-leftr');
const navrightr = document.getElementById('nav-rightr');
 
const dropitdown2 = document.querySelector('.drop-it-down2');

const othersbox = document.querySelectorAll('.others-box');
const opace123 = document.querySelectorAll('.opace123');

const enableDarkMode = () => {
    document.body.classList.add('darkon');
    toggle.classList.add('darkon');
    topnavr.classList.add('darkon');
    menu.classList.add('darkon');
    menuToggle.classList.add('darkon');
    navleftr.classList.add('darkon');
    navrightr.classList.add('darkon');
    // dropitdown1.classList.add('darkon');
    dropitdown2.classList.add('darkon');

    othersbox.forEach((othersbox) => {
      othersbox.classList.add('darkon');
    });
    opace123.forEach((opace123) => {
      opace123.classList.add('darkon');
    });

    localStorage.setItem('darkMode", 'enabled');
  };
  
  const disableDarkMode = () => {
    document.body.classList.remove('darkon');
    toggle.classList.remove('darkon');
    topnavr.classList.remove('darkon');
    menu.classList.remove('darkon');
    menuToggle.classList.remove('darkon');
    navleftr.classList.remove('darkon');
    navrightr.classList.remove('darkon');
    // dropitdown1.classList.remove('darkon');
    dropitdown2.classList.remove('darkon');

    othersbox.forEach((othersbox) => {
      othersbox.classList.remove('darkon');
    });
    opace123.forEach((opace123) => {
      opace123.classList.remove('darkon');
    });

    localStorage.setItem('darkMode", null);
  };
  
  if(darkMode === 'enabled') {
    enableDarkMode();
  }
  
  toggle.addEventListener('click", () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
