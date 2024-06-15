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
        firstName: 'Sebastian Lugo',
        sprite1: '../../../../assets/sprites/lugia.png',
        sprite2: '../../../../assets/sprites/deoxys.png',
        list: '../../../../assets/list-icon.png',
        type: 'normal',
        event: '2014 National Championships',
    decklist: {
      "pokemon": [
        { "count": 2, "name": "Lugia-EX", "set": "PLS", "number": "108" },
        { "count": 3, "name": "Thundurus-EX", "set": "PLF", "number": "38" },
        { "count": 4, "name": "Deoxys-EX", "set": "PLF", "number": "53" },
        { "count": 1, "name": "Genesect-EX", "set": "PLB", "number": "11" },
        { "count": 1, "name": "Latias-EX", "set": "PLF", "number": "85" },
        { "count": 1, "name": "Snorlax", "set": "PLS", "number": "101" },
      ], "trainer": [
        { "count": 4, "name": "Professor Sycamore", "set": "XY", "number": "122" },
        { "count": 2, "name": "Colress", "set": "PLS", "number": "118" },
        { "count": 2, "name": "N", "set": "PR-BLW", "number": "100" },
        { "count": 1, "name": "Computer Search", "set": "BCR", "number": "137" },
        { "count": 4, "name": "Colress Machine", "set": "PLS", "number": "119" },
        { "count": 4, "name": "Pokémon Catcher", "set": "KSS", "number": "36" },
        { "count": 3, "name": "Roller Skates", "set": "XY", "number": "125" },
        { "count": 3, "name": "Team Plasma Ball", "set": "PLF", "number": "105" },
        { "count": 3, "name": "Random Receiver", "set": "DEX", "number": "99" },
        { "count": 2, "name": "Switch", "set": "KSS", "number": "38" },
        { "count": 1, "name": "Startling Megaphone", "set": "FLF", "number": "97" },
        { "count": 1, "name": "Escape Rope", "set": "PLS", "number": "120" },
        { "count": 1, "name": "Pal Pad", "set": "FLF", "number": "92" },
        { "count": 4, "name": "Muscle Band", "set": "XY", "number": "121" },
      ], "energy": [
        { "count": 1, "name": "Lightning Energy", "set": "XY", "number": "135" },
        { "count": 4, "name": "Plasma Energy", "set": "PLS", "number": "127" },
        { "count": 4, "name": "Prism Energy", "set": "NXD", "number": "93" },
        { "count": 4, "name": "Double Colorless Energy", "set": "XY", "number": "130" },
      ]
    },
    },
    {
        firstName: 'Leando Lopez',
        sprite1: '../../../../assets/sprites/virizion.png',
        sprite2: '../../../../assets/sprites/raichu.png',
        // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
        type: 'dark',
        event: '2014 National Championships',
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
      {cardImg:'../../../../assets/cards/2014-2016',numImg:'../../../../assets/04.png'},
        ]
    },
    {
        firstName: 'Daniel Facciabene',
        sprite1: '../../../../assets/sprites/yveltal.png',
        sprite2: '../../../../assets/sprites/raichu.png',
        // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
        type: 'dark',
        event: '2014 National Championships',
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
      {cardImg:'../../../../assets/cards/2014-2016',numImg:'../../../../assets/04.png'},
        ]
    },
    {
        firstName: 'Martin Saldivia',
        sprite1: '../../../../assets/sprites/lugia.png',
        sprite2: '../../../../assets/sprites/deoxys.png',
        // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
        type: 'dark',
        event: '2014 National Championships',
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
      {cardImg:'../../../../assets/cards/2014-2016',numImg:'../../../../assets/04.png'},
        ]
    },
    {
        firstName: 'Javier Favilli',
        sprite1: '../../../../assets/sprites/yveltal.png',
        sprite2: '../../../../assets/sprites/raichu.png',
        // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
        type: 'dark',
        event: '2014 National Championships',
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
      {cardImg:'../../../../assets/cards/2014-2016',numImg:'../../../../assets/04.png'},
        ]
    },
    {
        firstName: 'Dante Lenell',
        sprite1: '../../../../assets/sprites/keldeo-resolute.png',
        sprite2: '../../../../assets/sprites/blastoise.png',
        // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
        type: 'dark',
        event: '2014 National Championships',
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
      {cardImg:'../../../../assets/cards/2014-2016',numImg:'../../../../assets/04.png'},
        ]
    },
    {
        firstName: 'Tomas Sainz',
        sprite1: '../../../../assets/sprites/yveltal.png',
        sprite2: '../../../../assets/sprites/garbodor.png',
        // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
        type: 'dark',
        event: '2014 National Championships',
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
      {cardImg:'../../../../assets/cards/2014-2016',numImg:'../../../../assets/04.png'},
        ]
    },
    {
        firstName: 'Brian Miño',
        sprite1: '../../../../assets/sprites/yveltal.png',
        sprite2: '../../../../assets/sprites/garbodor.png',
        // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
        type: 'dark',
        event: '2014 National Championships',
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
      {cardImg:'../../../../assets/cards/2014-2016',numImg:'../../../../assets/04.png'},
        ]
    },
]

