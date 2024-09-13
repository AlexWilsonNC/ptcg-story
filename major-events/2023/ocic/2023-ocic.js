const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

"masters": [
  {
    "name": "Azul Griego",
    "flag": "US",
    "sprite1": "comfey",
    "sprite2": "sableye",
     
    type: 'normal",
    deck: [
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
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zeraora",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dragonite-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax-unfazed-fat",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
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
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sky-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-brs",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/lightning-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    "name": "Regan Retzloff",
    "flag": "US",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-raikou",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/heat-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/speed-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Owyn Kamerman",
    "flag": "NL",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/genesct-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/aerodactyl-vstar",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/aerodactyl-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oricorio",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/judge",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cyllene",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rotom-phone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-parasoul",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-city",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Rahul Reddy",
    "flag": "US",
    "sprite1": "blank",
    "sprite2": "regigigas",
     
    type: 'normal",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/regigigas",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/regieliki-evs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/regieliki-astr",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/regidrago",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/registeel",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/regice",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/regirock",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/trekking-shoes-crz",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-loto",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/speed-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/twin-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/gift-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/02.png'
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
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-raikou",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/irida",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/heat-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/speed-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Pedro Torres",
    "flag": "ES",
    "sprite1": "comfey",
    "sprite2": "sableye",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sableye",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raikou-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zamazenta",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax-unfazed-fat",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
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
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/02.png'
      },
        {
          cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
          numImg: '../../../assets/02.png'
        },
        {
          cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
          numImg: '../../../assets/01.png'
        },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sky-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-brs",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/metal-energy-brs",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/lightning-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/03.png'
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
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-raikou",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/irida",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/heat-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Grant Shen",
    "flag": "US",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-raikou",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/heat-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/wash-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Sam Chen",
    "flag": "US",
    "sprite1": "blank",
    "sprite2": "regigigas",
     
    type: 'normal",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/regigigas",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/regieliki-evs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/regieliki-astr",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/regidrago",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/registeel",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/regice",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/regirock",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/trekking-shoes-crz",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-loto",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/speed-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/twin-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/gift-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Aiden Harrison",
    "flag": "AU",
    "sprite1": "comfey",
    "sprite2": "sableye",
     
    type: 'dark",
    deck: [
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
        cardImg: '../../../assets/cards/2022-2023/kyogre",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dragonite-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raikou-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zamazenta",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
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
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/02.png'
      },
        {
          cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
          numImg: '../../../assets/01.png'
        },
      {
        cardImg: '../../../assets/cards/2022-2023/sky-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pokestop",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/metal-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/lightning-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "David Daritan",
    "flag": "AU",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/genesct-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/meloetta",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/elesa-sparkle",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-parasoul",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-city",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fusion-strike-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Pedro Pertusi",
    "flag": "BR",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-raikou",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/irida",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/heat-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Carlos Barros",
    "flag": "BR",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-raikou",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/heat-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/speed-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Taketo Seki",
    "flag": "JP",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/yveltal",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cherens-care",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Connor Finton",
    "flag": "US",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-raikou",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax-unfazed-fat",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/skyla",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/heat-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Cameron Shenoy",
    "flag": "US",
    "sprite1": "blank",
    "sprite2": "vikavolt",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/vikavolt-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raikou-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zapdos",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/judge",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cross-switcher",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/trekking-shoes-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-search",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sky-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cape-of-toughness",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/lightning-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/speed-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Peter Lo",
    "flag": "HK",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-raikou",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/irida",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/canceling-cologne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/heat-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/speed-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Jamie Frankland",
    "flag": "UK",
    "sprite1": "comfey",
    "sprite2": "sableye",
     
    type: 'dark",
    deck: [
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
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-rayquaza",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-raikou",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/giratina-vstar",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/giratina-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/01.png'
      },
        {
          cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
          numImg: '../../../assets/01.png'
        },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/grass-energy-brs",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/lightning-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/metal-energy-brs",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Takuto Itagaki",
    "flag": "JP",
    "sprite1": "yveltal",
    "sprite2": "eldegoss",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/yveltal",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/eldegoss-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax-unfazed-fat",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/miltank",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/starly",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/eiscue",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/regieliki-astr",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sidney",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/thorton",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/peonia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bruno",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/yell-horn",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cape-of-toughness",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/galar-mine",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-city",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/twin-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/wash-energy",
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    "name": "Agustín Campo",
    "flag": "AR",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-raikou",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/irida",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/heat-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Mads Jensen",
    "flag": "DK",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-raikou",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax-unfazed-fat",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/irida",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/heat-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Gustavo Wada",
    "flag": "BR",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/skyla",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/hiding-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Haru Nishikawa",
    "flag": "JP",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/flying-pikachu-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/flying-pikachu-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-parasoul",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/speed-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Yuki Kawahito",
    "flag": "JP",
    "sprite1": "goodra-hisui",
    "sprite2": "comfey",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-vstar",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/temple-of-sinnoh",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/metal-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Mia Fountain",
    "flag": "AU",
    "sprite1": "arceus",
    "sprite2": "duraludon-gmax",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/duraludon-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/duraludon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sss-mustard",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pokegear",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/hyper-potion",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-parasoul",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-city",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/temple-of-sinnoh",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/metal-energy-brs",
        numImg: '../../../assets/06.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-brs",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Soma Arai",
    "flag": "JP",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-raikou",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-parasoul",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/speed-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/heat-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Shuto Itagaki",
    "flag": "JP",
    "sprite1": "goodra-hisui",
    "sprite2": "comfey",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/goodra-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/temple-of-sinnoh",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/metal-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    "name": "Giovanni Peragallo",
    "flag": "CL",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-raikou",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/irida",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/heat-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Taisei Kodama",
    "flag": "JP",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/genesct-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/meloetta",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/elesa-sparkle",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/judge",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/temple-of-sinnoh",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fusion-strike-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    "name": "Christian Tuomi",
    "flag": "FI",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/genesct-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/meloetta",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/elesa-sparkle",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rotom-phone",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-city",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fusion-strike-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    "name": "Paul Coletta",
    "flag": "AU",
    "sprite1": "comfey",
    "sprite2": "sableye",
     
    type: 'normal",
    deck: [
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
        cardImg: '../../../assets/cards/2022-2023/raikou-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dragonite-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax-unfazed-fat",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
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
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sky-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/lightning-energy-brs",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Robbie Caldwell",
    "flag": "AU",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax-unfazed-fat",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/heat-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Jack Underwood",
    "flag": "AU",
    "sprite1": "blank",
    "sprite2": "regigigas",
     
    type: 'normal",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/regigigas",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/regieliki-evs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/regieliki-astr",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/regidrago",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/registeel",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/regice",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/regirock",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/trekking-shoes-crz",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/yell-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/speed-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/twin-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/gift-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Kye Edmondston",
    "flag": "AU",
    "sprite1": "comfey",
    "sprite2": "sableye",
     
    type: 'normal",
    deck: [
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
        cardImg: '../../../assets/cards/2022-2023/kyogre",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raikou-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dragonite-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
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
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pokestop",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-brs",
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/lightning-energy-brs",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-brs",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Akira Sato",
    "flag": "US",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-raikou",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax-unfazed-fat",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/irida",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/heat-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Andrew Gantner",
    "flag": "US",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-raikou",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/heat-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/wash-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Elliot Gantner",
    "flag": "US",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-raikou",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/heat-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/wash-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Jay Tyrrell",
    "flag": "AU",
    "sprite1": "blank",
    "sprite2": "vikavolt",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/vikavolt-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/aerodactyl-vstar",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/aerodactyl-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raikou-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ditto-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zapdos",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/judge",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cross-switcher",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-search",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sky-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cape-of-toughness",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/lightning-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-brs",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/speed-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Joel Suryadi",
    "flag": "AU",
    "sprite1": "comfey",
    "sprite2": "sableye",
     
    type: 'dark",
    deck: [
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
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zamazenta",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dragonite-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raikou-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
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
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/02.png'
      },
        {
          cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
          numImg: '../../../assets/01.png'
        },
      {
        cardImg: '../../../assets/cards/2022-2023/sky-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/metal-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-brs",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/lightning-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Ciaran Farah",
    "flag": "CA",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-raikou",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax-unfazed-fat",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/irida",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/heat-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Kai Chung",
    "flag": "AU",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-raikou",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/irida",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/heat-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/speed-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Heddi Brahmi",
    "flag": "FR",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/heat-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/wash-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Courtney Fox",
    "flag": "AU",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/prof-burnet",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/heat-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/wash-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Facundo Facio",
    "flag": "AR",
    "sprite1": "yveltal",
    "sprite2": "eldegoss",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/yveltal",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/eldegoss-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax-unfazed-fat",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/regieliki-astr",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/flying-pikachu-vmax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/flying-pikachu-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/miltank",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/starly",
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
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sidney",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/thorton",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/peonia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bruno",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/yell-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cape-of-toughness",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-parasoul",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/galar-mine",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/twin-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/wash-energy",
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    "name": "Peter Ghionis",
    "flag": "AU",
    "sprite1": "jirachi-shiny",
    "sprite2": "regigigas",
     
    type: 'normal",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/regigigas",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/regieliki-evs",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/regidrago",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/registeel",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/regice",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/regirock",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-jirachi",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/copycat",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zinnia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-loto",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/twin-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/speed-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Tord Reklev",
    "flag": "NO",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/flying-pikachu-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/flying-pikachu-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-parasoul",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/speed-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Grant Manley",
    "flag": "US",
    "sprite1": "comfey",
    "sprite2": "sableye",
     
    type: 'normal",
    deck: [
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
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zeraora",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dragonite-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax-unfazed-fat",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
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
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sky-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-brs",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/lightning-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    "name": "Alex Schemanske",
    "flag": "US",
    "sprite1": "comfey",
    "sprite2": "sableye",
     
    type: 'dark",
    deck: [
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
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/kyogre",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dragonite-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zekrom",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/articuno",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
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
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/02.png'
      },
        {
          cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
          numImg: '../../../assets/02.png'
        },
        {
          cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
          numImg: '../../../assets/01.png'
        },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/emergency-jelly",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/lightning-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-brs",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Magnus Pedersen",
    "flag": "DK",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/genesct-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/aerodactyl-vstar",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/aerodactyl-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oricorio",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/judge",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cyllene",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rotom-phone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-parasoul",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-city",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Aidan Khus",
    "flag": "US",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-raikou",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/heat-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/wash-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Callum Pinnegar",
    "flag": "AU",
    "sprite1": "comfey",
    "sprite2": "sableye",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sableye",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-rayquaza",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-raikou",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raikou-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
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
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/04.png'
      },
        {
          cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
          numImg: '../../../assets/03.png'
        },
        {
          cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
          numImg: '../../../assets/02.png'
        },
        {
          cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
          numImg: '../../../assets/01.png'
        },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sky-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/lightning-energy-brs",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/grass-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/metal-energy-brs",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Ehren Roebuck",
    "flag": "AU",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v-crz",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/genesct-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/meloetta",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oricorio",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/elesa-sparkle",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/judge",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cyllene",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pokemon-catcher",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rotom-phone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-parasoul",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-city",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fusion-strike-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    "name": "Karl Peters",
    "flag": "DE",
    "sprite1": "articuno",
    "sprite2": "inteleon",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/articuno",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-quick-shooting",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-shady-dealings",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drizzile",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sobble",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crabonminal-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-alakazam",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/eiscue",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/frosmoth",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snom",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/irida",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/nessa",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/capacious-bucket",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rare-candy-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/emergency-jelly",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-city",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-brs",
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/wash-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Christian Hasbani",
    "flag": "AU",
    "sprite1": "blank",
    "sprite2": "vikavolt",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/vikavolt-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/aerodactyl-vstar",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/aerodactyl-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raikou-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ditto-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zapdos",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/judge",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cross-switcher",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/trekking-shoes-crz",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-search",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/lightning-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-brs",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/speed-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Anselm Sim",
    "flag": "SG",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-raikou",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/irida",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/heat-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Kazutaka Tajima",
    "flag": "JP",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/yveltal",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cherens-care",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/hiding-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Kim Beom Jin",
    "flag": "KR",
    "sprite1": "yveltal",
    "sprite2": "eldegoss",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/yveltal",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/eldegoss-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax-unfazed-fat",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/eiscue",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/miltank",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/starly",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/regieliki-astr",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sidney",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/thorton",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/peonia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bruno",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cape-of-toughness",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/galar-mine",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-city",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/wash-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/twin-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    "name": "Marcelo Turra",
    "flag": "BR",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-raikou",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/judge",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/irida",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/canceling-cologne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/heat-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/speed-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Jon Eng",
    "flag": "US",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-raikou",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/heat-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/speed-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Ryan Antonucci",
    "flag": "US",
    "sprite1": "comfey",
    "sprite2": "sableye",
     
    type: 'normal",
    deck: [
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
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zeraora",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dragonite-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax-unfazed-fat",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
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
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sky-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-brs",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/lightning-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    "name": "Joshua Wilson",
    "flag": "AU",
    "sprite1": "comfey",
    "sprite2": "sableye",
    // list: '../../../assets/list-icon",
    list: '../../../assets/sprites/blank",
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Matthew Burris",
    "flag": "AU",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-raikou",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax-unfazed-fat",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/irida",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/heat-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Daichi Shimada",
    "flag": "JP",
    "sprite1": "yveltal",
    "sprite2": "eldegoss",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/yveltal",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/eldegoss-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax-unfazed-fat",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/miltank",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/starly",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/eiscue",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/regieliki-astr",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sidney",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/thorton",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/peonia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bruno",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/yell-horn",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cape-of-toughness",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/galar-mine",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-city",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/twin-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/wash-energy",
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    "name": "Hoong Ngiam",
    "flag": "AU",
    "sprite1": "blank",
    "sprite2": "../../../assets/hyphen",
    // list: '../../../assets/list-icon",
    list: '../../../assets/sprites/blank",
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
]

"seniors": [
  {
    "name": "Polaris Altares",
    "flag": "US",
    "sprite1": "blank",
    "sprite2": "vikavolt",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/vikavolt-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raikou-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zapdos",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/judge",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cross-switcher",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/trekking-shoes-crz",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-search",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cape-of-toughness",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sky-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/lightning-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/speed-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Yuichi Matsuo",
    "flag": "AU",
    "sprite1": "comfey",
    "sprite2": "sableye",
     
    type: 'normal",
    deck: [
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
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-raikou",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zamazenta",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
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
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/temple-of-sinnoh",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/metal-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/grass-energy-brs",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/lightning-energy-brs",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-brs",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Neo Erlandsson",
    "flag": "US",
    "sprite1": "blank",
    "sprite2": "vikavolt",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/vikavolt-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/aerodactyl-vstar",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/aerodactyl-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raikou-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ditto-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zapdos",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/judge",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cross-switcher",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/trekking-shoes-crz",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-search",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sky-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/lightning-energy-brs",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-brs",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/speed-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Bodhi Robinson",
    "flag": "US",
    "sprite1": "palkia-origin",
    "sprite2": "inteleon",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/palkia-vmax-origin-forme",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/palkia-v-origin-forme",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-quick-shooting",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-shady-dealings",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drizzile",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sobble",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/articuno",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crabonminal-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/eiscue",
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
        cardImg: '../../../assets/cards/2022-2023/irida",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/thorton",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/capacious-bucket",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/emergency-jelly",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cape-of-toughness",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-city",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-brs",
        numImg: '../../../assets/06.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/wash-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Chawinnut Neamkasipong",
    "flag": "TH",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-raikou",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/heat-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/wash-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Marley Skyum",
    "flag": "DK",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax-unfazed-fat",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/irida",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/hiding-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Benny Billinger",
    "flag": "CA",
    "sprite1": "palkia-origin",
    "sprite2": "inteleon",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/palkia-vmax-origin-forme",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/palkia-v-origin-forme",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-quick-shooting",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-shady-dealings",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drizzile",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sobble",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/articuno",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crabonminal-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/eiscue",
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
        cardImg: '../../../assets/cards/2022-2023/irida",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/thorton",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/capacious-bucket",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/emergency-jelly",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cape-of-toughness",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-brs",
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/wash-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Ryan Anderson",
    "flag": "AU",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/genesct-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oricorio",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/judge",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cross-switcher",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-parasoul",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-city",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "João Penteado",
    "flag": "BR",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-raikou",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/irida",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/heat-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Roberto Costanzo",
    "flag": "FR",
    "sprite1": "lugia",
    "sprite2": "archeops",
    // list: '../../../assets/list-icon",
    list: '../../../assets/sprites/blank",
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Noah Brown",
    "flag": "UK",
    "sprite1": "palkia-origin",
    "sprite2": "inteleon",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/palkia-vmax-origin-forme",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/palkia-v-origin-forme",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-quick-shooting",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-shady-dealings",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drizzile",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sobble",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/articuno",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crabonminal-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drapion-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/eiscue",
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
        cardImg: '../../../assets/cards/2022-2023/irida",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/thorton",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/capacious-bucket",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/emergency-jelly",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cape-of-toughness",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-brs",
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/wash-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Rune Heiremans",
    "flag": "BE",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-raikou",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/heat-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/speed-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Rory Sharpe",
    "flag": "AU",
    "sprite1": "comfey",
    "sprite2": "sableye",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sableye",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-rayquaza",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-raikou",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/giratina-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax-unfazed-fat",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
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
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/03.png'
      },
        {
          cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
          numImg: '../../../assets/03.png'
        },
        {
          cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
          numImg: '../../../assets/02.png'
        },
        {
          cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
          numImg: '../../../assets/01.png'
        },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/temple-of-sinnoh",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/grass-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/lightning-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/metal-energy-brs",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Samuel Cohen",
    "flag": "AU",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
    // list: '../../../assets/list-icon",
    list: '../../../assets/sprites/blank",
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Justin Templer",
    "flag": "US",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-raikou",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/irida",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/canceling-cologne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/heat-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/wash-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Tyson Ashkenazy",
    "flag": "AU",
    "sprite1": "blank",
    "sprite2": "../../../assets/hyphen",
    // list: '../../../assets/list-icon",
    list: '../../../assets/sprites/blank",
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
]

"juniors": [
  {
    "name": "Remi Lorenz",
    "flag": "US",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/genesct-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/meloetta",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/elesa-sparkle",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cyllene",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cross-switcher",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-city",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fusion-strike-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    "name": "Robert Matise",
    "flag": "US",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/genesct-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oricorio",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/judge",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cross-switcher",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-parasoul",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-city",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Drake Zhu",
    "flag": "NZ",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-raikou",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/irida",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/prof-burnet",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/canceling-cologne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/heat-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Kingsley Cheng",
    "flag": "AU",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-raikou",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax-unfazed-fat",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/irida",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/heat-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Luke Bennett",
    "flag": "AU",
    "sprite1": "comfey",
    "sprite2": "sableye",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/comfey",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-rayquaza",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sableye",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cramorant",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zekrom",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-greninja",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/colress-experiment",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mirage-gate",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-recycler",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/02.png'
      },
        {
          cardImg: '../../../assets/cards/2022-2023/heavy-ball-hisuian",
          numImg: '../../../assets/01.png'
        },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-brs",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/lightning-energy-brs",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/grass-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-brs",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Ricky Yang",
    "flag": "AU",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/genesct-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oricorio",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roxanne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cyllene",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cross-switcher",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch-cart",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/forest-seal-stone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-city",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Jan Jakubowski",
    "flag": "PL",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax-unfazed-fat",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/heat-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Manik Satharasinghe",
    "flag": "AU",
    "sprite1": "lugia",
    "sprite2": "archeops",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lugia-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/archeops",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/stoutland-v-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/radiant-charizard-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/amazing-raikou",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professors-research-pogo",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/serena",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/skyla",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball-crz",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/canceling-cologne",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-vacuum-crz",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lost-city",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/v-guard-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/heat-energy",
        numImg: '../../../assets/01.png'
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
                    document.querySelector('.playerName').innerHTML = item."name" + " - 2023 OCIC";

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
          pokeCard.setAttribute('src", deck.cardImg);

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
                    document.querySelector('.playerName').innerHTML = item."name" + " - 2023 OCIC";

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
          pokeCard.setAttribute('src", deck.cardImg);

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
                    document.querySelector('.playerName').innerHTML = item."name" + " - 2023 OCIC";

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
          pokeCard.setAttribute('src", deck.cardImg);

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
