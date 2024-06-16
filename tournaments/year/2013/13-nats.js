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
        firstName: 'Anna Schipper',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/zekrom.png',
        sprite2: '../../assets/sprites/eelektrik.png',
        list: '../../assets/list-icon.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        { "count": 3, "name": "Zekrom", "set": "BLW", "number": "47" },
        { "count": 1, "name": "Zekrom-EX", "set": "NXD", "number": "51" },
        { "count": 3, "name": "Eelektrik", "set": "NVI", "number": "40" },
        { "count": 4, "name": "Tynamo", "set": "NVI", "number": "38" },
        { "count": 2, "name": "Bouffalant", "set": "DRX", "number": "110" },
        { "count": 1, "name": "Mr. Mime", "set": "PLF", "number": "47" },
        { "count": 1, "name": "Keldeo-EX", "set": "BCR", "number": "49" },
      ], "trainer": [
        { "count": 4, "name": "Professor Juniper", "set": "DEX", "number": "98" },
        { "count": 4, "name": "N", "set": "DEX", "number": "96" },
        { "count": 3, "name": "Colress", "set": "PLS", "number": "118" },
        { "count": 2, "name": "Skyla", "set": "BCR", "number": "134" },
        { "count": 1, "name": "Dowsing Machine", "set": "PLS", "number": "128" },
        { "count": 4, "name": "Ultra Ball", "set": "DEX", "number": "102" },
        { "count": 4, "name": "Hypnotoxic Laser", "set": "PLS", "number": "123" },
        { "count": 4, "name": "Pokémon Catcher", "set": "EPO", "number": "95" },
        { "count": 2, "name": "Level Ball", "set": "NXD", "number": "89" },
        { "count": 1, "name": "Switch", "set": "BLW", "number": "104" },
        { "count": 1, "name": "Super Rod", "set": "NVI", "number": "95" },
        { "count": 2, "name": "Float Stone", "set": "PLF", "number": "99" },
        { "count": 2, "name": "Virbank City Gym", "set": "PLS", "number": "126" },
      ], "energy": [
        { "count": 7, "name": "Lightning Energy", "set": "BLW", "number": "108" },
        { "count": 4, "name": "Double Colorless Energy", "set": "NXD", "number": "92" },
      ]
    },
    },
    {
        firstName: 'Mees Brenninkmeijer',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/darkrai.png',
        sprite2: '../../assets/sprites/sableye.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Elmer Stouten',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/klinklang.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'David Booij',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
]



