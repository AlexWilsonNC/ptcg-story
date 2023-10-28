let darkMode = localStorage.getItem('darkMode');

const toggle = document.getElementById('toggle');
const topnavr = document.getElementById('top-navr');
const menu = document.getElementById('menu');
const menuToggle = document.getElementById('menuToggle');
const navleftr = document.getElementById('nav-leftr');
const navrightr = document.getElementById('nav-rightr');
const dropitdown1 = document.querySelector('.drop-it-down1');
const dropitdown2 = document.querySelector('.drop-it-down2');

const placeflag = document.querySelector('.regional-info');
const regionalcontainer = document.querySelector('.regional-container');
const regionalresult = document.querySelector('.regional-result');

const mastersol = document.querySelector('.masters-ol');
const seniorsol = document.querySelector('.seniors-ol');
const juniorsol = document.querySelector('.juniors-ol');

// const hover = document.querySelectorAll('.results-list-item');

// const socials = document.querySelectorAll(".socials");

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

    placeflag.classList.add('darkon');
    regionalcontainer.classList.add('darkon');
    regionalresult.classList.add('darkon');

    // hover.forEach((hover) => {
    //   hover.classList.add('darkon');
    // })

    if (mastersol) {
      document.querySelectorAll('[src="../../../../assets/list-icon.png"]').forEach(item => item.setAttribute('src', '../../../../assets/list-icon-white.png'));
      function addAttribute(){
        document.querySelectorAll('[src="../../../../assets/list-icon.png"]').forEach(item => item.setAttribute('src', '../../../../assets/list-icon-white.png'));
      };
      window.onload = addAttribute;
  
      mastersol.classList.add('darkon');
      seniorsol.classList.add('darkon');
      juniorsol.classList.add('darkon');
    }

    // socials.forEach((socials) => {
    //   socials.classList.add('darkon');
    // })

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

    placeflag.classList.remove('darkon');
    regionalcontainer.classList.remove('darkon');
    regionalresult.classList.remove('darkon');

    // hover.forEach((hover) => {
    //   hover.classList.remove('darkon');
    // })

    if (mastersol) {
      document.querySelectorAll('[src="../../../../assets/list-icon-white.png"]').forEach(item => item.setAttribute('src', '../../../../assets/list-icon.png'));
      mastersol.classList.remove('darkon');
      seniorsol.classList.remove('darkon');
      juniorsol.classList.remove('darkon');
    }

    // socials.forEach((socials) => {
    //   socials.classList.remove('darkon');
    // })

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
