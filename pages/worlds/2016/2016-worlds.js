const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Shintaro Ito',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/audino-mega.png',
    list: '../../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/m-audino-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/audino-ex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hoopa-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/magearna-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/cobalion.png',
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
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-center-lady.png',
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
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mega-turbo.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-rod.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/audino-spirit-link.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/parallel-city.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-metal.png',
        numImg: '../../../assets/06.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-dce.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Cody Walinski',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/greninja.png',
    sprite2: '../../../assets/sprites/talonflame.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/greninja-break.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/greninja.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/greninja-shuriken.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/frogadier-water-duplicates.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/froakie-bubble.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/talonflame.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ace-trainer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/fisherman.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-ranger.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/dive-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/level-ball.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-rod.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bursting-balloon.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/08.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-splash.png',
        numImg: '../../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Samuel Hough',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/vileplume.png',
    sprite2: '../../../assets/sprites/jolteon.png',
    list: '../../../assets/list-icon.png',
    type: 'grass',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/vileplume.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/gloom.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/oddish.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jolteon-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/glaceon-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/aegislash-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trevenant-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/magearna-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/yveltal-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/04.png'
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
        cardImg: '../../../assets/cards/2014-2016/ninja-boy.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/level-ball.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/forest-of-giant-plants.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/parallel-city.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-lightning.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-rainbow.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-dce.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Ross Cawthon',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/vespiquen.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/vespiquen.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/combee.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/yveltal.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/octillery.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/remoraid-ion-pool.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/unown.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/druddigon.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/malamar-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
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
        cardImg: '../../../assets/cards/2014-2016/brigette.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/teammates.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
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
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/revitalizer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/special-charge.png',
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
        cardImg: '../../../assets/cards/energy/xy-energy-dark.png',
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-dce.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Bert Wolters',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/greninja.png',
    sprite2: '../../../assets/sprites/talonflame.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/greninja-break.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/greninja.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/greninja-shuriken.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/frogadier-water-duplicates.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/froakie-bubble.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/talonflame.png',
        numImg: '../../../assets/03.png'
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
        cardImg: '../../../assets/cards/2014-2016/ace-trainer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/wally.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/fisherman.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/delinquent.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/dive-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/level-ball.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-rod.png',
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2014-2016/bursting-balloon.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/08.png'
      }
    ]
  },
  {
    firstName: 'Brad Curcio',
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
        cardImg: '../../../assets/cards/2014-2016/mew.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
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
        cardImg: '../../../assets/cards/2014-2016/pokemon-ranger.png',
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/puzzle-of-time.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/special-charge.png',
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2014-2016/target-whistle.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ffb.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-dce.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Luca Schuster',
    flag: '../../../assets/flags/austria.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/vespiquen.png',
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
        cardImg: '../../../assets/cards/2014-2016/vespiquen.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/combee.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/teammates.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
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
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/puzzle-of-time.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/town-map.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/target-whistle.png',
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2014-2016/special-charge.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-dce.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Gustavo Wada',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/bronzong.png',
    sprite2: '../../../assets/sprites/aegislash.png',
    list: '../../../assets/list-icon.png',
    type: 'metal',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/bronzong-break.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bronzong.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bronzor.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/cobalion.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/aegislash-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/genesect-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/magearna-ex.png',
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2014-2016/az.png',
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
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/max-elixir.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ffb.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sky-field.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-metal.png',
        numImg: '../../../assets/10.png'
      },
    ]
  },
  {
    firstName: 'Freya Pearce',
    flag: '../../../assets/flags/uk.png',
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
        cardImg: '../../../assets/cards/2014-2016/mew.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/latios-ex.png',
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ninja-boy.png',
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2014-2016/super-scoop-up.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-psychic.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-dce.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Kojiro Tsuruta',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/volcanion.png',
    list: '../../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/volcanion-ex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/volcanion.png',
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
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/blacksmith.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-ranger.png',
        numImg: '../../../assets/02.png'
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
        cardImg: '../../../assets/cards/2014-2016/acro-bike.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/energy-retrieval.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ffb.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-fire.png',
        numImg: '../../../assets/13.png'
      }
    ]
  },
  {
    firstName: 'Kazuki Kasahara',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/volcanion.png',
    list: '../../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/volcanion-ex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/volcanion.png',
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
        cardImg: '../../../assets/cards/2014-2016/blacksmith.png',
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
        cardImg: '../../../assets/cards/2014-2016/pokemon-ranger.png',
        numImg: '../../../assets/02.png'
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
        cardImg: '../../../assets/cards/2014-2016/energy-retrieval.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/switch.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ffb.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/scortched-earth.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-fire.png',
        numImg: '../../../assets/13.png'
      }
    ]
  },
  {
    firstName: 'Brandon Flowers',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/vespiquen.png',
    sprite2: '../../../assets/sprites/vileplume.png',
    list: '../../../assets/list-icon.png',
    type: 'grass',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/vespiquen.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/combee.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vileplume.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/gloom.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/oddish.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/unown.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bunnelby.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/toxicroak-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2014-2016/acro-bike.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/revitalizer.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/special-charge.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/forest-of-giant-plants.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-dce.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Hiroki Yano',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/greninja.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Yee Wei Chun',
    flag: '../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Eric Gansman',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
    list: '../../../assets/list-icon.png',
    type: 'purple',
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
        cardImg: '../../../assets/cards/2014-2016/mew.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-ranger.png',
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2014-2016/puzzle-of-time.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/captivating-pokepuff.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/target-whistle.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-catcher-flip.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ffb.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-dce.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Jacob Lesage',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/bronzong.png',
    sprite2: '../../../assets/sprites/aegislash.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Kian Amini',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/galvantula.png',
        numImg: '../../../assets/01.png'
      },
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
        cardImg: '../../../assets/cards/2014-2016/mew.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
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
        cardImg: '../../../assets/cards/2014-2016/pokemon-ranger.png',
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/puzzle-of-time.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/03.png'
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
        cardImg: '../../../assets/cards/2014-2016/target-whistle.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/special-charge.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ffb.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-dce.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Brit Pybas',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manaphy.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manaphy-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex-grass.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hoopa-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/glaceon-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/articuno.png',
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
        cardImg: '../../../assets/cards/2014-2016/delinquent.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
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
        cardImg: '../../../assets/cards/2014-2016/team-flare-grunt.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
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
        cardImg: '../../../assets/cards/2014-2016/max-elixir.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/energy-switch.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ffb.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/parallel-city.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/12.png'
      }
    ]
  },
  {
    firstName: 'Frank Diaz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manaphy.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Simone Zucchelli',
    flag: '../../../assets/flags/italy.png',
    sprite1: '../../../assets/sprites/bronzong.png',
    sprite2: '../../../assets/sprites/genesect.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'TJ Traquair',
    flag: '../../../assets/flags/canada.png',
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
        cardImg: '../../../assets/cards/2014-2016/mew.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/octillery.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/remoraid-ion-pool.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-ranger.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/puzzle-of-time.png',
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
        cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/target-whistle.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/special-charge.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ffb.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-dce.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Shin Akiyama',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/audino-mega.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Patrick Landis',
    flag: '../../../assets/flags/switzerland.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Ciaran Farah',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/vespiquen.png',
    sprite2: '../../../assets/sprites/vileplume.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Michael Pramawat',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
    list: '../../../assets/sprites/blank.png',
    type: '', // galvantula
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Jit Min Lim',
    flag: '../../../assets/flags/singapore.png',
    sprite1: '../../../assets/sprites/vespiquen.png',
    sprite2: '../../../assets/sprites/excadrill.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Gawein Wagner',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/bronzong.png',
    sprite2: '../../../assets/sprites/aegislash.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Takuya Yoneda',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Se Jun Park',
    flag: '../../../assets/flags/korea.png',
    sprite1: '../../../assets/sprites/carbink.png',
    sprite2: '../../../assets/sprites/vileplume.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/zygarde-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lucario-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/carbink-break.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/carbink-safegaurd.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vileplume.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/gloom.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/oddish.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/zygarde.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jirachi.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/korrina.png',
        numImg: '../../../assets/02.png'
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
        cardImg: '../../../assets/cards/2014-2016/level-ball.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/heavy-ball.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/revitalizer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ffb.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/forest-of-giant-plants.png',
        numImg: '../../../assets/04.png'
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
    firstName: 'Paul Johnston',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manaphy.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manaphy-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/glaceon-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/aurorus-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hoopa-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/articuno.png',
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
        cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
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
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/max-elixir.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/energy-switch.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-rod.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/enhanced-hammer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ffb.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/11.png'
      }
    ]
  },
  {
    firstName: 'Ryo Yamamotot',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Fabien Pujol',
    flag: '../../../assets/flags/france.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/sceptile-mega.png',
    list: '../../../assets/list-icon.png',
    type: 'grass',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/m-sceptile-ex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sceptile-ex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-center-lady.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/skyla-bkp.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/steven.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shauna.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/fisherman.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/giovannis-scheme.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-ranger.png',
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
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mega-turbo.png',
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
        cardImg: '../../../assets/cards/2014-2016/energy-retrieval.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sceptile-spirit-link.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-grass.png',
        numImg: '../../../assets/10.png'
      }
    ]
  }
]

