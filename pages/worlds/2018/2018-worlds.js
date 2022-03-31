const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Robin Schulz',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018/zoroark-gx.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/zorua.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/garbodor-trashalanche.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/garbodor-garbotoxin.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/trubbish-acid-spray.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/tapu-lele-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/kartana-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/n.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/brigette.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/guzma.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/professor-sycamore.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/cynthia.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/puzzle-of-time.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/mysterious-treasure.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/evosoda.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/field-blower.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/rescue-stretcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/enhanced-hammer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/town-map.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/float-stone.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/choice-band.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/parallel-city.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/unit-energy-lm.png',
        numImg: '../../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Jeff Kolenc',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/necrozma.png',
    banned: true,
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2018/malamar.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/inkay.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/marshadow-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/necrozma-dawn-wings.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/necrozma-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/mewtwo-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/tapu-lele-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/giratina.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/lunala-p.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/mimikyu.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/oranguru.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/cynthia.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/guzma.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/lillie.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/mysterious-treasure.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/acro-bike.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/field-blower.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/max-elixir.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/rescue-stretcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/float-stone.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-psychic.png',
        numImg: '../../../assets/10.png'
      }
    ]
  },
  {
    firstName: 'Klive Aw Junjie',
    flag: '../../../assets/flags/singapore.png',
    sprite1: '../../../assets/sprites/zygarde-complete.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2018/zygarde-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/lycanroc-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/rockruff-surprise-attack.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/buzzwole-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/regirock-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/tapu-lele-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/buzzwole.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/diancie-p.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/oranguru.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/n.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/guzma.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/cynthia.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/max-elixir.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/field-blower.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/rescue-stretcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/choice-band.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/float-stone.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/brooklet-hill.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/scorched-earth.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-fighting.png',
        numImg: '../../../assets/10.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/strong-energy.png',
        numImg: '../../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Pedro Torres',
    flag: '../../../assets/flags/spain.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/rayquaza.png',
    list: '../../../assets/list-icon.png',
    type: 'dragon',
    deck: [
      {
        cardImg: '../../../assets/cards/2018/rayquaza-gx.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/xurkitree-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/tapu-lele-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/marshadow-let-loose.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/oranguru.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/guzma.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/lillie.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/max-elixir.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/mysterious-treasure.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/puzzle-of-time.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/acro-bike.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/field-blower.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/rescue-stretcher.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/ultra-ball.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/escape-rope.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/super-rod.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/choice-band.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/float-stone.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-grass.png',
        numImg: '../../../assets/07.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-lightning.png',
        numImg: '../../../assets/07.png'
      }
    ]
  },
  {
    firstName: 'Eric Smith',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/rayquaza.png',
    list: '../../../assets/list-icon.png',
    type: 'dragon',
    deck: [
      {
        cardImg: '../../../assets/cards/2018/rayquaza-gx.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/tapu-lele-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/tapu-koko-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/latias-p.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/marshadow-let-loose.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/guzma.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/cynthia.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/n.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/max-elixir.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/mysterious-treasure.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/ultra-ball.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/field-blower.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/rescue-stretcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/super-rod.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/palpad.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/ffb.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/float-stone.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/parallel-city.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-grass.png',
        numImg: '../../../assets/07.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-lightning.png',
        numImg: '../../../assets/07.png'
      }
    ]
  },
  {
    firstName: 'Nicolas Galaz',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2018/buzzwole.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/buzzwole-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/tapu-lele-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/lycanroc-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/rockruff-surprise-attack.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/diancie-p.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/octillery.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/remoraid-ion-pool.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/guzma.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/n.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/cynthia.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/max-elixir.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/beast-ring.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/super-rod.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/choice-band.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/float-stone.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/brooklet-hill.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-fighting.png',
        numImg: '../../../assets/09.png'
      },
      {
        cardImg: '../../../assets/cards/energy/strong-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Shuto Itagaki',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/rayquaza.png',
    list: '../../../assets/list-icon.png',
    type: 'dragon',
    deck: [
      {
        cardImg: '../../../assets/cards/2018/rayquaza-gx.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/tapu-lele-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/tapu-koko-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/latias-p.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/oranguru.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/guzma.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/cynthia.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/n.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/max-elixir.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/mysterious-treasure.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/ultra-ball.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/field-blower.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/rescue-stretcher.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/palpad.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/float-stone.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/choice-band.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/ffb.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/parallel-city.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-grass.png',
        numImg: '../../../assets/08.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-lightning.png',
        numImg: '../../../assets/07.png'
      }
    ]
  },
  {
    firstName: 'Brian Miller',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/golisopod.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018/zoroark-gx.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/zorua.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/golisopod-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/wimpod.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/tapu-lele-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/mew-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/oranguru-resource-manag.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/brigette.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/guzma.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/n.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/professor-sycamore.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/cynthia.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/acerola.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/puzzle-of-time.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/evosoda.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/field-blower.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/counter-catcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/max-potion.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/float-stone.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/choice-band.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/parallel-city.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-grass.png',
        numImg: '../../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Martin Janous',
    flag: '../../../assets/flags/czech-republic.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/greninja.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2018/greninja-break.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/greninja.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/frogadier-water-duplicates.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/frogadier-gale-shuriken.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/froakie.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/starmie.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/staryu.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/cynthia.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/n.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/enhanced-hammer.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/evosoda.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/max-potion.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/super-rod.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/rescue-stretcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/brooklet-hill.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-water.png',
        numImg: '../../../assets/06.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-splash.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Michael Bergerac',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/rayquaza.png',
    list: '../../../assets/list-icon.png',
    type: 'dragon',
    deck: [
      {
        cardImg: '../../../assets/cards/2018/rayquaza-gx.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/tapu-lele-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/jolteon-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/marshadow-let-loose.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/oranguru.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/guzma.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/ninja-boy.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/volkner.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/acro-bike.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/max-elixir.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/mysterious-treasure.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/puzzle-of-time.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/ultra-ball.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/rescue-stretcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/super-rod.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/float-stone.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/wishful-baton.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-grass.png',
        numImg: '../../../assets/08.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-lightning.png',
        numImg: '../../../assets/07.png'
      }
    ]
  },
  {
    firstName: 'Masataka Hirano',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/gallade.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018/zoroark-gx.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/zorua.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/gallade.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/ralts.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/tapu-lele-gx.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/mew-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/sylveon-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/oranguru-resource-manag.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/n.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/brigette.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/guzma.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/professor-sycamore.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/acerola.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/cynthia.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/gladion.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/mallow.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/professor-kukui.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/team-flare-grunt.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/team-skull-grunt.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/puzzle-of-time.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/crushing-hammer.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/field-blower.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/rare-candy.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/enhanced-hammer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/max-potion.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/rescue-stretcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/counter-catcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/palpad.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/choice-band.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/float-stone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Fabien Pujol',
    flag: '../../../assets/flags/france.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/rayquaza.png',
    list: '../../../assets/list-icon.png',
    type: 'dragon',
    deck: [
      {
        cardImg: '../../../assets/cards/2018/rayquaza-gx.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/xurkitree-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/tapu-lele-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/marshadow-let-loose.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/oranguru.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/guzma.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/lillie.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/acro-bike.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/max-elixir.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/mysterious-treasure.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/puzzle-of-time.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/ultra-ball.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/rescue-stretcher.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/field-blower.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/super-rod.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/ffb.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/float-stone.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-grass.png',
        numImg: '../../../assets/07.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-lightning.png',
        numImg: '../../../assets/07.png'
      }
    ]
  },
  {
    firstName: 'Rahul Reddy',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/banette.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2018/garbodor-trashalanche.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/garbodor-garbotoxin.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/trubbish-acid-spray.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/banette-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/shuppet.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/tapu-lele-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/drampa-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/buzzwole.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/n.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/cynthia.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/guzma.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/brigette.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/ultra-ball.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/field-blower.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/mysterious-treasure.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/rescue-stretcher.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/float-stone.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/choice-band.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/parallel-city.png',
        numImg: '../../../assets/02.png'
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
        numImg: '../../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Jimmy Pendarvis',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018/zoroark-gx.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/zorua.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/garbodor-trashalanche.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/garbodor-garbotoxin.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/trubbish-acid-spray.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/trubbish.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/tapu-lele-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/mewtwo.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/n.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/brigette.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/guzma.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/cynthia.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/professor-sycamore.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/puzzle-of-time.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/field-blower.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/enhanced-hammer.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/mysterious-treasure.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/evosoda.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/rescue-stretcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/max-potion.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/float-stone.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/choice-band.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/parallel-city.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-psychic.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Christopher Schemanske',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2018/buzzwole.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/garbodor-trashalanche.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/trubbish-acid-spray.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/banette-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/shuppet.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/diancie-p.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/sudowoodo.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/regirock.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/octillery.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/remoraid-ion-pool.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/cynthia.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/professor-sycamore.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/n.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/guzma.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/nest-ball.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/field-blower.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/rescue-stretcher.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/energy-loto.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/choice-band.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/float-stone.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/shrineofpunush.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-rainbow.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/strong-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Hunter Butler',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2018/buzzwole.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/garbodor-trashalanche.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/garbodor-garbotoxin.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/trubbish-acid-spray.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/oranguru.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/diancie-p.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/sudowoodo.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/regirock.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/cynthia.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/n.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/guzma.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/field-blower.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/rescue-stretcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/special-charge.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/counter-catcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/choice-band.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/float-stone.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/shrineofpunush.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-rainbow.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/strong-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Luca Clavadetscher',
    flag: '../../../assets/flags/switzerland.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/greninja.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../../assets/cards/2018/greninja-break.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/greninja.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/frogadier-water-duplicates.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/frogadier-gale-shuriken.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/froakie.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/froakie-bubble.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/starmie.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/staryu.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/tapu-lele-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/cynthia.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/n.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/professor-sycamore.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/enhanced-hammer.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/evosoda.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/field-blower.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/max-potion.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/super-rod.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/brooklet-hill.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-water.png',
        numImg: '../../../assets/06.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-splash.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Marc Lutz',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/magcargo.png',
    list: '../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../assets/cards/2018/buzzwole.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/buzzwole-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/tapu-lele-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/magcargo.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/slugma.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/octillery.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/remoraid-ion-pool.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/diancie-p.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/guzma.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/cynthia.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/professor-sycamore.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/n.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/beast-ring.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/super-rod.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/field-blower.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/palpad.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/choice-band.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/float-stone.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/brooklet-hill.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-fighting.png',
        numImg: '../../../assets/08.png'
      },
      {
        cardImg: '../../../assets/cards/energy/strong-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Joey Ruettiger',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018/zoroark-gx.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/zorua.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/garbodor-trashalanche.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/garbodor-garbotoxin.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/trubbish-acid-spray.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/trubbish.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/tapu-lele-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/mewtwo.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/n.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/brigette.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/guzma.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/cynthia.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/professor-sycamore.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/puzzle-of-time.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/field-blower.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/enhanced-hammer.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/mysterious-treasure.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/evosoda.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/rescue-stretcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/max-potion.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/float-stone.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/choice-band.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/parallel-city.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-psychic.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Azul Griego',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018/zoroark-gx.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/zorua.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/garbodor-trashalanche.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/garbodor-garbotoxin.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/trubbish-acid-spray.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/trubbish.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/tapu-lele-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/mewtwo.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/n.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/brigette.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/guzma.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/cynthia.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/professor-sycamore.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/puzzle-of-time.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/ultra-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2018/field-blower.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/enhanced-hammer.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/mysterious-treasure.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/evosoda.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/rescue-stretcher.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/max-potion.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2018/float-stone.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2018/choice-band.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2018/parallel-city.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/energy-psychic.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Alessandro Cremascoli',
    flag: '../../../assets/flags/italy.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Takuya Yoneda',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/gallade.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Seitaro Shibuya',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Natalie Millar',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ryan Moorhouse',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Alex Schemanske',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kristian Hodas',
    flag: '../../../assets/flags/slovakia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/greninja.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Gustavo Wada',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/hoopa-unbound.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Angel Torres',
    flag: '../../../assets/flags/spain.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/rayquaza.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Treynor Wolfe',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Clifton Goh',
    flag: '../../../assets/flags/singapore.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/hoopa-unbound.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Philip Schulz',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/garbodor.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018',
        numImg: '../../../assets/04.png'
      },
    ]
  }
]

