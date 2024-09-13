const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

"masters": [
  {
    "name": "Gustavo Wada",
    "flag": "BR",
    "sprite1": "urshifu-rapid-strike-gmax",
    "sprite2": "inteleon",
     
    type: 'fighting",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/moltres-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/moltres",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-v",
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2022-2023/snorlax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/avery",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cheryl",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sonia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/piers",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-search",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-switch",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-retrieval",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tower-of-waters",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-brs",
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/rapid-strike-energy",
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    "name": "Frank Percic",
    "flag": "US",
    "sprite1": "blank",
    "sprite2": "whimsicott",
     
    type: 'psychic",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/whimsicott-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/whimsicott-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bibarel",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bidoof",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/avery",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/peony",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crushing-hammer",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fog-crystal",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fan-of-waves",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tool-scrapper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/exp-share",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Pedro Torres",
    "flag": "ES",
    "sprite1": "urshifu-rapid-strike-gmax",
    "sprite2": "inteleon",
     
    type: 'fighting",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-shady-dealings",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-quick-shooting",
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
        cardImg: '../../../assets/cards/2022-2023/octillery",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/remoraid",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/medicham-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/moltres",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/hoopa",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/eldegoss",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/gosiflour",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sonia",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/avery",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cynthias-ambition",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cheryl",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/peonia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
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
        cardImg: '../../../assets/cards/2022-2023/energy-search",
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
        cardImg: '../../../assets/cards/2022-2023/tower-of-waters",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-brs",
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/rapid-strike-energy",
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    "name": "Mateusz Rusinek",
    "flag": "PL",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'psychic",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v",
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
        cardImg: '../../../assets/cards/2022-2023/oricorio",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/elesa-sparkle",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
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
        cardImg: '../../../assets/cards/2022-2023/fog-crystal",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tool-jammer",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rose-tower",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-brs",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fusion-strike-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Tord Reklev",
    "flag": "NO",
    "sprite1": "urshifu-rapid-strike-gmax",
    "sprite2": "inteleon",
     
    type: 'fighting",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-shady-dealings",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-quick-shooting",
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
        cardImg: '../../../assets/cards/2022-2023/octillery",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/remoraid",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/medicham-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/moltres",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/hoopa",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sonia",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/avery",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cynthias-ambition",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cheryl",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/peonia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
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
        cardImg: '../../../assets/cards/2022-2023/energy-search",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tower-of-waters",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-brs",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/rapid-strike-energy",
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    "name": "Thai Nguyen",
    "flag": "DE",
    "sprite1": "arceus",
    "sprite2": "sylveon-vmax",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sylveon-vmax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sylveon-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-vmax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-vmax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/moltres-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/octillery",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/remoraid",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/korrinas-focus",
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
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/avery",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/peonia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fan-of-waves",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tower-of-waters",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-brs",
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/rapid-strike-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Isaiah Bradner",
    "flag": "US",
    "sprite1": "urshifu-rapid-strike-gmax",
    "sprite2": "inteleon",
     
    type: 'fighting",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/moltres",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/hoopa",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/medicham-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-shady-dealings",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-quick-shooting",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drizzile",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sobble",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/passimian-rs",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cynthias-ambition",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cheryl",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/peonia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
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
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-brs",
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-brs",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/rapid-strike-energy",
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    "name": "Justin Bokhari",
    "flag": "US",
    "sprite1": "urshifu-rapid-strike-gmax",
    "sprite2": "inteleon",
     
    type: 'fighting",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/moltres",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/hoopa",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/medicham-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-shady-dealings",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-quick-shooting",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drizzile",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sobble",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/passimian-rs",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cynthias-ambition",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cheryl",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/peonia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
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
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-brs",
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-brs",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/rapid-strike-energy",
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    "name": "Keito Arai",
    "flag": "JP",
    "sprite1": "arceus",
    "sprite2": "beedrill",
     
    type: 'normal",
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
        cardImg: '../../../assets/cards/2022-2023/inteleon-shady-dealings",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-quick-shooting",
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
        cardImg: '../../../assets/cards/2022-2023/beedrill",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sss-mustard",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cherens-care",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-search",
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
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm",
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
        cardImg: '../../../assets/cards/new-energy/grass-energy-brs",
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-brs",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Ruben van der Sluis",
    "flag": "NL",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'psychic",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v",
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
        cardImg: '../../../assets/cards/2022-2023/oricorio",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/elesa-sparkle",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/peony",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rotom-phone",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rose-tower",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-brs",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fusion-strike-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Alexander Weber",
    "flag": "AT",
    "sprite1": "arceus",
    "sprite2": "inteleon",
    list: '../../../assets/sprites/blank",
    type: '",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Charlie Merryweather",
    "flag": "UK",
    "sprite1": "malamar",
    "sprite2": "inteleon",
     
    type: 'psychic",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/malamar",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inkay",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-quick-shooting",
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2022-2023/octillery",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/remoraid",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cynthias-ambition",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/korrinas-focus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/brawly",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fog-crystal",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rescue-carrier",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tower-of-waters",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/spiral-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Edwyn Mesman",
    "flag": "NL",
    "sprite1": "arceus",
    "sprite2": "inteleon",
     
    type: 'normal",
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
        cardImg: '../../../assets/cards/2022-2023/moltres",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cherens-care",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-giovanni",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/avery",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dark-energy-brs",
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/energy/water-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Tetsu Watanabe",
    "flag": "IT",
    "sprite1": "arceus",
    "sprite2": "inteleon",
     
    type: 'normal",
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
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-giovanni",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cherens-care",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/water-energy-brs",
        numImg: '../../../assets/07.png'
      },
      {
        cardImg: '../../../assets/cards/energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Elias Stratmann",
    "flag": "DE",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'psychic",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v",
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
        cardImg: '../../../assets/cards/2022-2023/oricorio",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/elesa-sparkle",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/avery",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fog-crystal",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tower-of-darkness",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-brs",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fusion-strike-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Kaiwen Cabbabe",
    "flag": "AU",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'psychic",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v",
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
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rotom-phone",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rose-tower",
        numImg: '../../../assets/03.png'
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
    "name": "Alberto Conti",
    "flag": "IT",
    "sprite1": "arceus",
    "sprite2": "inteleon",
     
    type: 'normal",
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
        cardImg: '../../../assets/cards/2022-2023/inteleon-shady-dealings",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-quick-shooting",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drizzile",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sobble",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/moltres",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-giovanni",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cherens-care",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-switch",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dark-energy-brs",
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/energy/water-energy-brs",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Juho Kallama",
    "flag": "FI",
    "sprite1": "arceus",
    "sprite2": "inteleon",
    list: '../../../assets/sprites/blank",
    type: '",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Magnus Pedersen",
    "flag": "DK",
    "sprite1": "arceus",
    "sprite2": "beedrill",
     
    type: 'normal",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-vmax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/beedrill",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/meowth-galarian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bibarel",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bidoof",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sss-mustard",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/avery",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pokegear",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/grass-energy-brs",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Joshua Huggard",
    "flag": "UK",
    "sprite1": "arceus",
    "sprite2": "lycanroc-dusk",
     
    type: 'fighting",
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
        cardImg: '../../../assets/cards/2022-2023/lycanroc-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lycanroc-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-vmax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/hoopa-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bibarel",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bidoof",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
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
        cardImg: '../../../assets/cards/2022-2023/big-charm",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Piotr Orleański",
    "flag": "PL",
    "sprite1": "arceus",
    "sprite2": "crobat-vmax",
     
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
        cardImg: '../../../assets/cards/2022-2023/crobat-vmax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/hoopa-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bibarel",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bidoof",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
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
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cherens-care",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/avery",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-brs",
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Zach Cooper",
    "flag": "US",
    "sprite1": "urshifu-rapid-strike-gmax",
    "sprite2": "inteleon",
     
    type: 'fighting",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-vmax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-quick-shooting",
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2022-2023/moltres-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/moltres",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/hoopa",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/medicham-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rowlet",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tapu-koko",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cynthias-ambition",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sonia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-search",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-retrieval",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-brs",
        numImg: '../../../assets/06.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-brs",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/rapid-strike-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Jelle van Kampen",
    "flag": "NL",
    "sprite1": "blank",
    "sprite2": "arceus",
     
    type: 'normal",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-vstar",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-v",
        numImg: '../../../assets/04.png'
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
        cardImg: '../../../assets/cards/2022-2023/yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bibarel",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bidoof",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
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
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cherens-care",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/avery",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sidney",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crushing-hammer",
        numImg: '../../../assets/04.png'
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
        cardImg: '../../../assets/cards/2022-2023/big-charm",
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
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-brs",
        numImg: '../../../assets/06.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Miloslav Poslední",
    "flag": "CZ",
    "sprite1": "moltres-galar",
    "sprite2": "inteleon",
     
    type: '",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/moltres",
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
        cardImg: '../../../assets/cards/2022-2023/hoopa",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zapdos-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/eldegoss",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/gosiflour",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rowlet",
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
        cardImg: '../../../assets/cards/2022-2023/sonia",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/02.png'
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
        cardImg: '../../../assets/cards/2022-2023/cynthias-ambition",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/leon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
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
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tool-scrapper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lucky-eg",
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
        cardImg: '../../../assets/cards/new-energy/dark-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-brs",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-brs",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Pablo Meza",
    "flag": "MX",
    "sprite1": "arceus",
    "sprite2": "inteleon",
     
    type: 'normal",
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
        cardImg: '../../../assets/cards/2022-2023/inteleon-shady-dealings",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-quick-shooting",
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
        cardImg: '../../../assets/cards/2022-2023/bibarel",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bidoof",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-giovanni",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cherens-care",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
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
        cardImg: '../../../assets/cards/2022-2023/big-charm",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/water-energy-brs",
        numImg: '../../../assets/06.png'
      },
      {
        cardImg: '../../../assets/cards/energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Elena Gómez",
    "flag": "ES",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'psychic",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v",
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
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
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
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rose-tower",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/old-cemetary",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-brs",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fusion-strike-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Connor Finton",
    "flag": "US",
    "sprite1": "calyrex-shadow-rider",
    "sprite2": "whimsicott",
     
    type: 'psychic",
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/calyrex-vmax-shadow-rider",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/calyrex-v-shadow-rider",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/whimsicott-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/whimsicott-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
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
        cardImg: '../../../assets/cards/2022-2023/team-yell-grunt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crushing-hammer",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fog-crystal",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fan-of-waves",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-brs",
        numImg: '../../../assets/12.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Jake Mallender",
    "flag": "UK",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'psychic",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v",
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
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switching-cups",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fog-crystal",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
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
        cardImg: '../../../assets/cards/2022-2023/rose-tower",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fusion-strike-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Alex Schemanske",
    "flag": "US",
    "sprite1": "urshifu-rapid-strike-gmax",
    "sprite2": "inteleon",
     
    type: 'fighting",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-vmax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/medicham-v",
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2021-2022/passimian-rs",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rose",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
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
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/telescopic-sight",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tower-of-waters",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-brs",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/rapid-strike-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Reiji Nishiguchi",
    "flag": "JP",
    "sprite1": "arceus",
    "sprite2": "beedrill",
     
    type: 'normal",
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
        cardImg: '../../../assets/cards/2022-2023/inteleon-shady-dealings",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-quick-shooting",
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
        cardImg: '../../../assets/cards/2022-2023/beedrill",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sss-mustard",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cherens-care",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-search",
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
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm",
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
        cardImg: '../../../assets/cards/new-energy/grass-energy-brs",
        numImg: '../../../assets/06.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Dominik Malicki",
    "flag": "PL",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'psychic",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v",
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
        cardImg: '../../../assets/cards/2022-2023/oricorio",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/elesa-sparkle",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/peony",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rotom-phone",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tower-of-darkness",
        numImg: '../../../assets/04.png'
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
    "name": "Arne Van Braeckel",
    "flag": "BE",
    "sprite1": "arceus",
    "sprite2": "beedrill",
     
    type: 'normal",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/beedrill",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-vmax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zapdos-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/flygon-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sss-mustard",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
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
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pokegear",
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
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/grass-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    "name": "Luuk den Toom",
    "flag": "NL",
    "sprite1": "arceus",
    "sprite2": "inteleon",
     
    type: 'normal",
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
        cardImg: '../../../assets/cards/2022-2023/inteleon-shady-dealings",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-quick-shooting",
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
        cardImg: '../../../assets/cards/2022-2023/moltres",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-giovanni",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cherens-care",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/avery",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
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
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dark-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/water-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/capture-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Pedro Vicêncio",
    "flag": "PT",
    "sprite1": "arceus",
    "sprite2": "inteleon",
    list: '../../../assets/sprites/blank",
    type: '",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Daniel Lynch",
    "flag": "US",
    "sprite1": "blank",
    "sprite2": "whimsicott",
     
    type: 'psychic",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/whimsicott-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/whimsicott-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bibarel",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bidoof",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/avery",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/peony",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crushing-hammer",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fog-crystal",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fan-of-waves",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tool-scrapper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/exp-share",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Sai Fung Lau",
    "flag": "UK",
    "sprite1": "arceus",
    "sprite2": "urshifu-rapid-strike-gmax",
    list: '../../../assets/sprites/blank",
    type: '",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Gabriel Smart",
    "flag": "US",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'psychic",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v",
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
        cardImg: '../../../assets/cards/2022-2023/oricorio",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/elesa-sparkle",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
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
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rose-tower",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/01.png'
      },
            {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-brs",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fusion-strike-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Patrick Landis",
    "flag": "CH",
    "sprite1": "arceus",
    "sprite2": "urshifu-rapid-strike-gmax",
     
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
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/malamar-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/malamar-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/piers",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tower-of-waters",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-brs",
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/rapid-strike-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Sander Wojcik",
    "flag": "NL",
    "sprite1": "umbreon-vmax",
    "sprite2": "eldegoss",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/umbreon-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/umbreon-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/jolteon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/eevee",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/eldegoss-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/yveltal",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/starly",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/jirachi",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pyukumuku",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/flannery",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cheryl",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/peonia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roseannes-backup",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zinnia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bruno",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/moon-sun-badge",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/memory-capsule",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tower-of-darkness",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/shopping-center",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/single-strike-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Rasmus Moller",
    "flag": "DK",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'psychic",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v",
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
        cardImg: '../../../assets/cards/2022-2023/oricorio",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/elesa-sparkle",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rotom-phone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fog-crystal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rose-tower",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/02.png'
      },
            {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-brs",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fusion-strike-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Bryan de Vries",
    "flag": "NL",
    "sprite1": "urshifu-rapid-strike-gmax",
    "sprite2": "inteleon",
     
    type: 'fighting",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-shady-dealings",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-quick-shooting",
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
        cardImg: '../../../assets/cards/2022-2023/octillery",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/remoraid",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/medicham-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/moltres",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/hoopa",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/passimian-rs",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sonia",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/avery",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cynthias-ambition",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cheryl",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/peonia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
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
        cardImg: '../../../assets/cards/2022-2023/energy-search",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/telescopic-sight",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tower-of-waters",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-brs",
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/rapid-strike-energy",
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    "name": "Simon Obro",
    "flag": "DK",
    "sprite1": "arceus",
    "sprite2": "inteleon",
    list: '../../../assets/sprites/blank",
    type: '",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Lucian Hargreaves",
    "flag": "UK",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'psychic",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v",
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
        cardImg: '../../../assets/cards/2022-2023/oricorio",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/elesa-sparkle",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rotom-phone",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/02.png'
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
        cardImg: '../../../assets/cards/2022-2023/tower-of-darkness",
        numImg: '../../../assets/04.png'
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
    "name": "Jory Koot",
    "flag": "NL",
    "sprite1": "arceus",
    "sprite2": "inteleon",
     
    type: 'normal",
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
        cardImg: '../../../assets/cards/2022-2023/moltres",
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
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-giovanni",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cherens-care",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/avery",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dark-energy-brs",
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/energy/water-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/capture-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Goncalo Pereira",
    "flag": "PT",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'psychic",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v",
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
        cardImg: '../../../assets/cards/2022-2023/oricorio",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/elesa-sparkle",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
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
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tower-of-darkness",
        numImg: '../../../assets/04.png'
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
    "name": "Gino Pill",
    "flag": "NL",
    "sprite1": "suicune",
    "sprite2": "ludicolo",
     
    type: 'water",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/suicune-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-shady-dealings",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drizzile",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sobble",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ludicolo",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lotad",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/04.png'
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
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rare-candy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/capacious-bucket",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
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
        cardImg: '../../../assets/cards/2022-2023/cape-of-toughness",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-brs",
        numImg: '../../../assets/07.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Luke Doran",
    "flag": "UK",
    "sprite1": "arceus",
    "sprite2": "inteleon",
     
    type: 'normal",
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
        cardImg: '../../../assets/cards/2022-2023/inteleon-shady-dealings",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-quick-shooting",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drizzile",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sobble",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-giovanni",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cherens-care",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/water-energy-brs",
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/capture-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Steffen Eriksen",
    "flag": "DK",
    "sprite1": "umbreon-vmax",
    "sprite2": "eldegoss",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/umbreon-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/umbreon-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/jolteon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/eevee",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/eldegoss-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/yveltal",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/starly",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/jirachi",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pyukumuku",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/flannery",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cheryl",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/peonia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/roseannes-backup",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zinnia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bruno",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/moon-sun-badge",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/memory-capsule",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tower-of-darkness",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/shopping-center",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/single-strike-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Stephen Chan",
    "flag": "UK",
    "sprite1": "arceus",
    "sprite2": "malamar-vmax",
     
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
        cardImg: '../../../assets/cards/2022-2023/malamar-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/malamar-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-vmax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bibarel",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bidoof",
        numImg: '../../../assets/02.png'
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
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/adventurers-discovery",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rose",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/02.png'
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
        cardImg: '../../../assets/cards/2022-2023/big-charm",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-brs",
        numImg: '../../../assets/07.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Alec White",
    "flag": "UK",
    "sprite1": "arceus",
    "sprite2": "moltres-galar",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-shady-dealings",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-quick-shooting",
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
        cardImg: '../../../assets/cards/2022-2023/moltres",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/hoopa",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zapdos-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-giovanni",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/avery",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-search",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-switch",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tool-scrapper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cape-of-toughness",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dark-energy-brs",
        numImg: '../../../assets/06.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/water-energy-brs",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Seb Symonds",
    "flag": "UK",
    "sprite1": "malamar",
    "sprite2": "inteleon",
     
    type: 'psychic",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/malamar",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inkay",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-shady-dealings",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drizzile",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sobble",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/octillery",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/remoraid",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/skiploom",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/oranguru",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cynthias-ambition",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/brawly",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/korrinas-focus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fog-crystal",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rescue-carrier",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/turfield-stadium",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/spiral-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Julius Brunfeldt",
    "flag": "FI",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'psychic",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v",
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
        cardImg: '../../../assets/cards/2022-2023/oricorio",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/elesa-sparkle",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rotom-phone",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tower-of-darkness",
        numImg: '../../../assets/04.png'
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
    "name": "Tobias Smutkowski",
    "flag": "DE",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
    list: '../../../assets/sprites/blank",
    type: '",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Nico Alabas",
    "flag": "DE",
    "sprite1": "urshifu-rapid-strike-gmax",
    "sprite2": "inteleon",
     
    type: 'fighting",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-shady-dealings",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-quick-shooting",
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
        cardImg: '../../../assets/cards/2022-2023/octillery",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/remoraid",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/medicham-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/moltres",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/hoopa",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sonia",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/avery",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cynthias-ambition",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cheryl",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/peonia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
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
        cardImg: '../../../assets/cards/2022-2023/energy-search",
        numImg: '../../../assets/02.png'
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
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tower-of-waters",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-brs",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/rapid-strike-energy",
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    "name": "Rahul Reddy",
    "flag": "US",
    "sprite1": "urshifu-rapid-strike-gmax",
    "sprite2": "inteleon",
     
    type: 'fighting",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/moltres",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/hoopa",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/medicham-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-shady-dealings",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-quick-shooting",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drizzile",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sobble",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/passimian-rs",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cynthias-ambition",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cheryl",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/peonia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
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
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-brs",
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-brs",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/rapid-strike-energy",
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    "name": "Paul Shail",
    "flag": "UK",
    "sprite1": "arceus",
    "sprite2": "inteleon",
     
    type: 'normal",
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
        cardImg: '../../../assets/cards/2022-2023/inteleon-shady-dealings",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-quick-shooting",
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
        cardImg: '../../../assets/cards/2022-2023/moltres",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-giovanni",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cherens-care",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dark-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/water-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Piper Lepine",
    "flag": "US",
    "sprite1": "arceus",
    "sprite2": "malamar-vmax",
     
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
        cardImg: '../../../assets/cards/2022-2023/malamar-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/malamar-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/moltres-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/piers",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
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
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fan-of-waves",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-brs",
        numImg: '../../../assets/07.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Vinnie Schelfhaut",
    "flag": "BE",
    "sprite1": "arceus",
    "sprite2": "lycanroc-dusk",
     
    type: 'fighting",
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
        cardImg: '../../../assets/cards/2022-2023/lycanroc-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lycanroc-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-vmax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bibarel",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bidoof",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/avery",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
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
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fan-of-waves",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tool-scrapper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-brs",
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-brs",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Alex Wilson",
    "flag": "US",
    "sprite1": "arceus",
    "sprite2": "crobat-vmax",
     
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
        cardImg: '../../../assets/cards/2022-2023/crobat-vmax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bibarel",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bidoof",
        numImg: '../../../assets/02.png'
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
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cherens-care",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/avery",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/02.png'
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
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-brs",
        numImg: '../../../assets/06.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Travis Beckwith",
    "flag": "US",
    "sprite1": "arceus",
    "sprite2": "inteleon",
     
    type: 'normal",
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
        cardImg: '../../../assets/cards/2022-2023/inteleon-shady-dealings",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-quick-shooting",
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
        cardImg: '../../../assets/cards/2022-2023/moltres",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bibarel",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bidoof",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-giovanni",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cherens-care",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cynthias-ambition",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-retrieval",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tool-scrapper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dark-energy-brs",
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/energy/water-energy-brs",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/capture-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Tijn Wens",
    "flag": "NL",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'psychic",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v",
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
        cardImg: '../../../assets/cards/2022-2023/oricorio",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/elesa-sparkle",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
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
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rose-tower",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/01.png'
      },
            {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-brs",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fusion-strike-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Dan Coyne",
    "flag": "UK",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'psychic",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v",
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
        cardImg: '../../../assets/cards/2022-2023/oricorio",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/elesa-sparkle",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rotom-phone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switching-cups",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/echoing-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rose-tower",
        numImg: '../../../assets/03.png'
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
    "name": "André Chiasson",
    "flag": "CA",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'psychic",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v",
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
        cardImg: '../../../assets/cards/2022-2023/oricorio",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/elesa-sparkle",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rotom-phone",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rose-tower",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/old-cemetary",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-brs",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fusion-strike-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Francesco Caterino",
    "flag": "IT",
    "sprite1": "mew-vmax",
    "sprite2": "genesect",
     
    type: 'psychic",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v",
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
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/elesa-sparkle",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/02.png'
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
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tower-of-darkness",
        numImg: '../../../assets/04.png'
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
]

"seniors": [
  {
    "name": "Caleb Rogerson",
    "flag": "US",
    "sprite1": "urshifu-rapid-strike-gmax",
    "sprite2": "inteleon",
     
    type: 'fighting",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-vmax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/moltres-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/moltres",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/medicham-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-quick-shooting",
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2022-2023/hoopa",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tapu-koko",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rowlet",
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
        cardImg: '../../../assets/cards/2022-2023/bird-keeper",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cynthias-ambition",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-giovanni",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sonia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-search",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-retrieval",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-brs",
        numImg: '../../../assets/06.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-brs",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/rapid-strike-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Roberto Costanzo",
    "flag": "FR",
    "sprite1": "arceus",
    "sprite2": "inteleon",
     
    type: 'normal",
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
        cardImg: '../../../assets/cards/2022-2023/inteleon-shady-dealings",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-quick-shooting",
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
        cardImg: '../../../assets/cards/2022-2023/moltres",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-giovanni",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cherens-care",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dark-energy-brs",
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/energy/water-energy-brs",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/capture-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Simon Belanyi",
    "flag": "SK",
    "sprite1": "arceus",
    "sprite2": "urshifu-rapid-strike-gmax",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-vmax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bibarel",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bidoof",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-vmax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lumineon-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/moltres-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/avery",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
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
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-brs",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/rapid-strike-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Alexander Calder",
    "flag": "UK",
    "sprite1": "arceus",
    "sprite2": "whimsicott",
     
    type: 'psychic",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/whimsicott-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/whimsicott-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bibarel",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bidoof",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crushing-hammer",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fan-of-waves",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fog-crystal",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-brs",
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Fabio Battistella",
    "flag": "IT",
    "sprite1": "arceus",
    "sprite2": "crobat-vmax",
     
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
        cardImg: '../../../assets/cards/2022-2023/crobat-vmax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/hoopa-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/moltres",
        numImg: '../../../assets/01.png'
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
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cherens-care",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/judge",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-search",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Lorenzo Fulco",
    "flag": "IT",
    "sprite1": "arceus",
    "sprite2": "urshifu-rapid-strike-gmax",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-vmax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rs-urshifu-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-vmax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/hoopa-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bibarel",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bidoof",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/jolteon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/eevee",
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
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-giovanni",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/avery",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/memory-capsule",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-brs",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/rapid-strike-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Julio Rodríguez",
    "flag": "ES",
    "sprite1": "arceus",
    "sprite2": "inteleon",
     
    type: 'normal",
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
        cardImg: '../../../assets/cards/2022-2023/inteleon-shady-dealings",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drizzile",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sobble",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sobble-pound",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-giovanni",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cherens-care",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/water-energy-brs",
        numImg: '../../../assets/06.png'
      },
      {
        cardImg: '../../../assets/cards/energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Noah Brown",
    "flag": "UK",
    "sprite1": "arceus",
    "sprite2": "moltres-galar",
     
    type: '",
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
        cardImg: '../../../assets/cards/2022-2023/moltres",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-quick-shooting",
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cherens-care",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-giovanni",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-search",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-brs",
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-brs",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Tobias S",
    "flag": "NO",
    "sprite1": "blank",
    "sprite2": "hyphen",
    list: '../../../assets/sprites/blank",
    type: '",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Xander B",
    "flag": "UK",
    "sprite1": "blank",
    "sprite2": "hyphen",
    list: '../../../assets/sprites/blank",
    type: '",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Nicholas C",
    "flag": "UK",
    "sprite1": "blank",
    "sprite2": "hyphen",
    list: '../../../assets/sprites/blank",
    type: '",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Max B",
    "flag": "DK",
    "sprite1": "blank",
    "sprite2": "hyphen",
    list: '../../../assets/sprites/blank",
    type: '",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Daniel M",
    "flag": "CZ",
    "sprite1": "blank",
    "sprite2": "hyphen",
    list: '../../../assets/sprites/blank",
    type: '",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Patrik P",
    "flag": "SK",
    "sprite1": "blank",
    "sprite2": "hyphen",
    list: '../../../assets/sprites/blank",
    type: '",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Elias Azagra N",
    "flag": "NO",
    "sprite1": "blank",
    "sprite2": "hyphen",
    list: '../../../assets/sprites/blank",
    type: '",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Antoni Liszyk",
    "flag": "PL",
    "sprite1": "arceus",
    "sprite2": "lycanroc-dusk",
     
    type: '",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lycanroc-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/lycanroc-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-vmax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bibarel",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bidoof",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pumpkaboo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-giovanni",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rose",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/hyper-potion",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-brs",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
]

"juniors": [
  {
    "name": "Nathan Osterkatz",
    "flag": "US",
    "sprite1": "arceus",
    "sprite2": "inteleon",
     
    type: 'normal",
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
        cardImg: '../../../assets/cards/2022-2023/inteleon-quick-shooting",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-shady-dealings",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drizzile",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sobble",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cherens-care",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-giovanni",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/water-energy-brs",
        numImg: '../../../assets/06.png'
      },
      {
        cardImg: '../../../assets/cards/energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Luka Levain",
    "flag": "FR",
    "sprite1": "malamar",
    "sprite2": "inteleon",
     
    type: 'psychic",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/malamar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inkay",
        numImg: '../../../assets/04.png'
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
        cardImg: '../../../assets/cards/2022-2023/octillery",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/remoraid",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/korrinas-focus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/brawly",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cynthias-ambition",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-giovanni",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fog-crystal",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rescue-carrier",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tower-of-waters",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/spiral-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Nino Linnau",
    "flag": "AT",
    "sprite1": "arceus",
    "sprite2": "malamar-vmax",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-vstar",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/arceus-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/malamar-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/malamar-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-quick-shooting",
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2022-2023/ditto-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zapdos-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cherens-care",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/piers",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2022-2023/cape-of-toughness",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-brs",
        numImg: '../../../assets/06.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/double-turbo-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Kamil Bidzinski",
    "flag": "CA",
    "sprite1": "blank",
    "sprite2": "whimsicott",
     
    type: 'psychic",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/whimsicott-vstar",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/whimsicott-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bibarel",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bidoof",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-v",
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2022-2023/peony",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/avery",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crushing-hammer",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fog-crystal",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/fan-of-waves",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tool-scrapper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ordinary-rod",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/exp-share",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/air-balloon",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-brs",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Jan Jakubowski",
    "flag": "PL",
    "sprite1": "arceus",
    "sprite2": "inteleon",
     
    type: 'normal",
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
        cardImg: '../../../assets/cards/2022-2023/inteleon-shady-dealings",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-quick-shooting",
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
        cardImg: '../../../assets/cards/2022-2023/bibarel",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bidoof",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/crobat-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-giovanni",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cherens-care",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/water-energy-brs",
        numImg: '../../../assets/06.png'
      },
      {
        cardImg: '../../../assets/cards/energy/double-turbo-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Prince Williams",
    "flag": "US",
    "sprite1": "moltres-galar",
    "sprite2": "hoopa-unbound",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/moltres",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/hoopa",
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
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sobble",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zapdos-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sableye-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/castform-snowy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-cyrus",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/04.png'
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
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/energy-search",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
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
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-brs",
        numImg: '../../../assets/06.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-brs",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Alberto Zamuner",
    "flag": "IT",
    "sprite1": "mew",
    "sprite2": "genesect",
     
    type: 'psychic",
    deck: [
      {
        cardImg: '../../../assets/cards/2022-2023/mew-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/mew-v",
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
        cardImg: '../../../assets/cards/2022-2023/zapdos-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/latias",
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
        cardImg: '../../../assets/cards/2022-2023/klara",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/power-tablet",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/battle-vip-pass",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cram-o-matic",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rotom-phone",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/switch",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/training-court",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/rose-tower",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/old-cemetary",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-brs",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-brs",
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
    "name": "Mathias Lamotte",
    "flag": "FR",
    "sprite1": "arceus",
    "sprite2": "inteleon",
     
    type: 'normal",
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
        cardImg: '../../../assets/cards/2022-2023/inteleon-shady-dealings",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/inteleon-quick-shooting",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/drizzile",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/sobble",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/manaphy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/dunsparce",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/zigzagoon-galarian",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bosss-orders-giovanni",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cherens-care",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/professor-research-rowan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/melony",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/raihan",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/quick-ball-fus",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/level-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/evolution-incense",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/scoop-up-net",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/ultra-ball",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/tool-scrapper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/capacious-bucket",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/choice-belt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/path-to-the-peak",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/collapsed-stadium",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/water-energy-brs",
        numImg: '../../../assets/06.png'
      },
      {
        cardImg: '../../../assets/cards/energy/double-turbo-energy",
        numImg: '../../../assets/03.png'
      },
    ]
  },
  // {
  //   "name": "Emmett B",
  //   "flag": "US",
  //   "sprite1": "blank",
  //   "sprite2": "hyphen",
  //   list: '../../../assets/sprites/blank",
  //   type: '",
  //   deck: [
  //     {
  //       cardImg: '../../../assets/cards/2022-2023",
  //       numImg: '../../../assets/04.png'
  //     },
  //   ]
  // },
  // {
  //   "name": "Kingsley C",
  //   "flag": "AU",
  //   "sprite1": "blank",
  //   "sprite2": "hyphen",
  //   list: '../../../assets/sprites/blank",
  //   type: '",
  //   deck: [
  //     {
  //       cardImg: '../../../assets/cards/2022-2023",
  //       numImg: '../../../assets/04.png'
  //     },
  //   ]
  // },
  // {
  //   "name": "Vojtěch B",
  //   "flag": "CZ",
  //   "sprite1": "blank",
  //   "sprite2": "hyphen",
  //   list: '../../../assets/sprites/blank",
  //   type: '",
  //   deck: [
  //     {
  //       cardImg: '../../../assets/cards/2022-2023",
  //       numImg: '../../../assets/04.png'
  //     },
  //   ]
  // },
  // {
  //   "name": "Théo M",
  //   "flag": "ES",
  //   "sprite1": "blank",
  //   "sprite2": "hyphen",
  //   list: '../../../assets/sprites/blank",
  //   type: '",
  //   deck: [
  //     {
  //       cardImg: '../../../assets/cards/2022-2023",
  //       numImg: '../../../assets/04.png'
  //     },
  //   ]
  // },
  // {
  //   "name": "Polaris A",
  //   "flag": "US",
  //   "sprite1": "blank",
  //   "sprite2": "hyphen",
  //   list: '../../../assets/sprites/blank",
  //   type: '",
  //   deck: [
  //     {
  //       cardImg: '../../../assets/cards/2022-2023",
  //       numImg: '../../../assets/04.png'
  //     },
  //   ]
  // },
  // {
  //   "name": "Peter S",
  //   "flag": "UK",
  //   "sprite1": "blank",
  //   "sprite2": "hyphen",
  //   list: '../../../assets/sprites/blank",
  //   type: '",
  //   deck: [
  //     {
  //       cardImg: '../../../assets/cards/2022-2023",
  //       numImg: '../../../assets/04.png'
  //     },
  //   ]
  // },
  // {
  //   "name": "Thomas L",
  //   "flag": "UK",
  //   "sprite1": "blank",
  //   "sprite2": "hyphen",
  //   list: '../../../assets/sprites/blank",
  //   type: '",
  //   deck: [
  //     {
  //       cardImg: '../../../assets/cards/2022-2023",
  //       numImg: '../../../assets/04.png'
  //     },
  //   ]
  // },
  // {
  //   "name": "Misha S",
  //   "flag": "UK",
  //   "sprite1": "blank",
  //   "sprite2": "hyphen",
  //   list: '../../../assets/sprites/blank",
  //   type: '",
  //   deck: [
  //     {
  //       cardImg: '../../../assets/cards/2022-2023",
  //       numImg: '../../../assets/04.png'
  //     },
  //   ]
  // },
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
                    document.querySelector('.playerName').innerHTML = item."name" + " - 2022 EUIC";

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
                    document.querySelector('.playerName').innerHTML = item."name" + " - 2022 EUIC";

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
                    document.querySelector('.playerName').innerHTML = item."name" + " - 2022 EUIC";

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
