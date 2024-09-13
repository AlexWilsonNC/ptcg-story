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
        "name": "Alexander Farrugia",
        "sprite1": "zapdos",
        "sprite2": "electrike",
        list: '../../assets/list-icon",
        type: 'dark",
        event: '",
        "decklist": {
            "pokemon": [
                { "count": 4, "name": "Zapdos ex", "set": "FL", "number": "116" },
                { "count": 2, "name": "Manectric", "set": "DX", "number": "38" },
                { "count": 4, "name": "Electrike", "set": "DX", "number": "60" },
                { "count": 2, "name": "Electrode ex", "set": "FL", "number": "107" },
                { "count": 4, "name": "Voltorb", "set": "HL", "number": "80" },
            ], "trainer": [
                { "count": 4, "name": "TV Reporter", "set": "DR", "number": "88" },
                { "count": 4, "name": "Lanette's Net Search", "set": "SS", "number": "87" },
                { "count": 2, "name": "Steven's Advice", "set": "HL", "number": "92" },
                { "count": 2, "name": "Rocket's Admin.", "set": "TRR", "number": "86" },
                { "count": 4, "name": "Super Scoop Up", "set": "FL", "number": "99" },
                { "count": 3, "name": "Dual Ball", "set": "MA", "number": "72" },
                { "count": 3, "name": "Pokémon Reversal", "set": "FL", "number": "97" },
                { "count": 2, "name": "Strength Charm", "set": "MA", "number": "74" },
                { "count": 3, "name": "Battle Frontier", "set": "PK", "number": "71" },
            ], "energy": [
                { "count": 17, "name": "Lightning Energy", "set": "EM", "number": "104" },
            ]
        },
    },
    {
        "name": "--",
        "sprite1": "blank",
        sprite2: '../../assets/hyphen",
        // list: '../../assets/list-icon",
        list: '../../assets/sprites/blank",
        type: 'dark",
        event: '",
        "decklist": {
            "pokemon": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "trainer": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "energy": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ]
        },
        deck: [
            {cardImg:'../../assets/cards/2004-2006",numImg:'../../assets/04.png'},
        ]
    },
]

