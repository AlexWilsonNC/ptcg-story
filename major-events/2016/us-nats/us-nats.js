const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Nick Robinson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/vespiquen.png',
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
                cardImg: '../../../assets/cards/2014-2016/vespiquen.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/combee.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/unown.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/03.png',
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
                cardImg: '../../../assets/cards/2014-2016/teammates.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/xerosic.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/puzzle-of-time.png',
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
                cardImg: '../../../assets/cards/2014-2016/enhanced-hammer.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/town-map.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/energy/xy-dce.png',
                numImg: '../../../assets/04.png',
            },
    ]
  },
  {
    firstName: 'Marcos Garcia',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/giratina-origin.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
            {
                cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/giratina-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/03.png',
            },
            {
              cardImg: '../../../assets/cards/2014-2016/latios-ex.png',
              numImg: '../../../assets/01.png',
          },
            {
                cardImg: '../../../assets/cards/2014-2016/hoopa-ex.png',
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
                cardImg: '../../../assets/cards/2014-2016/n.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/skyla-bkp.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/giovannis-scheme.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/az.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/team-flare-grunt.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/xerosic.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/puzzle-of-time.png',
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
                cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/ffb.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/head-ringer.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/silent-lab.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/team-aquas-secret-base.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/energy/xy-dce.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/energy/double-dragon-energy.png',
                numImg: '../../../assets/04.png',
            },
    ]
  },
  {
    firstName: 'Paul Johnston',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manaphy.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
            {
                cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/manaphy-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/glaceon-ex.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/hoopa-ex.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/regice.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/articuno.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../../assets/04.png',
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
                cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/xerosic.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/az.png',
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
                cardImg: '../../../assets/cards/2014-2016/max-elixir.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/energy-switch.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/super-rod.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/ffb.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/energy/water-energy-generations.png',
                numImg: '../../../assets/11.png',
            },
    ]
  },
  {
    firstName: 'Liam Williams',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/darkrai.png',
    sprite2: '../../../assets/sprites/giratina-origin.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
            {
                cardImg: '../../../assets/cards/2014-2016/darkrai-ex-bkp.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/giratina-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/hydreigon-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/latios-ex.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/hoopa-ex.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/yveltal-generations.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/n.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/az.png',
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
                cardImg: '../../../assets/cards/2014-2016/max-elixir.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../../assets/03.png',
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
                cardImg: '../../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/ffb.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/parallel-city.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/energy/dark-energy-generations.png',
                numImg: '../../../assets/10.png',
            },
            {
                cardImg: '../../../assets/cards/energy/double-dragon-energy.png',
                numImg: '../../../assets/04.png',
            },
    ]
  },
  {
    firstName: 'Chris Siakala',
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
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/mew.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/jirachi.png',
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
                cardImg: '../../../assets/cards/2014-2016/n.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/teammates.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/az.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/puzzle-of-time.png',
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
                cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/target-whistle.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/energy/metal-energy-generations.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/energy/xy-dce.png',
                numImg: '../../../assets/04.png',
            },
    ]
  },
  {
    firstName: 'Michael Bergerac',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/trevenant.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
            {
                cardImg: '../../../assets/cards/2014-2016/trevenant-break.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/trevenant.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/phantump-ascension.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2018-17/wally.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/team-flare-grunt.png',
                numImg: '../../../assets/02.png',
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
                cardImg: '../../../assets/cards/2014-2016/delinquent.png',
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
                cardImg: '../../../assets/cards/2014-2016/crushing-hammer-xy.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/red-card.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/super-rod.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/head-ringer.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/energy/psychic-energy-generations.png',
                numImg: '../../../assets/07.png',
            },
    ]
  },
  {
    firstName: 'Jamie DePamphilis',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/trevenant.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
            {
                cardImg: '../../../assets/cards/2014-2016/trevenant-break.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/trevenant.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/phantump-ascension.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/absol.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2018-17/wally.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/team-flare-grunt.png',
                numImg: '../../../assets/02.png',
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
                cardImg: '../../../assets/cards/2014-2016/delinquent.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/az.png',
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
                cardImg: '../../../assets/cards/2014-2016/crushing-hammer-xy.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/red-card.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/super-rod.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/head-ringer.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/weakness-policy.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/energy/psychic-energy-generations.png',
                numImg: '../../../assets/07.png',
            },
    ]
  },
  {
    firstName: 'Fred Hoban',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/vespiquen.png',
    sprite2: '../../../assets/sprites/vileplume.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
            {
                cardImg: '../../../assets/cards/2014-2016/vespiquen.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/combee.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/vileplume.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/gloom.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/oddish.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/unown.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/bunnelby.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/az.png',
                numImg: '../../../assets/02.png',
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
                cardImg: '../../../assets/cards/2014-2016/revitalizer.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/forest-of-giant-plants.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/energy/xy-dce.png',
                numImg: '../../../assets/04.png',
            },
    ]
  },
  {
    firstName: 'Kolton Day',
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
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/unown.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/mew.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/gallade.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/marowak.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/n.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/maxie-hidden-ball-trick.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/puzzle-of-time.png',
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
                cardImg: '../../../assets/cards/2014-2016/acro-bike.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/super-rod.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/target-whistle.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/energy/fighting-energy-generations.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/energy/xy-dce.png',
                numImg: '../../../assets/04.png',
            },
    ]
  },
  {
    firstName: 'Russell LaParre',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manaphy.png',
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
    firstName: 'Sorina Radu',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/darkrai.png',
    sprite2: '../../../assets/sprites/giratina-origin.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
            {
                cardImg: '../../../assets/cards/2014-2016/darkrai-ex-bkp.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/giratina-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/hydreigon-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/latios-ex.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/hoopa-ex.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/yveltal-generations.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/n.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/az.png',
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
                cardImg: '../../../assets/cards/2014-2016/max-elixir.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../../assets/03.png',
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
                cardImg: '../../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/ffb.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/parallel-city.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/energy/dark-energy-generations.png',
                numImg: '../../../assets/10.png',
            },
            {
                cardImg: '../../../assets/cards/energy/double-dragon-energy.png',
                numImg: '../../../assets/04.png',
            },
    ]
  },
  {
    firstName: 'Jeremy Gibson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
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
    firstName: 'Steven Singer',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/trevenant.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
            {
                cardImg: '../../../assets/cards/2014-2016/trevenant-break.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/trevenant.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/phantump-ascension.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/wobbuffet.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../../assets/03.png',
            },
            {
              cardImg: '../../../assets/cards/2014-2016/n.png',
              numImg: '../../../assets/03.png',
          },
            {
                cardImg: '../../../assets/cards/2018-17/wally.png',
                numImg: '../../../assets/03.png',
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
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/super-rod.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/bursting-balloon.png',
                numImg: '../../../assets/04.png',
            },
            {
              cardImg: '../../../assets/cards/2014-2016/float-stone.png',
              numImg: '../../../assets/02.png',
          },
            {
              cardImg: '../../../assets/cards/2014-2016/head-ringer.png',
              numImg: '../../../assets/01.png',
          },
            {
                cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/energy/psychic-energy-generations.png',
                numImg: '../../../assets/05.png',
            },
            {
                cardImg: '../../../assets/cards/energy/mystery-energy.png',
                numImg: '../../../assets/03.png',
            },
    ]
  },
  {
    firstName: 'Jimmy Pendarvis',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manaphy.png',
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
    firstName: 'Daniel Lynch',
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
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/skyla-bkp.png',
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
        cardImg: '../../../assets/cards/2014-2016/super-scoop-up.png',
        numImg: '../../../assets/04.png'
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
        cardImg: '../../../assets/cards/energy/water-energy-generations.png',
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-dce.png',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kian Amini',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
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
    firstName: 'Lance Bradshaw',
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
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/wobbuffet-generations.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/garbodor-garbotoxin.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/trubbish-acid-spray.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/jolteon-ex.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/hoopa-ex.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../../assets/04.png',
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
                cardImg: '../../../assets/cards/2014-2016/az.png',
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
                cardImg: '../../../assets/cards/2014-2016/max-elixir.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/manectric-spirit-link.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/energy/lightning-energy-generations.png',
                numImg: '../../../assets/05.png',
            },
            {
                cardImg: '../../../assets/cards/energy/psychic-energy-generations.png',
                numImg: '../../../assets/05.png',
            },
    ]
  },
  {
    firstName: 'Andrew Krekeler',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/trevenant.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
            {
                cardImg: '../../../assets/cards/2014-2016/trevenant-break.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/trevenant.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/phantump-ascension.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/wobbuffet.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../../assets/04.png',
            },
            {
              cardImg: '../../../assets/cards/2014-2016/n.png',
              numImg: '../../../assets/02.png',
          },
            {
                cardImg: '../../../assets/cards/2018-17/wally.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/team-flare-grunt.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/az.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/delinquent.png',
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
                cardImg: '../../../assets/cards/2014-2016/crushing-hammer-xy.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/super-rod.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/bursting-balloon.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/energy/psychic-energy-generations.png',
                numImg: '../../../assets/05.png',
            },
            {
                cardImg: '../../../assets/cards/energy/mystery-energy.png',
                numImg: '../../../assets/03.png',
            },
    ]
  },
  {
    firstName: 'Sam VerNooy',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
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
    firstName: 'Ahmed Ali',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
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
    firstName: 'Justin Aaron',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
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
    firstName: 'Tyler Ninomura',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zygarde-complete.png',
    sprite2: '../../../assets/sprites/vileplume.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
            {
                cardImg: '../../../assets/cards/2014-2016/zygarde-ex.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/carbink-break.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/carbink-safegaurd.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/vileplume.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/gloom.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/oddish.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/lucario-ex.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/zygarde.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/az.png',
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
                cardImg: '../../../assets/cards/2014-2016/pokemon-center-lady.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/level-ball.png',
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
                cardImg: '../../../assets/cards/2014-2016/revitalizer.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/heavy-ball.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/ffb.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/forest-of-giant-plants.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/energy/fighting-energy-generations.png',
                numImg: '../../../assets/06.png',
            },
            {
                cardImg: '../../../assets/cards/energy/strong-energy.png',
                numImg: '../../../assets/04.png',
            },
    ]
  },
  {
    firstName: 'Ryan Bruckner',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
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
    firstName: 'Elijah Covitz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/medicham.png',
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
    firstName: 'Conner LaVelle',
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
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/mew.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/n.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/teammates.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/xerosic.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/puzzle-of-time.png',
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
                cardImg: '../../../assets/cards/2014-2016/acro-bike.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/target-whistle.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/enhanced-hammer.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/town-map.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/ffb.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/energy/xy-dce.png',
                numImg: '../../../assets/04.png',
            },
    ]
  },
  {
    firstName: 'Jeremy Jallen',
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
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/mew.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/jirachi.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../../assets/03.png',
            },
            {
              cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
              numImg: '../../../assets/01.png',
          },
            {
                cardImg: '../../../assets/cards/2014-2016/n.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/teammates.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/puzzle-of-time.png',
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
                cardImg: '../../../assets/cards/2014-2016/target-whistle.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/ffb.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/energy/metal-energy-generations.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/energy/xy-dce.png',
                numImg: '../../../assets/04.png',
            },
    ]
  },
  {
    firstName: 'Drew Guritzky',
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
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/mew.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/n.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/teammates.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/xerosic.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/puzzle-of-time.png',
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
                cardImg: '../../../assets/cards/2014-2016/pokemon-catcher-flip.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/target-whistle.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/enhanced-hammer.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/buddy-buddy-resuce.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/ffb.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/parallel-city.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/energy/xy-dce.png',
                numImg: '../../../assets/04.png',
            },
    ]
  },
  {
    firstName: 'Kevin Baxter',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/zoroark.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
            {
                cardImg: '../../../assets/cards/2014-2016/yveltal-generations.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/yveltal-fright-night.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/zoroark-break.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/zoroark-stand-in.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/zorua-confuse.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/gallade.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/druddigon.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/maxie-hidden-ball-trick.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/n.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/giovannis-scheme.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/xerosic.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/target-whistle.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/reverse-valley.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/energy/dark-energy-generations.png',
                numImg: '../../../assets/05.png',
            },
            {
                cardImg: '../../../assets/cards/energy/xy-dce.png',
                numImg: '../../../assets/04.png',
            },
    ]
  },
  {
    firstName: 'Taylor Duffin',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/greninja.png',
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
    firstName: 'Jorge Garcia',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/vespiquen.png',
    sprite2: '../../../assets/sprites/zoroark.png',
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
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/vespiquen.png',
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
    firstName: 'Ryan Grant',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
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
    firstName: 'Grafton Roll',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zygarde-complete.png',
    sprite2: '../../../assets/sprites/carbink.png',
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
    firstName: 'Jason Annichiarico',
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
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/mew.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/jirachi.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/n.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/teammates.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/puzzle-of-time.png',
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
                cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/target-whistle.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/enhanced-hammer.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/buddy-buddy-resuce.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/town-map.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/ffb.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/energy/lightning-energy-generations.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/energy/xy-dce.png',
                numImg: '../../../assets/04.png',
            },
    ]
  },
  {
    firstName: 'Aaron Clarke',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zygarde-complete.png',
    sprite2: '../../../assets/sprites/carbink.png',
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
    firstName: 'Andrew Wamboldt',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/vespiquen.png',
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
                cardImg: '../../../assets/cards/2014-2016/vespiquen.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/combee.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/unown.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/03.png',
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
                cardImg: '../../../assets/cards/2014-2016/n.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/teammates.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/xerosic.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/puzzle-of-time.png',
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
              cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
              numImg: '../../../assets/02.png',
          },
            {
                cardImg: '../../../assets/cards/2014-2016/enhanced-hammer.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/town-map.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/parallel-city.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/energy/xy-dce.png',
                numImg: '../../../assets/04.png',
            },
    ]
  },
  {
    firstName: 'Edwin Lopez',
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
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/mew.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/jirachi.png',
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
              cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
              numImg: '../../../assets/01.png',
          },
            {
                cardImg: '../../../assets/cards/2014-2016/n.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/teammates.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/puzzle-of-time.png',
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
                cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/buddy-buddy-resuce.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/ffb.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/energy/metal-energy-generations.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/energy/xy-dce.png',
                numImg: '../../../assets/04.png',
            },
    ]
  },
  {
    firstName: 'Brad Curcio',
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
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/mew.png',
                numImg: '../../../assets/02.png',
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
              cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
              numImg: '../../../assets/02.png',
          },
            {
                cardImg: '../../../assets/cards/2014-2016/n.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/teammates.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/az.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/pokemon-ranger.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/puzzle-of-time.png',
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
                cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/target-whistle.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/energy/psychic-energy-generations.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/energy/xy-dce.png',
                numImg: '../../../assets/04.png',
            },
    ]
  },
  {
    firstName: 'Mike Fouchet',
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
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/03.png',
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
              cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
              numImg: '../../../assets/01.png',
          },
            {
                cardImg: '../../../assets/cards/2014-2016/n.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/teammates.png',
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
                cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/puzzle-of-time.png',
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
                cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/target-whistle.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/enhanced-hammer.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/town-map.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/ffb.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/energy/xy-dce.png',
                numImg: '../../../assets/04.png',
            },
    ]
  },
  {
    firstName: 'Damien Hardy',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
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
    firstName: 'Christian Ortiz',
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
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/mew.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/jirachi.png',
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
              cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
              numImg: '../../../assets/01.png',
          },
            {
                cardImg: '../../../assets/cards/2014-2016/n.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/teammates.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/puzzle-of-time.png',
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
                cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/buddy-buddy-resuce.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/ffb.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/energy/metal-energy-generations.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/energy/xy-dce.png',
                numImg: '../../../assets/04.png',
            },
    ]
  },
  {
    firstName: 'Dan Heilmeier',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
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
    firstName: 'David Olivas',
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
    firstName: 'John Foster',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/rayquaza-mega.png',
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
    firstName: 'Aaron Tarbell',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/trevenant.png',
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
    firstName: 'Eddie Caumiant',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/bronzong.png',
    sprite2: '../../../assets/sprites/aegislash.png',
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
    firstName: 'Michael Slutsky',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/greninja.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
            {
                cardImg: '../../../assets/cards/2014-2016/greninja-break.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/greninja.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/greninja-shuriken.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/frogadier-water-duplicates.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/froakie-bubble.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/jirachi.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/n.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/fisherman.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/delinquent.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/dive-ball.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/level-ball.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/sacred-ash.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/bursting-balloon.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/energy/water-energy-generations.png',
                numImg: '../../../assets/08.png',
            },
    ]
  },
  {
    firstName: 'Stefan Tabaco',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/aromatisse.png',
    sprite2: '../../../assets/sprites/seismitoad.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/aromatisse.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/spritzee-beat.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/spritzee-sweet-scent.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/m-rayquaza-ex-colorless.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rayquaza-ex-dragon-promo.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sylveon-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/giratina-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/malamar-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manaphy-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hoopa-ex.png',
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
        cardImg: '../../../assets/cards/2014-2016/n.png',
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
        cardImg: '../../../assets/cards/2014-2016/pokemon-fan-club.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/skyla-bkp.png',
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
        cardImg: '../../../assets/cards/2014-2016/max-potion.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/fairy-drop.png',
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
        cardImg: '../../../assets/cards/2014-2016/sky-field.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/fairy-garden.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/fairy-energy-generations.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-energy-rainbow.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-dce.png',
        numImg: '../../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Jeffrey Cheng',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/medicham.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
            {
                cardImg: '../../../assets/cards/2014-2016/medicham.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/meditite.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/carbink-break.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/carbink-safegaurd.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/regirock-ex.png',
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
                cardImg: '../../../assets/cards/2014-2016/korrina.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/n.png',
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
                cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
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
                cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/level-ball.png',
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
                cardImg: '../../../assets/cards/2014-2016/focus-sash.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/fighting-stadium.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/energy/fighting-energy-generations.png',
                numImg: '../../../assets/05.png',
            },
            {
                cardImg: '../../../assets/cards/energy/strong-energy.png',
                numImg: '../../../assets/04.png',
            },
    ]
  },
  {
    firstName: 'JC Sharp',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/vespiquen.png',
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
    firstName: 'Jared Butler',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/manectric-mega.png',
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
    firstName: 'Travis Nunlist',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manaphy.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
            {
                cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/manaphy-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/aurorus-ex.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/hoopa-ex.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/regice.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/articuno.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/n.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/xerosic.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/az.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/team-flare-grunt.png',
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
                cardImg: '../../../assets/cards/2014-2016/max-elixir.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/energy-switch.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/ffb.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/energy/water-energy-generations.png',
                numImg: '../../../assets/12.png',
            },
    ]
  },
  {
    firstName: 'Frank Diaz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/zoroark.png',
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
    firstName: 'Travis McKain',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
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
    firstName: 'Ronald Marlow',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zygarde-complete.png',
    sprite2: '../../../assets/sprites/carbink.png',
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
                cardImg: '../../../assets/cards/2014-2016/raikou.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/hoopa-ex.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../../assets/04.png',
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
                cardImg: '../../../assets/cards/2014-2016/az.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/giovannis-scheme.png',
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
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/professors-letter.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/enhanced-hammer.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/switch.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/manectric-spirit-link.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/parallel-city.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/energy/lightning-energy-generations.png',
                numImg: '../../../assets/07.png',
            },
            {
                cardImg: '../../../assets/cards/energy/water-energy-generations.png',
                numImg: '../../../assets/03.png',
            },
    ]
  },
  {
    firstName: 'Branden Jackson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zygarde-complete.png',
    sprite2: '../../../assets/sprites/carbink.png',
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
    firstName: 'Darrell Moreno',
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
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/mew.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/jirachi.png',
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
              cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
              numImg: '../../../assets/01.png',
          },
            {
                cardImg: '../../../assets/cards/2014-2016/n.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/teammates.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/puzzle-of-time.png',
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
                cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/buddy-buddy-resuce.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/ffb.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/energy/metal-energy-generations.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/energy/xy-dce.png',
                numImg: '../../../assets/04.png',
            },
    ]
  },
  {
    firstName: 'Alex Koch',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/manectric-mega.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/m-manectric-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jolteon-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mew.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trevenant-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lugia-ex-ces.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/01.png'
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
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/giovannis-scheme.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
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
        cardImg: '../../../assets/cards/2014-2016/max-elixir.png',
        numImg: '../../../assets/04.png'
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
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/lightning-energy-generations.png',
        numImg: '../../../assets/06.png'
      },
      {
        cardImg: '../../../assets/cards/energy/grass-energy-generations.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-dce.png',
        numImg: '../../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Kevin Murphy',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/vileplume.png',
    sprite2: '../../../assets/sprites/jolteon.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
            {
                cardImg: '../../../assets/cards/2014-2016/vileplume.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/gloom.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/oddish.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/jolteon-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/glaceon-ex.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/manaphy-ex.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/vespiquen.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/combee.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/unown.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/mew.png',
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
                cardImg: '../../../assets/cards/2014-2016/az.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/level-ball.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/revitalizer.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/forest-of-giant-plants.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/energy/lightning-energy-generations.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/energy/water-energy-generations.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/energy/xy-dce.png',
                numImg: '../../../assets/04.png',
            },
            {
              cardImg: '../../../assets/cards/energy/xy-energy-rainbow.png',
              numImg: '../../../assets/03.png',
          },
    ]
  },
  {
    firstName: 'Christian Velazquez',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/bronzong.png',
    sprite2: '../../../assets/sprites/aegislash.png',
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
    firstName: 'Long Bui',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/trevenant.png',
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
    firstName: 'Dalen Dockery',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/bronzong.png',
    sprite2: '../../../assets/sprites/tyrantrum.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/bronzong.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bronzor.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/tyrantrum-ex.png',
        numImg: '../../../assets/02.png'
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
        cardImg: '../../../assets/cards/2014-2016/bunnelby.png',
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/judge.png',
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
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/switch.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sacred-ash.png',
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
        cardImg: '../../../assets/cards/2014-2016/sky-field.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/parallel-city.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/metal-energy-generations.png',
        numImg: '../../../assets/07.png'
      },
      {
        cardImg: '../../../assets/cards/energy/double-dragon-energy.png',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Samuel Hough',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/vileplume.png',
    sprite2: '../../../assets/sprites/jolteon.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
            {
                cardImg: '../../../assets/cards/2014-2016/vileplume.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/gloom.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/oddish.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/jolteon-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/glaceon-ex.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/manaphy-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/lugia-ex-ces.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/genesect-ex.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/regice.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/mew.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/n.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/az.png',
                numImg: '../../../assets/03.png',
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
                cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/level-ball.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/forest-of-giant-plants.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/silent-lab.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/energy/lightning-energy-generations.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/energy/water-energy-generations.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/energy/xy-energy-rainbow.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/energy/xy-dce.png',
                numImg: '../../../assets/04.png',
            },
    ]
  },
]

