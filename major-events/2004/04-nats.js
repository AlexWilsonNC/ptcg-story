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

"masters": [
  {
    "name": "Faisal Khan",
    sprite1: '../../assets/sprites/blank",
    sprite2: '../../assets/sprites/blaziken",
    list: '../../assets/list-icon",
    type: 'dark",
    event: '",
    "decklist": {
      "pokemon": [
        { "count": 3, "name": "Blaziken", "set": "RS", "number": "3" },
        { "count": 2, "name": "Blaziken ex", "set": "MA", "number": "89" },
        { "count": 3, "name": "Combusken", "set": "RS", "number": "28" },
        { "count": 4, "name": "Torchic", "set": "RS", "number": "74" },
        { "count": 2, "name": "Delcatty", "set": "RS", "number": "5" },
        { "count": 2, "name": "Skitty", "set": "RS", "number": "44" },
        { "count": 4, "name": "Dunsparce", "set": "SS", "number": "60" },
        { "count": 2, "name": "Rayquaza ex", "set": "DR", "number": "97" }
      ], "trainer": [
        { "count": 4, "name": "Oracle", "set": "SK", "number": "138" },
        { "count": 3, "name": "TV Reporter", "set": "DR", "number": "88" },
        { "count": 3, "name": "Copycat", "set": "EX", "number": "138" },
        { "count": 2, "name": "Steven's Advice", "set": "HL", "number": "92" },
        { "count": 1, "name": "Desert Shaman", "set": "SK", "number": "123" },
        { "count": 1, "name": "Town Volunteers", "set": "AQ", "number": "136" },
        { "count": 3, "name": "Rare Candy", "set": "SS", "number": "88" },
        { "count": 1, "name": "Switch", "set": "EX", "number": "157" },
        { "count": 1, "name": "Warp Point", "set": "MA", "number": "85" },
        { "count": 1, "name": "Ancient Technical Machine [Rock]", "set": "HL", "number": "85" },
        { "count": 1, "name": "High Pressure System", "set": "DR", "number": "85" },
        { "count": 1, "name": "Mystery Zone", "set": "SK", "number": "137" }
      ], "energy": [
        { "count": 11, "name": "Fire Energy", "set": "EX", "number": "161" },
        { "count": 2, "name": "Lightning Energy", "set": "EX", "number": "163" },
        { "count": 2, "name": "Multi Energy", "set": "SS", "number": "93" },
        { "count": 1, "name": "Warp Energy", "set": "UF", "number": "100" }
      ]
    }
  },
  {
    "name": "Ian Fotheringham",
    sprite1: '../../assets/sprites/kyogre",
    sprite2: '../../assets/sprites/manectric",
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'dark",
    event: '",
    "decklist": {
      "pokemon": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ], "trainer": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ], "energy": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ]
    },
    deck: [
      {cardImg:'../../assets/cards/2004-2006",numImg:'../../assets/04.png'},
    ]
  },
  {
    "name": "John Hawkins",
    sprite1: '../../assets/sprites/blank",
    sprite2: '../../assets/sprites/swampert",
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'dark",
    event: '",
    "decklist": {
      "pokemon": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ], "trainer": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ], "energy": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ]
    },
    deck: [
      {cardImg:'../../assets/cards/2004-2006",numImg:'../../assets/04.png'},
    ]
  },
  {
    "name": "--",
    sprite1: '../../assets/sprites/blank",
    sprite2: '../../assets/hyphen",
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'dark",
    event: '",
    "decklist": {
      "pokemon": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ], "trainer": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ], "energy": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ]
    },
    deck: [
      {cardImg:'../../assets/cards/2004-2006",numImg:'../../assets/04.png'},
    ]
  },
]