"seniors": [
    {
        "name": "Chris McGiven",
        "sprite1": "moltres",
        "sprite2": "zapdos",
        list: '../../assets/list-icon",
        type: 'dark",
        event: '",
        "decklist": {
            "pokemon": [
                { "count": 4, "name": "Zapdos ex", "set": "FL", "number": "116" },
                { "count": 4, "name": "Moltres ex", "set": "FL", "number": "115" },
                { "count": 4, "name": "Kangaskhan", "set": "FL", "number": "6" },
                { "count": 4, "name": "Wobbuffet", "set": "SS", "number": "26" },
                { "count": 1, "name": "Rayquaza ★", "set": "DX", "number": "107" },
            ], "trainer": [
                { "count": 4, "name": "Lanette's Net Search", "set": "SS", "number": "87" },
                { "count": 4, "name": "Scott", "set": "EM", "number": "84" },
                { "count": 3, "name": "Mr. Stone's Project", "set": "EM", "number": "79" },
                { "count": 4, "name": "EXP.ALL", "set": "FL", "number": "91" },
                { "count": 4, "name": "Battle Frontier", "set": "PK", "number": "71" },
            ], "energy": [
                { "count": 11, "name": "Fire Energy", "set": "EM", "number": "102" },
                { "count": 11, "name": "Lightning Energy", "set": "EM", "number": "104" },
                { "count": 2, "name": "Psychic Energy", "set": "EM", "number": "105" },
            ]
        },
    },
    {
        "name": "Faisal Khan",
        "sprite1": "tyranitar",
        "sprite2": "ampharos",
        // list: '../../assets/list-icon",
        list: '../../assets/sprites/blank",
        type: 'dark",
        event: '",
        "decklist": {
            "pokemon": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "trainer": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "energy": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ]
        },
        deck: [
            {cardImg:'../../assets/cards/2004-2006",numImg:'../../assets/04.png'},
        ]
    },
    {
        "name": "Sami Sekkoum",
        "sprite1": "lanturn",
        "sprite2": "hypno",
        list: '../../assets/list-icon",
        type: 'dark",
        event: '",
        "decklist": {
            "pokemon": [
                { "count": 4, "name": "Dunsparce", "set": "SS", "number": "60" },
                { "count": 2, "name": "Lanturn", "set": "HL", "number": "38" },
                { "count": 2, "name": "Chinchou", "set": "HL", "number": "57" },
                { "count": 2, "name": "Dark Hypno", "set": "TRR", "number": "6" },
                { "count": 2, "name": "Drowzee", "set": "FL", "number": "32" },
                { "count": 2, "name": "Magcargo", "set": "DX", "number": "20" },
                { "count": 2, "name": "Slugma", "set": "DX", "number": "75" },
                { "count": 1, "name": "Rhydon", "set": "HL", "number": "46" },
                { "count": 1, "name": "Rhyhorn", "set": "HL", "number": "70" },
                { "count": 1, "name": "Jirachi", "set": "DX", "number": "9" },
            ], "trainer": [
                { "count": 3, "name": "TV Reporter", "set": "DF", "number": "82" },
                { "count": 3, "name": "Celio's Network", "set": "FL", "number": "88" },
                { "count": 3, "name": "Steven's Advice", "set": "HL", "number": "92" },
                { "count": 1, "name": "Rocket's Admin.", "set": "TRR", "number": "86" },
                { "count": 3, "name": "Swoop! Teleporter", "set": "TRR", "number": "92" },
                { "count": 2, "name": "Pokémon Retriever", "set": "TRR", "number": "84" },
                { "count": 1, "name": "Pow! Hand Extension", "set": "TRR", "number": "85" },
                { "count": 2, "name": "Switch", "set": "RS", "number": "92" },
                { "count": 2, "name": "Crystal Shard", "set": "DX", "number": "85" },
                { "count": 1, "name": "Strength Charm", "set": "MA", "number": "74" },
                { "count": 1, "name": "Ancient Technical Machine [Rock]", "set": "HL", "number": "85" },
                { "count": 3, "name": "Battle Frontier", "set": "PK", "number": "71" },
            ], "energy": [
                { "count": 3, "name": "Lightning Energy", "set": "EM", "number": "104" },
                { "count": 3, "name": "Psychic Energy", "set": "EM", "number": "105" },
                { "count": 2, "name": "Fighting Energy", "set": "EM", "number": "106" },
                { "count": 3, "name": "Double Rainbow Energy", "set": "MA", "number": "88" },
                { "count": 3, "name": "Multi Energy", "set": "SS", "number": "93" },
                { "count": 2, "name": "Scramble Energy", "set": "DF", "number": "89" },
            ]
        },
    },
    {
        "name": "John Hawkins",
        "sprite1": "tyranitar",
        "sprite2": "pidgeot",
        // list: '../../assets/list-icon",
        list: '../../assets/sprites/blank",
        type: 'dark",
        event: '",
        "decklist": {
            "pokemon": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "trainer": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "energy": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ]
        },
        deck: [
            {cardImg:'../../assets/cards/2004-2006",numImg:'../../assets/04.png'},
        ]
    },
]

