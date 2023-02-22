const masterList = document.querySelector('.uk-masters-ol');
const seniorList = document.querySelector('.uk-seniors-ol');
const juniorList = document.querySelector('.uk-juniors-ol');
const fourList = document.querySelector('.four-ol');
const fiveList = document.querySelector('.five-ol');
const sixList = document.querySelector('.six-ol');
const sevenList = document.querySelector('.seven-ol');
const eightList = document.querySelector('.eight-ol');
const nineList = document.querySelector('.nine-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
    {
        firstName: 'Anna Schipper',
        sprite1: '../../assets/sprites/zekrom.png',
        sprite2: '../../assets/sprites/eelektrik.png',
        list: '../../assets/list-icon.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012/zekrom.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/zekrom-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/eelektrik.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/tynamo-nvi.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/bouffalant.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/mr-mime.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/n-dex.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/colress.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/level-ball-bw.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/switch-bw.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-rod-bw.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
                numImg: '../../assets/07.png',
            },
            {
                cardImg: '../../assets/cards/energy/dce-bw.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Mees Brenninkmeijer',
        sprite1: '../../assets/sprites/darkrai.png',
        sprite2: '../../assets/sprites/sableye.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Elmer Stouten',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/klinklang.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'David Booij',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
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
        firstName: 'Kerwin Lee',
        sprite1: '../../assets/sprites/rayquaza.png',
        sprite2: '../../assets/sprites/eelektrik.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Shane Quinn',
        sprite1: '../../assets/sprites/keldeo-resolute.png',
        sprite2: '../../assets/sprites/blastoise.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Myles O’Neill',
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
              cardImg: '../../assets/cards/2014-2016/plasma-ball.png',
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
                cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
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
          ]
    },
    {
        firstName: 'Thomas Winkelman',
        sprite1: '../../assets/sprites/darkrai.png',
        sprite2: '../../assets/sprites/sableye.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Michael Kan',
        sprite1: '../../assets/sprites/keldeo-resolute.png',
        sprite2: '../../assets/sprites/blastoise.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Jennifer Wilson',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/klinklang.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Andrew Tan',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Joey Forster',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
]

let juniors = [
    {
        firstName: 'Janik Reimers',
        sprite1: '../../assets/sprites/darkrai.png',
        sprite2: '../../assets/sprites/sableye.png',
        list: '../../assets/list-icon.png',
        type: 'normal',
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
                cardImg: '../../assets/cards/2014-2016/absol-plasma.png',
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
                cardImg: '../../assets/cards/2014-2016/dark-patch.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/pokemon-catcher.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/energy-switch-bw.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/bicycle.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/energy-switch-bw.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/random-receiver.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/enhanced-hammer-bw.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
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
            },
            
        ]
    },
    {
        firstName: 'Joshua Galys',
        sprite1: '../../assets/sprites/darkrai.png',
        sprite2: '../../assets/sprites/sableye.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Paul Student',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Steven Mao',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Merlin Quittek',
        sprite1: '../../assets/sprites/landorus-therian.png',
        sprite2: '../../assets/sprites/garbodor.png',
        list: '../../assets/list-icon.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/landorus-ex.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/garbodor-drx.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/trubbish-drx.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/trubbish-garbage-collec.png',
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
                cardImg: '../../assets/cards/2014-2016/pokemon-catcher.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/switch-bw.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/escape-rope-bw.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/rescue-scarf.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/energy/bw-energy-fighting.png',
                numImg: '../../assets/07.png'
            },
            {
                cardImg: '../../assets/cards/energy/dce-bw.png',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Markus Jakob',
        sprite1: '../../assets/sprites/darkrai.png',
        sprite2: '../../assets/sprites/sableye.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Thomas Werth',
        sprite1: '../../assets/sprites/darkrai.png',
        sprite2: '../../assets/sprites/sableye.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Tobias Thesing',
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
              numImg: '../../assets/03.png'
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
                numImg: '../../assets/03.png'
              },
            {
                cardImg: '../../assets/cards/2014-2016/switch-bw.png',
                numImg: '../../assets/03.png'
              },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
                numImg: '../../assets/02.png'
              },
            {
              cardImg: '../../assets/cards/2014-2016/plasma-ball.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
              numImg: '../../assets/01.png'
            },
            {
              cardImg: '../../assets/cards/2010-2012/revive.png',
              numImg: '../../assets/01.png'
            },
            {
              cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
              numImg: '../../assets/01.png'
            },
            {
              cardImg: '../../assets/cards/2014-2016/frozen-city.png',
              numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/energy/bw-energy-water.png',
                numImg: '../../assets/01.png'
              },
            {
                cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
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
            },
          ]
    },
    {
        firstName: 'Denny F',
        sprite1: '../../assets/sprites/accelgor.png',
        sprite2: '../../assets/sprites/gothitelle.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Finn L',
        sprite1: '../../assets/sprites/accelgor.png',
        sprite2: '../../assets/sprites/gothitelle.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Dennis S',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/klinklang.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Daniel H',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/darkrai.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Marcel L',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/darkrai.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Oleh S',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/klinklang.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Marc L ',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Benjamin C',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
]