let juniors = [
    {
        firstName: 'Janik Reimers',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/darkrai.png',
        sprite2: '../../assets/sprites/sableye.png',
        list: '../../assets/list-icon.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        { "count": 4, "name": "Darkrai-EX", "set": "DEX", "number": "63" },
        { "count": 3, "name": "Sableye", "set": "DEX", "number": "62" },
        { "count": 1, "name": "Absol", "set": "PLF", "number": "67" },
        { "count": 1, "name": "Keldeo-EX", "set": "BCR", "number": "49" },
      ], "trainer": [
        { "count": 4, "name": "Professor Juniper", "set": "DEX", "number": "98" },
        { "count": 3, "name": "N", "set": "DEX", "number": "96" },
        { "count": 2, "name": "Skyla", "set": "BCR", "number": "134" },
        { "count": 1, "name": "Computer Search", "set": "BCR", "number": "137" },
        { "count": 4, "name": "Dark Patch", "set": "DEX", "number": "93" },
        { "count": 4, "name": "Hypnotoxic Laser", "set": "PLS", "number": "123" },
        { "count": 4, "name": "Pokémon Catcher", "set": "EPO", "number": "95" },
        { "count": 3, "name": "Energy Switch", "set": "LTR", "number": "112" },
        { "count": 3, "name": "Ultra Ball", "set": "DEX", "number": "102" },
        { "count": 3, "name": "Bicycle", "set": "PLS", "number": "117" },
        { "count": 2, "name": "Energy Switch", "set": "LTR", "number": "112" },
        { "count": 1, "name": "Random Receiver", "set": "DEX", "number": "99" },
        { "count": 1, "name": "Enhanced Hammer", "set": "DEX", "number": "94" },
        { "count": 1, "name": "Max Potion", "set": "EPO", "number": "94" },
        { "count": 1, "name": "Tool Scrapper", "set": "DRX", "number": "116" },
        { "count": 2, "name": "Dark Claw", "set": "DEX", "number": "92" },
        { "count": 2, "name": "Virbank City Gym", "set": "PLS", "number": "126" },
      ], "energy": [
        { "count": 10, "name": "Darkness Energy", "set": "BLW", "number": "111" },
      ]
    },
    },
    {
        firstName: 'Joshua Galys',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/darkrai.png',
        sprite2: '../../assets/sprites/sableye.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Paul Student',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Steven Mao',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Merlin Quittek',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/landorus-therian.png',
        sprite2: '../../assets/sprites/garbodor.png',
        list: '../../assets/list-icon.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        { "count": 3, "name": "Landorus-EX", "set": "BCR", "number": "89" },
        { "count": 3, "name": "Mewtwo-EX", "set": "NXD", "number": "54" },
        { "count": 3, "name": "Garbodor", "set": "DRX", "number": "54" },
        { "count": 2, "name": "Trubbish", "set": "DRX", "number": "53" },
        { "count": 1, "name": "Trubbish", "set": "NVI", "number": "48" },
      ], "trainer": [
        { "count": 4, "name": "Professor Juniper", "set": "DEX", "number": "98" },
        { "count": 4, "name": "N", "set": "DEX", "number": "96" },
        { "count": 4, "name": "Skyla", "set": "BCR", "number": "134" },
        { "count": 1, "name": "Colress", "set": "PLS", "number": "118" },
        { "count": 1, "name": "Computer Search", "set": "BCR", "number": "137" },
        { "count": 4, "name": "Hypnotoxic Laser", "set": "PLS", "number": "123" },
        { "count": 4, "name": "Pokémon Catcher", "set": "EPO", "number": "95" },
        { "count": 3, "name": "Ultra Ball", "set": "DEX", "number": "102" },
        { "count": 2, "name": "Switch", "set": "BLW", "number": "104" },
        { "count": 2, "name": "Escape Rope", "set": "PLS", "number": "120" },
        { "count": 4, "name": "Float Stone", "set": "PLF", "number": "99" },
        { "count": 2, "name": "Rescue Scarf", "set": "DRX", "number": "115" },
        { "count": 2, "name": "Virbank City Gym", "set": "PLS", "number": "126" },
      ], "energy": [
        { "count": 7, "name": "Fighting Energy", "set": "BLW", "number": "110" },
        { "count": 4, "name": "Double Colorless Energy", "set": "NXD", "number": "92" },
      ]
    },
    },
    {
        firstName: 'Markus Jakob',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/darkrai.png',
        sprite2: '../../assets/sprites/sableye.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Thomas Werth',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/darkrai.png',
        sprite2: '../../assets/sprites/sableye.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Tobias Thesing',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        list: '../../assets/list-icon.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        { "count": 2, "name": "Kyurem", "set": "PLF", "number": "31" },
        { "count": 3, "name": "Deoxys-EX", "set": "PLF", "number": "53" },
        { "count": 3, "name": "Thundurus-EX", "set": "PLF", "number": "38" },
        { "count": 1, "name": "Lugia-EX", "set": "PLS", "number": "108" },
        { "count": 1, "name": "Snorlax", "set": "PLS", "number": "101" },
      ], "trainer": [
        { "count": 4, "name": "Professor Juniper", "set": "DEX", "number": "98" },
        { "count": 4, "name": "N", "set": "DEX", "number": "96" },
        { "count": 2, "name": "Colress", "set": "PLS", "number": "118" },
        { "count": 2, "name": "Skyla", "set": "BCR", "number": "134" },
        { "count": 2, "name": "Bianca", "set": "EPO", "number": "90" },
        { "count": 1, "name": "Scramble Switch", "set": "PLS", "number": "129" },
        { "count": 4, "name": "Pokémon Catcher", "set": "EPO", "number": "95" },
        { "count": 3, "name": "Colress Machine", "set": "PLS", "number": "119" },
        { "count": 3, "name": "Switch", "set": "BLW", "number": "104" },
        { "count": 2, "name": "Ultra Ball", "set": "DEX", "number": "102" },
        { "count": 2, "name": "Team Plasma Ball", "set": "PLF", "number": "105" },
        { "count": 1, "name": "Max Potion", "set": "EPO", "number": "94" },
        { "count": 1, "name": "Revive", "set": "BLW", "number": "102" },
        { "count": 1, "name": "Float Stone", "set": "PLF", "number": "99" },
        { "count": 3, "name": "Frozen City", "set": "PLF", "number": "100" },
      ], "energy": [
        { "count": 1, "name": "Water Energy", "set": "BLW", "number": "107" },
        { "count": 1, "name": "Lightning Energy", "set": "BLW", "number": "108" },
        { "count": 4, "name": "Plasma Energy", "set": "PLS", "number": "127" },
        { "count": 4, "name": "Prism Energy", "set": "NXD", "number": "93" },
        { "count": 3, "name": "Blend Energy WaterLightningFightingMetal", "set": "DRX", "number": "118" },
        { "count": 2, "name": "Double Colorless Energy", "set": "NXD", "number": "92" },
      ]
    },
    },
    {
        firstName: 'Denny Falls Rodriguez',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/accelgor.png',
        sprite2: '../../assets/sprites/gothitelle.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Finn Looft',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/accelgor.png',
        sprite2: '../../assets/sprites/gothitelle.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Dennis Seebürger',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/klinklang.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Daniel Hetzel',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/darkrai.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Marcel Lung',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/darkrai.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Ole Stognief',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/klinklang.png',
        list: '../../assets/list-icon.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        { "count": 2, "name": "Klinklang", "set": "BLW", "number": "76" },
        { "count": 2, "name": "Klinklang", "set": "PLS", "number": "90" },
        { "count": 1, "name": "Klang", "set": "DEX", "number": "76" },
        { "count": 4, "name": "Klink", "set": "DEX", "number": "75" },
        { "count": 4, "name": "Cobalion-EX", "set": "PLS", "number": "93" },
        { "count": 1, "name": "Cobalion", "set": "NVI", "number": "84" },
      ], "trainer": [
        { "count": 4, "name": "Colress", "set": "PLS", "number": "118" },
        { "count": 4, "name": "N", "set": "DEX", "number": "96" },
        { "count": 2, "name": "Skyla", "set": "BCR", "number": "134" },
        { "count": 1, "name": "Computer Search", "set": "BCR", "number": "137" },
        { "count": 4, "name": "Heavy Ball", "set": "NXD", "number": "88" },
        { "count": 4, "name": "Max Potion", "set": "EPO", "number": "94" },
        { "count": 4, "name": "Rare Candy", "set": "DEX", "number": "100" },
        { "count": 3, "name": "Pokémon Catcher", "set": "EPO", "number": "95" },
        { "count": 3, "name": "Switch", "set": "BLW", "number": "104" },
        { "count": 1, "name": "Tool Scrapper", "set": "DRX", "number": "116" },
        { "count": 1, "name": "Super Rod", "set": "NVI", "number": "95" },
        { "count": 1, "name": "Float Stone", "set": "PLF", "number": "99" },
        { "count": 4, "name": "Tropical Beach", "set": "PR-BLW", "number": "50" },
      ], "energy": [
        { "count": 10, "name": "Metal Energy", "set": "BLW", "number": "112" },
      ]
    },
    },
    {
        firstName: 'Marc Lutz',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Benjamin Cheynubrata',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        list: '../../assets/list-icon.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        { "count": 4, "name": "Kyurem", "set": "PLF", "number": "31" },
        { "count": 3, "name": "Deoxys-EX", "set": "PLF", "number": "53" },
        { "count": 3, "name": "Thundurus-EX", "set": "PLF", "number": "38" },
        { "count": 1, "name": "Absol", "set": "PLF", "number": "67" },
      ], "trainer": [
        { "count": 4, "name": "Professor Juniper", "set": "DEX", "number": "98" },
        { "count": 4, "name": "N", "set": "DEX", "number": "96" },
        { "count": 3, "name": "Colress", "set": "PLS", "number": "118" },
        { "count": 1, "name": "Skyla", "set": "BCR", "number": "134" },
        { "count": 1, "name": "Shadow Triad", "set": "PLF", "number": "102" },
        { "count": 1, "name": "Dowsing Machine", "set": "PLS", "number": "128" },
        { "count": 4, "name": "Team Plasma Ball", "set": "PLF", "number": "105" },
        { "count": 4, "name": "Pokémon Catcher", "set": "EPO", "number": "95" },
        { "count": 4, "name": "Colress Machine", "set": "PLS", "number": "119" },
        { "count": 3, "name": "Switch", "set": "BLW", "number": "104" },
        { "count": 3, "name": "Hypnotoxic Laser", "set": "PLS", "number": "123" },
        { "count": 1, "name": "Max Potion", "set": "EPO", "number": "94" },
        { cardImg: '../../assets/cards/2010-2012/enhanced-hammer-bw.png', numImg: '../../assets/01.png' },
        { "count": 1, "name": "Float Stone", "set": "PLF", "number": "99" },
        { "count": 1, "name": "Virbank City Gym", "set": "PLS", "number": "126" },
        { "count": 1, "name": "Frozen City", "set": "PLF", "number": "100" },
      ], "energy": [
        { "count": 2, "name": "Water Energy", "set": "BLW", "number": "107" },
        { "count": 1, "name": "Lightning Energy", "set": "BLW", "number": "108" },
        { "count": 4, "name": "Plasma Energy", "set": "PLS", "number": "127" },
        { "count": 4, "name": "Prism Energy", "set": "NXD", "number": "93" },
        { "count": 1, "name": "Blend Energy WaterLightningFightingMetal", "set": "DRX", "number": "118" },
      ]
    },
    },
]