"juniors": [
    {
        "name": "Nicholas Fotheringham",
        "sprite1": "dragonite",
        "sprite2": "electrode",
        list: '../../assets/list-icon",
        type: 'dark",
        event: '",
        "decklist": {
            "pokemon": [
                { "count": 3, "name": "Dark Dragonite", "set": "TRR", "number": "15" },
                { "count": 3, "name": "Dark Dragonair", "set": "TRR", "number": "31" },
                { "count": 3, "name": "Dratini", "set": "TRR", "number": "53" },
                { "count": 3, "name": "Rocket's Sneasel ex", "set": "TRR", "number": "103" },
                { "count": 3, "name": "Dark Electrode", "set": "TRR", "number": "4" },
                { "count": 3, "name": "Voltorb", "set": "HL", "number": "80" },
                { "count": 1, "name": "Rocket's Scyther ex", "set": "TRR", "number": "102" },
            ], "trainer": [
                { "count": 3, "name": "Lanette's Net Search", "set": "EM", "number": "77" },
                { "count": 3, "name": "Steven's Advice", "set": "HL", "number": "92" },
                { "count": 3, "name": "Copycat", "set": "DF", "number": "73" },
                { "count": 2, "name": "Rocket's Admin.", "set": "TRR", "number": "86" },
                { "count": 1, "name": "Scott", "set": "EM", "number": "84" },
                { "count": 4, "name": "Rocket's Poké Ball", "set": "TRR", "number": "89" },
                { "count": 3, "name": "Dual Ball", "set": "MA", "number": "72" },
                { "count": 1, "name": "Switch", "set": "FL", "number": "102" },
                { "count": 1, "name": "Pokémon Retriever", "set": "TRR", "number": "84" },
                { "count": 1, "name": "Crystal Shard", "set": "SK", "number": "122" },
                { "count": 2, "name": "Rocket's Hideout", "set": "TRR", "number": "87" },
                { "count": 2, "name": "Desert Ruins", "set": "HL", "number": "88" },
            ], "energy": [
                { "count": 4, "name": "Darkness Energy", "set": "RS", "number": "93" },
                { "count": 4, "name": "Dark Metal Energy", "set": "TRR", "number": "94" },
                { "count": 4, "name": "Rainbow Energy", "set": "RS", "number": "95" },
                { "count": 3, "name": "R Energy", "set": "TRR", "number": "95" },
            ]
        },
    },
    {
        "name": "Yacine Sekkoum",
        "sprite1": "dragonite",
        "sprite2": "electrode",
        // list: '../../assets/list-icon",
        list: '../../assets/sprites/blank",
        type: 'dark",
        event: '",
        "decklist": {
            "pokemon": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "trainer": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "energy": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ]
        },
        deck: [
            {cardImg:'../../assets/cards/2004-2006",numImg:'../../assets/04.png'},
        ]
    },
]

