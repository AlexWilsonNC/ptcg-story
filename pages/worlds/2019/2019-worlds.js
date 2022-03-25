const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Henry Brand',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/mewtwo.png',
    sprite2: '../../../assets/sprites/mew.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019/mewtwo-mew.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/dedenne-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/solgaleo-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/reshiram-charizard-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/deoxys-espeon-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/naganadel-gx-dragon.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/cobalion-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/latios-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/magcargo-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/jirachi-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/marshadow.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/welder.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/steven-resolve.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/cherish-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/acro-bike.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/pokegear.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/custom-catcher.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/mysterious-treasure.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/switch.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/electromagnetic-radar.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/fire-crystal.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/giant-hearth.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/viridian-forest.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/energy-fire.png',
        numImg: '../../../assets/08.png'
      },
      {
        cardImg: '../../../assets/cards/2019/energy-psychic.png',
        numImg: '../../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Shintaro Ito',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019/blacephalon-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/naganadel.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/poipole-spit.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/poipole-eye.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/naganadel-gx-dragon.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/heatran-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/dedenne-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/mew.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/welder.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/cynthia.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/lillie.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/hapu.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/custom-catcher.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/mysterious-treasure.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/beast-ring.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/cherish-ball.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/reset-stamp.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/ultra-space.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/heat-factory.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/energy-fire.png',
        numImg: '../../../assets/14.png'
      },
      {
        cardImg: '../../../assets/cards/2019/energy-psychic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/energy-beast-p.png',
        numImg: '../../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Blaine Hill',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/charizard.png',
    sprite2: '../../../assets/sprites/volcanion.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019/reshiram-charizard-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/volcanion.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/welder.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/greens-exploration.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/lusamine.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/custom-catcher.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/acro-bike.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/great-potion.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/mixed-herbs.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/pokegear.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/fire-crystal.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/cherish-ball.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/energy-spinner.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/fiery-flint.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/reset-stamp.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/giant-hearth.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/lysandre-lab.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/power-plant.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/shrineofpunush.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/heat-factory.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/energy-fire.png',
        numImg: '../../../assets/11.png'
      }
    ]
  },
  {
    firstName: 'Tord Reklev',
    flag: '../../../assets/flags/norway.png',
    sprite1: '../../../assets/sprites/reshiram.png',
    sprite2: '../../../assets/sprites/charizard.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019/reshiram-charizard-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/dedenne-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/heatran-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/jirachi-stellar-wish.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/ninetales.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/vulpix.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/victini-prism.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/turtonator.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/welder.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/cherish-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/acro-bike.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/pokemon-comm.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/super-scoop-up.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/switch.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/palpad.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/escapeboard.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/giant-hearth.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/heat-factory.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/energy-fire.png',
        numImg: '../../../assets/18.png'
      }
    ]
  },
  {
    firstName: 'Kaiwen Cabbabe',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/pikachu.png',
    sprite2: '../../../assets/sprites/zekrom.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019/pikachu-zekrom-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/raichu-alolan-raichu.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/dedenne-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/zeraora-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/sigilyph-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/jirachi-stellar-wish.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/zapdos.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/tapukoko-p.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/lillie.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/volkner.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/cyrus-p.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/custom-catcher.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/electropower.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/switch.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/electromagnetic-radar.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/energy-switch.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/pokemon-comm.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/reset-stamp.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/cherish-ball.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/stadiumnav.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/tag-switch.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/escapeboard.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/lysandre-lab.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/thunder-mtn.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/energy-lightning.png',
        numImg: '../../../assets/11.png'
      }
    ]
  },
  {
    firstName: 'Paco Vilchez Barea',
    flag: '../../../assets/flags/spain.png',
    sprite1: '../../../assets/sprites/charizard.png',
    sprite2: '../../../assets/sprites/volcanion.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019/reshiram-charizard-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/volcanion.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/hoopa-evil-abomanatino.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/welder.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/greens-exploration.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/custom-catcher.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/acro-bike.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/mixed-herbs.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/pokegear.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/fire-crystal.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/cherish-ball.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/fiery-flint.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/reset-stamp.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/pokemon-comm.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/switch.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/tag-switch.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/choice-helmet.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/power-plant.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/shrineofpunush.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/heat-factory.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/energy-fire.png',
        numImg: '../../../assets/11.png'
      }
    ]
  },
  {
    firstName: 'Ryota Ishiyama',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/mewtwo.png',
    sprite2: '../../../assets/sprites/mew.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019/mewtwo-mew.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/dedenne-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/magcargo-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/solgaleo-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/flareon-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/heatran-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/deoxys-espeon-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/jirachi-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/marshadow.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/oranguru-resource-manag.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/welder.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/hapu.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/cherish-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/custom-catcher.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/reset-stamp.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/switch.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/mysterious-treasure.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/escapeboard.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/giant-hearth.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/lysandre-lab.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/heat-factory.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/energy-fire.png',
        numImg: '../../../assets/16.png'
      },
      {
        cardImg: '../../../assets/cards/2019/energy-psychic.png',
        numImg: '../../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Isaiah Williams',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/oranguru.png',
    sprite2: '../../../assets/sprites/pidgeotto.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019/oranguru-resource-manag.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/pidgeotto.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/pidgey.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/girafarig.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/mew.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/ditto-p.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/articuno-gx.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/professor-elm-lecture.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/cynthia.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/mars.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/lt-surge.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/tate-n-liza.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/brocks-grit.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/acro-bike.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/pokegear.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/crushing-hammer.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/custom-catcher.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/chipchip-ice-axe.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/palpad.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/pokemon-comm.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/reset-stamp.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/power-plant.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/energy-water.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/energy-recycle.png',
        numImg: '../../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Hideki Sano',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/sylveon.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019/gardevoir-sylveon-gx.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/xerneas-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/mimikyu-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/greens-exploration.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/judge.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/bills-analysis.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/cynthia.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/pokegear.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/switch.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/cherish-ball.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/great-potion.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/custom-catcher.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/energy-spinner.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/tag-switch.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/adventure-bag.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/reset-stamp.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/fairy-charm-lightning.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/fairy-charm-ub.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/fairy-charm-psychic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/power-plant.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/wondrous-lab.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/energy-fairy.png',
        numImg: '../../../assets/09.png'
      }
    ]
  },
  {
    firstName: 'Karl Peters',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/sylveon.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019/gardevoir-sylveon-gx.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/bills-analysis.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/coach-trainer.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/greens-exploration.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/custom-catcher.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/mixed-herbs.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/great-potion.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/super-scoop-up.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/cherish-ball.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/pokegear.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/reset-stamp.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/energy-spinner.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/tag-switch.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/switch.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/fairy-charm-lightning.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/fairy-charm-ub.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/fairy-charm-psychic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/fairy-charm-dragon.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/choice-helmet.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/power-plant.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/wondrous-lab.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/energy-fairy.png',
        numImg: '../../../assets/07.png'
      }
    ]
  },
  {
    firstName: 'Bert Wolters',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/mewtwo.png',
    sprite2: '../../../assets/sprites/mew.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019/mewtwo-mew.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/dedenne-gx.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/solgaleo-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/reshiram-charizard-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/deoxys-espeon-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/naganadel-gx-dragon.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/cobalion-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/latios-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/magcargo-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/jirachi-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/dargonite-gx.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/welder.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/steven-resolve.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/cherish-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/acro-bike.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/pokegear.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/custom-catcher.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2019/mysterious-treasure.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/switch.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2019/electromagnetic-radar.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/energy-recycle-system.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/giant-hearth.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2019/viridian-forest.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2019/energy-fire.png',
        numImg: '../../../assets/08.png'
      },
      {
        cardImg: '../../../assets/cards/2019/energy-psychic.png',
        numImg: '../../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Yoshiyuki Yamaguchi',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/reshiram.png',
    sprite2: '../../../assets/sprites/charizard.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jonathan Lanciano',
    flag: '../../../assets/flags/argentina.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Shunpei Hosoya',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/sylveon.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Gustavo Wada',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/pikachu.png',
    sprite2: '../../../assets/sprites/zekrom.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Zakary Krekler',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/weavile.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Lucas Pereira',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/pikachu.png',
    sprite2: '../../../assets/sprites/zekrom.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Charlie Lockyer',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/pikachu.png',
    sprite2: '../../../assets/sprites/zekrom.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Otavio Gouveia',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/charizard.png',
    sprite2: '../../../assets/sprites/volcanion.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Robin Shulz',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/mewtwo.png',
    sprite2: '../../../assets/sprites/mew.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Justin Bokhari',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/pikachu.png',
    sprite2: '../../../assets/sprites/zekrom.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jose Marrero',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/reshiram.png',
    sprite2: '../../../assets/sprites/charizard.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Daniel Altavilla',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/oranguru.png',
    sprite2: '../../../assets/sprites/pidgeotto.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Keito Uchida',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/necrozma-ultra.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Bryan de Vries',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/pikachu.png',
    sprite2: '../../../assets/sprites/zekrom.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Dylan Gunn',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/keldeo.png',
    sprite2: '../../../assets/sprites/bronzong.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Louis Chi',
    flag: '../../../assets/flags/new-zealand.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Mehdi Hafi',
    flag: '../../../assets/flags/france.png',
    sprite1: '../../../assets/sprites/reshiram.png',
    sprite2: '../../../assets/sprites/charizard.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Pedro Torres',
    flag: '../../../assets/flags/spain.png',
    sprite1: '../../../assets/sprites/reshiram.png',
    sprite2: '../../../assets/sprites/charizard.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Rahul Reddy',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/charizard.png',
    sprite2: '../../../assets/sprites/volcanion.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Riley Hulbert',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/sylveon.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Dennis Peroff',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/giratina.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ian Robb',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/pikachu.png',
    sprite2: '../../../assets/sprites/zekrom.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Christian Hasbani',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/giratina.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Azul Griego',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/oranguru.png',
    sprite2: '../../../assets/sprites/pidgeotto.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Bernardo Dias',
    flag: '../../../assets/flags/portugal.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/necrozma-ultra.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Clifton Goh',
    flag: '../../../assets/flags/singapore.png',
    sprite1: '../../../assets/sprites/pikachu.png',
    sprite2: '../../../assets/sprites/zekrom.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Haedon Jeong',
    flag: '../../../assets/flags/korea.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/volcanion.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Miguel Aml',
    flag: '../../../assets/flags/spain.png',
    sprite1: '../../../assets/sprites/reshiram.png',
    sprite2: '../../../assets/sprites/charizard.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Fabien Pujol',
    flag: '../../../assets/flags/france.png',
    sprite1: '../../../assets/sprites/reshiram.png',
    sprite2: '../../../assets/sprites/charizard.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Marco Spataro',
    flag: '../../../assets/flags/italy.png',
    sprite1: '../../../assets/sprites/mewtwo.png',
    sprite2: '../../../assets/sprites/mew.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'David Cooper',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/pikachu.png',
    sprite2: '../../../assets/sprites/zekrom.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Will Jenkins',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/pikachu.png',
    sprite2: '../../../assets/sprites/zekrom.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ilya Kornilov',
    flag: '../../../assets/flags/russia.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/sylveon.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Martin Janous',
    flag: '../../../assets/flags/czech-republic.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/spiritomb.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tatsuya Kobayashi',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/reshiram.png',
    sprite2: '../../../assets/sprites/charizard.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Takuya Yoneda',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/giratina.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Dan Irish',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/persian.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Colin Tang',
    flag: '../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../assets/sprites/pikachu.png',
    sprite2: '../../../assets/sprites/zekrom.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Alex Schemanske',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gengar.png',
    sprite2: '../../../assets/sprites/omastar.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Haruki Satoyama',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/sylveon.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Michele Schiraldi',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/giratina.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Zach Lesage',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/persian.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tristan Lackey',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/pikachu.png',
    sprite2: '../../../assets/sprites/zekrom.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Pablo Meza',
    flag: '../../../assets/flags/mexico.png',
    sprite1: '../../../assets/sprites/pikachu.png',
    sprite2: '../../../assets/sprites/zekrom.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Stephan Ivanoff',
    flag: '../../../assets/flags/france.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/sylveon.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jon Eng',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/charizard.png',
    sprite2: '../../../assets/sprites/volcanion.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Koki Kimura',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/mewtwo.png',
    sprite2: '../../../assets/sprites/mew.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nicolas Galaz',
    flag: '../../../assets/flags/chile.png',
    sprite1: '../../../assets/sprites/pikachu.png',
    sprite2: '../../../assets/sprites/zekrom.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Sander Wojcik',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/rowlet.png',
    sprite2: '../../../assets/sprites/exeggutor-alola.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jack Underwood',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/mewtwo.png',
    sprite2: '../../../assets/sprites/mew.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tobias Thesing',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/rampardos.png',
    sprite2: '../../../assets/sprites/omastar.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jimmy Pendarvis',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/oranguru.png',
    sprite2: '../../../assets/sprites/pidgeotto.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Miloslav Posledni',
    flag: '../../../assets/flags/czech-republic.png',
    sprite1: '../../../assets/sprites/pikachu.png',
    sprite2: '../../../assets/sprites/zekrom.png',
    list: '../../../assets/list-icon.png',
    deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
  }
]