let seniors = [
  {
    firstName: 'Jesper Eriksen',
    flag: '../../../assets/flags/denmark.png',
    sprite1: '../../../assets/sprites/yanmega.png',
    sprite2: '../../../assets/sprites/vespiquen.png',
    list: '../../../assets/list-icon.png',
    type: 'grass',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/yanmega-break.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/yanmega.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/yanma.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vespiquen.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/combee.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ariados.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/spinarak.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/judge.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
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
        cardImg: '../../../assets/cards/2014-2016/level-ball.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/revitalizer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/special-charge.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bursting-balloon.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/forest-of-giant-plants.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-dce.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Connor Pedersen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/crobat.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
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
        cardImg: '../../../assets/cards/2014-2016/zubat-phantom-forces.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lugia-ex-ces.png',
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/delinquent.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/skyla-bkp.png',
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
        cardImg: '../../../assets/cards/2014-2016/super-scoop-up.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-rod.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ffb.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silent-lab.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-dce.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Raphael Souto',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/trevenant.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/trevenant-break.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trevenant.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/phantump-ascension.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/steven.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/team-flare-grunt.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/wally.png',
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/crushing-hammer.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-rod.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/level-ball.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/head-ringer.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-psychic.png',
        numImg: '../../../assets/08.png'
      }
    ]
  },
  {
    firstName: 'Calvin Conno',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/vespiquen.png',
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
        cardImg: '../../../assets/cards/2014-2016/vespiquen.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/combee.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/unown.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-ranger.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/teammates.png',
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
        cardImg: '../../../assets/cards/2014-2016/puzzle-of-time.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/town-map.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ffb.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-dce.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Attar Ricco',
    flag: '../../../assets/flags/indonesia.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/galvantula.png',
        numImg: '../../../assets/01.png'
      },
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
        cardImg: '../../../assets/cards/2014-2016/mew.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-ranger.png',
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/puzzle-of-time.png',
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
        cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/target-whistle.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/town-map.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ffb.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-lightning.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-dce.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Spencer Perez-Dormitzer',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/manectric-mega.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../../assets/cards/2014-2016/garbodor-garbotoxin.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trubbish-acid-spray.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/raikou.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jolteon-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hoopa-ex.png',
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
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2014-2016/max-elixir.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/max-potion.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-rod.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-spirit-link.png',
        numImg: '../../../assets/03.png'
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
        numImg: '../../../assets/09.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-dce.png',
        numImg: '../../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Tanner Hurley',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/greninja.png',
    sprite2: '../../../assets/sprites/talonflame.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/greninja-break.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/greninja.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/greninja-shuriken.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/frogadier-water-duplicates.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/froakie-bubble.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/talonflame.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jirachi.png',
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
        cardImg: '../../../assets/cards/2014-2016/ace-trainer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/fisherman.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-ranger.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/dive-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/level-ball.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-rod.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/town-map.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professors-letter.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/energy-retrieval.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../assets/07.png'
      },
      {
        cardImg: '../../../assets/cards/energy/question-mark.png',
        numImg: '../../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Kim Hyeok',
    flag: '../../../assets/flags/korea.png',
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
        cardImg: '../../../assets/cards/2014-2016/mew.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
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
        cardImg: '../../../assets/cards/2014-2016/pokemon-ranger.png',
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/puzzle-of-time.png',
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
        cardImg: '../../../assets/cards/2014-2016/special-charge.png',
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2014-2016/ffb.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-dce.png',
        numImg: '../../../assets/04.png'
      }
    ]
  }
]