let tenEvent = [
    {
        firstName: 'Mehdi Hafi',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/landorus-therian.png',
        sprite2: '../../assets/sprites/tornadus.png',
        list: '../../assets/list-icon.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        { "count": 3, "name": "Landorus-EX", "set": "BCR", "number": "89" },
        { "count": 3, "name": "Tornadus-EX", "set": "DEX", "number": "90" },
        { "count": 2, "name": "Mewtwo-EX", "set": "NXD", "number": "54" },
        { "count": 2, "name": "Terrakion", "set": "NVI", "number": "73" },
      ], "trainer": [
        { "count": 4, "name": "Professor Juniper", "set": "DEX", "number": "98" },
        { "count": 3, "name": "N", "set": "DEX", "number": "96" },
        { "count": 3, "name": "Skyla", "set": "BCR", "number": "134" },
        { "count": 1, "name": "Colress", "set": "PLS", "number": "118" },
        { "count": 1, "name": "Bianca", "set": "EPO", "number": "90" },
        { "count": 1, "name": "Computer Search", "set": "BCR", "number": "137" },
        { "count": 4, "name": "Pokémon Catcher", "set": "EPO", "number": "95" },
        { "count": 4, "name": "Hypnotoxic Laser", "set": "PLS", "number": "123" },
        { "count": 4, "name": "Switch", "set": "BLW", "number": "104" },
        { "count": 2, "name": "Ultra Ball", "set": "DEX", "number": "102" },
        { "count": 2, "name": "Bicycle", "set": "PLS", "number": "117" },
        { "count": 2, "name": "Energy Switch", "set": "LTR", "number": "112" },
        { "count": 2, "name": "PlusPower", "set": "BLW", "number": "96" },
        { "count": 1, "name": "Energy Search", "set": "BCR", "number": "128" },
        { "count": 1, "name": "Max Potion", "set": "EPO", "number": "94" },
        { "count": 3, "name": "Virbank City Gym", "set": "PLS", "number": "126" },
      ], "energy": [
        { "count": 8, "name": "Fighting Energy", "set": "BLW", "number": "110" },
        { "count": 4, "name": "Double Colorless Energy", "set": "NXD", "number": "92" },
      ]
    },
    },
    {
        firstName: 'Antoine Avenard',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/keldeo-resolute.png',
        sprite2: '../../assets/sprites/blastoise.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Herve Guillemet',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/darkrai.png',
        sprite2: '../../assets/sprites/sableye.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Stéphane Ivanoff',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/landorus-therian.png',
        sprite2: '../../assets/sprites/tornadus.png',
        list: '../../assets/list-icon.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        { "count": 3, "name": "Landorus-EX", "set": "BCR", "number": "89" },
        { "count": 3, "name": "Tornadus-EX", "set": "DEX", "number": "90" },
        { "count": 2, "name": "Mewtwo-EX", "set": "NXD", "number": "54" },
        { "count": 2, "name": "Terrakion", "set": "NVI", "number": "73" },
      ], "trainer": [
        { "count": 4, "name": "Professor Juniper", "set": "DEX", "number": "98" },
        { "count": 3, "name": "N", "set": "DEX", "number": "96" },
        { "count": 3, "name": "Skyla", "set": "BCR", "number": "134" },
        { "count": 1, "name": "Colress", "set": "PLS", "number": "118" },
        { "count": 1, "name": "Bianca", "set": "EPO", "number": "90" },
        { "count": 1, "name": "Computer Search", "set": "BCR", "number": "137" },
        { "count": 4, "name": "Pokémon Catcher", "set": "EPO", "number": "95" },
        { "count": 4, "name": "Hypnotoxic Laser", "set": "PLS", "number": "123" },
        { "count": 4, "name": "Switch", "set": "BLW", "number": "104" },
        { "count": 2, "name": "Ultra Ball", "set": "DEX", "number": "102" },
        { "count": 2, "name": "Bicycle", "set": "PLS", "number": "117" },
        { "count": 2, "name": "Energy Switch", "set": "LTR", "number": "112" },
        { "count": 2, "name": "PlusPower", "set": "BLW", "number": "96" },
        { "count": 1, "name": "Energy Search", "set": "BCR", "number": "128" },
        { "count": 1, "name": "Max Potion", "set": "EPO", "number": "94" },
        { "count": 3, "name": "Virbank City Gym", "set": "PLS", "number": "126" },
      ], "energy": [
        { "count": 8, "name": "Fighting Energy", "set": "BLW", "number": "110" },
        { "count": 4, "name": "Double Colorless Energy", "set": "NXD", "number": "92" },
      ]
    },
    },
    {
        firstName: 'Anthony Coutinho',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/landorus-therian.png',
        sprite2: '../../assets/sprites/garbodor.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Tony Nguyen',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/landorus-therian.png',
        sprite2: '../../assets/sprites/tornadus.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Caroline Gianasso',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/klinklang.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Corentin Gaudfrain',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/klinklang.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Thomas Badell',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/landorus-therian.png',
        sprite2: '../../assets/sprites/tornadus.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Christophe Caron',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/keldeo-resolute.png',
        sprite2: '../../assets/sprites/blastoise.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Adrien Thiry',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/landorus-therian.png',
        sprite2: '../../assets/sprites/tornadus.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Matthieu Cornillon',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/keldeo-resolute.png',
        sprite2: '../../assets/sprites/blastoise.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Boris Gisselere',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/darkrai.png',
        sprite2: '../../assets/sprites/sableye.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Justine Woitrain',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/klinklang.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Kenny Amari',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/empoleon.png',
        sprite2: '../../assets/sprites/dusknoir.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Yann Rivière',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/tornadus.png',
        sprite2: '../../assets/sprites/bouffalant.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
]

