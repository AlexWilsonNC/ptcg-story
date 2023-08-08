let darkMode = localStorage.getItem('darkMode');

const toggle = document.getElementById('toggle');
const topnavr = document.getElementById('top-navr');
const menu = document.getElementById('menu');
const menuToggle = document.getElementById('menuToggle');
const navleftr = document.getElementById('nav-leftr');
const navrightr = document.getElementById('nav-rightr');
const dropitdown1 = document.querySelector('.drop-it-down1');
const dropitdown2 = document.querySelector('.drop-it-down2');

const extranav = document.querySelector('.extra-nav');
const summright = document.querySelector('.summ-right');
const hiddentopsumm = document.querySelectorAll('.hidden-top-summ');
const h2 = document.querySelectorAll('h2');
const h3 = document.querySelectorAll('h3');
const h5 = document.querySelectorAll('h5');
const pp = document.querySelectorAll('p');
const prizingheader = document.querySelectorAll('.prizing-header');
const autoday2area2 = document.querySelectorAll('.auto-day2-area2');
const day2left = document.querySelectorAll('.day2-left');


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
    extranav.classList.add('darkon');
    summright.classList.add('darkon');
    // h2.classList.add('darkon');
    // h3.classList.add('darkon');

    pp.forEach((pp) => {
      pp.classList.add('darkon');
    })
    h2.forEach((h2) => {
      h2.classList.add('darkon');
    })
    h3.forEach((h3) => {
      h3.classList.add('darkon');
    })
    h5.forEach((h5) => {
      h5.classList.add('darkon');
    })
    hiddentopsumm.forEach((hiddentopsumm) => {
      hiddentopsumm.classList.add('darkon');
    })
    prizingheader.forEach((prizingheader) => {
      prizingheader.classList.add('darkon');
    })
    autoday2area2.forEach((autoday2area2) => {
      autoday2area2.classList.add('darkon');
    })
    day2left.forEach((day2left) => {
      day2left.classList.add('darkon');
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
    extranav.classList.remove('darkon');
    // h2.classList.remove('darkon');
    summright.classList.remove('darkon');
    hiddentopsumm.forEach((hiddentopsumm) => {
      hiddentopsumm.classList.remove('darkon');
    })
    pp.forEach((pp) => {
      pp.classList.remove('darkon');
    })
    h2.forEach((h2) => {
      h2.classList.remove('darkon');
    })
    h3.forEach((h3) => {
      h3.classList.remove('darkon');
    })
    h5.forEach((h5) => {
      h5.classList.remove('darkon');
    })
    prizingheader.forEach((prizingheader) => {
      prizingheader.classList.remove('darkon');
    })
    autoday2area2.forEach((autoday2area2) => {
      autoday2area2.classList.remove('darkon');
    })
    day2left.forEach((day2left) => {
      day2left.classList.remove('darkon');
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
