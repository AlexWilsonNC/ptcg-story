let darkMode = localStorage.getItem('darkMode');

const toggle = document.getElementById('toggle');
const indicator = document.querySelector('.indicator');
const topnavr = document.getElementById('top-navr');
const menu = document.getElementById('menu');
const menuToggle = document.getElementById('menuToggle');
const navleftr = document.getElementById('nav-leftr');
const featuredheaders = document.querySelectorAll('.featured-headers');
const twittertweet = document.querySelectorAll('.twitter-tweet');
const onemorelink = document.querySelectorAll('.one-more-link');
const sidesection = document.querySelectorAll('.side-section');
const blue = document.querySelectorAll('.blue');
const wrwapped = document.querySelectorAll('.wrapped-feature');
const wrwapped2 = document.querySelectorAll('.wrapped-feature-second-row');
const makemewhite = document.querySelectorAll('.make-me-white');
const navrightr = document.getElementById('nav-rightr');
const upcomingevents = document.querySelector('.upcoming-events');
 
const dropitdown2 = document.querySelector('.drop-it-down2');
const titlehr = document.querySelectorAll('.title-hr');
const bio = document.querySelector('.author-bio');
const h4 = document.querySelector('h4');
const articletable = document.querySelector('.article-table');
const rightitbox = document.querySelectorAll('.right-it-box');
const featuredboxnameanddate = document.querySelectorAll('.featured-box-name-and-date');
const newcolor = document.querySelectorAll('.new-color');
const featuredlink = document.querySelectorAll('.featured-link');

const tbp3 = document.querySelector('.tbp3');
const articletitle = document.querySelectorAll('.article-title');
const articlecontent = document.querySelector('.article-content');

const enableDarkMode = () => {
    document.body.classList.add('darkon');
    toggle.classList.add('darkon');
    topnavr.classList.add('darkon');
    menu.classList.add('darkon');
    menuToggle.classList.add('darkon');
    navleftr.classList.add('darkon');
    if (upcomingevents) {
      upcomingevents.classList.add('darkon');
    }
    if (bio) {
      bio.classList.add('darkon');
    }
    if (rightitbox) {
      rightitbox.forEach((rightitbox) => {
        rightitbox.classList.add('darkon');
      })    
    }
    if (wrwapped) {
      wrwapped.forEach((wrwapped) => {
        wrwapped.classList.add('darkon');
      })    
    }
    if (wrwapped2) {
      wrwapped2.forEach((wrwapped2) => {
        wrwapped2.classList.add('darkon');
      })    
    }
    if (h4) {
      h4.classList.add('darkon');
    }
    if (tbp3) {
      tbp3.classList.add('darkon');
    }
    if (articletable) {
        articletable.classList.add('darkon');
    }
    if (articletitle) {
      articletitle.forEach((articletitle) => {
        articletitle.classList.add('darkon');
      })    
    }
    if (titlehr) {
      titlehr.forEach((titlehr) => {
        titlehr.classList.add('darkon');
      })    
    }
    if (articlecontent) {
      articlecontent.classList.add('darkon');
    }
    if (featuredheaders) {
      featuredheaders.forEach((featuredheaders) => {
        featuredheaders.classList.add('darkon');
      })
    }
    if (makemewhite) {
      makemewhite.forEach((makemewhite) => {
        makemewhite.classList.add('darkon');
      })
    }
    if (sidesection) {
      sidesection.forEach((sidesection) => {
        sidesection.classList.add('darkon');
      })
    }
    if (blue) {
      blue.forEach((blue) => {
        blue.classList.add('darkon');
      })
    }
    if (onemorelink) {
      onemorelink.forEach((onemorelink) => {
        onemorelink.classList.add('darkon');
      })
    }
    if (twittertweet) {
      twittertweet.forEach((twittertweet) => {
        twittertweet.setAttribute('data-theme', 'dark');
      })
    }
    if (featuredboxnameanddate) {
      featuredboxnameanddate.forEach((featuredboxnameanddate) => {
        featuredboxnameanddate.classList.add('darkon');
      })
    }
    if (newcolor) {
      newcolor.forEach((newcolor) => {
        newcolor.classList.add('darkon');
      })
    }
    if (featuredlink) {
      featuredlink.forEach((featuredlink) => {
        featuredlink.classList.add('darkon');
      })
    }
    navrightr.classList.add('darkon');
    // dropitdown1.classList.add('darkon');
    dropitdown2.classList.add('darkon');

    localStorage.setItem('darkMode', 'enabled');
  };
  
  const disableDarkMode = () => {
    document.body.classList.remove('darkon');
    toggle.classList.remove('darkon');
    topnavr.classList.remove('darkon');
    menu.classList.remove('darkon');
    menuToggle.classList.remove('darkon');
    navleftr.classList.remove('darkon');
    if (upcomingevents) {
      upcomingevents.classList.remove('darkon');
    }
    if (bio) {
      bio.classList.remove('darkon');
    }
    if (h4) {
      h4.classList.remove('darkon');
    }
    if (tbp3) {
      tbp3.classList.remove('darkon');
    }
    if (articletable) {
        articletable.classList.remove('darkon');
    }
    if (articletitle) {
      articletitle.forEach((articletitle) => {
        articletitle.classList.remove('darkon');
      })    
    }
    if (wrwapped) {
      wrwapped.forEach((wrwapped) => {
        wrwapped.classList.remove('darkon');
      })    
    }
    if (wrwapped2) {
      wrwapped2.forEach((wrwapped2) => {
        wrwapped2.classList.remove('darkon');
      })    
    }
    if (rightitbox) {
      rightitbox.forEach((rightitbox) => {
        rightitbox.classList.remove('darkon');
      })    
    }
    if (titlehr) {
      titlehr.forEach((titlehr) => {
        titlehr.classList.remove('darkon');
      })    
    }
    if (articlecontent) {
      articlecontent.classList.remove('darkon');
    }
    if (featuredheaders) {
      featuredheaders.forEach((featuredheaders) => {
        featuredheaders.classList.remove('darkon');
      })
    }
    if (makemewhite) {
      makemewhite.forEach((makemewhite) => {
        makemewhite.classList.remove('darkon');
      })
    }
    if (sidesection) {
      sidesection.forEach((sidesection) => {
        sidesection.classList.remove('darkon');
      })
    }
    if (blue) {
      blue.forEach((blue) => {
        blue.classList.remove('darkon');
      })
    }
    if (onemorelink) {
      onemorelink.forEach((onemorelink) => {
        onemorelink.classList.remove('darkon');
      })
    }
    if (featuredboxnameanddate) {
      featuredboxnameanddate.forEach((featuredboxnameanddate) => {
        featuredboxnameanddate.classList.remove('darkon');
      })
    }
    if (newcolor) {
      newcolor.forEach((newcolor) => {
        newcolor.classList.remove('darkon');
      })
    }
    if (twittertweet) {
      twittertweet.forEach((twittertweet) => {
        twittertweet.setAttribute('data-theme', 'light');
      })
    }
    if (featuredlink) {
      featuredlink.forEach((featuredlink) => {
        featuredlink.classList.remove('darkon');
      })
    }
    navrightr.classList.remove('darkon');
    // dropitdown1.classList.remove('darkon');
    dropitdown2.classList.remove('darkon');

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
