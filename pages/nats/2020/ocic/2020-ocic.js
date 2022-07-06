const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Nico Alabas',
    flag: '../../../../assets/flags/germany.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/mewtwo-mew-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Zach Lesage',
    flag: '../../../../assets/flags/canada.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/reshiram-charizard-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tim Bartels',
    flag: '../../../../assets/flags/germany.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/obstagoon.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'James Williams',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/cinccino.png',
    sprite2: '../../../../assets/sprites/oranguru.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Bert Wolters',
    flag: '../../../../assets/flags/netherlands.png',
    sprite1: '../../../../assets/sprites/adp.png',
    sprite2: '../../../../assets/sprites/zacian-crowned.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ian Robb',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/adp.png',
    sprite2: '../../../../assets/sprites/zacian-crowned.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tord Reklev',
    flag: '../../../../assets/flags/norway.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/mewtwo-mew-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Natalie Millar',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/adp.png',
    sprite2: '../../../../assets/sprites/zacian-crowned.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Clifton Goh',
    flag: '../../../../assets/flags/singapore.png',
    sprite1: '../../../../assets/sprites/adp.png',
    sprite2: '../../../../assets/sprites/zacian-crowned.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Soma Arai',
    flag: '../../../../assets/flags/japan.png',
    sprite1: '../../../../assets/sprites/magcargo.png',
    sprite2: '../../../../assets/sprites/oranguru.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tan Yong Siang',
    flag: '../../../../assets/flags/singapore.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/blacephalon.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Andrew Tandianus',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/adp.png',
    sprite2: '../../../../assets/sprites/zacian-crowned.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Takuya Shomura',
    flag: '../../../../assets/flags/japan.png',
    sprite1: '../../../../assets/sprites/adp.png',
    sprite2: '../../../../assets/sprites/zacian-crowned.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Daniel Altavilla',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/giratina.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jon Eng',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Man Tsung Wong',
    flag: '../../../../assets/flags/hong-kong.png',
    sprite1: '../../../../assets/sprites/adp.png',
    sprite2: '../../../../assets/sprites/zacian-crowned.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Chienwei Yu',
    flag: '../../../../assets/flags/taiwan.png',
    sprite1: '../../../../assets/sprites/adp.png',
    sprite2: '../../../../assets/sprites/zacian-crowned.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Pedro Pertusi',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/mewtwo-mew-tagteam.png',
    sprite2: '../../../../assets/sprites/malamar.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Yohei Takeda',
    flag: '../../../../assets/flags/japan.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/magcargo.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Grant Manley',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/giratina.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'André Chiasson',
    flag: '../../../../assets/flags/canada.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Yuki Ishii',
    flag: '../../../../assets/flags/taiwan.png',
    sprite1: '../../../../assets/sprites/adp.png',
    sprite2: '../../../../assets/sprites/zacian-crowned.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Peter Lo',
    flag: '../../../../assets/flags/hong-kong.png',
    sprite1: '../../../../assets/sprites/adp.png',
    sprite2: '../../../../assets/sprites/zacian-crowned.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Colin Tang',
    flag: '../../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../../assets/sprites/mewtwo-mew-tagteam.png',
    sprite2: '../../../../assets/sprites/malamar.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Logan Madden',
    flag: '../../../../assets/flags/uk.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Fung Tsz Ping',
    flag: '../../../../assets/flags/singapore.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/blacephalon.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Christian Hasbani',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/adp.png',
    sprite2: '../../../../assets/sprites/zacian-crowned.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Benjamin Behrens',
    flag: '../../../../assets/flags/norway.png',
    sprite1: '../../../../assets/sprites/adp.png',
    sprite2: '../../../../assets/sprites/zacian-crowned.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kenneth Tan',
    flag: '../../../../assets/flags/singapore.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tadashi Maeda',
    flag: '../../../../assets/flags/japan.png',
    sprite1: '../../../../assets/sprites/adp.png',
    sprite2: '../../../../assets/sprites/zacian-crowned.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Otavio Gouveia',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/adp.png',
    sprite2: '../../../../assets/sprites/zacian-crowned.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Robin Schulz',
    flag: '../../../../assets/flags/germany.png',
    sprite1: '../../../../assets/sprites/adp.png',
    sprite2: '../../../../assets/sprites/zacian-crowned.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Robert Spiller',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/adp.png',
    sprite2: '../../../../assets/sprites/zacian-crowned.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Raz Wolpe',
    flag: '../../../../assets/flags/isreal.png',
    sprite1: '../../../../assets/sprites/adp.png',
    sprite2: '../../../../assets/sprites/zacian-crowned.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Corey Munro',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/adp.png',
    sprite2: '../../../../assets/sprites/zacian-crowned.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Louis Pozzacchio',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Wong Wo Pan',
    flag: '../../../../assets/flags/hong-kong.png',
    sprite1: '../../../../assets/sprites/mewtwo-mew-tagteam.png',
    sprite2: '../../../../assets/sprites/malamar.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ricki Madsen',
    flag: '../../../../assets/flags/denmark.png',
    sprite1: '../../../../assets/sprites/zacian-crowned.png',
    sprite2: '../../../../assets/sprites/lucario-melmetal-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Will Jenkins',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/adp.png',
    sprite2: '../../../../assets/sprites/zacian-crowned.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Koyo Taniguchi',
    flag: '../../../../assets/flags/japan.png',
    sprite1: '../../../../assets/sprites/adp.png',
    sprite2: '../../../../assets/sprites/zacian-crowned.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Mehdi Hafi',
    flag: '../../../../assets/flags/france.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/mewtwo-mew-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Sean Takemoto',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/magcargo.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Louis Chi',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/adp.png',
    sprite2: '../../../../assets/sprites/zacian-crowned.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Akira Sato',
    flag: '../../../../assets/flags/japan.png',
    sprite1: '../../../../assets/sprites/mewtwo-mew-tagteam.png',
    sprite2: '../../../../assets/sprites/malamar.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Brennan Kamerman',
    flag: '../../../../assets/flags/netherlands.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/blacephalon.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Matty Masefield',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/adp.png',
    sprite2: '../../../../assets/sprites/zacian-crowned.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Miloslav Poslední',
    flag: '../../../../assets/flags/czech-republic.png',
    sprite1: '../../../../assets/sprites/adp.png',
    sprite2: '../../../../assets/sprites/zacian-crowned.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Aaron Stringfellow',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/cinccino.png',
    sprite2: '../../../../assets/sprites/oranguru.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ethan Lee',
    flag: '../../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../../assets/sprites/adp.png',
    sprite2: '../../../../assets/sprites/zacian-crowned.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Gustavo Wada',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/reshiram-charizard-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jordan Palmer',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/adp.png',
    sprite2: '../../../../assets/sprites/zacian-crowned.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Henry Brand',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/mewtwo-mew-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Shawn Chan',
    flag: '../../../../assets/flags/singapore.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/blacephalon.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Benjamin Hall',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/mewtwo-mew-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nicholas Apostolou',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Sam Lao',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Cheuk Fai Brian Lee',
    flag: '../../../../assets/flags/hong-kong.png',
    sprite1: '../../../../assets/sprites/mewtwo-mew-tagteam.png',
    sprite2: '../../../../assets/sprites/malamar.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Lucas Hamilton-Foster',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/adp.png',
    sprite2: '../../../../assets/sprites/zacian-crowned.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Henry Rasheed',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/adp.png',
    sprite2: '../../../../assets/sprites/zacian-crowned.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Pedro Torres',
    flag: '../../../../assets/flags/spain.png',
    sprite1: '../../../../assets/sprites/adp.png',
    sprite2: '../../../../assets/sprites/zacian-crowned.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Blake Lobina',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Alfred Yang',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/mewtwo-mew-tagteam.png',
    sprite2: '../../../../assets/sprites/malamar.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tsubota Hokuto',
    flag: '../../../../assets/flags/japan.png',
    sprite1: '../../../../assets/sprites/adp.png',
    sprite2: '../../../../assets/sprites/zacian-crowned.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Matthew Taverna',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/mewtwo-mew-tagteam.png',
    sprite2: '../../../../assets/sprites/malamar.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Sobi Kwak',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/mewtwo-mew-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Christian Moreno',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/reshiram-charizard-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeeeeeeeeeeeeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeeeeeeeeeeeeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeeeeeeeeeeeeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeeeeeeeeeeeeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeeeeeeeeeeeeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeeeeeeeeeeeeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Lucas Oldale',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites/adp.png',
    sprite2: '../../../../assets/sprites/zacian-crowned.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Pedro Cavalcanti',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites/mewtwo-mew-tagteam.png',
    sprite2: '../../../../assets/sprites/malamar.png',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeeeeeeeeeeeeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeeeeeeeeeeeeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeeeeeeeeeeeeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeeeeeeeeeeeeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeeeeeeeeeeeeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'eeeeeeeeeeeeeeeeeee',
    flag: '../../../../assets/flags',
    sprite1: '../../../../assets/sprites',
    sprite2: '../../../../assets/sprites',
    list: '../../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019',
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
        document.querySelector('.playerName').innerHTML = item.firstName;

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
        document.querySelector('.playerName').innerHTML = item.firstName;

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
        document.querySelector('.playerName').innerHTML = item.firstName;

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
