const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Jason Klaczynski',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/darkrai.png',
    sprite2: '../../assets/sprites/sableye.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/sableye-junk-hunt.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/mr-mime.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/dark-patch.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/random-receiver.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/energy-switch-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/bicycle.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/energy-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/dark-claw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-dark.png',
        numImg: '../../assets/10.png'
      }
    ]
  },
  {
    firstName: 'Simon Narode',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/kyurem.png',
    sprite2: '../../assets/sprites/deoxys.png',
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/kyurem.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/deoxys-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/thundurus-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/lugia-ex-plasma.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/absol-plasma.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress-machine.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/plasma-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-plasma.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/prism-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/blend-wlmf.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'James Good',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../assets/sprites/blastoise.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/black-kyurem-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/blastoise.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/wartotle.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/squirtle.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/cilan.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/rare-candy-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/superior-energy-retreival.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/level-ball-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/heavy-ball-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/energy-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/tropical-beach-2012.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-water.png',
        numImg: '../../assets/09.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Dustin Zimmerman',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/sableye.png',
    sprite2: '../../assets/sprites/garbodor.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/sableye-junk-hunt.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-drx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-drx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/sneasel-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ghetsis.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/life-dew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/crushing-hammer.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/dark-patch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/random-receiver.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/energy-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-dark.png',
        numImg: '../../assets/08.png'
      }
    ]
  },
  {
    firstName: 'Takuya Yoneda',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/darkrai.png',
    sprite2: '../../assets/sprites/garbodor.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-drx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-garbage-collec.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/sableye-junk-hunt.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/absol-plasma.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/dark-patch.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/dark-claw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/exp-share.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/tropical-beach-2012.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-dark.png',
        numImg: '../../assets/11.png'
      }
    ]
  },
  {
    firstName: 'Johnny Rabus',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/kyurem.png',
    sprite2: '../../assets/sprites/deoxys.png',
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/kyurem.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/deoxys-ex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/thundurus-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/lugia-ex-plasma.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/absol-plasma.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/bianca.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/scramble-switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress-machine.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/plasma-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/frozen-city.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-plasma.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/prism-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/blend-wlmf.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Rick Verwaal',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/kyurem.png',
    sprite2: '../../assets/sprites/deoxys.png',
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/kyurem.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/deoxys-ex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/thundurus-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/absol-plasma.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress-machine.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/plasma-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/bicycle.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-plasma.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/prism-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/blend-wlmf.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/blend-grpd.png',
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Jon Bristow',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/rayquaza.png',
    sprite2: '../../assets/sprites/eelektrik.png',
    list: '../../assets/list-icon.png',
    type: 'dragon',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/rayquaza-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/eelektrik.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/tynamo-nvi.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/raikou-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/rayquaza-drx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/level-ball-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/energy-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/tropical-beach-2012.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        numImg: '../../assets/08.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fire.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Gino Lombardi',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../assets/sprites/blastoise.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/black-kyurem-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/blastoise.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/wartotle.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/squirtle.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/cilan.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/rare-candy-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/superior-energy-retreival.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/level-ball-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/heavy-ball-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/tropical-beach-2012.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-water.png',
        numImg: '../../assets/10.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Dylan Bryan',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/flareon.png',
    list: '../../assets/list-icon.png',
    type: 'fire',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/flareon-plasma.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/leafeon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/espeon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/eevee-signs-of-evo.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/audino.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/drifblim.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/drifloon-beat.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-drx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-drx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/landorus-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/terrakion-nvi.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/mr-mime.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/random-receiver.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/tropical-beach-2012.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fighting.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Josue Palomino',
    flag: '../../assets/flags/mexico.png',
    sprite1: '../../assets/sprites/kyurem.png',
    sprite2: '../../assets/sprites/deoxys.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Mike Newman',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../assets/sprites/blastoise.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/blastoise.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/wartotle.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/squirtle.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/mr-mime.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/rare-candy-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/superior-energy-retreival.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/energy-retrieval-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/level-ball-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/tropical-beach-2012.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-water.png',
        numImg: '../../assets/13.png'
      }
    ]
  },
  {
    firstName: 'Guenther Kirchofer',
    flag: '../../assets/flags/austria.png',
    sprite1: '../../assets/sprites/kyurem.png',
    sprite2: '../../assets/sprites/deoxys.png',
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/kyurem.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/deoxys-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/thundurus-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/lugia-ex-plasma.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/snorlax-block.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/bianca.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/scramble-switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress-machine.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/plasma-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-plasma.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/prism-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/blend-wlmf.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Joey Ho',
    flag: '../../assets/flags/singapore.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/klinklang.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Chase Moloney',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/darkrai.png',
    sprite2: '../../assets/sprites/sableye.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/sableye-junk-hunt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/absol-plasma.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/mr-mime.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ghetsis.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/bicycle.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/dark-patch.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/energy-switch-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/dark-claw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-dark.png',
        numImg: '../../assets/11.png'
      }
    ]
  },
  {
    firstName: 'Kerwin Lee',
    flag: '../../assets/flags/australia.png',
    sprite1: '../../assets/sprites/rayquaza.png',
    sprite2: '../../assets/sprites/eelektrik.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Leandro Lopez',
    flag: '../../assets/flags/argentina.png',
    sprite1: '../../assets/sprites/rayquaza.png',
    sprite2: '../../assets/sprites/eelektrik.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Martin Janouš',
    flag: '../../assets/flags/czech-republic.png',
    sprite1: '../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../assets/sprites/blastoise.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Akio Yamada',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/kyurem.png',
    sprite2: '../../assets/sprites/deoxys.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jake Walvin',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/kyurem.png',
    sprite2: '../../assets/sprites/deoxys.png',
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/kyurem.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/deoxys-ex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/thundurus-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/absol-plasma.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress-machine.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/bicycle.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-plasma.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/prism-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/blend-wlmf.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Jeremy Jallen',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/deoxys.png',
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/lugia-ex-plasma.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/thundurus-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/deoxys-ex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/umbreon-plasma.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/eevee-plf.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress-machine.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/pluspower.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/bicycle.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/plasma-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/random-receiver.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-plasma.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/prism-energy.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Kenton Anderson',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/kyurem.png',
    sprite2: '../../assets/sprites/deoxys.png',
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/kyurem.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/deoxys-ex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/thundurus-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/absol-plasma.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/life-dew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress-machine.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/plasma-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/bicycle.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-plasma.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/prism-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/blend-wlmf.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/blend-grpd.png',
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Matthew Camazzola',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/kyurem.png',
    sprite2: '../../assets/sprites/deoxys.png',
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/kyurem.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/deoxys-ex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/thundurus-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/lugia-ex-plasma.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/absol-plasma.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/scramble-switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress-machine.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/plasma-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-plasma.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/prism-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/blend-wlmf.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Sami Sekkoum',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/darkrai.png',
    sprite2: '../../assets/sprites/sableye.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Wong Wo Pan',
    flag: '../../assets/flags/hong-kong.png',
    sprite1: '../../assets/sprites/kyurem.png',
    sprite2: '../../assets/sprites/deoxys.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tamao Cameron',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/klinklang.png',
    list: '../../assets/list-icon.png',
    type: 'metal',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/klinklang.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/klinklang-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/klang-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/klink-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/cobalion-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/cobalion-nvi.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/rare-candy-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/heavy-ball-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/energy-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/tropical-beach-2012.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-metal.png',
        numImg: '../../assets/09.png'
      }
    ]
  },
  {
    firstName: 'David Sturm',
    flag: '../../assets/flags/germany.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/klinklang.png',
    list: '../../assets/list-icon.png',
    type: 'metal',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/klinklang.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/klinklang-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/klang-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/klink-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/cobalion-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/raikou-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/rare-candy-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/heavy-ball-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/giant-cape.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/tropical-beach-2012.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-metal.png',
        numImg: '../../assets/05.png'
      },
      {
        cardImg: '../../assets/cards/energy/prism-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/blend-wlmf.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Charlie Powell',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/klinklang.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Luca Clavadetscher',
    flag: '../../assets/flags/switzerland.png',
    sprite1: '../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../assets/sprites/blastoise.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Michael San Roman',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/deoxys.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Bruno Martin',
    flag: '../../assets/flags/argentina.png',
    sprite1: '../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../assets/sprites/blastoise.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Hanzell Gutierrez',
    flag: '../../assets/flags/mexico.png',
    sprite1: '../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../assets/sprites/blastoise.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Kaiwen Cabbabe',
    flag: '../../assets/flags/australia.png',
    sprite1: '../../assets/sprites/kyurem.png',
    sprite2: '../../assets/sprites/deoxys.png',
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/kyurem.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/deoxys-ex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/thundurus-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/absol-plasma.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/bianca.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress-machine.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/plasma-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-plasma.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/prism-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/blend-wlmf.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Clement Lamberton',
    flag: '../../assets/flags/france.png',
    sprite1: '../../assets/sprites/rayquaza.png',
    sprite2: '../../assets/sprites/eelektrik.png',
    list: '../../assets/list-icon.png',
    type: 'dragon',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/rayquaza-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/eelektrik.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/tynamo.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/raikou-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/victini.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/level-ball-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/energy-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/tropical-beach-2012.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        numImg: '../../assets/08.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fire.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Ian Whiton',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/accelgor.png',
    sprite2: '../../assets/sprites/gothitelle.png',
    list: '../../assets/list-icon.png',
    type: 'psychic',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/accelgor.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/shelmet.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/gothitelle.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/gothorita.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/gothita.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/mew-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/dusknoir.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/duskull.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/musharna.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/munna.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/rare-candy-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/level-ball-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-communication-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/town-map-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/tropical-beach-2012.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Joey Gaffney',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../assets/sprites/blastoise.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/black-kyurem-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/blastoise.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/wartotle.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/squirtle.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/rare-candy-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/superior-energy-retreival.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/level-ball-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/energy-retrieval-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/tropical-beach-2012.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-water.png',
        numImg: '../../assets/10.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Spencer Lawson',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/darkrai.png',
    sprite2: '../../assets/sprites/garbodor.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Alex Hedge',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/terrakion.png',
    sprite2: '../../assets/sprites/garbodor.png',
    list: '../../assets/list-icon.png',
    type: 'fighting',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/terrakion-ex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-drx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-drx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/bianca.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/energy-switch-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/level-ball-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/heavy-ball-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/energy-retrieval-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/eviolite-plasma.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/tropical-beach-2012.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fighting.png',
        numImg: '../../assets/10.png'
      }
    ]
  },
  {
    firstName: 'Jacob Carassco',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/kyurem.png',
    sprite2: '../../assets/sprites/deoxys.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Dario Ang',
    flag: '../../assets/flags/singapore.png',
    sprite1: '../../assets/sprites/kyurem.png',
    sprite2: '../../assets/sprites/deoxys.png',
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/kyurem.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/deoxys-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/thundurus-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/lugia-ex-plasma.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/absol-plasma.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/terrakion-nvi.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/scramble-switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress-machine.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/plasma-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-plasma.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/prism-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/blend-wlmf.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Tomas Blei',
    flag: '../../assets/flags/argentina.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jeremy Gibson',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Alexander Weber',
    flag: '../../assets/flags/austria.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jan Nickel',
    flag: '../../assets/flags/germany.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/klinklang.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jacob Howard',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Hale Obernolte',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/cofagrigus.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Emily Cheng',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../assets/sprites/blastoise.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Noah Yoshida',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/darkrai.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
      },
    ]
  }
]