"seniors": [
  {
    "name": "Elsina Mantzel",
    sprite1: '../../assets/sprites/blank",
    sprite2: '../../assets/sprites/blaziken",
    list: '../../assets/list-icon",
    type: 'dark",
    event: '",
    "decklist": {
      "pokemon": [
        { "count": 3, "name": "Blaziken", "set": "RS", "number": "3" },
        { "count": 2, "name": "Blaziken ex", "set": "MA", "number": "89" },
        { "count": 2, "name": "Combusken", "set": "RS", "number": "28" },
        { "count": 4, "name": "Torchic", "set": "RS", "number": "74" },
        { "count": 2, "name": "Delcatty", "set": "RS", "number": "5" },
        { "count": 2, "name": "Skitty", "set": "RS", "number": "44" },
        { "count": 2, "name": "Team Aqua's Manectric", "set": "MA", "number": "4" },
        { "count": 2, "name": "Team Aqua's Electrike", "set": "MA", "number": "53" },
        { "count": 2, "name": "Dunsparce", "set": "SS", "number": "60" },
        { "count": 2, "name": "Rayquaza ex", "set": "DR", "number": "97" }
      ], "trainer": [
        { "count": 4, "name": "Prof. Oak's Research", "set": "FL", "number": "98" },
        { "count": 3, "name": "Oracle", "set": "SK", "number": "138" },
        { "count": 2, "name": "Copycat", "set": "EX", "number": "138" },
        { "count": 1, "name": "TV Reporter", "set": "DR", "number": "88" },
        { "count": 1, "name": "Professor Elm's Training Method", "set": "EX", "number": "148" },
        { "count": 1, "name": "Town Volunteers", "set": "AQ", "number": "136" },
        { "count": 1, "name": "Professor Birch", "set": "RS", "number": "89" },
        { "count": 1, "name": "Archie", "set": "MA", "number": "71" },
        { "count": 4, "name": "Rare Candy", "set": "SS", "number": "88" },
        { "count": 1, "name": "Switch", "set": "EX", "number": "157" },
        { "count": 1, "name": "Ancient Technical Machine [Rock]", "set": "HL", "number": "85" }
      ], "energy": [
        { "count": 13, "name": "Fire Energy", "set": "EX", "number": "161" },
        { "count": 4, "name": "Lightning Energy", "set": "EX", "number": "163" }
      ]
    }
  },
  {
    "name": "--",
    sprite1: '../../assets/sprites/blank",
    sprite2: '../../assets/hyphen",
    // // list../../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    event: '",
    "decklist": {
      "pokemon": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ], "trainer": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ], "energy": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ]
    },
    deck: [
      {cardImg:'../../assets/cards/2004-2006",numImg:'../../assets/04.png'},
    ]
  },
]

