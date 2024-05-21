const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Jason Klaczynski',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008/gardevoir-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/gardevoir-psychic-lock.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/gallade.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/kirlia.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/ralts.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/dusknoir.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/duskull.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/chatot.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/jolteon-star.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/jirachi-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/bebes-search.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/lake-boundary.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/cyclone-energy-old.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Khan Le',
    flag: '../../assets/flags/norway.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blissey.png',
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008/blissey.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/chansey.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/chatot.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/tv-reporter.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/scott.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/energy-removal-2.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/pluspower.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/pokedex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/time-space-distortion.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/crystal-beach.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-capsule.png',
        numImg: '../../assets/09.png'
      },
      {
        cardImg: '../../assets/cards/energy/fighting-energy-capsule.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/holon-energy-ff.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Gino Lombardi',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008/gardevoir-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/gardevoir-psychic-lock.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/gallade.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/kirlia.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/ralts.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/ralts-hypnosis.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/cresselia-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/cresselia.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/muk.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/grimer.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/jirachi-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/pachirisu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/bebes-search.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/strangth-charm.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/phoebes-stadium.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/lake-boundary.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        numImg: '../../assets/05.png'
      },
      {
        cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/03.png'
      }
    ]
  },
  {
    firstName: "Jimmy O’Brien",
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/empoleon.png',
    sprite2: '../../assets/sprites/bronzong.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008/empoleon-dual-splash.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/prinplup.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/piplup.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/bronzong.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/bronzor.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/unown-quick.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/copycat.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/moonlight-stadium.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        numImg: '../../assets/06.png'
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
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Yacine Sekkoum',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Takae Suzuki',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/banette.png',
    sprite2: '../../assets/sprites/blissey.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Frank Diaz',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/empoleon.png',
    sprite2: '../../assets/sprites/bronzong.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008/empoleon-dual-splash.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/prinplup.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/piplup.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/bronzong.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/bronzor.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/unown-quick.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/copycat.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/moonlight-stadium.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        numImg: '../../assets/06.png'
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
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Esa Juntunen',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/glaceon.png',
    sprite2: '../../assets/sprites/absol.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008/glaceon-lvx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/glaceon.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/eevee.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/absol.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/jirachi-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/bebes-search.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/island-hermet.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/energy-removal-2.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/strangth-charm.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/crystal-beach.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        numImg: '../../assets/07.png'
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
        cardImg: '../../assets/cards/energy/multi-energy-dp.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Matthew Koo',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Sami Sekkoum',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/empoleon.png',
    sprite2: '../../assets/sprites/bronzong.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Agustin Pugliese',
    flag: '../../assets/flags/argentina.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tom Dolezal',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'David Atanassov',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blissey.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kyle Sabelhaus',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008/gardevoir-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/gardevoir-psychic-lock.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/gallade.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/kirlia.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/ralts.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/dusknoir.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/duskull.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/jirachi-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/chatot.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/bebes-search.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/lake-boundary.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/cyclone-energy-old.png',
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Morten Gundesen',
    flag: '../../assets/flags/denmark.png',
    sprite1: '../../assets/sprites/empoleon.png',
    sprite2: '../../assets/sprites/omastar.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'John Silvestro',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/empoleon.png',
    sprite2: '../../assets/sprites/bronzong.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Alex Brosseau',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/empoleon.png',
    sprite2: '../../assets/sprites/bronzong.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008/empoleon-dual-splash.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/prinplup.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/piplup.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/bronzong.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/bronzor.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/absol-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/chatot.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/bebes-search.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/energy-removal-2.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        numImg: '../../assets/07.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Drew Guritzky',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/ampharos.png',
    sprite2: '../../assets/sprites/bronzong.png',
    list: '../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008/ampharos.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/flaaffy.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/mareep.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/bronzong.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/bronzor.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/absol-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/bebes-search.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/copycat.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/lake-boundary.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-capsule.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy.png',
        numImg: '../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Tsuguyoshi Yamato',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Karl Peters',
    flag: '../../assets/flags/germany.png',
    sprite1: '../../assets/sprites/magmortar.png',
    sprite2: '../../assets/sprites/leafeon.png',
    list: '../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008/magmortar-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/magmortar.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/magmar.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/leafeon-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/leafeon.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/eevee.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/rotom.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/mawile.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/energy-removal-2.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/premier-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/crystal-beach.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-capsule.png',
        numImg: '../../assets/09.png'
      },
      {
        cardImg: '../../assets/cards/energy/grass-energy-capsule.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/multi-energy-dp.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Chris Fulop',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/empoleon.png',
    sprite2: '../../assets/sprites/bronzong.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Simone Soldo',
    flag: '../../assets/flags/italy.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tomi Sjöblom',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/honchkrow.png',
    sprite2: '../../assets/sprites/absol.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008/honchkrow-lvx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/honchkrow.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/murkrow.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/murkrow-dusk-stone.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/absol.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/palkia-lvx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/palkia.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/chatot.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/mars.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/premier-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/time-space-distortion.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/crystal-beach.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-capsule.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/dp-darkness-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/warp_energy.jpg',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Clay Carney',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Drew Holton',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ian Brander',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/scizor.png',
    sprite2: '../../assets/sprites/toxicroak.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Evens Cheung',
    flag: '../../assets/flags/norway.png',
    sprite1: '../../assets/sprites/ampharos.png',
    sprite2: '../../assets/sprites/bronzong.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Emmanuel Divens',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kevin Bennett',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/eevee.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Finn Looft',
    flag: '../../assets/flags/germany.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008/gardevoir-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/gardevoir-psychic-lock.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/gallade.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/kirlia.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/ralts.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/ralts-hypnosis.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/absol.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/omastar.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/bebes-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/helix-fossil.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/strangth-charm.png',
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
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Lars Andersen',
    flag: '../../assets/flags/denmark.png',
    sprite1: '../../assets/sprites/empoleon.png',
    sprite2: '../../assets/sprites/omastar.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Anna Schipper',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/empoleon.png',
    sprite2: '../../assets/sprites/bronzong.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Dylan Lefavour',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/empoleon.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008/empoleon-dual-splash.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/prinplup.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/prinplup-ice-blade.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/piplup.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/piplup-berry.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/dusknoir.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/duskull.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/chatot.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/castform.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/tauros.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/mew-star.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/bebes-search.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/copycat.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        numImg: '../../assets/06.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Paul Atanassov',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blissey.png',
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008/blissey.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/chansey.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/chatot.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/tv-reporter.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/scott.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/energy-removal-2.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/pluspower.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/pokedex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/time-space-distortion.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/crystal-beach.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-capsule.png',
        numImg: '../../assets/10.png'
      },
      {
        cardImg: '../../assets/cards/energy/holon-energy-ff.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Nicholas Kolibas',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/empoleon.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008/empoleon-dual-splash.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/prinplup.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/prinplup-ice-blade.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/piplup.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/dusknoir.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/duskull.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/chatot.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/castform.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/pachirisu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/mew-star.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/professor-rowan.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/master-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        numImg: '../../assets/07.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        numImg: '../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Curran Hill',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008/gardevoir-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/gardevoir-psychic-lock.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/gallade.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/kirlia.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/ralts.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/jirachi-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/chatot.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/castform.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/bebes-search.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/strangth-charm.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/lake-boundary.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
        numImg: '../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Aziz Al-Yami',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/empoleon.png',
    sprite2: '../../assets/sprites/bronzong.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008/empoleon-dual-splash.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/prinplup.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/piplup.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/bronzong.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/bronzor.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/chatot.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/absol-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/bebes-search.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        numImg: '../../assets/07.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Andy Meier',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/empoleon.png',
    sprite2: '../../assets/sprites/bronzong.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Dylan Bryan',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/scizor.png',
    sprite2: '../../assets/sprites/electrode.png',
    list: '../../assets/list-icon.png',
    type: 'metal',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008/scizor.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/scyther.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/electrode.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/voltorb.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/sableye.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/copycat.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/scott.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/energy-removal-2.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/pokedex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/time-space-distortion.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/crystal-beach.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/metal-energy-capsule.png',
        numImg: '../../assets/05.png'
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-capsule.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/metal-energy-special-dp.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Garrett Farrington',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/leafeon.png',
    sprite2: '../../assets/sprites/magmortar.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jonathan Bristow',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Justin Bokhari',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Malik Zaihan',
    flag: '../../assets/flags/malaysia.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008/gardevoir-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/gardevoir-psychic-lock.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/gallade.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/kirlia.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/ralts.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/ralts-hypnosis.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/dusknoir.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/duskull.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/chatot.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/castform.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/jirachi-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/bebes-search.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/lake-boundary.png',
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
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        numImg: '../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Christian Miller',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/scizor.png',
    sprite2: '../../assets/sprites/toxicroak.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Takashi Yoneda',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/magnezone.png',
    sprite2: '../../assets/sprites/leafeon.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tord Reklev',
    flag: '../../assets/flags/norway.png',
    sprite1: '../../assets/sprites/empoleon.png',
    sprite2: '../../assets/sprites/omastar.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tim Hornung',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Keegan Cox',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/eevee.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  }
]

