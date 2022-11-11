const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Stéphane Ivanoff',
    flag: '../../../../assets/flags/france.png',
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
    firstName: 'Tord Reklev',
    flag: '../../../../assets/flags/norway.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/zoroark.png',
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
    firstName: 'Adam Hawkins',
    flag: '../../../../assets/flags/uk.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma.png',
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
    firstName: 'Ryan Antonucci',
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
    firstName: 'Edward Kuang',
    flag: '../../../../assets/flags/canada.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma.png',
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
    firstName: 'Fabien Pujol',
    flag: '../../../../assets/flags/france.png',
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
    firstName: 'Aaron Tarbell',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/yveltal.png',
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
    firstName: 'Gustavo Wada',
    flag: '../../../../assets/flags/brazil.png',
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
    firstName: 'Matthew Padget',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma.png',
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
    firstName: 'Dustin Zimmerman',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/yveltal.png',
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
    firstName: 'Ahmed Ali',
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
    firstName: 'Christopher Venier',
    flag: '../../../../assets/flags/canada.png',
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
    firstName: 'Kyle Lesniewicz',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
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
    firstName: 'Nikolas Campbell',
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
    firstName: 'Mark Dizon',
    flag: '../../../../assets/flags/canada.png',
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
    firstName: 'William Azevedo',
    flag: '../../../../assets/flags/brazil.png',
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
    firstName: 'Tran Nguyen',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/garbodor.png',
    sprite2: '../../../../assets/sprites/buzzwole.png',
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
    firstName: 'Michael Laundrie',
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
    firstName: 'Cody Graham',
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
    firstName: 'Philip Schulz',
    flag: '../../../../assets/flags/germany.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/zoroark.png',
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
    firstName: 'Dalton Didelot',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma-ultra.png',
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
    firstName: 'Alexander Hill',
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
    firstName: 'Boston Moreland',
    flag: '../../../../assets/flags/usa.png',
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
    firstName: 'John Kettler',
    flag: '../../../../assets/flags/usa.png',
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
    firstName: 'Nick Capobianco',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/lugia-shiny.png',
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
    firstName: 'Brian Miller',
    flag: '../../../../assets/flags/usa.png',
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
    firstName: 'Lance Bradshaw',
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
    firstName: 'Timothy Eberhardt',
    flag: '../../../../assets/flags/usa.png',
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
    firstName: 'Clifton Goh',
    flag: '../../../../assets/flags/singapore.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/yveltal.png',
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
    firstName: 'Eli Ottaviano',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/necrozma-dusk-mane.png',
    sprite2: '../../../../assets/sprites/magnezone.png',
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
    firstName: 'Nathan Brower',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma-ultra.png',
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
    firstName: 'Ian Robb',
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
    firstName: 'Ian Buck',
    flag: '../../../../assets/flags/usa.png',
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
    firstName: 'David Suddaby',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/buzzwole.png',
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
    firstName: 'Emre Erel',
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
    firstName: 'Wesley Hollenberg',
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
    firstName: 'Samuel Hough',
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
    firstName: 'Igor Costa',
    flag: '../../../../assets/flags/usa.png',
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
    firstName: 'Sean Kavanaugh',
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
    firstName: 'Ramon Miranda',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma-ultra.png',
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
    firstName: 'Riley Hulbert',
    flag: '../../../../assets/flags/usa.png',
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
    firstName: 'Zach Elliott',
    flag: '../../../../assets/flags/usa.png',
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
    firstName: 'Hunter Harless',
    flag: '../../../../assets/flags/usa.png',
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
    firstName: 'Gibson Archer',
    flag: '../../../../assets/flags/usa.png',
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
    firstName: 'Riley Pazdera',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma.png',
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
    firstName: 'Sam Liggett',
    flag: '../../../../assets/flags/usa.png',
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
    firstName: 'Bodhi Tracy',
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
    firstName: 'Joshua Bickel',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma.png',
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
    firstName: 'Nolan Wilson',
    flag: '../../../../assets/flags/usa.png',
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
    firstName: 'Christian Franco',
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
    firstName: 'James Arnold',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/yveltal.png',
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
    firstName: 'Shane Conley',
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
    firstName: 'Kyle Louro',
    flag: '../../../../assets/flags/canada.png',
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
    firstName: 'Andrew Scott',
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
    firstName: 'Jeremy Gibson',
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
    firstName: 'Jason Schmidt',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/lapras.png',
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
    firstName: 'Alejo Iturbe',
    flag: '../../../../assets/flags/argentina.png',
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
    firstName: 'Dakota Gillanders',
    flag: '../../../../assets/flags/canada.png',
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
    firstName: 'Benjamin Potter',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/lucario.png',
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
    firstName: 'Jackson Ford',
    flag: '../../../../assets/flags/canada.png',
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
    firstName: 'Isaiah Bradner',
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
    firstName: 'Adam Omarali',
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
    firstName: 'Sam Sullivan',
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
    firstName: 'Abijah Jong',
    flag: '../../../../assets/flags/canada.png',
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
    firstName: 'Tanner Hurley',
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
    firstName: 'Leandro Almeida',
    flag: '../../../../assets/flags/brazil.png',
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
    firstName: 'Hasan Kunukcu',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
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
        cardImg: '../../../../assets/cards/2018-17/garbodor-trashalanche.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/mew-ex.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/kartana-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/necrozma-dusk-mane.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/mewtwo.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/n.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/cynthia.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/brigette.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/mallow.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/acerola.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/evosoda.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/enhanced-hammer.png',
        numImg: '../../../../assets/01.png'
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
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/dce.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/unit-energy-lm.png',
        numImg: '../../../../assets/03.png'
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Kaya Lichtleitner',
    flag: '../../../../assets/flags/germany.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
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
        cardImg: '../../../../assets/cards/2018-17/lycanroc-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/rockruff-surprise-attack.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/buzzwole.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/mew-ex.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/mewtwo.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/brigette.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/n.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/cynthia.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/mallow.png',
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
        cardImg: '../../../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/timer-ball.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/enhanced-hammer.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/multi-switch.png',
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
        cardImg: '../../../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/dce.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/strong-energy.png',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Benny Billinger',
    flag: '../../../../assets/flags/canada.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17/zoroark-gx.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/zorua.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/garbodor-trashalanche.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/mewtwo.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/n.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/cynthia.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/brigette.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/mallow.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/evosoda.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/mysterious-treasure.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/counter-catcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/bursting-balloon.png',
        numImg: '../../../../assets/03.png'
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
        cardImg: '../../../../assets/cards/energy/energy-psychic.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/dce.png',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Söenke Ringel',
    flag: '../../../../assets/flags/germany.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma-ultra.png',
    list: '../../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17/malamar.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/inkay.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/ultra-necrozma-gx.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/necrozma-dawn-wings.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/mewtwo-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/giratina.png',
        numImg: '../../../../assets/01.png'
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
        cardImg: '../../../../assets/cards/2018-17/cynthia.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/n.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/lillie.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/brigette.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/mysterious-treasure.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/beast-ring.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/float-stone.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/ffb.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/choice-band.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-psychic.png',
        numImg: '../../../../assets/08.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-metal.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Jacob Harfe',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma.png',
    list: '../../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17/malamar.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/inkay.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/necrozma-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/necrozma-dawn-wings.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/hoopa-psychic.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/marshadow-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/mewtwo-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/clefairy-evo.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/cynthia.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/n.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/brigette.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/mysterious-treasure.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/float-stone.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-psychic.png',
        numImg: '../../../../assets/10.png'
      },
    ]
  },
  {
    firstName: 'Paulo Magalhães',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    list: '../../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17/buzzwole-gx.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/lycanroc-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/rockruff-surprise-attack.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/buzzwole.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/diancie-p.png',
        numImg: '../../../../assets/01.png'
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
        cardImg: '../../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/cynthia.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/n.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/beast-ring.png',
        numImg: '../../../../assets/03.png'
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
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/float-stone.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/brooklet-hill.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-fighting.png',
        numImg: '../../../../assets/09.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/strong-energy.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Ethan Del Rosario',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/marshadow.png',
    list: '../../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17/malamar.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/inkay.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/mewtwo-promo.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/necrozma-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/mewtwo-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/necrozma-dawn-wings.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/marshadow-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/clefairy-evo.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/hoopa-psychic.png',
        numImg: '../../../../assets/01.png'
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
        cardImg: '../../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/n.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/lillie.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/brigette.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/mysterious-treasure.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../../assets/03.png'
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
        cardImg: '../../../../assets/cards/2018-17/float-stone.png',
        numImg: '../../../../assets/03.png'
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
        cardImg: '../../../../assets/cards/energy/energy-psychic.png',
        numImg: '../../../../assets/10.png'
      },
    ]
  },
  {
    firstName: 'Daniel Rosas',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    list: '../../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17/buzzwole-gx.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/buzzwole.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/cynthia.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/n.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/beast-ring.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/mysterious-treasure.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/nest-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/order-pad.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/enhanced-hammer.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/ffb.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/float-stone.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-fighting.png',
        numImg: '../../../../assets/07.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/strong-energy.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Kevin Sun',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    list: '../../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17/buzzwole.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/buzzwole-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/lycanroc-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/rockruff-surprise-attack.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/regirock-ex.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/diancie-p.png',
        numImg: '../../../../assets/01.png'
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
        cardImg: '../../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/cynthia.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/n.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/beast-ring.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/super-rod.png',
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
        cardImg: '../../../../assets/cards/2018-17/brooklet-hill.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-fighting.png',
        numImg: '../../../../assets/10.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/strong-energy.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../../../assets/01.png'
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