let juniors = [
  {
    firstName: 'Ondrej Kujal',
    flag: '../../assets/flags/czech-republic.png',
    sprite1: '../../assets/sprites/darkrai.png',
    sprite2: '../../assets/sprites/sableye.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/absol-plasma.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/sableye-junk-hunt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/bianca.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/dark-patch.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/energy-switch-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/bicycle.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/random-receiver.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/energy-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/dark-claw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-dark.png',
        numImg: '../../assets/11.png'
      }
    ]
  },
  {
    firstName: 'Yugo Sato',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/kyurem.png',
    sprite2: '../../assets/sprites/deoxys.png',
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/kyurem.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/deoxys-ex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/thundurus-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/bianca.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress-machine.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/plasma-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/energy-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-plasma.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/prism-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-water.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Abaan Ahmed',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/darkrai.png',
    sprite2: '../../assets/sprites/sableye.png',
    list: '../../assets/list-icon.png',
    type: 'dark',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/sableye-junk-hunt.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/absol-plasma.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ghetsis.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/bianca.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/dark-patch.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/energy-search.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/random-receiver.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/dark-claw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/frozen-city.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-dark.png',
        numImg: '../../assets/11.png'
      }
    ]
  },
  {
    firstName: 'Samuel Battis',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/kyurem.png',
    sprite2: '../../assets/sprites/deoxys.png',
    list: '../../assets/list-icon.png',
    type: 'normal',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/kyurem.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/deoxys-ex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/thundurus-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/absol-plasma.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/audino.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress-machine.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-plasma.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/prism-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/blend-wlmf.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/blend-grpd.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Alex Reger',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Carson St. Denis',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Quentin Deppe',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Samuel Mowery',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Koto Nishimura',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Marcos Haugestad',
    flag: '../../assets/flags/norway.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Omar Ben-Gacem',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jackson Ford',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../assets/sprites/blastoise.png',
    list: '../../assets/list-icon.png',
    type: 'water',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/black-kyurem-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/blastoise.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/squirtle.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/mr-mime.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/cilan.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/rare-candy-bw.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/superior-energy-retreival.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/level-ball-bw.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/tropical-beach-2012.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-water.png',
        numImg: '../../assets/10.png'
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Robert Lau',
    flag: '../../assets/flags/denmark.png',
    sprite1: '../../assets/sprites/kyurem.png',
    sprite2: '../../assets/sprites/deoxys.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Xeius Tran',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/kyurem.png',
    sprite2: '../../assets/sprites/deoxys.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Brian Rivas',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/kyurem.png',
    sprite2: '../../assets/sprites/deoxys.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Roman Thome',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        numImg: '../../assets/04.png'
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

    if (item.list === '../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2013 Worlds";

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

          // cardSpace.forEach(card => {
          //   card.addEventListener('click', () => {
          //     pokeCard.classList.add('large-card')
          //   })
          // })

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2013 Worlds";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2013 Worlds";

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

          // pokeCard.onclick = function() {
          //   document.querySelector('.pok-card-small').style.width = '500px';
          // }

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