"juniors": [
  {
    "name": "Steven Widlic",
    sprite1: '../../assets/sprites/sceptile",
    sprite2: '../../assets/sprites/muk",
    list: '../../assets/list-icon",
    type: 'dark",
    event: '",
    "decklist": {
      "pokemon": [
        { "count": 3, "name": "Sceptile ex", "set": "MA", "number": "93" },
        { "count": 2, "name": "Sceptile", "set": "RS", "number": "20" },
        { "count": 4, "name": "Grovyle", "set": "RS", "number": "32" },
        { "count": 4, "name": "Treecko", "set": "RS", "number": "76" },
        { "count": 3, "name": "Muk ex", "set": "DR", "number": "96" },
        { "count": 3, "name": "Grimer", "set": "DR", "number": "57" },
        { "count": 3, "name": "Dunsparce", "set": "SS", "number": "60" },
        { "count": 1, "name": "Marill", "set": "SS", "number": "68" }
      ], "trainer": [
        { "count": 4, "name": "Copycat", "set": "EX", "number": "138" },
        { "count": 3, "name": "Oracle", "set": "SK", "number": "138" },
        { "count": 2, "name": "Professor Elm's Training Method", "set": "EX", "number": "148" },
        { "count": 2, "name": "TV Reporter", "set": "DR", "number": "88" },
        { "count": 2, "name": "Pokémon Nurse", "set": "EX", "number": "145" },
        { "count": 2, "name": "Steven's Advice", "set": "HL", "number": "92" },
        { "count": 1, "name": "Town Volunteers", "set": "AQ", "number": "136" },
        { "count": 2, "name": "Switch", "set": "RS", "number": "92" },
        { "count": 2, "name": "Warp Point", "set": "MA", "number": "85" }
      ], "energy": [
        { "count": 14, "name": "Grass Energy", "set": "EX", "number": "162" },
        { "count": 3, "name": "Boost Energy", "set": "AQ", "number": "145" }
      ]
    }
  },
  {
    "name": "Evens Cheung",
    sprite1: '../../assets/sprites/blaziken",
    sprite2: '../../assets/sprites/claydol",
    list: '../../assets/list-icon",
    type: 'dark",
    event: '",
    "decklist": {
      "pokemon": [
        { "count": 2, "name": "Blaziken ex", "set": "MA", "number": "89" },
        { "count": 2, "name": "Blaziken", "set": "RS", "number": "3" },
        { "count": 3, "name": "Combusken", "set": "RS", "number": "28" },
        { "count": 4, "name": "Torchic", "set": "RS", "number": "74" },
        { "count": 3, "name": "Linoone", "set": "RS", "number": "38" },
        { "count": 3, "name": "Zigzagoon", "set": "RS", "number": "79" },
        { "count": 2, "name": "Team Magma's Claydol", "set": "MA", "number": "8" },
        { "count": 2, "name": "Team Magma's Baltoy", "set": "MA", "number": "60" },
        { "count": 2, "name": "Wobbuffet", "set": "SS", "number": "26" },
        { "count": 1, "name": "Jirachi", "set": "HL", "number": "8" }
      ], "trainer": [
        { "count": 4, "name": "Prof. Oak's Research", "set": "FL", "number": "98" },
        { "count": 2, "name": "Copycat", "set": "EX", "number": "138" },
        { "count": 2, "name": "Pokémon Nurse", "set": "EX", "number": "145" },
        { "count": 1, "name": "Juggler", "set": "AQ", "number": "126" },
        { "count": 3, "name": "Life Herb", "set": "FL", "number": "93" },
        { "count": 2, "name": "Rare Candy", "set": "SS", "number": "88" },
        { "count": 2, "name": "Warp Point", "set": "EX", "number": "152" },
        { "count": 1, "name": "Ancient Technical Machine [Rock]", "set": "HL", "number": "85" },
        { "count": 1, "name": "Ancient Tomb", "set": "HL", "number": "87" }
      ], "energy": [
        { "count": 12, "name": "Fire Energy", "set": "EX", "number": "161" },
        { "count": 6, "name": "Psychic Energy", "set": "EX", "number": "164" }
      ]
    }
  },
  {
    "name": "Matr Frid",
    sprite1: '../../assets/sprites/blank",
    sprite2: '../../assets/hyphen",
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'dark",
    event: '",
    "decklist": {
      "pokemon": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ], "trainer": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ], "energy": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ]
    },
    deck: [
      {cardImg:'../../assets/cards/2004-2006",numImg:'../../assets/04.png'},
    ]
  },
  {
    "name": "--",
    sprite1: '../../assets/sprites/blank",
    sprite2: '../../assets/hyphen",
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'dark",
    event: '",
    "decklist": {
      "pokemon": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ], "trainer": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ], "energy": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ]
    },
    deck: [
      {cardImg:'../../assets/cards/2004-2006",numImg:'../../assets/04.png'},
    ]
  },
]

