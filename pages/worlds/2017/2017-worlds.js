const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Diego Cassiraga',
    flag: '../../../assets/flags/argentina.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    list: '../../../assets/list-icon.png',
    type: 'fairy',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17/gardevoir-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/gallade.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/kirlia.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/ralts-kiss.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/octillery.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/remoraid-wild-river.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/diancie.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/vulpix-alolan.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/n.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/acerola.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/brigette.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/rare-candy.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/rescue-stretcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/super-rod.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/choice-band.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-fairy.png',
        numImg: '../../../assets/07.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/wonder-energy.png',
        numImg: '../../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Naoto Suzuki',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/golisopod.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'grass',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17/golisopod-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/wimpod.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/garbodor-trashalanche.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/tapu-koko-flying-flip.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/n.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/acerola.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/brigette.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/teammates.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/rescue-stretcher.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/heavy-ball.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/float-stone.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/choice-band.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-grass.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-rainbow.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce.png',
        numImg: '../../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Xander Pero',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/espeon.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17/espeon-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/flareon.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/eevee.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/garbodor-trashalanche.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/n.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/brigette.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/teammates.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/rescue-stretcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/float-stone.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/choice-band.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-psychic.png',
        numImg: '../../../assets/08.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Sho Sasaki',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/golisopod.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'grass',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17/golisopod-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/wimpod.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/garbodor-trashalanche.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/tapu-koko-flying-flip.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/drampa-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/magearna-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/n.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/acerola.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/brigette.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/teammates.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/rescue-stretcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/energy-loto.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/choice-band.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/float-stone.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-grass.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-rainbow.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Reiji Nishiguchi',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/garbodor.png',
    sprite2: '../../../assets/sprites/necrozma.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17/garbodor-trashalanche.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/necrozma-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/espeon-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/tapu-koko-flying-flip.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/mewtwo.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/n.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/acerola.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/brigette.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/teammates.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/ninja-boy.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/rescue-stretcher.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/enhanced-hammer.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/float-stone.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/choice-band.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-psychic.png',
        numImg: '../../../assets/07.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Jimmy Pendarvis',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/espeon.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17/espeon-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/flareon.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/eevee.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/garbodor-trashalanche.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/n.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/brigette.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/teammates.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/rescue-stretcher.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/float-stone.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/choice-band.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-psychic.png',
        numImg: '../../../assets/08.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Pablo Meza',
    flag: '../../../assets/flags/mexico.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    list: '../../../assets/list-icon.png',
    type: 'fairy',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17/gardevoir-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/gallade.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/kirlia.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/ralts-kiss.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/octillery.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/remoraid-wild-river.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/diancie.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/n.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/lysandre.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/brigette.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/teammates.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/fisherman.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/rare-candy.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/rescue-stretcher.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/choice-band.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/float-stone.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-fairy.png',
        numImg: '../../../assets/07.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/wonder-energy.png',
        numImg: '../../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Sam Chen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/drampa.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17/drampa-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/garbodor-trashalanche.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/n.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/acerola.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/brigette.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/teammates.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/plumeria.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/rescue-stretcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/super-rod.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/float-stone.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/choice-band.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-psychic.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-rainbow.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Takuya Yoneda',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/ho-oh.png',
    sprite2: '../../../assets/sprites/salazzle.png',
    list: '../../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17/ho-oh-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/salazzle-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/salandit.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/volcanion-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/turtonator-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/volcanion.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/sudowoodo.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/kiawe.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/n.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/switch.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/super-rod.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/choice-band.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/float-stone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-fire.png',
        numImg: '../../../assets/14.png'
      }
    ]
  },
  {
    firstName: 'Jimmy Wuyts',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/volcanion.png',
    sprite2: '../../../assets/sprites/turtonator.png',
    list: '../../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17/volcanion.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/volcanion-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/turtonator-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/starmie.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/staryu.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/n.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/acerola.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../../assets/01.png'
      },      {
        cardImg: '../../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/rescue-stretcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/ffb.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/float-stone.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/brooklet-hill.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-fire.png',
        numImg: '../../../assets/14.png'
      }
    ]
  },
  {
    firstName: 'Alex Silva',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/drampa.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Gustavo Wada',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/decidueye.png',
    sprite2: '../../../assets/sprites/vileplume.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Frank Diaz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/drampa.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17/drampa-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/garbodor-trashalanche.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/n.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/plumeria.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/brigette.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/rescue-stretcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/choice-band.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/float-stone.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-psychic.png',
        numImg: '../../../assets/07.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-rainbow.png',
        numImg: '../../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Joey Ho',
    flag: '../../../assets/flags/singapore.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/rayquaza-mega.png',
    list: '../../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17/rayquaza-ex-mega.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/rayquaza-ex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/hoopa-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/tapu-koko-flying-flip.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/sudowoodo.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/n.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/skyla.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/pokemon-fan-club.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/mega-turbo.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/rescue-stretcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/choice-band.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/float-stone.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/rayquaza-spirit-link.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/sky-field.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-lightning.png',
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Freya Pearce',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/rayquaza-mega.png',
    list: '../../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17/rayquaza-ex-mega.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/rayquaza-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/hoopa-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/dragonite-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/magearna-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/unown.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/oranguru.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/tapu-koko-flying-flip.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/lysandre.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/n.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/skyla.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/mallow.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/mega-turbo.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/rescue-stretcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/rayquaza-spirit-link.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/float-stone.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/sky-field.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-metal.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Kian Amini',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/drampa.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Takeshi Tosa',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/ho-oh.png',
    sprite2: '../../../assets/sprites/salazzle.png',
    list: '../../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17/ho-oh-gx.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/salazzle-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/salandit.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/volcanion-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/turtonator-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/volcanion.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/sudowoodo.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/kiawe.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/n.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/switch.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/super-rod.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/choice-band.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/float-stone.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-fire.png',
        numImg: '../../../assets/14.png'
      }
    ]
  },
  {
    firstName: 'Samuel Hough',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/greninja.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17/greninja-break.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/greninja.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/frogadier-water-duplicates.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/froakie-bubble.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/octillery.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/n.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/fisherman.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/dive-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/rescue-stretcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/super-rod.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/enhanced-hammer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/choice-band.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/brooklet-hill.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-water.png',
        numImg: '../../../assets/06.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-splash.png',
        numImg: '../../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Masataka Hirano',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Shun Ito',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/sylveon.png',
    list: '../../../assets/list-icon.png',
    type: 'fairy',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17/gardevoir-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/kirlia-calm-mind.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/ralts-kiss.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/sylveon-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/flareon.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/eevee.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/n.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/acerola.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/brigette.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/delinquent.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/lysandre.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/rare-candy.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/rescue-stretcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/choice-band.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-fairy.png',
        numImg: '../../../assets/08.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/wonder-energy.png',
        numImg: '../../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Kazuki Kasahara',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/golisopod.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Jit Min Lim',
    flag: '../../../assets/flags/singapore.png',
    sprite1: '../../../assets/sprites/decidueye.png',
    sprite2: '../../../assets/sprites/golisopod.png',
    list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Tord Reklev',
    flag: '../../../assets/flags/norway.png',
    sprite1: '../../../assets/sprites/drampa.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17/drampa-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/garbodor-trashalanche.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/wobbuffet.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/n.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/acerola.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/brigette.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/teammates.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/rescue-stretcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/float-stone.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/choice-band.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-psychic.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-rainbow.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Igor Costa',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/espeon.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Pedro Torres',
    flag: '../../../assets/flags/spain.png',
    sprite1: '../../../assets/sprites/volcanion.png',
    sprite2: '../../../assets/sprites/turtonator.png',
    list: '../../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17/volcanion.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/volcanion-ex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/turtonator-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/ho-oh-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/hoopa-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/starmie.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/staryu.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/n.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/rescue-stretcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/ffb.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/float-stone.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/sky-field.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-fire.png',
        numImg: '../../../assets/13.png'
      }
    ]
  },
  {
    firstName: 'Jindrich Nepevny',
    flag: '../../../assets/flags/czech-republic.png',
    sprite1: '../../../assets/sprites/volcanion.png',
    sprite2: '../../../assets/sprites/turtonator.png',
    list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Brad Curcio',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/espeon.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Brent Tonisson',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/drampa.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Connor Finton',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/rayquaza-mega.png',
    list: '../../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17/rayquaza-ex-mega.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/rayquaza-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/hoopa-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/dragonite-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/magearna-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/sudowoodo.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/oranguru.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/n.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/lysandre.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/skyla.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/acerola.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/mega-turbo.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/rescue-stretcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/special-charge.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/rayquaza-spirit-link.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/float-stone.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/sky-field.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-metal.png',
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Daniel Altavilla',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/drampa.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17/drampa-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/garbodor-trashalanche.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/tapu-fini-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/n.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/brigette.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/teammates.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/professor-kukui.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/team-flare-grunt.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/rescue-stretcher.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/choice-band.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/float-stone.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/po-town.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-psychic.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-rainbow.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Jordan Palmer',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/drampa.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17/drampa-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/garbodor-trashalanche.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/tapu-koko-flying-flip.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/magearna.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/n.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/brigette.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/teammates.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/acerola.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/ace-trainer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/team-flare-grunt.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/rescue-stretcher.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/choice-band.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/float-stone.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-psychic.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-rainbow.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Haruki Satoyama',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/decidueye.png',
    sprite2: '../../../assets/sprites/ninetales-alola.png',
    list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: []
  }
]

