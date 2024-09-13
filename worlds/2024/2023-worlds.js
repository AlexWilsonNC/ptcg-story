const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

"masters": [
  {
    "name": "Vance Kelley",
    "flag": "US",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",  
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v-crz",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/oricorio",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/box-of-disaster",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/crystal-cave",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/fusion-strike-energy",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../assets/03.png'
      },
    ]
  },
  {
    "name": "Tord Reklev",
    "flag": "NO",
    "sprite1": "blank",
    "sprite2": "gardevoir",  
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir-ex",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia-mirage-step",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts-memory-skip",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cresselia",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-turo",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/artazon",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../assets/10",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/reversal-energy",
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    "name": "Michael Pramawat",
    "flag": "US",
    "sprite1": "giratina-origin",
    "sprite2": "comfey",  
     
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/giratina-vstar",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/giratina-v",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../assets/04",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg",
        numImg: '../../assets/03",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../assets/03",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Azul Griego",
    "flag": "US",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Dionsius Lee",
    "flag": "SG",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Victor Garcia Montes",
    "flag": "MX",
    "sprite1": "blank",
    "sprite2": "gardevoir",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Shoichi Saito",
    "flag": "JP",
    "sprite1": "comfey",
    "sprite2": "sableye",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Pang Kai Hing",
    "flag": "HK",
    "sprite1": "giratina-origin",
    "sprite2": "comfey",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Cyrus Davis",
    "flag": "CA",
    "sprite1": "palkia-origin",
    "sprite2": "chien-pao",  
     
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/chien-pao-ex",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/articuno",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof-carefree",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search-sv",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../assets/10",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Brent Tonisson",
    "flag": "AU",
    "sprite2": "../../assets/sprites/gardevoir.png",
    "sprite1": "blank",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir-ex",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cresselia",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/worker",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../assets/12",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Alex Schemanske",
    "flag": "US",
    "sprite1": "inteleon-vmax",
    "sprite2": "urshifu-rapid-strike-gmax",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-vmax",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-v",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-vmax",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-v",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/octillery",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/remoraid",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/medicham-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-alakazam",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-turo",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/korrinas-focus",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cheryl",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/giacomo",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-retrieval-sv",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search-sv",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tower-of-waters",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../assets/06",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/rapid-strike-energy",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Karel Maertens",
    "flag": "BE",
    "sprite1": "lugia",
    "sprite2": "archeops",  
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tyranitar-v",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ss-urshifu-vmax",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ss-urshifu-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal-ss",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-tsareena",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/squakabilly-ex",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/urn-of-vitality",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mesagoza",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/single-strike-energy",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy",
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    "name": "Hui Yuan Huang",
    "flag": "TW",
    "sprite1": "chien-pao",
    "sprite2": "baxcalibur",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Shinnosuke Sato",
    "flag": "JP",
    "sprite1": "comfey",
    "sprite2": "sableye",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Akira Sato",
    "flag": "US",
    "sprite1": "comfey",
    "sprite2": "sableye",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Konsta Kallama",
    "flag": "FI",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Raz Wolpe",
    "flag": "IL",
    "sprite1": "lugia",
    "sprite2": "archeops",  
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tyranitar-v",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/stonjourner",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal-ss",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-tsareena",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/urn-of-vitality",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mesagoza",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/single-strike-energy",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy",
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    "name": "Masataka Hirano",
    "flag": "JP",
    "sprite1": "blank",
    "sprite2": "../../assets/hyphen",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Yerco Valencia",
    "flag": "CL",
    "sprite1": "lugia",
    "sprite2": "archeops",  
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tyranitar-v",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ss-urshifu-vmax",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ss-urshifu-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal-ss",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/stonjourner",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-tsareena",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/urn-of-vitality",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mesagoza",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/single-strike-energy",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy",
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    "name": "Jamie Frankland",
    "flag": "UK",
    "sprite1": "giratina-origin",
    "sprite2": "comfey",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Andrew Mahone",
    "flag": "US",
    "sprite1": "miraidon",
    "sprite2": "flaaffy",  
     
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/miraidon-ex",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/flaaffy",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mareep60",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raichu-v",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zeraora-battle-claw",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/squakabilly-ex",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-turo",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/arven",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/elctric-generator",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bravery-charm",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg",
        numImg: '../../assets/14",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Daichi Shimada",
    "flag": "JP",
    "sprite1": "lugia",
    "sprite2": "archeops",  
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tyranitar-v",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal-ss",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/stonjourner",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-tsareena",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/urn-of-vitality",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/single-strike-energy",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    "name": "Bastian Silva",
    "flag": "CL",
    "sprite1": "chien-pao",
    "sprite2": "baxcalibur",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Miłosz Dyrlica",
    "flag": "PL",
    "sprite1": "comfey",
    "sprite2": "sableye",  
     
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bravery-charm",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../assets/04",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../assets/03",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg",
        numImg: '../../assets/02",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Cameron Shenoy",
    "flag": "US",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v-crz",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/feather-ball",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cleansing-gloves",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/fusion-strike-energy",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../assets/03.png'
      },
    ]
  },
  {
    "name": "Fabio Spanò",
    "flag": "IT",
    "sprite1": "goodra-hisui",
    "sprite2": "comfey",  
     
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/goodra-vstar",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/goodra-v",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zamazenta",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokegear30-sv",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../assets/04",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg",
        numImg: '../../assets/04",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../assets/02",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy",
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    "name": "Pedro Pertusi",
    "flag": "BR",
    "sprite1": "blank",
    "sprite2": "gardevoir",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Jon Eng",
    "flag": "US",
    "sprite1": "comfey",
    "sprite2": "sableye",  
     
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../assets/04",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg",
        numImg: '../../assets/02",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../assets/02",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Alex Krekeler",
    "flag": "US",
    "sprite1": "inteleon-vmax",
    "sprite2": "urshifu-rapid-strike-gmax",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-vmax",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-v",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-vmax",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-v",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/octillery",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/remoraid",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/medicham-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-alakazam",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-turo",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/korrinas-focus",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cheryl",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/giacomo",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-retrieval-sv",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search-sv",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tower-of-waters",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../assets/06",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/rapid-strike-energy",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Sejun Park",
    "flag": "KR",
    "sprite1": "miraidon",
    "sprite2": "flaaffy",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Ciaran Farah",
    "flag": "CA",
    "sprite1": "chien-pao",
    "sprite2": "baxcalibur",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/chien-pao-ex",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/baxcalibur",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/frigibax57",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/frigibax-chilly",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof-carefree",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/superior-energy-retrieval",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/canceling-cologne",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../assets/09",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Shuto Kogawa",
    "flag": "JP",
    "sprite1": "chien-pao",
    "sprite2": "baxcalibur",
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Jack Moore",
    "flag": "CA",
    "sprite1": "comfey",
    "sprite2": "sableye",  
     
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/kyogre",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../assets/05",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg",
        numImg: '../../assets/03",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../assets/03",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Akihiro Urata",
    "flag": "JP",
    "sprite1": "giratina-origin",
    "sprite2": "comfey",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Xander Pero",
    "flag": "US",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",  
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v-crz",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/oricorio",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cleansing-gloves",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/fusion-strike-energy",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../assets/03.png'
      },
    ]
  },
  {
    "name": "Tomu Mizutani",
    "flag": "JP",
    "sprite1": "blank",
    "sprite2": "arceus",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Namhyeok Koo",
    "flag": "KR",
    "sprite1": "giratina-origin",
    "sprite2": "comfey",  
     
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/giratina-vstar",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/giratina-v",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../assets/04",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg",
        numImg: '../../assets/03",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../assets/03",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Piotr Orleański",
    "flag": "PL",
    "sprite1": "comfey",
    "sprite2": "sableye",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Gabor Van Meenen",
    "flag": "DK",
    "sprite1": "miraidon",
    "sprite2": "regieliki-vmax",  
     
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/miraidon-ex",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/regieliki-vmax",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/regieliki-v",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/squakabilly-ex",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-turo",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes-crz",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/elctric-generator",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switching-cups",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/beach-court",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg",
        numImg: '../../assets/14",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Isaiah Bradner",
    "flag": "US",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Yuta Mori",
    "flag": "JP",
    "sprite1": "blank",
    "sprite2": "../../assets/hyphen",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Hiroaki Isono",
    "flag": "JP",
    "sprite1": "lugia",
    "sprite2": "archeops",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Su Chia-Hsing",
    "flag": "TW",
    "sprite1": "arceus",
    "sprite2": "aggron-vmax",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Yu Shirokuma",
    "flag": "JP",
    "sprite1": "blank",
    "sprite2": "../../assets/hyphen",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Matthew Burris",
    "flag": "AU",
    "sprite2": "../../assets/sprites/gardevoir.png",
    "sprite1": "blank",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir-ex",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cresselia",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/worker",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../assets/12",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Javier Chelmes",
    "flag": "CL",
    "sprite1": "lugia",
    "sprite2": "archeops",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Mateusz Łaszkiewicz",
    "flag": "PL",
    "sprite1": "comfey",
    "sprite2": "sableye",  
     
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bravery-charm",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../assets/04",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../assets/03",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg",
        numImg: '../../assets/02",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Ghe Nawon",
    "flag": "KR",
    "sprite1": "comfey",
    "sprite2": "sableye",  
     
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../assets/04",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../assets/03",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg",
        numImg: '../../assets/02",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Jeremy Evans",
    "flag": "AU",
    "sprite1": "lugia",
    "sprite2": "archeops",  
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tyranitar-v",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/squakabilly-ex",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal-ss",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/stonjourner",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-tsareena",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/great-ball",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/urn-of-vitality",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mesagoza",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/single-strike-energy",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    "name": "Nicholas Moffitt",
    "flag": "US",
    "sprite1": "comfey",
    "sprite2": "sableye",  
     
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/kyogre",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-turo",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../assets/05",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg",
        numImg: '../../assets/03",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../assets/03",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Lucas Matheus",
    "flag": "BR",
    "sprite1": "blank",
    "sprite2": "gardevoir",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Fabrizio Inga Silva",
    "flag": "PE",
    "sprite1": "comfey",
    "sprite2": "sableye",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Kaito Kimura",
    "flag": "JP",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Sander Wojcik",
    "flag": "NL",
    "sprite1": "vulpix-alola",
    "sprite2": "yveltal",  
     
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/vulpix-vstar",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/vulpix-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/espeon-vmax",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/espeon-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/regieliki-astr",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/diancie",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rotom-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/luxray-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bouffalant",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mimikyu",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/penny",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/flannery",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/peonia",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/crushing-hammer",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bravery-charm",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/moon-sun-badge",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/stormy-mountain",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/artazon",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy",
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    "name": "Bryan de Vries",
    "flag": "NL",
    "sprite1": "giratina-origin",
    "sprite2": "comfey",  
     
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/giratina-vstar",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/giratina-v",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../assets/04",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg",
        numImg: '../../assets/03",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../assets/02",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Jonathan Lanciano",
    "flag": "AR",
    "sprite1": "lugia",
    "sprite2": "archeops",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Moeen Mungalee",
    "flag": "ZA",
    "sprite1": "comfey",
    "sprite2": "sableye",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Dyatmika Paramaanindya",
    "flag": "ID",
    "sprite1": "comfey",
    "sprite2": "sableye",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Jory Koot",
    "flag": "NL",
    "sprite1": "chien-pao",
    "sprite2": "baxcalibur",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Trevore Read",
    "flag": "CA",
    "sprite1": "lugia",
    "sprite2": "archeops",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Tim Franklin",
    "flag": "AU",
    "sprite1": "comfey",
    "sprite2": "sableye",  
     
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes-crz",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../assets/04",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg",
        numImg: '../../assets/02",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../assets/02",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Owyn Kamerman",
    "flag": "NL",
    "sprite1": "arceus",
    "sprite2": "umbreon-vmax",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/umbreon-vmax",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/umbreon-v",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-vmax",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/slaking-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-alakazam",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/hawlucha",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/adventurers-discovery",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/volo",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/switch",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-dark-energy.jpg",
        numImg: '../../assets/05",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg",
        numImg: '../../assets/03",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    "name": "Julian Luvara",
    "flag": "AU",
    "sprite1": "comfey",
    "sprite2": "sableye",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Fabien Pujol",
    "flag": "FR",
    "sprite1": "gardevoir",
    "sprite2": "palkia-origin",  
     
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/chien-pao-ex",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/kyogre",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zinnia",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/canceling-cologne",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../assets/09",
        radiusCard: true
      },
    ]
  },
]

