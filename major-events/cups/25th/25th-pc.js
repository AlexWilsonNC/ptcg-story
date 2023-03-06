const masterList = document.querySelector('.masters-ol');
const bossList = document.querySelector('.boss-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Alex Schemanske',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/urshifu-rapid-strike-gmax.png',
    sprite2: '../../../assets/sprites/inteleon.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/rs-urshifu-vmax.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/rs-urshifu-v.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/inteleon-quick-shooting.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/inteleon-shady-dealings.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/drizzile.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/sobble.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/jirachi-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/passimian-rs.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mew-bench-barrier.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/level-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/evolution-incense.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/poke-communication.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/reset-stamp.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/switch.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/escape-rope.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/tool-scrapper.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/karate-belt.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/tower-of-waters.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-swsh.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/rapid-strike-energy.png',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Azul Griego',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/calyrex-shadow-rider.png',
    sprite2: '../../../assets/sprites/alcremie-vmax.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/calyrex-vmax-shadow-rider.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/calyrex-v-shadow-rider.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/alcramie-vmax.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/alcramie-v.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marshadow-resetting-hole.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marshadow-attack.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mewtwo-mew-tagteam.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/gengar-and-mimikyu-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/trevenant-and-dusknoir-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/crobat-v.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/fog-crystal.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/evolution-incense.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/poke-communication.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/switch.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/ordinary-rod.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/reset-stamp.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/path-to-the-peak.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-swsh.png',
        numImg: '../../../assets/13.png'
      },
    ]
  },
  {
    firstName: 'Natalie Millar',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/urshifu-rapid-strike-gmax.png',
    sprite2: '../../../assets/sprites/moltres-galar.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/rs-urshifu-vmax.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/rs-urshifu-v.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/inteleon-quick-shooting.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/inteleon-shady-dealings.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/drizzile.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/sobble.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/galarian-moltres-v.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/cobalion-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/level-ball.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/evolution-incense.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/poke-communication.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/energy-spinner.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/escape-rope.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/viridian-forest.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-swsh.png',
        numImg: '../../../assets/06.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-swsh.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/rapid-strike-energy.png',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Diego Cassiraga',
    flag: '../../../assets/flags/argentina.png',
    sprite1: '../../../assets/sprites/calyrex-shadow-rider.png',
    sprite2: '../../../assets/sprites/alcremie-vmax.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/calyrex-vmax-shadow-rider.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/calyrex-v-shadow-rider.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/alcramie-vmax.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/alcramie-v.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marshadow-resetting-hole.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/gengar-and-mimikyu-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/solgaleo-lunala-tagteam.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/fog-crystal.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/evolution-incense.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/switch.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/ordinary-rod.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/reset-stamp.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/path-to-the-peak.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-swsh.png',
        numImg: '../../../assets/13.png'
      },
    ]
  },
  {
    firstName: 'Henry Brand',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/calyrex-ice-rider.png',
    sprite2: '../../../assets/sprites/inteleon.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/calyrex-vmax-ice-rider.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/ice-rider-calyrex-v.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/inteleon-quick-shooting.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/inteleon-shady-dealings.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/drizzile.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/sobble.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/articuno.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/cobalion-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mew-bench-barrier.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/melony.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/evolution-incense.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/level-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/capacious-bucket.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/ordinary-rod.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/poke-communication.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/scoop-up-net.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-swsh.png',
        numImg: '../../../assets/07.png'
      },
    ]
  },
  {
    firstName: 'Zach Lesage',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/calyrex-ice-rider.png',
    sprite2: '../../../assets/sprites/inteleon.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/calyrex-vmax-ice-rider.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/ice-rider-calyrex-v.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/inteleon-shady-dealings.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/drizzile.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/sobble.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/melony.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/leon.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/evolution-incense.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/level-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/capacious-bucket.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/great-catcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/reset-stamp.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/scoop-up-net.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/path-to-the-peak.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/water-energy-swsh.png',
        numImg: '../../../assets/08.png'
      },
    ]
  },
  {
    firstName: 'Gustavo Wada',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/victini-vmax.png',
    sprite2: '../../../assets/sprites/moltres-galar.png',
    list: '../../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/victini-vmax.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/victini-v.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/galarian-moltres-v.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/crobat-v.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/ditto-v.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/galarian-zapdos-v.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/eldegoss-v.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marshadow-resetting-hole.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/welder.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/poke-communication.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/energy-switch-ssh.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/escape-rope.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/reset-stamp.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/viridian-forest.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fire-energy-swsh.png',
        numImg: '../../../assets/07.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-swsh.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/fighting-energy-swsh.png',
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Robin Schulz',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/mewtwo-mew-tagteam.png',
    sprite2: '../../../assets/sprites/weavile.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/mewtwo-mew-tagteam.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/weavile-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/sneasel-water.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/galarian-moltres-v.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/silvally-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/type-null.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/umbreon-darkrai-tagteam.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/greninja-zoroark-tagteam.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/sableye-tyranitar-tagteam.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mew-bench-barrier.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/red-blue.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/mallow-lana.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/guzma-hala.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/poke-communication.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/tag-call.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/great-catcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/viridian-forest.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/dark-energy-swsh.png',
        numImg: '../../../assets/10.png'
      },
      {
        cardImg: '../../../assets/cards/energy/capture-energy.png',
        numImg: '../../../assets/01.png'
      },
    ]
  },
]