let seniors = [
    {
        firstName: 'Zachary Bokhari',
        flag: '../../../assets/flags/usa.png',
        sprite1: '../../../assets/sprites/blank.png',
        sprite2: '../../../assets/sprites/ninetales-alola.png',
        list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17/ninetales-gx-alolan.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/vulpix-alolan.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/octillery.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/remoraid-wild-river.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/tapu-lele-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/tapu-koko-flying-flip.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/sudowoodo.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/giratina.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/n.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/guzma.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/pokemon-center-lady.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/karen.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/brigette.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/professor-kukui.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/aqua-patch.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/field-blower.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/choice-band.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/float-stone.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018-17/rough-seas.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-water.png',
        numImg: '../../../assets/07.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce.png',
        numImg: '../../../assets/04.png'
      }
    ]
    },
    {
      firstName: 'Michael Long',
      flag: '../../../assets/flags/canada.png',
      sprite1: '../../../assets/sprites/blank.png',
      sprite2: '../../../assets/sprites/greninja.png',
      list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Takumi Kaji',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/sylveon.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Yuu Ito',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/drampa.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nick Conocenti',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/ninetales-alola.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Justin Lambert',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Connor Pedersen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/drampa.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tanner Hurley',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/decidueye.png',
    sprite2: '../../../assets/sprites/vileplume.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17',
        numImg: '../../../assets/04.png'
      },
    ]
  }
]

let juniors = [
  {
    firstName: 'Tobias Strømdahl',
    flag: '../../../assets/flags/norway.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Minaki Hasegawa',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kabu Fukase',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/golisopod.png',
    sprite2: '../../../assets/sprites/decidueye.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'William Wallace',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/xerneas-active.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Lucas Mancuso',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/drampa.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tsubasa Watanabe',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/golisopod.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Niko Ishida',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/xerneas-active.png',
    sprite2: '../../../assets/sprites/bisharp.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Regan Retzloff',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/xerneas-active.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018-17',
        numImg: '../../../assets/04.png'
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
