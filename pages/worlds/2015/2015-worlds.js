const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Jacob Van Wagner',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/blastoise.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jirachi-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/exeggcute.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/articuno.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/wailord-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mewtwo-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/archie-ace-in-hole.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/superior-energy-retreival.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/acro-bike.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/11.png'
      }
    ]
  },
  {
    firstName: 'Mees Brenninkmeijer',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/crobat.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/crobat.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/golbat.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/zubat-free-flight.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mewtwo-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-scoop-up.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Igor Costa',
    flag: '../../../assets/flags/portugal.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/crobat.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/crobat.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/golbat.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/zubat-free-flight.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mewtwo-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-center-lady.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-scoop-up.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/head-ringer.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Merlin Quittek',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/joltik.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pumpkaboo.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lampent.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mew-ex-ltr.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/acro-bike.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silver-bangle.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hard-charm.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-lightning.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Sean Foisy',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/trevenant.png',
    sprite2: '../../../assets/sprites/gengar.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/trevenant.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/phantump-astonish.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/gengar-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jirachi-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/wally.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silent-lab.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-psychic.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/mystery-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Martin Janouš',
    flag: '../../../assets/flags/czech-republic.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/joltik.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pumpkaboo.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lampent.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mew-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/acro-bike.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/revive.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/town-map-bw.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-lightning.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Simon Narode',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/donphan.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/donphan.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/phanpy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hawlucha.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bunnelby.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mr-mime.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/korrina.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/robo-sub.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/repeat-ball.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/revive.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/focus-sash.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silver-bangle.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/fighting-stadium.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silent-lab.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-fighting.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/strong-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Tito Santoso',
    flag: '../../../assets/flags/indonesia.png',
    sprite1: '../../../assets/sprites/aromatisse.png',
    sprite2: '../../../assets/sprites/seismitoad.png',
    list: '../../../assets/list-icon.png',
    type: 'fairy',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/aromatisse.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/spritzee-fairy-wind.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/spritzee-sweet-scent.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mewtwo-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/charizard-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/malamar-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/cobalion-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trevenant-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/m-manectric-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jirachi-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-fan-club.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/max-potion-bw.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sacred-ash.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/fairy-garden.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-fairy.png',
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-rainbow.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Andrew Mahone',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jason Martinez',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manectric.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Simone Zucchelli',
    flag: '../../../assets/flags/italy.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ross Cawthon',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/groudon-primal.png',
    sprite2: '../../../assets/sprites/wobbuffet.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/groudon-ex-primal.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/groudon-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/wobbuffet.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/landorus-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bunnelby.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/korrina.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-center-lady.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/teammates.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/robo-sub.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/switch.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mega-turbo.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professors-letter.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hard-charm.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/focus-sash.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silent-lab.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/fighting-stadium.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-fighting.png',
        numImg: '../../../assets/07.png'
      },
      {
        cardImg: '../../../assets/cards/energy/strong-energy.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Daniel Altavilla',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/manectric-mega.png',
    sprite2: '../../../assets/sprites/genesect.png',
    list: '../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/m-manectric-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-ex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/genesect-ex-plasma.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/deoxys-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shadow-triad.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/g-booster.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/acro-bike.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/max-potion-bw.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/switch.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-spirit-link.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-lightning.png',
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-grass.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-plasma.png',
        numImg: '../../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Dylan Dreyer',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/joltik.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pumpkaboo.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lampent.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mew-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/teammates.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/dowsing-machine.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/revive.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-lightning.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Michikazu Tsuda',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/raichu.png',
    sprite2: '../../../assets/sprites/crobat.png',
    list: '../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/raichu.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pikachu-nuzzle.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/crobat.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/golbat.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/zubat-free-flight.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jirachi-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bronzong.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bronzor.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mr-mime.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sacred-ash.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/repeat-ball.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silver-bangle.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sky-field.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-metal.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Nicolas Galaz',
    flag: '../../../assets/flags/chile.png',
    sprite1: '../../../assets/sprites/landorus-therian.png',
    sprite2: '../../../assets/sprites/crobat.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Junichi Kakinoki',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/manectric-mega.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Henry Ross-Clunis',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/joltik.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pumpkaboo.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lampent.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mew-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/teammates.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/dowsing-machine.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/revive.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-lightning.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Adrian Velasco',
    flag: '../../../assets/flags/philippines.png',
    sprite1: '../../../assets/sprites/trevenant.png',
    sprite2: '../../../assets/sprites/gengar.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/trevenant.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/phantump-astonish.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/gengar-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jirachi-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/wally.png',
        numImg: '../../../assets/03.png'
      },      
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/team-flare-grunt.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/crushing-hammer.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/enhanced-hammer.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/head-ringer.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-psychic.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/mystery-energy.png',
        numImg: '../../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Jimmy Pendarvis',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/joltik.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pumpkaboo.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lampent.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mew-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/teammates.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/dowsing-machine.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/revive.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-lightning.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Sam Chen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/blastoise.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/exeggcute.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/articuno.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jirachi-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bunnelby.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/archie-ace-in-hole.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/superior-energy-retreival.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/acro-bike.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/11.png'
      }
    ]
  },
  {
    firstName: 'Aaron Tarbell',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/blastoise.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/exeggcute.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jirachi-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/wailord-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/articuno.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/kyurem.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bunnelby.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/archie-ace-in-hole.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/superior-energy-retreival.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/acro-bike.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/11.png'
      }
    ]
  },
  {
    firstName: 'Ciaran Farah',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/raichu.png',
    sprite2: '../../../assets/sprites/crobat.png',
    list: '../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/raichu.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pikachu-nuzzle.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/crobat.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/golbat.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/zubat-free-flight.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/leafeon.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/eevee.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/exeggcute.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sacred-ash.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/repeat-ball.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silver-bangle.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sky-field.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-grass.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Daniel Lynch',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/donphan.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/donphan.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/phanpy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hawlucha.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bunnelby.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/korrina.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/robo-sub.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/focus-sash.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silver-bangle.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/fighting-stadium.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silent-lab.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-fighting.png',
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/energy/strong-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Kian Amini',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manectric.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/crobat.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/golbat.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/zubat-free-flight.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-center-lady.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rock-guard.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-scoop-up.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/head-ringer.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-lightning.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Jason Klaczynski',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/garbodor-ltr.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trubbish-pile-up.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hippowdon.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hippopotas.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shadow-triad.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/team-flare-grunt.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/crushing-hammer.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/enhanced-hammer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/head-ringer.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-fighting.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Alex Hill',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/trevenant.png',
    sprite2: '../../../assets/sprites/gengar.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/trevenant.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/phantump-astonish.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/gengar-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jirachi-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },    
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/wally.png',
        numImg: '../../../assets/03.png'
      },  
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silent-lab.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-psychic.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/mystery-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Tobias Thesing',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/raichu.png',
    sprite2: '../../../assets/sprites/crobat.png',
    list: '../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/raichu.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pikachu-nuzzle.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/crobat.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/golbat.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/zubat-free-flight.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hawlucha.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jirachi-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bunnelby.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sacred-ash.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silver-bangle.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sky-field.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-fighting.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Brit Pybas',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/aegislash.png',
    sprite2: '../../../assets/sprites/bronzong.png',
    list: '../../../assets/list-icon.png',
    type: 'metal',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/bronzong.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bronzor.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/aegislash-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/heatran.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/dialga-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/cobalion-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mewtwo-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/kecleon.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/steel-shelter.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-metal.png',
        numImg: '../../../assets/08.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Patrik Räty',
    flag: '../../../assets/flags/finland.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/groudon-primal.png',
    list: '../../../assets/sprites/blank.png',
     type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Dustin Zimmerman',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/aegislash.png',
    sprite2: '../../../assets/sprites/bronzong.png',
    list: '../../../assets/list-icon.png',
    type: 'metal',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/bronzong.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bronzor.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/aegislash-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/heatran.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/dialga-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/cobalion-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mewtwo-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/kecleon.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/steel-shelter.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-metal.png',
        numImg: '../../../assets/08.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Michael Diaz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manectric.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  }
]

