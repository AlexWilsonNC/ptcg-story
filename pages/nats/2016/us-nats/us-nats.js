const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Nick Robinson',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/joltik.png',
    sprite2: '../../../../assets/sprites/vespiquen.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Marcos Garcia',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/seismitoad.png',
    sprite2: '../../../../assets/sprites/giratina-origin.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Paul Johnston',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/seismitoad.png',
    sprite2: '../../../../assets/sprites/manaphy.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Liam Williams',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/darkrai.png',
    sprite2: '../../../../assets/sprites/giratina-origin.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Chris Siakala',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/joltik.png',
    sprite2: '../../../../assets/sprites/pumpkaboo.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Michael Bergerac',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/trevenant.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jamie DePamphilis',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/trevenant.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Fred Hoban',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/vespiquen.png',
    sprite2: '../../../../assets/sprites/vileplume.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kolton Day',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/joltik.png',
    sprite2: '../../../../assets/sprites/pumpkaboo.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Russell LaParre',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/seismitoad.png',
    sprite2: '../../../../assets/sprites/manaphy.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Sorina Radu',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/darkrai.png',
    sprite2: '../../../../assets/sprites/giratina-origin.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jeremy Gibson',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/joltik.png',
    sprite2: '../../../../assets/sprites/pumpkaboo.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Steven Singer',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/trevenant.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jimmy Pendarvis',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/seismitoad.png',
    sprite2: '../../../../assets/sprites/manaphy.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Daniel Lynch',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/seismitoad.png',
    sprite2: '../../../../assets/sprites/crobat.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kian Amini',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/joltik.png',
    sprite2: '../../../../assets/sprites/pumpkaboo.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeee',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Brady Bourgeois',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/seismitoad.png',
    sprite2: '../../../../assets/sprites/giratina-origin.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nolan Wilson',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/manectric-mega.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Patrick Martinez',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/joltik.png',
    sprite2: '../../../../assets/sprites/vespiquen.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Joe Hebert',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/joltik.png',
    sprite2: '../../../../assets/sprites/vespiquen.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ryan Billings',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/vespiquen.png',
    sprite2: '../../../../assets/sprites/vileplume.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Calvin Connor',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/rayquaza-mega.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Alex Bobenrieth',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/seismitoad.png',
    sprite2: '../../../../assets/sprites/manaphy.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ethan Colborn',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/joltik.png',
    sprite2: '../../../../assets/sprites/vespiquen.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Liam Halliburton',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/darkrai.png',
    sprite2: '../../../../assets/sprites/giratina-origin.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Travis Beckwith',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/bronzong.png',
    sprite2: '../../../../assets/sprites/genesect.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Christian Moreno',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/darkrai.png',
    sprite2: '../../../../assets/sprites/giratina-origin.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Mikah Javier',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/bronzong.png',
    sprite2: '../../../../assets/sprites/genesect.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Alex Marmon',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/manectric-mega.png',
    sprite2: '../../../../assets/sprites/ho-oh.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ethan Moskowitz',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/seismitoad.png',
    sprite2: '../../../../assets/sprites/manaphy.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kyle Inman',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/houndoom.png',
    sprite2: '../../../../assets/sprites/bunnelby.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Isaac Petruski',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/bronzong.png',
    sprite2: '../../../../assets/sprites/genesect.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2010 US Nats";

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

          if (deck.oldCard === true) {
            pokeCard.classList.add('old-card')
          }
          if (deck.oldCard === true) {
            pokeCard.classList.add('radius-card')
          }
          if (deck.exCard === true) {
            pokeCard.classList.add('ex-era-card')
          }
          if (deck.radiusCard === true) {
            pokeCard.classList.add('radius-card')
          }

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2010 US Nats";

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

          if (deck.oldCard === true) {
            pokeCard.classList.add('old-card')
          }
          if (deck.oldCard === true) {
            pokeCard.classList.add('radius-card')
          }
          if (deck.exCard === true) {
            pokeCard.classList.add('ex-era-card')
          }
          if (deck.radiusCard === true) {
            pokeCard.classList.add('radius-card')
          }

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2010 US Nats";

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

          if (deck.oldCard === true) {
            pokeCard.classList.add('old-card')
          }
          if (deck.oldCard === true) {
            pokeCard.classList.add('radius-card')
          }
          if (deck.exCard === true) {
            pokeCard.classList.add('ex-era-card')
          }
          if (deck.radiusCard === true) {
            pokeCard.classList.add('radius-card')
          }

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
