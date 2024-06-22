const masterList = document.querySelector('.uk-masters-ol');
const seniorList = document.querySelector('.uk-seniors-ol');
const juniorList = document.querySelector('.uk-juniors-ol');
const tenList = document.querySelector('.ten-ol');
const fiveList = document.querySelector('.five-ol');
const sixList = document.querySelector('.six-ol');
const sevenList = document.querySelector('.seven-ol');
const eightList = document.querySelector('.eight-ol');
const nineList = document.querySelector('.nine-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
    {
        firstName: 'Alex Northey',
        sprite1: '../../assets/sprites/zekrom.png',
        sprite2: '../../assets/sprites/eelektrik.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        event: '',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    deck: [
      {cardImg:'../../assets/cards/2010-2012',numImg:'../../assets/04.png'},
        ]
    },
    {
        firstName: 'Karl Blake',
        sprite1: '../../assets/sprites/mismagius.png',
        sprite2: '../../assets/sprites/vileplume.png',
        list: '../../assets/list-icon.png',
        type: 'normal',
        event: '',
    decklist: {
      "pokemon": [
        { "count": 2, "name": "Mismagius", "set": "UL", "number": "5" },
        { "count": 2, "name": "Misdreavus", "set": "CL", "number": "65" },
        { "count": 2, "name": "Vileplume", "set": "UD", "number": "24" },
        { "count": 3, "name": "Oddish", "set": "UD", "number": "60" },
        { "count": 2, "name": "Darkrai-EX", "set": "DEX", "number": "63" },
        { "count": 2, "name": "Mewtwo-EX", "set": "NXD", "number": "54" },
        { "count": 2, "name": "Terrakion", "set": "NVI", "number": "73" },
        { "count": 1, "name": "Virizion", "set": "NVI", "number": "13" },
        { "count": 1, "name": "Espeon", "set": "DEX", "number": "48" },
        { "count": 1, "name": "Eevee", "set": "UD", "number": "48" },
        { "count": 1, "name": "Shaymin-EX", "set": "NXD", "number": "5" },
        { "count": 1, "name": "Cleffa", "set": "CL", "number": "24" },
        { "count": 1, "name": "Pichu", "set": "HS", "number": "28" },
      ], "trainer": [
        { "count": 4, "name": "Pokémon Collector", "set": "HS", "number": "97" },
        { "count": 4, "name": "Twins", "set": "TM", "number": "89" },
        { "count": 3, "name": "Professor Oak's New Theory", "set": "CL", "number": "83" },
        { "count": 3, "name": "N", "set": "NVI", "number": "92" },
        { "count": 2, "name": "Seeker", "set": "TM", "number": "88" },
        { "count": 1, "name": "Cheren", "set": "EPO", "number": "91" },
        { "count": 4, "name": "Rare Candy", "set": "DEX", "number": "100" },
        { "count": 4, "name": "Pokémon Communication", "set": "BLW", "number": "99" },
        { "count": 1, "name": "Pokémon Catcher", "set": "EPO", "number": "95" },
      ], "energy": [
        { "count": 1, "name": "Psychic Energy", "set": "BLW", "number": "109" },
        { "count": 4, "name": "Prism Energy", "set": "NXD", "number": "93" },
        { "count": 4, "name": "Rainbow Energy", "set": "HS", "number": "104" },
        { "count": 4, "name": "Double Colorless Energy", "set": "NXD", "number": "92" },
      ]
    },
    },
    {
        firstName: 'Sami Sekkoum',
        sprite1: '../../assets/sprites/celebi.png',
        sprite2: '../../assets/sprites/mewtwo.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        event: '',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    deck: [
      {cardImg:'../../assets/cards/2010-2012',numImg:'../../assets/04.png'},
        ]
    },
    {
        firstName: 'Matt Blower',
        sprite1: '../../assets/sprites/vanilluxe.png',
        sprite2: '../../assets/sprites/vileplume.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        event: '',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    deck: [
      {cardImg:'../../assets/cards/2010-2012',numImg:'../../assets/04.png'},
        ]
    },
    {
        firstName: 'Johnny Hall',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/meganium.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        event: '',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    deck: [
      {cardImg:'../../assets/cards/2010-2012',numImg:'../../assets/04.png'},
        ]
    },
    {
        firstName: 'Faisal Khan',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        event: '',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    deck: [
      {cardImg:'../../assets/cards/2010-2012',numImg:'../../assets/04.png'},
        ]
    },
    {
        firstName: 'Tommy Roberts',
        sprite1: '../../assets/sprites/empoleon.png',
        sprite2: '../../assets/sprites/terrakion.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        event: '',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    deck: [
      {cardImg:'../../assets/cards/2010-2012',numImg:'../../assets/04.png'},
        ]
    },
    {
        firstName: 'Jak S-Armstead',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        event: '',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    deck: [
      {cardImg:'../../assets/cards/2010-2012',numImg:'../../assets/04.png'},
        ]
    },
    {
        firstName: 'Fares Sekkoum',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        event: '',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    deck: [
      {cardImg:'../../assets/cards/2010-2012',numImg:'../../assets/04.png'},
        ]
    },
    {
        firstName: 'John Gregory',
        sprite1: '../../assets/sprites/celebi.png',
        sprite2: '../../assets/sprites/mewtwo.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        event: '',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    deck: [
      {cardImg:'../../assets/cards/2010-2012',numImg:'../../assets/04.png'},
        ]
    },
    {
        firstName: 'Scot Burgess',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        event: '',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    deck: [
      {cardImg:'../../assets/cards/2010-2012',numImg:'../../assets/04.png'},
        ]
    },
    {
        firstName: 'Jake Walvin',
        sprite1: '../../assets/sprites/mewtwo.png',
        sprite2: '../../assets/sprites/eelektrik.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        event: '',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    deck: [
      {cardImg:'../../assets/cards/2010-2012',numImg:'../../assets/04.png'},
        ]
    },
    {
        firstName: 'Oliver Barnett',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        event: '',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    deck: [
      {cardImg:'../../assets/cards/2010-2012',numImg:'../../assets/04.png'},
        ]
    },
    {
        firstName: 'Samuel Mclewee',
        sprite1: '../../assets/sprites/mewtwo.png',
        sprite2: '../../assets/sprites/terrakion.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        event: '',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    deck: [
      {cardImg:'../../assets/cards/2010-2012',numImg:'../../assets/04.png'},
        ]
    },
    {
        firstName: 'Russel Moore',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        event: '',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    deck: [
      {cardImg:'../../assets/cards/2010-2012',numImg:'../../assets/04.png'},
        ]
    },
    {
        firstName: 'Charles Barton',
        sprite1: '../../assets/sprites/darkrai.png',
        sprite2: '../../assets/sprites/terrakion.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        event: '',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    deck: [
      {cardImg:'../../assets/cards/2010-2012',numImg:'../../assets/04.png'},
        ]
    },
]










let eightEvent = [
    {
        firstName: 'eeee',
        sprite1: '../../assets/sprites',
        sprite2: '../../assets/sprites',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        event: '',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    deck: [
      {cardImg:'../../assets/cards/2010-2012',numImg:'../../assets/04.png'},
        ]
    },
]

let nineEvent = [
    {
        firstName: 'eeee',
        sprite1: '../../assets/sprites',
        sprite2: '../../assets/sprites',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        event: '',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    deck: [
      {cardImg:'../../assets/cards/2010-2012',numImg:'../../assets/04.png'},
        ]
    },
]