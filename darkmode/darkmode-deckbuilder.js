let darkMode = localStorage.getItem('darkMode');

const toggle = document.getElementById('toggle');
const topnavr = document.getElementById('top-navr');
const menu = document.getElementById('menu');
const menuToggle = document.getElementById('menuToggle');
const navleftr = document.getElementById('nav-leftr');
const navrightr = document.getElementById('nav-rightr');

const fghrygdb = document.querySelector('.fghrygdb');
const cardsearchcontainer = document.querySelector('.card-search-container');
const alloptionbox = document.querySelector('.all-options-box');
const allcardscontainer = document.querySelector('.all-cards-container');
const expandadvanced = document.querySelector('.expand-advanced');
const spinner = document.querySelector('.spinner');
const dblogo = document.querySelector('.db-logo');
const bottommenu = document.querySelector('.bottom-menu');
const searchmag = document.querySelector('.search-mag');
const activedeckcontainer = document.querySelector('.active-deck-container');

const optionbtn = document.querySelectorAll('.option-btn');
const setwhitebox = document.querySelectorAll('.set-white-box');
const setcube = document.querySelectorAll('.set-cube');
const setcubepromo = document.querySelectorAll('.set-cube-promo');

const enableDarkMode = () => {
    document.body.classList.add('darkon');
    toggle.classList.add('darkon');
    topnavr.classList.add('darkon');
    menu.classList.add('darkon');
    menuToggle.classList.add('darkon');
    navleftr.classList.add('darkon');
    navrightr.classList.add('darkon');

    fghrygdb.classList.add('darkon');
    cardsearchcontainer.classList.add('darkon');
    alloptionbox.classList.add('darkon');
    allcardscontainer.classList.add('darkon');
    expandadvanced.classList.add('darkon');
    spinner.classList.add('darkon');
    dblogo.classList.add('darkon');
    bottommenu.classList.add('darkon');
    searchmag.classList.add('darkon');
    activedeckcontainer.classList.add('darkon');

    optionbtn.forEach((optionbtn) => {
      optionbtn.classList.add('darkon');
    })
    setwhitebox.forEach((setwhitebox) => {
      setwhitebox.classList.add('darkon');
    })
    setcube.forEach((setcube) => {
      setcube.classList.add('darkon');
    })
    setcubepromo.forEach((setcubepromo) => {
      setcubepromo.classList.add('darkon');
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

    fghrygdb.classList.remove('darkon');
    cardsearchcontainer.classList.remove('darkon');
    alloptionbox.classList.remove('darkon');
    allcardscontainer.classList.remove('darkon');
    expandadvanced.classList.remove('darkon');
    spinner.classList.remove('darkon');
    dblogo.classList.remove('darkon');
    bottommenu.classList.remove('darkon');
    searchmag.classList.remove('darkon');
    activedeckcontainer.classList.remove('darkon');

    optionbtn.forEach((optionbtn) => {
      optionbtn.classList.remove('darkon');
    })
    setwhitebox.forEach((setwhitebox) => {
      setwhitebox.classList.remove('darkon');
    })
    setcube.forEach((setcube) => {
      setcube.classList.remove('darkon');
    })
    setcubepromo.forEach((setcubepromo) => {
      setcubepromo.classList.remove('darkon');
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