let seniors = [
  {
    firstName: 'Patrick Martinez',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manectric.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/crobat.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/golbat.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/zubat-free-flight.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-center-lady.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rock-guard.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-scoop-up.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/head-ringer.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-lightning.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Jeffrey Cheng',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/donphan.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/donphan.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/phanpy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hawlucha.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bunnelby.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mr-mime.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/korrina.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/robo-sub.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/focus-sash.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silver-bangle.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/fighting-stadium.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silent-lab.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-fighting.png',
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/energy/strong-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Brent Tonisson',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/manectric-mega.png',
    list: '../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/m-manectric-ex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-ex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/zapdos.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mr-mime.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bunnelby.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/enhanced-hammer.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-spirit-link.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-lightning.png',
        numImg: '../../../assets/06.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Colter Decker',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/donphan.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/donphan.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/phanpy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hawlucha.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bunnelby.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/korrina.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/robo-sub.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/focus-sash.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silver-bangle.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/fighting-stadium.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silent-lab.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-fighting.png',
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/energy/strong-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Calvin Connor',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/klinklang.png',
    list: '../../../assets/list-icon.png',
    type: 'metal',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/klinklang.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/klang.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/klink.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bronzong.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bronzor.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/heatran.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/cobalion-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/aegislash-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/teammates.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rare-candy.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/repeat-ball.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sacred-ash.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sky-field.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-metal.png',
        numImg: '../../../assets/07.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Jesper Eriksen',
    flag: '../../../assets/flags/denmark.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manectric.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/crobat.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/golbat.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/zubat-free-flight.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-scoop-up.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sacred-ash.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/head-ringer.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-lightning.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Jon Eng',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manectric.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/crobat.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/golbat.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/zubat-free-flight.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mewtwo-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jirachi-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-scoop-up.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/head-ringer.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silent-lab.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-lightning.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Josh Fernando',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/manectric-mega.png',
    list: '../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/m-manectric-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-ex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/terrakion.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/leafeon.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/eevee.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-center-lady.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/max-potion-bw.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sacred-ash.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-spirit-link.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-lightning.png',
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-fighting.png',
        numImg: '../../../assets/05.png'
      }
    ]
  }
]

