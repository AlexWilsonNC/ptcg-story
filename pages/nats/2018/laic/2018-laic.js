const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');
let masters = [
  {
    firstName: 'Daniel Altavilla',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/oranguru.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nicolas Galaz',
    flag: '../../../../assets/flags/chile.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/granbull.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Clifton Goh',
    flag: '../../../../assets/flags/singapore.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/decidueye.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jonathan Lanciano',
    flag: '../../../../assets/flags/argentina.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/decidueye.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17/zoroark-gx.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/zorua.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/decidueye-gx.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/dartrix.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/rowlet.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/ditto-p.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/cynthia.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/rare-candy.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/nest-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/great-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/timer-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/max-potion.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/devoured-field.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-grass.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/dce.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/boost-energy.png',
        numImg: '../../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Alex Schemanske',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Caleb Gedemer',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/oranguru.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Zach Lesage',
    flag: '../../../../assets/flags/canada.png',
    sprite1: '../../../../assets/sprites/blacephalon.png',
    sprite2: '../../../../assets/sprites/naganadel.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tord Reklev',
    flag: '../../../../assets/flags/norway.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/granbull.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Marcelo Magalhaes',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/rayquaza.png',
    sprite2: '../../../../assets/sprites/vikavolt.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Roberto Coregio Jr',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/glaceon.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ian Robb',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/ninetales-alola.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Robin Schulz',
    flag: '../../../../assets/flags/germany.png',
    sprite1: '../../../../assets/sprites/gardevoir.png',
    sprite2: '../../../../assets/sprites/swampert.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Victor Freitas',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/granbull.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Bruno Lima',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/decidueye.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Eder Soto',
    flag: '../../../../assets/flags/mexico.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/decidueye.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jorge Salas',
    flag: '../../../../assets/flags/chile.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Riley Hulbert',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/oranguru.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Gustavo Wada',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/passimian.png',
    sprite2: '../../../../assets/sprites/tapu-koko.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Joey Ruettiger',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/oranguru.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Miloslav Poslední',
    flag: '../../../../assets/flags/czech-republic.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Damian Riquel',
    flag: '../../../../assets/flags/argentina.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Vitor Lugon',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Lucas Pereira',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/passimian.png',
    sprite2: '../../../../assets/sprites/tapu-koko.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Paulo de Freitas',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Benjamin Ferrel',
    flag: '../../../../assets/flags/chile.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/ninetales-alola.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Vinicius Lopes',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/rayquaza.png',
    sprite2: '../../../../assets/sprites/vikavolt.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Michael Pramawat',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/oranguru.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Dalton Acchetta',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/rayquaza.png',
    sprite2: '../../../../assets/sprites/vikavolt.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ramon Duarte',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/ninetales-alola.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nelson Rodrigues',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/steelix.png',
    sprite2: '../../../../assets/sprites/hoopa-unbound.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nicolas Magliulo',
    flag: '../../../../assets/flags/argentina.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Manuel Jorach',
    flag: '../../../../assets/flags/austria.png',
    sprite1: '../../../../assets/sprites/blacephalon.png',
    sprite2: '../../../../assets/sprites/naganadel.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jimmy Pendarvis',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/oranguru.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Gabriel Massaroth',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/weavile.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Bryan de Vries',
    flag: '../../../../assets/flags/netherlands.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/decidueye.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Gabriel Modesto',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/tapu-koko.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'William Azevedo',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/tapu-koko.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Agustin Campo',
    flag: '../../../../assets/flags/argentina.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/decidueye.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jose Marrero',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tobias Thesing',
    flag: '../../../../assets/flags/germany.png',
    sprite1: '../../../../assets/sprites/gardevoir.png',
    sprite2: '../../../../assets/sprites/swampert.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Felipe Carreno',
    flag: '../../../../assets/flags/chile.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/tapu-koko.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Caio Navarro',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/blacephalon.png',
    sprite2: '../../../../assets/sprites/naganadel.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Bastian Silva',
    flag: '../../../../assets/flags/chile.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Dillon Bussert',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blacephalon.png',
    sprite2: '../../../../assets/sprites/naganadel.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Pedro Ricardo',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/blacephalon.png',
    sprite2: '../../../../assets/sprites/naganadel.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Augusto Lespier',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Fabien Pujol',
    flag: '../../../../assets/flags/france.png',
    sprite1: '../../../../assets/sprites/decidueye.png',
    sprite2: '../../../../assets/sprites/ninetales-alola.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jorge Nieto',
    flag: '../../../../assets/flags/chile.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Rodolfo Jesus',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Thiago Mayer',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Giovanni Peragallo',
    flag: '../../../../assets/flags/chile.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/decidueye.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Sebastian Pastene',
    flag: '../../../../assets/flags/chile.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Pedro Freitas',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/ninetales-alola.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Antonio Jardim',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/tapu-koko.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Renato Christian',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Javier Gamboa',
    flag: '../../../../assets/flags/chile.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/granbull.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ricardo Celebroni',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Felipe Kato',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/regigigas.png',
    sprite2: '../../../../assets/sprites/genesect.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Marcus Silva',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Agustín Pasini',
    flag: '../../../../assets/flags/argentina.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/buzzwole.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Joaquim Postal',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/jumpluff.png',
    sprite2: '../../../../assets/sprites/natu.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Eduardo Storto',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/tapu-koko.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Sebastian Lugo',
    flag: '../../../../assets/flags/argentina.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/granbull.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Julio Crusaro',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/rayquaza.png',
    sprite2: '../../../../assets/sprites/vikavolt.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
]

//www.pokemon.com/us/play-pokemon/internationals/2019/latin-america/tcg-juniors/
let seniors = [
  {
    firstName: 'Christian Moreno',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Daniel Rosas',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blacephalon.png',
    sprite2: '../../../../assets/sprites/naganadel.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Pedro Pertusi',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/decidueye.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Isaiah Bradner',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/ninetales-alola.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Alexandre Sole',
    flag: '../../../../assets/flags/belgium.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/oranguru.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Henrick Martins',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/passimian.png',
    sprite2: '../../../../assets/sprites/tapu-koko.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Evan Smith',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Brady Guy',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Henrique Guarita',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/blacephalon.png',
    sprite2: '../../../../assets/sprites/naganadel.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Pedro Meneses',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/tapu-koko.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Taylor Johnson',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Maxence Feuillard',
    flag: '../../../../assets/flags/france.png',
    sprite1: '../../../../assets/sprites/passimian.png',
    sprite2: '../../../../assets/sprites/tapu-koko.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Noah Donen',
    flag: '../../../../assets/flags/canada.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/marshadow.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Winston Stuteville',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/tapu-koko.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Felipe de Oliveira',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/exeggutor-alola.png',
    sprite2: '../../../../assets/sprites/sceptile.png',
    list: '../../../../assets/list-icon.png',
    type: 'grass',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/alolan-exeggutor.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/exeggcute.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/sceptile.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/grovyle.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/treecko.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/shuckle.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/lurantis.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/fomantis.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/acerola.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/professor-kukui.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/sightseer.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/net-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/rescue-stretcher.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/choice-band.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/shrineofpunush.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-grass.png',
        numImg: '../../../../assets/07.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-fire.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-water.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-fighting.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-psychic.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-fairy.png',
        numImg: '../../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Rasmus Wagner',
    flag: '../../../../assets/flags/denmark.png',
    sprite1: '../../../../assets/sprites/blacephalon.png',
    sprite2: '../../../../assets/sprites/naganadel.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
]

//masters
function displayList(array = []) {
  masterList.innerHTML = '';

  for (let i = 0; i < array.length; i++) {
    let item = array[i];

    let item_element = document.createElement('li');
    item_element.classList.add('player-list-hover');
    let title = document.createElement('li');
    title.classList.add('results-list-item');

    let playerName = document.createElement('div');
    playerName.classList.add('name-n-flag');

    let flagImg = document.createElement('img');
    flagImg.classList.add('flag-size');
    flagImg.setAttribute('src', item.flag);

    let deck = document.createElement('div');
    deck.classList.add('player-deck-icons');

    let firstSprite = document.createElement('img');
    firstSprite.classList.add('sprite');
    firstSprite.setAttribute('src', item.sprite1);
    let secondSprite = document.createElement('img');
    secondSprite.classList.add('sprite');
    secondSprite.classList.add('second-sprite');
    secondSprite.setAttribute('src', item.sprite2);
    let listIcon = document.createElement('img');
    listIcon.classList.add('list-icon');
    listIcon.setAttribute('src', item.list);

    item_element.appendChild(title);
    title.appendChild(playerName);
    playerName.appendChild(flagImg);
    playerName.append(item.firstName);
    title.appendChild(deck);
    deck.appendChild(firstSprite);
    deck.appendChild(secondSprite);
    deck.appendChild(listIcon);

    if (item.list === '../../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2020 LAIC";

        if (item.type == 'psychic') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/psychic-bg.png)";
        } else if (item.type == 'fire') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fire-bg.png)";
        } else if (item.type == 'fairy') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fairy-bg.png)";
        } else if (item.type == 'normal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/normal-bg.png)";
        } else if (item.type == 'lightning') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/lightning-bg.png)";
        } else if (item.type == 'dark') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dark-bg.png)";
        } else if (item.type == 'dragon') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dragon-bg.png)";
        } else if (item.type == 'fighting') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fighting-bg.png)";
        } else if (item.type == 'grass') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/grass-bg.png)";
        } else if (item.type == 'metal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/metal-bg.png)";
        } else if (item.type == 'water') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/water-bg.png)";
        } else {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dark-bg.png)";
        }

        for (let i = 0; i < item.deck.length; i++) {
          let deck = item.deck[i];

          let cardSpace = document.createElement('div');
          cardSpace.classList.add('pokemon-card');

          let pokeCard = document.createElement('img');
          pokeCard.classList.add('pok-card-small')
          pokeCard.setAttribute('src', deck.cardImg);

          let numberCounter = document.createElement('img');
          numberCounter.classList.add('num-1')
          numberCounter.setAttribute('src', deck.numImg);

          cardSpace.appendChild(pokeCard);
          cardSpace.appendChild(numberCounter);
          modalBottom.appendChild(cardSpace);

          modalX.addEventListener('click', () => {
            modal.style.display = 'none';
            behind.style.display = 'none';
            cardSpace.remove();
          })
          behind.addEventListener('click', () => {
            modal.style.display = 'none';
            behind.style.display = 'none';
            cardSpace.remove();
          })
        }
        document.querySelectorAll('.pokemon-card').forEach(card => {
          console.log('here')
          card.addEventListener('click', () => {
            card.querySelector('.pok-card-small').classList.add('large-card');
            document.querySelector('.second-behind-modal').style.display = 'block';
            if (card.querySelector('.pok-card-small').classList.contains('large-card')) {
              document.querySelector('.second-behind-modal').addEventListener('click', () => {
                card.querySelector('.pok-card-small').classList.remove('large-card');
                document.querySelector('.second-behind-modal').style.display = 'none';
              })
            }
          })
        });
      })
    }

    masterList.appendChild(item_element);
  }
}