let tenEvent = [
    {
        "name": "Adam Hawkins",
        "sprite1": "dragonite",
        "sprite2": "electrode",
        list: '../../assets/list-icon",
        type: 'dark",
        event: '",
        "decklist": {
            "pokemon": [
                { "count": 3, "name": "Dark Dragonite", "set": "TRR", "number": "15" },
                { "count": 3, "name": "Dark Dragonair", "set": "TRR", "number": "31" },
                { "count": 3, "name": "Dratini", "set": "TRR", "number": "53" },
                { "count": 4, "name": "Dunsparce", "set": "SS", "number": "60" },
                { "count": 2, "name": "Dark Electrode", "set": "TRR", "number": "4" },
                { "count": 2, "name": "Voltorb", "set": "HL", "number": "80" },
                { "count": 2, "name": "Pidgeot", "set": "FL", "number": "10" },
                { "count": 1, "name": "Pidgeotto", "set": "FL", "number": "45" },
                { "count": 2, "name": "Pidgey", "set": "FL", "number": "73" },
            ], "trainer": [
                { "count": 3, "name": "Celio's Network", "set": "FL", "number": "88" },
                { "count": 3, "name": "Steven's Advice", "set": "HL", "number": "92" },
                { "count": 2, "name": "Wally's Training", "set": "EM", "number": "85" },
                { "count": 2, "name": "Mr. Briney's Compassion", "set": "P2", "number": "8" },
                { "count": 1, "name": "Copycat", "set": "DF", "number": "73" },
                { "count": 1, "name": "Rocket's Admin.", "set": "TRR", "number": "86" },
                { "count": 4, "name": "Rare Candy", "set": "SS", "number": "88" },
                { "count": 1, "name": "Warp Point", "set": "MA", "number": "85" },
                { "count": 1, "name": "Pokémon Retriever", "set": "TRR", "number": "84" },
                { "count": 1, "name": "Strength Charm", "set": "MA", "number": "74" },
                { "count": 1, "name": "Crystal Shard", "set": "SK", "number": "122" },
                { "count": 2, "name": "Rocket's Hideout", "set": "TRR", "number": "87" },
                { "count": 2, "name": "Desert Ruins", "set": "HL", "number": "88" },
            ], "energy": [
                { "count": 4, "name": "Darkness Energy", "set": "RS", "number": "93" },
                { "count": 4, "name": "Dark Metal Energy", "set": "TRR", "number": "94" },
                { "count": 4, "name": "Rainbow Energy", "set": "RS", "number": "95" },
                { "count": 2, "name": "R Energy", "set": "TRR", "number": "95" },
            ]
        },
    },
    {
        "name": "Peter C",
        "sprite1": "blank",
        "sprite2": "gardevoir",
        // list: '../../assets/list-icon",
        list: '../../assets/sprites/blank",
        type: 'dark",
        event: '",
        "decklist": {
            "pokemon": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "trainer": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "energy": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ]
        },
        deck: [
            {cardImg:'../../assets/cards/2004-2006",numImg:'../../assets/04.png'},
        ]
    },
    {
        "name": "Ross M ",
        "sprite1": "dragonite",
        "sprite2": "electrode",
        // list: '../../assets/list-icon",
        list: '../../assets/sprites/blank",
        type: 'dark",
        event: '",
        "decklist": {
            "pokemon": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "trainer": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "energy": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ]
        },
        deck: [
            {cardImg:'../../assets/cards/2004-2006",numImg:'../../assets/04.png'},
        ]
    },
    {
        "name": "--",
        "sprite1": "blank",
        sprite2: '../../assets/hyphen",
        // list: '../../assets/list-icon",
        list: '../../assets/sprites/blank",
        type: 'dark",
        event: '",
        "decklist": {
            "pokemon": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "trainer": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "energy": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ]
        },
        deck: [
            {cardImg:'../../assets/cards/2004-2006",numImg:'../../assets/04.png'},
        ]
    },
]

