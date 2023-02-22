const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');
// https://limitlesstcg.com/tournaments/150
let masters = [
  {
    firstName: 'Isaiah Williams',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/zapdos.png',
    list: '../../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/oranguru-instruct.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/kukui.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/energy-loto.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/shrineofpunush.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/08.png'
      },
    ]
  },
  {
    firstName: 'Stéphane Ivanoff',
    flag: '../../../../assets/flags/france.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/zoroark-gx.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zorua.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lycanroc-gx-midnight.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rockruff.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lucario-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/riolu.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/alolan-muk.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/diancie-p.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/acerola.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/judge.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/mallow.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/field-blower.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/palpad.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/wondrous-lab.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/fighting-energy-teu.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/dce.png',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kaiwen Cabbabe',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/zapdos.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jolteon-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/eevee.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/wobbufet.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/volkner.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/10.png'
      },
    ]
  },
  {
    firstName: 'Jose Marrero',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/rayquaza-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/marshadow-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/oranguru-instruct.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/acro-bike.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/multi-switch.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/wondrous-lab.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/12.png'
      },
    ]
  },
  {
    firstName: 'Bert Wolters',
    flag: '../../../../assets/flags/netherlands.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/zapdos.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/buzzwole.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nihilego.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zebstrika.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/blitzle.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/volkner.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/shrineofpunush.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/05.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/rainbow-energy-cel.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Lucas Pereira',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/zapdos.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/volkner.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/aether-paradise.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/11.png'
      },
    ]
  },
  {
    firstName: 'Henry Brand',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/zoroark-gx.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zorua.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lycanroc-gx-midnight.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lycanroc-gx-dusk.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/rockruff-corner.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/alolan-muk.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/grimer-alolan-dark.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/acerola.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/kukui.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/judge.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/mallow.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/timer-ball.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/multi-switch.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/counter-gain.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/devoured-field.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/fighting-energy-teu.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/dce.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/rainbow-energy-cel.png',
        numImg: '../../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Daniel Altavilla',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/zapdos.png',
    list: '../../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/oranguru-instruct.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/kukui.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/energy-loto.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/shrineofpunush.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/08.png'
      },
    ]
  },
  {
    firstName: 'Christian Hasbani',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma-ultra.png',
    list: '../../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/malamar.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/inkay.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/necrozma-ultra.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/acerola.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../../../assets/07.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/metal-energy-teu.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Robin Schulz',
    flag: '../../../../assets/flags/germany.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/zapdos.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/buzzwole.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nihilego.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zebstrika.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/blitzle.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/volkner.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/shrineofpunush.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/05.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/rainbow-energy-cel.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Azul Griego',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/zapdos.png',
    list: '../../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/oranguru-instruct.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/kukui.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/energy-loto.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/shrineofpunush.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/08.png'
      },
    ]
  },
  {
    firstName: 'Rahul Reddy',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/zapdos.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/volkner.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/11.png'
      },
    ]
  },
  {
    firstName: 'Sam Chen',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/zapdos.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/volkner.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/11.png'
      },
    ]
  },
  {
    firstName: 'Karl Peters',
    flag: '../../../../assets/flags/germany.png',
    sprite1: '../../../../assets/sprites/zapdos.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    list: '../../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lycanroc-gx-midnight.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rockruff.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/buzzwole.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/wobbufet.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/volkner.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/beast-ring.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/07.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/fighting-energy-teu.png',
        numImg: '../../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Jordan Palmer',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma-ultra.png',
    list: '../../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/malamar.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/inkay.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/necrozma-ultra.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/acerola.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../../../assets/07.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/metal-energy-teu.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Andrew Tandianus',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma-ultra.png',
    list: '../../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/malamar.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/inkay.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/necrozma-ultra.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/gengar-mimikyu-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-flying-flip.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/acerola.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/acro-bike.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../../../assets/07.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/metal-energy-teu.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Bastian Silva',
    flag: '../../../../assets/flags/chile.png',
    sprite1: '../../../../assets/sprites/zapdos.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Bryan de Vries',
    flag: '../../../../assets/flags/france.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/zapdos.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/buzzwole.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nihilego.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zebstrika.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/blitzle.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/volkner.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/shrineofpunush.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/05.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/rainbow-energy-cel.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Otavio Gouveia',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma-ultra.png',
    list: '../../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/malamar.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/inkay.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/necrozma-ultra.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../../../assets/07.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/metal-energy-teu.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Alex Silva',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma-ultra.png',
    list: '../../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/malamar.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/inkay.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/necrozma-ultra.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/necrozma-dawn-wings.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../../../assets/07.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/metal-energy-teu.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../../../assets/01.png'
      },
    ]
  },
  {
    firstName: "Darin O'Meara",
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma.png',
    list: '../../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/malamar.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/inkay.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/gengar-mimikyu-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/necrozma-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/necrozma-dawn-wings.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/chimecho.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/acro-bike.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/friend-ball.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../../../assets/10.png'
      },
    ]
  },
  {
    firstName: 'Pedro Torres',
    flag: '../../../../assets/flags/spain.png',
    sprite1: '../../../../assets/sprites/zapdos.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/volkner.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/11.png'
      },
    ]
  },
  {
    firstName: 'Max Prescott',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/zoroark-gx.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zorua.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lycanroc-gx-midnight.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/rockruff-corner.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/buzzwole.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/alolan-muk.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/alolan-grimer-division.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/acerola.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/kukui.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/mallow.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/counter-gain.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/devoured-field.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/fighting-energy-teu.png',
        numImg: '../../../../assets/05.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/dce.png',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Preston Ellis',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/zoroark-gx.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zorua.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lycanroc-gx-midnight.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/rockruff-corner.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/ninetales-gx-fairy.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/vulpix-alolan.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/alolan-muk.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/grimer-alolan-dark.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/weavile.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/sneasel.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/acerola.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/kukui.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/mallow.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/judge.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/palpad.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/max-potion.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/counter-gain.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/bodybuilding-dumbells.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/black-market-p.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/dce.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/unit-energy-darkfightingfairy.png',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'James Williams',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/volkner.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/acerola.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/acro-bike.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/12.png'
      },
    ]
  },
  {
    firstName: 'Nicolas Galaz',
    flag: '../../../../assets/flags/chile.png',
    sprite1: '../../../../assets/sprites/zapdos.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/volkner.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/aether-paradise.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/11.png'
      },
    ]
  },
  {
    firstName: 'Fabien Pujol',
    flag: '../../../../assets/flags/france.png',
    sprite1: '../../../../assets/sprites/zapdos.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/volkner.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/11.png'
      },
    ]
  },
  {
    firstName: 'Joshua Sparks',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/zapdos.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/buzzwole.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nihilego.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/diancie-p.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/kukui.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/energy-loto.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/adventure-bag.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/shrineofpunush.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/rainbow-energy-cel.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/unit-energy-lm.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Raz Wolpe',
    flag: '../../../../assets/flags/isreal.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma-ultra.png',
    list: '../../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/malamar.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/inkay.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/necrozma-ultra.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/acro-bike.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../../../assets/06.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/metal-energy-teu.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Daniel Ross-Brown',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jon Eng',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/zoroark-gx.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zorua.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lycanroc-gx-midnight.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/rockruff-corner.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/ninetales-gx-fairy.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/vulpix-alolan.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/alolan-muk.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/grimer-alolan-dark.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/weavile.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/sneasel.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/acerola.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/kukui.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/mallow.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/judge.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/palpad.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/max-potion.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/counter-gain.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/bodybuilding-dumbells.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/black-market-p.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/dce.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/unit-energy-darkfightingfairy.png',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Zach Lesage',
    flag: '../../../../assets/flags/canada.png',
    sprite1: '../../../../assets/sprites/blacephalon.png',
    sprite2: '../../../../assets/sprites/naganadel.png',
    list: '../../../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/blacephalon-gx.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/naganadel.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/poipole-spit.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/beast-ring.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-space.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/heat-factory.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/fire-energy-teu.png',
        numImg: '../../../../assets/15.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Jarrod Taylor',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/volkner.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lisia.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/acro-bike.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/12.png'
      },
    ]
  },
  {
    firstName: 'Layton Rumble',
    flag: '../../../../assets/flags/new-zealand.png',
    sprite1: '../../../../assets/sprites/zapdos.png',
    sprite2: '../../../../assets/sprites/jolteon.png',
    list: '../../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/buzzwole.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jolteon-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/eevee.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/volkner.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/beast-ring.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/07.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/fighting-energy-teu.png',
        numImg: '../../../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Mohamad Razak',
    flag: '../../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma-ultra.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nathan Hanns',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/blacephalon.png',
    sprite2: '../../../../assets/sprites/naganadel.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Michael Pramawat',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/zapdos.png',
    list: '../../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/oranguru-instruct.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/kukui.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/energy-loto.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/shrineofpunush.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/08.png'
      },
    ]
  },
  {
    firstName: 'Bertrand Yan',
    flag: '../../../../assets/flags/singapore.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma-ultra.png',
    list: '../../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/malamar.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/inkay.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/necrozma-ultra.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../../../assets/07.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/metal-energy-teu.png',
        numImg: '../../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Gustavo Wada',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/volkner.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/aether-paradise.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/11.png'
      },
    ]
  },
  {
    firstName: 'Joey Ruettiger',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/zapdos.png',
    list: '../../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/oranguru-instruct.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/kukui.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/energy-loto.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/shrineofpunush.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/08.png'
      },
    ]
  },
  {
    firstName: 'Alex Schemanske',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma-ultra.png',
    list: '../../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/malamar.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/inkay.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/necrozma-ultra.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/gengar-mimikyu-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/marshadow-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/necrozma-dawn-wings.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/beast-ring.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../../../assets/07.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/metal-energy-teu.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Joshua Bradley',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/jumpluff.png',
    sprite2: '../../../../assets/sprites/weavile.png',
    list: '../../../../assets/list-icon.png',
    type: 'grass',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/jumpluff.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/skiploom.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/hoppip.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/trumbeak.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/natu.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/weavile.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/sneasel-2nd-turn.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/oranguru-instruct.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/great-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/net-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lost-blender.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/shrineofpunush.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/grass-energy-teu.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/dce.png',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Blake Wightman',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma-ultra.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Christopher Schemanske',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma-ultra.png',
    list: '../../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/malamar.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/inkay.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/necrozma-ultra.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/gengar-mimikyu-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/marshadow-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/necrozma-dawn-wings.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/beast-ring.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../../../assets/07.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/metal-energy-teu.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Colin Tang',
    flag: '../../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../../assets/sprites/buzzwole.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    list: '../../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17/buzzwole-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/buzzwole.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lycanroc-gx-midnight.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rockruff.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/ninetales-gx-fairy.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/vulpix-alolan.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/diancie-p.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/alolan-muk.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/kukui.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/judge.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lisia.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/beast-ring.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/multi-switch.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/field-blower.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/brooklet-hill.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/fighting-energy-teu.png',
        numImg: '../../../../assets/07.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/unit-energy-darkfightingfairy.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Benjamin Branch',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/passimian.png',
    sprite2: '../../../../assets/sprites/tapu-koko.png',
    list: '../../../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../../../assets/cards/2018-17/passimian-team-play.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/passimian-huddle.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-flying-flip.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-lele.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/victini-v-beatdown.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/diancie-p.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/kukui.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/gladion.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/energy-loto.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/counter-catcher.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/shrineofpunush.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/dce.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/counter-energy.png',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tommy Le',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/zoroark-gx.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zorua.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lycanroc-gx-midnight.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/rockruff-corner.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/weavile.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/sneasel.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/alolan-muk.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/grimer-alolan-dark.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/acerola.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/kukui.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/judge.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/mallow.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/timer-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/multi-switch.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/palpad.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/counter-gain.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/devoured-field.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/fighting-energy-teu.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/dce.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/unit-energy-darkfightingfairy.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/rainbow-energy-cel.png',
        numImg: '../../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Luca Serianni',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/raikou.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/volkner.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/acerola.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/aether-paradise.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/11.png'
      },
    ]
  },
  {
    firstName: 'Gabriel Massaroth',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma-ultra.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Justin Kulas',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/rayquaza-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/marshadow-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/oranguru-instruct.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/acro-bike.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/multi-switch.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/wondrous-lab.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/12.png'
      },
    ]
  },
  {
    firstName: 'Louis Chi',
    flag: '../../../../assets/flags/new-zealand.png',
    sprite1: '../../../../assets/sprites/zapdos.png',
    sprite2: '../../../../assets/sprites/jolteon.png',
    list: '../../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/buzzwole.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jolteon-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/eevee.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/volkner.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/beast-ring.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/field-blower.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/07.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/fighting-energy-teu.png',
        numImg: '../../../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Sameer Sangwan',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Aaron Van Der Kolk',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma-ultra.png',
    list: '../../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/malamar.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/inkay.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/necrozma-ultra.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/acerola.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../../../assets/07.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/metal-energy-teu.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Abraham Morales',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Connor Finton',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma-ultra.png',
    list: '../../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/malamar.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/inkay.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/necrozma-ultra.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/marshadow-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/necrozma-dawn-wings.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/acro-bike.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../../../assets/06.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/metal-energy-teu.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Blake Davies',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/passimian.png',
    sprite2: '../../../../assets/sprites/tapu-koko.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Brent Tonisson',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma-ultra.png',
    list: '../../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/malamar.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/inkay.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/necrozma-ultra.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/acerola.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../../../assets/07.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/metal-energy-teu.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Joey Ho',
    flag: '../../../../assets/flags/singapore.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma-ultra.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Mitch Knuckey',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma-ultra.png',
    // list: '../../../../assets/list-icon.png',
        list: '../../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Eujun Gan',
    flag: '../../../../assets/flags/singapore.png',
    sprite1: '../../../../assets/sprites/zapdos.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jolteon-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/eevee.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/volkner.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/10.png'
      },
    ]
  },
  {
    firstName: 'Yu Xiang',
    flag: '../../../../assets/flags/new-zealand.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma-ultra.png',
    list: '../../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/malamar.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/inkay.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/ultra-necrozma-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/necrozma-dawn-wings.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/mimikyu.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-flying-flip.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/chimecho.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/acro-bike.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../../../assets/07.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/metal-energy-teu.png',
        numImg: '../../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Nicholas Apostolou',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/raikou.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/volkner.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/aether-paradise.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/12.png'
      },
    ]
  },
  {
    firstName: 'Joseph Tran',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/zoroark-gx.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zorua.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lycanroc-gx-midnight.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lycanroc-gx-dusk.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/rockruff-corner.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/alolan-muk.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/grimer-alolan.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/oranguru-resource-manag.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/acerola.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/kukui.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/judge.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/timer-ball.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/multi-switch.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/palpad.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/field-blower.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/counter-gain.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/devoured-field.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/fighting-energy-teu.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/dce.png',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Scott Langford',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/zoroark-gx.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zorua.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lycanroc-gx-midnight.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lycanroc-gx-dusk.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/rockruff-corner.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/weavile.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/sneasel.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/alolan-muk.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/oranguru-resource-manag.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/acerola.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/judge.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/plumeria.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/timer-ball.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/palpad.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/counter-gain.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/devoured-field.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/fighting-energy-teu.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/dce.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/unit-energy-darkfightingfairy.png',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
]
// www.pokemon.com/us/play-pokemon/internationals/2019/oceania/tcg-junior

