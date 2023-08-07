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

const toperaselector = document.querySelector('.top-era-selector');
const topformatgraphic = document.querySelector('.top-format-graphic');
const decksmain = document.querySelector('.decks-main');
const eratocbox = document.querySelector('.era-toc-box');
const scrolltopbtn = document.querySelector('.scroll-top-btn');
const format = document.querySelectorAll('.format');
const deckbox = document.querySelectorAll('.deck-box');
const deckdescription = document.querySelectorAll('.deck-description');


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
    topformatgraphic.classList.add('darkon');
    decksmain.classList.add('darkon');
    eratocbox.classList.add('darkon');
    scrolltopbtn.classList.add('darkon');
    format.forEach((format) => {
      format.classList.add('darkon');
    })
    deckbox.forEach((deckbox) => {
      deckbox.classList.add('darkon');
    })
    deckdescription.forEach((deckdescription) => {
      deckdescription.classList.add('darkon');
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
    topformatgraphic.classList.remove('darkon');
    decksmain.classList.remove('darkon');
    scrolltopbtn.classList.remove('darkon');
    eratocbox.classList.remove('darkon');
    format.forEach((format) => {
      format.classList.remove('darkon');
    })
    deckbox.forEach((deckbox) => {
      deckbox.classList.remove('darkon');
    })
    deckdescription.forEach((deckdescription) => {
      deckdescription.classList.remove('darkon');
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
