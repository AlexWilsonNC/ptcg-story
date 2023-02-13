const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Edmund Kuras',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/accelgor.png',
    sprite2: '../../../../assets/sprites/gothitelle.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016/accelgor.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/shelmet.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/gothitelle.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/gothorita-bcr.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/gothita.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/mew-ex.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/dusknoir.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/duskull.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/rare-candy-bw.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/level-ball-bw.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/pokemon-communication-bw.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/super-rod-bw.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/tool-scrapper.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/tropical-beach-2012.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/dce-bw.png',
        numImg: '../../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Ryan Sabelhaus',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/kyurem.png',
    sprite2: '../../../../assets/sprites/deoxys.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016/kyurem.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/deoxys-ex.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/thundurus-ex.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/absol-plasma.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/life-dew.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/colress-machine.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/bicycle.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/switch-bw.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/plasma-ball.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../../../assets/01.png'
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
        cardImg: '../../../../assets/cards/energy/energy-plasma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/prism-energy.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/blend-wlmf.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/blend-grpd.png',
        numImg: '../../../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Samuel Liggett',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/accelgor.png',
    sprite2: '../../../../assets/sprites/gothitelle.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016/accelgor.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/shelmet.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/gothitelle.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/gothorita.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/gothita.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/mew-ex.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/dusknoir.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2010-2012/dusclops.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/duskull.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/dowsing-machine.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/rare-candy-bw.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/level-ball-bw.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/pokemon-communication-bw.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/super-rod-bw.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/tool-scrapper.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/tropical-beach-2012.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/dce-bw.png',
        numImg: '../../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Robert Seley',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/kyurem.png',
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
    firstName: 'Dylan Bryan',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/klinklang.png',
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
    firstName: 'Omar Reyhan',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/darkrai.png',
    sprite2: '../../../../assets/sprites/sableye.png',
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
    firstName: 'David Richard',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/kyurem.png',
    sprite2: '../../../../assets/sprites/deoxys.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016/kyurem.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/deoxys-ex.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/thundurus-ex.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/absol-plasma.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/life-dew.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/colress-machine.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/bicycle.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/switch-bw.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/plasma-ball.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../../../assets/01.png'
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
        cardImg: '../../../../assets/cards/energy/energy-plasma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/prism-energy.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/blend-wlmf.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/blend-grpd.png',
        numImg: '../../../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Sean Foisy',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/accelgor.png',
    sprite2: '../../../../assets/sprites/gothitelle.png',
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
    firstName: 'James Hart',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/darkrai.png',
    sprite2: '../../../../assets/sprites/sableye.png',
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
    firstName: 'Kyle Sucevich',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/kyurem.png',
    sprite2: '../../../../assets/sprites/deoxys.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016/kyurem.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/deoxys-ex.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/thundurus-ex.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/absol-plasma.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/colress-machine.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/switch-bw.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/plasma-ball.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/tool-scrapper.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/bw-energy-lightning.png',
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
        cardImg: '../../../../assets/cards/energy/blend-wlmf.png',
        numImg: '../../../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'David Shoyket',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/landorus-therian.png',
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
    firstName: 'David Ceculski',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/kyurem.png',
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
    firstName: 'Jeremy Jallen',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/accelgor.png',
    sprite2: '../../../../assets/sprites/gothitelle.png',
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
    firstName: 'Jose Marrero',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/lugia.png',
    sprite2: '../../../../assets/sprites/deoxys.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
                cardImg: '../../../../assets/cards/2014-2016/lugia-ex-plasma.png',
                numImg: '../../../../assets/03.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/thundurus-ex.png',
                numImg: '../../../../assets/03.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/deoxys-ex.png',
                numImg: '../../../../assets/04.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/professor-juniper.png',
                numImg: '../../../../assets/04.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/n-dex.png',
                numImg: '../../../../assets/03.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/colress.png',
                numImg: '../../../../assets/02.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/dowsing-machine.png',
                numImg: '../../../../assets/01.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/bicycle.png',
                numImg: '../../../../assets/04.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/colress-machine.png',
                numImg: '../../../../assets/04.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/pluspower.png',
                numImg: '../../../../assets/04.png',
            },
            {
                cardImg: '../../../../assets/cards/2010-2012/pokemon-catcher.png',
                numImg: '../../../../assets/03.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/switch-bcr.png',
                numImg: '../../../../assets/03.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/ultra-ball-bw.png',
                numImg: '../../../../assets/03.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/plasma-ball.png',
                numImg: '../../../../assets/02.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/random-receiver.png',
                numImg: '../../../../assets/02.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/tool-scrapper.png',
                numImg: '../../../../assets/01.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/float-stone-bw.png',
                numImg: '../../../../assets/02.png',
            },
            {
                cardImg: '../../../../assets/cards/energy/bw-energy-lightning.png',
                numImg: '../../../../assets/02.png',
            },
            {
                cardImg: '../../../../assets/cards/energy/energy-plasma.png',
                numImg: '../../../../assets/04.png',
            },
            {
                cardImg: '../../../../assets/cards/energy/dce-bw.png',
                numImg: '../../../../assets/04.png',
            },
            {
                cardImg: '../../../../assets/cards/energy/prism-energy.png',
                numImg: '../../../../assets/02.png',
            },
    ]
  },
  {
    firstName: 'Jayson Harry',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/kyurem.png',
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
    firstName: 'Aaron Curry',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/accelgor.png',
    sprite2: '../../../../assets/sprites/gothitelle.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016/accelgor.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/shelmet.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/gothitelle.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/gothorita.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/gothita.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/mew-ex.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/dusknoir.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/duskull.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/musharna.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/munna.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/dowsing-machine.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/rare-candy-bw.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/level-ball-bw.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/pokemon-communication-bw.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/super-rod-bw.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/tool-scrapper.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/tropical-beach-2012.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/dce-bw.png',
        numImg: '../../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Franco Puertas',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/accelgor.png',
    sprite2: '../../../../assets/sprites/gothitelle.png',
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
    firstName: 'Dan Richard',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/kyurem.png',
    sprite2: '../../../../assets/sprites/deoxys.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016/kyurem.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/deoxys-ex.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/thundurus-ex.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/absol-plasma.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/life-dew.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/colress-machine.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/bicycle.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/switch-bw.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/plasma-ball.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../../../assets/01.png'
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
        cardImg: '../../../../assets/cards/energy/energy-plasma.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/prism-energy.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/blend-wlmf.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/blend-grpd.png',
        numImg: '../../../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Robert Arenas',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/kyurem.png',
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
    firstName: 'Angel Miranda',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../../../assets/sprites/blastoise.png',
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
    firstName: 'Nicholas Bailey',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/kyurem.png',
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
    firstName: 'Nikolaus Schaad',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../../../assets/sprites/blastoise.png',
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
    firstName: 'Kyle Sabelhaus',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/kyurem.png',
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
    firstName: 'Pearce Blend',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/darkrai.png',
    sprite2: '../../../../assets/sprites/sableye.png',
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
    firstName: 'Frank Diaz',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/accelgor.png',
    sprite2: '../../../../assets/sprites/gothitelle.png',
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
    firstName: 'Taylor Duffin',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../../../assets/sprites/blastoise.png',
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
    firstName: 'JR Madison',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
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
    firstName: 'Michael Zele',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/kyurem.png',
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
    firstName: 'Dylan Lefavour',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../../../assets/sprites/blastoise.png',
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
    firstName: 'Ray Cipoletti',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../../../assets/sprites/blastoise.png',
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
    firstName: 'Mark Garcia',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/darkrai.png',
    sprite2: '../../../../assets/sprites/mewtwo.png',
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
    firstName: 'Cody Kressmann',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/kyurem.png',
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
    firstName: 'Michael Slutsky',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/klinklang.png',
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
    firstName: 'Nathan Shaw',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/thundurus-therian.png',
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
    firstName: 'Dylan Dreyer',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/thundurus-therian.png',
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
    firstName: 'Andy Kay',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/thundurus-therian.png',
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
    firstName: 'Henry Prior',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/accelgor.png',
    sprite2: '../../../../assets/sprites/gothitelle.png',
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
    firstName: 'Alexander Gardner',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/thundurus-therian.png',
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
    firstName: 'Nick Capobianco',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/hyphen.png',
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
    firstName: 'Christian Ortiz',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../../../assets/sprites/blastoise.png',
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
    firstName: 'Brad Gustas',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/thundurus-therian.png',
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
    firstName: 'Daniel Lopez',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/thundurus-therian.png',
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
    firstName: 'Dustin Zimmerman',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/thundurus-therian.png',
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
    firstName: 'Cory Cullimore',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/thundurus-therian.png',
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
    firstName: 'Colin Peterik',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/accelgor.png',
    sprite2: '../../../../assets/sprites/gothitelle.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016/accelgor.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/shelmet.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/gothitelle.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/gothorita-bcr.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/gothita.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/mew-ex.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/dusknoir.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/duskull.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/musharna.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/munna.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/rare-candy-bw.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/pokemon-communication-bw.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/super-rod-bw.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/tool-scrapper.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/tropical-beach-2012.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/dce-bw.png',
        numImg: '../../../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Jonathan Bristow',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/hyphen.png',
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
    firstName: 'Josh Highlander',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/hyphen.png',
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
    firstName: 'Zakary Krekeler',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/thundurus-therian.png',
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
    firstName: 'Seth Cocolin',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/darkrai.png',
    sprite2: '../../../../assets/sprites/terrakion.png',
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
    firstName: 'Vance Kelley',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/darkrai.png',
    sprite2: '../../../../assets/sprites/sableye.png',
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
    firstName: 'Roger Lallathin',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/zekrom.png',
    sprite2: '../../../../assets/sprites/eelektrik.png',
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
    firstName: 'Edwin Lopez',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/hyphen.png',
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
    firstName: 'Shaun Kauffman',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/ho-oh.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
                cardImg: '../../../../assets/cards/2014-2016/ho-oh-ex.png',
                numImg: '../../../../assets/02.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/landorus-ex.png',
                numImg: '../../../../assets/03.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/cobalion-ex.png',
                numImg: '../../../../assets/01.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/darkrai-ex.png',
                numImg: '../../../../assets/01.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/mew-ex.png',
                numImg: '../../../../assets/01.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/shaymin-ex-nxd.png',
                numImg: '../../../../assets/01.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/keldeo-ex.png',
                numImg: '../../../../assets/02.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/terrakion-nvi.png',
                numImg: '../../../../assets/01.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/cobalion-nvi.png',
                numImg: '../../../../assets/01.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/professor-juniper.png',
                numImg: '../../../../assets/04.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/n-dex.png',
                numImg: '../../../../assets/04.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/skyla-bw.png',
                numImg: '../../../../assets/02.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/colress.png',
                numImg: '../../../../assets/02.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/scramble-switch.png',
                numImg: '../../../../assets/01.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/ultra-ball-bw.png',
                numImg: '../../../../assets/04.png',
            },
            {
                cardImg: '../../../../assets/cards/2010-2012/pokemon-catcher.png',
                numImg: '../../../../assets/04.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/energy-switch-bw.png',
                numImg: '../../../../assets/04.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/enhanced-hammer-bw.png',
                numImg: '../../../../assets/02.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/max-potion-bw.png',
                numImg: '../../../../assets/02.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/energy-search.png',
                numImg: '../../../../assets/01.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/random-receiver.png',
                numImg: '../../../../assets/01.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/tool-scrapper.png',
                numImg: '../../../../assets/01.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/float-stone-bw.png',
                numImg: '../../../../assets/03.png',
            },
            {
                cardImg: '../../../../assets/cards/energy/bw-energy-fighting.png',
                numImg: '../../../../assets/05.png',
            },
            {
                cardImg: '../../../../assets/cards/energy/bw-energy-dark.png',
                numImg: '../../../../assets/03.png',
            },
            {
                cardImg: '../../../../assets/cards/energy/bw-energy-metal.png',
                numImg: '../../../../assets/01.png',
            },
            {
                cardImg: '../../../../assets/cards/energy/bw-energy-grass.png',
                numImg: '../../../../assets/01.png',
            },
            {
                cardImg: '../../../../assets/cards/energy/prism-energy.png',
                numImg: '../../../../assets/02.png',
            },
    ]
  },
  {
    firstName: 'Ross Cawthon',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/garchomp.png',
    sprite2: '../../../../assets/sprites/altaria.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
                cardImg: '../../../../assets/cards/2014-2016/garchomp.png',
                numImg: '../../../../assets/04.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/gabite.png',
                numImg: '../../../../assets/03.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/gible.png',
                numImg: '../../../../assets/04.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/altaria.png',
                numImg: '../../../../assets/03.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/swablu.png',
                numImg: '../../../../assets/03.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/emolga.png',
                numImg: '../../../../assets/03.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/professor-juniper.png',
                numImg: '../../../../assets/04.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/n-dex.png',
                numImg: '../../../../assets/04.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/skyla-bw.png',
                numImg: '../../../../assets/03.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/colress.png',
                numImg: '../../../../assets/02.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/life-dew.png',
                numImg: '../../../../assets/01.png',
            },
            {
                cardImg: '../../../../assets/cards/2010-2012/pokemon-catcher.png',
                numImg: '../../../../assets/03.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/level-ball-bw.png',
                numImg: '../../../../assets/03.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/rare-candy-bw.png',
                numImg: '../../../../assets/03.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/hypnotoxic-laser.png',
                numImg: '../../../../assets/03.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/switch-bw.png',
                numImg: '../../../../assets/02.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/bicycle.png',
                numImg: '../../../../assets/01.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/super-rod-bw.png',
                numImg: '../../../../assets/01.png',
            },
            {
                cardImg: '../../../../assets/cards/energy/bw-energy-fighting.png',
                numImg: '../../../../assets/06.png',
            },
            {
                cardImg: '../../../../assets/cards/energy/blend-wlmf.png',
                numImg: '../../../../assets/04.png',
            },
    ]
  },
  {
    firstName: 'Justin Young',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/rayquaza.png',
    sprite2: '../../../../assets/sprites/eelektrik.png',
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
    firstName: 'Mike Newman',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/rayquaza.png',
    sprite2: '../../../../assets/sprites/eelektrik.png',
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
    firstName: 'Taylor Smart',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../../../assets/sprites/blastoise.png',
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
    firstName: 'Carl Scheu',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/sprites/klinklang.png',
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
    firstName: 'Katie Johnson',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../../../assets/sprites/blastoise.png',
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
    firstName: 'David Lopez',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/hyphen.png',
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
    firstName: 'Nicholena Moon',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../../../assets/sprites/blastoise.png',
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
    firstName: 'Isaiah Bettridge',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/hyphen.png',
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
    firstName: 'Rachel Dillon',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../../../assets/sprites/blastoise.png',
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
    firstName: 'Alexander Hill',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/kyurem.png',
    sprite2: '../../../../assets/sprites/deoxys.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
                cardImg: '../../../../assets/cards/2014-2016/kyurem.png',
                numImg: '../../../../assets/03.png',
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
                cardImg: '../../../../assets/cards/2014-2016/tornadus-ex-plasma.png',
                numImg: '../../../../assets/01.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/professor-juniper.png',
                numImg: '../../../../assets/04.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/n-dex.png',
                numImg: '../../../../assets/04.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/ghetsis.png',
                numImg: '../../../../assets/02.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/bianca.png',
                numImg: '../../../../assets/02.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/skyla-bw.png',
                numImg: '../../../../assets/02.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/scramble-switch.png',
                numImg: '../../../../assets/01.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/hypnotoxic-laser.png',
                numImg: '../../../../assets/04.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/colress-machine.png',
                numImg: '../../../../assets/04.png',
            },
            {
                cardImg: '../../../../assets/cards/2010-2012/pokemon-catcher.png',
                numImg: '../../../../assets/04.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/switch-bw.png',
                numImg: '../../../../assets/04.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/plasma-ball.png',
                numImg: '../../../../assets/03.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/ultra-ball-bw.png',
                numImg: '../../../../assets/01.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/max-potion-bw.png',
                numImg: '../../../../assets/01.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/float-stone-bw.png',
                numImg: '../../../../assets/01.png',
            },
            {
                cardImg: '../../../../assets/cards/2014-2016/virbank-city-gym.png',
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
                numImg: '../../../../assets/04.png',
            },
    ]
  },
]