let tenEvent = [
  {
    "name": "Dennis Draheim",
    sprite1: '../../assets/sprites/blank",
    sprite2: '../../assets/sprites/swampert",
    list: '../../assets/list-icon",
    type: 'dark",
    event: '",
    "decklist": {
      "pokemon": [
        { "count": 3, "name": "Swampert", "set": "RS", "number": "13" },
        { "count": 1, "name": "Swampert ex", "set": "MA", "number": "95" },
        { "count": 2, "name": "Marshtomp", "set": "RS", "number": "40" },
        { "count": 4, "name": "Mudkip", "set": "RS", "number": "59" },
        { "count": 4, "name": "Dunsparce", "set": "SS", "number": "60" },
        { "count": 2, "name": "Delcatty", "set": "RS", "number": "5" },
        { "count": 2, "name": "Skitty", "set": "RS", "number": "44" },
        { "count": 2, "name": "Suicune ex", "set": "MA", "number": "94" },
        { "count": 1, "name": "Kyogre ex", "set": "HL", "number": "94" }
      ], "trainer": [
        { "count": 4, "name": "Oracle", "set": "SK", "number": "138" },
        { "count": 3, "name": "Steven's Advice", "set": "HL", "number": "92" },
        { "count": 2, "name": "Desert Shaman", "set": "SK", "number": "123" },
        { "count": 2, "name": "Prof. Oak's Research", "set": "FL", "number": "98" },
        { "count": 1, "name": "Fisherman", "set": "SK", "number": "125" },
        { "count": 3, "name": "Rare Candy", "set": "SS", "number": "88" },
        { "count": 3, "name": "Pokémon Reversal", "set": "RS", "number": "87" },
        { "count": 2, "name": "Energy Restore", "set": "RS", "number": "81" },
        { "count": 1, "name": "Warp Point", "set": "MA", "number": "85" },
        { "count": 1, "name": "Switch", "set": "RS", "number": "92" },
        { "count": 1, "name": "Crystal Shard", "set": "SK", "number": "122" },
        { "count": 1, "name": "Island Cave", "set": "HL", "number": "89" }
      ], "energy": [
        { "count": 15, "name": "Water Energy", "set": "EX", "number": "165" }
      ]
    }
  },
  {
    "name": "Max Benczek",
    sprite1: '../../assets/sprites/blank",
    sprite2: '../../assets/sprites/swampert",
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'dark",
    event: '",
    "decklist": {
      "pokemon": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ], "trainer": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ], "energy": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ]
    },
    deck: [
      {cardImg:'../../assets/cards/2004-2006",numImg:'../../assets/04.png'},
    ]
  },
]

let fiveEvent = [
  {
    "name": "Andy Cheung",
    sprite1: '../../assets/sprites/blank",
    sprite2: '../../assets/sprites/gardevoir",
    list: '../../assets/list-icon",
    type: 'dark",
    event: '",
    "decklist": {
      "pokemon": [
        { "count": 2, "name": "Gardevoir ex", "set": "SS", "number": "96" },
        { "count": 2, "name": "Gardevoir", "set": "RS", "number": "7" },
        { "count": 4, "name": "Kirlia", "set": "RS", "number": "34" },
        { "count": 4, "name": "Ralts", "set": "RS", "number": "66" },
        { "count": 3, "name": "Team Magma's Claydol", "set": "MA", "number": "8" },
        { "count": 3, "name": "Team Magma's Baltoy", "set": "MA", "number": "60" },
        { "count": 3, "name": "Wobbuffet", "set": "SS", "number": "26" },
        { "count": 2, "name": "Dunsparce", "set": "SS", "number": "60" }
      ], "trainer": [
        { "count": 2, "name": "Copycat", "set": "EX", "number": "138" },
        { "count": 2, "name": "Prof. Oak's Research", "set": "FL", "number": "98" },
        { "count": 2, "name": "Bill's Maintenance", "set": "FL", "number": "87" },
        { "count": 4, "name": "Moo-Moo Milk", "set": "N1", "number": "101" },
        { "count": 3, "name": "Switch", "set": "RS", "number": "92" },
        { "count": 2, "name": "Energy Restore", "set": "RS", "number": "81" },
        { "count": 2, "name": "Potion", "set": "FL", "number": "101" },
        { "count": 1, "name": "Ancient Technical Machine [Rock]", "set": "HL", "number": "85" },
        { "count": 1, "name": "Magnetic Storm", "set": "HL", "number": "91" }
      ], "energy": [
        { "count": 14, "name": "Psychic Energy", "set": "EX", "number": "164" },
        { "count": 4, "name": "Boost Energy", "set": "AQ", "number": "145" }
      ]
    }
  },
  {
    "name": "--",
    sprite1: '../../assets/sprites/blank",
    sprite2: '../../assets/hyphen",
    // // list../../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    event: '",
    "decklist": {
      "pokemon": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ], "trainer": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ], "energy": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ]
    },
    deck: [
      {cardImg:'../../assets/cards/2004-2006",numImg:'../../assets/04.png'},
    ]
  },
]

