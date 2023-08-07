let darkMode = localStorage.getItem('darkMode');

const toggle = document.getElementById('toggle');
const indicator = document.querySelector('.indicator');
const topnavr = document.getElementById('top-navr');
const menu = document.getElementById('menu');
const menuToggle = document.getElementById('menuToggle');
const navleftr = document.getElementById('nav-leftr');
const navrightr = document.getElementById('nav-rightr');
const dropitdown1 = document.querySelector('.drop-it-down1');
const dropitdown2 = document.querySelector('.drop-it-down2');

const timelinediscl = document.querySelector('.timeline-discl');
const copyright = document.querySelector('.copyright');
const countrycontent = document.querySelectorAll('.country-content');
const singleevent = document.querySelectorAll('.single-event');
const flag = document.querySelectorAll('.flag-n-date');



const enableDarkMode = () => {
    document.body.classList.add('darkon');
    toggle.classList.add('darkon');
    topnavr.classList.add('darkon');
    menu.classList.add('darkon');
    menuToggle.classList.add('darkon');
    navleftr.classList.add('darkon');
    navrightr.classList.add('darkon');
    dropitdown1.classList.add('darkon');
    dropitdown2.classList.add('darkon');

    timelinediscl.classList.add('darkon');
    copyright.classList.add('darkon');
    countrycontent.forEach((countrycontent) => {
      countrycontent.classList.add('darkon');
    });
    flag.forEach((flag) => {
      flag.classList.add('darkon');
    });
    singleevent.forEach((singleevent) => {
      singleevent.classList.add('darkon');
    });

    localStorage.setItem('darkMode', 'enabled');
  };
  
  const disableDarkMode = () => {
    document.body.classList.remove('darkon');
    toggle.classList.remove('darkon');
    topnavr.classList.remove('darkon');
    menu.classList.remove('darkon');
    menuToggle.classList.remove('darkon');
    navleftr.classList.remove('darkon');
    navrightr.classList.remove('darkon');
    dropitdown1.classList.remove('darkon');
    dropitdown2.classList.remove('darkon');

    timelinediscl.classList.remove('darkon');
    copyright.classList.remove('darkon');
    countrycontent.forEach((countrycontent) => {
      countrycontent.classList.remove('darkon');
    });
    flag.forEach((flag) => {
      flag.classList.remove('darkon');
    });
    singleevent.forEach((singleevent) => {
      singleevent.classList.remove('darkon');
    });

    localStorage.setItem('darkMode', null);
  };
  
  if(darkMode === 'enabled') {
    enableDarkMode();
  }
  
  toggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
