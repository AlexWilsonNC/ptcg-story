const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Henry Brand',
    flag: '../../assets/flags/australia.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/mewtwo-mew-tagteam.png',  
    list: '../../assets/list-icon.png',
        type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/mewtwo-mew.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/solgaleo-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reshiram-charizard-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/deoxys-espeon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel-gx-dragon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cobalion-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/latios-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/magcargo-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jirachi-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/welder.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/steven-resolve.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/acro-bike.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electromagnetic-radar.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fire-crystal.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giant-hearth.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-teu.png',
        numImg: '../../assets/08.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Shintaro Ito',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blacephalon.png',
    sprite2: '../../assets/sprites/naganadel.png',
    list: '../../assets/list-icon.png',
        type: 'fire',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/blacephalon-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/poipole-spit.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/poipole-eye.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel-gx-dragon.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/heatran-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/welder.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/hapu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/beast-ring.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-space.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/heat-factory.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-teu.png',
        numImg: '../../assets/14.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-beast-p.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Blaine Hill',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/reshiram-charizard-tagteam.png',
    sprite2: '../../assets/sprites/volcanion-right.png',
    list: '../../assets/list-icon.png',
        type: 'fire',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/reshiram-charizard-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/volcanion.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/welder.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/greens-exploration.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lusamine.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/acro-bike.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-potion.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mixed-herbs.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fire-crystal.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-spinner.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fiery-flint.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giant-hearth.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lysandre-lab.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/shrineofpunush.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/heat-factory.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-teu.png',
        numImg: '../../assets/11.png'
      }
    ]
  },
  {
    firstName: 'Tord Reklev',
    flag: '../../assets/flags/norway.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/reshiram-charizard-tagteam.png',
    list: '../../assets/list-icon.png',
        type: 'fire',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/reshiram-charizard-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/heatran-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ninetales.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/vulpix.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/victini-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/turtonator.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/welder.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/acro-bike.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/super-scoop-up.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/palpad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giant-hearth.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/heat-factory.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-teu.png',
        numImg: '../../assets/18.png'
      }
    ]
  },
  {
    firstName: 'Kaiwen Cabbabe',
    flag: '../../assets/flags/australia.png',
        sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../assets/list-icon.png',
        type: 'lightning',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/raichu-alolan-raichu.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/sigilyph-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapukoko-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/volkner.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cyrus-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electropower.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electromagnetic-radar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/stadiumnav.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lysandre-lab.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../assets/11.png'
      }
    ]
  },
  {
    firstName: 'Paco Vilchez Barea',
    flag: '../../assets/flags/spain.png',
    sprite1: '../../assets/sprites/reshiram-charizard-tagteam.png',
    sprite2: '../../assets/sprites/volcanion-right.png',
    list: '../../assets/list-icon.png',
        type: 'fire',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/reshiram-charizard-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/volcanion.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/hoopa-evil-abomanatino.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/welder.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/greens-exploration.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/acro-bike.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mixed-herbs.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fire-crystal.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fiery-flint.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/shrineofpunush.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/heat-factory.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-teu.png',
        numImg: '../../assets/11.png'
      }
    ]
  },
  {
    firstName: 'Ryota Ishiyama',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/mewtwo-mew-tagteam.png',  
    list: '../../assets/list-icon.png',
        type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/mewtwo-mew.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/magcargo-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/solgaleo-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/flareon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/heatran-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/deoxys-espeon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jirachi-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/oranguru-resource-manag.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/welder.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/hapu.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giant-hearth.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lysandre-lab.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/heat-factory.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-teu.png',
        numImg: '../../assets/16.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Isaiah Williams',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/oranguru.png',
    sprite2: '../../assets/sprites/pidgeotto.png',
    list: '../../assets/list-icon.png',
        type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/oranguru-resource-manag.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgeotto.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgey.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/girafarig.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/articuno-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mars.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lt-surge.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tate-n-liza.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/brocks-grit.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/acro-bike.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/crushing-hammer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/chipchip-ice-axe.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/palpad.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-teu.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-recycle.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Hideki Sano',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/gardevoir-sylveon-tagteam.png',
    sprite2: '../../assets/sprites/xerneas-active.png',
    list: '../../assets/list-icon.png',
        type: 'fairy',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/gardevoir-sylveon-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/xerneas-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mimikyu-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/greens-exploration.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/judge.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/bills-analysis.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-potion.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-spinner.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/adventure-bag.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fairy-charm-lightning.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fairy-charm-ub.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fairy-charm-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/wondrous-lab.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/fairy-energy-teu.png',
        numImg: '../../assets/09.png'
      }
    ]
  },
  {
    firstName: 'Karl Peters',
    flag: '../../assets/flags/germany.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gardevoir-sylveon-tagteam.png',
    list: '../../assets/list-icon.png',
        type: 'fairy',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/gardevoir-sylveon-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/bills-analysis.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/coach-trainer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/greens-exploration.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mixed-herbs.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-potion.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/super-scoop-up.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-spinner.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fairy-charm-lightning.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fairy-charm-ub.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fairy-charm-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fairy-charm-dragon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/wondrous-lab.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/fairy-energy-teu.png',
        numImg: '../../assets/07.png'
      }
    ]
  },
  {
    firstName: 'Bert Wolters',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/mewtwo-mew-tagteam.png',  
    list: '../../assets/list-icon.png',
        type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/mewtwo-mew.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/solgaleo-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reshiram-charizard-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/deoxys-espeon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel-gx-dragon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cobalion-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/latios-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/magcargo-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jirachi-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dargonite-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/welder.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/steven-resolve.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/acro-bike.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electromagnetic-radar.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-recycle-system.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giant-hearth.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-teu.png',
        numImg: '../../assets/08.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Yoshiyuki Yamaguchi',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/reshiram-charizard-tagteam.png',
    list: '../../assets/list-icon.png',
        type: 'fire',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/reshiram-charizard-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/blacephalon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/heatran-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/oranguru-resource-manag.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/turtonator.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/welder.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/hapu.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tate-n-liza.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fire-crystal.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-potion.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/palpad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giant-hearth.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/shrineofpunush.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lysandre-lab.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-teu.png',
        numImg: '../../assets/12.png'
      }
    ]
  },
  {
    firstName: 'Jonathan Lanciano',
    flag: '../../assets/flags/argentina.png',
    sprite1: '../../assets/sprites/blacephalon.png',
    sprite2: '../../assets/sprites/naganadel.png',
    list: '../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/blacephalon-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel-gx-dragon.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/poipole-spit.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/poipole-eye.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/poipole-belt.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/welder.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tate-n-liza.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/brocks-grit.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/beast-ring.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/beast-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-space.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-teu.png',
        numImg: '../../assets/14.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-beast-p.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Shunpei Hosoya',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/gardevoir-sylveon-tagteam.png',
    sprite2: '../../assets/sprites/xerneas-active.png',
    list: '../../assets/list-icon.png',
    type: 'fairy',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/gardevoir-sylveon-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/xerneas-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/coach-trainer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/greens-exploration.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lusamine.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-potion.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-switch.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-spinner.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fairy-charm-lightning.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fairy-charm-ub.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lysandre-lab.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/fairy-energy-teu.png',
        numImg: '../../assets/10.png'
      }
    ]
  },
  {
    firstName: 'Gustavo Wada',
    flag: '../../assets/flags/brazil.png',
        sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../assets/sprites/blank.png',
        type: '',
    deck: []
  },
  {
    firstName: 'Zakary Krekler',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/weavile.png',
    sprite2: '../../assets/sprites/naganadel.png',
    list: '../../assets/list-icon.png',
        type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/weavile-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/weavile.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/sneasel-2nd-turn.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/sneasel.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/poipole-spit.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/darkrai-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/darkrai-umbreon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tyranitar-sableye.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/greninja-zoroark-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/hoopa-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/hapu.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/beast-ring.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-space.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/darkcity.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-teu.png',
        numImg: '../../assets/12.png'
      }
    ]
  },
  {
    firstName: 'Lucas Pereira',
    flag: '../../assets/flags/brazil.png',
        sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/raichu-alolan-raichu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/hoopa-evil-abomanatino.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapukoko-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/volkner.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electropower.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electromagnetic-radar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/stadiumnav.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lysandre-lab.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../assets/11.png'
      }
    ]
  },
  {
    firstName: 'Charlie Lockyer',
    flag: '../../assets/flags/usa.png',
        sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/raichu-alolan-raichu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/hoopa-evil-abomanatino.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapukoko-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/judge.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/volkner.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electropower.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electromagnetic-radar.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/stadiumnav.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lysandre-lab.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../assets/11.png'
      }
    ]
  },
  {
    firstName: 'Otavio Gouveia',
    flag: '../../assets/flags/brazil.png',
    sprite1: '../../assets/sprites/reshiram-charizard-tagteam.png',
    sprite2: '../../assets/sprites/volcanion-right.png',
    list: '../../assets/list-icon.png',
        type: 'fire',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/reshiram-charizard-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/volcanion.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/welder.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/greens-exploration.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/acro-bike.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mixed-herbs.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-potion.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fire-crystal.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fiery-flint.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giant-hearth.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/shrineofpunush.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/heat-factory.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-teu.png',
        numImg: '../../assets/11.png'
      }
    ]
  },
  {
    firstName: 'Robin Shulz',
    flag: '../../assets/flags/germany.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/mewtwo-mew-tagteam.png',  
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/mewtwo-mew.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/solgaleo-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reshiram-charizard-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/latios-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/deoxys-espeon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel-gx-dragon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dargonite-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jirachi-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/turtonator.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/welder.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/hapu.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tate-n-liza.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/super-scoop-up.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giant-hearth.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-teu.png',
        numImg: '../../assets/11.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../assets/05.png'
      }
    ]
  },
  {
    firstName: 'Justin Bokhari',
    flag: '../../assets/flags/usa.png',
        sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/raichu-alolan-raichu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/hoopa-evil-abomanatino.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapukoko-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/volkner.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/judge.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electropower.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electromagnetic-radar.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/stadiumnav.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lysandre-lab.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../assets/11.png'
      }
    ]
  },
  {
    firstName: 'Jose Marrero',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/reshiram-charizard-tagteam.png',
    list: '../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/reshiram-charizard-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/heatran-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ninetales.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/vulpix.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapufini.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/turtonator.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/welder.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fire-crystal.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/acro-bike.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/palpad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giant-hearth.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/heat-factory.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-teu.png',
        numImg: '../../assets/12.png'
      }
    ]
  },
  {
    firstName: 'Daniel Altavilla',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/oranguru.png',
    sprite2: '../../assets/sprites/pidgeotto.png',
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/oranguru-resource-manag.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgeotto.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgey.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/girafarig.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/articuno-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mars.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lt-surge.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tate-n-liza.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/brocks-grit.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/acro-bike.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/crushing-hammer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/chipchip-ice-axe.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/palpad.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-teu.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-recycle.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Keito Uchida',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/malamar.png',
    sprite2: '../../assets/sprites/necrozma-ultra.png',
    list: '../../assets/list-icon.png',
        type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/malamar.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/inkay.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jynx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/necrozma-ultra.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/gengar-mimikyu-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/hapu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/spelltag.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../assets/07.png'
      },
      {
        cardImg: '../../assets/cards/energy/metal-energy-teu.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-beast-p.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Bryan de Vries',
    flag: '../../assets/flags/netherlands.png',
        sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/raichu-alolan-raichu.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/sigilyph-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/oranguru-resource-manag.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapukoko-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/volkner.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electropower.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electromagnetic-radar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/stadiumnav.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lysandre-lab.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../assets/11.png'
      }
    ]
  },
  {
    firstName: 'Dylan Gunn',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/keldeo.png',
    sprite2: '../../assets/sprites/bronzong.png',
    list: '../../assets/list-icon.png',
        type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/keldeo-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lugia-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/bronzong-fireproof.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/bronzor.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ninetales-alolan-fairy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/vulpix-alolan.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/girafarig.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/wobbufet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/steven-resolve.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lusamine.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/gardenia.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lt-surge.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/faba.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/hapu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/grimsley.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mars.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reds-challenge.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tate-n-liza.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/acro-bike.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-potion.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/counter-gain.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/blizzard-town.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-teu.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-unit-gwf.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-rainbow.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Louis Chi',
    flag: '../../assets/flags/new-zealand.png',
    sprite1: '../../assets/sprites/blacephalon.png',
    sprite2: '../../assets/sprites/naganadel.png',
    list: '../../assets/list-icon.png',
        type: 'fire',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/blacephalon-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/poipole-spit.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/poipole-belt.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/persian-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/meowth.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/welder.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/beast-ring.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giant-hearth.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-space.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/heat-factory.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-teu.png',
        numImg: '../../assets/15.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-beast-p.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Mehdi Hafi',
    flag: '../../assets/flags/france.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/reshiram-charizard-tagteam.png',
    list: '../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/reshiram-charizard-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/heatran-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ninetales.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/vulpix.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/victini-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/turtonator.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/welder.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/acro-bike.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fire-crystal.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/palpad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giant-hearth.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-teu.png',
        numImg: '../../assets/15.png'
      }
    ]
  },
  {
    firstName: 'Pedro Torres',
    flag: '../../assets/flags/spain.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/reshiram-charizard-tagteam.png',
    list: '../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/reshiram-charizard-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/heatran-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ninetales.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/vulpix.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/victini-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/turtonator.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/welder.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/acro-bike.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/super-scoop-up.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/palpad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giant-hearth.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/heat-factory.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-teu.png',
        numImg: '../../assets/18.png'
      }
    ]
  },
  {
    firstName: 'Rahul Reddy',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/reshiram-charizard-tagteam.png',
    sprite2: '../../assets/sprites/volcanion-right.png',
    list: '../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/reshiram-charizard-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/volcanion.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/welder.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/greens-exploration.png',
        numImg: '../../assets/04.png'
      },      
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/acro-bike.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mixed-herbs.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fire-crystal.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-potion.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-spinner.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fiery-flint.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/martial-arts-dojo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/shrineofpunush.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/heat-factory.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-teu.png',
        numImg: '../../assets/10.png'
      },
      {
        cardImg: '../../assets/cards/energy/fighting-energy-teu.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Riley Hulbert',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gardevoir-sylveon-tagteam.png',
    list: '../../assets/list-icon.png',
    type: 'fairy',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/gardevoir-sylveon-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/coach-trainer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/greens-exploration.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/bills-analysis.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-potion.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/super-scoop-up.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-switch.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-spinner.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mixed-herbs.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fairy-charm-lightning.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fairy-charm-ub.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giantbomb.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/wondrous-lab.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/fairy-energy-teu.png',
        numImg: '../../assets/09.png'
      }
    ]
  },
  {
    firstName: 'Dennis Peroff',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/malamar.png',
    sprite2: '../../assets/sprites/giratina.png',
    list: '../../assets/list-icon.png',
        type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/malamar.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/inkay.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/espurr.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/necrozma-ultra.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/gengar-mimikyu-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/acro-bike.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/adventure-bag.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/spelltag.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../assets/07.png'
      },
      {
        cardImg: '../../assets/cards/energy/metal-energy-teu.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Ian Robb',
    flag: '../../assets/flags/usa.png',
        sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/raichu-alolan-raichu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/oranguru-resource-manag.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapukoko-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/judge.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/volkner.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electropower.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electromagnetic-radar.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/stadiumnav.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lysandre-lab.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../assets/11.png'
      }
    ]
  },
  {
    firstName: 'Christian Hasbani',
    flag: '../../assets/flags/australia.png',
    sprite1: '../../assets/sprites/malamar.png',
    sprite2: '../../assets/sprites/giratina.png',
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/malamar.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/inkay.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/espurr.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mimikyu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/deoxys-espeon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/acro-bike.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/spelltag.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../assets/09.png'
      },
    ]
  },
  {
    firstName: 'Azul Griego',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/oranguru.png',
    sprite2: '../../assets/sprites/pidgeotto.png',
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/oranguru-resource-manag.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgeotto.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgey.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/girafarig.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/articuno-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mars.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lt-surge.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tate-n-liza.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/brocks-grit.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/acro-bike.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/crushing-hammer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/chipchip-ice-axe.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/palpad.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-teu.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-recycle.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Bernardo Dias',
    flag: '../../assets/flags/portugal.png',
    sprite1: '../../assets/sprites/malamar.png',
    sprite2: '../../assets/sprites/necrozma-ultra.png',
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/malamar.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/inkay.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/necrozma-ultra.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/gengar-mimikyu-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../assets/07.png'
      },
      {
        cardImg: '../../assets/cards/energy/metal-energy-teu.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-beast-p.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Clifton Goh',
    flag: '../../assets/flags/singapore.png',
        sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../assets/list-icon.png',
        type: 'lightning',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/raichu-alolan-raichu.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/sigilyph-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapukoko-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/volkner.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cyrus-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electropower.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electromagnetic-radar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/stadiumnav.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lysandre-lab.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../assets/11.png'
      }
    ]
  },
  {
    firstName: 'Haedon Jeong',
    flag: '../../assets/flags/korea.png',
    sprite1: '../../assets/sprites/blacephalon.png',
    sprite2: '../../assets/sprites/volcanion.png',
    list: '../../assets/list-icon.png',
        type: 'fire',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/blacephalon-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reshiram-charizard-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/volcanion.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/hoopa-evil-abomanatino.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/welder.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/greens-exploration.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/beast-ring.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/acro-bike.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fire-crystal.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fiery-flint.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giant-hearth.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lysandre-lab.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/heat-factory.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-teu.png',
        numImg: '../../assets/15.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-beast-p.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Miguel Aml',
    flag: '../../assets/flags/spain.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/reshiram-charizard-tagteam.png',
    list: '../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/reshiram-charizard-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/heatran-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ninetales.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/vulpix.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/victini-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/turtonator.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/welder.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fire-crystal.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/acro-bike.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/palpad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giant-hearth.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/heat-factory.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-teu.png',
        numImg: '../../assets/12.png'
      }
    ]
  },
  {
    firstName: 'Fabien Pujol',
    flag: '../../assets/flags/france.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/reshiram-charizard-tagteam.png',
    list: '../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/reshiram-charizard-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/heatran-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ninetales.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/vulpix.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/victini-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/turtonator.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/welder.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/acro-bike.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fire-crystal.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/palpad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giant-hearth.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-teu.png',
        numImg: '../../assets/15.png'
      }
    ]
  },
  {
    firstName: 'Marco Spataro',
    flag: '../../assets/flags/italy.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/mewtwo-mew-tagteam.png',  
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/mewtwo-mew.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/solgaleo-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reshiram-charizard-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/latios-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/deoxys-espeon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel-gx-dragon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dargonite-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jirachi-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/greninja-gx-detective-pikachu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/welder.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/coach-trainer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-potion.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fire-crystal.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giant-hearth.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/heat-factory.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-teu.png',
        numImg: '../../assets/07.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-rainbow.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'David Cooper',
    flag: '../../assets/flags/usa.png',
        sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/raichu-alolan-raichu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/hoopa-evil-abomanatino.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapukoko-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/judge.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/volkner.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electropower.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electromagnetic-radar.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/stadiumnav.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lysandre-lab.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../assets/11.png'
      }
    ]
  },
  {
    firstName: 'Will Jenkins',
    flag: '../../assets/flags/usa.png',
        sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/raichu-alolan-raichu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/hoopa-evil-abomanatino.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapukoko-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/volkner.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/judge.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electropower.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electromagnetic-radar.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/stadiumnav.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lysandre-lab.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../assets/11.png'
      }
    ]
  },
  {
    firstName: 'Ilya Kornilov',
    flag: '../../assets/flags/russia.png',
    sprite1: '../../assets/sprites/gardevoir-sylveon-tagteam.png',
    sprite2: '../../assets/sprites/mismagius.png',
    list: '../../assets/list-icon.png',
        type: 'fairy',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/gardevoir-sylveon-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lugia-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mismagius.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/misdrevous.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/greens-exploration.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/bills-analysis.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lusamine.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mina.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mixed-herbs.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/super-scoop-up.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dusk-stone.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fairy-charm-lightning.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fairy-charm-ub.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lysandre-lab.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/wondrous-lab.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/fairy-energy-teu.png',
        numImg: '../../assets/09.png'
      }
    ]
  },
  {
    firstName: 'Martin Janouš',
    flag: '../../assets/flags/czech-republic.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/spiritomb.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/spiritomb.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/froslass.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/snorunt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zebstrika.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/blitzle-delivery.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/aerodactyl-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/honchkrow-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/hoopa-evil-abomanatino.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/buzzwole.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/nihilego.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/girafarig.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2021-2022/jynx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/faba.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tate-n-liza.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reds-challenge.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/adventure-bag.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/hustle-belt.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-teu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/rainbow-energy-cel.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/unit-energy-darkfightingfairy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Tatsuya Kobayashi',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/reshiram-charizard-tagteam.png',
    list: '../../assets/list-icon.png',
        type: 'fire',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/reshiram-charizard-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/heatran-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/blacephalon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/welder.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/hapu.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fire-crystal.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-potion.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/palpad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giant-hearth.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-teu.png',
        numImg: '../../assets/12.png'
      }
    ]
  },
  {
    firstName: 'Takuya Yoneda',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/malamar.png',
    sprite2: '../../assets/sprites/giratina.png',
    list: '../../assets/list-icon.png',
        type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/malamar.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/inkay.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/sableye.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/espurr.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giratina-garchomp-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/gengar-mimikyu-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/deoxys-espeon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/spelltag.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../assets/06.png'
      },
      {
        cardImg: '../../assets/cards/energy/fighting-energy-teu.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Dan Irish',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blacephalon.png',
    sprite2: '../../assets/sprites/persian.png',
    list: '../../assets/list-icon.png',
        type: 'fire',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/blacephalon-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/persian-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/meowth.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reshiram-charizard-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/welder.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/greens-exploration.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lt-surge.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/beast-ring.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fire-crystal.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giant-hearth.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/heat-factory.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-teu.png',
        numImg: '../../assets/15.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-beast-p.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Colin Tang',
    flag: '../../assets/flags/liberia-malaysia.png',
        sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/raichu-alolan-raichu.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/necrozma-dawn-wings.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapukoko-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/elektross.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/volkner.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cyrus-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electropower.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electromagnetic-radar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch.png',
        numImg: '../../assets/03.png'
      },
      
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/stadiumnav.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lysandre-lab.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../assets/11.png'
      }
    ]
  },
  {
    firstName: 'Alex Schemanske',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gengar-mimikyu-tagteam.png',
    sprite2: '../../assets/sprites/omastar.png',
    list: '../../assets/list-icon.png',
        type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/gengar-mimikyu-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/omastar.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/coach-trainer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/greens-exploration.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/bills-analysis.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/surprise-box.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mixed-herbs.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/unid-fossil.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-potion.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-spinner.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rare-candy.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/peeking-red-card.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lysandre-lab.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../assets/07.png'
      }
    ]
  },
  {
    firstName: 'Haruki Satoyama',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/gardevoir-sylveon-tagteam.png',
    sprite2: '../../assets/sprites/xerneas-active.png',
    list: '../../assets/list-icon.png',
    type: 'fairy',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/gardevoir-sylveon-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/xerneas-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/coach-trainer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/greens-exploration.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-potion.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-switch.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-spinner.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fairy-charm-lightning.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fairy-charm-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fairy-charm-ub.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/fairy-energy-teu.png',
        numImg: '../../assets/10.png'
      }
    ]
  },
  {
    firstName: 'Michele Schiraldi',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/giratina-garchomp-tagteam.png',
    list: '../../assets/sprites/blank.png',
        type: '',
    deck: []
  },
  {
    firstName: 'Zach Lesage',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/blacephalon.png',
    sprite2: '../../assets/sprites/persian.png',
    list: '../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/blacephalon-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/persian-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/meowth.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/hoopa-evil-abomanatino.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/welder.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/greens-exploration.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lt-surge.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/beast-ring.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fire-crystal.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giant-hearth.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lysandre-lab.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/heat-factory.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-teu.png',
        numImg: '../../assets/15.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-beast-p.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Tristan Lackey',
    flag: '../../assets/flags/usa.png',
        sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/raichu-alolan-raichu.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/hoopa-evil-abomanatino.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapukoko-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/volkner.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/02.png'
      },
      {  cardImg: '../../assets/cards/2019-2020/erikas-hospitality.png',
      numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electropower.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electromagnetic-radar.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/03.png'
      },
      {
      cardImg: '../../assets/cards/2019-2020/tag-switch.png',
      numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/stadiumnav.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lysandre-lab.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../assets/11.png'
      }
    ]
  },
  {
    firstName: 'Pablo Meza',
    flag: '../../assets/flags/mexico.png',
        sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/raichu-alolan-raichu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/hoopa-evil-abomanatino.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapukoko-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/volkner.png',
        numImg: '../../assets/04.png'
      },
      {  
        cardImg: '../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electropower.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electromagnetic-radar.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-switch.png',
        numImg: '../../assets/01.png'
        },
      {
        cardImg: '../../assets/cards/2019-2020/stadiumnav.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lysandre-lab.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../assets/12.png'
      }
    ]
  },
  {
    firstName: 'Stéphane Ivanoff',
    flag: '../../assets/flags/france.png',
    sprite1: '../../assets/sprites/gardevoir-sylveon-tagteam.png',
    sprite2: '../../assets/sprites/xerneas-active.png',
    list: '../../assets/list-icon.png',
    type: 'fairy',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/gardevoir-sylveon-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/xerneas-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/coach-trainer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/greens-exploration.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/bills-analysis.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mina.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-switch.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-potion.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-spinner.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fairy-charm-lightning.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fairy-charm-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fairy-charm-ub.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/wondrous-lab.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/fairy-energy-teu.png',
        numImg: '../../assets/10.png'
      }
    ]
  },
  {
    firstName: 'Jon Eng',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/reshiram-charizard-tagteam.png',
    sprite2: '../../assets/sprites/volcanion-right.png',
    list: '../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/reshiram-charizard-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/volcanion.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/welder.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/greens-exploration.png',
        numImg: '../../assets/04.png'
      },      
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/acro-bike.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mixed-herbs.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fire-crystal.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-potion.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-spinner.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fiery-flint.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/shrineofpunush.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/heat-factory.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-teu.png',
        numImg: '../../assets/10.png'
      },
      {
        cardImg: '../../assets/cards/energy/question-mark.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Koki Kimura',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/mewtwo-mew-tagteam.png',  
    list: '../../assets/sprites/blank.png',
        type: '',
    deck: []
  },
  {
    firstName: 'Nicolas Galaz',
    flag: '../../assets/flags/chile.png',
        sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../assets/sprites/blank.png',
        type: '',
    deck: []
  },
  {
    firstName: 'Sander Wojcik',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/exeggutor-alola-rowlet-tagteam.png',
    list: '../../assets/list-icon.png',
        type: 'grass',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/rowlett-exeggcutor-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/shaymin.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/leavanny.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/swadloon.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/sewaddle.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/araquanid.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dewpider-gnaw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dewpider-bubble.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/munchlax.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/latios-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/steven-resolve.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/bills-analysis.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-fan-club.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/gardenia.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lusamine.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/faba.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mars.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tate-n-liza.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/blues-tactics.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-potion.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/net-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/life-forest.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/grass-energy-teu.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-rainbow.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-memory.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Jack Underwood',
    flag: '../../assets/flags/australia.png',
    sprite1: '../../assets/sprites/mewtwo-mew-tagteam.png',
    sprite2: '../../assets/sprites/blastoise.png',
    list: '../../assets/list-icon.png',
        type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/mewtwo-mew.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/blastoise-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/blastoise.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/squirtle.png',
        numImg: '../../assets/04.png'
      },
      
      {
        cardImg: '../../assets/cards/2019-2020/volcanion-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/keldeo-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/greninja-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/kingdra-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/solgaleo-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jirachi-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/crasher-wake.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rare-candy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-recycler.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-teu.png',
        numImg: '../../assets/12.png'
      }
    ]
  },
  {
    firstName: 'Tobias Thesing',
    flag: '../../assets/flags/germany.png',
    sprite1: '../../assets/sprites/rampardos.png',
    sprite2: '../../assets/sprites/omastar.png',
    list: '../../assets/list-icon.png',
        type: 'fighting',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rampardos.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cranidos.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/omastar.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/omanyte.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/carracosta.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tirtouga.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/aerodactyl-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/bills-analysis.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/brocks-grit.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reds-challenge.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/unid-fossil.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rare-candy.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fossil-excavation-map.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/research-lab.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/martial-arts-dojo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/karate-belt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/fighting-energy-teu.png',
        numImg: '../../assets/09.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-super-boost.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Jimmy Pendarvis',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/oranguru.png',
    sprite2: '../../assets/sprites/pidgeotto.png',
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/oranguru-resource-manag.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgeotto.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgey.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/girafarig.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/articuno-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mars.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lt-surge.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tate-n-liza.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/brocks-grit.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/acro-bike.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/crushing-hammer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/chipchip-ice-axe.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/palpad.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-teu.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-recycle.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Miloslav Poslední',
    flag: '../../assets/flags/czech-republic.png',
        sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/raichu-alolan-raichu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/hoopa-evil-abomanatino.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapukoko-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/elektross.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/volkner.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electropower.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electromagnetic-radar.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/stadiumnav.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lysandre-lab.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../assets/11.png'
      }
    ]
  }
]

