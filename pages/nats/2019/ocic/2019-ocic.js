const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Isaiah Williams',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/zapdos.png',
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
    firstName: 'Stéphane Ivanoff',
    flag: '../../../../assets/flags/france.png',
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
    firstName: 'Kaiwen Cabbabe',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
    firstName: 'Bert Wolters',
    flag: '../../../../assets/flags/netherlands.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/zapdos.png',
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
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
    firstName: 'Henry Brand',
    flag: '../../../../assets/flags/australia.png',
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
    firstName: 'Daniel Altavilla',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/zapdos.png',
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
    firstName: 'Christian Hasbani',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma-ultra.png',
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
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/zapdos.png',
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
    firstName: 'Azul Griego',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/zapdos.png',
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
    firstName: 'Rahul Reddy',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
    firstName: 'Sam Chen',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/zekrom.png',
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
    firstName: 'Karl Peters',
    flag: '../../../../assets/flags/germany.png',
    sprite1: '../../../../assets/sprites/zapdos.png',
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
    firstName: 'Jordan Palmer',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma-ultra.png',
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
    firstName: 'Andrew Tandianus',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma-ultra.png',
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
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
    flag: '../../../../assets/flags/france.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/zapdos.png',
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
    firstName: 'Otavio Gouveia',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma-ultra.png',
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
    firstName: 'Alex Silva',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma-ultra.png',
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
    firstName: "Darin O'Meara",
    flag: '../../../../assets/flags/usa.png',
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
    firstName: 'Pedro Torres',
    flag: '../../../../assets/flags/spain.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
    firstName: 'Max Prescott',
    flag: '../../../../assets/flags/australia.png',
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
    firstName: 'Preston Ellis',
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
    firstName: 'James Williams',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
    firstName: 'Joshua Sparks',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/zapdos.png',
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
    firstName: 'Raz Wolpe',
    flag: '../../../../assets/flags/isreal.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma-ultra.png',
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
    firstName: 'Daniel Ross-Brown',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
    firstName: 'Jon Eng',
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
    firstName: 'Jarrod Taylor',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
    firstName: 'Layton Rumble',
    flag: '../../../../assets/flags/new-zealand.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/zapdos.png',
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
    firstName: 'Mohamad Razak',
    flag: '../../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma-ultra.png',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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

let seniors = [
  {
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
    firstName: 'eeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
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