let seniors = [
    {
        firstName: 'Bryan de Vries',
        sprite1: '../../../../assets/sprites/yveltal.png',
        sprite2: '../../../../assets/sprites/garbodor.png',
        list: '../../../../assets/list-icon.png',
        type: 'dark',
        event: '2014 National Championships',
    decklist: {
      "pokemon": [
        { "count": 3, "name": "Yveltal-EX", "set": "XY", "number": "79" },
        { "count": 3, "name": "Darkrai-EX", "set": "DEX", "number": "63" },
        { "count": 1, "name": "Yveltal", "set": "XY", "number": "78" },
        { "count": 1, "name": "Garbodor", "set": "LTR", "number": "68" },
        { "count": 1, "name": "Trubbish", "set": "LTR", "number": "67" },
        { "count": 1, "name": "Sableye", "set": "DEX", "number": "62" },
        { "count": 1, "name": "Druddigon", "set": "FLF", "number": "70" },
        { "count": 1, "name": "Keldeo-EX", "set": "BCR", "number": "49" },
      ], "trainer": [
        { "count": 4, "name": "Professor Sycamore", "set": "XY", "number": "122" },
        { "count": 4, "name": "N", "set": "PR-BLW", "number": "100" },
        { "count": 1, "name": "Colress", "set": "PLS", "number": "118" },
        { "count": 1, "name": "Lysandre", "set": "FLF", "number": "90" },
        { "count": 1, "name": "Dowsing Machine", "set": "PLS", "number": "128" },
        { "count": 4, "name": "Dark Patch", "set": "DEX", "number": "93" },
        { "count": 3, "name": "Energy Switch", "set": "LTR", "number": "112" },
        { "count": 3, "name": "Ultra Ball", "set": "FLF", "number": "99" },
        { "count": 3, "name": "Random Receiver", "set": "DEX", "number": "99" },
        { "count": 3, "name": "Hypnotoxic Laser", "set": "PLS", "number": "123" },
        { "count": 1, "name": "Enhanced Hammer", "set": "DEX", "number": "94" },
        { "count": 1, "name": "Startling Megaphone", "set": "FLF", "number": "97" },
        { "count": 1, "name": "Super Rod", "set": "NVI", "number": "95" },
        { "count": 3, "name": "Muscle Band", "set": "XY", "number": "121" },
        { "count": 2, "name": "Float Stone", "set": "PLF", "number": "99" },
        { "count": 2, "name": "Virbank City Gym", "set": "PLS", "number": "126" },
      ], "energy": [
        { "count": 9, "name": "Darkness Energy", "set": "XY", "number": "138" },
        { "count": 2, "name": "Double Colorless Energy", "set": "XY", "number": "130" },
      ]
    },
    },
    {
        firstName: '--',
        sprite1: '../../../../assets/sprites/blank.png',
        sprite2: '../../../../assets/hyphen.png',
        // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
        type: 'dark',
        event: '2014 National Championships',
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
      {cardImg:'../../../../assets/cards/2014-2016',numImg:'../../../../assets/04.png'},
        ]
    },
    {
        firstName: '--',
        sprite1: '../../../../assets/sprites/blank.png',
        sprite2: '../../../../assets/hyphen.png',
        // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
        type: 'dark',
        event: '2014 National Championships',
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
      {cardImg:'../../../../assets/cards/2014-2016',numImg:'../../../../assets/04.png'},
        ]
    },
    {
        firstName: '--',
        sprite1: '../../../../assets/sprites/blank.png',
        sprite2: '../../../../assets/hyphen.png',
        // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
        type: 'dark',
        event: '2014 National Championships',
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
      {cardImg:'../../../../assets/cards/2014-2016',numImg:'../../../../assets/04.png'},
        ]
    },
]

let juniors = [
    {
        firstName: 'Dena van Wijk',
        sprite1: '../../../../assets/sprites/yveltal.png',
        sprite2: '../../../../assets/sprites/garbodor.png',
        list: '../../../../assets/list-icon.png',
        type: 'dark',
        event: '2014 National Championships',
    decklist: {
      "pokemon": [
        { "count": 3, "name": "Yveltal-EX", "set": "XY", "number": "79" },
        { "count": 2, "name": "Garbodor", "set": "LTR", "number": "68" },
        { "count": 2, "name": "Trubbish", "set": "LTR", "number": "67" },
        { "count": 2, "name": "Sableye", "set": "DEX", "number": "62" },
        { "count": 1, "name": "Druddigon", "set": "FLF", "number": "70" },
        { "count": 1, "name": "Jirachi-EX", "set": "PLB", "number": "60" },
      ], "trainer": [
        { "count": 4, "name": "Professor Sycamore", "set": "XY", "number": "122" },
        { "count": 4, "name": "N", "set": "PR-BLW", "number": "100" },
        { "count": 1, "name": "Dowsing Machine", "set": "PLS", "number": "128" },
        { "count": 4, "name": "Ultra Ball", "set": "FLF", "number": "99" },
        { "count": 4, "name": "Hypnotoxic Laser", "set": "PLS", "number": "123" },
        { "count": 4, "name": "Random Receiver", "set": "DEX", "number": "99" },
        { "count": 3, "name": "Dark Patch", "set": "DEX", "number": "93" },
        { "count": 2, "name": "Enhanced Hammer", "set": "DEX", "number": "94" },
        { "count": 1, "name": "Professor's Letter", "set": "XY", "number": "123" },
        { "count": 1, "name": "Switch", "set": "KSS", "number": "38" },
        { "count": 1, "name": "Pokémon Catcher", "set": "KSS", "number": "36" },
        { "count": 3, "name": "Muscle Band", "set": "XY", "number": "121" },
        { "count": 3, "name": "Float Stone", "set": "PLF", "number": "99" },
        { "count": 3, "name": "Virbank City Gym", "set": "PLS", "number": "126" },
      ], "energy": [
        { "count": 7, "name": "Darkness Energy", "set": "XY", "number": "138" },
        { "count": 4, "name": "Double Colorless Energy", "set": "XY", "number": "130" },
      ]
    },
    deck: [
          
          
          
        ]
    },
    {
        firstName: '--',
        sprite1: '../../../../assets/sprites/blank.png',
        sprite2: '../../../../assets/hyphen.png',
        // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
        type: 'dark',
        event: '2014 National Championships',
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
      {cardImg:'../../../../assets/cards/2014-2016',numImg:'../../../../assets/04.png'},
        ]
    },
    {
        firstName: '--',
        sprite1: '../../../../assets/sprites/blank.png',
        sprite2: '../../../../assets/hyphen.png',
        // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
        type: 'dark',
        event: '2014 National Championships',
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
      {cardImg:'../../../../assets/cards/2014-2016',numImg:'../../../../assets/04.png'},
        ]
    },
    {
        firstName: '--',
        sprite1: '../../../../assets/sprites/blank.png',
        sprite2: '../../../../assets/hyphen.png',
        // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
        type: 'dark',
        event: '2014 National Championships',
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
      {cardImg:'../../../../assets/cards/2014-2016',numImg:'../../../../assets/04.png'},
        ]
    },
]