let seniors = [
    {
      firstName: 'Kaya Lichtleitner',
      flag: '../../assets/flags/germany.png',
      sprite1: '../../assets/sprites/blank.png',
      sprite2: '../../assets/sprites/reshiram-charizard-tagteam.png',
      list: '../../assets/list-icon.png',
      type: 'fire',
      deck: [
        {
          cardImg: '../../assets/cards/2019-2020/reshiram-charizard-gx.png',
          numImg: '../../assets/02.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
          numImg: '../../assets/03.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/heatran-gx.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/jirachi-stellar-wish.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/ninetales.png',
          numImg: '../../assets/02.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/vulpix.png',
          numImg: '../../assets/02.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/victini-prism.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/turtonator.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/welder.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/acro-bike.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
          numImg: '../../assets/03.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/switch.png',
          numImg: '../../assets/03.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/fiery-flint.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/palpad.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/escapeboard.png',
          numImg: '../../assets/02.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/giant-hearth.png',
          numImg: '../../assets/03.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/heat-factory.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/energy/fire-energy-teu.png',
          numImg: '../../assets/18.png'
        }
      ]
    },
    {
        firstName: 'Grant Shen',
        flag: '../../assets/flags/usa.png',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/gardevoir-sylveon-tagteam.png',
        list: '../../assets/list-icon.png',
        type: 'fairy',
        deck: [
          {
            cardImg: '../../assets/cards/2019-2020/gardevoir-sylveon-gx.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/coach-trainer.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/greens-exploration.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/bills-analysis.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/cynthia.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/pokegear.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/great-potion.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/super-scoop-up.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/tag-switch.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/switch.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/energy-spinner.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/fairy-charm-lightning.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/fairy-charm-ub.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/fairy-charm-dragon.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/giantbomb.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/power-plant.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/wondrous-lab.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/energy/fairy-energy-teu.png',
            numImg: '../../assets/09.png'
          }
        ]
    },
    {
        firstName: 'Rowan Stavenow',
        flag: '../../assets/flags/uk.png',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/mewtwo-mew-tagteam.png',
        list: '../../assets/list-icon.png',
        type: 'psychic',
        deck: [
          {
            cardImg: '../../assets/cards/2019-2020/mewtwo-mew.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/solgaleo-gx.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/reshiram-charizard-gx.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/deoxys-espeon-gx.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/naganadel-gx-dragon.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/cobalion-gx.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/latios-gx.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/dargonite-gx.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/jirachi-gx.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/marshadow.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/welder.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/sightseer.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/bills-analysis.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/faba.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/judge.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/pokegear.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/super-scoop-up.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/mysterious-treasure.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/palpad.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/giant-hearth.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/heat-factory.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/energy/fire-energy-teu.png',
            numImg: '../../assets/09.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/unit-energy-lm.png',
            numImg: '../../assets/04.png'
          }
        ]
    },
    {
        firstName: 'Thomas Naylor',
        flag: '../../assets/flags/uk.png',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/pikachu-zekrom-tagteam.png',
        list: '../../assets/list-icon.png',
        type: 'lightning',
        deck: [
          {
            cardImg: '../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/zeraora-gx.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/raichu-alolan-raichu.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/mewtwo-mew.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/tapufini.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/tapukoko-p.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/zapdos.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/cynthia.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/volkner.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/lillie.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/electropower.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/electromagnetic-radar.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/energy-switch.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/super-scoop-up.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/tag-switch.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/stadiumnav.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/switch.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/lysandre-lab.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/thunder-mtn.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/energy/lightning-energy-teu.png',
            numImg: '../../assets/11.png'
          }
        ]
    },
    {
        firstName: 'Iain Harding',
        flag: '../../assets/flags/usa.png',
        sprite1: '../../assets/sprites/reshiram-charizard-tagteam.png',
        sprite2: '../../assets/sprites/volcanion-right.png',
        list: '../../assets/list-icon.png',
        type: 'fire',
        deck: [
          {
            cardImg: '../../assets/cards/2019-2020/reshiram-charizard-gx.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/volcanion.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/welder.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/greens-exploration.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/lysandre-p.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/acro-bike.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/mixed-herbs.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/pokegear.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/great-potion.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/fire-crystal.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/fiery-flint.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/switch.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/lysandre-lab.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/power-plant.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/shrineofpunush.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/heat-factory.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/energy/fire-energy-teu.png',
            numImg: '../../assets/11.png'
          }
        ]
    },
    {
        firstName: 'YouTae Woo',
        flag: '../../assets/flags/korea.png',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/pikachu-zekrom-tagteam.png',
        list: '../../assets/list-icon.png',
        type: 'lightning',
        deck: [
      {
        cardImg: '../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/raichu-alolan-raichu.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/necrozma-dawn-wings.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/hoopa-evil-abomanatino.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapukoko-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/volkner.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electropower.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electromagnetic-radar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/stadiumnav.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lysandre-lab.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../assets/12.png'
      }
        ]
    },
    {
        firstName: 'James Cox',
        flag: '../../assets/flags/australia.png',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/mewtwo-mew-tagteam.png',
        list: '../../assets/list-icon.png',
        type: 'psychic',
        deck: [
          {
            cardImg: '../../assets/cards/2019-2020/mewtwo-mew.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/solgaleo-gx.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/reshiram-charizard-gx.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/deoxys-espeon-gx.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/naganadel-gx-dragon.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/latios-gx.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/jirachi-gx.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/dargonite-gx.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/marshadow.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/mew.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/tapufini.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/wobbufet.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/welder.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/lillie.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/mysterious-treasure.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/acro-bike.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/switch.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/fire-crystal.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/viridian-forest.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/escapeboard.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/energy/fire-energy-teu.png',
            numImg: '../../assets/08.png'
          },
          {
            cardImg: '../../assets/cards/energy/psychic-energy-teu.png',
            numImg: '../../assets/04.png'
          }
        ]
    },
    {
        firstName: 'Noa Bell',
        flag: '../../assets/flags/usa.png',
        sprite1: '../../assets/sprites/reshiram-charizard-tagteam.png',
        sprite2: '../../assets/sprites/volcanion-right.png',
        list: '../../assets/list-icon.png',
        type: 'fire',
        deck: [
          {
            cardImg: '../../assets/cards/2019-2020/reshiram-charizard-gx.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/volcanion.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/welder.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/greens-exploration.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/acro-bike.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/mixed-herbs.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/pokegear.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/great-potion.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/fire-crystal.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/fiery-flint.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/switch.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/lysandre-lab.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/power-plant.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/shrineofpunush.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/heat-factory.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/energy/fire-energy-teu.png',
            numImg: '../../assets/11.png'
          }
        ]
    }
]

