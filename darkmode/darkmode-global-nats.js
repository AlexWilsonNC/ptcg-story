let darkMode = localStorage.getItem('darkMode');

const toggle = document.getElementById('toggle');
const topnavr = document.getElementById('top-navr');
const menu = document.getElementById('menu');
const menuToggle = document.getElementById('menuToggle');
const navleftr = document.getElementById('nav-leftr');
const navrightr = document.getElementById('nav-rightr');
 
const dropitdown2 = document.querySelector('.drop-it-down2');

const countrytxt2 = document.querySelectorAll('.country-txt2');
const countrycontent = document.querySelectorAll('.country-content');

// const mastersol = document.querySelectorAll('.uk-masters-ol');
// const seniorsol = document.querySelectorAll('.ten-ol');
// const juniorsol = document.querySelectorAll('.uk-juniors-ol');
// const fiveol = document.querySelectorAll('.five-ol');

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

  countrytxt2.forEach((countrytxt2) => {
    countrytxt2.classList.add('darkon');
  })
  countrycontent.forEach((countrycontent) => {
    countrycontent.classList.add('darkon');
  })

  // if (mastersol) {
  //   mastersol.forEach((mastersol) => {
  //     mastersol.classList.add('darkon');
  //   })
  // }
  // if (seniorsol) {
  //   seniorsol.forEach((seniorsol) => {
  //     seniorsol.classList.add('darkon');
  //   })
  // }
  // if (juniorsol) {
  //   juniorsol.forEach((juniorsol) => {
  //     juniorsol.classList.add('darkon');
  //   })
  // }
  // if (fiveol) {
  //   fiveol.forEach((fiveol) => {
  //     fiveol.classList.add('darkon');
  //   })
  // }

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


  countrytxt2.forEach((countrytxt2) => {
    countrytxt2.classList.remove('darkon');
  })
  countrycontent.forEach((countrycontent) => {
    countrycontent.classList.remove('darkon');
  })
  
  // if (mastersol) {
  //   mastersol.forEach((mastersol) => {
  //     mastersol.classList.remove('darkon');
  //   })
  // }
  // if (seniorsol) {
  //   seniorsol.forEach((seniorsol) => {
  //     seniorsol.classList.remove('darkon');
  //   })
  // }
  // if (juniorsol) {
  //   juniorsol.forEach((juniorsol) => {
  //     juniorsol.classList.remove('darkon');
  //   })
  // }
  // if (fiveol) {
  //   fiveol.forEach((fiveol) => {
  //     fiveol.classList.remove('darkon');
  //   })
  // }

  localStorage.setItem('darkMode", null);
};

if (darkMode === 'enabled') {
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
