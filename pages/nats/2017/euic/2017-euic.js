const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Michael Pramawat',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jacob Lesage',
    flag: '../../../../assets/flags/canada.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Philip Schulz',
    flag: '../../../../assets/flags/germany.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tord Reklev',
    flag: '../../../../assets/flags/norway.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Yee Wei Chun',
    flag: '../../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Grafton Roll',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/greninja.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Pedro Torres',
    flag: '../../../../assets/flags/spain.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/volcanion.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Attar Ricco',
    flag: '../../../../assets/flags/indonesia.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/volcanion.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Alexander Hill',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/vespiquen.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Martin Janouš',
    flag: '../../../../assets/flags/czech-republic.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/houndoom.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jonathan Lanciano',
    flag: '../../../../assets/flags/argentina.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/volcanion.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Drew Kennett',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/greninja.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Frank Diaz',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nicklas Danielsen',
    flag: '../../../../assets/flags/denmark.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/mewtwo-mega-y.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Mikael Jacobs',
    flag: '../../../../assets/flags/norway.png',
    sprite1: '../../../../assets/sprites/gardevoir-mega.png',
    sprite2: '../../../../assets/sprites/xerneas-active.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Javier Gamboa',
    flag: '../../../../assets/flags/chile.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Israel Sosa',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tyler Ninomura',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/jolteon.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jordan Palmer',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Brent Tonisson',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Mees Brenninkmeijer',
    flag: '../../../../assets/flags/netherlands.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/greninja.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Sameer Sangwan',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/mewtwo-mega-y.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Felipe Ponce',
    flag: '../../../../assets/flags/argentina.png',
    sprite1: '../../../../assets/sprites/mewtwo-mega-y.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Steven Mao',
    flag: '../../../../assets/flags/germany.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Laurens Van Brecht',
    flag: '../../../../assets/flags/netherlands.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/vespiquen.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Justin Bokhari',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/greninja.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Krzysztof Lesik',
    flag: '../../../../assets/flags/poland.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/rayquaza-mega.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jesper Eriksen',
    flag: '../../../../assets/flags/denmark.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/xerneas-active.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Miguel Aml',
    flag: '../../../../assets/flags/spain.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/volcanion.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Scot Symonds',
    flag: '../../../../assets/flags/uk.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/gyarados.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tristan Wagner',
    flag: '../../../../assets/flags/netherlands.png',
    sprite1: '../../../../assets/sprites/carbink.png',
    sprite2: '../../../../assets/sprites/vileplume.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Martin Belohlavek',
    flag: '../../../../assets/flags/czech-republic.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/xerneas-active.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nicolas Galaz',
    flag: '../../../../assets/flags/chile.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/hyphen.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Pedro Medina',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/hyphen.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Juan Bravo',
    flag: '../../../../assets/flags/argentina.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/hyphen.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Stephan Nørregård',
    flag: '../../../../assets/flags/denmark.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/hyphen.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Michael Crosby',
    flag: '../../../../assets/flags/uk.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/hyphen.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jose Marrero',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/rayquaza-mega.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Mehdi Hafi',
    flag: '../../../../assets/flags/france.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/greninja.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Benjamin Behrens',
    flag: '../../../../assets/flags/norway.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jimmy Pendarvis',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Damian Riquel',
    flag: '../../../../assets/flags/argentina.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/hyphen.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Gabriel Semedo',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nicolo Castignoli',
    flag: '../../../../assets/flags/italy.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/hyphen.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Adrian Kastelik',
    flag: '../../../../assets/flags/poland.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/hyphen.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jack Culkin',
    flag: '../../../../assets/flags/uk.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/hyphen.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Azul Griego',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Martin Guilbert',
    flag: '../../../../assets/flags/france.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/greninja.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Sammy Sosa',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/greninja.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Connor Finton',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/gardevoir-mega.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Gianluca Cipriano',
    flag: '../../../../assets/flags/italy.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/mewtwo-mega-y.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Mateusz Legierski',
    flag: '../../../../assets/flags/poland.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/hyphen.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Andre Bortoni',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/hyphen.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Takuya Yoneda',
    flag: '../../../../assets/flags/japan.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/xerneas-active.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nathalia Fernandes',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/hyphen.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Samuel Hough',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kim Pobega',
    flag: '../../../../assets/flags/italy.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/xerneas-active.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Gawein Wagner',
    flag: '../../../../assets/flags/netherlands.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/hyphen.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jodie Gledhill',
    flag: '../../../../assets/flags/uk.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Bartosz Bialik',
    flag: '../../../../assets/flags/poland.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/hyphen.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Hanzell Gutierrez',
    flag: '../../../../assets/flags/mexico.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/hyphen.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Gustavo Wada',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/mewtwo-mega-y.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Joe Yeates',
    flag: '../../../../assets/flags/ireland.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/hyphen.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Heddi Brahmi',
    flag: '../../../../assets/flags/france.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Tanner Hurley',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jason Lai',
    flag: '../../../../assets/flags/unknown.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/greninja.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Michael Long',
    flag: '../../../../assets/flags/canada.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kyle Guest',
    flag: '../../../../assets/flags/unknown.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Adam Balela',
    flag: '../../../../assets/flags/unknown.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Christian Moreno',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ángel Torres',
    flag: '../../../../assets/flags/spain.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/volcanion.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jon Eng',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Kaya Lichtleitner',
    flag: '../../../../assets/flags/germany.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Regan Retzloff',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Maxence Feuillard',
    flag: '../../../../assets/flags/france.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/xerneas-active.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Sönke Ringel',
    flag: '../../../../assets/flags/unknown.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/xerneas-active.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Joao Penteado',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/xerneas-active.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Roan Godfrey-Robbins',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tobias Strømdahl',
    flag: '../../../../assets/flags/norway.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/gardevoir-mega.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'William Wallace',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
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
        // document.querySelectorAll('.pokemon-card').forEach(card => {
        //   console.log('here')
        //   card.addEventListener('click', () => {
        //       card.querySelector('.pok-card-small').classList.add('large-card');
        //       document.querySelector('.second-behind-modal').style.display = 'block';
        //       if (card.querySelector('.pok-card-small').classList.contains('large-card')) {
        //         document.querySelector('.second-behind-modal').addEventListener('click', () => {
        //               card.querySelector('.pok-card-small').classList.remove('large-card');
        //               document.querySelector('.second-behind-modal').style.display = 'none';
        //           })
        //       }
        //   })
        // });
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
        // document.querySelectorAll('.pokemon-card').forEach(card => {
        //   console.log('here')
        //   card.addEventListener('click', () => {
        //       card.querySelector('.pok-card-small').classList.add('large-card');
        //       document.querySelector('.second-behind-modal').style.display = 'block';
        //       if (card.querySelector('.pok-card-small').classList.contains('large-card')) {
        //         document.querySelector('.second-behind-modal').addEventListener('click', () => {
        //               card.querySelector('.pok-card-small').classList.remove('large-card');
        //               document.querySelector('.second-behind-modal').style.display = 'none';
        //           })
        //       }
        //   })
        // });
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
        // document.querySelectorAll('.pokemon-card').forEach(card => {
        //   console.log('here')
        //   card.addEventListener('click', () => {
        //       card.querySelector('.pok-card-small').classList.add('large-card');
        //       document.querySelector('.second-behind-modal').style.display = 'block';
        //       if (card.querySelector('.pok-card-small').classList.contains('large-card')) {
        //         document.querySelector('.second-behind-modal').addEventListener('click', () => {
        //               card.querySelector('.pok-card-small').classList.remove('large-card');
        //               document.querySelector('.second-behind-modal').style.display = 'none';
        //           })
        //       }
        //   })
        // });
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
