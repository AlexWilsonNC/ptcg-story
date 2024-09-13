const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

"masters": [
  {
    "name": "William Azevedo",
    "flag": "BR",
    "sprite1": "charizard",
    "sprite2": "pidgeot",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/charizard-ex",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/charmeleon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/charmander",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pidgeot-ex",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pidgey",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/entei-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mawile",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/arven",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/iono",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/penny",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-sada",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rare-candy-sv",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/nest-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/super-rod",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt-sv",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-city",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-fire-energy.jpg",
        numImg: '../../../assets/08",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Francisco Osorio",
    "flag": "CL",
    "sprite1": "giratina-origin",
    "sprite2": "comfey",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/giratina-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/giratina-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sableye",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/nest-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/super-rod",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/04",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-grass-energy.jpg",
        numImg: '../../../assets/03",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../../assets/03",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/jet-energy",
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    "name": "Leonardo Walbrinch",
    "flag": "BR",
    "sprite1": "charizard",
    "sprite2": "pidgeot",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/charizard-ex",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/charmeleon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/charmander",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pidgeot-ex",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pidgey",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/entei-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mawile",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/arven",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/iono",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/penny",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-sada",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rare-candy-sv",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/nest-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/super-rod",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt-sv",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-city",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-fire-energy.jpg",
        numImg: '../../../assets/08",
        radiusCard: true
      },
    ]
  },
  {
    "name": "João Requena",
    "flag": "BR",
    "sprite1": "charizard",
    "sprite2": "arceus",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/charizard-ex",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/charmander",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pidgeot-ex",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pidgey",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/iono",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/worker",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rare-candy-sv",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cross-switcher",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/nest-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/super-rod",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad-sv",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt-sv",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pokestop",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-fire-energy.jpg",
        numImg: '../../../assets/08",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Juliana Alves Marques",
    "flag": "BR",
    "sprite1": "arceus",
    "sprite2": "umbreon-vmax",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/umbreon-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/umbreon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/duraludon-vmax-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/duraludon-v-ss",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lucario-vstar",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lucario-v-asr",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-alakazam",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/hawlucha",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/iono",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/judge-sv",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-sada",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/adventurers-discovery",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/nest-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-sv",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt-sv",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-city",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-fighting-energy.jpg",
        numImg: '../../../assets/03",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-dark-energy.jpg",
        numImg: '../../../assets/03",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-metal-energy.jpg",
        numImg: '../../../assets/03",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Dalton Acchetta",
    "flag": "BR",
    "sprite1": "charizard",
    "sprite2": "arceus",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/charizard-ex",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/charmander",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pidgeot-ex",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pidgey",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/iono",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/jacq",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rare-candy-sv",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/nest-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/super-rod",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt-sv",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/artazon",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-fire-energy.jpg",
        numImg: '../../../assets/08",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/jet-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Juan Andree",
    "flag": "CL",
    "sprite1": "blank",
    "sprite2": "gardevoir",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/gardevoir-ex",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/gardevoir",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/kirlia",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ralts",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ralts-memory-skip",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zacian-v-psychic",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cresselia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/iono",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-turo",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rare-candy-sv",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fog-crystal",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/super-rod",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pokemon-league-headqarters",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/artazon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../../assets/10",
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/new-energy/reversal-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Pedro Pertusi",
    "flag": "BR",
    "sprite1": "charizard",
    "sprite2": "pidgeot",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/charizard-ex",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/charmeleon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/charmander",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pidgeot-ex",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pidgey",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/entei-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/arven",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/iono",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/penny",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-sada",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rare-candy-sv",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/nest-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/super-rod",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt-sv",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-city",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-fire-energy.jpg",
        numImg: '../../../assets/08",
        radiusCard: true
      },
    ]
  },
]

"seniors": []