let juniors = [
  {
    firstName: 'Shunto Sadahiro',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/darkrai.png',
    sprite2: '../../../assets/sprites/giratina-origin.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/darkrai-ex-bkp.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/giratina-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hoopa-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/yveltal.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/garbodor-garbotoxin.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trubbish-acid-spray.png',
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
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-ranger.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/max-elixir.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-rod.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ffb.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016//float-stone.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/parallel-city.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/reverse-valley.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-dark.png',
        numImg: '../../../assets/10.png'
      },
      {
        cardImg: '../../../assets/cards/energy/double-dragon-energy.png',
        numImg: '../../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Riku Ushirosaka',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/trevenant.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/trevenant-break.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trevenant.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/phantump-ascension.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/wally.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/team-flare-grunt.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/crushing-hammer.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/red-card.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-rod.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/head-ringer.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-psychic.png',
        numImg: '../../../assets/07.png'
      }
    ]
  },
  {
    firstName: 'Roan Godfrey-Robbins',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/trevenant.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/trevenant-break.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trevenant.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/phantump-ascension.png',
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
        cardImg: '../../../assets/cards/2014-2016/wally.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/team-flare-grunt.png',
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2014-2016/delinquent.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/red-card.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-rod.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bursting-balloon.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/head-ringer.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/silent-lab.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-psychic.png',
        numImg: '../../../assets/07.png'
      }
    ]
  },
  {
    firstName: 'Yuta Ozawa',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/darkrai.png',
    sprite2: '../../../assets/sprites/giratina-origin.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/darkrai-ex-bkp.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/giratina-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hydreigon-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hoopa-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/yveltal.png',
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
        cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/delinquent.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/max-elixir.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ffb.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016//float-stone.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/parallel-city.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-dark.png',
        numImg: '../../../assets/09.png'
      },
      {
        cardImg: '../../../assets/cards/energy/double-dragon-energy.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Kai Abe',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/darkrai.png',
    sprite2: '../../../assets/sprites/giratina-origin.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/darkrai-ex-bkp.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/giratina-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hydreigon-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hoopa-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/yveltal.png',
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
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/delinquent.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/max-elixir.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ffb.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016//float-stone.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/parallel-city.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-dark.png',
        numImg: '../../../assets/09.png'
      },
      {
        cardImg: '../../../assets/cards/energy/double-dragon-energy.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Enrico Marini',
    flag: '../../../assets/flags/italy.png',
    sprite1: '../../../assets/sprites/bronzong.png',
    sprite2: '../../../assets/sprites/aegislash.png',
    list: '../../../assets/list-icon.png',
    type: 'metal',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/bronzong-break.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bronzong.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bronzong-metal-fortress.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bronzor.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/genesect-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/aegislash-ex.png',
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
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
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
        cardImg: '../../../assets/cards/2014-2016/max-elixir.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-rod.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ffb.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/assault-vest.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sky-field.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-metal.png',
        numImg: '../../../assets/11.png'
      },
    ]
  },
  {
    firstName: 'Asaki Hasegawa',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/darkrai.png',
    sprite2: '../../../assets/sprites/giratina-origin.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/darkrai-ex-bkp.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/giratina-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hydreigon-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hoopa-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/yveltal.png',
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
        cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/delinquent.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/max-elixir.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ffb.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016//float-stone.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/parallel-city.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-dark.png',
        numImg: '../../../assets/10.png'
      },
      {
        cardImg: '../../../assets/cards/energy/double-dragon-energy.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Christian Moreno',
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
        cardImg: '../../../assets/cards/2014-2016/mew.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/03.png'
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
        cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-ranger.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
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
        cardImg: '../../../assets/cards/2014-2016/puzzle-of-time.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/enhanced-hammer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/special-charge.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/town-map.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/target-whistle.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-catcher-flip.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ffb.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-dce.png',
        numImg: '../../../assets/04.png'
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2016 Worlds";

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
          console.log('here')
          card.addEventListener('click', () => {
              card.querySelector('.pok-card-small').classList.add('large-card');
              document.querySelector('.second-behind-modal').style.display = 'block';
              if (card.querySelector('.pok-card-small').classList.contains('large-card')) {
                document.querySelector('.second-behind-modal').addEventListener('click', () => {
                      card.querySelector('.pok-card-small').classList.remove('large-card');
                      document.querySelector('.second-behind-modal').style.display = 'none';
                  })
              }
          })
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2016 Worlds";

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
          console.log('here')
          card.addEventListener('click', () => {
              card.querySelector('.pok-card-small').classList.add('large-card');
              document.querySelector('.second-behind-modal').style.display = 'block';
              if (card.querySelector('.pok-card-small').classList.contains('large-card')) {
                document.querySelector('.second-behind-modal').addEventListener('click', () => {
                      card.querySelector('.pok-card-small').classList.remove('large-card');
                      document.querySelector('.second-behind-modal').style.display = 'none';
                  })
              }
          })
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2016 Worlds";

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
          console.log('here')
          card.addEventListener('click', () => {
              card.querySelector('.pok-card-small').classList.add('large-card');
              document.querySelector('.second-behind-modal').style.display = 'block';
              if (card.querySelector('.pok-card-small').classList.contains('large-card')) {
                document.querySelector('.second-behind-modal').addEventListener('click', () => {
                      card.querySelector('.pok-card-small').classList.remove('large-card');
                      document.querySelector('.second-behind-modal').style.display = 'none';
                  })
              }
          })
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