let seniors = [
    {
      firstName: 'Kaya Lichtleitner',
      flag: '../../../assets/flags/germany.png',
      sprite1: '../../../assets/sprites/reshiram.png',
      sprite2: '../../../assets/sprites/charizard.png',
      list: '../../../assets/list-icon.png',
      deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
    },
    {
        firstName: 'Grant Shen',
        flag: '../../../assets/flags/usa.png',
        sprite1: '../../../assets/sprites/gardevoir.png',
        sprite2: '../../../assets/sprites/sylveon.png',
        list: '../../../assets/list-icon.png',
        deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
    },
    {
        firstName: 'Rowan Stavenow',
        flag: '../../../assets/flags/uk.png',
        sprite1: '../../../assets/sprites/pikachu.png',
        sprite2: '../../../assets/sprites/zekrom.png',
        list: '../../../assets/list-icon.png',
        deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
    },
    {
        firstName: 'Thomas Naylor',
        flag: '../../../assets/flags/uk.png',
        sprite1: '../../../assets/sprites/pikachu.png',
        sprite2: '../../../assets/sprites/zekrom.png',
        list: '../../../assets/list-icon.png',
        deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
    },
    {
        firstName: 'Iain Harding',
        flag: '../../../assets/flags/usa.png',
        sprite1: '../../../assets/sprites/charizard.png',
        sprite2: '../../../assets/sprites/volcanion.png',
        list: '../../../assets/list-icon.png',
        deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
    },
    {
        firstName: 'YouTae Woo',
        flag: '../../../assets/flags/korea.png',
        sprite1: '../../../assets/sprites/pikachu.png',
        sprite2: '../../../assets/sprites/zekrom.png',
        list: '../../../assets/list-icon.png',
        deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
    },
    {
        firstName: 'James Cox',
        flag: '../../../assets/flags/australia.png',
        sprite1: '../../../assets/sprites/mewtwo.png',
        sprite2: '../../../assets/sprites/mew.png',
        list: '../../../assets/list-icon.png',
        deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
    },
    {
        firstName: 'Noa Bell',
        flag: '../../../assets/flags/usa.png',
        sprite1: '../../../assets/sprites/charizard.png',
        sprite2: '../../../assets/sprites/volcanion.png',
        list: '../../../assets/list-icon.png',
        deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
    }
]

