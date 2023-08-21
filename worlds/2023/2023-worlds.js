const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Vance Kelley',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/mew-vmax.png',
    sprite2: '../../assets/sprites/genesect.png',  
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v-crz.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/oricorio.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/box-of-disaster.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/crystal-cave.png',
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
    firstName: 'Tord Reklev',
    flag: '../../assets/flags/norway.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gardevoir.png',  
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia-mirage-step.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts-memory-skip.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cresselia.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-turo.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/artazon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        numImg: '../../assets/10.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/reversal-energy.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Michael Pramawat',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/giratina-origin.png',
    sprite2: '../../assets/sprites/comfey.png',  
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/giratina-vstar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/giratina-v.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat.png',
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
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        numImg: '../../assets/04.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        numImg: '../../assets/03.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        numImg: '../../assets/03.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Azul Griego',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/mew-vmax.png',
    sprite2: '../../assets/sprites/genesect.png',  
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v-crz.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/eiscue-fs.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/feather-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
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
    firstName: 'Dionsius Lee',
    flag: '../../assets/flags/singapore.png',
    sprite1: '../../assets/sprites/mew-vmax.png',
    sprite2: '../../assets/sprites/genesect.png',  
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v-crz.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/eiscue-fs.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cleansing-gloves.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
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
    firstName: 'Victor Garcia Montes',
    flag: '../../assets/flags/mexico.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gardevoir.png',  
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts-memory-skip.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cresselia.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
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
        cardImg: '../../assets/cards/2022-2023/iono.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-turo.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/worker.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/penny.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/artazon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        numImg: '../../assets/11.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/reversal-energy.png',
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Shoichi Saito',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Pang Kai Hing',
    flag: '../../assets/flags/hong-kong.png',
    sprite1: '../../assets/sprites/giratina-origin.png',
    sprite2: '../../assets/sprites/comfey.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Cyrus Davis',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/chien-pao.png',  
    list: '../../assets/list-icon.png',
    type: 'normal',
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
        cardImg: '../../assets/cards/2022-2023/chien-pao-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/articuno.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof-carefree.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        numImg: '../../assets/10.png',
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Brent Tonisson',
    flag: '../../assets/flags/australia.png',
    sprite2: '../../assets/sprites/gardevoir.png',
    sprite1: '../../assets/sprites/blank.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cresselia.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
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
        cardImg: '../../assets/cards/2022-2023/iono.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/worker.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        numImg: '../../assets/12.png',
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Alex Schemanske',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/inteleon-vmax.png',
    sprite2: '../../assets/sprites/urshifu-rapid-strike-gmax.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-vmax.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-v.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-vmax.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-v.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2022-2023/radiant-alakazam.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-turo.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2022-2023/korrinas-focus.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cheryl.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/giacomo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-retrieval-sv.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tower-of-waters.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        numImg: '../../assets/06.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/rapid-strike-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Karel Maertens',
    flag: '../../assets/flags/belgium.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/archeops.png',  
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tyranitar-v.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ss-urshifu-vmax.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ss-urshifu-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal-ss.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-tsareena.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/squakabilly-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/urn-of-vitality.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mesagoza.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/single-strike-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Hui Yuan Huang',
    flag: '../../assets/flags/taiwan.png',
    sprite1: '../../assets/sprites/chien-pao.png',
    sprite2: '../../assets/sprites/baxcalibur.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
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
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Akira Sato',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Konsta Kallama',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/mew-vmax.png',
    sprite2: '../../assets/sprites/genesect.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Raz Wolpe',
    flag: '../../assets/flags/isreal.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/archeops.png',  
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tyranitar-v.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/stonjourner.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal-ss.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-tsareena.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/urn-of-vitality.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mesagoza.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/single-strike-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Masataka Hirano',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/mew-vmax.png',
    sprite2: '../../assets/sprites/genesect.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Yerco Valencia',
    flag: '../../assets/flags/chile.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/archeops.png',  
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tyranitar-v.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ss-urshifu-vmax.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ss-urshifu-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal-ss.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/stonjourner.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-tsareena.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/urn-of-vitality.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mesagoza.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/single-strike-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Jamie Frankland',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/giratina-origin.png',
    sprite2: '../../assets/sprites/comfey.png',  
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/giratina-vstar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/giratina-v.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        numImg: '../../assets/04.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        numImg: '../../assets/03.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        numImg: '../../assets/02.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Andrew Mahone',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/miraidon.png',
    sprite2: '../../assets/sprites/flaaffy.png',  
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/miraidon-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/flaaffy.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mareep60.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raichu-v.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zeraora-battle-claw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/squakabilly-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-turo.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/arven.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/elctric-generator.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bravery-charm.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        numImg: '../../assets/14.png',
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Daichi Shimada',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/archeops.png',  
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tyranitar-v.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal-ss.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/stonjourner.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-tsareena.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/urn-of-vitality.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/single-strike-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Bastian Silva',
    flag: '../../assets/flags/chile.png',
    sprite1: '../../assets/sprites/chien-pao.png',
    sprite2: '../../assets/sprites/baxcalibur.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Miłosz Dyrlica',
    flag: '../../assets/flags/poland.png',
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
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
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bravery-charm.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        numImg: '../../assets/04.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        numImg: '../../assets/03.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        numImg: '../../assets/02.png',
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Cameron Shenoy',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/mew-vmax.png',
    sprite2: '../../assets/sprites/genesect.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v-crz.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/feather-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cleansing-gloves.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
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
    firstName: 'Fabio Spanò',
    flag: '../../assets/flags/italy.png',
    sprite1: '../../assets/sprites/goodra-hisui.png',
    sprite2: '../../assets/sprites/comfey.png',  
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/goodra-vstar.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/goodra-v.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zamazenta.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
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
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokegear30-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        numImg: '../../assets/04.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg',
        numImg: '../../assets/04.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        numImg: '../../assets/02.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Pedro Pertusi',
    flag: '../../assets/flags/brazil.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gardevoir.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jon Eng',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        numImg: '../../assets/04.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        numImg: '../../assets/02.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        numImg: '../../assets/02.png',
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Alex Krekeler',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/inteleon-vmax.png',
    sprite2: '../../assets/sprites/urshifu-rapid-strike-gmax.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-vmax.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-v.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-vmax.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-v.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2022-2023/radiant-alakazam.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-turo.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2022-2023/korrinas-focus.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cheryl.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/giacomo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-retrieval-sv.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tower-of-waters.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        numImg: '../../assets/06.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/rapid-strike-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Sejun Park',
    flag: '../../assets/flags/korea.png',
    sprite1: '../../assets/sprites/miraidon.png',
    sprite2: '../../assets/sprites/flaaffy.png',  
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/miraidon-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/flaaffy.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mareep60.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raichu-v.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zapdos.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/squakabilly-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-turo.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/arven.png',
        numImg: '../../assets/02.png'
      }, 
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/penny.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/elctric-generator.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bravery-charm.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/beach-court.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        numImg: '../../assets/14.png',
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Ciaran Farah',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/chien-pao.png',
    sprite2: '../../assets/sprites/baxcalibur.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/chien-pao-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/baxcalibur.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/frigibax57.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/frigibax-chilly.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof-carefree.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2022-2023/iono.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/superior-energy-retrieval.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/canceling-cologne.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        numImg: '../../assets/09.png',
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Shuto Kogawa',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/chien-pao.png',
    sprite2: '../../assets/sprites/baxcalibur.png',
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jack Moore',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/kyogre.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
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
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        numImg: '../../assets/05.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        numImg: '../../assets/03.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        numImg: '../../assets/03.png',
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Akihiro Urata',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/giratina-origin.png',
    sprite2: '../../assets/sprites/comfey.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Xander Pero',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/mew-vmax.png',
    sprite2: '../../assets/sprites/genesect.png',  
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v-crz.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/oricorio.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cleansing-gloves.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
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
    firstName: 'Tomu Mizutani',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/arceus.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Namhyeok Koo',
    flag: '../../assets/flags/korea.png',
    sprite1: '../../assets/sprites/giratina-origin.png',
    sprite2: '../../assets/sprites/comfey.png',  
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/giratina-vstar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/giratina-v.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
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
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        numImg: '../../assets/04.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        numImg: '../../assets/03.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        numImg: '../../assets/03.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Piotr Orleański',
    flag: '../../assets/flags/poland.png',
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Gabor Van Meenen',
    flag: '../../assets/flags/denmark.png',
    sprite1: '../../assets/sprites/miraidon.png',
    sprite2: '../../assets/sprites/regieliki-vmax.png',  
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/miraidon-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/regieliki-vmax.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/regieliki-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/squakabilly-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-turo.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes-crz.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/elctric-generator.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switching-cups.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/beach-court.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        numImg: '../../assets/14.png',
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Isaiah Bradner',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Yuta Mori',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Hiroaki Isono',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/archeops.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Su Chia-Hsing',
    flag: '../../assets/flags/taiwan.png',
    sprite1: '../../assets/sprites/arceus.png',
    sprite2: '../../assets/sprites/aggron-vmax.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Yu Shirokuma',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Matthew Burris',
    flag: '../../assets/flags/australia.png',
    sprite2: '../../assets/sprites/gardevoir.png',
    sprite1: '../../assets/sprites/blank.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cresselia.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
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
        cardImg: '../../assets/cards/2022-2023/iono.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/worker.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        numImg: '../../assets/12.png',
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Javier Chelmes',
    flag: '../../assets/flags/chile.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/archeops.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Mateusz Łaszkiewicz',
    flag: '../../assets/flags/poland.png',
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
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
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bravery-charm.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        numImg: '../../assets/04.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        numImg: '../../assets/03.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        numImg: '../../assets/02.png',
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Ghe Nawon',
    flag: '../../assets/flags/korea.png',
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
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
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        numImg: '../../assets/04.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        numImg: '../../assets/03.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        numImg: '../../assets/02.png',
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Jeremy Evans',
    flag: '../../assets/flags/australia.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/archeops.png',  
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tyranitar-v.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/squakabilly-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal-ss.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/stonjourner.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-tsareena.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/great-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/urn-of-vitality.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mesagoza.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/single-strike-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Nicholas Moffitt',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/kyogre.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
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
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-turo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        numImg: '../../assets/05.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        numImg: '../../assets/03.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        numImg: '../../assets/03.png',
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Lucas Matheus',
    flag: '../../assets/flags/brazil.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gardevoir.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Fabrizio Inga Silva',
    flag: '../../assets/flags/peru.png',
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kaito Kimura',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/mew-vmax.png',
    sprite2: '../../assets/sprites/genesect.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Sander Wojcik',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/vulpix-alola.png',
    sprite2: '../../assets/sprites/yveltal.png',  
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/vulpix-vstar.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/vulpix-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/espeon-vmax.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/espeon-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/regieliki-astr.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/diancie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rotom-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/luxray-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bouffalant.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mimikyu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/penny.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/flannery.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/peonia.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/crushing-hammer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bravery-charm.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/moon-sun-badge.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/stormy-mountain.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/artazon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Bryan de Vries',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/giratina-origin.png',
    sprite2: '../../assets/sprites/comfey.png',  
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/giratina-vstar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/giratina-v.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        numImg: '../../assets/04.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        numImg: '../../assets/03.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        numImg: '../../assets/02.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jonathan Lanciano',
    flag: '../../assets/flags/argentina.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/archeops.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Moeen Mungalee',
    flag: '../../assets/flags/south-africa.png',
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Dyatmika Paramaanindya',
    flag: '../../assets/flags/indonesia.png',
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jory Koot',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/chien-pao.png',
    sprite2: '../../assets/sprites/baxcalibur.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Trevore Read',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/archeops.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tim Franklin',
    flag: '../../assets/flags/australia.png',
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
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
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes-crz.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        numImg: '../../assets/04.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        numImg: '../../assets/02.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        numImg: '../../assets/02.png',
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Owyn Kamerman',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/arceus.png',
    sprite2: '../../assets/sprites/umbreon-vmax.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
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
        cardImg: '../../assets/cards/2022-2023/umbreon-vmax.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/umbreon-v.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-vmax.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/slaking-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-alakazam.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/hawlucha.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/adventurers-discovery.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/volo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-dark-energy.jpg',
        numImg: '../../assets/05.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        numImg: '../../assets/03.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Julian Luvara',
    flag: '../../assets/flags/australia.png',
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
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
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/palkia-origin.png',  
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2022-2023/chien-pao-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/kyogre.png',
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
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zinnia.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/canceling-cologne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        numImg: '../../assets/09.png',
        radiusCard: true
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Gabriel Fernandez',
    flag: '../../assets/flags/brazil.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/archeops.png',  
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/wyrdeer-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/slaking-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-tsareena.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/theraputic-energ.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Sydney De Bruijn',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/arceus.png',
    sprite2: '../../assets/sprites/giratina-origin.png',  
    list: '../../assets/list-icon.png',
    type: 'dark',
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
        cardImg: '../../assets/cards/2022-2023/giratina-vstar.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/giratina-v.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof-carefree.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-alakazam.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        numImg: '../../assets/05.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        numImg: '../../assets/05.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Yuya T.',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Sechan O',
    flag: '../../assets/flags/korea.png',
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/hawlucha.png',
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
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        numImg: '../../assets/04.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        numImg: '../../assets/03.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        numImg: '../../assets/02.png',
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Akinori A',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Rune Heiremans',
    flag: '../../assets/flags/belgium.png',
    sprite1: '../../assets/sprites/chien-pao.png',
    sprite2: '../../assets/sprites/baxcalibur.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/chien-pao-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/baxcalibur.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/frigibax57.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/frigibax-chilly.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof-carefree.png',
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
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/superior-energy-retrieval.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/canceling-cologne.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokegear30-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        numImg: '../../assets/09.png',
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Lucas J',
    flag: '../../assets/flags/brazil.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Polaris Altares',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/chien-pao.png',  
    list: '../../assets/list-icon.png',
    type: 'normal',
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
        cardImg: '../../assets/cards/2022-2023/chien-pao-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/suicune-v.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof-carefree.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        numImg: '../../assets/09.png',
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Vini Fernandez',
    flag: '../../assets/flags/brazil.png',
    sprite1: '../../assets/sprites/mew-vmax.png',
    sprite2: '../../assets/sprites/genesect.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v-crz.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/deoxys-promo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/squakabilly-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/penny.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
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
    firstName: 'Pedro Augusto C',
    flag: '../../assets/flags/brazil.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'João Gabriel P',
    flag: '../../assets/flags/brazil.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/archeops.png',  
    list: '../../assets/list-icon.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/tyranitar-v.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ss-urshifu-vmax.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ss-urshifu-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal-ss.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/stonjourner.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/squakabilly-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/urn-of-vitality.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mesagoza.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/single-strike-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Shao Tong Y',
    flag: '../../assets/flags/taiwan.png',
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/kyogre.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
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
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
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
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        numImg: '../../assets/05.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        numImg: '../../assets/03.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        numImg: '../../assets/03.png',
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Gabriel T',
    flag: '../../assets/flags/brazil.png',
    sprite1: '../../assets/sprites/arceus.png',
    sprite2: '../../assets/sprites/duraludon-gmax.png',  
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
        cardImg: '../../assets/cards/2022-2023/duraludon-vmax-crz.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/duraludon-v-ss.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/umbreon-vmax.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/umbreon-v.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-alakazam.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/adventurers-discovery.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg',
        numImg: '../../assets/04.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-dark-energy.jpg',
        numImg: '../../assets/03.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-fighting-energy.jpg',
        numImg: '../../assets/02.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Hayashi Y',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Hatsuto K',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kazusa Y.',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kingsley C',
    flag: '../../assets/flags/australia.png',
    sprite2: '../../assets/sprites/gardevoir.png',
    sprite1: '../../assets/sprites/blank.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts-memory-skip.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/cresselia.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
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
        cardImg: '../../assets/cards/2022-2023/iono.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/worker.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        numImg: '../../assets/11.png',
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/reversal-energy.png',
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Junwon C',
    flag: '../../assets/flags/korea.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Haruku U',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
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
                document.querySelector('.playerName').innerHTML = item.firstName + " " + " - 2023 Worlds";
                // document.querySelector('.playerName').innerHTML = item.firstName + " " + "(" + item.record + ")" + " - 2023 Worlds";
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
          if (deck.radiusCard === true) {
            pokeCard.classList.add('radius-card')
        }


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
                document.querySelector('.playerName').innerHTML = item.firstName + " " + " - 2023 Worlds";
                // document.querySelector('.playerName').innerHTML = item.firstName + " " + "(" + item.record + ")" + " - 2023 Worlds";

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
          if (deck.radiusCard === true) {
            pokeCard.classList.add('radius-card')
        }


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
                    document.querySelector('.playerName').innerHTML = item.firstName + " " + " - 2023 Worlds";
                    // document.querySelector('.playerName').innerHTML = item.firstName + " " + "(" + item.record + ")" + " - 2023 Worlds";

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
          if (deck.radiusCard === true) {
            pokeCard.classList.add('radius-card')
        }


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
