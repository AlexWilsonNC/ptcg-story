let darkMode = localStorage.getItem('darkMode');

const toggle = document.getElementById('toggle');
const indicator = document.querySelector('.indicator');
const topnavr = document.getElementById('top-navr');
const menu = document.getElementById('menu');
const menuToggle = document.getElementById('menuToggle');
const navleftr = document.getElementById('nav-leftr');
const upcomingeventstable = document.querySelectorAll('.upcoming-events-table');
const featuredheaders = document.querySelectorAll('.featured-headers');
const navrightr = document.getElementById('nav-rightr');
const latestppr = document.querySelector('.latest-ppr');
 
const sortevents = document.querySelectorAll('.sort-events');
const countrynametournaments = document.querySelectorAll('.country-name-tournaments');
const dropitdown2 = document.querySelector('.drop-it-down2');

const enableDarkMode = () => {
    document.body.classList.add('darkon');
    toggle.classList.add('darkon');
    topnavr.classList.add('darkon');
    menu.classList.add('darkon');
    menuToggle.classList.add('darkon');
    navleftr.classList.add('darkon');
    navrightr.classList.add('darkon');
    if (latestppr) {
      latestppr.classList.add('darkon');
    }
    // dropitdown1.classList.add('darkon');
    dropitdown2.classList.add('darkon');
    if (sortevents) {
      sortevents.forEach((sortevents) => {
        sortevents.classList.add('darkon');
      })   
    }
    if (countrynametournaments) {
      countrynametournaments.forEach((countrynametournaments) => {
        countrynametournaments.classList.add('darkon');
      })   
    }
     featuredheaders.forEach((featuredheaders) => {
      featuredheaders.classList.add('darkon');
    })
     upcomingeventstable.forEach((upcomingeventstable) => {
      upcomingeventstable.classList.add('darkon');
    })

    document.querySelectorAll('[src="../assets/flags/globe.png"]').forEach(item => item.setAttribute('src", '../assets/flags/globe-dark.png'));
    function addAttribute(){
      document.querySelectorAll('[src="../assets/flags/globe.png"]').forEach(item => item.setAttribute('src", '../assets/flags/globe-dark.png'));
    };
    window.onload = addAttribute;

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
    if (sortevents) {
      sortevents.forEach((sortevents) => {
        sortevents.classList.remove('darkon');
      })   
    }
    if (countrynametournaments) {
      countrynametournaments.forEach((countrynametournaments) => {
        countrynametournaments.classList.remove('darkon');
      })   
    }
    if (latestppr) {
      latestppr.classList.remove('darkon');
    }
    featuredheaders.forEach((featuredheaders) => {
      featuredheaders.classList.remove('darkon');
    })
    upcomingeventstable.forEach((upcomingeventstable) => {
      upcomingeventstable.classList.remove('darkon');
    })

    document.querySelectorAll('[src="../assets/flags/globe-dark.png"]').forEach(item => item.setAttribute('src", '../assets/flags/globe.png'));
    function addAttribute(){
      document.querySelectorAll('[src="../assets/flags/globe-dark.png"]').forEach(item => item.setAttribute('src", '../assets/flags/globe.png'));
    };
    window.onload = addAttribute;

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
