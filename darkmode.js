let darkMode = localStorage.getItem('darkMode');

const toggle = document.getElementById('toggle');
const indicator = document.querySelector('.indicator');
const topnavr = document.getElementById('top-navr');
const menu = document.getElementById('menu');
const menuToggle = document.getElementById('menuToggle');
const navleftr = document.getElementById('nav-leftr');
const upcomingeventstable = document.querySelector('.upcoming-events-table');
const featuredheaders = document.querySelector('.featured-headers');
const navrightr = document.getElementById('nav-rightr');

const enableDarkMode = () => {
    document.body.classList.add('darkon');
    toggle.classList.add('darkon');
    topnavr.classList.add('darkon');
    menu.classList.add('darkon')
    menuToggle.classList.add('darkon')
    navleftr.classList.add('darkon')
    featuredheaders.classList.add('darkon')
    upcomingeventstable.classList.add('darkon')
    navrightr.classList.add('darkon')

    localStorage.setItem('darkMode', 'enabled');
  };
  
  const disableDarkMode = () => {
    document.body.classList.remove('darkon');
    toggle.classList.remove('darkon');
    topnavr.classList.remove('darkon');
    menu.classList.remove('darkon')
    menuToggle.classList.remove('darkon')
    navleftr.classList.remove('darkon')
    featuredheaders.classList.remove('darkon')
    upcomingeventstable.classList.remove('darkon')
    navrightr.classList.remove('darkon')

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