"seniors": [
  {
    "name": "Gabriel Fernandez",
    "flag": "BR",
    "sprite1": "lugia",
    "sprite2": "archeops",  
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/wyrdeer-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/slaking-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-tsareena",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/theraputic-energ",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    "name": "Sydney De Bruijn",
    "flag": "NL",
    "sprite1": "arceus",
    "sprite2": "giratina-origin",  
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/giratina-vstar",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/giratina-v",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof-carefree",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-alakazam",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg",
        numImg: '../../assets/05",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../assets/05",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Yuya T.",
    "flag": "JP",
    "sprite1": "blank",
    "sprite2": "../../assets/hyphen",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Sechan O",
    "flag": "KR",
    "sprite1": "comfey",
    "sprite2": "sableye",  
     
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/hawlucha",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../assets/04",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../assets/03",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg",
        numImg: '../../assets/02",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Akinori A",
    "flag": "JP",
    "sprite1": "blank",
    "sprite2": "../../assets/hyphen",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Rune Heiremans",
    "flag": "BE",
    "sprite1": "chien-pao",
    "sprite2": "baxcalibur",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/chien-pao-ex",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/baxcalibur",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/frigibax57",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/frigibax-chilly",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof-carefree",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/superior-energy-retrieval",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/canceling-cologne",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokegear30-sv",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../assets/09",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Lucas J",
    "flag": "BR",
    "sprite1": "blank",
    "sprite2": "../../assets/hyphen",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Polaris Altares",
    "flag": "US",
    "sprite1": "palkia-origin",
    "sprite2": "chien-pao",  
     
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/chien-pao-ex",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/suicune-v",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof-carefree",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../assets/09",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Vini Fernandez",
    "flag": "BR",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v-crz",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/deoxys-promo",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/squakabilly-ex",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/penny",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/fusion-strike-energy",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../assets/03.png'
      },
    ]
  },
  {
    "name": "Pedro Augusto C",
    "flag": "BR",
    "sprite1": "blank",
    "sprite2": "../../assets/hyphen",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "João Gabriel P",
    "flag": "BR",
    "sprite1": "lugia",
    "sprite2": "archeops",  
    list: '../../assets/list-icon",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tyranitar-v",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ss-urshifu-vmax",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ss-urshifu-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal-ss",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/stonjourner",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/squakabilly-ex",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/urn-of-vitality",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mesagoza",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/single-strike-energy",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy",
        numImg: '../../assets/02.png'
      },
    ]
  },
]

