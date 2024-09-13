const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');
const extrasList2 = document.querySelector('.extras-ol');

const modalBottom = document.querySelector('.modal-bottom');

"masters": [
  {
    "name": "Hampus Eriksson",
    "flag": "SE",
    "sprite1": "altaria",
    "sprite2": "munchlax",
     
    type: 'fighting",
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/altaria",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/swablu",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/munchlax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/absol",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/aipom",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bunnelby",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/giratina",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mew-bench-barrier",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/zacian-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/cynthia-caitlin",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bird-keeper",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/lt-surge",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/bills-analysis",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/bruno",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/will",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/lillies-poke-doll",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/crushing-hammer-swsh",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/poke-communication",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/scoop-up-net",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/tool-scrapper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/yell-horn",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/camping-gear",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/ordinary-rod",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/reset-stamp",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/galar-mine",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/wondrous-lab",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/powerful-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/twin-energy",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/recycle-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Leonardo Martins",
    "flag": "PT",
    "sprite1": "mewtwo-mew-tagteam",
    "sprite2": "rillaboom",
     
    type: 'fighting",
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/mewtwo-mew-tagteam",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/rillaboom",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/thwachy-taunt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/grookey",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/rowlett-exeggcutor-gx",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/pheromosa-buzzwole-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/vileplume-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/dargonite-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/incineroar-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/eldegoss-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/oranguru-primate-wisdom",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/guzma-hala",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mallow-lana",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/cynthia-caitlin",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/tag-call",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/cherish-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/ordinary-rod",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/chaotic-swell",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/wondrous-lab",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-grass-energy.jpg",
        numImg: '../../../assets/10.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/weakness-gaurd-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Pascal Lohrer",
    "flag": "DE",
    "sprite1": "mewtwo-mew-tagteam",
    "sprite2": "rillaboom",
     
    type: 'fighting",
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/mewtwo-mew-tagteam",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/rillaboom",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/thwackey-ability",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/grookey-fury-swipes",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/rowlett-exeggcutor-gx",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/pheromosa-buzzwole-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/vileplume-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/dargonite-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/incineroar-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/kricketune-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/eldegoss-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/guzma-hala",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/cynthia-caitlin",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mallow-lana",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/tag-call",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/cherish-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/ordinary-rod",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/chaotic-swell",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/wondrous-lab",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-grass-energy.jpg",
        numImg: '../../../assets/09.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/weakness-gaurd-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Pedro Eugenio Torres",
    "flag": "ES",
    "sprite1": "urshifu-rapid-strike-gmax",
    "sprite2": "cinccino",
     
    type: 'fighting",
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/rs-urshifu-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/rs-urshifu-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/cinccino",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/minccino",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/snorlax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/jirachi-stellar-wish",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/farfetchd",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/zigzagoon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mewtwo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mew-bench-barrier",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/mimikyu-shadow-box",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bird-keeper",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/cheryl",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/phoebe",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/poke-communication",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/level-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/reset-stamp",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/ordinary-rod",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-swsh",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/rapid-strike-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/03.png'
      },
    ]
  },
]