let juniors = [
    {
      firstName: 'Haruki Miyamoto',
      flag: '../../assets/flags/japan.png',
      sprite1: '../../assets/sprites/blank.png',
      sprite2: '../../assets/sprites/pikachu-zekrom-tagteam.png',
      list: '../../assets/list-icon.png',
      type: 'lightning',
      deck: [
    {
      cardImg: '../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
      numImg: '../../assets/02.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/raichu-alolan-raichu.png',
      numImg: '../../assets/02.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
      numImg: '../../assets/04.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/zeraora-gx.png',
      numImg: '../../assets/02.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/hoopa-evil-abomanatino.png',
      numImg: '../../assets/01.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/tapukoko-p.png',
      numImg: '../../assets/01.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/mew.png',
      numImg: '../../assets/01.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/tapufini.png',
      numImg: '../../assets/01.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/marshadow.png',
      numImg: '../../assets/01.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/volkner.png',
      numImg: '../../assets/04.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/judge.png',
      numImg: '../../assets/04.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/cynthia.png',
      numImg: '../../assets/01.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
      numImg: '../../assets/04.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/electropower.png',
      numImg: '../../assets/04.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/electromagnetic-radar.png',
      numImg: '../../assets/04.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/energy-switch.png',
      numImg: '../../assets/02.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
      numImg: '../../assets/02.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
      numImg: '../../assets/01.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/tag-switch.png',
      numImg: '../../assets/01.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
      numImg: '../../assets/01.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/stadiumnav.png',
      numImg: '../../assets/01.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/switch.png',
      numImg: '../../assets/01.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/lysandre-lab.png',
      numImg: '../../assets/02.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/power-plant.png',
      numImg: '../../assets/01.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/thunder-mtn.png',
      numImg: '../../assets/01.png'
    },
    {
      cardImg: '../../assets/cards/energy/lightning-energy-teu.png',
      numImg: '../../assets/11.png'
    }
      ]
    },
    {
      firstName: 'Issac Terceira',
      flag: '../../assets/flags/usa.png',
      sprite1: '../../assets/sprites/reshiram-charizard-tagteam.png',
      sprite2: '../../assets/sprites/volcanion-right.png',
      list: '../../assets/list-icon.png',
      type: 'fire',
      deck: [
        {
          cardImg: '../../assets/cards/2019-2020/reshiram-charizard-gx.png',
          numImg: '../../assets/03.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/volcanion.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/welder.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/greens-exploration.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/acro-bike.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/mixed-herbs.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/pokegear.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/great-potion.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/fire-crystal.png',
          numImg: '../../assets/03.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
          numImg: '../../assets/02.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/fiery-flint.png',
          numImg: '../../assets/02.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/switch.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/power-plant.png',
          numImg: '../../assets/02.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/shrineofpunush.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/heat-factory.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/energy/fire-energy-teu.png',
          numImg: '../../assets/11.png'
        }
      ]
    },
    {
      firstName: 'Logan Maracle',
      flag: '../../assets/flags/usa.png',
      sprite1: '../../assets/sprites/reshiram-charizard-tagteam.png',
      sprite2: '../../assets/sprites/volcanion-right.png',
      list: '../../assets/list-icon.png',
      type: 'fire',
      deck: [
        {
          cardImg: '../../assets/cards/2019-2020/reshiram-charizard-gx.png',
          numImg: '../../assets/03.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/volcanion.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/welder.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/greens-exploration.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/acro-bike.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/mixed-herbs.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/pokegear.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/fire-crystal.png',
          numImg: '../../assets/03.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
          numImg: '../../assets/02.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/great-potion.png',
          numImg: '../../assets/02.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
          numImg: '../../assets/02.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/switch.png',
          numImg: '../../assets/02.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/fiery-flint.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/energy-spinner.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/power-plant.png',
          numImg: '../../assets/02.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/shrineofpunush.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/heat-factory.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/energy/fire-energy-teu.png',
          numImg: '../../assets/11.png'
        }
      ]
    },
    {
      firstName: 'Cassio Moraes',
      flag: '../../assets/flags/brazil.png',
      sprite1: '../../assets/sprites/blank.png',
      sprite2: '../../assets/sprites/mewtwo-mew-tagteam.png',
      list: '../../assets/list-icon.png',
      type: 'psychic',
      deck: [
        {
          cardImg: '../../assets/cards/2019-2020/mewtwo-mew.png',
          numImg: '../../assets/03.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
          numImg: '../../assets/02.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/solgaleo-gx.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/reshiram-charizard-gx.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/deoxys-espeon-gx.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/naganadel-gx-dragon.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/latios-gx.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/jirachi-gx.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/dargonite-gx.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/muk-alolan-muk-gx.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/jirachi-stellar-wish.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/mewtwo.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/welder.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/judge.png',
          numImg: '../../assets/02.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/acro-bike.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/switch.png',
          numImg: '../../assets/03.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/mysterious-treasure.png',
          numImg: '../../assets/02.png'
        }, 
        {
          cardImg: '../../assets/cards/2019-2020/energy-recycler.png',
          numImg: '../../assets/02.png'
        }, 
        {
          cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
          numImg: '../../assets/02.png'
        }, 
        {
          cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/escapeboard.png',
          numImg: '../../assets/02.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/giant-hearth.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/energy/fire-energy-teu.png',
          numImg: '../../assets/08.png'
        },
        {
          cardImg: '../../assets/cards/energy/psychic-energy-teu.png',
          numImg: '../../assets/04.png'
        }
      ]
    },
    {
      firstName: 'Sechan Oh',
      flag: '../../assets/flags/korea.png',
      sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/pikachu-zekrom-tagteam.png',
      list: '../../assets/list-icon.png',
      type: 'lightning',
      deck: [
    {
      cardImg: '../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
      numImg: '../../assets/02.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/raichu-alolan-raichu.png',
      numImg: '../../assets/02.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
      numImg: '../../assets/02.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/zeraora-gx.png',
      numImg: '../../assets/02.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/mewtwo-mew.png',
      numImg: '../../assets/01.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/necrozma-dawn-wings.png',
      numImg: '../../assets/01.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/tapukoko-p.png',
      numImg: '../../assets/01.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/zapdos.png',
      numImg: '../../assets/01.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/volkner.png',
      numImg: '../../assets/04.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/lillie.png',
      numImg: '../../assets/03.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/cynthia.png',
      numImg: '../../assets/02.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/erikas-hospitality.png',
      numImg: '../../assets/01.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
      numImg: '../../assets/04.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/electropower.png',
      numImg: '../../assets/04.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/electromagnetic-radar.png',
      numImg: '../../assets/03.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/energy-switch.png',
      numImg: '../../assets/03.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
      numImg: '../../assets/02.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
      numImg: '../../assets/02.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
      numImg: '../../assets/02.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/tag-switch.png',
      numImg: '../../assets/02.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/stadiumnav.png',
      numImg: '../../assets/01.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/lysandre-lab.png',
      numImg: '../../assets/03.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/thunder-mtn.png',
      numImg: '../../assets/01.png'
    },
    {
      cardImg: '../../assets/cards/energy/lightning-energy-teu.png',
      numImg: '../../assets/11.png'
    }
      ]
    },
    {
      firstName: 'Daniel Magda',
      flag: '../../assets/flags/czech-republic.png',
      sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/pikachu-zekrom-tagteam.png',
      list: '../../assets/list-icon.png',
      type: 'lightning',
      deck: [
    {
      cardImg: '../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
      numImg: '../../assets/02.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/raichu-alolan-raichu.png',
      numImg: '../../assets/02.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
      numImg: '../../assets/03.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/zeraora-gx.png',
      numImg: '../../assets/01.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/hoopa-evil-abomanatino.png',
      numImg: '../../assets/01.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/tapukoko-p.png',
      numImg: '../../assets/01.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/tapufini.png',
      numImg: '../../assets/01.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/mew.png',
      numImg: '../../assets/01.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/marshadow.png',
      numImg: '../../assets/01.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/zapdos.png',
      numImg: '../../assets/01.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/volkner.png',
      numImg: '../../assets/04.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/cynthia.png',
      numImg: '../../assets/02.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/lillie.png',
      numImg: '../../assets/02.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
      numImg: '../../assets/04.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/electropower.png',
      numImg: '../../assets/04.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/electromagnetic-radar.png',
      numImg: '../../assets/04.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/energy-switch.png',
      numImg: '../../assets/03.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
      numImg: '../../assets/03.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
      numImg: '../../assets/02.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/switch.png',
      numImg: '../../assets/02.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/tag-switch.png',
      numImg: '../../assets/01.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/stadiumnav.png',
      numImg: '../../assets/01.png'
    },

    {
      cardImg: '../../assets/cards/2019-2020/lysandre-lab.png',
      numImg: '../../assets/02.png'
    },
    {
      cardImg: '../../assets/cards/2019-2020/thunder-mtn.png',
      numImg: '../../assets/01.png'
    },
    {
      cardImg: '../../assets/cards/energy/lightning-energy-teu.png',
      numImg: '../../assets/11.png'
    }
      ]
    },
    {
      firstName: 'Mitchell Ransome',
      flag: '../../assets/flags/usa.png',
      sprite1: '../../assets/sprites/quagsire.png',
      sprite2: '../../assets/sprites/naganadel.png',
      list: '../../assets/list-icon.png',
          type: 'water',
      deck: [
        {
          cardImg: '../../assets/cards/2019-2020/quagsire.png',
          numImg: '../../assets/03.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/wooper.png',
          numImg: '../../assets/02.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/wooper-ground.png',
          numImg: '../../assets/01.png'
        },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/poipole-belt.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/poipole-eye.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/poipole-spit.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/keldeo-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/kyurem.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/volcanion-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/blues-tactics.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tate-n-liza.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/crushing-hammer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/acro-bike.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokenav.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/blizzard-town.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-space.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-teu.png',
        numImg: '../../assets/10.png'
      },
    ]
    },
    {
      firstName: 'Hotaru Yoshinari',
      flag: '../../assets/flags/japan.png',
      sprite1: '../../assets/sprites/blank.png',
      sprite2: '../../assets/sprites/mewtwo-mew-tagteam.png',
      list: '../../assets/list-icon.png',
      type: 'psychic',
      deck: [
        {
          cardImg: '../../assets/cards/2019-2020/mewtwo-mew.png',
          numImg: '../../assets/03.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/dedenne-gx.png',
          numImg: '../../assets/03.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/solgaleo-gx.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/reshiram-charizard-gx.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/deoxys-espeon-gx.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/latios-gx.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/jirachi-gx.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/dargonite-gx.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/blaziken-gx.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/altaria-gx.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/heatran-gx.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/cobalion-gx.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/jirachi-stellar-wish.png',
          numImg: '../../assets/02.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/hoopa-evil-abomanatino.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/mew.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/hoopa-evil-abomanatino.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/welder.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/hapu.png',
          numImg: '../../assets/02.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/reds-challenge.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/cherish-ball.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/switch.png',
          numImg: '../../assets/02.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/pokemon-comm.png',
          numImg: '../../assets/02.png'
        }, 
        {
          cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/fire-crystal.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/escapeboard.png',
          numImg: '../../assets/02.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/giant-hearth.png',
          numImg: '../../assets/02.png'
        },
        {
          cardImg: '../../assets/cards/2019-2020/lysandre-lab.png',
          numImg: '../../assets/01.png'
        },
          {
            cardImg: '../../assets/cards/2019-2020/heat-factory.png',
            numImg: '../../assets/01.png'
          },
        {
          cardImg: '../../assets/cards/energy/fire-energy-teu.png',
          numImg: '../../assets/08.png'
        },
        {
          cardImg: '../../assets/cards/energy/psychic-energy-teu.png',
          numImg: '../../assets/04.png'
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2019 Worlds";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2019 Worlds";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2019 Worlds";

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