"juniors": [
  {
    "name": "Shao Tong Y",
    "flag": "TW",
    "sprite1": "comfey",
    "sprite2": "sableye",  
     
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/kyogre",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg",
        numImg: '../../assets/05",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg",
        numImg: '../../assets/03",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../assets/03",
        radiusCard: true
      },
    ]
  },
  {
    "name": "Gabriel T",
    "flag": "BR",
    "sprite1": "arceus",
    "sprite2": "duraludon-gmax",  
     
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/duraludon-vmax-crz",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/duraludon-v-ss",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/umbreon-vmax",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/umbreon-v",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-alakazam",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/adventurers-discovery",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/switch",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg",
        numImg: '../../assets/04",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-dark-energy.jpg",
        numImg: '../../assets/03",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-fighting-energy.jpg",
        numImg: '../../assets/02",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    "name": "Hayashi Y",
    "flag": "JP",
    "sprite1": "blank",
    "sprite2": "../../assets/hyphen",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Hatsuto K",
    "flag": "JP",
    "sprite1": "blank",
    "sprite2": "../../assets/hyphen",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Kazusa Y.",
    "flag": "JP",
    "sprite1": "blank",
    "sprite2": "../../assets/hyphen",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Kingsley C",
    "flag": "AU",
    "sprite2": "../../assets/sprites/gardevoir.png",
    "sprite1": "blank",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir-ex",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts-memory-skip",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cresselia",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/worker",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball",
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal",
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg",
        numImg: '../../assets/11",
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/reversal-energy",
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    "name": "Junwon C",
    "flag": "KR",
    "sprite1": "blank",
    "sprite2": "../../assets/hyphen",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    "name": "Haruku U",
    "flag": "JP",
    "sprite1": "blank",
    "sprite2": "../../assets/hyphen",  
    // list: '../../assets/list-icon",
    list: '../../assets/sprites/blank",
    type: 'normal",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023",
        numImg: '../../assets/04.png'
      },
    ]
  },
]

//masters
function displayList(array = []) {
    masterList.innerHTML = '';

  for (let i = 0; i < array.length; i++) {
    let item = array[i];

    // let zoomBox = document.createElement('div');
    // zoomBox.classList.add('zoom-card-box');
    // console.log(zoomBox)

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

    if (item.list === '../../assets/list-icon.png') {
      item_element.addEventListener('click", function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item."name" + " " + " - 2023 Worlds";
                // document.querySelector('.playerName').innerHTML = item."name" + " " + "(" + item.record + ")" + " - 2023 Worlds";
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

    if (item.list === '../../assets/list-icon.png') {
      item_element.addEventListener('click", function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item."name" + " " + " - 2023 Worlds";
                // document.querySelector('.playerName').innerHTML = item."name" + " " + "(" + item.record + ")" + " - 2023 Worlds";

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

    if (item.list === '../../assets/list-icon.png') {
      item_element.addEventListener('click", function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item."name" + " " + " - 2023 Worlds";
                    // document.querySelector('.playerName').innerHTML = item."name" + " " + "(" + item.record + ")" + " - 2023 Worlds";

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
    juniorList.appendChild(item_element);
  }
}

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);
displayList2(seniors);
displayList3(juniors);