let fiveEvent = [
    {
        firstName: 'Robert Kinbrum',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        list: '../../assets/list-icon.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        { "count": 4, "name": "Kyurem", "set": "PLF", "number": "31" },
        { "count": 4, "name": "Deoxys-EX", "set": "PLF", "number": "53" },
        { "count": 2, "name": "Thundurus-EX", "set": "PLF", "number": "38" },
      ], "trainer": [
        { "count": 4, "name": "Professor Juniper", "set": "DEX", "number": "98" },
        { "count": 3, "name": "N", "set": "DEX", "number": "96" },
        { "count": 2, "name": "Colress", "set": "PLS", "number": "118" },
        { "count": 2, "name": "Skyla", "set": "BCR", "number": "134" },
        { "count": 2, "name": "Bianca", "set": "EPO", "number": "90" },
        { "count": 1, "name": "Computer Search", "set": "BCR", "number": "137" },
        { "count": 4, "name": "Pokémon Catcher", "set": "EPO", "number": "95" },
        { "count": 4, "name": "Hypnotoxic Laser", "set": "PLS", "number": "123" },
        { "count": 3, "name": "Switch", "set": "BLW", "number": "104" },
        { "count": 3, "name": "Colress Machine", "set": "PLS", "number": "119" },
        { "count": 2, "name": "Team Plasma Ball", "set": "PLF", "number": "105" },
        { "count": 1, "name": "Ultra Ball", "set": "DEX", "number": "102" },
        { "count": 1, "name": "Random Receiver", "set": "DEX", "number": "99" },
        { "count": 1, "name": "Max Potion", "set": "EPO", "number": "94" },
        { "count": 2, "name": "Float Stone", "set": "PLF", "number": "99" },
        { "count": 2, "name": "Virbank City Gym", "set": "PLS", "number": "126" },
      ], "energy": [
        { "count": 2, "name": "Water Energy", "set": "BLW", "number": "107" },
        { "count": 1, "name": "Lightning Energy", "set": "BLW", "number": "108" },
        { "count": 4, "name": "Plasma Energy", "set": "PLS", "number": "127" },
        { "count": 4, "name": "Prism Energy", "set": "NXD", "number": "93" },
        { "count": 2, "name": "Blend Energy WaterLightningFightingMetal", "set": "DRX", "number": "118" },
      ]
    },
    },
    {
        firstName: 'Sami Sekkoum',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/keldeo-resolute.png',
        sprite2: '../../assets/sprites/blastoise.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Ben Armstead',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Jake Walvin',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        list: '../../assets/list-icon.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        { "count": 3, "name": "Kyurem", "set": "PLF", "number": "31" },
        { "count": 4, "name": "Deoxys-EX", "set": "PLF", "number": "53" },
        { "count": 2, "name": "Thundurus-EX", "set": "PLF", "number": "38" },
      ], "trainer": [
        { "count": 4, "name": "Professor Juniper", "set": "DEX", "number": "98" },
        { "count": 4, "name": "N", "set": "DEX", "number": "96" },
        { "count": 3, "name": "Colress", "set": "PLS", "number": "118" },
        { "count": 3, "name": "Skyla", "set": "BCR", "number": "134" },
        { "count": 1, "name": "Scramble Switch", "set": "PLS", "number": "129" },
        { "count": 4, "name": "Pokémon Catcher", "set": "EPO", "number": "95" },
        { "count": 4, "name": "Hypnotoxic Laser", "set": "PLS", "number": "123" },
        { "count": 4, "name": "Colress Machine", "set": "PLS", "number": "119" },
        { "count": 3, "name": "Switch", "set": "BLW", "number": "104" },
        { "count": 3, "name": "Ultra Ball", "set": "DEX", "number": "102" },
        { "count": 2, "name": "Team Plasma Ball", "set": "PLF", "number": "105" },
        { "count": 2, "name": "Float Stone", "set": "PLF", "number": "99" },
        { "count": 2, "name": "Virbank City Gym", "set": "PLS", "number": "126" },
      ], "energy": [
        { "count": 4, "name": "Plasma Energy", "set": "PLS", "number": "127" },
        { "count": 4, "name": "Prism Energy", "set": "NXD", "number": "93" },
        { "count": 4, "name": "Blend Energy WaterLightningFightingMetal", "set": "DRX", "number": "118" },
      ]
    },
    },
    {
        firstName: 'Adam Hawkins',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Kai Coolston',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/landorus-therian.png',
        sprite2: '../../assets/sprites/garbodor.png',
        list: '../../assets/list-icon.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        { "count": 3, "name": "Landorus-EX", "set": "BCR", "number": "89" },
        { "count": 2, "name": "Garbodor", "set": "DRX", "number": "54" },
        { "count": 3, "name": "Trubbish", "set": "PLS", "number": "65" },
        { "count": 2, "name": "Cobalion", "set": "NVI", "number": "84" },
        { "count": 1, "name": "Cobalion-EX", "set": "PLS", "number": "93" },
      ], "trainer": [
        { "count": 4, "name": "Professor Juniper", "set": "DEX", "number": "98" },
        { "count": 4, "name": "N", "set": "DEX", "number": "96" },
        { "count": 4, "name": "Skyla", "set": "BCR", "number": "134" },
        { "count": 2, "name": "Colress", "set": "PLS", "number": "118" },
        { "count": 1, "name": "Bianca", "set": "EPO", "number": "90" },
        { "count": 1, "name": "Scramble Switch", "set": "PLS", "number": "129" },
        { "count": 4, "name": "Pokémon Catcher", "set": "EPO", "number": "95" },
        { "count": 4, "name": "Hypnotoxic Laser", "set": "PLS", "number": "123" },
        { "count": 3, "name": "Ultra Ball", "set": "DEX", "number": "102" },
        { "count": 2, "name": "Max Potion", "set": "EPO", "number": "94" },
        { "count": 1, "name": "Heavy Ball", "set": "NXD", "number": "88" },
        { "count": 1, "name": "Switch", "set": "BLW", "number": "104" },
        { "count": 4, "name": "Float Stone", "set": "PLF", "number": "99" },
        { "count": 2, "name": "Virbank City Gym", "set": "PLS", "number": "126" },
      ], "energy": [
        { "count": 4, "name": "Fighting Energy", "set": "BLW", "number": "110" },
        { "count": 4, "name": "Prism Energy", "set": "NXD", "number": "93" },
        { "count": 4, "name": "Blend Energy WaterLightningFightingMetal", "set": "DRX", "number": "118" },
      ]
    },
    },
    {
        firstName: 'Oliver Barnett',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/darkrai.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Duncan Sugrue',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Alex Dao',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys-attack.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Darren Conlon',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/klinklang.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Michael Cornwall',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/keldeo-resolute.png',
        sprite2: '../../assets/sprites/blastoise.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Karl Blake',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Alex Holdway',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Scott Burgess',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Vlad Jelizarov',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Oliver Elwick',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
]