let seniors = [
  {
    firstName: 'Brady Bourgeois',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/giratina-origin.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
            {
                cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/giratina-ex.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/hoopa-ex.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/garbodor-garbotoxin.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/trubbish-acid-spray.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../../assets/04.png',
            },
            {
              cardImg: '../../../assets/cards/2014-2016/n.png',
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
                cardImg: '../../../assets/cards/2014-2016/team-flare-grunt.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/xerosic.png',
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
                cardImg: '../../../assets/cards/2014-2016/puzzle-of-time.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/crushing-hammer-xy.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/ffb.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/head-ringer.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/parallel-city.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/energy/xy-dce.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/energy/double-dragon-energy.png',
                numImg: '../../../assets/04.png',
            },
    ]
  },
  {
    firstName: 'Nolan Wilson',
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
                cardImg: '../../../assets/cards/2014-2016/garbodor-garbotoxin.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/trubbish-acid-spray.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/jolteon-ex.png',
                numImg: '../../../assets/01.png',
            },
            {
              cardImg: '../../../assets/cards/2014-2016/lugia-ex-ces.png',
              numImg: '../../../assets/01.png',
          },
          {
            cardImg: '../../../assets/cards/2014-2016/hoopa-ex.png',
            numImg: '../../../assets/01.png',
        },
          {
            cardImg: '../../../assets/cards/2014-2016/raikou.png',
            numImg: '../../../assets/01.png',
        },
        {
          cardImg: '../../../assets/cards/2014-2016/mew.png',
          numImg: '../../../assets/01.png',
      },
            {
                cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../../assets/04.png',
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
                cardImg: '../../../assets/cards/2014-2016/az.png',
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
                cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/manectric-spirit-link.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/parallel-city.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/energy/lightning-energy-generations.png',
                numImg: '../../../assets/08.png',
            },
            {
                cardImg: '../../../assets/cards/energy/xy-dce.png',
                numImg: '../../../assets/03.png',
            },
    ]
  },
  {
    firstName: 'Patrick Martinez',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/vespiquen.png',
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
                cardImg: '../../../assets/cards/2014-2016/vespiquen.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/combee.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/03.png',
            },
            {
              cardImg: '../../../assets/cards/2014-2016/unown.png',
              numImg: '../../../assets/02.png',
          },
          {
            cardImg: '../../../assets/cards/2014-2016/mew.png',
            numImg: '../../../assets/01.png',
        },
          {
            cardImg: '../../../assets/cards/2014-2016/jirachi.png',
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
                cardImg: '../../../assets/cards/2014-2016/n.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/delinquent.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/teammates.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/puzzle-of-time.png',
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
                cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/energy/metal-energy-generations.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/energy/xy-dce.png',
                numImg: '../../../assets/04.png',
            },
    ]
  },
  {
    firstName: 'Joe Hebert',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/vespiquen.png',
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
                cardImg: '../../../assets/cards/2014-2016/vespiquen.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/combee.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/03.png',
            },
            {
              cardImg: '../../../assets/cards/2014-2016/unown.png',
              numImg: '../../../assets/03.png',
          },
            {
                cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../../assets/03.png',
            },
            {
              cardImg: '../../../assets/cards/2014-2016/lysandre.png',
              numImg: '../../../assets/01.png',
          },
            {
                cardImg: '../../../assets/cards/2014-2016/n.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/xerosic.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/puzzle-of-time.png',
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
                cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../../assets/01.png',
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
                cardImg: '../../../assets/cards/2014-2016/town-map.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/parallel-city.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/energy/xy-dce.png',
                numImg: '../../../assets/04.png',
            },
    ]
  },
  {
    firstName: 'Ryan Billings',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/vespiquen.png',
    sprite2: '../../../assets/sprites/vileplume.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
            {
                cardImg: '../../../assets/cards/2014-2016/vespiquen.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/combee.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/vileplume.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/gloom.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/oddish.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/unown.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/jolteon-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/bunnelby.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/jirachi.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/n.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/az.png',
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
                cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/level-ball.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/forest-of-giant-plants.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/energy/lightning-energy-generations.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/energy/xy-dce.png',
                numImg: '../../../assets/04.png',
            },
    ]
  },
  {
    firstName: 'Calvin Connor',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/rayquaza-mega.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/m-rayquaza-ex-colorless.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rayquaza-ex-ros.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rayquaza-ex-dragon-promo.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jolteon-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hoopa-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jirachi.png',
        numImg: '../../../assets/01.png'
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
        numImg: '../../../assets/02.png'
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
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/mega-turbo.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-rod.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rayquaza-spirit-link.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/float-stone.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sky-field.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/energy/lightning-energy-generations.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/xy-dce.png',
        numImg: '../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Alex Bobenrieth',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manaphy.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
            {
                cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/manaphy-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/glaceon-ex.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/jolteon-ex.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/aurorus-ex.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/hoopa-ex.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/regice.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/articuno.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/n.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/xerosic.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/az.png',
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
                cardImg: '../../../assets/cards/2014-2016/max-elixir.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/energy-switch.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/ffb.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/parallel-city.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/energy/water-energy-generations.png',
                numImg: '../../../assets/09.png',
            },
            {
                cardImg: '../../../assets/cards/energy/lightning-energy-generations.png',
                numImg: '../../../assets/03.png',
            },
    ]
  },
  {
    firstName: 'Ethan Colborn',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/vespiquen.png',
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
                cardImg: '../../../assets/cards/2014-2016/vespiquen.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/combee.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/03.png',
            },
            {
              cardImg: '../../../assets/cards/2014-2016/unown.png',
              numImg: '../../../assets/03.png',
          },
            {
                cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../../assets/03.png',
            },
            {
              cardImg: '../../../assets/cards/2014-2016/lysandre.png',
              numImg: '../../../assets/01.png',
          },
            {
                cardImg: '../../../assets/cards/2014-2016/n.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/xerosic.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/puzzle-of-time.png',
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
                cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/enhanced-hammer.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/energy/xy-dce.png',
                numImg: '../../../assets/04.png',
            },
    ]
  },
]

