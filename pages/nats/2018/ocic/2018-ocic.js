const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');
// https://limitlesstcg.com/tournaments/150
let masters = [
  {
    firstName: 'Tord Reklev',
    flag: '../../../../assets/flags/norway.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/gardevoir.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Joe Ruettiger',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
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
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/gardevoir.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'William Azevedo',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
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
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
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
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Corey Godfrey',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/ho-oh.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Frank Percic',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Roland Allen',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/hoopa-unbound.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
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
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Greg Chin',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/golisopod.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
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
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tait Tran',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Benjamin Pham',
    flag: '../../../../assets/flags/netherlands.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/golisopod.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nico Alabas',
    flag: '../../../../assets/flags/germany.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/gardevoir.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ben Anderson',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Huy Nguyen',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Magnus Kalland',
    flag: '../../../../assets/flags/norway.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/gardevoir.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Matthew Burris',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/golisopod.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Yong Liang Yap',
    flag: '../../../../assets/flags/singapore.png',
    sprite1: '../../../../assets/sprites/tapu-bulu.png',
    sprite2: '../../../../assets/sprites/vikavolt.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Malik Zaihan',
    flag: '../../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../../assets/sprites/tapu-bulu.png',
    sprite2: '../../../../assets/sprites/vikavolt.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Perry Lim',
    flag: '../../../../assets/flags/singapore.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Keng Fai Lee',
    flag: '../../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
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
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
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
    sprite2: '../../../../assets/sprites/volcanion.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Michael Pramawat',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Naomi Murn',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
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
    sprite1: '../../../../assets/sprites/tapu-bulu.png',
    sprite2: '../../../../assets/sprites/vikavolt.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
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
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/gardevoir.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Bodhi Cutler',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Zach Lesage',
    flag: '../../../../assets/flags/canada.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Shane Quinn',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/tapu-bulu.png',
    sprite2: '../../../../assets/sprites/vikavolt.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Reuben Fong',
    flag: '../../../../assets/flags/singapore.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/volcanion.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Rahul Reddy',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Keith Yong',
    flag: '../../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tomas Just',
    flag: '../../../../assets/flags/czech-republic.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Clifton Goh',
    flag: '../../../../assets/flags/singapore.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/golisopod.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Eric Si',
    flag: '../../../../assets/flags/singapore.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/gardevoir.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Mitch Knuckey',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Christopher Schemanske',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Aaron Van Der Kolk',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/tapu-bulu.png',
    sprite2: '../../../../assets/sprites/vikavolt.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Myles Blasonato',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Daniel Altavilla',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ryan Bielak',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Marc Lutz',
    flag: '../../../../assets/flags/germany.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nicholas Hong',
    flag: '../../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../../assets/sprites/tapu-bulu.png',
    sprite2: '../../../../assets/sprites/vikavolt.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ryan Sabelhaus',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Luke McMahon',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/gardevoir.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Corey Munro',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Dominic Chow',
    flag: '../../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/golisopod.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Robin Schulz',
    flag: '../../../../assets/flags/germany.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/gardevoir.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Otavio Gouveia',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Shane Chee',
    flag: '../../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/golisopod.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Joshua Bradley',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/greninja.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Igor Costa',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Shaun Leong',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/gardevoir.png',
    sprite2: '../../../../assets/sprites/sylveon.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Sam Chen',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Brendon Schofield',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/hyphen.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Paul Coletta',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/golisopod.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Henry Brand',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Shaun Murphy',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/volcanion.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jing Jun Wong',
    flag: '../../../../assets/flags/hong-kong.png',
    sprite1: '../../../../assets/sprites/gardevoir.png',
    sprite2: '../../../../assets/sprites/sylveon.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
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
    sprite1: '../../../../assets/sprites/gardevoir.png',
    sprite2: '../../../../assets/sprites/sylveon.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Angus Johnson',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/golisopod.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
]

// www.pokemon.com/us/play-pokemon/internationals/2019/oceania/tcg-junior

let seniors = [
  {
    firstName: 'Connor Pedersen',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/espeon.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Magnus Pedersen',
    flag: '../../../../assets/flags/denmark.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/xerneas-active.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Brennan Kamerman',
    flag: '../../../../assets/flags/netherlands.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/greninja.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nicholas Apostolov',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/golisopod.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Zi Xing Chiew',
    flag: '../../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../../assets/sprites/tapu-bulu.png',
    sprite2: '../../../../assets/sprites/vikavolt.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Preston Ellis',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/greninja.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Piper Lepine',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Cohen Grimshaw',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/wishiwashi-school.png',
    sprite2: '../../../../assets/sprites/hoopa-unbound.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
]

// www.pokemon.com/us/play-pokemon/internationals/2019/oceania/tcg-junior
let juniors = [
  {
    firstName: 'Sebastian Enriquez',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Bodhi Robinson',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kevin Sun',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Mia Sun',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Max Kunde',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/golisopod.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Soenke Ringel',
    flag: '../../../../assets/flags/germany.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Alex Blong',
    flag: '../../../../assets/flags/new-zealand.png',
    sprite1: '../../../../assets/sprites/tapu-bulu.png',
    sprite2: '../../../../assets/sprites/vikavolt.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Daniel Rosas',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
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