let sixEvent = [
    {
        firstName: 'Stephan N',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/lugia.png',
        sprite2: '../../assets/sprites/deoxys.png',
        list: '../../assets/list-icon.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        { "count": 2, "name": "Lugia-EX", "set": "PLS", "number": "108" },
        { "count": 2, "name": "Kyurem", "set": "PLF", "number": "31" },
        { "count": 3, "name": "Thundurus-EX", "set": "PLF", "number": "38" },
        { "count": 4, "name": "Deoxys-EX", "set": "PLF", "number": "53" },
      ], "trainer": [
        { "count": 4, "name": "Professor Juniper", "set": "DEX", "number": "98" },
        { "count": 3, "name": "N", "set": "DEX", "number": "96" },
        { "count": 2, "name": "Colress", "set": "PLS", "number": "118" },
        { "count": 2, "name": "Bianca", "set": "EPO", "number": "90" },
        { "count": 1, "name": "Skyla", "set": "BCR", "number": "134" },
        { "count": 1, "name": "Dowsing Machine", "set": "PLS", "number": "128" },
        { "count": 4, "name": "Pokémon Catcher", "set": "EPO", "number": "95" },
        { "count": 4, "name": "Hypnotoxic Laser", "set": "PLS", "number": "123" },
        { "count": 4, "name": "Colress Machine", "set": "PLS", "number": "119" },
        { "count": 2, "name": "Team Plasma Ball", "set": "PLF", "number": "105" },
        { "count": 2, "name": "Ultra Ball", "set": "DEX", "number": "102" },
        { "count": 2, "name": "Switch", "set": "BCR", "number": "135" },
        { "count": 2, "name": "Float Stone", "set": "PLF", "number": "99" },
        { "count": 2, "name": "Virbank City Gym", "set": "PLS", "number": "126" },
      ], "energy": [
        { "count": 4, "name": "Plasma Energy", "set": "PLS", "number": "127" },
        { "count": 4, "name": "Prism Energy", "set": "NXD", "number": "93" },
        { "count": 3, "name": "Blend Energy WaterLightningFightingMetal", "set": "DRX", "number": "118" },
        { "count": 3, "name": "Double Colorless Energy", "set": "NXD", "number": "92" },
      ]
    },
    },
    {
        firstName: 'Patrick C',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Peter H',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Jonas E',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Simon E',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Nikolai R',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Lars A',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/darkrai.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
    {
        firstName: 'Niels P',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/darkrai.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
]

let sevenEvent = [
    {
        firstName: 'eeee',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites',
        sprite2: '../../assets/sprites',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
]

let eightEvent = [
    {
        firstName: 'eeee',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites',
        sprite2: '../../assets/sprites',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
]

let nineEvent = [
    {
        firstName: 'eeee',
        flag: '../../../../assets/flags/eeee.png',
        sprite1: '../../assets/sprites',
        sprite2: '../../assets/sprites',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        event: '2013 Australia National Championships',
    decklist: {
      "pokemon": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "trainer": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ], "energy": [
        {"count": 0, "name": "example", "set": "aa", "number": "00"},
      ]
    },
    
    },
]