let tenEvent = [
    {
        firstName: 'Stéphane Ivanoff',
        sprite1: '../../../../assets/sprites/yveltal.png',
        sprite2: '../../../../assets/sprites/garbodor.png',
        list: '../../../../assets/list-icon.png',
        type: 'dark',
        event: '2014 National Championships',
    decklist: {
      "pokemon": [
        { "count": 3, "name": "Yveltal-EX", "set": "XY", "number": "79" },
        { "count": 2, "name": "Garbodor", "set": "LTR", "number": "68" },
        { "count": 2, "name": "Trubbish", "set": "LTR", "number": "67" },
        { "count": 1, "name": "Sableye", "set": "DEX", "number": "62" },
        { "count": 1, "name": "Bouffalant", "set": "DRX", "number": "110" },
        { "count": 1, "name": "Darkrai-EX", "set": "DEX", "number": "63" },
        { "count": 1, "name": "Keldeo-EX", "set": "BCR", "number": "49" },
      ], "trainer": [
        { "count": 4, "name": "Professor Sycamore", "set": "XY", "number": "122" },
        { "count": 4, "name": "N", "set": "PR-BLW", "number": "100" },
        { "count": 2, "name": "Bianca", "set": "EPO", "number": "90" },
        { "count": 1, "name": "Lysandre", "set": "FLF", "number": "90" },
        { "count": 1, "name": "Dowsing Machine", "set": "PLS", "number": "128" },
        { "count": 4, "name": "Ultra Ball", "set": "FLF", "number": "99" },
        { "count": 4, "name": "Hypnotoxic Laser", "set": "PLS", "number": "123" },
        { "count": 4, "name": "Dark Patch", "set": "DEX", "number": "93" },
        { "count": 2, "name": "Bicycle", "set": "PLS", "number": "117" },
        { "count": 2, "name": "Colress Machine", "set": "PLS", "number": "119" },
        { "count": 1, "name": "Professor's Letter", "set": "XY", "number": "123" },
        { "count": 3, "name": "Muscle Band", "set": "XY", "number": "121" },
        { "count": 3, "name": "Float Stone", "set": "PLF", "number": "99" },
        { "count": 2, "name": "Virbank City Gym", "set": "PLS", "number": "126" },
      ], "energy": [
        { "count": 8, "name": "Darkness Energy", "set": "XY", "number": "138" },
        { "count": 4, "name": "Double Colorless Energy", "set": "XY", "number": "130" },
      ]
    },
    },
    {
        firstName: 'Jeremy Amram',
        sprite1: '../../../../assets/sprites/greninja.png',
        sprite2: '../../../../assets/sprites/miltank.png',
        // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
        type: 'dark',
        event: '2014 National Championships',
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
      {cardImg:'../../../../assets/cards/2014-2016',numImg:'../../../../assets/04.png'},
        ]
    },
    {
        firstName: 'Erwann Piedloup',
        sprite1: '../../../../assets/sprites/virizion.png',
        sprite2: '../../../../assets/sprites/genesect.png',
        // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
        type: 'dark',
        event: '2014 National Championships',
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
      {cardImg:'../../../../assets/cards/2014-2016',numImg:'../../../../assets/04.png'},
        ]
    },
    {
        firstName: 'Cyrille Leroy',
        sprite1: '../../../../assets/sprites/empoleon.png',
        sprite2: '../../../../assets/sprites/dusknoir.png',
        // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
        type: 'dark',
        event: '2014 National Championships',
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
      {cardImg:'../../../../assets/cards/2014-2016',numImg:'../../../../assets/04.png'},
        ]
    },
    {
        firstName: 'Benjamin Paradis',
        sprite1: '../../../../assets/sprites/empoleon.png',
        sprite2: '../../../../assets/sprites/dusknoir.png',
        // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
        type: 'dark',
        event: '2014 National Championships',
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
      {cardImg:'../../../../assets/cards/2014-2016',numImg:'../../../../assets/04.png'},
        ]
    },
    {
        firstName: 'Ky Vong Nguyen',
        sprite1: '../../../../assets/sprites/yveltal.png',
        sprite2: '../../../../assets/sprites/garbodor.png',
        // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
        type: 'dark',
        event: '2014 National Championships',
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
      {cardImg:'../../../../assets/cards/2014-2016',numImg:'../../../../assets/04.png'},
        ]
    },
    {
        firstName: 'Adrien Bechereau',
        sprite1: '../../../../assets/sprites/thundurus-therian.png',
        sprite2: '../../../../assets/sprites/deoxys.png',
        // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
        type: 'dark',
        event: '2014 National Championships',
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
      {cardImg:'../../../../assets/cards/2014-2016',numImg:'../../../../assets/04.png'},
        ]
    },
    {
        firstName: 'Matthieu Cornillon',
        sprite1: '../../../../assets/sprites/virizion.png',
        sprite2: '../../../../assets/sprites/genesect.png',
        // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
        type: 'dark',
        event: '2014 National Championships',
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
      {cardImg:'../../../../assets/cards/2014-2016',numImg:'../../../../assets/04.png'},
        ]
    },
]