let seniors = [
  {
    firstName: 'Calvin Connor',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/kyurem.png',
    sprite2: '../../../../assets/sprites/deoxys.png',
    list: '../../../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../../../assets/cards/2014-2016/kyurem.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/deoxys-ex.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/thundurus-ex.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/lugia-ex-plasma.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/absol-plasma.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/colress.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/scramble-switch.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/colress-machine.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/switch-bw.png',
        numImg: '../../../../assets/03.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/plasma-ball.png',
        numImg: '../../../../assets/02.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/max-potion-bw.png',
        numImg: '../../../../assets/01.png'
      },
      {
        cardImg: '../../../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../../../assets/02.png'
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
        cardImg: '../../../../assets/cards/energy/blend-wlmf.png',
        numImg: '../../../../assets/04.png'
      },
      {
        cardImg: '../../../../assets/cards/energy/dce-bw.png',
        numImg: '../../../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Orrin Wilson',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/darkrai.png',
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
    firstName: 'Samuel Hough',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/darkrai.png',
    sprite2: '../../../../assets/sprites/sableye.png',
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
    firstName: 'Natalia Routhier',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../../../assets/sprites/blastoise.png',
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
    firstName: 'Noah Yoshida',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/darkrai.png',
    sprite2: '../../../../assets/sprites/sableye.png',
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
    firstName: 'Xander Pero',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/hyphen.png',
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
    firstName: 'Jonathan Croxton',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/hyphen.png',
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
    firstName: 'David Tomhave',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/blank.png',
    sprite2: '../../../../assets/hyphen.png',
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

let juniors = [
  {
    firstName: 'Carson St. Denis',
    flag: '../../../../assets/flags/usa.png',
    sprite1: '../../../../assets/sprites/kyurem.png',
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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2013 US Nats";

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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2013 US Nats";

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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2013 US Nats";

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