let fiveEvent = [
    {
        "name": "Daniel C",
        "sprite1": "ludicolo",
        "sprite2": "lanturn",
        // // list../../../assets/list-icon",
        list: '../../assets/sprites/blank",
        type: 'dark",
        event: '",
        "decklist": {
            "pokemon": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "trainer": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "energy": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ]
        },
        deck: [
            {cardImg:'../../assets/cards/2008-2010",numImg:'../../assets/04.png'},
        ]
    },
    {
        "name": "--",
        "sprite1": "blank",
        sprite2: '../../assets/hyphen",
        // // list../../../assets/list-icon",
        list: '../../assets/sprites/blank",
        type: 'dark",
        event: '",
        "decklist": {
            "pokemon": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "trainer": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "energy": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ]
        },
        deck: [
            {cardImg:'../../assets/cards/2008-2010",numImg:'../../assets/04.png'},
        ]
    },
    {
        "name": "Anna Schipper",
        "sprite1": "tyranitar",
        "sprite2": "electrode",
        // // list../../../assets/list-icon",
        list: '../../assets/sprites/blank",
        type: 'dark",
        event: '",
        "decklist": {
            "pokemon": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "trainer": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "energy": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ]
        },
        deck: [
            {cardImg:'../../assets/cards/2008-2010",numImg:'../../assets/04.png'},
        ]
    },
    {
        "name": "Eric",
        "sprite1": "dragonite",
        "sprite2": "electrode",
        list: '../../assets/list-icon",
        type: 'dark",
        event: '",
        "decklist": {
            "pokemon": [
                { "count": 3, "name": "Dark Dragonite", "set": "TRR", "number": "15" },
                { "count": 3, "name": "Dark Dragonair", "set": "TRR", "number": "31" },
                { "count": 3, "name": "Dratini δ", "set": "DS", "number": "66" },
                { "count": 3, "name": "Dark Electrode", "set": "TRR", "number": "4" },
                { "count": 2, "name": "Voltorb", "set": "FL", "number": "85" },
                { "count": 1, "name": "Voltorb", "set": "EM", "number": "71" },
                { "count": 1, "name": "Kingdra", "set": "TRR", "number": "12" },
                { "count": 1, "name": "Seadra", "set": "TRR", "number": "48" },
                { "count": 1, "name": "Horsea", "set": "TRR", "number": "58" },
                { "count": 1, "name": "Milotic ex", "set": "EM", "number": "96" },
                { "count": 1, "name": "Feebas", "set": "HL", "number": "61" },
                { "count": 1, "name": "Regirock ex", "set": "HL", "number": "98" },
            ], "trainer": [
                { "count": 4, "name": "Steven's Advice", "set": "HL", "number": "92" },
                { "count": 2, "name": "Copycat", "set": "DF", "number": "73" },
                { "count": 2, "name": "Rocket's Mission", "set": "TRR", "number": "88" },
                { "count": 2, "name": "Rocket's Admin.", "set": "TRR", "number": "86" },
                { "count": 2, "name": "Mr. Briney's Compassion", "set": "P2", "number": "8" },
                { "count": 1, "name": "Scott", "set": "EM", "number": "84" },
                { "count": 4, "name": "Great Ball", "set": "DS", "number": "90" },
                { "count": 2, "name": "Rare Candy", "set": "SS", "number": "88" },
                { "count": 2, "name": "Rocket's Poké Ball", "set": "TRR", "number": "89" },
                { "count": 1, "name": "Pokémon Retriever", "set": "TRR", "number": "84" },
                { "count": 2, "name": "Rocket's Hideout", "set": "TRR", "number": "87" },
                { "count": 1, "name": "Rocket's Tricky Gym", "set": "TRR", "number": "90" },
            ], "energy": [
                { "count": 4, "name": "Darkness Energy", "set": "RS", "number": "93" },
                { "count": 4, "name": "Dark Metal Energy", "set": "TRR", "number": "94" },
                { "count": 4, "name": "Rainbow Energy", "set": "RS", "number": "95" },
                { "count": 2, "name": "Double Rainbow Energy", "set": "CG", "number": "88" },
            ]
        },
    },
]

