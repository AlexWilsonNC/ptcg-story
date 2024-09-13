const masterList = document.querySelector('.masters-ol');
const bossList = document.querySelector('.boss-ol');

const modalBottom = document.querySelector('.modal-bottom');

"masters": [
  {
    "name": "Alex Schemanske",
    "flag": "US",
    "sprite1": "urshifu-rapid-strike-gmax",
    "sprite2": "inteleon",
     
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
        cardImg: '../../../assets/cards/2021-2022/inteleon-quick-shooting",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/inteleon-shady-dealings",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/drizzile",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/sobble",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/jirachi-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/passimian-rs",
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
        cardImg: '../../../assets/cards/2021-2022/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/evolution-incense",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/poke-communication",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/reset-stamp",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/switch",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/tool-scrapper",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/karate-belt",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/tower-of-waters",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-swsh",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/rapid-strike-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Azul Griego",
    "flag": "US",
    "sprite1": "calyrex-shadow-rider",
    "sprite2": "alcremie-vmax",
     
    type: 'psychic",
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/calyrex-vmax-shadow-rider",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/calyrex-v-shadow-rider",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/alcramie-vmax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/alcramie-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marshadow-resetting-hole",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marshadow-attack",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mewtwo-mew-tagteam",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/gengar-and-mimikyu-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/trevenant-and-dusknoir-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/crobat-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/fog-crystal",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/evolution-incense",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/poke-communication",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/switch",
        numImg: '../../../assets/02.png'
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
        cardImg: '../../../assets/cards/2021-2022/air-balloon",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/path-to-the-peak",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-swsh",
        numImg: '../../../assets/13.png'
      },
    ]
  },
  {
    "name": "Natalie Millar",
    "flag": "AU",
    "sprite1": "urshifu-rapid-strike-gmax",
    "sprite2": "moltres-galar",
     
    type: 'fighting",
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/rs-urshifu-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/rs-urshifu-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/inteleon-quick-shooting",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/inteleon-shady-dealings",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/drizzile",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/sobble",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/galarian-moltres-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/cobalion-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia",
        numImg: '../../../assets/04.png'
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
        cardImg: '../../../assets/cards/2021-2022/quick-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/level-ball",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/evolution-incense",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/poke-communication",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/energy-spinner",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/escape-rope",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/viridian-forest",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-swsh",
        numImg: '../../../assets/06.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-swsh",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/rapid-strike-energy",
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    "name": "Diego Cassiraga",
    "flag": "AR",
    "sprite1": "calyrex-shadow-rider",
    "sprite2": "alcremie-vmax",
     
    type: 'psychic",
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/calyrex-vmax-shadow-rider",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/calyrex-v-shadow-rider",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/alcramie-vmax",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/alcramie-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marshadow-resetting-hole",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/gengar-and-mimikyu-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/solgaleo-lunala-tagteam",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/fog-crystal",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/evolution-incense",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/switch",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/ordinary-rod",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/reset-stamp",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/path-to-the-peak",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-swsh",
        numImg: '../../../assets/13.png'
      },
    ]
  },
  {
    "name": "Henry Brand",
    "flag": "AU",
    "sprite1": "calyrex-ice-rider",
    "sprite2": "inteleon",
     
    type: 'water",
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/calyrex-vmax-ice-rider",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/ice-rider-calyrex-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/inteleon-quick-shooting",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/inteleon-shady-dealings",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/drizzile",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/sobble",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/articuno",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/cobalion-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mew-bench-barrier",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/melony",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/capacious-bucket",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/ordinary-rod",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/poke-communication",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/scoop-up-net",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-swsh",
        numImg: '../../../assets/07.png'
      },
    ]
  },
  {
    "name": "Zach Lesage",
    "flag": "CA",
    "sprite1": "calyrex-ice-rider",
    "sprite2": "inteleon",
     
    type: 'water",
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/calyrex-vmax-ice-rider",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/ice-rider-calyrex-v",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/inteleon-shady-dealings",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/drizzile",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/sobble",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/melony",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/leon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/evolution-incense",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/level-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/capacious-bucket",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/great-catcher",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/reset-stamp",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/scoop-up-net",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/path-to-the-peak",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-swsh",
        numImg: '../../../assets/08.png'
      },
    ]
  },
  {
    "name": "Gustavo Wada",
    "flag": "BR",
    "sprite1": "victini-vmax",
    "sprite2": "moltres-galar",
     
    type: 'fire",
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/victini-vmax",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/victini-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/galarian-moltres-v",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/crobat-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/ditto-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/galarian-zapdos-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/eldegoss-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marshadow-resetting-hole",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/welder",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/poke-communication",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/energy-switch-ssh",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/escape-rope",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/reset-stamp",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/viridian-forest",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fire-energy-swsh",
        numImg: '../../../assets/07.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-swsh",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-swsh",
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    "name": "Robin Schulz",
    "flag": "DE",
    "sprite1": "mewtwo-mew-tagteam",
    "sprite2": "weavile",
     
    type: 'dark",
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/mewtwo-mew-tagteam",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/weavile-gx",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/sneasel-water",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/galarian-moltres-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/silvally-gx",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/type-null",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/umbreon-darkrai-tagteam",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/greninja-zoroark-tagteam",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/sableye-tyranitar-tagteam",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mew-bench-barrier",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/red-blue",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mallow-lana",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/guzma-hala",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/poke-communication",
        numImg: '../../../assets/04.png'
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
        cardImg: '../../../assets/cards/2021-2022/great-catcher",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/viridian-forest",
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-swsh",
        numImg: '../../../assets/10.png'
      },
      {
        cardImg: '../../../assets/cards/energy/capture-energy",
        numImg: '../../../assets/01.png'
      },
    ]
  },
]

let boss = [
  {
    "name": "Tsuguyoshi Yamato",
    "flag": "JP",
    "sprite1": "calyrex-shadow-rider",
    "sprite2": "alcremie-vmax",
     
    type: 'psychic",
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/calyrex-vmax-shadow-rider",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/calyrex-v-shadow-rider",
        numImg: '../../../assets/04.png'
      },
      {
        card"name": "Alcramie VMAX",
        cardImg: '../../../assets/cards/2021-2022/alcramie-vmax",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/alcramie-v",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marshadow-resetting-hole",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/gengar-and-mimikyu-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/trevenant-and-dusknoir-gx",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/crobat-v",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx",
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
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/erikas-hospitality",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/fog-crystal",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball",
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/evolution-incense",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/switch",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/poke-communication",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/ordinary-rod",
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/path-to-the-peak",
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-swsh",
        numImg: '../../../assets/13.png'
      },
    ]
  }
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
        document.querySelector('.playerName').innerHTML = item."name" + " - PC Invitational";

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

// boss
function displayList2(array = []) {
  bossList.innerHTML = '';

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
                  document.querySelector('.playerName').innerHTML = item."name" + " - PC Invitational";
      
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
      }
    })
  }

  bossList.appendChild(item_element);
}
}

const modal = document.querySelector('.modal');
const switcher = document.querySelector('.modal-switcher');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);
displayList2(boss);