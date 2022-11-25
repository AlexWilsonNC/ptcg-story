const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Stéphane Ivanoff',
    flag: '../../../../assets/flags/france.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/dewgong.png',
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
        cardImg: '../../../../assets/cards/2019-2020/dewgong.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/seel.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/persian-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/meowth.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/naganadel-gx-psychic.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/poipole-eye.png',
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
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/mew.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow.png',
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
        cardImg: '../../../../assets/cards/2019-2020/judge.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/acerola.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tate-n-liza.png',
        numImg: '../../../../assets/01.png'
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
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/02.png'
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
        cardImg: '../../../../assets/cards/energy/dce.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/triple-acceleration.png',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Emery Taylor',
    flag: '../../../../assets/flags/usa.png',
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
        cardImg: '../../../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/marshadow-let-loose.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/raikou.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-lele-gx.png',
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
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electropower.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/energy-switch.png',
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
        cardImg: '../../../../assets/cards/2019-2020/electromagnetic-radar.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/field-blower.png',
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
    firstName: 'Nathaniel Kaplan',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/blacephalon.png',
    list: '../../../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/baby-blacephalon.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/blacephalon-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/victini-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/greens-exploration.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/welder.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/bills-analysis.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lusamine-p.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/fire-crystal.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/fiery-flint.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/acro-bike.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/energy-retrieval.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/wishful-baton.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-space.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/heat-factory.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/fire-energy-teu.png',
        numImg: '../../../../assets/13.png'
      },
    ]
  },
  {
    firstName: 'Diego Cassiraga',
    flag: '../../../../assets/flags/argentina.png',
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
        cardImg: '../../../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/dedenne-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/marshadow-let-loose.png',
        numImg: '../../../../assets/02.png'
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
        numImg: '../../../../assets/02.png'
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
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/energy-switch.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/electromagnetic-radar.png',
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
    firstName: 'Martin Janouš',
    flag: '../../../../assets/flags/czech-republic.png',
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
        cardImg: '../../../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/jirachi-stellar-wish.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/gengar-mimikyu-gx.png',
        numImg: '../../../../assets/01.png'
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
        cardImg: '../../../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/guzma.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/cynthia.png',
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
        cardImg: '../../../../assets/cards/2019-2020/switch.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/ultra-ball.png',
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
        cardImg: '../../../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../../../assets/01.png'
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
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Magnus Pedersen',
    flag: '../../../../assets/flags/denmark.png',
    sprite1: '../../../../assets/sprites/zapdos.png',
    sprite2: '../../../../assets/sprites/buzzwole.png',
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
        cardImg: '../../../../assets/cards/2019-2020/zebstrika.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/blitzle.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/marshadow.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2018-17/tapu-koko-gx.png',
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
        cardImg: '../../../../assets/cards/2019-2020/escape-rope.png',
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
        cardImg: '../../../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/shrineofpunush.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../../../assets/05.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/fighting-energy-teu.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Preston Ellis',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/lucario-melmetal-tagteam.png',
    sprite2: '../../../../assets/sprites/vileplume.png',
    list: '../../../../assets/list-icon.png',
    type: 'metal',
    deck: [
      {
        cardImg: '../../../../assets/cards/2019-2020/lucario-melmateal-gx.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/vileplume.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/oddish.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/lapras.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/bronzong-fireproof.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/bronzor.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020/unown-hand.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2019-2020',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Hunter Butler',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/spiritomb.png',
    sprite2: '../../../../assets/sprites/stunfisk.png',
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
    firstName: 'Bert Wolters',
    flag: '../../../../assets/flags/netherlands.png',
    sprite1: '../../../../assets/sprites/reshiram-charizard-tagteam.png',
    sprite2: '../../../../assets/sprites/volcanion.png',
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
    firstName: 'Grant Manley',
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
    firstName: 'Ondřej Škubal',
    flag: '../../../../assets/flags/czech-republic.png',
    sprite1: '../../../../assets/sprites/spiritomb.png',
    sprite2: '../../../../assets/sprites/umbreon.png',
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
    firstName: 'Noah Sawyer',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/malamar.png',
    sprite2: '../../../../assets/sprites/giratina.png',
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
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/dewgong.png',
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
    firstName: 'Gustavo Wada',
    flag: '../../../../assets/flags/brazil.png',
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
    firstName: 'Vance Kelley',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/regigigas.png',
    sprite2: '../../../../assets/sprites/hoopa-unbound.png',
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
    firstName: 'Pedro Torres',
    flag: '../../../../assets/flags/spain.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/persian.png',
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
    firstName: 'Philipp Leciejewski',
    flag: '../../../../assets/flags/germany.png',
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
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/blacephalon.png',
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
    firstName: 'Otavio Gouveia',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/reshiram-charizard-tagteam.png',
    sprite2: '../../../../assets/sprites/snorlax-eevee-tagteam.png',
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
    firstName: 'James Simmerman',
    flag: '../../../../assets/flags/usa.png',
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
    firstName: 'Tom Weiner',
    flag: '../../../../assets/flags/usa.png',
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
    firstName: 'Alessandro Cremascoli',
    flag: '../../../../assets/flags/italy.png',
    sprite1: '../../../../assets/sprites/regigigas.png',
    sprite2: '../../../../assets/sprites/hoopa-unbound.png',
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
    firstName: 'Nathan Brower',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/zapdos.png',
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
    firstName: 'Steven Singer',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/weezing.png',
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
    firstName: 'Drew Kennett',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/blissey.png',
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
    firstName: 'Matthew Reenalda',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/reshiram-charizard-tagteam.png',
    sprite2: '../../../../assets/sprites/snorlax-eevee-tagteam.png',
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
    firstName: 'Mike Newey',
    flag: '../../../../assets/flags/usa.png',
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
    firstName: 'Ryan Antonucci',
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
    firstName: 'Alex Bunker',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/reshiram-charizard-tagteam.png',
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
    firstName: 'Jit Min Lim',
    flag: '../../../../assets/flags/singapore.png',
    sprite1: '../../../../assets/sprites/nidoqueen.png',
    sprite2: '../../../../assets/sprites/meganium.png',
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
    firstName: "Francis O'Brien",
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
    firstName: 'Daniel Lynch',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/gardevoir.png',
    sprite2: '../../../../assets/sprites/ninetales-alola.png',
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
    firstName: 'Kevin Tran',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/regigigas.png',
    sprite2: '../../../../assets/sprites/hoopa-unbound.png',
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
    firstName: 'Lucas Pereira',
    flag: '../../../../assets/flags/brazil.png',
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
    firstName: 'Phong Nguyen',
    flag: '../../../../assets/flags/czech-republic.png',
    sprite1: '../../../../assets/sprites/spiritomb.png',
    sprite2: '../../../../assets/sprites/umbreon.png',
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
    firstName: 'Aaron Tarbell',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/reshiram-charizard-tagteam.png',
    sprite2: '../../../../assets/sprites/arcanine.png',
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
    firstName: 'Steven Mao',
    flag: '../../../../assets/flags/germany.png',
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
    firstName: 'Andrew Martin',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/quagsire.png',
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
    firstName: 'Jonathan Croxton',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/persian.png',
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
    firstName: 'Isaac Milaski',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/dewgong.png',
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
    firstName: 'Athavan Akilan',
    flag: '../../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/silvally.png',
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
    firstName: 'Tommy Pettinicchio',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/zapdos.png',
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
    firstName: 'Dean Nezam',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/reshiram-charizard-tagteam.png',
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
    firstName: 'Kyle Madison',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/dewgong.png',
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
    firstName: 'James Hart',
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
    firstName: 'João Zambrano',
    flag: '../../../../assets/flags/brazil.png',
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
    firstName: 'Josh Alvarez',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/regigigas.png',
    sprite2: '../../../../assets/sprites/hoopa-unbound.png',
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
    firstName: 'Ricky Gao',
    flag: '../../../../assets/flags/canada.png',
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
    firstName: 'Dennis Peroff',
    flag: '../../../../assets/flags/canada.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/zapdos.png',
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
    firstName: 'Charlie Lockyer',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/doublade.png',
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
    firstName: 'Peter Kica',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/regigigas.png',
    sprite2: '../../../../assets/sprites/hoopa-unbound.png',
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
    firstName: 'Ty Starr',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/spiritomb.png',
    sprite2: '../../../../assets/sprites/umbreon.png',
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
    firstName: 'Andrew Mondak',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/reshiram-charizard-tagteam.png',
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
    firstName: 'Diego Carrilo',
    flag: '../../../../assets/flags/mexico.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/reshiram-charizard-tagteam.png',
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
    firstName: 'Zachery Stover',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/spiritomb.png',
    sprite2: '../../../../assets/sprites/umbreon.png',
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
    firstName: 'Cameron Kawasaki',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/reshiram-charizard-tagteam.png',
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
    firstName: 'Charles Collier',
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
    firstName: 'Kendon Kula',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/zoroark.png',
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
    firstName: 'Isaiah Williams',
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
    firstName: 'Cory Dickman',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/weezing.png',
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
    firstName: 'Rosa Klint',
    flag: '../../../../assets/flags/denmark.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/zapdos.png',
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
    firstName: 'Hector Ibarra',
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
    firstName: 'Justin Kulas',
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
    firstName: 'Chris Siakala',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/spiritomb.png',
    sprite2: '../../../../assets/sprites/umbreon.png',
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
]

let seniors = [
  {
    firstName: 'Isaiah Bradner',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/persian.png',
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
    firstName: 'Regan Retzloff',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/weezing.png',
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
    firstName: 'Rowan Stavenow',
    flag: '../../../../assets/flags/canada.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/persian.png',
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
    firstName: 'Lucas Xing',
    flag: '../../../../assets/flags/canada.png',
    sprite1: '../../../../assets/sprites/zoroark.png',
    sprite2: '../../../../assets/sprites/persian.png',
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
    firstName: 'Mateus Rocha',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/zapdos.png',
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
    firstName: 'Frank Mintmire',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/weezing.png',
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
    firstName: 'Kaya Lichtleitner',
    flag: '../../../../assets/flags/germany.png',
    sprite1: '../../../../assets/sprites/lucario-melmetal-tagteam.png',
    sprite2: '../../../../assets/sprites/hoopa-unbound.png',
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
    firstName: 'João Penteado',
    flag: '../../../../assets/flags/brazil.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/reshiram-charizard-tagteam.png',
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
]

let juniors = [
  {
    firstName: 'Benny Billinger',
    flag: '../../../../assets/flags/canada.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/zapdos.png',
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
    firstName: 'Evan Pavelski',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/spiritomb.png',
    sprite2: '../../../../assets/sprites/umbreon.png',
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
    firstName: 'Daniel Magda',
    flag: '../../../../assets/flags/czech-republic.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/zapdos.png',
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
    firstName: 'Pedro Augusto',
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
    firstName: 'Jaysen Metersky',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/reshiram-charizard-tagteam.png',
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
    firstName: 'Rohan Scott',
    flag: '../../../../assets/flags/uk.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/reshiram-charizard-tagteam.png',
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
    firstName: 'Marley Skyum',
    flag: '../../../../assets/flags/denmark.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/reshiram-charizard-tagteam.png',
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
    firstName: 'Caleb Knicely',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/weezing.png',
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2020 LAIC";

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

    if (item.list === '../../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2020 LAIC";

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

    if (item.list === '../../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2020 LAIC";

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