let sixEvent = [
    {
        "name": "Anna Schipper",
        "sprite1": "ludicolo",
        "sprite2": "lanturn",
        // // list../../../assets/list-icon",
        list: '../../assets/sprites/blank",
        type: 'dark",
        event: '",
        "decklist": {
            "pokemon": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "trainer": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "energy": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ]
        },
        deck: [
            {cardImg:'../../assets/cards/2008-2010",numImg:'../../assets/04.png'},
        ]
    },
    {
        "name": "Manuel B",
        "sprite1": "blastoise",
        "sprite2": "articuno",
        // // list../../../assets/list-icon",
        list: '../../assets/sprites/blank",
        type: 'dark",
        event: '",
        "decklist": {
            "pokemon": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "trainer": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "energy": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ]
        },
        deck: [
            {cardImg:'../../assets/cards/2008-2010",numImg:'../../assets/04.png'},
        ]
    },
    {
        "name": "Jeroen R",
        "sprite1": "blank",
        "sprite2": "groudon",
        // // list../../../assets/list-icon",
        list: '../../assets/sprites/blank",
        type: 'dark",
        event: '",
        "decklist": {
            "pokemon": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "trainer": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "energy": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ]
        },
        deck: [
            {cardImg:'../../assets/cards/2008-2010",numImg:'../../assets/04.png'},
        ]
    },
    {
        "name": "John",
        "sprite1": "exploud",
        "sprite2": "metagross",
        // // list../../../assets/list-icon",
        list: '../../assets/sprites/blank",
        type: 'dark",
        event: '",
        "decklist": {
            "pokemon": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "trainer": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "energy": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ]
        },
        deck: [
            {cardImg:'../../assets/cards/2008-2010",numImg:'../../assets/04.png'},
        ]
    },
    {
        "name": "Eric",
        "sprite1": "tyranitar",
        "sprite2": "kingdra",
        list: '../../assets/list-icon",
        type: 'dark",
        event: '",
        "decklist": {
            "pokemon": [
                { "count": 3, "name": "Dark Tyranitar", "set": "TRR", "number": "19" },
                { "count": 1, "name": "Dark Tyranitar", "set": "TRR", "number": "20" },
                { "count": 3, "name": "Dark Pupitar", "set": "TRR", "number": "40" },
                { "count": 4, "name": "Larvitar", "set": "TRR", "number": "63" },
                { "count": 1, "name": "Kingdra", "set": "TRR", "number": "12" },
                { "count": 1, "name": "Seadra", "set": "TRR", "number": "48" },
                { "count": 1, "name": "Horsea", "set": "TRR", "number": "58" },
                { "count": 4, "name": "Jirachi", "set": "DX", "number": "9" },
            ], "trainer": [
                { "count": 4, "name": "Steven's Advice", "set": "HL", "number": "92" },
                { "count": 2, "name": "TV Reporter", "set": "DF", "number": "82" },
                { "count": 2, "name": "Rocket's Admin.", "set": "TRR", "number": "86" },
                { "count": 2, "name": "Mr. Briney's Compassion", "set": "P2", "number": "8" },
                { "count": 1, "name": "Celio's Network", "set": "FL", "number": "88" },
                { "count": 1, "name": "Copycat", "set": "DF", "number": "73" },
                { "count": 3, "name": "Pow! Hand Extension", "set": "TRR", "number": "85" },
                { "count": 3, "name": "Swoop! Teleporter", "set": "TRR", "number": "92" },
                { "count": 2, "name": "Pokémon Retriever", "set": "TRR", "number": "84" },
                { "count": 2, "name": "Rocket's Poké Ball", "set": "TRR", "number": "89" },
                { "count": 2, "name": "Rare Candy", "set": "SS", "number": "88" },
                { "count": 1, "name": "Switch", "set": "FL", "number": "102" },
                { "count": 3, "name": "Ancient Technical Machine [Rock]", "set": "HL", "number": "85" },
            ], "energy": [
                { "count": 4, "name": "Darkness Energy", "set": "RS", "number": "93" },
                { "count": 3, "name": "R Energy", "set": "TRR", "number": "95" },
                { "count": 3, "name": "Dark Metal Energy", "set": "HP", "number": "97" },
                { "count": 3, "name": "Scramble Energy", "set": "DF", "number": "89" },
                { "count": 1, "name": "Rainbow Energy", "set": "RS", "number": "95" },
            ]
        },
    },
]

let sevenEvent = [
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
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "trainer": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "energy": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ]
        },
        deck: [
            {cardImg:'../../assets/cards/2014-2016",numImg:'../../assets/04.png'},
        ]
    },
]

let eightEvent = [
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
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "trainer": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "energy": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ]
        },
        deck: [
            {cardImg:'../../assets/cards/2014-2016",numImg:'../../assets/04.png'},
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
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "trainer": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ], "energy": [
                { "count": 0, "name": "example", "set": "aa", "number": "00" },
            ]
        },
        deck: [
            {cardImg:'../../assets/cards/2014-2016",numImg:'../../assets/04.png'},
        ]
    },
]