let boss = [
  {
    firstName: 'Tsuguyoshi Yamato',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/calyrex-shadow-rider.png',
    sprite2: '../../../assets/sprites/alcremie-vmax.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2021-2022/calyrex-vmax-shadow-rider.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/calyrex-v-shadow-rider.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/alcramie-vmax.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/alcramie-v.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marshadow-resetting-hole.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/gengar-and-mimikyu-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/trevenant-and-dusknoir-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/crobat-v.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/dedenne-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/professors-research-magnolia.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/bosss-orders.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/marnie.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/erikas-hospitality.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/fog-crystal.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/quick-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/evolution-incense.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/switch.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/poke-communication.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/ordinary-rod.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/air-balloon.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2021-2022/path-to-the-peak.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/new-energy/psychic-energy-swsh.png',
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
    flagImg.setAttribute('src', item.flag);
    
    let deck = document.createElement('div');
    deck.classList.add('player-deck-icons');

    let firstSprite = document.createElement('img');
    firstSprite.classList.add('sprite');
    firstSprite.setAttribute('src', item.sprite1);
    let secondSprite = document.createElement('img');
    secondSprite.classList.add('sprite');
    secondSprite.classList.add('second-sprite');
    secondSprite.setAttribute('src', item.sprite2);
    let listIcon = document.createElement('img');
    listIcon.classList.add('list-icon');
    listIcon.setAttribute('src', item.list);
    
    item_element.appendChild(title);
    title.appendChild(playerName);
    playerName.appendChild(flagImg);
    playerName.append(item.firstName);
    title.appendChild(deck);
    deck.appendChild(firstSprite);
    deck.appendChild(secondSprite);
    deck.appendChild(listIcon);

    if (item.list === '../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
        document.querySelector('.playerName').innerHTML = item.firstName + " - PC Invitational";

        if (item.type == 'psychic') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/psychic-bg.png)";
        } else if (item.type == 'fire') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fire-bg.png)";
        } else if (item.type == 'fairy') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fairy-bg.png)";
        } else if (item.type == 'normal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/normal-bg.png)";
        } else if (item.type == '') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/-bg.png)";
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
          pokeCard.setAttribute('src', deck.cardImg);

          let numberCounter = document.createElement('img');
          numberCounter.classList.add('num-1')
          numberCounter.setAttribute('src', deck.numImg);

          cardSpace.appendChild(pokeCard);
          cardSpace.appendChild(numberCounter);
          modalBottom.appendChild(cardSpace);

          modalX.addEventListener('click', () => {
            modal.style.display = 'none';
            behind.style.display = 'none';
            cardSpace.remove();
          })
          behind.addEventListener('click', () => {
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
  flagImg.setAttribute('src', item.flag);
  
  let deck = document.createElement('div');
  deck.classList.add('player-deck-icons');

  let firstSprite = document.createElement('img');
  firstSprite.classList.add('sprite');
  firstSprite.setAttribute('src', item.sprite1);
  let secondSprite = document.createElement('img');
  secondSprite.classList.add('sprite');
  secondSprite.classList.add('second-sprite');
  secondSprite.setAttribute('src', item.sprite2);
  let listIcon = document.createElement('img');
  listIcon.classList.add('list-icon');
  listIcon.setAttribute('src', item.list);
  
  item_element.appendChild(title);
  title.appendChild(playerName);
  playerName.appendChild(flagImg);
  playerName.append(item.firstName);
  title.appendChild(deck);
  deck.appendChild(firstSprite);
  deck.appendChild(secondSprite);
  deck.appendChild(listIcon);

  if (item.list === '../../../assets/list-icon.png') {
    
    item_element.addEventListener('click', function () {

      document.querySelector('#modal-section').style.display = "flex";
      document.querySelector('.modal').style.display = 'block';
      document.querySelector('.behind-modal').style.display = 'block';
                  document.querySelector('.playerName').innerHTML = item.firstName + " - 2014 Worlds";

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
        pokeCard.setAttribute('src', deck.cardImg);

        let numberCounter = document.createElement('img');
        numberCounter.classList.add('num-1')
        numberCounter.setAttribute('src', deck.numImg);

        cardSpace.appendChild(pokeCard);
        cardSpace.appendChild(numberCounter);
        modalBottom.appendChild(cardSpace);

        modalX.addEventListener('click', () => {
          modal.style.display = 'none';
          behind.style.display = 'none';
          cardSpace.remove();
        })
        behind.addEventListener('click', () => {
          modal.style.display = 'none';
          behind.style.display = 'none';
          cardSpace.remove();
        })
      }
    })
  }

  bossList.appendChild(item_element);
}
}

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);
displayList2(boss);