let juniors = [
  {
    firstName: 'Rowan Stavenow',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/landorus-therian.png',
    sprite2: '../../../assets/sprites/crobat.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/landorus-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/crobat.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/golbat.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/zubat-free-flight.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hawlucha.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lucario-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/korrina.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/scoop-up-cyclone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-scoop-up.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/fighting-stadium.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silent-lab.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-fighting.png',
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/energy/strong-energy.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Alejandro Ng-Guzman',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/groudon-primal.png',
    sprite2: '../../../assets/sprites/wobbuffet.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/groudon-ex-primal.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/groudon-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/wobbuffet.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bunnelby.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/korrina.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-center-lady.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/teammates.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/robo-sub.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/switch.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mega-turbo.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professors-letter.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hard-charm.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/focus-sash.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silent-lab.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/fighting-stadium.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shrine-of-memories.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-fighting.png',
        numImg: '../../../assets/08.png'
      },
      {
        cardImg: '../../../assets/cards/energy/strong-energy.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Jackson Davies',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manectric.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/crobat.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/golbat.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/zubat-free-flight.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mewtwo-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-center-lady.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rock-guard.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-scoop-up.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/head-ringer.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-lightning.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Enrico Marini',
    flag: '../../../assets/flags/italy.png',
    sprite1: '../../../assets/sprites/landorus-therian.png',
    sprite2: '../../../assets/sprites/crobat.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/landorus-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/crobat.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/golbat.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/zubat-free-flight.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hawlucha.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lucario-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bunnelby.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/korrina.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/scoop-up-cyclone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-scoop-up.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/repeat-ball.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sacred-ash.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/focus-sash.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/fighting-stadium.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-fighting.png',
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/energy/strong-energy.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Everett Rutter-Ferris',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/landorus-therian.png',
    sprite2: '../../../assets/sprites/crobat.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/landorus-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/crobat.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/golbat.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/zubat-free-flight.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hawlucha.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lucario-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bunnelby.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/korrina.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },      
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/scoop-up-cyclone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-scoop-up.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/repeat-ball.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professors-letter.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/focus-sash.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/fighting-stadium.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silent-lab.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-fighting.png',
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/energy/strong-energy.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Asaki Hasegawa',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/donphan.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/donphan.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/phanpy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hawlucha.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/wobbuffet.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bunnelby.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/regirock.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/korrina.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/robo-sub.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professors-letter.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sacred-ash.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/focus-sash.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silver-bangle.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/fighting-stadium.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silent-lab.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-fighting.png',
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/energy/strong-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Keita Saubaigne',
    flag: '../../../assets/flags/belgium.png',
    sprite1: '../../../assets/sprites/landorus-therian.png',
    sprite2: '../../../assets/sprites/leafeon.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/landorus-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/leafeon.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/eevee.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hawlucha.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lucario-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },      
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/switch.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/focus-sash.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/fighting-stadium.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-fighting.png',
        numImg: '../../../assets/06.png'
      },
      {
        cardImg: '../../../assets/cards/energy/strong-energy.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Yuto Omura',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/blastoise.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/exeggcute.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jirachi-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bunnelby.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/kyurem.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/archie-ace-in-hole.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/superior-energy-retreival.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/acro-bike.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/11.png'
      }
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

    if (item.list === '../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
        document.querySelector('.playerName').innerHTML = item.firstName;

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
        document.querySelector('.playerName').innerHTML = item.firstName;

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
        document.querySelector('.playerName').innerHTML = item.firstName;

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
