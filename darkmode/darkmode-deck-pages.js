let darkMode = localStorage.getItem('darkMode');

const toggle = document.getElementById('toggle');
const indicator = document.querySelector('.indicator');
const topnavr = document.getElementById('top-navr');
const menu = document.getElementById('menu');
const menuToggle = document.getElementById('menuToggle');
const navleftr = document.getElementById('nav-leftr');
const navrightr = document.getElementById('nav-rightr');
 
const dropitdown2 = document.querySelector('.drop-it-down2');

const toperaselector = document.querySelector('.top-era-selector');
const topformatgraphic = document.querySelector('.top-format-graphic');
const decksmain = document.querySelector('.decks-main');
const eratocbox = document.querySelector('.era-toc-box');
const scrolltopbtn = document.querySelector('.scroll-top-btn');
const format = document.querySelectorAll('.format');
const deckbox = document.querySelectorAll('.deck-box');
const deckdescription = document.querySelectorAll('.deck-description');
const meep = document.querySelectorAll(".right-vs-granbull, .left-vs-kyurem-vmax, .right-vs-giratina-vstar, .left-vs-dark-blastoise, .right-vs-typhlosion, .left-vs-mewtwo-ex, .right-vs-black-kyurem, .left-vs-arcanine, .right-vs-crobat, .left-vs-archeops-2022, .right-vs-lugia-vstar, .right-vs-prigroudon, .right-vs-sableye1, .left-vs-radiant-zard, .left-vs-donphan-n1, .left-vs-laser, .left-vs-vespiquen, .left-vs-terrakion, .right-vs-thundurus, .left-vs-gengarbabty, .right-vs-dusknoir, .right-vs-arceus-lvx, .right-vs-lucario, .left-vs-emboar-ltr, .right-vs-meloetta, .right-vs-victini, .left-vs-mewtwo-movie, .right-vs-wigglytuff, .left-vs-gallade, .right-vs-gardevoir, .left-vs-magmortar, .right-vs-uxie, .left-vs-weavile, .right-vs-darkrai-lvx, .left-vs-torterra, .right-vs-jolteon-star, .left-vs-metaggross, .right-vs-dragonite, .left-vs-lugia, .right-vs-blastoise-ex, .left-vs-ludicolo, .right-vs-dark-ttar, .left-vs-salamence, .right-vs-ampharos, .left-vs-mew-p, .right-vs-n, .left-vs-magnezone, .left-vs-yanmega, .left-vs-blastoise, .right-vs-reshiram, .left-vs-blaziken, .right-vs-groudon, .left-vs-mew-ex, .right-vs-rayquaza-star, .left-vs-absol, .right-vs-bannete, .left-vs-scyther, .left-vs-gardey, .right-vs-blastoise, .left-vs-hitmonchan, .right-vs-electabuzz, .left-vs-dark-vileplume, .right-vs-muk, .left-vs-mewtwo-promo2, .right-vs-rocket-zapdos, .left-vs-rocket-gyarados, .right-vs-erika-venusaur, .right-vs-slowking, .left-vs-cleffa, .right-vs-feral, .left-vs-entei, .right-vs-scizor, .left-vs-zard, .right-vs-kingrda, .left-vs-jirachi-ex, .right-vs-landorus, .left-vs-claydol, .right-vs-azelf, .left-vs-flareon, .right-vs-flygon, .left-vs-steelix, .right-vs-dark-dragonite, .left-vs-kyurem, .right-vs-lugia-ex, .left-vs-accelgor, .left-vs-emboar, .right-vs-rayquaza-ex, .right-vs-sableye, .right-vs-entei-suicune, .left-vs-palkia-vstar, .right-vs-flying-pikachu, .left-vs-rs-urshifu, .right-vs-arceus-vstar, .left-vs-mew-vmax, .right-vs-gengar-vmax, .left-vs-buzzwole, .right-vs-lele, .right-vs-yveltal-ex-standard, .left-vs-trump-card, .right-vs-exeggutor, .left-vs-radiant-grninja, .right-vs-m2vunion, .left-vs-gardevoir-gx, .right-vs-espeon, .right-vs-gardey-sylveon, .left-vs-audino, .right-vs-manaphy, .left-vs-palkialvx, .left-vs-flygon, .right-vs-infernapelvx, .right-vs-machamp, .left-vs-ir-caly, .right-vs-sr-caly, .right-vs-zacian-v, .left-vs-pikarom, .right-vs-adp, .left-vs-lucmetal, .left-vs-mewthree, .right-vs-eternatus, .right-vs-blacephalon-baby, .left-vs-tinachomp, .right-vs-malamar, .right-vs-oranguru, .right-vs-reshizard, .left-vs-zoroark, .left-vs-reshizard, .right-vs-lycanroc, .left-vs-necrozma, .right-vs-rayquaza-gx, .left-vs-blacephalon-gx, .left-vs-tapu-bulu, .left-vs-inteleon, .right-vs-buzzwole-gx, .left-vs-golisopod, .right-vs-silvally, .left-vs-drampa, .right-vs-volcanion, .left-vs-decidueye, .right-vs-alolan-ninetales, .left-vs-vileplume, .right-vs-mega-mewtwo, .left-vs-darkrai-bkp, .right-vs-vespiquen, .left-vs-greninja, .right-vs-giratina-block, .left-vs-joltik, .right-vs-seismitoad, .right-vs-garbodor-ltr, .left-vs-donphan, .right-vs-dialga-lvx, .left-vs-gyarados, .right-vs-gengar-lvx, .left-vs-sableye, .right-vs-garchomp, .left-vs-umbreon-vmax, .right-vs-jolteon-vmax, .left-vs-dusknoir, .right-vs-pyroar, .left-vs-zekrom, .left-vs-vileplume-hgss, .right-vs-luxray, .right-vs-trashalanche, .left-vs-kyurem, .right-vs-accelgor, .left-vs-tornadus, .right-vs-celebi, .left-vs-wailord, .right-vs-shaymin-ros, .left-vs-jirachi-prism, .left-vs-manectric, .right-vs-dragapult-vmax, .right-vs-trev-standard, .right-vs-mewtwo-ex, .left-vs-keldeo-ex, .left-vs-genesect-ex, .right-vs-dragapult-vmax, .left-vs-virizion-ex, .right-vs-aromatisse, .right-vs-darkrai-cloak, .left-vs-feraligatr-prime, .right-vs-gengar-prime, .left-vs-jirachi-d, .right-vs-admin-d, .left-vs-electrode-d, .right-vs-stantler-d, .right-vs-smeargle");


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

    toperaselector.classList.add('darkon');
    topformatgraphic.classList.add('darkon');
    decksmain.classList.add('darkon');
    eratocbox.classList.add('darkon');
    if (scrolltopbtn) {
      scrolltopbtn.classList.add('darkon');
    }
    format.forEach((format) => {
      format.classList.add('darkon');
    })
    deckbox.forEach((deckbox) => {
      deckbox.classList.add('darkon');
    })
    deckdescription.forEach((deckdescription) => {
      deckdescription.classList.add('darkon');
    })
    meep.forEach((meep) => {
      meep.classList.add('darkon');
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

    toperaselector.classList.remove('darkon');
    topformatgraphic.classList.remove('darkon');
    decksmain.classList.remove('darkon');
    if (scrolltopbtn) {
      scrolltopbtn.classList.remove('darkon');
    }
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
    meep.forEach((meep) => {
      meep.classList.remove('darkon');
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