let juniors = [
    {
      firstName: 'Haruki Miyamoto',
      flag: '../../../assets/flags/japan.png',
      sprite1: '../../../assets/sprites/pikachu.png',
      sprite2: '../../../assets/sprites/zekrom.png',
      list: '../../../assets/list-icon.png',
      deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
    },
    {
      firstName: 'Issac Terceira',
      flag: '../../../assets/flags/usa.png',
      sprite1: '../../../assets/sprites/charizard.png',
      sprite2: '../../../assets/sprites/volcanion.png',
      list: '../../../assets/list-icon.png',
      deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
    },
    {
      firstName: 'Logan Maracle',
      flag: '../../../assets/flags/usa.png',
      sprite1: '../../../assets/sprites/charizard.png',
      sprite2: '../../../assets/sprites/volcanion.png',
      list: '../../../assets/list-icon.png',
      deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
    },
    {
      firstName: 'Cassio Moraes',
      flag: '../../../assets/flags/brazil.png',
      sprite1: '../../../assets/sprites/mewtwo.png',
      sprite2: '../../../assets/sprites/mew.png',
      list: '../../../assets/list-icon.png',
      deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
    },
    {
      firstName: 'Sechan Oh',
      flag: '../../../assets/flags/korea.png',
      sprite1: '../../../assets/sprites/pikachu.png',
      sprite2: '../../../assets/sprites/zekrom.png',
      list: '../../../assets/list-icon.png',
      deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
    },
    {
      firstName: 'Daniel Magda',
      flag: '../../../assets/flags/czech-republic.png',
      sprite1: '../../../assets/sprites/pikachu.png',
      sprite2: '../../../assets/sprites/zekrom.png',
      list: '../../../assets/list-icon.png',
      deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
    },
    {
      firstName: 'Mitchell Ransome',
      flag: '../../../assets/flags/usa.png',
      sprite1: '../../../assets/sprites/quagsire.png',
      sprite2: '../../../assets/sprites/naganadel.png',
      list: '../../../assets/list-icon.png',
      deck: [
      {
        cardImg: '../../../assets/cards/2019',
        numImg: '../../../assets/04.png'
      },
    ]
    },
    {
      firstName: 'Hotaru Yoshinari',
      flag: '../../../assets/flags/japan.png',
      sprite1: '../../../assets/sprites/mewtwo.png',
      sprite2: '../../../assets/sprites/mew.png',
      list: '../../../assets/list-icon.png',
      deck: [
      {
        cardImg: '../../../assets/cards/2019',
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