let sixEvent = [
  {
    "name": "André Moshellen",
    sprite1: '../../assets/sprites/blank",
    sprite2: '../../assets/sprites/kyogre",
    list: '../../assets/list-icon",
    type: 'water",
    event: '",
    "decklist": {
      "pokemon": [
        { "count": 2, "name": "Team Aqua's Kyogre", "set": "MA", "number": "3" },
        { "count": 2, "name": "Team Aqua's Walrein", "set": "MA", "number": "6" },
        { "count": 2, "name": "Team Aqua's Sealeo", "set": "MA", "number": "16" },
        { "count": 3, "name": "Team Aqua's Spheal", "set": "MA", "number": "57" },
        { "count": 2, "name": "Team Aqua's Sharpedo", "set": "MA", "number": "5" },
        { "count": 2, "name": "Team Aqua's Carvanha", "set": "MA", "number": "48" },
        { "count": 2, "name": "Team Aqua's Mightyena", "set": "MA", "number": "30" },
        { "count": 2, "name": "Team Aqua's Poochyena", "set": "MA", "number": "55" }
      ], "trainer": [
        { "count": 3, "name": "Bill's Maintenance", "set": "EX", "number": "137" },
        { "count": 3, "name": "Copycat", "set": "EX", "number": "138" },
        { "count": 3, "name": "Team Aqua Schemer", "set": "MA", "number": "69" },
        { "count": 2, "name": "Team Aqua Conspirator", "set": "MA", "number": "77" },
        { "count": 2, "name": "Archie", "set": "MA", "number": "71" },
        { "count": 2, "name": "TV Reporter", "set": "DR", "number": "88" },
        { "count": 1, "name": "Lanette's Net Search", "set": "SS", "number": "87" },
        { "count": 1, "name": "Steven's Advice", "set": "HL", "number": "92" },
        { "count": 1, "name": "Professor Oak's Research", "set": "EX", "number": "149" },
        { "count": 1, "name": "Town Volunteers", "set": "AQ", "number": "136" },
        { "count": 3, "name": "Moo-Moo Milk", "set": "N1", "number": "101" },
        { "count": 2, "name": "Team Aqua Ball", "set": "MA", "number": "75" },
        { "count": 1, "name": "Warp Point", "set": "MA", "number": "85" }
      ], "energy": [
        { "count": 14, "name": "Water Energy", "set": "EX", "number": "165" },
        { "count": 4, "name": "Darkness Energy", "set": "AQ", "number": "142" }
      ]
    }
  },
  {
    "name": "--",
    sprite1: '../../assets/sprites/blank",
    sprite2: '../../assets/hyphen",
    // // list../../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    event: '",
    "decklist": {
      "pokemon": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ], "trainer": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ], "energy": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ]
    },
    deck: [
      {cardImg:'../../assets/cards/2004-2006",numImg:'../../assets/04.png'},
    ]
  },
]

