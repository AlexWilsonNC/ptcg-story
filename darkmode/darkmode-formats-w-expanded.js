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
const messageus = document.querySelector('.message-us');

const toperaselector = document.querySelector('.top-era-selector');
const specificformat = document.querySelectorAll('.specific-format');
const scrolltopbtn = document.querySelector('.scroll-top-btn');
const expandedformat = document.querySelectorAll('.expanded-format');


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

    toperaselector.classList.add('darkon');
    scrolltopbtn.classList.add('darkon');
    messageus.classList.add('darkon');
    specificformat.forEach((specificformat) => {
      specificformat.classList.add('darkon');
    })
    expandedformat.forEach((expandedformat) => {
      expandedformat.classList.add('darkon');
    })

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

    toperaselector.classList.remove('darkon');
    scrolltopbtn.classList.remove('darkon');
    messageus.classList.remove('darkon');
    specificformat.forEach((specificformat) => {
      specificformat.classList.remove('darkon');
    })
    expandedformat.forEach((expandedformat) => {
      expandedformat.classList.remove('darkon');
    })

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
