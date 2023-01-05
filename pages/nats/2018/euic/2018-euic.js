const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Tord Reklev',
    flag: '../../../../assets/flags/norway.png',
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
    firstName: 'Zakary Krekeler',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/silvally.png',
    sprite2: '../../../../assets/sprites/registeel.png',
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
    firstName: 'Michael Long',
    flag: '../../../../assets/flags/canada.png',
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
    firstName: 'Teodor Skjæveland',
    flag: '../../../../assets/flags/norway.png',
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
    firstName: 'Fredrik Wold',
    flag: '../../../../assets/flags/norway.png',
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
    firstName: 'Eemeli Reijonen',
    flag: '../../../../assets/flags/finland.png',
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
    firstName: 'Magnus Kalland',
    flag: '../../../../assets/flags/norway.png',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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

let seniors = [
  {
    firstName: 'Owyn Kamerman',
    flag: '../../../../assets/flags/netherlands.png',
    sprite1: '../../../../assets/sprites/golisopod.png',
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
    firstName: 'Connor Pedersen',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/genesect.png',
    sprite2: '../../../../assets/sprites/registeel.png',
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
    firstName: 'Raymond Long',
    flag: '../../../../assets/flags/canada.png',
    sprite1: '../../../../assets/sprites/metagross.png',
    sprite2: '../../../../assets/sprites/solgaleo.png',
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
    firstName: 'William Wallace',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/tapu-koko.png',
    sprite2: '../../../../assets/sprites/meowstic.png',
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
    firstName: 'Stan J-Leonard',
    flag: '../../../../assets/flags/uk.png',
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
    firstName: 'Brady Guy',
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
    firstName: 'Julius Mo Krag',
    flag: '../../../../assets/flags/denmark.png',
    sprite1: '../../../../assets/sprites/volcanion.png',
    sprite2: '../../../../assets/sprites/turtonator.png',
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

let juniors = [
  {
    firstName: 'Daniel Rosas',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/gardevoir.png',
    list: '../../../../assets/list-icon.png',
    type: 'fairy',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17/gardevoir-gx.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/gallade.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/kirlia.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/ralts-kiss.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/octillery.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/vulpix-alolan.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/n.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/brigette.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/rare-candy-sum.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/max-potion.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/super-rod.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-fairy.png',
        numImg: '../../../../assets/07.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/dce.png',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Christopher Kaas',
    flag: '../../../../assets/flags/denmark.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/gardevoir.png',
    list: '../../../../assets/list-icon.png',
    type: 'fairy',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17/gardevoir-gx.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/gallade.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/kirlia.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/ralts-kiss.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/octillery.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/remoraid-wild-river.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/diancie.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/vulpix-alolan.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/n.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/acerola.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/brigette.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/rare-candy-sum.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/super-rod.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/float-stone.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-fairy.png',
        numImg: '../../../../assets/09.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/dce.png',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Maxence Feuillard',
    flag: '../../../../assets/flags/france.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/golisopod.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17/zoroark-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/zoroark.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/zorua-whiny-voice.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/zorua-bkt.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/golisopod-gx.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/wimpod.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-flying-flip.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/espeon-ex.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/giratina.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/n.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/acerola.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/brigette.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/choice-band.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/float-stone.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-grass.png',
        numImg: '../../../../assets/07.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/dce.png',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Joao Penteado',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/gardevoir.png',
    sprite2: '../../../../assets/sprites/sylveon.png',
    list: '../../../../assets/list-icon.png',
    type: 'fairy',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17/gardevoir-gx.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/gallade.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/kirlia-psychic.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/ralts-kiss.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/sylveon-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/eevee.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/oranguru.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/n.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/brigette.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/max-potion.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/rare-candy-sum.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/super-rod.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/float-stone.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-fairy.png',
        numImg: '../../../../assets/08.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/dce.png',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kaya Lichtleitner',
    flag: '../../../../assets/flags/germany.png',
    sprite1: '../../../../assets/sprites/golisopod.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    list: '../../../../assets/list-icon.png',
    type: 'grass',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17/golisopod-gx.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/wimpod.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/garbodor-trashalanche.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/buzzwole-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/celesteela-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/n.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/acerola.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/brigette.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/heavy-ball.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/choice-band.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/float-stone.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-grass.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-rainbow.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/dce.png',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Walker Halliburton',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/registeel.png',
    sprite2: '../../../../assets/sprites/scizor.png',
    list: '../../../../assets/list-icon.png',
    type: 'metal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17/registeel.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/celesteela-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/scizor-ex.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/kartana-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/drampa-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/mew.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/cobalion.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/dhelmise.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/oranguru.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/n.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/lillie.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/switch.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/super-rod.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/choice-band.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/float-stone.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-metal.png',
        numImg: '../../../../assets/10.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/dce.png',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Mariano Franco',
    flag: '../../../../assets/flags/italy.png',
    sprite1: '../../../../assets/sprites/gardevoir.png',
    sprite2: '../../../../assets/sprites/xerneas-active.png',
    list: '../../../../assets/list-icon.png',
    type: 'fairy',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17/gardevoir-gx.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/gallade.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/kirlia.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/ralts-kiss.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/xerneas-break.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/xerneas-sts.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/octillery.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/remoraid-wild-river.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/espeon-ex.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/n.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/brigette.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/acerola.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/fisherman.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/rare-candy-sum.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/evosoda.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/rescue-stretcher.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/fairy-garden.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-fairy.png',
        numImg: '../../../../assets/08.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/dce.png',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Krystal Florendo',
    flag: '../../../../assets/flags/canada.png',
    sprite1: '../../../../assets/sprites/gardevoir.png',
    sprite2: '../../../../assets/sprites/sylveon.png',
    list: '../../../../assets/list-icon.png',
    type: 'fairy',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17/gardevoir-gx.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/gallade.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/kirlia.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/ralts-kiss.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/sylveon-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/eevee.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/octillery.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/mr-mime-fairy.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/n.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/brigette.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/acerola.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/rare-candy-sum.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/super-rod.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/float-stone.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-fairy.png',
        numImg: '../../../../assets/08.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/dce.png',
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
