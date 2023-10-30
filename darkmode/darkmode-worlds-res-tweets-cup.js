let darkMode = localStorage.getItem('darkMode');

const toggle = document.getElementById('toggle');
const topnavr = document.getElementById('top-navr');
const menu = document.getElementById('menu');
const menuToggle = document.getElementById('menuToggle');
const navleftr = document.getElementById('nav-leftr');
const navrightr = document.getElementById('nav-rightr');
 
const dropitdown2 = document.querySelector('.drop-it-down2');

const extranav = document.querySelector('.extra-nav');
const yamato = document.querySelector('.yamato');
const mastersol = document.querySelector('.masters-ol');
const h2 = document.querySelectorAll('h2');
const pp = document.querySelectorAll('p');
const twittertweet = document.querySelectorAll('.twitter-tweet');


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
    extranav.classList.add('darkon');

    document.querySelectorAll('[src="../../../assets/list-icon.png"]').forEach(item => item.setAttribute('src', '../../../assets/list-icon-white.png'));
    function addAttribute(){
      document.querySelectorAll('[src="../../../assets/list-icon.png"]').forEach(item => item.setAttribute('src', '../../../assets/list-icon-white.png'));
    };
    window.onload = addAttribute;

    mastersol.classList.add('darkon');
    yamato.classList.add('darkon');

    pp.forEach((pp) => {
      pp.classList.add('darkon');
    })
    h2.forEach((h2) => {
      h2.classList.add('darkon');
    })

    twittertweet.forEach((twittertweet) => {
      twittertweet.setAttribute('data-theme', 'dark');
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
    // dropitdown1.classList.remove('darkon');
    dropitdown2.classList.remove('darkon');
    extranav.classList.remove('darkon');

    document.querySelectorAll('[src="../../../assets/list-icon-white.png"]').forEach(item => item.setAttribute('src', '../../../assets/list-icon.png'));
    mastersol.classList.remove('darkon');
    yamato.classList.remove('darkon');

    pp.forEach((pp) => {
      pp.classList.remove('darkon');
    })
    h2.forEach((h2) => {
      h2.classList.remove('darkon');
    })

    twittertweet.forEach((twittertweet) => {
      twittertweet.setAttribute('data-theme', 'light');
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
