const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Gino Lombardi',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008/gardevoir-lvx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/gardevoir-psychic-lock.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/gallade.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/kirlia.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/ralts.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/ralts-hypnosis.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/claydol.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/baltoy-fighting.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/cresselia-lvx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/cresselia.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/breloom.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/shroomish.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/jirachi-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/phione.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/pachirisu.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/roseannes-research.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/team-galactic-wager.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/bebes-search.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/rare-candy-2008.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/warp-point.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/night-maintenance.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/strangth-charm.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/phoebes-stadium.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/lake-boundary.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/psychic-energy-capsule.png',
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/energy/double-rainbow-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/scramble-energy-promo.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/call-energy.png',
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Drew Holton',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Colin Moll',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/torterra.png',
    sprite2: '../../../assets/sprites/sceptile.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008/torterra-lvx.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/torterra-dp.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/torterra-md.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/grotle.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/turtwig-free-atk.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/turtwig.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/sceptile.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/grovyle.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/treecko.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/claydol.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/baltoy-fighting.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/chatot.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/bebes-search.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/roseannes-research.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/rare-candy-2008.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/super-scoop-up.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/warp-point.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/night-maintenance.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/crystal-beach.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/energy/grass-energy-capsule.png',
        numImg: '../../../assets/09.png',
      },
      {
        cardImg: '../../../assets/cards/energy/call-energy.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Mike Fouchet',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tom Dolezal',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Alex F',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Frank Diaz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/bronzong.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jorel Ker',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/bronzong.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008/dp.120.empoleon_lv_x.jpg',
        numImg: '../../../assets/01.png',
        exCard: true
      },
      {
        cardImg: '../../../assets/cards/2007-2008/empoleon-dual-splash.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/prinplup.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/piplup.png',
        numImg: '../../../assets/03.png',
        radiusCard: true
      },
      {
        cardImg: '../../../assets/cards/2007-2008/bronzong.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/bronzor.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/claydol.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/baltoy-fighting.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/dusknoir.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/duskull.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/absol-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/phione.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/castform.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/roseannes-research.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/bebes-search.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/team-galactic-wager.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/rare-candy-2008.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/warp-point.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/windstorm.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/night-maintenance.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/premier-ball.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/water-energy-capsule.png',
        numImg: '../../../assets/06.png'
      },
      {
        cardImg: '../../../assets/cards/energy/call-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/scramble-energy-promo.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/double-rainbow-energy.png',
        numImg: '../../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Benjamin Sauk',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/bronzong.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Eric C',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/leafeon.png',
    sprite2: '../../../assets/sprites/magmortar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ian Brander',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/absol.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jason Klaczynski',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jimmy Ballard',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/banette.png',
    sprite2: '../../../assets/sprites/blissey.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008/sw.023.banette.jpg',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/shuppet.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/blissey.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/chansey.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/mew-star.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/lunatone-power.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/roseannes-research.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/tv-reporter.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/copycat.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/castaway.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/warp-point.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/night-maintenance.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/cessation-crystal.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/crystal-beach.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/energy/psychic-energy-capsule.png',
        numImg: '../../../assets/10.png',
      },
      {
        cardImg: '../../../assets/cards/energy/water-energy-capsule.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/energy/multi-energy-dp.png',
        numImg: '../../../assets/01.png',
      },
    ]
  },
  {
    firstName: 'John Silvestro',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/bronzong.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tyson Stephan',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008/gardevoir-lvx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/gardevoir-psychic-lock.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/gallade.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/kirlia.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/ralts.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/ralts-hypnosis.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/furret.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/sentret.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/dusknoir.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/duskull.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/absol-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/chatot.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/roseannes-research.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/team-galactic-wager.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/bebes-search.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/rare-candy-2008.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/warp-point.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/windstorm.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/night-maintenance.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/strangth-charm.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/lake-boundary.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2007-2008/moonlight-stadium.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/psychic-energy-capsule.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/double-rainbow-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/call-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/scramble-energy-promo.png',
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Christian Ortiz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/bronzong.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'David C',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/blissey.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kyle S',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/leafeon.png',
    sprite2: '../../../assets/sprites/magmortar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Andrew K',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Chris F',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/leafeon.png',
    sprite2: '../../../assets/sprites/magmortar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Dylan Lefavour',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Eric C',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/eevee-no-heart.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jason F',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Matthew C',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Matthew E',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nancy L',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Omar Izaguirre',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/banette.png',
    sprite2: '../../../assets/sprites/blissey.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Peter O',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Andrew C',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Frankie D',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/banette.png',
    sprite2: '../../../assets/sprites/blissey.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jake S',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Stephen McGaffney',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/banette.png',
    sprite2: '../../../assets/sprites/blissey.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Orion Craig',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/eevee-no-heart.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2007-2008/leafeon-lvx.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/leafeon.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/espeon-body.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/jolteon.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/umbreon.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/vaporeon.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/eevee-flowers.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/claydol.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/baltoy-fighting.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/jirachi-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/chatot.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/castform.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/roseannes-research.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/celios-network.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/stevens-advice.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/copycat.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/bebes-search.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/warp-point.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/windstorm.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/night-maintenance.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2007-2008/lake-boundary.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/energy/grass-energy-capsule.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/energy/psychic-energy-capsule.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/energy/water-energy-capsule.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/energy/lightning-energy-capsule.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/energy/double-rainbow-energy.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/energy/scramble-energy.png',
        numImg: '../../../assets/03.png',
      },
    ]
  },
  {
    firstName: 'Steven Roberto',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/bronzong.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Aziz Al-Yami',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/bronzong.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tad W',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Alex M',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/bronzong.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'David S',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Garrett F',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Steven R',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Henry Leaming',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tristan Robinson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Brandon Cross',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jason C',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2008-2010',
        numImg: '../../../assets/04.png'
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

    if (item.list === '../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2009 US Nats";

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

          if (deck.oldCard === true) {
            pokeCard.classList.add('old-card')
          }
          if (deck.oldCard === true) {
            pokeCard.classList.add('radius-card')
          }
          if (deck.exCard === true) {
            pokeCard.classList.add('ex-era-card')
          }
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
        // document.querySelectorAll('.pokemon-card').forEach(card => {
        //   console.log('here')
        //   card.addEventListener('click', () => {
        //       card.querySelector('.pok-card-small').classList.add('large-card');
        //       document.querySelector('.second-behind-modal').style.display = 'block';
        //       if (card.querySelector('.pok-card-small').classList.contains('large-card')) {
        //         document.querySelector('.second-behind-modal').addEventListener('click', () => {
        //               card.querySelector('.pok-card-small').classList.remove('large-card');
        //               document.querySelector('.second-behind-modal').style.display = 'none';
        //           })
        //       }
        //   })
        // });
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

    if (item.list === '../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2009 US Nats";

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

          if (deck.oldCard === true) {
            pokeCard.classList.add('old-card')
          }
          if (deck.oldCard === true) {
            pokeCard.classList.add('radius-card')
          }
          if (deck.exCard === true) {
            pokeCard.classList.add('ex-era-card')
          }
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
        // document.querySelectorAll('.pokemon-card').forEach(card => {
        //   console.log('here')
        //   card.addEventListener('click', () => {
        //       card.querySelector('.pok-card-small').classList.add('large-card');
        //       document.querySelector('.second-behind-modal').style.display = 'block';
        //       if (card.querySelector('.pok-card-small').classList.contains('large-card')) {
        //         document.querySelector('.second-behind-modal').addEventListener('click', () => {
        //               card.querySelector('.pok-card-small').classList.remove('large-card');
        //               document.querySelector('.second-behind-modal').style.display = 'none';
        //           })
        //       }
        //   })
        // });
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

    if (item.list === '../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2009 US Nats";

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

          if (deck.oldCard === true) {
            pokeCard.classList.add('old-card')
          }
          if (deck.oldCard === true) {
            pokeCard.classList.add('radius-card')
          }
          if (deck.exCard === true) {
            pokeCard.classList.add('ex-era-card')
          }
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
        // document.querySelectorAll('.pokemon-card').forEach(card => {
        //   console.log('here')
        //   card.addEventListener('click', () => {
        //       card.querySelector('.pok-card-small').classList.add('large-card');
        //       document.querySelector('.second-behind-modal').style.display = 'block';
        //       if (card.querySelector('.pok-card-small').classList.contains('large-card')) {
        //         document.querySelector('.second-behind-modal').addEventListener('click', () => {
        //               card.querySelector('.pok-card-small').classList.remove('large-card');
        //               document.querySelector('.second-behind-modal').style.display = 'none';
        //           })
        //       }
        //   })
        // });
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