let juniors = [
  {
    firstName: 'Tristan Robinson',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/scizor.png',
    sprite2: '../../assets/sprites/toxicroak.png',
    list: '../../assets/list-icon.png',
    type: 'metal',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008/scizor.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/scyther.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/toxicroak.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/croagunk.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/electrode.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/voltorb.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/sableye.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/copycat.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/scott.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/crystal-beach.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/metal-energy-capsule.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-capsule.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/multi-energy-dp.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/metal-energy-special-dp.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Takuto Itagaki',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008/gardevoir-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/gardevoir-psychic-lock.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/gallade.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/kirlia.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/ralts.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/furret.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/sentret.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/muk.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/grimer.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/omastar.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/castform.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/oaks-visit.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/helix-fossil.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/lake-boundary.png',
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
        cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Simone Zucchelli',
    flag: '../../assets/flags/italy.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008/gardevoir-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/gardevoir-psychic-lock.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/gallade.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/kirlia.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/ralts.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/ralts-hypnosis.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/pachirisu.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/weavile.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/sneasel.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/breloom.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/shroomish.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/oaks-visit.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/bebes-search.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/moonlight-stadium.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/fighting-energy-capsule.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/dp-darkness-energy.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Noah Lawson',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008/gardevoir-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/gardevoir-psychic-lock.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/gallade.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/kirlia.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/ralts.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/ralts-hypnosis.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/dusknoir.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/duskull.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/chatot.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/pachirisu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/tauros.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/castform.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/oaks-visit.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/pluspower.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/strangth-charm.png',
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
        cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Sean Goh',
    flag: '../../assets/flags/malaysia.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
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
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jacob Tamm',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008/gardevoir-lvx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/gardevoir-psychic-lock.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/gallade.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/kirlia.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/kirlia-psyshock.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/ralts.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/ralts-hypnosis.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/dusknoir.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/duskull.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/pachirisu.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/jirachi-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/bebes-search.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        numImg: '../../assets/05.png'
      },
      {
        cardImg: '../../assets/cards/energy/fighting-energy-capsule.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/cyclone-energy-old.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Kazuho Mizuta',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Joey Gaffney',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Emily Chan',
    flag: '../../assets/flags/norway.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/empoleon.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ty Wheeler',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Olliver Barr',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Andrew Choong',
    flag: '../../assets/flags/australia.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Olivier Marcant',
    flag: '../../assets/flags/france.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Joshua Simon',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Heikki Kettunen',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
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
            document.querySelector('.playerName').innerHTML = item.firstName + " - 2008 Worlds";

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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2008 Worlds";

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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2008 Worlds";

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