"seniors": [
  {
    "name": "Angel Aranibar Huamaní",
    "flag": "PE",
    "sprite1": "pikachu-zekrom-tagteam",
    "sprite2": "mewtwo-mew-tagteam",
     
    type: 'fighting",
    deck: [
      {
        cardImg: '../../../assets/cards/2019-2020/pikachu-zekrom-gx",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/boltund-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mewtwo-mew-tagteam",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/raichu-alolan-raichu",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/crobat-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/eldegoss-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/tapu-koko-prism",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/crushing-hammer-swsh",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/switch",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/cherish-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/reset-stamp",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/electromagnetic-radar",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/tag-switch",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/big-charm",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/chaotic-swell",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/lightning-energy-swsh",
        numImg: '../../../assets/10.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/speed-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Bruno Sermann",
    "flag": "BR",
    "sprite1": "polteageist",
    "sprite2": "bunnelby",
     
    type: 'fighting",
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/polteageist-mad-party",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/sinistea-furtuve-drop",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bunnelby-mad-party",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mr-rime-mad-party",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-mad-party",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/crobat-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mew-bench-barrier",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/giovannis-exile",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/great-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/great-catcher",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/poke-communication",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/ordinary-rod",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/uturn-board",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/chaotic-swell",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/twin-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/triple-acceleration",
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    "name": "Dalton Acchetta",
    "flag": "BR",
    "sprite1": "blank",
    "sprite2": "eternatus-eternamax",
     
    type: 'fighting",
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/eternatus-vmax",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/eternatus-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/crobat-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/zigzagoon",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/spiritomb",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/yveltal",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/phoebe",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/great-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/crushing-hammer-swsh",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/poke-communication",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/switch",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/tool-jammer",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-swsh",
        numImg: '../../../assets/08.png'
      },
      {
        cardImg: '../../../assets/cards/energy/weakness-gaurd-energy",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "João Pedro Medeiros Zambrano",
    "flag": "BR",
    "sprite1": "pikachu-zekrom-tagteam",
    "sprite2": "mewtwo-mew-tagteam",
     
    type: 'fighting",
    deck: [
      {
        cardImg: '../../../assets/cards/2019-2020/pikachu-zekrom-gx",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/boltund-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mewtwo-mew-tagteam",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/raichu-alolan-raichu",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/crobat-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/eldegoss-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/tapu-koko-prism",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/team-yell-grunt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/crushing-hammer-swsh",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/switch",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/cherish-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/reset-stamp",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/chaotic-swell",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/lightning-energy-swsh",
        numImg: '../../../assets/10.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/speed-energy",
        numImg: '../../../assets/03.png'
      },
    ]
  },
]

"juniors": [
  {
    "name": "Aaron Friedman",
    "flag": "US",
    "sprite2": "../../../assets/sprites/urshifu-rapid-strike-gmax.png",
    "sprite1": "blank",
     
    type: 'fighting",
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/rs-urshifu-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/rs-urshifu-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/jirachi-stellar-wish",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/crobat-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/jirachi-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/zigzagoon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mewtwo",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mew-bench-barrier",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/mimikyu-shadow-box",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/phoebe",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/poke-communication",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/scoop-up-net",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/switch",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/great-catcher",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/martial-arts-dojo",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-swsh",
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/rapid-strike-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Alex Schemanske",
    "flag": "US",
    "sprite1": "polteageist",
    "sprite2": "bunnelby",
     
    type: 'fighting",
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/polteageist-mad-party",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/sinistea-furtuve-drop",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bunnelby-mad-party",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mr-rime-mad-party",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-mad-party",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/crobat-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mew-bench-barrier",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/giovannis-exile",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/great-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/great-catcher",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/evolution-incense",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/pal-pad",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/ordinary-rod",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/uturn-board",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/chaotic-swell",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/twin-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/triple-acceleration",
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    "name": "Dan Hugar",
    "flag": "US",
    "sprite1": "pikachu-zekrom-tagteam",
    "sprite2": "mewtwo-mew-tagteam",
     
    type: 'fighting",
    deck: [
      {
        cardImg: '../../../assets/cards/2019-2020/pikachu-zekrom-gx",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/boltund-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mewtwo-mew-tagteam",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/raichu-alolan-raichu",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/crobat-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/eldegoss-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/tapu-koko-prism",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/team-yell-grunt",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/crushing-hammer-swsh",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/switch",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/cherish-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/reset-stamp",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/tag-switch",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/big-charm",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/stealthy-hood",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/chaotic-swell",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/lightning-energy-swsh",
        numImg: '../../../assets/10.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/speed-energy",
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    "name": "Isaac Troan",
    "flag": "US",
    "sprite1": "blank",
    "sprite2": "mewtwo-mew-tagteam",
     
    type: 'fighting",
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/mewtwo-mew-tagteam",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/jirachi-gx",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/giratina-garchomp-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/gengar-and-mimikyu-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/reshiram-charizard-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/trevenant-dusknoir-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/greninja-gx-detective-pikachu",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/vileplume-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/incineroar-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/latios-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/crobat-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/eldegoss-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/guzma-hala",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mallow-lana",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/cherish-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/switch",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/tag-call",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/reset-stamp",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/stealthy-hood",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/chaotic-swell",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-swsh",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/horror-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
]

let extras = [
  {
    "name": "Christian Hasbani",
    "flag": "AU",
    "sprite1": "pikachu-zekrom-tagteam",
    "sprite2": "mewtwo-mew-tagteam",
     
    type: 'fighting",
    deck: [
      {
        cardImg: '../../../assets/cards/2019-2020/pikachu-zekrom-gx",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/boltund-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mewtwo-mew-tagteam",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/raichu-alolan-raichu",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/crobat-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/eldegoss-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/tapu-koko-prism",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/crushing-hammer-swsh",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/switch",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/cherish-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/reset-stamp",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/chaotic-swell",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/lightning-energy-swsh",
        numImg: '../../../assets/10.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/speed-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Peter Lo",
    "flag": "AU",
    "sprite1": "mewtwo-mew-tagteam",
    "sprite2": "rillaboom",
     
    type: 'fighting",
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/mewtwo-mew-tagteam",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/rillaboom",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/thwackey-ability",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/grookey",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/rowlett-exeggcutor-gx",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/pheromosa-buzzwole-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/vileplume-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/dargonite-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/incineroar-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/kricketune-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/eldegoss-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/guzma-hala",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mallow-lana",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/cynthia-caitlin",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/tag-call",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/cherish-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/ordinary-rod",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/chaotic-swell",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/wondrous-lab",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/scvi-grass-energy.jpg",
        numImg: '../../../assets/09.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/capture-energy",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/weakness-gaurd-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    "name": "Ting Chan",
    "flag": "AU",
    "sprite1": "adp",
    "sprite2": "zacian-crowned",
     
    type: 'fighting",
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/adp-gx",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/zacian-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/mawile-gx",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/crobat-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/eldegoss-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mew-bench-barrier",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/cherish-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/metal-saucer",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/switch",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/energy-switch-ssh",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/energy-spinner",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/great-catcher",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/rusted-sword",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/chaotic-swell",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/metal-energy-swsh",
        numImg: '../../../assets/08.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-swsh",
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    "name": "Zyad Afiza",
    "flag": "AU",
    "sprite1": "mewtwo-mew-tagteam",
    "sprite2": "urshifu-rapid-strike-gmax",
     
    type: 'fighting",
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/mewtwo-mew-tagteam",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/rs-urshifu-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/rs-urshifu-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/giratina-garchomp-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/gengar-mimikyu-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/reshiram-charizard-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/trevenant-dusknoir-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/greninja-gx-detective-pikachu",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/vileplume-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/latios-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/jirachi-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/eldegoss-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/crobat-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/guzma-hala",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mallow-lana",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/switch",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/cherish-ball",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/tag-call",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/lanas-fishing-rod",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/poke-communication",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2022-2023/big-charm",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019-2020/stealthy-hood",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/chaotic-swell",
        numImg: '../../../assets/02.png'
      },
            {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-swsh",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/aurora-energy",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/horror-energy",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/rapid-strike-energy",
        numImg: '../../../assets/03.png'
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
                    document.querySelector('.playerName').innerHTML = item."name" + " - Players Cup IV";

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
                    document.querySelector('.playerName').innerHTML = item."name" + " - Players Cup IV";

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
                    document.querySelector('.playerName').innerHTML = item."name" + " - Players Cup IV";

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

// extras
function displayList4(array = []) {
  extrasList2.innerHTML = '';

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
                    document.querySelector('.playerName').innerHTML = item."name" + " - Players Cup IV";

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
    extrasList2.appendChild(item_element);
  }
}

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);
displayList2(seniors);
displayList3(juniors);
displayList4(extras);