let fourEvent = [
    {
        firstName: 'Mehdi Hafi',
        sprite1: '../../assets/sprites/landorus-therian.png',
        sprite2: '../../assets/sprites/tornadus.png',
        list: '../../assets/list-icon.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/landorus-ex.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/tornadus-ex.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/terrakion-nvi.png',
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
                cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
                numImg: '../../assets/03.png'
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
                cardImg: '../../assets/cards/2014-2016/computer-search.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/pokemon-catcher.png',
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
                cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/bicycle.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/energy-switch-bw.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/pluspower.png',
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
                cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/energy/bw-energy-fighting.png',
                numImg: '../../assets/08.png'
            },
            {
                cardImg: '../../assets/cards/energy/dce-bw.png',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Antoine Avenard',
        sprite1: '../../assets/sprites/keldeo-resolute.png',
        sprite2: '../../assets/sprites/blastoise.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Herve Guillemet',
        sprite1: '../../assets/sprites/darkrai.png',
        sprite2: '../../assets/sprites/sableye.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Stéphane Ivanoff',
        sprite1: '../../assets/sprites/landorus-therian.png',
        sprite2: '../../assets/sprites/tornadus.png',
        list: '../../assets/list-icon.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/landorus-ex.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/tornadus-ex.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/terrakion-nvi.png',
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
                cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
                numImg: '../../assets/03.png'
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
                cardImg: '../../assets/cards/2014-2016/computer-search.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/pokemon-catcher.png',
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
                cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/bicycle.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/energy-switch-bw.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/pluspower.png',
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
                cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/energy/bw-energy-fighting.png',
                numImg: '../../assets/08.png'
            },
            {
                cardImg: '../../assets/cards/energy/dce-bw.png',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Anthony Coutinho',
        sprite1: '../../assets/sprites/landorus-therian.png',
        sprite2: '../../assets/sprites/garbodor.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Tony Nguyen',
        sprite1: '../../assets/sprites/landorus-therian.png',
        sprite2: '../../assets/sprites/tornadus.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Caroline Gianasso',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/klinklang.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Corentin Gaudfrain',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/klinklang.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Thomas Badell',
        sprite1: '../../assets/sprites/landorus-therian.png',
        sprite2: '../../assets/sprites/tornadus.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Christophe Caron',
        sprite1: '../../assets/sprites/keldeo-resolute.png',
        sprite2: '../../assets/sprites/blastoise.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Adrien Thiry',
        sprite1: '../../assets/sprites/landorus-therian.png',
        sprite2: '../../assets/sprites/tornadus.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Matthieu Cornillon',
        sprite1: '../../assets/sprites/keldeo-resolute.png',
        sprite2: '../../assets/sprites/blastoise.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Boris Gisselere',
        sprite1: '../../assets/sprites/darkrai.png',
        sprite2: '../../assets/sprites/sableye.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Justine Woitrain',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/klinklang.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Kenny Amari',
        sprite1: '../../assets/sprites/empoleon.png',
        sprite2: '../../assets/sprites/dusknoir.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Yann Rivière',
        sprite1: '../../assets/sprites/tornadus.png',
        sprite2: '../../assets/sprites/bouffalant.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
]

let fiveEvent = [
    {
        firstName: 'Robert Kinbrum',
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
                cardImg: '../../assets/cards/2014-2016/bianca.png',
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
                cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
                numImg: '../../assets/01.png'
              },
              {
                cardImg: '../../assets/cards/2014-2016/random-receiver.png',
                numImg: '../../assets/01.png'
              },
              {
                cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
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
                cardImg: '../../assets/cards/energy/bw-energy-water.png',
                numImg: '../../assets/02.png'
              },
            {
                cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
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
              numImg: '../../assets/02.png'
            },
          ]
    },
    {
        firstName: 'Sami Sekkoum',
        sprite1: '../../assets/sprites/keldeo-resolute.png',
        sprite2: '../../assets/sprites/blastoise.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Ben Armstead',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Jake Walvin',
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
                numImg: '../../assets/03.png'
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
                numImg: '../../assets/04.png'
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
          ]
    },
    {
        firstName: 'Adam Hawkins',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Kai Coolston',
        sprite1: '../../assets/sprites/landorus-therian.png',
        sprite2: '../../assets/sprites/garbodor.png',
        list: '../../assets/list-icon.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/landorus-ex.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/garbodor-drx.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/trubbish-tool-drop.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/cobalion-nvi.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/cobalion-ex.png',
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
                cardImg: '../../assets/cards/2014-2016/bianca.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/scramble-switch.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/pokemon-catcher.png',
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
                cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/heavy-ball-bw.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/switch-bw.png',
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
                cardImg: '../../assets/cards/energy/bw-energy-fighting.png',
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
        ]
    },
    {
        firstName: 'Oliver Barnett',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/darkrai.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Duncan Sugrue',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Alex Dao',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys-attack.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Darren Conlon',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/klinklang.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Michael Cornwall',
        sprite1: '../../assets/sprites/keldeo-resolute.png',
        sprite2: '../../assets/sprites/blastoise.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Karl Blake',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Alex Holdway',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Scott Burgess',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Vlad Jelizarov',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Oliver Elwick',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
]