// seniors
function displayList2(array = []) {
  seniorList.innerHTML = '';

  for (let i = 0; i < array.length; i++) {
    let item = array[i];

    let item_element = document.createElement('li');
    item_element.classList.add('player-list-hover');
    let title = document.createElement('li');
    title.classList.add('results-list-item');

    let playerName = document.createElement('div');
    playerName.classList.add('name-n-flag');

    let flagImg = document.createElement('img');
    flagImg.classList.add('flag-size');
    flagImg.setAttribute('src', item.flag);

    let deck = document.createElement('div');
    deck.classList.add('player-deck-icons');

    let firstSprite = document.createElement('img');
    firstSprite.classList.add('sprite');
    firstSprite.setAttribute('src', item.sprite1);
    let secondSprite = document.createElement('img');
    secondSprite.classList.add('sprite');
    secondSprite.classList.add('second-sprite');
    secondSprite.setAttribute('src', item.sprite2);
    let listIcon = document.createElement('img');
    listIcon.classList.add('list-icon');
    listIcon.setAttribute('src', item.list);

    item_element.appendChild(title);
    title.appendChild(playerName);
    playerName.appendChild(flagImg);
    playerName.append(item.firstName);
    title.appendChild(deck);
    deck.appendChild(firstSprite);
    deck.appendChild(secondSprite);
    deck.appendChild(listIcon);

    if (item.list === '../../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2020 LAIC";

        if (item.type == 'psychic') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/psychic-bg.png)";
        } else if (item.type == 'fire') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fire-bg.png)";
        } else if (item.type == 'fairy') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fairy-bg.png)";
        } else if (item.type == 'normal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/normal-bg.png)";
        } else if (item.type == 'lightning') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/lightning-bg.png)";
        } else if (item.type == 'dark') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dark-bg.png)";
        } else if (item.type == 'dragon') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dragon-bg.png)";
        } else if (item.type == 'fighting') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fighting-bg.png)";
        } else if (item.type == 'grass') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/grass-bg.png)";
        } else if (item.type == 'metal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/metal-bg.png)";
        } else if (item.type == 'water') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/water-bg.png)";
        } else {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dark-bg.png)";
        }

        for (let i = 0; i < item.deck.length; i++) {
          let deck = item.deck[i];

          let cardSpace = document.createElement('div');
          cardSpace.classList.add('pokemon-card');

          let pokeCard = document.createElement('img');
          pokeCard.classList.add('pok-card-small')
          pokeCard.setAttribute('src', deck.cardImg);

          let numberCounter = document.createElement('img');
          numberCounter.classList.add('num-1')
          numberCounter.setAttribute('src', deck.numImg);

          cardSpace.appendChild(pokeCard);
          cardSpace.appendChild(numberCounter);
          modalBottom.appendChild(cardSpace);

          modalX.addEventListener('click', () => {
            modal.style.display = 'none';
            behind.style.display = 'none';
            cardSpace.remove();
          })
          behind.addEventListener('click', () => {
            modal.style.display = 'none';
            behind.style.display = 'none';
            cardSpace.remove();
          })
        }
        document.querySelectorAll('.pokemon-card').forEach(card => {
          console.log('here')
          card.addEventListener('click', () => {
            card.querySelector('.pok-card-small').classList.add('large-card');
            document.querySelector('.second-behind-modal').style.display = 'block';
            if (card.querySelector('.pok-card-small').classList.contains('large-card')) {
              document.querySelector('.second-behind-modal').addEventListener('click', () => {
                card.querySelector('.pok-card-small').classList.remove('large-card');
                document.querySelector('.second-behind-modal').style.display = 'none';
              })
            }
          })
        });
      })
    }
    seniorList.appendChild(item_element);
  }
}

