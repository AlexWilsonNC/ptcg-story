const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Stephen Silvestro',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/beedrill.png',
    sprite2: '../../assets/sprites/luxray.png',
    list: '../../assets/list-icon.png',
    type: 'grass',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/beedrill-power.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/beedrill-band-atk.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/kakuna.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/weedle.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/chatot.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-2008.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/grass-energy-capsule.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-capsule.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/multi-energy-dp.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Sami Sekkoum',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/machamp.png',
    list: '../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/flygon-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/flygon.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/vibrava.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/trapinch.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/trapinch-power.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/machamp-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/machamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/machoke.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/machop-kick.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoqueen.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoran-f.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/chatot.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/ditto-dna.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucians-assignment.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-2008.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/premier-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/fighting-energy-capsule.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/upper-energy.png',
        numImg: '../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Jay Hornung',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/machamp.png',
    list: '../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/flygon-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/flygon.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/flygon-fighting.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/vibrava.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/trapinch.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/rr.084.trapinch.jpg',
        numImg: '../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/machamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/machoke.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/machop-kick.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoqueen.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoran-f.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/chatot.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-2008.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/premier-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/memory-berry-2009.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/fighting-energy-capsule.png',
        numImg: '../../assets/05.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/upper-energy.png',
        numImg: '../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Koujiro Tsuruta',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/honchkrow.png',
    sprite2: '../../assets/sprites/toxicroak.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/honchkrow-sp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak-sp-psychic.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/skuntank-sp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/houndoom-sp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucario.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sableye-overgear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/felicitys-drawing.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/galactic-hq.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/moonlight-stadium.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-capsule.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/dp-darkness-energy.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Fabien Garnier',
    flag: '../../assets/flags/france.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gyarados.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/gyarados.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/magikarp.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sableye-overgear.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/pachirisu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/registeel.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/felicitys-drawing.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bucks-training.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-rescue.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/super-scoop-up-2007.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/switch-2007.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-capsule.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Tia Toppari',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/weavile.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Sebastian Crema',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/palkia.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/flygon-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/flygon.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/vibrava-fighting.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/vibrava.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/trapinch.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoqueen.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoran-f.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/palkia-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/palkia-orb.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/chatot.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-2008.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/switch-2007.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/premier-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/memory-berry-2009.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bubble-coat.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/fighting-energy-capsule.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Diego Cassiraga ',
    flag: '../../assets/flags/argentina.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/palkia.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/palkia-lvx-lost-cyclone.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/palkia-sp.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/mesprit-pbind.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf-downer-aterial.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/mismagius.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/misdreavus.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/raichu-sp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        numImg: '../../assets/05.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-capsule.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Karl Blake',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/weavile.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/flygon-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/flygon.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/vibrava.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/trapinch.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/weavile.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sneasel.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/dusknoir.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/duskull-sillouette.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucians-assignment.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-2008.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/premier-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/fighting-energy-capsule.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-capsule.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/dp-darkness-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Lars Andersen',
    flag: '../../assets/flags/denmark.png',
    sprite1: '../../assets/sprites/gengar.png',
    sprite2: '../../assets/sprites/dusknoir.png',
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/gengar-fainting-spell.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/haunter-hypnosis.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/gastly.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sf.096.dusknoir_lv_x.jpg',
        numImg: '../../assets/01.png',
        exCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/sf.001.dusknoir.jpg',
        numImg: '../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/dusknoir.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sf.034.dusclops.jpg',
        numImg: '../../assets/02.png',
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/duskull.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/looker.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucians-assignment.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-2008.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/moonlight-stadium.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        numImg: '../../assets/06.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/rainbow-energy-platinum.png',
        numImg: '../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Jayson Harry',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/palkia.png',
    sprite2: '../../assets/sprites/luxray.png',
    list: '../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Alessio Parcianello ',
    flag: '../../assets/flags/italy.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/palkia.png',
    list: '../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nicolas Harle',
    flag: '../../assets/flags/france.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gyarados.png',
    list: '../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Sho Sasaki',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/infernape.png',
    list: '../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Takuya Yamanaka',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/palkia.png',
    list: '../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ross Cawthon',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/palkia.png',
    sprite2: '../../assets/sprites/luxray.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/palkia-lvx-lost-cyclone.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/palkia-sp.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/mesprit-pbind.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf-downer-aterial.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/mismagius.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/misdreavus.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/chatot.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-capsule.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Filipe Cardoso',
    flag: '../../assets/flags/portugal.png',
    sprite1: '../../assets/sprites/dialga.png',
    sprite2: '../../assets/sprites/palkia.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/dialga-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/dialga-g.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/palkia-lvx-lost-cyclone.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/palkia-sp.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        numImg: '../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/premier-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-capsule.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/metal-energy-capsule.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/sp-energy.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Tsuguyoshi Yamato',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/weavile.png',
    list: '../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Chris Fulop',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/machamp.png',
    list: '../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Khan Le',
    flag: '../../assets/flags/norway.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/machamp.png',
    list: '../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Andrew Vincze',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/machamp.png',
    sprite2: '../../assets/sprites/lumineon.png',
    list: '../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Benjamin Angee',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/palkia.png',
    list: '../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Michael Pramawat',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/manectric.png',
    list: '../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Michael Chin',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/palkia.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/flygon-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/flygon.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/vibrava.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/trapinch.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoqueen.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoran-f.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/palkia-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/palkia.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/chatot.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-2008.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/premier-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/switch-2007.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/memory-berry-2009.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/fighting-energy-capsule.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Anna Schipper',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Helga Helskens',
    flag: '../../assets/flags/belgium.png',
    sprite1: '../../assets/sprites/honchkrow.png',
    sprite2: '../../assets/sprites/toxicroak.png',
    list: '../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Pablo Meza',
    flag: '../../assets/flags/mexico.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/palkia.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/palkia-lvx-lost-cyclone.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/palkia-sp.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/mesprit-pbind.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf-downer-aterial.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/mismagius.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/misdreavus.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/raichu-sp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/honchkrow-sp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-capsule.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-capsule.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Dante Lenell',
    flag: '../../assets/flags/argentina.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/palkia.png',
    list: '../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Drew Holton',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/machamp.png',
    list: '../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Yuta Komatsuda',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/palkia.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/palkia-lvx-lost-cyclone.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/palkia-sp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/dialga-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/dialga-g.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/mesprit-pbind.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf-downer-aterial.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucario.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-quick.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/underground-expedition.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/metal-energy-capsule.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Kevin de Mooij',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/palkia.png',
    list: '../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Esa Juntunen',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/palkia.png',
    list: '../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Takuto Itagaki',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/honchkrow.png',
    sprite2: '../../assets/sprites/toxicroak.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/honchkrow-sp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak-sp-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/skuntank-sp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucario.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/ditto-dna.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/pachirisu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/moonlight-stadium.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/galactic-hq.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-capsule.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-capsule.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/sp-energy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/multi-energy-dp.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'David Cohen',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/palkia.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/flygon-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/flygon.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/vibrava.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/trapinch.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoqueen.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoran-f.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/palkia-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/palkia.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-2008.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-drawer-plus.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/premier-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/memory-berry-2009.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/fighting-energy-capsule.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/upper-energy.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Nicholas Fotheringham',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/palkia.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/flygon-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/flygon.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/vibrava.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/trapinch.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoqueen.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoran-f.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/palkia-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/palkia.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/chatot.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-2008.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/premier-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/switch-2007.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/memory-berry-2009.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/fighting-energy-capsule.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/upper-energy.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Miska Saari',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/infernape.png',
    list: '../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/infernape-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/infernape-sp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucario.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/ninetales.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/vulpix-shiny.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/chatot.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/premier-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-capsule.png',
        numImg: '../../assets/05.png'
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-capsule.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Yuki Sogabe',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Edmund Kuras',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/palkia.png',
    sprite2: '../../assets/sprites/luxray.png',
    list: '../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Dennis Mischitz',
    flag: '../../assets/flags/germany.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/infernape.png',
    list: '../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/infernape-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/infernape-sp.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucario.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/ninetales.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/vulpix-shiny.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        numImg: '../../assets/01.png',
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-capsule.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-capsule.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Zachary Mirman',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/palkia.png',
    list: '../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Hayato Takaoka',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/palkia.png',
    list: '../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nathaniel Lawson',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/flygon.png',
    list: '../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Wataru Hasegawa',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Alex Mairman',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/palkia.png',
    list: '../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Taylor Mitchell',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/infernape.png',
    list: '../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Lloyd Wenger',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/manectric.png',
    list: '../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jakob Droste',
    flag: '../../assets/flags/germany.png',
    sprite1: '../../assets/sprites/gengar.png',
    sprite2: '../../assets/sprites/machamp.png',
    list: '../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Steven Roberto',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  }
]