let fiveEvent = [
    {
        firstName: 'Jennifer Wilson',
        sprite1: '../../../../assets/sprites/yveltal.png',
        sprite2: '../../../../assets/sprites/garbodor.png',
        list: '../../../../assets/list-icon.png',
        type: 'dark',
        event: '2014 National Championships',
    decklist: {
      "pokemon": [
        { "count": 3, "name": "Yveltal-EX", "set": "XY", "number": "79" },
        { "count": 2, "name": "Garbodor", "set": "LTR", "number": "68" },
        { "count": 2, "name": "Trubbish", "set": "LTR", "number": "67" },
        { "count": 1, "name": "Sableye", "set": "DEX", "number": "62" },
        { "count": 1, "name": "Bouffalant", "set": "DRX", "number": "110" },
        { "count": 1, "name": "Absol", "set": "PLF", "number": "67" },
        { "count": 1, "name": "Darkrai-EX", "set": "DEX", "number": "63" },
      ], "trainer": [
        { "count": 4, "name": "Professor Sycamore", "set": "XY", "number": "122" },
        { "count": 4, "name": "N", "set": "PR-BLW", "number": "100" },
        { "count": 2, "name": "Colress", "set": "PLS", "number": "118" },
        { "count": 1, "name": "Lysandre", "set": "FLF", "number": "90" },
        { "count": 1, "name": "Dowsing Machine", "set": "PLS", "number": "128" },
        { "count": 4, "name": "Hypnotoxic Laser", "set": "PLS", "number": "123" },
        { "count": 4, "name": "Dark Patch", "set": "DEX", "number": "93" },
        { "count": 3, "name": "Ultra Ball", "set": "FLF", "number": "99" },
        { "count": 2, "name": "Bicycle", "set": "PLS", "number": "117" },
        { "count": 2, "name": "Random Receiver", "set": "DEX", "number": "99" },
        { "count": 1, "name": "Professor's Letter", "set": "XY", "number": "123" },
        { "count": 1, "name": "Max Potion", "set": "EPO", "number": "94" },
        { "count": 1, "name": "Switch", "set": "KSS", "number": "38" },
        { "count": 3, "name": "Float Stone", "set": "PLF", "number": "99" },
        { "count": 2, "name": "Muscle Band", "set": "XY", "number": "121" },
        { "count": 2, "name": "Virbank City Gym", "set": "PLS", "number": "126" },
      ], "energy": [
        { "count": 8, "name": "Darkness Energy", "set": "XY", "number": "138" },
        { "count": 4, "name": "Double Colorless Energy", "set": "XY", "number": "130" },
      ]
    },
    },
    {
        firstName: 'Jordan Palmer',
        sprite1: '../../../../assets/sprites/yveltal.png',
        sprite2: '../../../../assets/sprites/raichu.png',
        list: '../../../../assets/list-icon.png',
        type: 'dark',
        event: '2014 National Championships',
    decklist: {
      "pokemon": [
        { "count": 3, "name": "Yveltal-EX", "set": "XY", "number": "79" },
        { "count": 2, "name": "Darkrai-EX", "set": "DEX", "number": "63" },
        { "count": 2, "name": "Raichu", "set": "XY", "number": "43" },
        { "count": 2, "name": "Pikachu", "set": "XY", "number": "42" },
        { "count": 1, "name": "Sableye", "set": "DEX", "number": "62" },
        { "count": 1, "name": "Druddigon", "set": "FLF", "number": "70" },
        { "count": 1, "name": "Bouffalant", "set": "DRX", "number": "110" },
      ], "trainer": [
        { "count": 4, "name": "Professor Sycamore", "set": "XY", "number": "122" },
        { "count": 4, "name": "N", "set": "PR-BLW", "number": "100" },
        { "count": 2, "name": "Colress", "set": "PLS", "number": "118" },
        { "count": 1, "name": "Lysandre", "set": "FLF", "number": "90" },
        { "count": 1, "name": "Dowsing Machine", "set": "PLS", "number": "128" },
        { "count": 4, "name": "Dark Patch", "set": "DEX", "number": "93" },
        { "count": 4, "name": "Hypnotoxic Laser", "set": "PLS", "number": "123" },
        { "count": 3, "name": "Ultra Ball", "set": "FLF", "number": "99" },
        { "count": 3, "name": "Bicycle", "set": "PLS", "number": "117" },
        { "count": 2, "name": "Random Receiver", "set": "DEX", "number": "99" },
        { "count": 1, "name": "Enhanced Hammer", "set": "DEX", "number": "94" },
        { "count": 1, "name": "Professor's Letter", "set": "XY", "number": "123" },
        { "count": 1, "name": "Switch", "set": "KSS", "number": "38" },
        { "count": 3, "name": "Muscle Band", "set": "XY", "number": "121" },
        { "count": 2, "name": "Virbank City Gym", "set": "PLS", "number": "126" },
      ], "energy": [
        { "count": 8, "name": "Darkness Energy", "set": "XY", "number": "138" },
        { "count": 4, "name": "Double Colorless Energy", "set": "XY", "number": "130" },
      ]
    },
    },
    {
        firstName: 'Andrew Tandianus',
        sprite1: '../../../../assets/sprites/aromatisse.png',
        sprite2: '../../../../assets/sprites/thundurus-therian.png',
        // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
        type: 'dark',
        event: '2014 National Championships',
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
      {cardImg:'../../../../assets/cards/2014-2016',numImg:'../../../../assets/04.png'},
        ]
    },
    {
        firstName: 'Michael Kan',
        sprite1: '../../../../assets/sprites/keldeo-resolute.png',
        sprite2: '../../../../assets/sprites/blastoise.png',
        // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
        type: 'dark',
        event: '2014 National Championships',
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
      {cardImg:'../../../../assets/cards/2014-2016',numImg:'../../../../assets/04.png'},
        ]
    },
    {
        firstName: 'Naomi Murn',
        sprite1: '../../../../assets/sprites/yveltal.png',
        sprite2: '../../../../assets/sprites/garbodor.png',
        list: '../../../../assets/list-icon.png',
        type: 'dark',
        event: '2014 National Championships',
    decklist: {
      "pokemon": [
        { "count": 3, "name": "Yveltal-EX", "set": "XY", "number": "79" },
        { "count": 2, "name": "Darkrai-EX", "set": "DEX", "number": "63" },
        { "count": 2, "name": "Sableye", "set": "DEX", "number": "62" },
        { "count": 1, "name": "Garbodor", "set": "LTR", "number": "68" },
        { "count": 1, "name": "Trubbish", "set": "LTR", "number": "67" },
        { "count": 1, "name": "Bouffalant", "set": "DRX", "number": "110" },
      ], "trainer": [
        { "count": 4, "name": "Professor Sycamore", "set": "XY", "number": "122" },
        { "count": 4, "name": "N", "set": "PR-BLW", "number": "100" },
        { "count": 2, "name": "Colress", "set": "PLS", "number": "118" },
        { "count": 2, "name": "Skyla", "set": "BCR", "number": "134" },
        { "count": 1, "name": "Lysandre", "set": "FLF", "number": "90" },
        { "count": 1, "name": "Computer Search", "set": "BCR", "number": "137" },
        { "count": 4, "name": "Dark Patch", "set": "DEX", "number": "93" },
        { "count": 3, "name": "Hypnotoxic Laser", "set": "PLS", "number": "123" },
        { "count": 3, "name": "Ultra Ball", "set": "FLF", "number": "99" },
        { "count": 2, "name": "Random Receiver", "set": "DEX", "number": "99" },
        { "count": 1, "name": "Professor's Letter", "set": "XY", "number": "123" },
        { "count": 1, "name": "Max Potion", "set": "EPO", "number": "94" },
        { "count": 1, "name": "Switch", "set": "KSS", "number": "38" },
        { "count": 1, "name": "Escape Rope", "set": "PLS", "number": "120" },
        { "count": 1, "name": "Enhanced Hammer", "set": "DEX", "number": "94" },
        { "count": 1, "name": "Super Rod", "set": "NVI", "number": "95" },
        { "count": 3, "name": "Muscle Band", "set": "XY", "number": "121" },
        { "count": 2, "name": "Float Stone", "set": "PLF", "number": "99" },
        { "count": 2, "name": "Virbank City Gym", "set": "PLS", "number": "126" },
      ], "energy": [
        { "count": 8, "name": "Darkness Energy", "set": "XY", "number": "138" },
        { "count": 3, "name": "Double Colorless Energy", "set": "XY", "number": "130" },
      ]
    },
    },
    {
        firstName: 'Jake Cruwys',
        sprite1: '../../../../assets/sprites/kyurem.png',
        sprite2: '../../../../assets/sprites/deoxys.png',
        // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
        type: 'dark',
        event: '2014 National Championships',
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
      {cardImg:'../../../../assets/cards/2014-2016',numImg:'../../../../assets/04.png'},
        ]
    },
    {
        firstName: 'Thomas Winkleman',
        sprite1: '../../../../assets/sprites/yveltal.png',
        sprite2: '../../../../assets/sprites/darkrai.png',
        list: '../../../../assets/list-icon.png',
        type: 'dark',
        event: '2014 National Championships',
    decklist: {
      "pokemon": [
        { "count": 3, "name": "Yveltal-EX", "set": "XY", "number": "79" },
        { "count": 2, "name": "Darkrai-EX", "set": "DEX", "number": "63" },
        { "count": 2, "name": "Bouffalant", "set": "DRX", "number": "110" },
        { "count": 1, "name": "Sableye", "set": "DEX", "number": "62" },
        { "count": 1, "name": "Keldeo-EX", "set": "BCR", "number": "49" },
      ], "trainer": [
        { "count": 4, "name": "Professor Sycamore", "set": "XY", "number": "122" },
        { "count": 4, "name": "N", "set": "PR-BLW", "number": "100" },
        { "count": 2, "name": "Colress", "set": "PLS", "number": "118" },
        { "count": 2, "name": "Skyla", "set": "BCR", "number": "134" },
        { "count": 2, "name": "Lysandre", "set": "FLF", "number": "90" },
        { "count": 1, "name": "Dowsing Machine", "set": "PLS", "number": "128" },
        { "count": 4, "name": "Dark Patch", "set": "DEX", "number": "93" },
        { "count": 4, "name": "Hypnotoxic Laser", "set": "PLS", "number": "123" },
        { "count": 3, "name": "Ultra Ball", "set": "FLF", "number": "99" },
        { "count": 3, "name": "Energy Switch", "set": "LTR", "number": "112" },
        { "count": 2, "name": "Bicycle", "set": "PLS", "number": "117" },
        { "count": 1, "name": "Random Receiver", "set": "DEX", "number": "99" },
        { "count": 1, "name": "Professor's Letter", "set": "XY", "number": "123" },
        { "count": 1, "name": "Startling Megaphone", "set": "FLF", "number": "97" },
        { "count": 3, "name": "Muscle Band", "set": "XY", "number": "121" },
        { "count": 2, "name": "Virbank City Gym", "set": "PLS", "number": "126" },
      ], "energy": [
        { "count": 8, "name": "Darkness Energy", "set": "XY", "number": "138" },
        { "count": 4, "name": "Double Colorless Energy", "set": "XY", "number": "130" },
      ]
    },
    },
    {
        firstName: 'Paul Coletta',
        sprite1: '../../../../assets/sprites/accelgor.png',
        sprite2: '../../../../assets/sprites/trevenant.png',
        list: '../../../../assets/list-icon.png',
        type: 'dark',
        event: '2014 National Championships',
    decklist: {
      "pokemon": [
        { "count": 3, "name": "Accelgor", "set": "DEX", "number": "11" },
        { "count": 3, "name": "Shelmet", "set": "PLB", "number": "7" },
        { "count": 3, "name": "Trevenant", "set": "XY", "number": "55" },
        { "count": 4, "name": "Phantump", "set": "XY", "number": "54" },
        { "count": 1, "name": "Dusknoir", "set": "BCR", "number": "63" },
        { "count": 1, "name": "Dusclops", "set": "FLF", "number": "39" },
        { "count": 2, "name": "Duskull", "set": "FLF", "number": "38" },
        { "count": 1, "name": "Musharna", "set": "NXD", "number": "59" },
        { "count": 1, "name": "Munna", "set": "BCR", "number": "68" },
        { "count": 1, "name": "Mew-EX", "set": "LTR", "number": "RC24" },
      ], "trainer": [
        { "count": 4, "name": "N", "set": "PR-BLW", "number": "100" },
        { "count": 4, "name": "Skyla", "set": "BCR", "number": "134" },
        { "count": 3, "name": "Colress", "set": "PLS", "number": "118" },
        { "count": 2, "name": "Professor Sycamore", "set": "XY", "number": "122" },
        { "count": 2, "name": "Lysandre", "set": "FLF", "number": "90" },
        { "count": 1, "name": "Dowsing Machine", "set": "PLS", "number": "128" },
        { "count": 3, "name": "Ultra Ball", "set": "FLF", "number": "99" },
        { "count": 3, "name": "Level Ball", "set": "NXD", "number": "89" },
        { "count": 2, "name": "Tool Scrapper", "set": "DRX", "number": "116" },
        { "count": 1, "name": "Sacred Ash", "set": "FLF", "number": "96" },
        { "count": 1, "name": "Switch", "set": "KSS", "number": "38" },
        { "count": 1, "name": "Rare Candy", "set": "DEX", "number": "100" },
        { "count": 1, "name": "Town Map", "set": "BCR", "number": "136" },
        { "count": 4, "name": "Float Stone", "set": "PLF", "number": "99" },
        { "count": 1, "name": "Silver Bangle", "set": "PLB", "number": "88" },
        { "count": 2, "name": "Tropical Beach", "set": "PR-BLW", "number": "50" },
      ], "energy": [
        { "count": 1, "name": "Psychic Energy", "set": "XY", "number": "136" },
        { "count": 4, "name": "Double Colorless Energy", "set": "XY", "number": "130" },
      ]
    },
    },
]