let seniors = [
    {
        firstName: 'Magnus Pederson',
        flag: '../../../assets/flags/denmark.png',
        sprite1: '../../../assets/sprites/banette.png',
        sprite2: '../../../assets/sprites/garbodor.png',
        list: '../../../assets/list-icon.png',
        type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018',
        numImg: '../../../assets/04.png'
      },
    ]
    },
    {
        firstName: 'Conner Pederson',
        flag: '../../../assets/flags/usa.png',
        sprite1: '../../../assets/sprites/buzzwole.png',
        sprite2: '../../../assets/sprites/garbodor.png',
        list: '../../../assets/list-icon.png',
        type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018',
        numImg: '../../../assets/04.png'
      },
    ]
    },{
        firstName: 'Takumi Kaji',
        flag: '../../../assets/flags/japan.png',
        sprite1: '../../../assets/sprites/buzzwole.png',
        sprite2: '../../../assets/sprites/lycanroc-midnight.png',
        list: '../../../assets/list-icon.png',
        type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018',
        numImg: '../../../assets/04.png'
      },
    ]
    },
    {
        firstName: 'Matthew Campbell',
        flag: '../../../assets/flags/usa.png',
        sprite1: '../../../assets/sprites/blank.png',
        sprite2: '../../../assets/sprites/greninja.png',
        list: '../../../assets/list-icon.png',
        type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018',
        numImg: '../../../assets/04.png'
      },
    ]
    },
    {
        firstName: 'Benjamin Branch-Trevathan',
        flag: '../../../assets/flags/usa.png',
        sprite1: '../../../assets/sprites/buzzwole.png',
        sprite2: '../../../assets/sprites/lycanroc-midnight.png',
        list: '../../../assets/list-icon.png',
        type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018',
        numImg: '../../../assets/04.png'
      },
    ]
    },
    {
        firstName: 'Caleb Banwarie',
        flag: '../../../assets/flags/canada.png',
        sprite1: '../../../assets/sprites/zoroark.png',
        sprite2: '../../../assets/sprites/garbodor.png',
        list: '../../../assets/list-icon.png',
        type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018',
        numImg: '../../../assets/04.png'
      },
    ]
    },
    {
        firstName: 'Jihun Choi',
        flag: '../../../assets/flags/korea.png',
        sprite1: '../../../assets/sprites/golisopod.png',
        sprite2: '../../../assets/sprites/garbodor.png',
        list: '../../../assets/list-icon.png',
        type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018',
        numImg: '../../../assets/04.png'
      },
    ]
    },
    {
        firstName: 'Tanner Hurley',
        flag: '../../../assets/flags/usa.png',
        sprite1: '../../../assets/sprites/zoroark.png',
        sprite2: '../../../assets/sprites/garbodor.png',
        list: '../../../assets/list-icon.png',
        type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018',
        numImg: '../../../assets/04.png'
      },
    ]
    }
]

