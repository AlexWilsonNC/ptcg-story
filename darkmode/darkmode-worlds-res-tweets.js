let darkMode = localStorage.getItem('darkMode');

const toggle = document.getElementById('toggle');
const topnavr = document.getElementById('top-navr');
const menu = document.getElementById('menu');
const menuToggle = document.getElementById('menuToggle');
const navleftr = document.getElementById('nav-leftr');
const navrightr = document.getElementById('nav-rightr');
 
const dropitdown2 = document.querySelector('.drop-it-down2');

const extranav = document.querySelector('.extra-nav');
const mastersol = document.querySelector('.masters-ol');
const seniorsol = document.querySelector('.seniors-ol');
const juniorsol = document.querySelector('.juniors-ol');
const hiyamodal = document.querySelector('.modal');
const h2 = document.querySelectorAll('h2');
const pp = document.querySelectorAll('p');
const twittertweet = document.querySelectorAll('.twitter-tweet');
const countrynametournaments = document.querySelectorAll('.name-n-flag');


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


    document.querySelectorAll('[src="../../assets/list-icon.png"]').forEach(item => item.setAttribute('src", '../../assets/list-icon-white.png'));
    function addAttribute(){
      document.querySelectorAll('[src="../../assets/list-icon.png"]').forEach(item => item.setAttribute('src", '../../assets/list-icon-white.png'));
    };
    window.onload = addAttribute;
    

    hiyamodal.classList.add('darkon');
    mastersol.classList.add('darkon');
    seniorsol.classList.add('darkon');
    juniorsol.classList.add('darkon');

    pp.forEach((pp) => {
      pp.classList.add('darkon');
    })
    h2.forEach((h2) => {
      h2.classList.add('darkon');
    })
    if (countrynametournaments) {
      document.querySelectorAll('.country-name').forEach(item => item.style.backgroundColor = 'white');
      document.querySelectorAll('.country-name').forEach(item => item.style.color = 'black');
      document.querySelectorAll('.country-name').forEach(item => item.style.border = '1px solid black');
      function addAttribute(){
        document.querySelectorAll('.country-name').forEach(item => item.style.backgroundColor = 'white');
        document.querySelectorAll('.country-name').forEach(item => item.style.color = 'black');
        document.querySelectorAll('.country-name').forEach(item => item.style.border = '1px solid black');
      };
      window.onload = addAttribute;
    }

    twittertweet.forEach((twittertweet) => {
      twittertweet.setAttribute('data-theme", 'dark');
    })

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
    extranav.classList.remove('darkon');

    document.querySelectorAll('[src="../../assets/list-icon-white.png"]').forEach(item => item.setAttribute('src", '../../assets/list-icon.png'));

    mastersol.classList.remove('darkon');
    seniorsol.classList.remove('darkon');
    juniorsol.classList.remove('darkon');

    pp.forEach((pp) => {
      pp.classList.remove('darkon');
    })
    h2.forEach((h2) => {
      h2.classList.remove('darkon');
    })
    hiyamodal.classList.remove('darkon');
    if (countrynametournaments) {
      document.querySelectorAll('.country-name').forEach(item => item.style.backgroundColor = 'rgb(45, 45, 45)');
      document.querySelectorAll('.country-name').forEach(item => item.style.color = 'white');
      document.querySelectorAll('.country-name').forEach(item => item.style.border = 'none');
      function addAttribute(){
        document.querySelectorAll('.country-name').forEach(item => item.style.backgroundColor = 'rgb(45, 45, 45)');
        document.querySelectorAll('.country-name').forEach(item => item.style.color = 'white');
        document.querySelectorAll('.country-name').forEach(item => item.style.border = 'none');
      };
      window.onload = addAttribute;
    }

    twittertweet.forEach((twittertweet) => {
      twittertweet.setAttribute('data-theme", 'light');
    })

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