let seniors = [
  {
    firstName: 'Alexandre Solé',
    flag: '../../../../assets/flags/belgium.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/magcargo.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/zoroark-gx.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zorua.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/alolan-muk.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/grimer-alolan-dark.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lycanroc-gx-midnight.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/rockruff-corner.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/magcargo.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/slugma.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/girafarig.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/sableye-limitation.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/oranguru-resource-manag.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/acerola.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/plumeria.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/gladion.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/skull-grunt.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/counter-catcher.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/enhanced-hammer-gri.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/palpad.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lysandre-lab.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/mount-lanakila.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/wondrous-lab.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/dce.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/rainbow-energy-cel.png',
        numImg: '../../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Asger Balle',
    flag: '../../../../assets/flags/australia.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/zoroark-gx.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zorua.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lycanroc-gx-midnight.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/rockruff-corner.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/alolan-muk.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/alolan-grimer-division.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/weavile.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/sneasel-2nd-turn.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/acerola.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/kukui.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/palpad.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/counter-gain.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/devoured-field.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/dce.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/unit-energy-darkfightingfairy.png',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Lucas Xing',
    flag: '../../../../assets/flags/canada.png',
    sprite1: '../../../../assets/sprites/zapdos.png',
    sprite2: '../../../../assets/sprites/jolteon.png',
    list: '../../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jolteon-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/eevee.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/kukui.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/volkner.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/08.png'
      },
    ]
  },
  {
    firstName: 'Rowan Stavenow',
    flag: '../../../../assets/flags/canada.png',
    sprite1: '../../../../assets/sprites/zapdos.png',
    sprite2: '../../../../assets/sprites/jolteon.png',
    list: '../../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jolteon-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/eevee.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zebstrika.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/blitzle.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/kukui.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/08.png'
      },
    ]
  },
  {
    firstName: 'Tanner Hurley',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/zapdos.png',
    list: '../../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/oranguru-instruct.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/kukui.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/energy-loto.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/shrineofpunush.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/08.png'
      },
    ]
  },
  {
    firstName: 'Kaya Lichtleitner',
    flag: '../../../../assets/flags/germany.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma-ultra.png',
    list: '../../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/malamar.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/inkay.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/necrozma-ultra.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../../../assets/07.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/metal-energy-teu.png',
        numImg: '../../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Pedro Pertusi',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/zapdos.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/buzzwole.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nihilego.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/diancie-p.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/volkner.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/shrineofpunush.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/rainbow-energy-cel.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Rune Heiremans',
    flag: '../../../../assets/flags/belgium.png',
    sprite1: '../../../../assets/sprites/zapdos.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/volkner.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/11.png'
      },
    ]
  },
]
// www.pokemon.com/us/play-pokemon/internationals/2019/oceania/tcg-junior
let juniors = [
  {
    firstName: 'Simon Belanyi',
    flag: '../../../../assets/flags/slovakia.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/raikou.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/acro-bike.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/wondrous-lab.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/12.png'
      },
    ]
  },
  {
    firstName: 'Jean Cardoso',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/volkner.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/acerola.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lisia.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/acro-bike.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/12.png'
      },
    ]
  },
  {
    firstName: 'Shannon Rochester',
    flag: '../../../../assets/flags/new-zealand.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/pikachu-zekrom-tagteam.png',
    list: '../../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/volkner.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lisia.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/acro-bike.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/aether-paradise.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/12.png'
      },
    ]
  },
  {
    firstName: 'Roan Godfrey-Robbins',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blacephalon.png',
    sprite2: '../../../../assets/sprites/naganadel.png',
    list: '../../../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/blacephalon-gx.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/naganadel.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/poipole-spit.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/poipole-eye.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/beast-ring.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-space.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/heat-factory.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/fire-energy-teu.png',
        numImg: '../../../../assets/15.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Benny Billinger',
    flag: '../../../../assets/flags/canada.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/zapdos.png',
    list: '../../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/oranguru-instruct.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/absol.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/kukui.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/volkner.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/energy-loto.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/shrineofpunush.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/08.png'
      },
    ]
  },
  {
    firstName: 'Pedro Cavalcanti',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/necrozma-ultra.png',
    list: '../../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/malamar.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/inkay.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/ultra-necrozma-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/necrozma-dawn-wings.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escapeboard.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../../../assets/07.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/metal-energy-teu.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Noah Donen',
    flag: '../../../../assets/flags/canada.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/zoroark-gx.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zorua.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lycanroc-gx-midnight.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/rockruff-corner.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/ninetales-gx-fairy.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/vulpix-alolan.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/alolan-muk.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/grimer-alolan-dark.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/weavile.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/sneasel.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/acerola.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/judge.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/mallow.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/kukui.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/palpad.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/counter-gain.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/devoured-field.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/dce.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/unit-energy-darkfightingfairy.png',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Taylor Johnson',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/lycanroc-midnight.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/zoroark-gx.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zorua.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lycanroc-gx-midnight.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/rockruff-corner.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/rockruff-promo.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/ninetales-gx-fairy.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/vulpix-alolan.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/alolan-muk.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/grimer-alolan-dark.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/weavile.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/sneasel.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lillie.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/acerola.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/judge.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/mallow.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/kukui.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/pokemon-comm.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/palpad.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/max-potion.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/counter-gain.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/bodybuilding-dumbells.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/black-market-p.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/dce.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/unit-energy-darkfightingfairy.png',
        numImg: '../../../../assets/04.png'
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2019 OCIC";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2019 OCIC";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2019 OCIC";

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