// juniors
function displayList3(array = []) {
  juniorList.innerHTML = '';

  for (let i = 0; i < array.length; i++) {
    let item = array[i];

    let item_element = document.createElement('li');
    item_element.classList.add('player-list-hover');
    let title = document.createElement('li');
    title.classList.add('results-list-item');

    let playerName = document.createElement('div');
    playerName.classList.add('name-n-flag');

    let flagImg = document.createElement('img');
    flagImg.classList.add('flag-size');
    flagImg.setAttribute('src', item.flag);

    let deck = document.createElement('div');
    deck.classList.add('player-deck-icons');

    let firstSprite = document.createElement('img');
    firstSprite.classList.add('sprite');
    firstSprite.setAttribute('src', item.sprite1);
    let secondSprite = document.createElement('img');
    secondSprite.classList.add('sprite');
    secondSprite.classList.add('second-sprite');
    secondSprite.setAttribute('src', item.sprite2);
    let listIcon = document.createElement('img');
    listIcon.classList.add('list-icon');
    listIcon.setAttribute('src', item.list);

    item_element.appendChild(title);
    title.appendChild(playerName);
    playerName.appendChild(flagImg);
    playerName.append(item.firstName);
    title.appendChild(deck);
    deck.appendChild(firstSprite);
    deck.appendChild(secondSprite);
    deck.appendChild(listIcon);

    if (item.list === '../../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2020 LAIC";

        if (item.type == 'psychic') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/psychic-bg.png)";
        } else if (item.type == 'fire') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fire-bg.png)";
        } else if (item.type == 'fairy') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fairy-bg.png)";
        } else if (item.type == 'normal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/normal-bg.png)";
        } else if (item.type == 'lightning') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/lightning-bg.png)";
        } else if (item.type == 'dark') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dark-bg.png)";
        } else if (item.type == 'dragon') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dragon-bg.png)";
        } else if (item.type == 'fighting') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fighting-bg.png)";
        } else if (item.type == 'grass') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/grass-bg.png)";
        } else if (item.type == 'metal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/metal-bg.png)";
        } else if (item.type == 'water') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/water-bg.png)";
        } else {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dark-bg.png)";
        }

        for (let i = 0; i < item.deck.length; i++) {
          let deck = item.deck[i];

          let cardSpace = document.createElement('div');
          cardSpace.classList.add('pokemon-card');

          let pokeCard = document.createElement('img');
          pokeCard.classList.add('pok-card-small')
          pokeCard.setAttribute('src', deck.cardImg);

          let numberCounter = document.createElement('img');
          numberCounter.classList.add('num-1')
          numberCounter.setAttribute('src', deck.numImg);

          cardSpace.appendChild(pokeCard);
          cardSpace.appendChild(numberCounter);
          modalBottom.appendChild(cardSpace);

          modalX.addEventListener('click', () => {
            modal.style.display = 'none';
            behind.style.display = 'none';
            cardSpace.remove();
          })
          behind.addEventListener('click', () => {
            modal.style.display = 'none';
            behind.style.display = 'none';
            cardSpace.remove();
          })
        }
        document.querySelectorAll('.pokemon-card').forEach(card => {
          console.log('here')
          card.addEventListener('click', () => {
            card.querySelector('.pok-card-small').classList.add('large-card');
            document.querySelector('.second-behind-modal').style.display = 'block';
            if (card.querySelector('.pok-card-small').classList.contains('large-card')) {
              document.querySelector('.second-behind-modal').addEventListener('click', () => {
                card.querySelector('.pok-card-small').classList.remove('large-card');
                document.querySelector('.second-behind-modal').style.display = 'none';
              })
            }
          })
        });
      })
    }
    juniorList.appendChild(item_element);
  }
}

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);
displayList2(seniors);
displayList3(juniors);
