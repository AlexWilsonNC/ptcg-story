const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Jason Klaczynski',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/garbodor-ltr.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trubbish-poison-gas.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shadow-triad.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/team-flare-grunt.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/crushing-hammer-xy.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/enhanced-hammer.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/head-ringer.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Enrique Avila',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/wailord.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/wailord-ex.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/suicune.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-fan-club.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/cassius.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/team-flare-grunt.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hugh.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shauna.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/dowsing-machine.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/max-potion-bw.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/enhanced-hammer.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trick-shovel.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sacred-ash.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hard-charm.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silent-lab.png',
        numImg: '../../../assets/02.png',
      },
    ]
  },
  {
    firstName: 'Grant Manley',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/manectric-mega.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/m-manectric-ex.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-ex.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/garbodor-ltr.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trubbish-poison-gas.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/empoleon.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jirachi-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/archie-ace-in-hole.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/acro-bike.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/max-potion-bw.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/switch.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-spirit-link.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-lightning.png',
        numImg: '../../../assets/06.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/03.png',
      },
    ]
  },
  {
    firstName: 'Ben Moskow',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/bronzong.png',
    sprite2: '../../../assets/sprites/aegislash.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
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
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
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
        cardImg: '../../../assets/cards/2014-2016/heatran.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/kecleon.png',
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
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/max-potion-bw.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/steel-shelter.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-metal.png',
        numImg: '../../../assets/07.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Dylan Bryan',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/bronzong.png',
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
        numImg: '../../../assets/03.png'
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
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/aegislash-ex.png',
        numImg: '../../../assets/03.png'
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
        cardImg: '../../../assets/cards/2014-2016/jirachi-ex.png',
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
        cardImg: '../../../assets/cards/2014-2016/repeat-ball.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rare-candy.png',
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
    firstName: 'Eduardo Gonzalez',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/hippowdon.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/hippowdon.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hippopotas.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/landorus-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/korrina.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-birch-observation.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-center-lady.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/switch.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/enhanced-hammer.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/max-potion-bw.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hard-charm.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silent-lab.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-fighting.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/energy/strong-energy.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Kristy Britton',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/crobat.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/04.png'
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
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
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
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silent-lab.png',
        numImg: '../../../assets/01.png'
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
    firstName: 'Geoffrey Sauk',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/rayquaza-mega.png',
    sprite2: '../../../assets/sprites/bronzong.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/m-rayquaza-ex-colorless.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rayquaza-ex-ros.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rayquaza-ex-ros-dragon.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bronzong.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bronzor.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/aegislash-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/cobalion-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/kecleon.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/heatran.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-fan-club.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sacred-ash.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rayquaza-spirit-link.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sky-field.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-metal.png',
        numImg: '../../../assets/06.png',
      },
      {
        cardImg: '../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Brandon Zettel',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/wailord.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/wailord-ex.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/suicune.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-fan-club.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/cassius.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/team-flare-grunt.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hugh.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shauna.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/dowsing-machine.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/max-potion-bw.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/enhanced-hammer.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trick-shovel.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sacred-ash.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hard-charm.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silent-lab.png',
        numImg: '../../../assets/02.png',
      },
    ]
  },
  {
    firstName: 'Omar Reyhan',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/kyogre-primal.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/primal-kyogre-ex.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/kyogre-ex.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/suicune.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/kyurem.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/absol.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-center-lady.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/dive-ball.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professors-letter.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/energy-retrieval.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/kyogre-spirit-link.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hard-charm.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/10.png',
      },
      {
        cardImg: '../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../assets/02.png',
      },
    ]
  },
  {
    firstName: 'Dustin Zimmerman',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/bronzong.png',
    sprite2: '../../../assets/sprites/aegislash.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
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
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2014-2016/keldeo-ex.png',
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
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
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
    firstName: 'Stefan Tabaco',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/groudon-primal.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
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
        cardImg: '../../../assets/cards/2014-2016/mega-turbo.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professors-letter.png',
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
        cardImg: '../../../assets/cards/2014-2016/switch.png',
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
        numImg: '../../../assets/07.png'
      },
      {
        cardImg: '../../../assets/cards/energy/strong-energy.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Jake Jensen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/garbodor-ltr.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trubbish-pile-up.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/cassius.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/crushing-hammer-xy.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-scoop-up.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/enhanced-hammer.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/head-ringer.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Michael Lesky',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/kyogre-primal.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/primal-kyogre-ex.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/kyogre-ex.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/suicune.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/kyurem.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/absol.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-center-lady.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/dive-ball.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/energy-retrieval.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professors-letter.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/kyogre-spirit-link.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hard-charm.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/10.png',
      },
      {
        cardImg: '../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../assets/02.png',
      },
    ]
  },
  {
    firstName: 'Steve Guthrie',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../../assets/sprites/blastoise.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/blastoise.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../../assets/04.png'
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
        cardImg: '../../../assets/cards/2014-2016/kyurem.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/archie-ace-in-hole.png',
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
        cardImg: '../../../assets/cards/2014-2016/town-map-bw.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/11.png'
      }
    ]
  },
  {
    firstName: 'Kolton Day',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/crobat.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/crobat.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/golbat.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/zubat-free-flight.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mewtwo-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jirachi-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-scoop-up.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/switch.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/enhanced-hammer.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silent-lab.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Austin Baggs',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/raichu.png',
    sprite2: '../../../assets/sprites/crobat.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Dean Nezam',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/manectric-mega.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Sam Chen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/manectric-mega.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/m-manectric-ex.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-ex.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ninetales-prc.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vulpix-prc.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mewtwo-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/articuno.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/suicune.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-center-lady.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/switch.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/enhanced-hammer.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professors-letter.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-spirit-link.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-lightning.png',
        numImg: '../../../assets/05.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../assets/02.png',
      },
    ]
  },
  {
    firstName: 'Andrew Krekeler',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/manectric-mega.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/m-manectric-ex.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-ex.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ninetales-prc.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vulpix-prc.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jirachi-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/max-potion-bw.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/switch.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professors-letter.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-spirit-link.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silent-lab.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-lightning.png',
        numImg: '../../../assets/06.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/02.png',
      },
    ]
  },
  {
    firstName: 'Benjamin Sauk',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/rayquaza-mega.png',
    sprite2: '../../../assets/sprites/bronzong.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Omar Izaguirre',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Chris Derocher',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/crobat.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/crobat.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/golbat.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/zubat-free-flight.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mewtwo-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-scoop-up.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Steven Bates',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/landorus-therian.png',
    sprite2: '../../../assets/sprites/raichu.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/hawlucha.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/landorus-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/raichu.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pikachu-nuzzle.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/garbodor-ltr.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trubbish-poison-gas.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lucario-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mewtwo-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/switch.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/max-potion-bw.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sacred-ash.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/fighting-stadium.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-fighting.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/energy/strong-energy.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../assets/03.png',
      },
    ]
  },
  {
    firstName: 'Brandon Salazar',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/crobat.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Jason Annichiarico',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flareon.png',
    sprite2: '../../../assets/sprites/empoleon.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/flareon-plasma.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/leafeon.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/eevee.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/eevee-signs-of-evo.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/empoleon.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/audino.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/exeggcute.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ditto.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bunnelby.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jirachi-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mewtwo-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/deoxys-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/archie-ace-in-hole.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/teammates.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/winona.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/town-map-bw.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silver-bangle.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silent-lab.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-grass.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Frank Diaz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/raichu.png',
    sprite2: '../../../assets/sprites/crobat.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Daniel Lynch',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/crobat.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/crobat.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/golbat.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/zubat-free-flight.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mewtwo-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/scoop-up-cyclone.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/acro-bike.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-scoop-up.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sacred-ash.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silent-lab.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Ramon Miranda',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/landorus-therian.png',
    sprite2: '../../../assets/sprites/raichu.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Alexander Hill',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/rayquaza-mega.png',
    sprite2: '../../../assets/sprites/bronzong.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/m-rayquaza-ex-colorless.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rayquaza-ex-ros.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bronzong.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bronzor.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/aegislash-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/heatran.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/acro-bike.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sacred-ash.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rayquaza-spirit-link.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sky-field.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-metal.png',
        numImg: '../../../assets/05.png',
      },
      {
        cardImg: '../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'David Vidal',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/rayquaza-mega.png',
    sprite2: '../../../assets/sprites/bronzong.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Brandon Cantu',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/bronzong.png',
    sprite2: '../../../assets/sprites/aegislash.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Maximilian Armitage',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/crobat.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Chris Siakala',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Henry Ross-Clunis',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/landorus-therian.png',
    sprite2: '../../../assets/sprites/crobat.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Tristan Lackey',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/manectric-mega.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/m-manectric-ex.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-ex.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/empoleon.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jirachi-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/black-kyurem-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/exeggcute.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/archie-ace-in-hole.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/acro-bike.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-spirit-link.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/head-ringer.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-lightning.png',
        numImg: '../../../assets/06.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Vance Kelley',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/crobat.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/crobat.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/golbat.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/zubat-free-flight.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mewtwo-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/team-flare-grunt.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-scoop-up.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silent-lab.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Azul Griego',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manectric.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Jeremy Gibson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/pumpkaboo.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/joltik.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lampent.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mew-ex-ltr.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/empoleon.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jirachi-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mr-mime.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/exeggcute.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/archie-ace-in-hole.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/revive.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silver-bangle.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Zach Elliott',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/manectric-mega.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/m-manectric-ex.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-ex.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/articuno.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/scoop-up-cyclone.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-scoop-up.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-catcher-flip.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professors-letter.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-spirit-link.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-lightning.png',
        numImg: '../../../assets/07.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/03.png',
      },
    ]
  },
  {
    firstName: 'Kevin Baxter',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/groudon-primal.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/groudon-ex-primal.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/groudon-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hawlucha.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/landorus-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-ex.png',
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
        cardImg: '../../../assets/cards/2014-2016/scramble-switch.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/02.png'
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
        cardImg: '../../../assets/cards/2014-2016/professors-letter.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hard-charm.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/focus-sash.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/groudon-spirit-link.png',
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2014-2016/wide-lens.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silent-lab.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/fighting-stadium.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-fighting.png',
        numImg: '../../../assets/07.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-lightning.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/strong-energy.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Stephan Blake',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/donphan.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Ryan Sabelhaus',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/manectric-mega.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Dane Schussler',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/manectric-mega.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Michael Lux',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/wailord.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/wailord-ex.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/suicune.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-fan-club.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/cassius.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/team-flare-grunt.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hugh.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shauna.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/dowsing-machine.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/max-potion-bw.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/enhanced-hammer.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trick-shovel.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sacred-ash.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hard-charm.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silent-lab.png',
        numImg: '../../../assets/02.png',
      },
    ]
  },
  {
    firstName: 'Jason Martinez',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manectric.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Daniel Altavilla',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/rayquaza-mega.png',
    sprite2: '../../../assets/sprites/bronzong.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/m-rayquaza-ex-colorless.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rayquaza-ex-ros.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bronzong.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bronzor.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/aegislash-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/cobalion-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jirachi-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/kecleon.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/altaria-ros.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/swablu-ros2.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/exeggcute.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/winona.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mega-turbo.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sacred-ash.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rayquaza-spirit-link.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sky-field.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-metal.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Matt Marusik',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/yveltal-ex.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/yveltal.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/garbodor-ltr.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trubbish-pile-up.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/darkrai-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/crushing-hammer-xy.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/enhanced-hammer.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-dark.png',
        numImg: '../../../assets/08.png',
      },
      {
        cardImg: '../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'William Herrmann',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/bronzong.png',
    sprite2: '../../../assets/sprites/klinklang.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Mark Garcia',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manectric.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Ryan Grant',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/garbodor-ltr.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trubbish-pile-up.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shadow-triad.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/team-flare-grunt.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/crushing-hammer-xy.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/enhanced-hammer.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/head-ringer.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Pearce Blend',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gengar.png',
    sprite2: '../../../assets/sprites/trevenant.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Zack Martin',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/manectric-mega.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/m-manectric-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-ex.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/drifblim.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/drifloon-creepy-wind.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jirachi-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/max-potion-bw.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/enhanced-hammer.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/switch.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-spirit-link.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/head-ringer.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-lightning.png',
        numImg: '../../../assets/05.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Brit Pybas',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/garbodor-ltr.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trubbish-poison-gas.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mewtwo-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-center-lady.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shadow-triad.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/team-flare-grunt.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/enhanced-hammer.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/head-ringer.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Aaron Wang',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/crobat.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Charles L-Leach',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/pumpkaboo.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/joltik.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lampent.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mew-ex-ltr.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jirachi-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/empoleon.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mr-mime.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/archie-ace-in-hole.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/switch.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/town-map-bw.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Jeff Garrison',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/landorus-therian.png',
    sprite2: '../../../assets/sprites/crobat.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Toby Nelson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/bronzong.png',
    sprite2: '../../../assets/sprites/aegislash.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Jimmy McClure',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/landorus-therian.png',
    sprite2: '../../../assets/sprites/crobat.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'David Richard',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/manectric-mega.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Orion Sutherland',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manectric.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/garbodor-ltr.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trubbish-poison-gas.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jirachi-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shadow-triad.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/cassius.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/crushing-hammer-xy.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/enhanced-hammer.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/switch.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/head-ringer.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-lightning.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Jacob Van Wagner',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/rayquaza-mega.png',
    sprite2: '../../../assets/sprites/bronzong.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/m-rayquaza-ex-colorless.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rayquaza-ex-ros.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bronzong.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bronzor.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/aegislash-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/cobalion-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/kecleon.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/altaria-ros.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/swablu-ros2.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/exeggcute.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/winona.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mega-turbo.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sacred-ash.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/town-map-bw.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rayquaza-spirit-link.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sky-field.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-metal.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Harrison Leven',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/bunnelby.png',
    sprite2: '../../../assets/sprites/slurpuff.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Andrew Jackson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/landorus-therian.png',
    sprite2: '../../../assets/sprites/crobat.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png',
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Lance Bradshaw',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/kyogre-primal.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/primal-kyogre-ex.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/kyogre-ex.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/suicune.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/kyurem.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/articuno.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professors-letter.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/dive-ball.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/energy-retrieval.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/kyogre-spirit-link.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shrine-of-memories.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/12.png',
      },
    ]
  },
  {
    firstName: 'James Staszel',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/rayquaza-mega.png',
    sprite2: '../../../assets/sprites/bronzong.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/m-rayquaza-ex-colorless.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rayquaza-ex-ros.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bronzong.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bronzor.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/aegislash-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/heatran.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/acro-bike.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sacred-ash.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rayquaza-spirit-link.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sky-field.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-metal.png',
        numImg: '../../../assets/05.png',
      },
      {
        cardImg: '../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Patrick Martinez',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/manectric-mega.png',
    sprite2: '../../../assets/sprites/empoleon.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/m-manectric-ex.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-ex.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ninetales-prc.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vulpix-prc.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/empoleon.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jirachi-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/kyurem.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/archie-ace-in-hole.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-spirit-link.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-lightning.png',
        numImg: '../../../assets/05.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/05.png',
      },
    ]
  },
  {
    firstName: 'Emiliano Rosales',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/crobat.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/04.png'
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
        cardImg: '../../../assets/cards/2014-2016/super-scoop-up.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/03.png'
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
    firstName: 'Calvin Connor',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/manectric-mega.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/m-manectric-ex.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-ex.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/garbodor-ltr.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trubbish-poison-gas.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/empoleon.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jirachi-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/exeggcute.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/archie-ace-in-hole.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-spirit-link.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-lightning.png',
        numImg: '../../../assets/05.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/05.png',
      },
    ]
  },
  {
    firstName: 'Justin Poist',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/landorus-therian.png',
    sprite2: '../../../assets/sprites/crobat.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/landorus-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hawlucha.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/crobat.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/golbat.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/zubat-free-flight.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lucario-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/miltank.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/scoop-up-cyclone.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-scoop-up.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/repeat-ball.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/focus-sash.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silent-lab.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/fighting-stadium.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-fighting.png',
        numImg: '../../../assets/05.png',
      },
      {
        cardImg: '../../../assets/cards/energy/strong-energy.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Alex Schemanske',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/rayquaza-mega.png',
    sprite2: '../../../assets/sprites/bronzong.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/m-rayquaza-ex-colorless.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rayquaza-ex-ros.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bronzong.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bronzor.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/aegislash-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/heatran.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/acro-bike.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sacred-ash.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rayquaza-spirit-link.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sky-field.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-metal.png',
        numImg: '../../../assets/05.png',
      },
      {
        cardImg: '../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Xander Pero',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manectric.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-ex.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jynx.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/absol.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mr-mime.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-center-lady.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/switch.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/head-ringer.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-lightning.png',
        numImg: '../../../assets/06.png',
      },
      {
        cardImg: '../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Evan Smith',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/crobat.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-ex.png',
        numImg: '../../../assets/03.png'
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
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/absol.png',
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
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-fan-club.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/scoop-up-cyclone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-scoop-up.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/repeat-ball.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/enhanced-hammer.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/switch.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professors-letter.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/head-ringer.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-lightning.png',
        numImg: '../../../assets/06.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Ryan Chu',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/landorus-therian.png',
    sprite2: '../../../assets/sprites/crobat.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/landorus-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hawlucha.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/crobat.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/golbat.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/zubat-free-flight.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lucario-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/korrina.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/scoop-up-cyclone.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-scoop-up.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/repeat-ball.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professors-letter.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/focus-sash.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/fighting-stadium.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silent-lab.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-fighting.png',
        numImg: '../../../assets/05.png',
      },
      {
        cardImg: '../../../assets/cards/energy/strong-energy.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Reece Nighswander',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gengar.png',
    sprite2: '../../../assets/sprites/trevenant.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/gengar-ex.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trevenant.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/phantump-astonish.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sigilyph-ltr.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/wally.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silent-lab.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-psychic.png',
        numImg: '../../../assets/05.png',
      },
      {
        cardImg: '../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/energy/mystery-energy.png',
        numImg: '../../../assets/03.png',
      },
    ]
  },
  {
    firstName: 'Travis Beckwith',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-ex.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/garbodor-ltr.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trubbish-poison-gas.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mewtwo-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/cassius.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/acro-bike.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/enhanced-hammer.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/head-ringer.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-lightning.png',
        numImg: '../../../assets/05.png',
      },
      {
        cardImg: '../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Easton Ours',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/groudon-primal.png',
    sprite2: '../../../assets/sprites/lucario-mega.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/groudon-ex-primal.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/groudon-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/landorus-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hawlucha.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mega-lucario-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lucario-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/korrina.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/maxie-hidden-ball-trick.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/scramble-switch.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mega-turbo.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/enhanced-hammer.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/switch.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professors-letter.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/groudon-spirit-link.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/wide-lens.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silent-lab.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/fighting-stadium.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-fighting.png',
        numImg: '../../../assets/08.png',
      },
      {
        cardImg: '../../../assets/cards/energy/strong-energy.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Michael Minas',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/garbodor-ltr.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trubbish-poison-gas.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jirachi-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/scoop-up-cyclone.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/crushing-hammer-xy.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/dive-ball.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/enhanced-hammer.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/switch.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/head-ringer.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-lightning.png',
        numImg: '../../../assets/05.png',
      },
      {
        cardImg: '../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Isaac Bunker',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/snorlax.png',
    sprite2: '../../../assets/sprites/suicune.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/snorlax-block.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/suicune.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/aegislash-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jirachi-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/team-flare-grunt.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hugh.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shadow-triad.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/dowsing-machine.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/crushing-hammer-xy.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-scoop-up.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sacred-ash.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/target-whistle.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-catcher-flip.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../../assets/03.png',
      },
    ]
  },
  {
    firstName: 'Asher Donham',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/pumpkaboo.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/joltik.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lampent.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mew-ex-ltr.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jirachi-ex.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/empoleon.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mr-mime.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/archie-ace-in-hole.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/acro-bike.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/revive.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
        numImg: '../../../assets/01.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/02.png',
      },
      {
        cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
        numImg: '../../../assets/04.png',
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/03.png',
      },
      {
        cardImg: '../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../assets/04.png',
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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2015 US Nats";

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

    if (item.list === '../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2015 US Nats";

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

    if (item.list === '../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2015 US Nats";

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
