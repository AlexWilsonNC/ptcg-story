const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Ondřej Škubal',
    flag: '../../assets/flags/czech-republic.png',
    record: '10-0-2',
    sprite1: '../../assets/sprites/arceus.png',
    sprite2: '../../assets/sprites/pikachu-gmax.png',  
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-vmax.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-v.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/hisuian-decidueye-vstar.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/hisuian-desidueye-v.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Daichi Shimada',
    flag: '../../assets/flags/japan.png',
    record: '10-1-1',
    sprite1: '../../assets/sprites/arceus.png',
    sprite2: '../../assets/sprites/pikachu-gmax.png',  
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-vmax.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-v.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/hisuian-decidueye-vstar.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/hisuian-desidueye-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/moltres-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/jolteon.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/eevee.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/eevee-ability.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/memory-capsule.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Ryota Ishiyama',
    flag: '../../assets/flags/japan.png',
    record: '9-2-0',
    sprite1: '../../assets/sprites/arceus.png',
    sprite2: '../../assets/sprites/pikachu-gmax.png',  
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-vmax.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-v.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/hisuian-decidueye-vstar.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/hisuian-desidueye-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/moltres-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/jolteon.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/eevee.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/memory-capsule.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'James Cox',
    flag: '../../assets/flags/australia.png',
    record: '8-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/inteleon.png',  
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/crabonminal-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        numImg: '../../assets/07.png'
      },
    ]
  },
  {
    firstName: 'Andrew Estrada',
    flag: '../../assets/flags/canada.png',
    record: '7-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/inteleon.png',  
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/leon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        numImg: '../../assets/07.png'
      },
    ]
  },
  {
    firstName: 'André Chiasson',
    flag: '../../assets/flags/canada.png',
    record: '7-2-1',
    sprite1: '../../assets/sprites/mew-vmax.png',
    sprite2: '../../assets/sprites/genesect.png',  
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rotom-phone.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rose-tower.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/fusion-strike-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        numImg: '../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Kaiwen Cabbabe',
    flag: '../../assets/flags/australia.png',
    record: '7-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/inteleon.png',  
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/crabonminal-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        numImg: '../../assets/07.png'
      },
    ]
  },
  {
    firstName: 'Otavio Gouveia',
    flag: '../../assets/flags/brazil.png',
    record: '7-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/inteleon.png',  
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/canceling-cologne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        numImg: '../../assets/07.png'
      },
    ]
  },
  {
    firstName: 'Calvin Connor',
    flag: '../../assets/flags/usa.png',
    record: '6-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/inteleon.png',  
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/leon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        numImg: '../../assets/07.png'
      },
    ]
  },
  {
    firstName: 'Toyoaki Fujita',
    flag: '../../assets/flags/japan.png',
    record: '6-2-0',
    sprite1: '../../assets/sprites/mew.png',
    sprite2: '../../assets/sprites/genesect.png',  
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cyllene.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokemon-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rotom-phone.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rose-tower.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/old-cemetary.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/fusion-strike-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/horror-energy.png',
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Grant Manley',
    flag: '../../assets/flags/usa.png',
    record: '6-2-0',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/calyrex-ice-rider.png',  
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/ice-rider-calyrex-vmax.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ice-rider-calyrex-v.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/empoleon-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pyukumuku.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/canceling-cologne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-scrapper.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        numImg: '../../assets/08.png'
      },
    ]
  },
  {
    firstName: 'Lucas Calzà',
    flag: '../../assets/flags/italy.png',
    record: '6-2-0',
    sprite1: '../../assets/sprites/arceus.png',
    sprite2: '../../assets/sprites/inteleon.png',  
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/dyna-tree-hill.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        numImg: '../../assets/06.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Adam Hawkins',
    flag: '../../assets/flags/uk.png',
    record: '6-2-0',
    sprite1: '../../assets/sprites/arceus.png',
    sprite2: '../../assets/sprites/aggron-vmax.png',  
    list: '../../assets/list-icon.png',
    type: 'metal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/aggron-vmax.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/aggron-v.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-brs.png',
        numImg: '../../assets/08.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Miloslav Poslední',
    flag: '../../assets/flags/czech-republic.png',
    record: '5-1-2',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/jolteon.png',  
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/jolteon.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/eevee.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/starmie-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/empoleon-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/memory-capsule.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/shopping-center.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        numImg: '../../assets/07.png'
      },
    ]
  },
  {
    firstName: 'Ross Cawthon',
    flag: '../../assets/flags/usa.png',
    record: '5-1-2',
    sprite1: '../../assets/sprites/charizard-shiny.png',
    sprite2: '../../assets/sprites/inteleon.png',  
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rescue-carrier.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-go.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-scrapper.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/magma-basin.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/fire-energy-brs.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/twin-energy.png',
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Isaiah Bradner',
    flag: '../../assets/flags/usa.png',
    record: '5-1-2',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/inteleon.png',  
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/canceling-cologne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        numImg: '../../assets/07.png'
      },
    ]
  },
  {
    firstName: 'Pablo Meza',
    flag: '../../assets/flags/mexico.png',
    record: '5-1-2',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/regigigas.png',  
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/regigigas.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/regidrago.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/regieliki-evs.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/regirock.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/regice.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/registeel.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cynthias-ambition.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-loto.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/aurora-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/speed-energy.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/twin-energy.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Cristian Sarnataro',
    flag: '../../assets/flags/italy.png',
    record: '5-1-2',
    sprite1: '../../assets/sprites/palkia-origin.png',  
    sprite2: '../../assets/sprites/inteleon.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Haru Nishikawa',
    flag: '../../assets/flags/japan.png',
    record: '5-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',  
    sprite2: '../../assets/sprites/inteleon.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-go.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        numImg: '../../assets/06.png'
      },
      {
        cardImg: '../../assets/cards/energy/capture-energy.png',
        numImg: '../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Asaki Hasegawa',
    flag: '../../assets/flags/japan.png',
    record: '5-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',  
    sprite2: '../../assets/sprites/inteleon.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/leon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        numImg: '../../assets/07.png'
      },
    ]
  },
  {
    firstName: 'Tomoki Masuda',
    flag: '../../assets/flags/japan.png',
    record: '5-2-1',
    sprite2: '../../assets/sprites/regigigas.png',  
    sprite1: '../../assets/sprites/blank.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Caleb Patton',
    flag: '../../assets/flags/usa.png',
    record: '5-2-1',
    sprite1: '../../assets/sprites/mew-vmax.png',
    sprite2: '../../assets/sprites/genesect.png',  
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/oricorio.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cyllene.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokemon-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rotom-phone.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rose-tower.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/fusion-strike-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        numImg: '../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Takuya Baba',
    flag: '../../assets/flags/japan.png',
    record: '5-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',  
    sprite2: '../../assets/sprites/inteleon.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Mehdi Hafi',
    flag: '../../assets/flags/france.png',
    record: '5-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/jolteon.png',  
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/jolteon.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/eevee.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/starmie-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/empoleon-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/memory-capsule.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/shopping-center.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        numImg: '../../assets/07.png'
      },
    ]
  },
  {
    firstName: 'Keito Yoshihara',
    flag: '../../assets/flags/japan.png',
    record: '5-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',  
    sprite2: '../../assets/sprites/inteleon.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Azul Griego',
    flag: '../../assets/flags/usa.png',
    record: '5-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/calyrex-ice-rider.png',  
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/ice-rider-calyrex-vmax.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ice-rider-calyrex-v.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/empoleon-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pyukumuku.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/canceling-cologne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-scrapper.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        numImg: '../../assets/08.png'
      },
    ]
  },
  {
    firstName: 'Owyn Kamerman',
    flag: '../../assets/flags/netherlands.png',
    record: '5-2-1',
    sprite1: '../../assets/sprites/arceus.png',
    sprite2: '../../assets/sprites/pikachu-gmax.png',  
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-vmax.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-v.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/hisuian-decidueye-vstar.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/hisuian-desidueye-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-vmax.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/jolteon.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/eevee-ability.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/memory-capsule.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Gabriel Smart',
    flag: '../../assets/flags/usa.png',
    record: '5-2-1',
    sprite1: '../../assets/sprites/mew-vmax.png',
    sprite2: '../../assets/sprites/genesect.png',  
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cyllene.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokemon-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rotom-phone.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rose-tower.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/old-cemetary.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/fusion-strike-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        numImg: '../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Steven Mao',
    flag: '../../assets/flags/germany.png',
    record: '5-2-1',
    sprite2: '../../assets/sprites/inteleon.png',  
    sprite1: '../../assets/sprites/arceus.png',
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-scrapper.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        numImg: '../../assets/06.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        numImg: '../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Kenki Tago',
    flag: '../../assets/flags/japan.png',
    record: '5-2-1',
    sprite2: '../../assets/sprites/inteleon.png',  
    sprite1: '../../assets/sprites/palkia-origin.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/leon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-go.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        numImg: '../../assets/08.png'
      },
    ]
  },
  {
    firstName: 'Christian LaBella',
    flag: '../../assets/flags/canada.png',
    record: '5-2-1',
    sprite1: '../../assets/sprites/arceus.png',
    sprite2: '../../assets/sprites/duraludon-gmax.png',  
    list: '../../assets/list-icon.png',
    type: 'metal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/duraludon-vmax.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/duraludon-v.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/karens-conviction.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokegear.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/hyper-potion.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/crystal-cave.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-brs.png',
        numImg: '../../assets/06.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tim Bartels',
    flag: '../../assets/flags/germany.png',
    record: '5-2-1',
    sprite2: '../../assets/sprites/moltres-galar.png',  
    sprite1: '../../assets/sprites/vikavolt.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'João Zambrano',
    flag: '../../assets/flags/brazil.png',
    record: '5-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/inteleon.png',  
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Pedro Torres',
    flag: '../../assets/flags/spain.png',
    record: '5-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/jolteon.png',  
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/jolteon.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/eevee.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/starmie-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/empoleon-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/memory-capsule.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/shopping-center.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        numImg: '../../assets/07.png'
      },
    ]
  },
  {
    firstName: 'Tseng Hsiang',
    flag: '../../assets/flags/taiwan.png',
    record: '5-2-1',
    sprite1: '../../assets/sprites/blank.png',  
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Piper Lepine',
    flag: '../../assets/flags/usa.png',
    record: '5-2-1',
    sprite1: '../../assets/sprites/charizard-shiny.png',  
    sprite2: '../../assets/sprites/inteleon.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zapdos-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/galarian-moltres-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/moltres.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/hoopa.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cape-of-toughness.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/magma-basin.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/fire-energy-brs.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Caleb Gedemer',
    flag: '../../assets/flags/usa.png',
    record: '5-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/calyrex-ice-rider.png',  
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/ice-rider-calyrex-vmax.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ice-rider-calyrex-v.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/empoleon-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pyukumuku.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/canceling-cologne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-scrapper.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        numImg: '../../assets/08.png'
      },
    ]
  },
  {
    firstName: 'Brent Tonisson',
    flag: '../../assets/flags/australia.png',
    record: '5-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/inteleon.png',  
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/crabonminal-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        numImg: '../../assets/07.png'
      },
    ]
  },
  {
    firstName: 'Ryuki Okada',
    flag: '../../assets/flags/japan.png',
    record: '5-3-0',
    sprite1: '../../assets/sprites/blank.png',  
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Boulay Antoine',
    flag: '../../assets/flags/japan.png',
    record: '5-3-0',
    sprite1: '../../assets/sprites/arceus.png',  
    sprite2: '../../assets/sprites/lucario.png',
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lucario-vstar.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lucario-v-asr.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lucario-v-cpa.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-vmax.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-v.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/hisuian-desidueye-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tomoya Tanaka',
    flag: '../../assets/flags/japan.png',
    record: '5-3-0',
    sprite1: '../../assets/sprites/blank.png',  
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Fabien Pujol',
    flag: '../../assets/flags/france.png',
    record: '5-3-0',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/jolteon.png', 
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/jolteon.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/eevee.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/starmie-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/empoleon-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/memory-capsule.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/shopping-center.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        numImg: '../../assets/07.png'
      },
    ]
  },
  {
    firstName: 'Pedro Pertusi',
    flag: '../../assets/flags/brazil.png',
    record: '5-3-0',
    sprite1: '../../assets/sprites/blank.png',  
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'JW Kriewall',
    flag: '../../assets/flags/usa.png',
    record: '5-3-0',
    sprite1: '../../assets/sprites/arceus.png',
    sprite2: '../../assets/sprites/pikachu-gmax.png',  
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-vmax.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-v.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/hisuian-decidueye-vstar.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/hisuian-desidueye-v.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Logan Madden',
    flag: '../../assets/flags/uk.png',
    record: '5-3-0',
    sprite1: '../../assets/sprites/blank.png',  
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Angus Johnson',
    twitter: 'https://twitter.com/Flippy_Fan',
    flag: '../../assets/flags/australia.png',
    record: '5-3-0',
    sprite1: '../../assets/sprites/palkia-origin.png',  
    sprite2: '../../assets/sprites/inteleon.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/leon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-scrapper.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        numImg: '../../assets/07.png'
      },
    ]
  },
  {
    firstName: 'Shoichi Saito',
    flag: '../../assets/flags/japan.png',
    record: '4-1-3',
    sprite1: '../../assets/sprites/blank.png',  
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Rui Sato',
    flag: '../../assets/flags/japan.png',
    record: '5-3-0',
    sprite1: '../../assets/sprites/blank.png',  
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Rowan Stavenow',
    flag: '../../assets/flags/canada.png',
    record: '5-3-0',
    sprite1: '../../assets/sprites/arceus.png',  
    sprite2: '../../assets/sprites/pikachu-gmax.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tsai Yung-Ta',
    flag: '../../assets/flags/taiwan.png',
    record: '4-2-2',
    sprite1: '../../assets/sprites/blank.png',  
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Shinnosuke Sato',
    flag: '../../assets/flags/japan.png',
    record: '4-2-2',
    sprite1: '../../assets/sprites/mewtwo.png',  
    sprite2: '../../assets/sprites/miltank.png',
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/mewtwo-v-unvion-topleft.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mewtwo-v-unvion-topright.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mewtwo-v-unvion-bottomleft.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mewtwo-v-unvion-bottomright.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/miltank.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/perrserker-stealthy-claws.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/meowth-galarian.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cyllene.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/peonia.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/team-yell-cheer.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/flannery.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokemon-center-lady.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/crushing-hammer.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-brs.png',
        numImg: '../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Dan Hugar',
    flag: '../../assets/flags/usa.png',
    record: '4-2-2',
    sprite1: '../../assets/sprites/palkia-origin.png',  
    sprite2: '../../assets/sprites/calyrex-ice-rider.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tu Cheng-Tai',
    flag: '../../assets/flags/taiwan.png',
    record: '4-2-2',
    sprite1: '../../assets/sprites/blank.png',  
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Cobi Kawasaki',
    flag: '../../assets/flags/usa.png',
    record: '4-2-2',
    sprite1: '../../assets/sprites/charizard-shiny.png',
    sprite2: '../../assets/sprites/inteleon.png',  
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zapdos-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/moltres.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/hoopa.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zeraora.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rowlet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sonia.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/leon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rescue-carrier.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-go.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-scrapper.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/magma-basin.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/fire-energy-brs.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Takuma Tominaga',
    flag: '../../assets/flags/japan.png',
    record: '4-2-2',
    sprite1: '../../assets/sprites/blank.png',  
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Fabrizio Silva',
    flag: '../../assets/flags/peru.png',
    record: '4-3-1',
    sprite1: '../../assets/sprites/mew-vmax.png',  
    sprite2: '../../assets/sprites/genesect.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Christian Fontenot',
    flag: '../../assets/flags/denmark.png',
    record: '4-3-1',
    sprite1: '../../assets/sprites/calyrex-ice-rider.png',  
    sprite2: '../../assets/sprites/inteleon.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/ice-rider-calyrex-vmax.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ice-rider-calyrex-v.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/leon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-scrapper.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        numImg: '../../assets/07.png'
      },
    ]
  },
  {
    firstName: 'Manuel Jorach',
    flag: '../../assets/flags/austria.png',
    record: '4-3-1',
    sprite1: '../../assets/sprites/blank.png',  
    sprite2: '../../assets/sprites/stonjourner.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kaisei Takata',
    flag: '../../assets/flags/japan.png',
    record: '4-3-1',
    sprite1: '../../assets/sprites/palkia-origin.png',  
    sprite2: '../../assets/sprites/calyrex-ice-rider.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tanner Hurley',
    flag: '../../assets/flags/usa.png',
    record: '4-3-1',
    sprite1: '../../assets/sprites/palkia-origin.png',  
    sprite2: '../../assets/sprites/inteleon.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Haruto Masubuchi',
    flag: '../../assets/flags/japan.png',
    record: '4-3-1',
    sprite1: '../../assets/sprites/blank.png',  
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Takuya Hasegawa',
    flag: '../../assets/flags/japan.png',
    record: '4-3-1',
    sprite1: '../../assets/sprites/arceus.png',  
    sprite2: '../../assets/sprites/inteleon.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Syahmi Razak',
    flag: '../../assets/flags/liberia-malaysia.png',
    record: '4-3-1',
    sprite1: '../../assets/sprites/blank.png',  
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Luca Clavadetscher',
    flag: '../../assets/flags/switzerland.png',
    record: '4-3-1',
    sprite1: '../../assets/sprites/blank.png',  
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Liam Halliburton',
    flag: '../../assets/flags/usa.png',
    record: '10-1-1',
    sprite1: '../../assets/sprites/palkia-origin.png',  
    sprite2: '../../assets/sprites/inteleon.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/crabonminal-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        numImg: '../../assets/07.png'
      },
    ]
  },
  {
    firstName: 'Sebastian Lashmet',
    flag: '../../assets/flags/usa.png',
    record: '9-2-1',
    sprite2: '../../assets/sprites/inteleon.png',  
    sprite1: '../../assets/sprites/urshifu-rapid-strike-gmax.png',
    list: '../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-vmax.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-v.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/octillery.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/remoraid.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/medicham-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cheryl.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rescue-carrier.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tower-of-waters.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/rapid-strike-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Soma Yoshimura',
    flag: '../../assets/flags/japan.png',
    record: '8-1-2',
    sprite1: '../../assets/sprites/arceus.png',  
    sprite2: '../../assets/sprites/mewtwo.png',
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mewtwo-v-unvion-topleft.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mewtwo-v-unvion-topright.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mewtwo-v-unvion-bottomleft.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mewtwo-v-unvion-bottomright.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/adventurers-discovery.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/peonia.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/hyper-potion.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-scrapper.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        numImg: '../../assets/08.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'João Penteado',
    flag: '../../assets/flags/brazil.png',
    record: '8-3-0',
    sprite1: '../../assets/sprites/arceus.png',  
    sprite2: '../../assets/sprites/beedrill.png',
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/beedrill.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-vmax.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-v.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sss-mustard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/grass-energy-brs.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-brs.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/double-turbo-energy.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Owen Dalgard',
    flag: '../../assets/flags/usa.png',
    record: '7-1-2',
    sprite1: '../../assets/sprites/mew-vmax.png',  
    sprite2: '../../assets/sprites/genesect.png',
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cyllene.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokemon-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rotom-phone.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rose-tower.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/old-cemetary.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/fusion-strike-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        numImg: '../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Justin Newdorf',
    flag: '../../assets/flags/usa.png',
    record: '7-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',  
    sprite2: '../../assets/sprites/inteleon.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        numImg: '../../assets/07.png'
      },
    ]
  },
  {
    firstName: 'Roberto Costanzo',
    flag: '../../assets/flags/france.png',
    record: '7-2-1',
    sprite1: '../../assets/sprites/arceus.png',  
    sprite2: '../../assets/sprites/lucario.png',
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lucario-vstar.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lucario-v-asr.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-vmax.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-v.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/hisuian-desidueye-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Daniel Magda',
    flag: '../../assets/flags/czech-republic.png',
    record: '7-3-0',
    sprite1: '../../assets/sprites/palkia-origin.png',  
    sprite2: '../../assets/sprites/jolteon.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/jolteon.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/eevee.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/starmie-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/empoleon-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/memory-capsule.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/shopping-center.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        numImg: '../../assets/07.png'
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Rikuto Ohashi',
    flag: '../../assets/flags/japan.png',
    record: '10-0-1',
    sprite1: '../../assets/sprites/palkia-origin.png',  
    sprite2: '../../assets/sprites/calyrex-ice-rider.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ice-rider-calyrex-vmax.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ice-rider-calyrex-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/leon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-go.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        numImg: '../../assets/08.png'
      },
    ]
  },
  {
    firstName: 'Tristan Tse',
    flag: '../../assets/flags/canada.png',
    record: '8-1-2',
    sprite1: '../../assets/sprites/palkia-origin.png',  
    sprite2: '../../assets/sprites/inteleon.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-scrapper.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-go.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        numImg: '../../assets/07.png'
      },
    ]
  },
  {
    firstName: 'Chung Yen-Tso',
    flag: '../../assets/flags/taiwan.png',
    record: '7-1-2',
    sprite1: '../../assets/sprites/arceus.png',  
    sprite2: '../../assets/sprites/inteleon.png',
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/flannery.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        numImg: '../../assets/07.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Prince Williams',
    flag: '../../assets/flags/usa.png',
    record: '7-2-1',
    sprite1: '../../assets/sprites/arceus.png',  
    sprite2: '../../assets/sprites/mewtwo.png',
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mewtwo-v-unvion-topleft.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mewtwo-v-unvion-topright.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mewtwo-v-unvion-bottomleft.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mewtwo-v-unvion-bottomright.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/adventurers-discovery.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/peonia.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/hyper-potion.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokegear.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        numImg: '../../assets/08.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Misha Shapkin',
    flag: '../../assets/flags/uk.png',
    record: '6-2-1',
    sprite1: '../../assets/sprites/mew-vmax.png',  
    sprite2: '../../assets/sprites/genesect.png',
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cyllene.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokemon-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rotom-phone.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rose-tower.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/old-cemetary.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/fusion-strike-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        numImg: '../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Marcelo Rubio Turra',
    flag: '../../assets/flags/brazil.png',
    record: '6-2-1',
    sprite1: '../../assets/sprites/mew-vmax.png',  
    sprite2: '../../assets/sprites/genesect.png',
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cyllene.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokemon-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rose-tower.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/old-cemetary.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/fusion-strike-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        numImg: '../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Hatsuto Kogawa',
    flag: '../../assets/flags/japan.png',
    record: '6-2-1',
    sprite1: '../../assets/sprites/blank.png',  
    sprite2: '../../assets/sprites/regigigas.png',
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/regigigas.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/regirock.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/regice.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/registeel.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/regieliki-evs.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/regieliki-astr.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/regidrago.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/regidrago-attacl.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bruno.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-loto.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/stormy-mountain.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/fire-energy-brs.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/aurora-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/speed-energy.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/twin-energy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Kuto Kawamoto',
    flag: '../../assets/flags/japan.png',
    record: '6-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',  
    sprite2: '../../assets/sprites/inteleon.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/starmie-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nessa.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rose-tower.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-go.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        numImg: '../../assets/07.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        numImg: '../../assets/01.png'
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

    if (item.list === '../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " " + " - 2022 Worlds";
                // document.querySelector('.playerName').innerHTML = item.firstName + " " + "(" + item.record + ")" + " - 2022 Worlds";
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

    if (item.list === '../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " " + " - 2022 Worlds";
                // document.querySelector('.playerName').innerHTML = item.firstName + " " + "(" + item.record + ")" + " - 2022 Worlds";

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

    if (item.list === '../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item.firstName + " " + " - 2022 Worlds";
                    // document.querySelector('.playerName').innerHTML = item.firstName + " " + "(" + item.record + ")" + " - 2022 Worlds";

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
    juniorList.appendChild(item_element);
  }
}

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);
displayList2(seniors);
displayList3(juniors);