"juniors": []

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
    if (item.banned === true) {
      playerName.classList.add('crossed-out');
    }

    let flagImg = document.createElement('img');
        flagImg.classList.add('flag-size');
        flagImg.setAttribute('src", item.flag);

        let countryName = document.createElement('div');
        countryName.classList.add('country-name');
        countryName.style.display = 'none';

        flagImg.addEventListener('mouseover", function() {
            if (flagImg.getAttribute('src').includes('argentina')) {
                countryName.textContent = 'Argentina (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('australia')) {
                countryName.textContent = 'Australia (Oceania)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('austria')) {
                countryName.textContent = 'Austria (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('belarus')) {
                countryName.textContent = 'Belarus (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('belgium')) {
                countryName.textContent = 'Belgium (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('brazil')) {
                countryName.textContent = 'Brazil (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('canada')) {
                countryName.textContent = 'Canada (North America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('chile')) {
                countryName.textContent = 'Chile (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('china')) {
                countryName.textContent = 'China (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('colombia')) {
                countryName.textContent = 'Colombia (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('croatia')) {
                countryName.textContent = 'Croatia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('czech-republic')) {
                countryName.textContent = 'Czechia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('denmark')) {
                countryName.textContent = 'Denmark (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('el-salvador')) {
                countryName.textContent = 'El Salvador (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('finland')) {
                countryName.textContent = 'Finland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('france')) {
                countryName.textContent = 'France (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('germany')) {
                countryName.textContent = 'Germany (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('greece')) {
                countryName.textContent = 'Greece (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('hong-kong')) {
                countryName.textContent = 'Hong Kong (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('indonesia')) {
                countryName.textContent = 'Indonesia (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('ireland')) {
                countryName.textContent = 'Ireland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('isreal')) {
                countryName.textContent = 'Israel (Middle East-South Africa)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('italy')) {
                countryName.textContent = 'Italy (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('japan')) {
                countryName.textContent = 'Japan (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('korea')) {
                countryName.textContent = 'South Korea (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('malaysia')) {
                countryName.textContent = 'Malaysia (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('malta')) {
                countryName.textContent = 'Malta (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('mexico')) {
                countryName.textContent = 'Mexico (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('moroco')) {
                countryName.textContent = 'Moroco (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('netherlands')) {
                countryName.textContent = 'Netherlands (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('new-zealand')) {
                countryName.textContent = 'New Zealand (Oceania)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('nicaragua')) {
                countryName.textContent = 'Nicaragua (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('norway')) {
                countryName.textContent = 'Norway (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('peru')) {
                countryName.textContent = 'Peru (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('philippines')) {
                countryName.textContent = 'Philippines (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('poland')) {
                countryName.textContent = 'Poland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('portugal')) {
                countryName.textContent = 'Portugal (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('puerto-rico')) {
                countryName.textContent = 'Puerto Rico (North America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('russia')) {
                countryName.textContent = 'Russia (Russia)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('singapore')) {
                countryName.textContent = 'Singapore (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('slovakia')) {
                countryName.textContent = 'Slovakia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('south-africa')) {
                countryName.textContent = 'South Africa (Middle East-South Africa)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('spain')) {
                countryName.textContent = 'Spain (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('sweden')) {
                countryName.textContent = 'Sweden (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('switzerland')) {
                countryName.textContent = 'Switzerland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('taiwan')) {
                countryName.textContent = 'Taiwan (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('thailand')) {
                countryName.textContent = 'Thailand (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('uk')) {
                countryName.textContent = 'United Kingdom (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('usa')) {
                countryName.textContent = 'USA (North America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('unknown')) {
                countryName.textContent = 'Unknown';
                countryName.style.display = 'block';
            }
        });

        flagImg.addEventListener('mouseout", function() {
            countryName.style.display = 'none';
        });

        let deck = document.createElement('div');
        deck.classList.add('player-deck-icons');

    let firstSprite = document.createElement('img');
    firstSprite.classList.add('sprite');
    firstSprite.setAttribute('src", item.sprite1);
    let secondSprite = document.createElement('img');
    secondSprite.classList.add('sprite');
    secondSprite.classList.add('second-sprite');
    secondSprite.setAttribute('src", item.sprite2);
    let listIcon = document.createElement('img');
    listIcon.classList.add('list-icon');
    listIcon.setAttribute('src", item.list);

     
    
    item_element.appendChild(title);
    title.appendChild(playerName);
        playerName.appendChild(countryName); // Append the country name element
        playerName.appendChild(flagImg);
    playerName.append(item."name");
    title.appendChild(deck);
    deck.appendChild(firstSprite);
    deck.appendChild(secondSprite);
    deck.appendChild(listIcon);

    if (item.list === '../../../assets/list-icon.png') {
      item_element.addEventListener('click", function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item."name" + " - Curitiba Regionals";

        for (let i = 0; i < item.deck.length; i++) {
          let deck = item.deck[i];

          let cardSpace = document.createElement('div');
          cardSpace.classList.add('pokemon-card');

          let pokeCard = document.createElement('img');
          pokeCard.classList.add('pok-card-small')
          pokeCard.setAttribute('src", deck.cardImg);
          if (deck.radiusCard === true) {
            pokeCard.classList.add('radius-card')
        }

          let numberCounter = document.createElement('img');
          numberCounter.classList.add('num-1')
          numberCounter.setAttribute('src", deck.numImg);

          cardSpace.appendChild(pokeCard);
          cardSpace.appendChild(numberCounter);
          modalBottom.appendChild(cardSpace);

          modalX.addEventListener('click", () => {
            modal.style.display = 'none';
            behind.style.display = 'none';
            cardSpace.remove();
          })
          behind.addEventListener('click", () => {
            modal.style.display = 'none';
            behind.style.display = 'none';
            cardSpace.remove();
          })
        }
        document.querySelectorAll('.pokemon-card').forEach(card => {
          let meep = document.getElementsByClassName("pok-card-small"),
          zoombox = document.getElementById("zoom-card-box");
         
          if (meep.length > 0) { for (let i of meep) {
            i.onclick = () => {
              let clone = i.cloneNode();
              clone.className = "";
              zoombox.innerHTML = "";
              zoombox.appendChild(clone);
              zoombox.className = "show";
            };
          }}
         
          zoombox.onclick = () => {
            zoombox.className = "";
          };
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
        flagImg.setAttribute('src", item.flag);

        let countryName = document.createElement('div');
        countryName.classList.add('country-name');
        countryName.style.display = 'none';

        flagImg.addEventListener('mouseover", function() {
            if (flagImg.getAttribute('src').includes('argentina')) {
                countryName.textContent = 'Argentina (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('australia')) {
                countryName.textContent = 'Australia (Oceania)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('austria')) {
                countryName.textContent = 'Austria (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('belarus')) {
                countryName.textContent = 'Belarus (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('belgium')) {
                countryName.textContent = 'Belgium (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('brazil')) {
                countryName.textContent = 'Brazil (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('canada')) {
                countryName.textContent = 'Canada (North America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('chile')) {
                countryName.textContent = 'Chile (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('china')) {
                countryName.textContent = 'China (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('colombia')) {
                countryName.textContent = 'Colombia (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('croatia')) {
                countryName.textContent = 'Croatia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('czech-republic')) {
                countryName.textContent = 'Czechia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('denmark')) {
                countryName.textContent = 'Denmark (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('el-salvador')) {
                countryName.textContent = 'El Salvador (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('finland')) {
                countryName.textContent = 'Finland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('france')) {
                countryName.textContent = 'France (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('germany')) {
                countryName.textContent = 'Germany (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('greece')) {
                countryName.textContent = 'Greece (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('hong-kong')) {
                countryName.textContent = 'Hong Kong (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('indonesia')) {
                countryName.textContent = 'Indonesia (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('ireland')) {
                countryName.textContent = 'Ireland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('isreal')) {
                countryName.textContent = 'Israel (Middle East-South Africa)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('italy')) {
                countryName.textContent = 'Italy (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('japan')) {
                countryName.textContent = 'Japan (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('korea')) {
                countryName.textContent = 'South Korea (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('malaysia')) {
                countryName.textContent = 'Malaysia (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('malta')) {
                countryName.textContent = 'Malta (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('mexico')) {
                countryName.textContent = 'Mexico (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('moroco')) {
                countryName.textContent = 'Moroco (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('netherlands')) {
                countryName.textContent = 'Netherlands (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('new-zealand')) {
                countryName.textContent = 'New Zealand (Oceania)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('nicaragua')) {
                countryName.textContent = 'Nicaragua (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('norway')) {
                countryName.textContent = 'Norway (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('peru')) {
                countryName.textContent = 'Peru (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('philippines')) {
                countryName.textContent = 'Philippines (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('poland')) {
                countryName.textContent = 'Poland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('portugal')) {
                countryName.textContent = 'Portugal (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('puerto-rico')) {
                countryName.textContent = 'Puerto Rico (North America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('russia')) {
                countryName.textContent = 'Russia (Russia)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('singapore')) {
                countryName.textContent = 'Singapore (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('slovakia')) {
                countryName.textContent = 'Slovakia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('south-africa')) {
                countryName.textContent = 'South Africa (Middle East-South Africa)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('spain')) {
                countryName.textContent = 'Spain (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('sweden')) {
                countryName.textContent = 'Sweden (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('switzerland')) {
                countryName.textContent = 'Switzerland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('taiwan')) {
                countryName.textContent = 'Taiwan (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('thailand')) {
                countryName.textContent = 'Thailand (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('uk')) {
                countryName.textContent = 'United Kingdom (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('usa')) {
                countryName.textContent = 'USA (North America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('unknown')) {
                countryName.textContent = 'Unknown';
                countryName.style.display = 'block';
            }
        });

        flagImg.addEventListener('mouseout", function() {
            countryName.style.display = 'none';
        });

        let deck = document.createElement('div');
        deck.classList.add('player-deck-icons');

    let firstSprite = document.createElement('img');
    firstSprite.classList.add('sprite');
    firstSprite.setAttribute('src", item.sprite1);
    let secondSprite = document.createElement('img');
    secondSprite.classList.add('sprite');
    secondSprite.classList.add('second-sprite');
    secondSprite.setAttribute('src", item.sprite2);
    let listIcon = document.createElement('img');
    listIcon.classList.add('list-icon');
    listIcon.setAttribute('src", item.list);

    item_element.appendChild(title);
    title.appendChild(playerName);
        playerName.appendChild(countryName); // Append the country name element
        playerName.appendChild(flagImg);
    playerName.append(item."name");
    title.appendChild(deck);
    deck.appendChild(firstSprite);
    deck.appendChild(secondSprite);
    deck.appendChild(listIcon);

    if (item.list === '../../../assets/list-icon.png') {
      item_element.addEventListener('click", function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item."name" + " - Curitiba Regionals";

        if (item.type == 'psychic') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/psychic-bg.png)";
        } else if (item.type == 'fire') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fire-bg.png)";
        } else if (item.type == 'fairy') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fairy-bg.png)";
        } else if (item.type == 'normal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/normal-bg.png)";
        } else if (item.type == 'lightning') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/lightning-bg.png)";
        } else if (item.type == 'dark') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
        } else if (item.type == 'dragon') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dragon-bg.png)";
        } else if (item.type == 'fighting') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fighting-bg.png)";
        } else if (item.type == 'grass') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/grass-bg.png)";
        } else if (item.type == 'metal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/metal-bg.png)";
        } else if (item.type == 'water') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/water-bg.png)";
        } else {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
        }

        for (let i = 0; i < item.deck.length; i++) {
          let deck = item.deck[i];

          let cardSpace = document.createElement('div');
          cardSpace.classList.add('pokemon-card');

          let pokeCard = document.createElement('img');
          pokeCard.classList.add('pok-card-small')
          pokeCard.setAttribute('src", deck.cardImg);
          if (deck.radiusCard === true) {
            pokeCard.classList.add('radius-card')
        }

          let numberCounter = document.createElement('img');
          numberCounter.classList.add('num-1')
          numberCounter.setAttribute('src", deck.numImg);

          cardSpace.appendChild(pokeCard);
          cardSpace.appendChild(numberCounter);
          modalBottom.appendChild(cardSpace);

          modalX.addEventListener('click", () => {
            modal.style.display = 'none';
            behind.style.display = 'none';
            cardSpace.remove();
          })
          behind.addEventListener('click", () => {
            modal.style.display = 'none';
            behind.style.display = 'none';
            cardSpace.remove();
          })
        }
        document.querySelectorAll('.pokemon-card').forEach(card => {
          let meep = document.getElementsByClassName("pok-card-small"),
          zoombox = document.getElementById("zoom-card-box");
         
          if (meep.length > 0) { for (let i of meep) {
            i.onclick = () => {
              let clone = i.cloneNode();
              clone.className = "";
              zoombox.innerHTML = "";
              zoombox.appendChild(clone);
              zoombox.className = "show";
            };
          }}
         
          zoombox.onclick = () => {
            zoombox.className = "";
          };
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
        flagImg.setAttribute('src", item.flag);

        let countryName = document.createElement('div');
        countryName.classList.add('country-name');
        countryName.style.display = 'none';

        flagImg.addEventListener('mouseover", function() {
            if (flagImg.getAttribute('src').includes('argentina')) {
                countryName.textContent = 'Argentina (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('australia')) {
                countryName.textContent = 'Australia (Oceania)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('austria')) {
                countryName.textContent = 'Austria (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('belarus')) {
                countryName.textContent = 'Belarus (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('belgium')) {
                countryName.textContent = 'Belgium (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('brazil')) {
                countryName.textContent = 'Brazil (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('canada')) {
                countryName.textContent = 'Canada (North America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('chile')) {
                countryName.textContent = 'Chile (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('china')) {
                countryName.textContent = 'China (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('colombia')) {
                countryName.textContent = 'Colombia (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('croatia')) {
                countryName.textContent = 'Croatia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('czech-republic')) {
                countryName.textContent = 'Czechia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('denmark')) {
                countryName.textContent = 'Denmark (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('el-salvador')) {
                countryName.textContent = 'El Salvador (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('finland')) {
                countryName.textContent = 'Finland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('france')) {
                countryName.textContent = 'France (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('germany')) {
                countryName.textContent = 'Germany (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('greece')) {
                countryName.textContent = 'Greece (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('hong-kong')) {
                countryName.textContent = 'Hong Kong (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('indonesia')) {
                countryName.textContent = 'Indonesia (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('ireland')) {
                countryName.textContent = 'Ireland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('isreal')) {
                countryName.textContent = 'Israel (Middle East-South Africa)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('italy')) {
                countryName.textContent = 'Italy (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('japan')) {
                countryName.textContent = 'Japan (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('korea')) {
                countryName.textContent = 'South Korea (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('malaysia')) {
                countryName.textContent = 'Malaysia (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('malta')) {
                countryName.textContent = 'Malta (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('mexico')) {
                countryName.textContent = 'Mexico (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('moroco')) {
                countryName.textContent = 'Moroco (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('netherlands')) {
                countryName.textContent = 'Netherlands (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('new-zealand')) {
                countryName.textContent = 'New Zealand (Oceania)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('nicaragua')) {
                countryName.textContent = 'Nicaragua (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('norway')) {
                countryName.textContent = 'Norway (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('peru')) {
                countryName.textContent = 'Peru (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('philippines')) {
                countryName.textContent = 'Philippines (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('poland')) {
                countryName.textContent = 'Poland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('portugal')) {
                countryName.textContent = 'Portugal (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('puerto-rico')) {
                countryName.textContent = 'Puerto Rico (North America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('russia')) {
                countryName.textContent = 'Russia (Russia)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('singapore')) {
                countryName.textContent = 'Singapore (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('slovakia')) {
                countryName.textContent = 'Slovakia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('south-africa')) {
                countryName.textContent = 'South Africa (Middle East-South Africa)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('spain')) {
                countryName.textContent = 'Spain (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('sweden')) {
                countryName.textContent = 'Sweden (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('switzerland')) {
                countryName.textContent = 'Switzerland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('taiwan')) {
                countryName.textContent = 'Taiwan (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('thailand')) {
                countryName.textContent = 'Thailand (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('uk')) {
                countryName.textContent = 'United Kingdom (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('usa')) {
                countryName.textContent = 'USA (North America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('unknown')) {
                countryName.textContent = 'Unknown';
                countryName.style.display = 'block';
            }
        });

        flagImg.addEventListener('mouseout", function() {
            countryName.style.display = 'none';
        });

        let deck = document.createElement('div');
        deck.classList.add('player-deck-icons');

    let firstSprite = document.createElement('img');
    firstSprite.classList.add('sprite');
    firstSprite.setAttribute('src", item.sprite1);
    let secondSprite = document.createElement('img');
    secondSprite.classList.add('sprite');
    secondSprite.classList.add('second-sprite');
    secondSprite.setAttribute('src", item.sprite2);
    let listIcon = document.createElement('img');
    listIcon.classList.add('list-icon');
    listIcon.setAttribute('src", item.list);

     
    
    item_element.appendChild(title);
    title.appendChild(playerName);
        playerName.appendChild(countryName); // Append the country name element
        playerName.appendChild(flagImg);
    playerName.append(item."name");
    title.appendChild(deck);
    deck.appendChild(firstSprite);
    deck.appendChild(secondSprite);
    deck.appendChild(listIcon);

    if (item.list === '../../../assets/list-icon.png') {
      item_element.addEventListener('click", function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item."name" + " - Curitiba Regionals";

        if (item.type == 'psychic') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/psychic-bg.png)";
        } else if (item.type == 'fire') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fire-bg.png)";
        } else if (item.type == 'fairy') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fairy-bg.png)";
        } else if (item.type == 'normal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/normal-bg.png)";
        } else if (item.type == 'lightning') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/lightning-bg.png)";
        } else if (item.type == 'dark') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
        } else if (item.type == 'dragon') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dragon-bg.png)";
        } else if (item.type == 'fighting') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fighting-bg.png)";
        } else if (item.type == 'grass') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/grass-bg.png)";
        } else if (item.type == 'metal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/metal-bg.png)";
        } else if (item.type == 'water') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/water-bg.png)";
        } else {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
        }

         

        for (let i = 0; i < item.deck.length; i++) {
          let deck = item.deck[i];

          let cardSpace = document.createElement('div');
          cardSpace.classList.add('pokemon-card');

          let pokeCard = document.createElement('img');
          pokeCard.classList.add('pok-card-small')
          pokeCard.setAttribute('src", deck.cardImg);
          if (deck.radiusCard === true) {
            pokeCard.classList.add('radius-card')
        }

          // pokeCard.onclick = function() {
          //   document.querySelector('.pok-card-small').style.width = '500px';
          // }

          let numberCounter = document.createElement('img');
          numberCounter.classList.add('num-1')
          numberCounter.setAttribute('src", deck.numImg);

          cardSpace.appendChild(pokeCard);
          cardSpace.appendChild(numberCounter);
          modalBottom.appendChild(cardSpace);

          modalX.addEventListener('click", () => {
            modal.style.display = 'none';
            behind.style.display = 'none';
            cardSpace.remove();
          })
          behind.addEventListener('click", () => {
            modal.style.display = 'none';
            behind.style.display = 'none';
            cardSpace.remove();
          })
        }
        document.querySelectorAll('.pokemon-card').forEach(card => {
          let meep = document.getElementsByClassName("pok-card-small"),
          zoombox = document.getElementById("zoom-card-box");
         
          if (meep.length > 0) { for (let i of meep) {
            i.onclick = () => {
              let clone = i.cloneNode();
              clone.className = "";
              zoombox.innerHTML = "";
              zoombox.appendChild(clone);
              zoombox.className = "show";
            };
          }}
         
          zoombox.onclick = () => {
            zoombox.className = "";
          };
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