let sixEvent = [
    {
        firstName: 'eeee',
        sprite1: '../../assets/sprites',
        sprite2: '../../assets/sprites',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
]

let sevenEvent = [
    {
        firstName: 'eeee',
        sprite1: '../../assets/sprites',
        sprite2: '../../assets/sprites',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
]

let eightEvent = [
    {
        firstName: 'eeee',
        sprite1: '../../assets/sprites',
        sprite2: '../../assets/sprites',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
]

let nineEvent = [
    {
        firstName: 'eeee',
        sprite1: '../../assets/sprites',
        sprite2: '../../assets/sprites',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
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

        if (item.list === '../../assets/list-icon.png') {
            console.log('hey')
            item_element.addEventListener('click', function () {
                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2013 Netherlands Nats";

                if (item.type == 'psychic') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/psychic-bg.png)";
                } else if (item.type == 'fire') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fire-bg.png)";
                } else if (item.type == 'fairy') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fairy-bg.png)";
                } else if (item.type == 'normal') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/normal-bg.png)";
                } else if (item.type == '') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/-bg.png)";
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

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2013 Australia Nats";

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

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2013 Germany Nats";

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
            })
        }

        juniorList.appendChild(item_element);
    }
}

// four
function displayList4(array = []) {
    fourList.innerHTML = '';

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

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2013 France Nats";

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
            })
        }

        fourList.appendChild(item_element);
    }
}

// five
function displayList5(array = []) {
    fiveList.innerHTML = '';

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

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2013 UK Nats";

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
            })
        }

        fiveList.appendChild(item_element);
    }
}

// six
function displayList6(array = []) {
    sixList.innerHTML = '';

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

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2014 Germany Nats";

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
            })
        }

        sixList.appendChild(item_element);
    }
}

// seven
function displayList7(array = []) {
    sevenList.innerHTML = '';

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

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2014 Denmark Nats";

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
            })
        }

        sevenList.appendChild(item_element);
    }
}

// eight
function displayList8(array = []) {
    eightList.innerHTML = '';

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

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2014 Denmark Nats";

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
            })
        }

        eightList.appendChild(item_element);
    }
}

// nine
function displayList9(array = []) {
    nineList.innerHTML = '';

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

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2014 Brazil Nats";

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
            })
        }

        nineList.appendChild(item_element);
    }
}

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);
displayList2(seniors);
displayList3(juniors);
displayList4(fourEvent);
displayList5(fiveEvent);
displayList6(sixEvent);
displayList7(sevenEvent);
displayList8(eightEvent);
displayList9(nineEvent);