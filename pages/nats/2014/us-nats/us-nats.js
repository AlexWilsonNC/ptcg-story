const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Brandon Salazar',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/landorus-therian.png',
    sprite2: '../../../../assets/sprites/raichu.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016/raichu.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/pikachu-nuzzle.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/landorus-ex.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/mewtwo-ex.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/druddigon.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/garbodor-ltr.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/trubbish-drx.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/n-bw.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/shauna.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/switch.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/level-ball-bw.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/bicycle.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/enhanced-hammer-bw.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/energy/xy-energy-fighting.png',
        numImg: '../../../../assets/07.png',
      },
      {
        cardImg: '../../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Michael Pramawat',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pyroar.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016/pyroar.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/litleo-xy.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/charizard-ex.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/mewtwo-ex.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/blacksmith.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/switch.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/pokemon-catcher-flip.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/roller-skates.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/bicycle.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/level-ball-bw.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/tropical-beach-2012.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/energy/xy-energy-fire.png',
        numImg: '../../../../assets/08.png',
      },
      {
        cardImg: '../../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Isaiah Williams',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016/yveltal-ex.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/garbodor-ltr.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/trubbish-poison-gas.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/darkrai-ex.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/yveltal.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/absol-plasma.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/sableye-junk-hunt.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/jirachi-ex.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/dowsing-machine.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/dark-patch.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/bicycle.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/professors-letter.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/switch.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/xy-energy-dark.png',
        numImg: '../../../../assets/08.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/dce-2015.png',
        numImg: '../../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Calvin Nordberg',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/kyurem.png',
    sprite2: '../../../../assets/sprites/deoxys.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016/kyurem.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/deoxys-ex.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/thundurus-ex.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/genesect-ex-plasma.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/shauna.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/switch.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/plasma-ball.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/colress-machine.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/bicycle.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/energy/xy-energy-lightning.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-plasma.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/energy/prism-energy.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/energy/blend-wlmf.png',
        numImg: '../../../../assets/02.png',
      },
    ]
  },
  {
    firstName: 'Adler Pierce',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/virizion.png',
    sprite2: '../../../../assets/sprites/genesect.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Oscar Morales',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pyroar.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Tristan Macek',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pyroar.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016/pyroar.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/litleo-xy.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/charizard-ex.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/mewtwo-ex.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/blacksmith.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/switch.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/roller-skates.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/bicycle.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/pokemon-catcher-flip.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/level-ball-bw.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/tropical-beach-2012.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/energy/xy-energy-fire.png',
        numImg: '../../../../assets/08.png',
      },
      {
        cardImg: '../../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Henry Prior',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/flygon.png',
    sprite2: '../../../../assets/sprites/dusknoir.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016/flygon.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/vibrava.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/trapinch.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/accelgor.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/shelmet-plb.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/dusknoir.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/dusclops.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/duskull.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/mewtwo-ex.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/dowsing-machine.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/rare-candy-bw.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/level-ball-bw.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/max-potion-bw.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/switch.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/sacred-ash.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/tropical-beach-2012.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Darrell Moreno',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/garbodor.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Jon Bristow',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pyroar.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016/pyroar.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/litleo-xy.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/charizard-ex.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/mewtwo-ex.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/blacksmith.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/switch.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/roller-skates.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/bicycle.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/pokemon-catcher-flip.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/level-ball-bw.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/tropical-beach-2012.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/energy/xy-energy-fire.png',
        numImg: '../../../../assets/08.png',
      },
      {
        cardImg: '../../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Mike Newey',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/lugia.png',
    sprite2: '../../../../assets/sprites/deoxys.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Ryan Sabelhaus',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/lugia.png',
    sprite2: '../../../../assets/sprites/deoxys.png',
    list: '../../../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016/lugia-ex-plasma.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/thundurus-ex.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/deoxys-ex.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/absol-plasma.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/shauna.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/shadow-triad.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/dowsing-machine.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/colress-machine.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/bicycle.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/switch.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/team-plasma-ball.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/escape-rope-bw.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/xy-energy-lightning.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-plasma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/prism-energy.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/xy-energy-rainbow.png',
        numImg: '../../../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Brad Curcio',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pyroar.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016/pyroar.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/litleo-xy.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/electrode.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/voltorb-burst.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/charizard-ex.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/mewtwo-ex.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/jirachi-ex.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/blacksmith.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/bicycle.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/pokemon-catcher-flip.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/fiery-torch.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/switch.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/professors-letter.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/energy/xy-energy-fire.png',
        numImg: '../../../../assets/08.png',
      },
      {
        cardImg: '../../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Russell LaParre',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/flygon.png',
    sprite2: '../../../../assets/sprites/dusknoir.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016/flygon.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/vibrava.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/trapinch.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/accelgor.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/shelmet-plb.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/dusknoir.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/dusclops.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/duskull.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/mewtwo-ex.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/mr-mime.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/ghetsis.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/dowsing-machine.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/rare-candy-bw.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/level-ball-bw.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/max-potion-bw.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/enhanced-hammer-bw.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Frank Diaz',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/flygon.png',
    sprite2: '../../../../assets/sprites/dusknoir.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Christopher Nguyen',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/yveltal.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Ishaan Jagiasi',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/empoleon.png',
    sprite2: '../../../../assets/sprites/dusknoir.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2010-2012/empoleon.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2010-2012/prinplup.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2010-2012/piplup.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/dusknoir.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/dusclops.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/duskull.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/miltank.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/exeggcute.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/jirachi-ex.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/dowsing-machine.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/rare-candy-bw.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/super-rod-drv.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/switch.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/level-ball-bw.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/tropical-beach-2012.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/energy/xy-energy-water.png',
        numImg: '../../../../assets/06.png',
      },
    ]
  },
  {
    firstName: 'Jeremiah Williams',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/yveltal.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016/yveltal-ex.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/darkrai-ex.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/bouffalant.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/yveltal.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/absol-plasma.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/sableye-junk-hunt.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/dark-patch.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/energy-switch-bw.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/random-receiver.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/pokemon-catcher-flip.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/bicycle.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/professors-letter.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/energy/xy-energy-dark.png',
        numImg: '../../../../assets/08.png',
      },
      {
        cardImg: '../../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Seth Hanslik',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pyroar.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016/pyroar.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/litleo-xy.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/electrode.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/voltorb.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/mewtwo-ex.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/druddigon.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/blacksmith.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/switch.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/pal-pad.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/super-rod-bw.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/level-ball-bw.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/tropical-beach-2012.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/energy/xy-energy-fire.png',
        numImg: '../../../../assets/08.png',
      },
      {
        cardImg: '../../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Jon Eng',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pyroar.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016/pyroar.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/litleo-xy.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/charizard-ex.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/electrode.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/voltorb-burst.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/mewtwo-ex.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/jirachi-ex.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/n-promo.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/blacksmith.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../../assets/02.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/ultra-ball.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/pokemon-catcher-flip.png',
        numImg: '../../../../assets/04.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/switch.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/professors-letter.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/level-ball-bw.png',
        numImg: '../../../../assets/01.png',
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/muscle-band.png',
        numImg: '../../../../assets/03.png',
      },
      {
        cardImg: '../../../../assets/cards/energy/xy-energy-fire.png',
        numImg: '../../../../assets/08.png',
      },
      {
        cardImg: '../../../../assets/cards/energy/dce-xy1.png',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Andy Younger',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/virizion.png',
    sprite2: '../../../../assets/sprites/raichu.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Jon-Luke Modory',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/virizion.png',
    sprite2: '../../../../assets/sprites/genesect.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Rachel Schmaus',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/raichu.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
      },
    ]
  },
  {
    firstName: 'Hatch Cunningham',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/yveltal.png',
    sprite2: '../../../../assets/sprites/raichu.png',
    // list: '../../../../assets/list-icon.png',
    list: '../../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016',
        numImg: '../../../../assets/04.png',
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

    if (item.list === '../../../../assets/list-icon.png') {
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

    if (item.list === '../../../../assets/list-icon.png') {
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

    if (item.list === '../../../../assets/list-icon.png') {
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
