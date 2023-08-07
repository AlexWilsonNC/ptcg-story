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

const databasesearcher = document.querySelector('.database-searcher');
const collapseselect = document.querySelector('.collapse-select');
const setinfo = document.querySelector('.set-info');
const dbhr2 = document.querySelectorAll('.db-hr2, .db-hr3');
const setwhitbox = document.querySelectorAll('.set-white-box');



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

    databasesearcher.classList.add('darkon');
    collapseselect.classList.add('darkon');
    setinfo.classList.add('darkon');
    dbhr2.forEach((dbhr2) => {
      dbhr2.classList.add('darkon');
    });
    setwhitbox.forEach((setwhitbox) => {
      setwhitbox.classList.add('darkon');
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

    databasesearcher.classList.remove('darkon');
    collapseselect.classList.remove('darkon');
    setinfo.classList.remove('darkon');
    dbhr2.forEach((dbhr2) => {
      dbhr2.classList.remove('darkon');
    });
    setwhitbox.forEach((setwhitbox) => {
      setwhitbox.classList.remove('darkon');
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