let sevenEvent = [
  {
    "name": "Ivan Grixti",
    sprite1: '../../assets/sprites/espeon",
    sprite2: '../../assets/sprites/hitmonchan",
    // // list../../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    event: '",
    "decklist": {
      "pokemon": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ], "trainer": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ], "energy": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ]
    },
    deck: [
      {cardImg:'../../assets/cards/2004-2006",numImg:'../../assets/04.png'},
    ]
  },
  {
    "name": "Carlos Cachia",
    sprite1: '../../assets/sprites/aerodactyl",
    sprite2: '../../assets/sprites/egg",
    // // list../../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    event: '",
    "decklist": {
      "pokemon": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ], "trainer": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ], "energy": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ]
    },
    deck: [
      {cardImg:'../../assets/cards/2004-2006",numImg:'../../assets/04.png'},
    ]
  },
  {
    "name": "Alexander Farrugia", //https://www.pojo.com/KillerDecks/2004/National%20Malta%20Pokemon%20Tournament.htm
    sprite1: '../../assets/sprites/wigglytuff",
    sprite2: '../../assets/sprites/scyther",
    list: '../../assets/list-icon",
    type: 'normal",
    event: '",
    "decklist": {
      "pokemon": [
        { "count": 3, "name": "Wigglytuff", "set": "JU", "number": "32" },
        { "count": 3, "name": "Jigglypuff", "set": "JU", "number": "54" },
        { "count": 3, "name": "Scyther", "set": "JU", "number": "26" },
        { "count": 3, "name": "Cleffa", "set": "N1", "number": "20" },
        { "count": 1, "name": "Erika's Jigglypuff", "set": "G2", "number": "69" },
        { "count": 1, "name": "Erika's Dratini", "set": "G1", "number": "42" },
        { "count": 1, "name": "Pichu", "set": "N1", "number": "12" },
        { "count": 1, "name": "Tyrogue", "set": "N2", "number": "66" }
      ], "trainer": [
        { "count": 4, "name": "Professor Oak", "set": "BS", "number": "88" },
        { "count": 4, "name": "Computer Search", "set": "BS", "number": "71" },
        { "count": 3, "name": "Item Finder", "set": "BS", "number": "74" },
        { "count": 3, "name": "Super Energy Removal", "set": "BS", "number": "79" },
        { "count": 3, "name": "PlusPower", "set": "BS", "number": "84" },
        { "count": 3, "name": "Gust of Wind", "set": "BS", "number": "93" },
        { "count": 2, "name": "Pokémon Fan Club", "set": "AQ", "number": "130" },
        { "count": 2, "name": "Energy Charge", "set": "N1", "number": "85" },
        { "count": 1, "name": "Professor Elm", "set": "N1", "number": "96" },
        { "count": 1, "name": "Switch", "set": "BS", "number": "95" },
        { "count": 1, "name": "Town Volunteers", "set": "AQ", "number": "136" },
        { "count": 2, "name": "Focus Band", "set": "N1", "number": "86" },
        { "count": 1, "name": "Gold Berry", "set": "N1", "number": "93" },
        { "count": 1, "name": "Low Pressure System", "set": "DR", "number": "86" }
      ], "energy": [
        { "count": 2, "name": "Grass Energy", "set": "BS", "number": "99" },
        { "count": 4, "name": "Double Colorless Energy", "set": "BS", "number": "96" },
        { "count": 4, "name": "Recycle Energy", "set": "N1", "number": "105" },
        { "count": 2, "name": "Boost Energy", "set": "AQ", "number": "145" },
        { "count": 1, "name": "Warp Energy", "set": "AQ", "number": "147" }
      ]
    }
  },
  {
    "name": "Glenn Steer",
    sprite1: '../../assets/sprites/swampert",
    sprite2: '../../assets/sprites/wailord",
    // // list../../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    event: '",
    "decklist": {
      "pokemon": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ], "trainer": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ], "energy": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ]
    },
    deck: [
      {cardImg:'../../assets/cards/2004-2006",numImg:'../../assets/04.png'},
    ]
  },
]