let juniors = [
  {
    firstName: 'Tsubasa Nakamura',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/honchkrow.png',
    sprite2: '../../assets/sprites/toxicroak.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/honchkrow-sp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak-sp-psychic.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/skuntank-sp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucario.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/dialga-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/dialga-g.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/ditto-dna.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sableye-overgear.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/moonlight-stadium.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/galactic-hq.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-capsule.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-capsule.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/sp-energy.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Jason Martinez',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gengar.png',
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/gengar-fainting-spell.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/haunter-smog.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/gastly.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoqueen.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidorina-2008.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoran-f.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/zangoose.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/looker.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-2008.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokedex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        numImg: '../../assets/07.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'William Shand',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/palkia.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/palkia-lvx-lost-cyclone.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/palkia-sp.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/mesprit-pbind.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf-downer-aterial.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/honchkrow-sp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/banette.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/shuppet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-radar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/premier-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        numImg: '../../assets/05.png'
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-capsule.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/sp-energy.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Heikki Kettunen',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/infernape.png',
    list: '../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/infernape-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/infernape-sp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucario.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/ninetales.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/vulpix-shiny.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/chatot.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/premier-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-capsule.png',
        numImg: '../../assets/05.png'
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-capsule.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Takumi Kiyota',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/infernape.png',
    list: '../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Aaron Clarke',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jun Hasebe',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Isac Calmroth',
    flag: '../../assets/flags/sweden.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
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
        flagImg.setAttribute('src', item.flag);

        let countryName = document.createElement('div');
        countryName.classList.add('country-name');
        countryName.style.display = 'none';

        flagImg.addEventListener('mouseover', function() {
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

        flagImg.addEventListener('mouseout', function() {
            countryName.style.display = 'none';
        });

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
        playerName.appendChild(countryName); // Append the country name element
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
            document.querySelector('.playerName').innerHTML = item.firstName + " - 2009 Worlds";

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

              if (deck.oldCard === true) {
                pokeCard.classList.add('old-card')
              }
              if (deck.oldCard === true) {
                pokeCard.classList.add('radius-card')
              }
              if (deck.exCard === true) {
                pokeCard.classList.add('ex-era-card')
              }
              if (deck.exCard === true) {
                pokeCard.classList.add('radius-card')
              }

              // cardSpace.forEach(card => {
              //   card.addEventListener('click', () => {
              //     pokeCard.classList.add('large-card')
              //   })
              // })

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

        let countryName = document.createElement('div');
        countryName.classList.add('country-name');
        countryName.style.display = 'none';

        flagImg.addEventListener('mouseover', function() {
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

        flagImg.addEventListener('mouseout', function() {
            countryName.style.display = 'none';
        });

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
        playerName.appendChild(countryName); // Append the country name element
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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2009 Worlds";

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

          if (deck.oldCard === true) {
            pokeCard.classList.add('old-card')
          }
          if (deck.oldCard === true) {
            pokeCard.classList.add('radius-card')
          }
          if (deck.exCard === true) {
            pokeCard.classList.add('ex-era-card')
          }
          if (deck.exCard === true) {
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

        let countryName = document.createElement('div');
        countryName.classList.add('country-name');
        countryName.style.display = 'none';

        flagImg.addEventListener('mouseover', function() {
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

        flagImg.addEventListener('mouseout', function() {
            countryName.style.display = 'none';
        });

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
        playerName.appendChild(countryName); // Append the country name element
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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2009 Worlds";

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

          // pokeCard.onclick = function() {
          //   document.querySelector('.pok-card-small').style.width = '500px';
          // }

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