let juniors = [
    {
        firstName: 'Naohito Inoue',
        flag: '../../../assets/flags/japan.png',
        sprite1: '../../../assets/sprites/buzzwole.png',
        sprite2: '../../../assets/sprites/lycanroc-midnight.png',
        list: '../../../assets/list-icon.png',
        type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018',
        numImg: '../../../assets/04.png'
      },
    ]
    },
    {
        firstName: 'Sebastian Enriquez',
        flag: '../../../assets/flags/usa.png',
        sprite1: '../../../assets/sprites/buzzwole.png',
        sprite2: '../../../assets/sprites/lycanroc-midnight.png',
        list: '../../../assets/list-icon.png',
        type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018',
        numImg: '../../../assets/04.png'
      },
    ]
    },
    {
        firstName: 'Rune Heiremans',
        flag: '../../../assets/flags/belgium.png',
        sprite1: '../../../assets/sprites/buzzwole.png',
        sprite2: '../../../assets/sprites/lycanroc-midnight.png',
        list: '../../../assets/list-icon.png',
        type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018',
        numImg: '../../../assets/04.png'
      },
    ]
    },
    {
        firstName: 'Walker Halliburton',
        flag: '../../../assets/flags/usa.png',
        sprite1: '../../../assets/sprites/zoroark.png',
        sprite2: '../../../assets/sprites/garbodor.png',
        list: '../../../assets/list-icon.png',
        type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018',
        numImg: '../../../assets/04.png'
      },
    ]
    },
    {
        firstName: 'Kota Onohara',
        flag: '../../../assets/flags/japan.png',
        sprite1: '../../../assets/sprites/naganadel.png',
        sprite2: '../../../assets/sprites/stakataka.png',
        list: '../../../assets/list-icon.png',
        type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018',
        numImg: '../../../assets/04.png'
      },
    ]
    },
    {
        firstName: 'Benjamin Bussert',
        flag: '../../../assets/flags/usa.png',
        sprite1: '../../../assets/sprites/buzzwole.png',
        sprite2: '../../../assets/sprites/garbodor.png',
        list: '../../../assets/list-icon.png',
        type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018',
        numImg: '../../../assets/04.png'
      },
    ]
    },
    {
        firstName: 'Joao Penteado',
        flag: '../../../assets/flags/brazil.png',
        sprite1: '../../../assets/sprites/buzzwole.png',
        sprite2: '../../../assets/sprites/garbodor.png',
        list: '../../../assets/list-icon.png',
        type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018',
        numImg: '../../../assets/04.png'
      },
    ]
    },
    {
        firstName: 'Sechan Oh',
        flag: '../../../assets/flags/korea.png',
        sprite1: '../../../assets/sprites/zoroark.png',
        sprite2: '../../../assets/sprites/garbodor.png',
        list: '../../../assets/list-icon.png',
        type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2018',
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