let juniors = [
  {
    firstName: 'Liam Halliburton',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/darkrai.png',
    sprite2: '../../../assets/sprites/giratina-origin.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
            {
                cardImg: '../../../assets/cards/2014-2016/darkrai-ex-bkp.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/giratina-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/garbodor-garbotoxin.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/trubbish-acid-spray.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/latios-ex.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/tyrantrum-ex.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/yveltal-ex-shiny.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/yveltal-generations.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../../assets/04.png',
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
                cardImg: '../../../assets/cards/2014-2016/cassius.png',
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
              cardImg: '../../../assets/cards/2014-2016/max-elixir.png',
              numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/ffb.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/parallel-city.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/energy/dark-energy-generations.png',
                numImg: '../../../assets/08.png',
            },
            {
                cardImg: '../../../assets/cards/energy/double-dragon-energy.png',
                numImg: '../../../assets/04.png',
            },
    ]
  },
  {
    firstName: 'Travis Beckwith',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/bronzong.png',
    sprite2: '../../../assets/sprites/genesect.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
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
        cardImg: '../../../assets/cards/2014-2016/bronzor-defense.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/genesect-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/aegislash-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hoopa-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jirachi.png',
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
        cardImg: '../../../assets/cards/2014-2016/az.png',
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
        cardImg: '../../../assets/cards/2014-2016/level-ball.png',
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2014-2016/sacred-ash.png',
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
        cardImg: '../../../assets/cards/2014-2016/sky-field.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/metal-energy-generations.png',
        numImg: '../../../assets/10.png'
      },
    ]
  },
  {
    firstName: 'Christian Moreno',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/darkrai.png',
    sprite2: '../../../assets/sprites/giratina-origin.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
            {
                cardImg: '../../../assets/cards/2014-2016/darkrai-ex-bkp.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/giratina-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/hydreigon-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/garbodor-garbotoxin.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/trubbish-acid-spray.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/hoopa-ex.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/yveltal-ex-shiny.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/yveltal-generations.png',
                numImg: '../../../assets/01.png',
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
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/xerosic.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/az.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/max-elixir.png',
                numImg: '../../../assets/04.png',
            },
            {
              cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
              numImg: '../../../assets/03.png',
          },
            {
                cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/super-rod.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/ffb.png',
                numImg: '../../../assets/02.png',
            },
            {
              cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
              numImg: '../../../assets/01.png',
          },
            {
                cardImg: '../../../assets/cards/2014-2016/parallel-city.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/energy/dark-energy-generations.png',
                numImg: '../../../assets/09.png',
            },
            {
                cardImg: '../../../assets/cards/energy/double-dragon-energy.png',
                numImg: '../../../assets/04.png',
            },
    ]
  },
  {
    firstName: 'Mikah Javier',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/bronzong.png',
    sprite2: '../../../assets/sprites/genesect.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/bronzong-break.png',
        numImg: '../../../assets/02.png'
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
        cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-rod.png',
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
        cardImg: '../../../assets/cards/2014-2016/sky-field.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/parallel-city.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/energy/metal-energy-generations.png',
        numImg: '../../../assets/10.png'
      },
    ]
  },
  {
    firstName: 'Alex Marmon',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/manectric-mega.png',
    sprite2: '../../../assets/sprites/ho-oh.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/m-manectric-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ho-oh-ex-purifying-fire.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png'
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
        cardImg: '../../../assets/cards/2014-2016/jirachi.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/lysandre.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/n.png',
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
        cardImg: '../../../assets/cards/2014-2016/max-elixir.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/super-rod.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/switch.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/manectric-spirit-link.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/ffb.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/lightning-energy-generations.png',
        numImg: '../../../assets/05.png'
      },
      {
        cardImg: '../../../assets/cards/energy/grass-energy-generations.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/water-energy-generations.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/fire-energy-generations.png',
        numImg: '../../../assets/02.png'
      },

    ]
  },
  {
    firstName: 'Ethan Moskowitz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manaphy.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
            {
                cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
                numImg: '../../../assets/03.png',
            },
            {
              cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
              numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/manaphy-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
              cardImg: '../../../assets/cards/2014-2016/articuno.png',
              numImg: '../../../assets/02.png',
          },
            {
                cardImg: '../../../assets/cards/2014-2016/glaceon-ex.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/hoopa-ex.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/regice.png',
                numImg: '../../../assets/01.png',
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
                cardImg: '../../../assets/cards/2014-2016/xerosic.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/az.png',
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
                cardImg: '../../../assets/cards/2014-2016/max-elixir.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/energy-switch.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/super-rod.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/ffb.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/rough-seas.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/energy/water-energy-generations.png',
                numImg: '../../../assets/12.png',
            },
    ]
  },
  {
    firstName: 'Kyle Inman',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/houndoom.png',
    sprite2: '../../../assets/sprites/bunnelby.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../assets/cards/2014-2016/houndoom-ex.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/bunnelby.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/team-flare-grunt.png',
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
        cardImg: '../../../assets/cards/2014-2016/shauna.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/team-rockets-handiwork.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/xerosic.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/skyla-bkp.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/az.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
        numImg: '../../../assets/01.png'
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
        cardImg: '../../../assets/cards/2014-2016/crushing-hammer-xy.png',
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
        cardImg: '../../../assets/cards/2014-2016/trick-shovel.png',
        numImg: '../../../assets/03.png'
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
        cardImg: '../../../assets/cards/2014-2016/ffb.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/head-ringer.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/team-aquas-secret-base.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/energy/fire-energy-generations.png',
        numImg: '../../../assets/07.png'
      },
    ]
  },
  {
    firstName: 'Isaac Petruski',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/bronzong.png',
    sprite2: '../../../assets/sprites/genesect.png',
    list: '../../../assets/list-icon.png',
    type: 'dark',
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
        cardImg: '../../../assets/cards/2014-2016/bronzor-defense.png',
        numImg: '../../../assets/04.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/genesect-ex.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
        numImg: '../../../assets/02.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/aegislash-ex.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/jirachi.png',
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
        cardImg: '../../../assets/cards/2014-2016/az.png',
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
        cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
        numImg: '../../../assets/01.png'
      },
      {
        cardImg: '../../../assets/cards/2014-2016/sacred-ash.png',
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
        numImg: '../../../assets/03.png'
      },
      {
        cardImg: '../../../assets/cards/energy/metal-energy-generations.png',
        numImg: '../../../assets/10.png'
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2016 US Nats";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2016 US Nats";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2016 US Nats";

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