let eightEvent = [
  {
    "name": "Behrad Hossein",
    sprite1: '../../assets/sprites/blank",
    sprite2: '../../assets/sprites/kingdra",
    list: '../../assets/list-icon",
    type: 'normal",
    event: '",
    "decklist": {
      "pokemon": [
        { "count": 3, "name": "Kingdra ex", "set": "DR", "number": "92" },
        { "count": 3, "name": "Seadra", "set": "DR", "number": "39" },
        { "count": 1, "name": "Seadra", "set": "DR", "number": "40" },
        { "count": 2, "name": "Horsea", "set": "DR", "number": "33" },
        { "count": 2, "name": "Horsea", "set": "AQ", "number": "84" },
        { "count": 2, "name": "Linoone", "set": "RS", "number": "38" },
        { "count": 2, "name": "Zigzagoon", "set": "SS", "number": "85" },
        { "count": 2, "name": "Dunsparce", "set": "SS", "number": "60" },
        { "count": 2, "name": "Wobbuffet", "set": "SS", "number": "26" },
        { "count": 1, "name": "Aerodactyl ex", "set": "SS", "number": "94" }
      ], "trainer": [
        { "count": 2, "name": "Professor Elm's Training Method", "set": "UF", "number": "89" },
        { "count": 2, "name": "Desert Shaman", "set": "SK", "number": "123" },
        { "count": 2, "name": "TV Reporter", "set": "DR", "number": "88" },
        { "count": 2, "name": "Prof. Oak's Research", "set": "FL", "number": "98" },
        { "count": 1, "name": "Wally's Training", "set": "SS", "number": "89" },
        { "count": 1, "name": "Team Magma Conspirator", "set": "MA", "number": "82" },
        { "count": 1, "name": "Bill's Maintenance", "set": "FL", "number": "87" },
        { "count": 1, "name": "Pokémon Nurse", "set": "EX", "number": "145" },
        { "count": 1, "name": "Lanette's Net Search", "set": "SS", "number": "87" },
        { "count": 1, "name": "Steven's Advice", "set": "HL", "number": "92" },
        { "count": 1, "name": "Fisherman", "set": "SK", "number": "125" },
        { "count": 1, "name": "Relic Hunter", "set": "SK", "number": "120" },
        { "count": 2, "name": "Switch", "set": "RS", "number": "92" },
        { "count": 1, "name": "Potion", "set": "EX", "number": "156" },
        { "count": 1, "name": "Mysterious Fossil", "set": "SS", "number": "91" },
        { "count": 1, "name": "Warp Point", "set": "MA", "number": "85" },
        { "count": 1, "name": "Fast Ball", "set": "SK", "number": "124" },
        { "count": 1, "name": "Island Cave", "set": "HL", "number": "89" }
      ], "energy": [
        { "count": 12, "name": "Water Energy", "set": "EX", "number": "165" },
        { "count": 2, "name": "Psychic Energy", "set": "EX", "number": "164" },
        { "count": 2, "name": "Boost Energy", "set": "DF", "number": "87" },
        { "count": 1, "name": "Multi Energy", "set": "SS", "number": "93" }
      ]
    }
  },
  {
    "name": "--",
    sprite1: '../../assets/sprites/blank",
    sprite2: '../../assets/hyphen",
    // // list../../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    event: '",
    "decklist": {
      "pokemon": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ], "trainer": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ], "energy": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ]
    },
    deck: [
      {cardImg:'../../assets/cards/2004-2006",numImg:'../../assets/04.png'},
    ]
  },
]

let nineEvent = [
  {
    "name": "eeee",
    sprite1: '../../assets/sprites",
    sprite2: '../../assets/sprites",
    // // list../../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    event: '",
    "decklist": {
      "pokemon": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ], "trainer": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ], "energy": [
        { "count": 0, "name": "example", "set": "aa", "number": "00" }
      ]
    },
    deck: [
      {cardImg:'../../assets/cards/2004-2006",numImg:'../../assets/04.png'},
    ]
  },
]