let sixEvent = [
    {
        firstName: 'Karl Peters',
        sprite1: '../../../../assets/sprites/virizion.png',
        sprite2: '../../../../assets/sprites/genesect.png',
        list: '../../../../assets/list-icon.png',
        type: 'dark',
        event: '2014 National Championships',
    decklist: {
      "pokemon": [
        { "count": 3, "name": "Virizion-EX", "set": "PLB", "number": "9" },
        { "count": 3, "name": "Genesect-EX", "set": "PLB", "number": "11" },
        { "count": 1, "name": "Shaymin-EX", "set": "NXD", "number": "5" },
        { "count": 1, "name": "Jirachi-EX", "set": "PLB", "number": "60" },
        { "count": 1, "name": "Bouffalant", "set": "DRX", "number": "110" },
        { "count": 1, "name": "Mr. Mime", "set": "PLF", "number": "47" },
      ], "trainer": [
        { "count": 4, "name": "Professor Sycamore", "set": "XY", "number": "122" },
        { "count": 4, "name": "N", "set": "PR-BLW", "number": "100" },
        { "count": 3, "name": "Skyla", "set": "BCR", "number": "134" },
        { "count": 3, "name": "Shadow Triad", "set": "PLF", "number": "102" },
        { "count": 2, "name": "Colress", "set": "PLS", "number": "118" },
        { "count": 1, "name": "G Booster", "set": "PLB", "number": "92" },
        { "count": 4, "name": "Ultra Ball", "set": "DEX", "number": "102" },
        { "count": 4, "name": "Enhanced Hammer", "set": "DEX", "number": "94" },
        { "count": 3, "name": "Energy Switch", "set": "LTR", "number": "112" },
        { "count": 1, "name": "Colress Machine", "set": "PLS", "number": "119" },
        { "count": 1, "name": "Professor's Letter", "set": "XY", "number": "123" },
        { "count": 1, "name": "Potion", "set": "KSS", "number": "37" },
        { "count": 1, "name": "Tool Scrapper", "set": "DRX", "number": "116" },
        { "count": 1, "name": "Super Rod", "set": "NVI", "number": "95" },
        { "count": 2, "name": "Muscle Band", "set": "XY", "number": "121" },
        { "count": 2, "name": "Skyarrow Bridge", "set": "NXD", "number": "91" },
      ], "energy": [
        { "count": 9, "name": "Grass Energy", "set": "XY", "number": "132" },
        { "count": 4, "name": "Plasma Energy", "set": "PLS", "number": "127" },
      ]
    },
    },
    {
        firstName: 'Dennis Mischitz',
        sprite1: '../../../../assets/sprites/virizion.png',
        sprite2: '../../../../assets/sprites/genesect.png',
        list: '../../../../assets/list-icon.png',
        type: 'dark',
        event: '2014 National Championships',
    decklist: {
      "pokemon": [
        { "count": 3, "name": "Genesect-EX", "set": "PLB", "number": "11" },
        { "count": 2, "name": "Virizion-EX", "set": "PLB", "number": "9" },
        { "count": 1, "name": "Shaymin-EX", "set": "NXD", "number": "5" },
        { "count": 3, "name": "Roserade", "set": "DRX", "number": "15" },
        { "count": 3, "name": "Roselia", "set": "DRX", "number": "12" },
      ], "trainer": [
        { "count": 4, "name": "Professor Sycamore", "set": "XY", "number": "122" },
        { "count": 4, "name": "N", "set": "PR-BLW", "number": "100" },
        { "count": 4, "name": "Skyla", "set": "BCR", "number": "134" },
        { "count": 2, "name": "Shadow Triad", "set": "PLF", "number": "102" },
        { "count": 1, "name": "Colress", "set": "PLS", "number": "118" },
        { "count": 1, "name": "G Booster", "set": "PLB", "number": "92" },
        { "count": 4, "name": "Ultra Ball", "set": "DEX", "number": "102" },
        { "count": 3, "name": "Energy Switch", "set": "LTR", "number": "112" },
        { "count": 2, "name": "Escape Rope", "set": "PLS", "number": "120" },
        { "count": 1, "name": "Enhanced Hammer", "set": "DEX", "number": "94" },
        { "count": 1, "name": "Colress Machine", "set": "PLS", "number": "119" },
        { "count": 1, "name": "Professor's Letter", "set": "XY", "number": "123" },
        { "count": 1, "name": "Town Map", "set": "BCR", "number": "136" },
        { "count": 1, "name": "Tool Scrapper", "set": "DRX", "number": "116" },
        { "count": 1, "name": "Super Rod", "set": "NVI", "number": "95" },
        { "count": 2, "name": "Muscle Band", "set": "XY", "number": "121" },
        { "count": 2, "name": "Skyarrow Bridge", "set": "NXD", "number": "91" },
      ], "energy": [
        { "count": 9, "name": "Grass Energy", "set": "XY", "number": "132" },
        { "count": 4, "name": "Plasma Energy", "set": "PLS", "number": "127" },
      ]
    },
    },
    {
        firstName: 'Marc Lutz',
        sprite1: '../../../../assets/sprites/virizion.png',
        sprite2: '../../../../assets/sprites/genesect.png',
        list: '../../../../assets/list-icon.png',
        type: 'dark',
        event: '2014 National Championships',
    decklist: {
      "pokemon": [
        { "count": 3, "name": "Genesect-EX", "set": "PLB", "number": "11" },
        { "count": 2, "name": "Virizion-EX", "set": "PLB", "number": "9" },
        { "count": 1, "name": "Shaymin-EX", "set": "NXD", "number": "5" },
        { "count": 1, "name": "Electrode", "set": "PLF", "number": "33" },
        { "count": 1, "name": "Voltorb", "set": "XY", "number": "44" },
      ], "trainer": [
        { "count": 4, "name": "Professor Sycamore", "set": "XY", "number": "122" },
        { "count": 4, "name": "N", "set": "PR-BLW", "number": "100" },
        { "count": 4, "name": "Skyla", "set": "BCR", "number": "134" },
        { "count": 3, "name": "Shadow Triad", "set": "PLF", "number": "102" },
        { "count": 1, "name": "G Booster", "set": "PLB", "number": "92" },
        { "count": 4, "name": "Ultra Ball", "set": "DEX", "number": "102" },
        { "count": 4, "name": "Bicycle", "set": "PLS", "number": "117" },
        { "count": 3, "name": "Energy Switch", "set": "LTR", "number": "112" },
        { "count": 2, "name": "Escape Rope", "set": "PLS", "number": "120" },
        { "count": 2, "name": "Colress Machine", "set": "PLS", "number": "119" },
        { "count": 1, "name": "Professor's Letter", "set": "XY", "number": "123" },
        { "count": 1, "name": "Town Map", "set": "BCR", "number": "136" },
        { "count": 1, "name": "Tool Scrapper", "set": "DRX", "number": "116" },
        { "count": 1, "name": "Super Rod", "set": "NVI", "number": "95" },
        { "count": 2, "name": "Muscle Band", "set": "XY", "number": "121" },
        { "count": 2, "name": "Skyarrow Bridge", "set": "NXD", "number": "91" },
      ], "energy": [
        { "count": 9, "name": "Grass Energy", "set": "XY", "number": "132" },
        { "count": 4, "name": "Plasma Energy", "set": "PLS", "number": "127" },
      ]
    },
    },
    {
        firstName: 'Finn Looft',
        sprite1: '../../../../assets/sprites/virizion.png',
        sprite2: '../../../../assets/sprites/genesect.png',
        list: '../../../../assets/list-icon.png',
        type: 'dark',
        event: '2014 National Championships',
    decklist: {
      "pokemon": [
        { "count": 4, "name": "Virizion-EX", "set": "PLB", "number": "9" },
        { "count": 3, "name": "Genesect-EX", "set": "PLB", "number": "11" },
        { "count": 1, "name": "Jirachi-EX", "set": "PLB", "number": "60" },
        { "count": 2, "name": "Roserade", "set": "DRX", "number": "15" },
        { "count": 2, "name": "Roselia", "set": "DRX", "number": "12" },
        { "count": 1, "name": "Mr. Mime", "set": "PLF", "number": "47" },
      ], "trainer": [
        { "count": 4, "name": "Professor Sycamore", "set": "XY", "number": "122" },
        { "count": 4, "name": "N", "set": "PR-BLW", "number": "100" },
        { "count": 3, "name": "Skyla", "set": "BCR", "number": "134" },
        { "count": 2, "name": "Shadow Triad", "set": "PLF", "number": "102" },
        { "count": 1, "name": "Colress", "set": "PLS", "number": "118" },
        { "count": 1, "name": "Shauna", "set": "XY", "number": "127" },
        { "count": 1, "name": "Bianca", "set": "EPO", "number": "90" },
        { "count": 1, "name": "G Booster", "set": "PLB", "number": "92" },
        { "count": 4, "name": "Ultra Ball", "set": "DEX", "number": "102" },
        { "count": 2, "name": "Energy Switch", "set": "LTR", "number": "112" },
        { "count": 2, "name": "Enhanced Hammer", "set": "DEX", "number": "94" },
        { "count": 1, "name": "Professor's Letter", "set": "XY", "number": "123" },
        { "count": 1, "name": "Town Map", "set": "BCR", "number": "136" },
        { "count": 1, "name": "Tool Scrapper", "set": "DRX", "number": "116" },
        { "count": 1, "name": "Super Rod", "set": "NVI", "number": "95" },
        { "count": 2, "name": "Muscle Band", "set": "XY", "number": "121" },
        { "count": 3, "name": "Skyarrow Bridge", "set": "NXD", "number": "91" },
      ], "energy": [
        { "count": 9, "name": "Grass Energy", "set": "XY", "number": "132" },
        { "count": 4, "name": "Plasma Energy", "set": "PLS", "number": "127" },
      ]
    },
    },
    {
        firstName: 'David Kirschbaum',
        sprite1: '../../../../assets/sprites/lugia.png',
        sprite2: '../../../../assets/sprites/deoxys.png',
        list: '../../../../assets/list-icon.png',
        type: 'dark',
        event: '2014 National Championships',
    decklist: {
      "pokemon": [
        { "count": 3, "name": "Lugia-EX", "set": "PLS", "number": "108" },
        { "count": 4, "name": "Deoxys-EX", "set": "PLF", "number": "53" },
        { "count": 2, "name": "Thundurus-EX", "set": "PLF", "number": "38" },
        { "count": 2, "name": "Kyurem", "set": "PLF", "number": "31" },
        { "count": 1, "name": "Sigilyph", "set": "LTR", "number": "66" },
      ], "trainer": [
        { "count": 4, "name": "Professor Sycamore", "set": "XY", "number": "122" },
        { "count": 4, "name": "Skyla", "set": "BCR", "number": "134" },
        { "count": 2, "name": "Colress", "set": "PLS", "number": "118" },
        { "count": 2, "name": "N", "set": "PR-BLW", "number": "100" },
        { "count": 1, "name": "Shauna", "set": "XY", "number": "127" },
        { "count": 1, "name": "Shadow Triad", "set": "PLF", "number": "102" },
        { "count": 1, "name": "Dowsing Machine", "set": "PLS", "number": "128" },
        { "count": 3, "name": "Colress Machine", "set": "PLS", "number": "119" },
        { "count": 3, "name": "Ultra Ball", "set": "DEX", "number": "102" },
        { "count": 2, "name": "Escape Rope", "set": "PLS", "number": "120" },
        { "count": 2, "name": "Tool Scrapper", "set": "DRX", "number": "116" },
        { "count": 2, "name": "Switch", "set": "KSS", "number": "38" },
        { "count": 1, "name": "Team Plasma Ball", "set": "PLF", "number": "105" },
        { "count": 4, "name": "Muscle Band", "set": "XY", "number": "121" },
        { "count": 2, "name": "Tropical Beach", "set": "PR-BLW", "number": "50" },
      ], "energy": [
        { "count": 1, "name": "Water Energy", "set": "XY", "number": "134" },
        { "count": 1, "name": "Lightning Energy", "set": "XY", "number": "135" },
        { "count": 4, "name": "Plasma Energy", "set": "PLS", "number": "127" },
        { "count": 4, "name": "Prism Energy", "set": "NXD", "number": "93" },
        { "count": 4, "name": "Double Colorless Energy", "set": "XY", "number": "130" },
      ]
    },
    },
    {
        firstName: 'Ole Stognief',
        sprite1: '../../../../assets/sprites/emboar.png',
        sprite2: '../../../../assets/sprites/rayquaza.png',
        list: '../../../../assets/list-icon.png',
        type: 'dark',
        event: '2014 National Championships',
    decklist: {
      "pokemon": [
        { "count": 3, "name": "Rayquaza-EX", "set": "DRX", "number": "85" },
        { "count": 3, "name": "Emboar", "set": "LTR", "number": "27" },
        { "count": 3, "name": "Tepig", "set": "BCR", "number": "24" },
        { "count": 2, "name": "Delphox", "set": "XY", "number": "26" },
        { "count": 3, "name": "Fennekin", "set": "KSS", "number": "8" },
        { "count": 1, "name": "Reshiram", "set": "LTR", "number": "28" },
      ], "trainer": [
        { "count": 4, "name": "N", "set": "PR-BLW", "number": "100" },
        { "count": 4, "name": "Skyla", "set": "BCR", "number": "134" },
        { "count": 3, "name": "Professor Sycamore", "set": "XY", "number": "122" },
        { "count": 1, "name": "Colress", "set": "PLS", "number": "118" },
        { "count": 1, "name": "Computer Search", "set": "BCR", "number": "137" },
        { "count": 4, "name": "Rare Candy", "set": "DEX", "number": "100" },
        { "count": 4, "name": "Superior Energy Retrieval", "set": "PLF", "number": "103" },
        { "count": 3, "name": "Ultra Ball", "set": "DEX", "number": "102" },
        { "count": 2, "name": "Level Ball", "set": "NXD", "number": "89" },
        { "count": 2, "name": "Professor's Letter", "set": "XY", "number": "123" },
        { "count": 2, "name": "Tool Scrapper", "set": "DRX", "number": "116" },
        { "count": 1, "name": "Switch", "set": "KSS", "number": "38" },
        { "count": 1, "name": "Escape Rope", "set": "PLS", "number": "120" },
        { "count": 3, "name": "Tropical Beach", "set": "PR-BLW", "number": "50" },
      ], "energy": [
        { "count": 8, "name": "Fire Energy", "set": "XY", "number": "133" },
        { "count": 2, "name": "Lightning Energy", "set": "XY", "number": "135" },
      ]
    },
    },
    {
        firstName: 'David Sturm',
        sprite1: '../../../../assets/sprites/virizion.png',
        sprite2: '../../../../assets/sprites/genesect.png',
        list: '../../../../assets/list-icon.png',
        type: 'dark',
        event: '2014 National Championships',
    decklist: {
      "pokemon": [
        { "count": 3, "name": "Genesect-EX", "set": "PLB", "number": "11" },
        { "count": 2, "name": "Virizion-EX", "set": "PLB", "number": "9" },
        { "count": 1, "name": "Shaymin-EX", "set": "NXD", "number": "5" },
        { "count": 1, "name": "Sigilyph", "set": "LTR", "number": "66" },
        { "count": 1, "name": "Mr. Mime", "set": "PLF", "number": "47" },
      ], "trainer": [
        { "count": 4, "name": "Professor Sycamore", "set": "XY", "number": "122" },
        { "count": 4, "name": "N", "set": "PR-BLW", "number": "100" },
        { "count": 4, "name": "Skyla", "set": "BCR", "number": "134" },
        { "count": 2, "name": "Shadow Triad", "set": "PLF", "number": "102" },
        { "count": 1, "name": "Shauna", "set": "XY", "number": "127" },
        { "count": 1, "name": "G Booster", "set": "PLB", "number": "92" },
        { "count": 4, "name": "Ultra Ball", "set": "DEX", "number": "102" },
        { "count": 3, "name": "Bicycle", "set": "PLS", "number": "117" },
        { "count": 3, "name": "Energy Switch", "set": "LTR", "number": "112" },
        { "count": 2, "name": "Enhanced Hammer", "set": "DEX", "number": "94" },
        { "count": 1, "name": "Escape Rope", "set": "PLS", "number": "120" },
        { "count": 1, "name": "Professor's Letter", "set": "XY", "number": "123" },
        { "count": 1, "name": "Town Map", "set": "BCR", "number": "136" },
        { "count": 1, "name": "Tool Scrapper", "set": "DRX", "number": "116" },
        { "count": 1, "name": "Super Rod", "set": "NVI", "number": "95" },
        { "count": 3, "name": "Muscle Band", "set": "XY", "number": "121" },
        { "count": 3, "name": "Skyarrow Bridge", "set": "NXD", "number": "91" },
      ], "energy": [
        { "count": 9, "name": "Grass Energy", "set": "XY", "number": "132" },
        { "count": 4, "name": "Plasma Energy", "set": "PLS", "number": "127" },
      ]
    },
    },
    {
        firstName: 'Steven Mao',
        sprite1: '../../../../assets/sprites/yveltal.png',
        sprite2: '../../../../assets/sprites/garbodor.png',
        list: '../../../../assets/list-icon.png',
        type: 'dark',
        event: '2014 National Championships',
    decklist: {
      "pokemon": [
        { "count": 3, "name": "Yveltal-EX", "set": "XY", "number": "79" },
        { "count": 2, "name": "Garbodor", "set": "LTR", "number": "68" },
        { "count": 2, "name": "Trubbish", "set": "LTR", "number": "67" },
        { "count": 1, "name": "Sableye", "set": "DEX", "number": "62" },
        { "count": 1, "name": "Bouffalant", "set": "DRX", "number": "110" },
        { "count": 1, "name": "Absol", "set": "PLF", "number": "67" },
        { "count": 1, "name": "Darkrai-EX", "set": "DEX", "number": "63" },
      ], "trainer": [
        { "count": 4, "name": "Professor Sycamore", "set": "XY", "number": "122" },
        { "count": 4, "name": "N", "set": "PR-BLW", "number": "100" },
        { "count": 1, "name": "Colress", "set": "PLS", "number": "118" },
        { "count": 1, "name": "Dowsing Machine", "set": "PLS", "number": "128" },
        { "count": 4, "name": "Hypnotoxic Laser", "set": "PLS", "number": "123" },
        { "count": 4, "name": "Dark Patch", "set": "DEX", "number": "93" },
        { "count": 4, "name": "Ultra Ball", "set": "DEX", "number": "102" },
        { "count": 3, "name": "Random Receiver", "set": "DEX", "number": "99" },
        { "count": 2, "name": "Bicycle", "set": "PLS", "number": "117" },
        { "count": 1, "name": "Escape Rope", "set": "PLS", "number": "120" },
        { "count": 3, "name": "Muscle Band", "set": "XY", "number": "121" },
        { "count": 3, "name": "Float Stone", "set": "PLF", "number": "99" },
        { "count": 3, "name": "Virbank City Gym", "set": "PLS", "number": "126" },
      ], "energy": [
        { "count": 8, "name": "Darkness Energy", "set": "XY", "number": "138" },
        { "count": 4, "name": "Double Colorless Energy", "set": "XY", "number": "130" },
      ]
    },
    },
]





