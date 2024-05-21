const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'John Roberts II',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/klinklang.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/klinklang-bw.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/klang-bw.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/klink-bw.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/darkrai-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/groudon-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/kyogre-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex-nxd.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/cobalion-nvi.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n-bw.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/pont.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/copycat.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/heavy-ball-bw.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/max-potion-bw.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/junk-arm.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rare-candy-bw.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/random-receiver.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/pokemon-communication-bw.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/revive.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/eviolite.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/bw-energy-metal.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/prism-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/rainbow-energy-hgss.png',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kevin Nance',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mewtwo.png',
    sprite2: '../../../assets/sprites/eelektrik.png',
    list: '../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012/mewtwo-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/eelektross-nvi.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/eelektrik.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/tynamo-nvi.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/tynamo-dex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/smeargle.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/zekrom.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/raikou-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/shaymin.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/professor-juniper.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/pont.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/n-bw.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/junk-arm.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/dual-ball.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/max-potion-bw.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/switch-bw.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/level-ball.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/pluspower.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/super-rod-bw.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/random-receiver.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/skyarrow-bridge.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/bw-energy-lightning.png',
        numImg: '../../../assets/08.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-bw.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Jay Hornung',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/darkrai.png',
    sprite2: '../../../assets/sprites/mewtwo.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012/darkrai-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/mewtwo-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/smeargle.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/shaymin.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/n-bw.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/professor-juniper.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/pont.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/ultra-ball-bw.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/junk-arm.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/dark-patch.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/random-receiver.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/switch-bw.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/pluspower.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/eviolite.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/skyarrow-bridge.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/bw-energy-dark.png',
        numImg: '../../../assets/10.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-bw.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Chris Murray',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/celebi.png',
    sprite2: '../../../assets/sprites/mewtwo.png',
    list: '../../../assets/list-icon.png',
    type: 'grass',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012/celebi-prime.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/smeargle.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/mewtwo-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/tornadus-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/terrakion-nvi.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/shaymin.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/professor-juniper.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/n-bw.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/junk-arm.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/random-receiver.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/switch-bw.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/dual-ball.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/pluspower.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/super-scoop-up.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/revive.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/energy-retrieval-bw.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/eviolite.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/skyarrow-bridge.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/bw-energy-grass.png',
        numImg: '../../../assets/07.png'
      },
      {
        cardImg: '../../../assets/cards/energy/bw-energy-fighting.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-bw.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Ashon Haswell',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mewtwo.png',
    sprite2: '../../../assets/sprites/eelektrik.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tom Dolezal',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/darkrai.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012/darkrai-ex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/smeargle.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/professor-juniper.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/pont.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/junk-arm.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/dark-patch.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/random-receiver.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/ultra-ball-bw.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/pluspower.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/switch-bw.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/eviolite.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/skyarrow-bridge.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/bw-energy-dark.png',
        numImg: '../../../assets/10.png'
      },
      {
        cardImg: '../../../assets/cards/energy/darkness-energy-hgss.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Breton Brander',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/darkrai.png',
    sprite2: '../../../assets/sprites/mewtwo.png',
     // list: '../../../assets/list-icon.png',
     list: '../../../assets/sprites/blank.png',
     type: 'dark',
     deck: [
       {
         cardImg: '../../../assets/cards/2014-2016',
         numImg: '../../../assets/04.png'
       },
     ]
  },
  {
    firstName: 'Carl Scheu',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/darkrai.png',
    sprite2: '../../../assets/sprites/mewtwo.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012/darkrai-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/mewtwo-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/smeargle.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/tornadus-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/shaymin.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/professor-juniper.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/pont.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/n-bw.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/junk-arm.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/dark-patch.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/ultra-ball-bw.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/dual-ball.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/pluspower.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/potion-bw.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/random-receiver.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/switch-bw.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/super-scoop-up.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/super-rod-bw.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/eviolite.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/skyarrow-bridge.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/bw-energy-dark.png',
        numImg: '../../../assets/09.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-bw.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Harrison Leven',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/chandelure.png',
    sprite2: '../../../assets/sprites/accelgor.png',
    list: '../../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012/mew-prime.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/accelgor.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/chandelure.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/lampent.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/litwick.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/vileplume.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/oddish.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/darkrai-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/shaymin.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/relicanth.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/pichu.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/poke-collector.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/twins.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/sages-training.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/n-bw.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/professor-juniper.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/pokemon-communication-bw.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/rare-candy-bw.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/bw-energy-dark.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/rainbow-energy-hgss.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-bw.png',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Dylan Bryan',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mismagius.png',
    sprite2: '../../../assets/sprites/vileplume.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012/mismagius.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/misdreavus.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/vileplume.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/gloom.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/oddish.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/darkrai-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/mewtwo-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/terrakion-nvi.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/kyurem-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/shaymin-ex-nxd.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/virizion.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/smeargle.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/unown-cure.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/poke-collector.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/sages-training.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/pont.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/twins.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/n-bw.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/seeker.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/black-belt.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/rare-candy-bw.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/pokemon-communication-bw.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/opke-center.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/prism-energy.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/rainbow-energy-hgss.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-bw.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/rescue-energy.png',
        numImg: '../../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Stephen Clark',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/darkrai.png',
    sprite2: '../../../assets/sprites/unown-a.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jeremy Jallen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mewtwo.png',
    sprite2: '../../../assets/sprites/eelektrik.png',
    list: '../../../assets/list-icon.png',
    type: 'lightning',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012/mewtwo-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/eelektrik.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/tynamo-nvi.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/tynamo-dex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/zekrom.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/smeargle.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/raikou-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/shaymin.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/sages-training.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/professor-juniper.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/poke-collector.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/n-bw.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/junk-arm.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/level-ball.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/switch-bw.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/max-potion-bw.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/super-rod-bw.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/eviolite.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/skyarrow-bridge.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/bw-energy-lightning.png',
        numImg: '../../../assets/09.png'
      },
      {
        cardImg: '../../../assets/cards/energy/dce-bw.png',
        numImg: '../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Dallan Fell',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/celebi.png',
    sprite2: '../../../assets/sprites/mewtwo.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'John Kettler',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/chandelure.png',
    sprite2: '../../../assets/sprites/accelgor.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Toby Natale',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zekrom.png',
    sprite2: '../../../assets/sprites/eelektrik.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Simon Narode',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/darkrai.png',
    sprite2: '../../../assets/sprites/mewtwo.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Alan Schell',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Alex Frezza',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/darkrai.png',
    sprite2: '../../../assets/sprites/mewtwo.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jason Klaczynski',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/scizor.png',
    sprite2: '../../../assets/sprites/vileplume.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Edmund Kuras',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/vanilluxe.png',
    sprite2: '../../../assets/sprites/vileplume.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Erik Nance',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mewtwo.png',
    sprite2: '../../../assets/sprites/eelektrik.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Stephon Robinson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Azul Griego',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/celebi.png',
    sprite2: '../../../assets/sprites/mewtwo.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nicholas Baker',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zekrom.png',
    sprite2: '../../../assets/sprites/eelektrik.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kevin Kobayashi',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zekrom.png',
    sprite2: '../../../assets/sprites/eelektrik.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jimmy Ballard',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/scizor.png',
    sprite2: '../../../assets/sprites/vileplume.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012/scizor-prime.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/scyther-air-slash.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/vileplume.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/oddish.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/shaymin.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/darkrai-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/virizion.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/terrakion-nvi.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/terrakion-emp.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/shaymin-ex-nxd.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/unown-cure.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/poke-collector.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/sages-training.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/n-bw.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/seeker.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/twins.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/cheren.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/rare-candy-bw.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/pokemon-communication-bw.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/bw-energy-metal.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/special-metal-energy-hgss.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/rainbow-energy-hgss.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/prism-energy.png',
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Bohdan Pelekh',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/kyurem.png',
    list: '../../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
                cardImg: '../../../assets/cards/2010-2012/kyurem.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2010-2012/kyurem-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2010-2012/kyogre-ex.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2010-2012/mewtwo-ex.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2010-2012/shaymin.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2010-2012/pont.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2010-2012/n-bw.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2010-2012/professor-juniper.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2010-2012/junk-arm.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2010-2012/dual-ball.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2010-2012/pokemon-catcher.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2010-2012/random-receiver.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2010-2012/super-scoop-up.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2010-2012/switch-bw.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2010-2012/max-potion-bw.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2010-2012/pluspower.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2010-2012/super-rod-bw.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2010-2012/exp-share.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/energy/bw-energy-water.png',
                numImg: '../../../assets/09.png',
            },
            {
                cardImg: '../../../assets/cards/energy/dce-bw.png',
                numImg: '../../../assets/04.png',
            },
    ]
  },
  {
    firstName: 'Jacob Rebescher',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/darkrai.png',
    sprite2: '../../../assets/sprites/mewtwo.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Caleb Cline',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/celebi.png',
    sprite2: '../../../assets/sprites/mewtwo.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Christopher Nguyen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zekrom.png',
    sprite2: '../../../assets/sprites/eelektrik.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kennan Mell',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zekrom.png',
    sprite2: '../../../assets/sprites/eelektrik.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Zachary Mirman',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zekrom.png',
    sprite2: '../../../assets/sprites/eelektrik.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Ty Wheeler',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mewtwo.png',
    sprite2: '../../../assets/sprites/terrakion.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
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
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/darkrai.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Sean Hipp',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/darkrai.png',
    sprite2: '../../../assets/sprites/mewtwo.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Brandon Smiley',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/darkrai.png',
    sprite2: '../../../assets/sprites/mewtwo.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jeremy Gibson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Alan-luc Nguyen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/terrakion.png',
    sprite2: '../../../assets/sprites/eelektrik.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Seth Hanslik',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/landorus.png',
    sprite2: '../../../assets/sprites/terrakion.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kaitlyn Young',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Ian Robb',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/darkrai.png',
    sprite2: '../../../assets/sprites/sableye.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jonathan Croxton',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/celebi.png',
    sprite2: '../../../assets/sprites/mewtwo.png',
    list: '../../../assets/list-icon.png',
    type: 'grass',
    deck: [
      {
        cardImg: '../../../assets/cards/2010-2012/celebi-prime.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/terrakion-nvi.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/mewtwo-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/smeargle.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/shaymin.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/professor-juniper.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/n-bw.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/pont.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/junk-arm.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/dual-ball.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/switch-bw.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/random-receiver.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/energy-search.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/pluspower.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/super-rod-bw.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/energy-retrieval-bw.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/eviolite.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2010-2012/skyarrow-bridge.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/bw-energy-grass.png',
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/energy/bw-energy-fighting.png',
        numImg: '../../../assets/05.png'
      },
    ]
  },
  {
    firstName: 'Daniel Sargent',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/darkrai.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Natalia Routhier',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/darkrai.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Anthony Menchaca',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/celebi.png',
    sprite2: '../../../assets/sprites/mewtwo.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Morgan Davies',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Shane K-Burke',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Michael Catron',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016',
        numImg: '../../../assets/04.png'
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
    if (item.banned === true) {
      playerName.classList.add('crossed-out');
    }

    let flagImg = document.createElement('img');
        flagImg.classList.add('flag-size');
        flagImg.setAttribute('src', item.flag);

        let countryName = document.createElement('div');
        countryName.classList.add('country-name');
        countryName.style.display = 'none';

        flagImg.addEventListener('mouseover', function() {
            if (flagImg.getAttribute('src').includes('argentina')) {
                countryName.textContent = 'Argentina (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('australia')) {
                countryName.textContent = 'Australia (Oceania)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('austria')) {
                countryName.textContent = 'Austria (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('belarus')) {
                countryName.textContent = 'Belarus (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('belgium')) {
                countryName.textContent = 'Belgium (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('brazil')) {
                countryName.textContent = 'Brazil (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('canada')) {
                countryName.textContent = 'Canada (North America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('chile')) {
                countryName.textContent = 'Chile (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('china')) {
                countryName.textContent = 'China (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('colombia')) {
                countryName.textContent = 'Colombia (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('croatia')) {
                countryName.textContent = 'Croatia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('czech-republic')) {
                countryName.textContent = 'Czechia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('denmark')) {
                countryName.textContent = 'Denmark (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('el-salvador')) {
                countryName.textContent = 'El Salvador (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('finland')) {
                countryName.textContent = 'Finland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('france')) {
                countryName.textContent = 'France (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('germany')) {
                countryName.textContent = 'Germany (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('greece')) {
                countryName.textContent = 'Greece (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('hong-kong')) {
                countryName.textContent = 'Hong Kong (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('indonesia')) {
                countryName.textContent = 'Indonesia (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('ireland')) {
                countryName.textContent = 'Ireland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('isreal')) {
                countryName.textContent = 'Israel (Middle East-South Africa)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('italy')) {
                countryName.textContent = 'Italy (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('japan')) {
                countryName.textContent = 'Japan (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('korea')) {
                countryName.textContent = 'South Korea (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('malaysia')) {
                countryName.textContent = 'Malaysia (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('malta')) {
                countryName.textContent = 'Malta (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('mexico')) {
                countryName.textContent = 'Mexico (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('moroco')) {
                countryName.textContent = 'Moroco (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('netherlands')) {
                countryName.textContent = 'Netherlands (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('new-zealand')) {
                countryName.textContent = 'New Zealand (Oceania)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('nicaragua')) {
                countryName.textContent = 'Nicaragua (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('norway')) {
                countryName.textContent = 'Norway (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('peru')) {
                countryName.textContent = 'Peru (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('philippines')) {
                countryName.textContent = 'Philippines (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('poland')) {
                countryName.textContent = 'Poland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('portugal')) {
                countryName.textContent = 'Portugal (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('puerto-rico')) {
                countryName.textContent = 'Puerto Rico (North America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('russia')) {
                countryName.textContent = 'Russia (Russia)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('singapore')) {
                countryName.textContent = 'Singapore (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('slovakia')) {
                countryName.textContent = 'Slovakia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('south-africa')) {
                countryName.textContent = 'South Africa (Middle East-South Africa)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('spain')) {
                countryName.textContent = 'Spain (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('sweden')) {
                countryName.textContent = 'Sweden (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('switzerland')) {
                countryName.textContent = 'Switzerland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('taiwan')) {
                countryName.textContent = 'Taiwan (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('thailand')) {
                countryName.textContent = 'Thailand (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('uk')) {
                countryName.textContent = 'United Kingdom (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('usa')) {
                countryName.textContent = 'USA (North America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('unknown')) {
                countryName.textContent = 'Unknown';
                countryName.style.display = 'block';
            }
        });

        flagImg.addEventListener('mouseout', function() {
            countryName.style.display = 'none';
        });

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
        playerName.appendChild(countryName); // Append the country name element
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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2012 US Nats";

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
    if (item.banned === true) {
      playerName.classList.add('crossed-out');
    }

    let flagImg = document.createElement('img');
        flagImg.classList.add('flag-size');
        flagImg.setAttribute('src', item.flag);

        let countryName = document.createElement('div');
        countryName.classList.add('country-name');
        countryName.style.display = 'none';

        flagImg.addEventListener('mouseover', function() {
            if (flagImg.getAttribute('src').includes('argentina')) {
                countryName.textContent = 'Argentina (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('australia')) {
                countryName.textContent = 'Australia (Oceania)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('austria')) {
                countryName.textContent = 'Austria (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('belarus')) {
                countryName.textContent = 'Belarus (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('belgium')) {
                countryName.textContent = 'Belgium (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('brazil')) {
                countryName.textContent = 'Brazil (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('canada')) {
                countryName.textContent = 'Canada (North America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('chile')) {
                countryName.textContent = 'Chile (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('china')) {
                countryName.textContent = 'China (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('colombia')) {
                countryName.textContent = 'Colombia (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('croatia')) {
                countryName.textContent = 'Croatia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('czech-republic')) {
                countryName.textContent = 'Czechia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('denmark')) {
                countryName.textContent = 'Denmark (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('el-salvador')) {
                countryName.textContent = 'El Salvador (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('finland')) {
                countryName.textContent = 'Finland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('france')) {
                countryName.textContent = 'France (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('germany')) {
                countryName.textContent = 'Germany (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('greece')) {
                countryName.textContent = 'Greece (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('hong-kong')) {
                countryName.textContent = 'Hong Kong (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('indonesia')) {
                countryName.textContent = 'Indonesia (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('ireland')) {
                countryName.textContent = 'Ireland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('isreal')) {
                countryName.textContent = 'Israel (Middle East-South Africa)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('italy')) {
                countryName.textContent = 'Italy (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('japan')) {
                countryName.textContent = 'Japan (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('korea')) {
                countryName.textContent = 'South Korea (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('malaysia')) {
                countryName.textContent = 'Malaysia (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('malta')) {
                countryName.textContent = 'Malta (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('mexico')) {
                countryName.textContent = 'Mexico (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('moroco')) {
                countryName.textContent = 'Moroco (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('netherlands')) {
                countryName.textContent = 'Netherlands (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('new-zealand')) {
                countryName.textContent = 'New Zealand (Oceania)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('nicaragua')) {
                countryName.textContent = 'Nicaragua (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('norway')) {
                countryName.textContent = 'Norway (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('peru')) {
                countryName.textContent = 'Peru (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('philippines')) {
                countryName.textContent = 'Philippines (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('poland')) {
                countryName.textContent = 'Poland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('portugal')) {
                countryName.textContent = 'Portugal (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('puerto-rico')) {
                countryName.textContent = 'Puerto Rico (North America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('russia')) {
                countryName.textContent = 'Russia (Russia)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('singapore')) {
                countryName.textContent = 'Singapore (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('slovakia')) {
                countryName.textContent = 'Slovakia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('south-africa')) {
                countryName.textContent = 'South Africa (Middle East-South Africa)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('spain')) {
                countryName.textContent = 'Spain (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('sweden')) {
                countryName.textContent = 'Sweden (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('switzerland')) {
                countryName.textContent = 'Switzerland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('taiwan')) {
                countryName.textContent = 'Taiwan (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('thailand')) {
                countryName.textContent = 'Thailand (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('uk')) {
                countryName.textContent = 'United Kingdom (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('usa')) {
                countryName.textContent = 'USA (North America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('unknown')) {
                countryName.textContent = 'Unknown';
                countryName.style.display = 'block';
            }
        });

        flagImg.addEventListener('mouseout', function() {
            countryName.style.display = 'none';
        });

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
        playerName.appendChild(countryName); // Append the country name element
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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2012 US Nats";

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
    if (item.banned === true) {
      playerName.classList.add('crossed-out');
    }

    let flagImg = document.createElement('img');
        flagImg.classList.add('flag-size');
        flagImg.setAttribute('src', item.flag);

        let countryName = document.createElement('div');
        countryName.classList.add('country-name');
        countryName.style.display = 'none';

        flagImg.addEventListener('mouseover', function() {
            if (flagImg.getAttribute('src').includes('argentina')) {
                countryName.textContent = 'Argentina (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('australia')) {
                countryName.textContent = 'Australia (Oceania)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('austria')) {
                countryName.textContent = 'Austria (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('belarus')) {
                countryName.textContent = 'Belarus (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('belgium')) {
                countryName.textContent = 'Belgium (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('brazil')) {
                countryName.textContent = 'Brazil (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('canada')) {
                countryName.textContent = 'Canada (North America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('chile')) {
                countryName.textContent = 'Chile (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('china')) {
                countryName.textContent = 'China (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('colombia')) {
                countryName.textContent = 'Colombia (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('croatia')) {
                countryName.textContent = 'Croatia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('czech-republic')) {
                countryName.textContent = 'Czechia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('denmark')) {
                countryName.textContent = 'Denmark (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('el-salvador')) {
                countryName.textContent = 'El Salvador (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('finland')) {
                countryName.textContent = 'Finland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('france')) {
                countryName.textContent = 'France (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('germany')) {
                countryName.textContent = 'Germany (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('greece')) {
                countryName.textContent = 'Greece (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('hong-kong')) {
                countryName.textContent = 'Hong Kong (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('indonesia')) {
                countryName.textContent = 'Indonesia (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('ireland')) {
                countryName.textContent = 'Ireland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('isreal')) {
                countryName.textContent = 'Israel (Middle East-South Africa)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('italy')) {
                countryName.textContent = 'Italy (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('japan')) {
                countryName.textContent = 'Japan (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('korea')) {
                countryName.textContent = 'South Korea (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('malaysia')) {
                countryName.textContent = 'Malaysia (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('malta')) {
                countryName.textContent = 'Malta (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('mexico')) {
                countryName.textContent = 'Mexico (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('moroco')) {
                countryName.textContent = 'Moroco (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('netherlands')) {
                countryName.textContent = 'Netherlands (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('new-zealand')) {
                countryName.textContent = 'New Zealand (Oceania)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('nicaragua')) {
                countryName.textContent = 'Nicaragua (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('norway')) {
                countryName.textContent = 'Norway (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('peru')) {
                countryName.textContent = 'Peru (Latin America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('philippines')) {
                countryName.textContent = 'Philippines (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('poland')) {
                countryName.textContent = 'Poland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('portugal')) {
                countryName.textContent = 'Portugal (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('puerto-rico')) {
                countryName.textContent = 'Puerto Rico (North America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('russia')) {
                countryName.textContent = 'Russia (Russia)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('singapore')) {
                countryName.textContent = 'Singapore (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('slovakia')) {
                countryName.textContent = 'Slovakia (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('south-africa')) {
                countryName.textContent = 'South Africa (Middle East-South Africa)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('spain')) {
                countryName.textContent = 'Spain (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('sweden')) {
                countryName.textContent = 'Sweden (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('switzerland')) {
                countryName.textContent = 'Switzerland (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('taiwan')) {
                countryName.textContent = 'Taiwan (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('thailand')) {
                countryName.textContent = 'Thailand (Asia-Pacific)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('uk')) {
                countryName.textContent = 'United Kingdom (Europe)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('usa')) {
                countryName.textContent = 'USA (North America)';
                countryName.style.display = 'block';
            }
            if (flagImg.getAttribute('src').includes('unknown')) {
                countryName.textContent = 'Unknown';
                countryName.style.display = 'block';
            }
        });

        flagImg.addEventListener('mouseout', function() {
            countryName.style.display = 'none';
        });

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
        playerName.appendChild(countryName); // Append the country name element
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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2012 US Nats";

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
