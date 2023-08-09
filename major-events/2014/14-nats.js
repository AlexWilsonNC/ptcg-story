const masterList = document.querySelector('.uk-masters-ol');
const seniorList = document.querySelector('.uk-seniors-ol');
const juniorList = document.querySelector('.uk-juniors-ol');
const tenList = document.querySelector('.ten-ol');
const fiveList = document.querySelector('.five-ol');
const sixList = document.querySelector('.six-ol');
const sevenList = document.querySelector('.seven-ol');
const eightList = document.querySelector('.eight-ol');
const nineList = document.querySelector('.nine-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
    {
        firstName: 'Sebastian Lugo',
        sprite1: '../../assets/sprites/lugia.png',
        sprite2: '../../assets/sprites/deoxys.png',
        list: '../../assets/list-icon.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/lugia-ex-plasma.png',
                numImg: '../../assets/02.png'
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
                cardImg: '../../assets/cards/2014-2016/genesect-ex-plasma.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/latias-ex.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/snorlax-block.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/colress.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/n-promo.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/computer-search.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/colress-machine.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/pokemon-catcher-flip.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/roller-skates.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/plasma-ball.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/random-receiver.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/switch.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/escape-rope-bw.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/pal-pad.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
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
                cardImg: '../../assets/cards/energy/dce-xy1.png',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Leando Lopez',
        sprite1: '../../assets/sprites/virizion.png',
        sprite2: '../../assets/sprites/raichu.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Daniel Facciabene',
        sprite1: '../../assets/sprites/yveltal.png',
        sprite2: '../../assets/sprites/raichu.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Martin Saldivia',
        sprite1: '../../assets/sprites/lugia.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Javier Favilli',
        sprite1: '../../assets/sprites/yveltal.png',
        sprite2: '../../assets/sprites/raichu.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Dante Lenell',
        sprite1: '../../assets/sprites/keldeo-resolute.png',
        sprite2: '../../assets/sprites/blastoise.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Tomas Sainz',
        sprite1: '../../assets/sprites/yveltal.png',
        sprite2: '../../assets/sprites/garbodor.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Brian Miño',
        sprite1: '../../assets/sprites/yveltal.png',
        sprite2: '../../assets/sprites/garbodor.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
]

let seniors = [
    {
        firstName: 'Bryan de Vries',
        sprite1: '../../assets/sprites/yveltal.png',
        sprite2: '../../assets/sprites/garbodor.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/yveltal-ex.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/yveltal.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/garbodor-ltr.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/trubbish-poison-gas.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/sableye-junk-hunt.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/druddigon.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/n-promo.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/colress.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/dark-patch.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/energy-switch-bw.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/random-receiver.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/enhanced-hammer-bw.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-rod-bw.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../assets/03.png',
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
                cardImg: '../../assets/cards/energy/xy-energy-dark.png',
                numImg: '../../assets/09.png',
            },
            {
                cardImg: '../../assets/cards/energy/dce-xy1.png',
                numImg: '../../assets/02.png',
            },
        ]
    },
    {
        firstName: '--',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: '--',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: '--',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
]

let juniors = [
    {
        firstName: 'Dena van Wijk',
        sprite1: '../../assets/sprites/yveltal.png',
        sprite2: '../../assets/sprites/garbodor.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
          {
            cardImg: '../../assets/cards/2014-2016/yveltal-ex.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/garbodor-ltr.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/trubbish-poison-gas.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/sableye-junk-hunt.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/druddigon.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/n-promo.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/random-receiver.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/dark-patch.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/enhanced-hammer-bw.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/professors-letter.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/switch.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/pokemon-catcher-flip.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/muscle-band.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/energy/xy-energy-dark.png',
            numImg: '../../assets/07.png'
          },
          {
            cardImg: '../../assets/cards/energy/dce-2015.png',
            numImg: '../../assets/04.png'
          }
        ]
    },
    {
        firstName: '--',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: '--',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: '--',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
]

let tenEvent = [
    {
        firstName: 'Stéphane Ivanoff',
        sprite1: '../../assets/sprites/yveltal.png',
        sprite2: '../../assets/sprites/garbodor.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
          {
            cardImg: '../../assets/cards/2014-2016/yveltal-ex.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/garbodor-ltr.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/trubbish-poison-gas.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/sableye-junk-hunt.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/bouffalant.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/n-promo.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/bianca.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/lysandre.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/dark-patch.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/bicycle.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/colress-machine.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/professors-letter.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/muscle-band.png',
            numImg: '../../assets/03.png'
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
            cardImg: '../../assets/cards/energy/xy-energy-dark.png',
            numImg: '../../assets/08.png'
          },
          {
            cardImg: '../../assets/cards/energy/dce-2015.png',
            numImg: '../../assets/04.png'
          }
        ]
    },
    {
        firstName: 'Jeremy Amram',
        sprite1: '../../assets/sprites/greninja.png',
        sprite2: '../../assets/sprites/miltank.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Erwann Piedloup',
        sprite1: '../../assets/sprites/virizion.png',
        sprite2: '../../assets/sprites/genesect.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Cyrille Leroy',
        sprite1: '../../assets/sprites/empoleon.png',
        sprite2: '../../assets/sprites/dusknoir.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Benjamin Paradis',
        sprite1: '../../assets/sprites/empoleon.png',
        sprite2: '../../assets/sprites/dusknoir.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Ky Vong Nguyen',
        sprite1: '../../assets/sprites/yveltal.png',
        sprite2: '../../assets/sprites/garbodor.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Adrien Bechereau',
        sprite1: '../../assets/sprites/thundurus-therian.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Matthieu Cornillon',
        sprite1: '../../assets/sprites/virizion.png',
        sprite2: '../../assets/sprites/genesect.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
]

let fiveEvent = [
    {
        firstName: 'Jennifer Wilson',
        sprite1: '../../assets/sprites/yveltal.png',
        sprite2: '../../assets/sprites/garbodor.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
          {
            cardImg: '../../assets/cards/2014-2016/yveltal-ex.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/garbodor-ltr.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/trubbish-poison-gas.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/sableye-junk-hunt.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/bouffalant.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/absol-plasma.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/n-promo.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/colress.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/lysandre.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/dark-patch.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/bicycle.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/random-receiver.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/professors-letter.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/switch.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/muscle-band.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/energy/xy-energy-dark.png',
            numImg: '../../assets/08.png'
          },
          {
            cardImg: '../../assets/cards/energy/dce-2015.png',
            numImg: '../../assets/04.png'
          }
        ]
    },
    {
        firstName: 'Jordan Palmer',
        sprite1: '../../assets/sprites/yveltal.png',
        sprite2: '../../assets/sprites/raichu.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
              cardImg: '../../assets/cards/2014-2016/yveltal-ex.png',
              numImg: '../../assets/03.png',
            },
            {
              cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
              numImg: '../../assets/02.png',
            },
            {
              cardImg: '../../assets/cards/2014-2016/raichu.png',
              numImg: '../../assets/02.png',
            },
            {
              cardImg: '../../assets/cards/2014-2016/pikachu-nuzzle.png',
              numImg: '../../assets/02.png',
            },
            {
              cardImg: '../../assets/cards/2014-2016/sableye-junk-hunt.png',
              numImg: '../../assets/01.png',
            },
            {
              cardImg: '../../assets/cards/2014-2016/druddigon.png',
              numImg: '../../assets/01.png',
            },
            {
              cardImg: '../../assets/cards/2014-2016/bouffalant.png',
              numImg: '../../assets/01.png',
            },
            {
              cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
              numImg: '../../assets/04.png',
            },
            {
              cardImg: '../../assets/cards/2014-2016/n-promo.png',
              numImg: '../../assets/04.png',
            },
            {
              cardImg: '../../assets/cards/2014-2016/colress.png',
              numImg: '../../assets/02.png',
            },
            {
              cardImg: '../../assets/cards/2014-2016/lysandre.png',
              numImg: '../../assets/01.png',
            },
            {
              cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
              numImg: '../../assets/01.png',
            },
            {
              cardImg: '../../assets/cards/2014-2016/dark-patch.png',
              numImg: '../../assets/04.png',
            },
            {
              cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
              numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/03.png',
              },
              {
                cardImg: '../../assets/cards/2014-2016/bicycle.png',
                numImg: '../../assets/03.png',
              },
              {
                cardImg: '../../assets/cards/2014-2016/random-receiver.png',
                numImg: '../../assets/02.png',
              },
            {
              cardImg: '../../assets/cards/2014-2016/enhanced-hammer-bw.png',
              numImg: '../../assets/01.png',
            },
            {
              cardImg: '../../assets/cards/2014-2016/professors-letter.png',
              numImg: '../../assets/01.png',
            },
            {
              cardImg: '../../assets/cards/2014-2016/switch.png',
              numImg: '../../assets/01.png',
            },
            {
              cardImg: '../../assets/cards/2014-2016/muscle-band.png',
              numImg: '../../assets/03.png',
            },
            {
              cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
              numImg: '../../assets/02.png',
            },
            {
              cardImg: '../../assets/cards/energy/xy-energy-dark.png',
              numImg: '../../assets/08.png',
            },
            {
              cardImg: '../../assets/cards/energy/dce-xy1.png',
              numImg: '../../assets/04.png',
            },
          ]
    },
    {
        firstName: 'Andrew Tandianus',
        sprite1: '../../assets/sprites/aromatisse.png',
        sprite2: '../../assets/sprites/thundurus-therian.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Michael Kan',
        sprite1: '../../assets/sprites/keldeo-resolute.png',
        sprite2: '../../assets/sprites/blastoise.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Naomi Murn',
        sprite1: '../../assets/sprites/yveltal.png',
        sprite2: '../../assets/sprites/garbodor.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
          {
            cardImg: '../../assets/cards/2014-2016/yveltal-ex.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/sableye-junk-hunt.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/garbodor-ltr.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/trubbish-poison-gas.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/bouffalant.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/n-promo.png',
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
            cardImg: '../../assets/cards/2014-2016/lysandre.png',
            numImg: '../../assets/01.png'
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
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/random-receiver.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/professors-letter.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/switch.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/escape-rope-bw.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/enhanced-hammer-bw.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/super-rod-bw.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/muscle-band.png',
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
            cardImg: '../../assets/cards/energy/xy-energy-dark.png',
            numImg: '../../assets/08.png'
          },
          {
            cardImg: '../../assets/cards/energy/dce-2015.png',
            numImg: '../../assets/03.png'
          }
        ]
    },
    {
        firstName: 'Jake Cruwys',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Thomas Winkleman',
        sprite1: '../../assets/sprites/yveltal.png',
        sprite2: '../../assets/sprites/darkrai.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
          {
            cardImg: '../../assets/cards/2014-2016/yveltal-ex.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/bouffalant.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/sableye-junk-hunt.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/n-promo.png',
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
            cardImg: '../../assets/cards/2014-2016/lysandre.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
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
            cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
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
            cardImg: '../../assets/cards/2014-2016/random-receiver.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/professors-letter.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/muscle-band.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/energy/xy-energy-dark.png',
            numImg: '../../assets/08.png'
          },
          {
            cardImg: '../../assets/cards/energy/dce-2015.png',
            numImg: '../../assets/04.png'
          }
        ]
    },
    {
        firstName: 'Paul Coletta',
        sprite1: '../../assets/sprites/accelgor.png',
        sprite2: '../../assets/sprites/trevenant.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/accelgor.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/shelmet-plb.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/trevenant.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/phantump-astonish.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/dusknoir.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/dusclops.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/duskull-flf.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/musharna.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/munna.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/mew-ex-ltr.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/n-promo.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/colress.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/level-ball-bw.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/switch.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/rare-candy-bw.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/town-map-bw.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/silver-bangle.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/tropical-beach-2012.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-energy-psychic.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/energy/dce-xy1.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
]

let sixEvent = [
    {
        firstName: 'Karl Peters',
        sprite1: '../../assets/sprites/virizion.png',
        sprite2: '../../assets/sprites/genesect.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/virizion-ex.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/genesect-ex-plasma.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/shaymin-ex-nxd.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/bouffalant.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/mr-mime.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/n-promo.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/shadow-triad.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/colress.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/g-booster.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/enhanced-hammer-bw.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/energy-switch-bw.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/colress-machine.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professors-letter.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/potion-xy.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-rod-bw.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/skyarrow-bridge.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-energy-grass.png',
                numImg: '../../assets/09.png',
            },
            {
                cardImg: '../../assets/cards/energy/energy-plasma.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Dennis Mischitz',
        sprite1: '../../assets/sprites/virizion.png',
        sprite2: '../../assets/sprites/genesect.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/genesect-ex-plasma.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/virizion-ex.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/shaymin-ex-nxd.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/roserade.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/roselia.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/n-promo.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/shadow-triad.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/colress.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/g-booster.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/energy-switch-bw.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/escape-rope-bw.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/enhanced-hammer-bw.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/colress-machine.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professors-letter.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/town-map-bw.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-rod-bw.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/skyarrow-bridge.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-energy-grass.png',
                numImg: '../../assets/09.png',
            },
            {
                cardImg: '../../assets/cards/energy/energy-plasma.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Marc Lutz',
        sprite1: '../../assets/sprites/virizion.png',
        sprite2: '../../assets/sprites/genesect.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/genesect-ex-plasma.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/virizion-ex.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/shaymin-ex-nxd.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/electrode.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/voltorb-burst.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/n-promo.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/shadow-triad.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/g-booster.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/bicycle.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/energy-switch-bw.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/escape-rope-bw.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/colress-machine.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professors-letter.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/town-map-bw.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-rod-bw.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/skyarrow-bridge.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-energy-grass.png',
                numImg: '../../assets/09.png',
            },
            {
                cardImg: '../../assets/cards/energy/energy-plasma.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Finn Looft',
        sprite1: '../../assets/sprites/virizion.png',
        sprite2: '../../assets/sprites/genesect.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/virizion-ex.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/genesect-ex-plasma.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/roserade.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/roselia.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/mr-mime.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/n-promo.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/shadow-triad.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/colress.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/shauna.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/bianca.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/g-booster.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/energy-switch-bw.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/enhanced-hammer-bw.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professors-letter.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/town-map-bw.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-rod-bw.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/skyarrow-bridge.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-energy-grass.png',
                numImg: '../../assets/09.png',
            },
            {
                cardImg: '../../assets/cards/energy/energy-plasma.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'David Kirschbaum',
        sprite1: '../../assets/sprites/lugia.png',
        sprite2: '../../assets/sprites/deoxys.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/lugia-ex-plasma.png',
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
                cardImg: '../../assets/cards/2014-2016/kyurem.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/sigilyph-ltr.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
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
                cardImg: '../../assets/cards/2014-2016/n-promo.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/shauna.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/shadow-triad.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
                numImg: '../../assets/01.png'
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
                cardImg: '../../assets/cards/2014-2016/escape-rope-bw.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/switch.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/plasma-ball.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/tropical-beach-2012.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/energy/xy-energy-water.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
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
                cardImg: '../../assets/cards/energy/dce-xy1.png',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Ole Stognief',
        sprite1: '../../assets/sprites/emboar.png',
        sprite2: '../../assets/sprites/rayquaza.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/rayquaza-ex.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/emboar-ltr.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/tepig-bcr.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/delphox-xy.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/fennekin.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/reshiram-ltr.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/n-promo.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/colress.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/computer-search.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/rare-candy-bw.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/superior-energy-retreival.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/level-ball-bw.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professors-letter.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/switch.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/escape-rope-bw.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/tropical-beach-2012.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-energy-fire.png',
                numImg: '../../assets/08.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
                numImg: '../../assets/02.png',
            },
        ]
    },
    {
        firstName: 'David Sturm',
        sprite1: '../../assets/sprites/virizion.png',
        sprite2: '../../assets/sprites/genesect.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/genesect-ex-plasma.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/virizion-ex.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/shaymin-ex-nxd.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/sigilyph-ltr.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/mr-mime.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/n-promo.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/shadow-triad.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/shauna.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/g-booster.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/bicycle.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/energy-switch-bw.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/enhanced-hammer-bw.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/escape-rope-bw.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professors-letter.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/town-map-bw.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-rod-bw.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/skyarrow-bridge.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-energy-grass.png',
                numImg: '../../assets/09.png',
            },
            {
                cardImg: '../../assets/cards/energy/energy-plasma.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Steven Mao',
        sprite1: '../../assets/sprites/yveltal.png',
        sprite2: '../../assets/sprites/garbodor.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
              cardImg: '../../assets/cards/2014-2016/yveltal-ex.png',
              numImg: '../../assets/03.png'
            },
            {
              cardImg: '../../assets/cards/2014-2016/garbodor-ltr.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2014-2016/trubbish-poison-gas.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2014-2016/sableye-junk-hunt.png',
              numImg: '../../assets/01.png'
            },
            {
              cardImg: '../../assets/cards/2014-2016/bouffalant.png',
              numImg: '../../assets/01.png'
            },
            {
              cardImg: '../../assets/cards/2014-2016/absol-plasma.png',
              numImg: '../../assets/01.png'
            },
            {
              cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
              numImg: '../../assets/01.png'
            },
            {
              cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
              numImg: '../../assets/04.png'
            },
            {
              cardImg: '../../assets/cards/2014-2016/n-promo.png',
              numImg: '../../assets/04.png'
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
              cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
              numImg: '../../assets/04.png'
            },
            {
              cardImg: '../../assets/cards/2014-2016/dark-patch.png',
              numImg: '../../assets/04.png'
            },
            {
              cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
              numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/random-receiver.png',
                numImg: '../../assets/03.png'
              },
            {
              cardImg: '../../assets/cards/2014-2016/bicycle.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2014-2016/escape-rope-bw.png',
              numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../assets/03.png'
              },
            {
              cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
              numImg: '../../assets/03.png'
            },
            {
              cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
              numImg: '../../assets/03.png'
            },
            {
              cardImg: '../../assets/cards/energy/xy-energy-dark.png',
              numImg: '../../assets/08.png'
            },
            {
              cardImg: '../../assets/cards/energy/dce-2015.png',
              numImg: '../../assets/04.png'
            }
          ]
    },
]

let sevenEvent = [
    {
        firstName: 'Jakob Andersen',
        firstName: '',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Søren Lau',
        sprite1: '../../assets/sprites/aromatisse.png',
        sprite2: '../../assets/sprites/thundurus-therian.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/aromatisse.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/spritzee-sweet-scent.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/thundurus-ex.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/genesect-ex-plasma.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/virizion-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/landorus-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/entei-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/deoxys-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/rayquaza-lcr.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/suicune.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/n-promo.png',
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
                cardImg: '../../assets/cards/2014-2016/scoop-up-cyclone.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/level-ball-bw.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/plasma-ball.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/escape-rope-bw.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-energy-fairy.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/energy/prism-energy.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-energy-rainbow.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/energy/energy-plasma.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Lars Andersen',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Simon Øbro',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
]

let eightEvent = [
    {
        firstName: 'Rasmus Møller',
        sprite1: '../../assets/sprites/yveltal.png',
        sprite2: '../../assets/sprites/garbodor.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
          {
            cardImg: '../../assets/cards/2014-2016/yveltal-ex.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/garbodor-ltr.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/trubbish-poison-gas.png',
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
            cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/n-promo.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/colress.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/lysandre.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/dark-patch.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/bicycle.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/random-receiver.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/professors-letter.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/enhanced-hammer-bw.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/switch.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/muscle-band.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/silver-mirror.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/energy/xy-energy-dark.png',
            numImg: '../../assets/07.png'
          },
          {
            cardImg: '../../assets/cards/energy/dce-2015.png',
            numImg: '../../assets/04.png'
          }
        ]
    },
    {
        firstName: 'Tobias Andersen',
        sprite1: '../../assets/sprites/lugia.png',
        sprite2: '../../assets/sprites/deoxys.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Oscar Madsen',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/pyroar.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Peter Sørensen',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/aromatisse.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Alexander Black',
        sprite1: '../../assets/sprites/yveltal.png',
        sprite2: '../../assets/sprites/raichu.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Robert Lau',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Oliver Andersen',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Benjamin Thillerup',
        sprite1: '../../assets/sprites/deoxys.png',
        sprite2: '../../assets/sprites/umbreon.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
]

let nineEvent = [
    {
        firstName: 'Marcelo Xavier',
        sprite1: '../../assets/sprites/yveltal.png',
        sprite2: '../../assets/sprites/darkrai.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/yveltal-ex.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/yveltal.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/bouffalant.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/sableye-junk-hunt.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/n-promo.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/colress.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/pokemon-catcher-flip.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/dark-patch.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/bicycle.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/energy-switch-bw.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/random-receiver.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professors-letter.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/enhanced-hammer-bw.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-energy-dark.png',
                numImg: '../../assets/08.png',
            },
            {
                cardImg: '../../assets/cards/energy/dce-xy1.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Alex Silva',
        sprite1: '../../assets/sprites/flareon.png',
        sprite2: '../../assets/sprites/raichu.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Cesar Lopes',
        sprite1: '../../assets/sprites/virizion.png',
        sprite2: '../../assets/sprites/genesect.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: '--',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Nelson Magalhães',
        sprite1: '../../assets/sprites/yveltal.png',
        sprite2: '../../assets/sprites/garbodor.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: '?',
        sprite1: '../../assets/sprites/virizion.png',
        sprite2: '../../assets/sprites/genesect.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/virizion-ex.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/genesect-ex-plasma.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/roserade.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/roselia.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/roselia-13.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/sigilyph-ltr.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/n-promo.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ghetsis.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/colress.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/shadow-triad.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/g-booster.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/enhanced-hammer-bw.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/energy-switch-bw.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/switch.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-rod-drv.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/escape-rope-bw.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/energy/bw-energy-grass.png',
                numImg: '../../assets/09.png',
            },
            {
                cardImg: '../../assets/cards/energy/energy-plasma.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: '--',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: '--',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png',
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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2014 Argentina Nats";

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

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2014 Netherlands Nats";

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

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2014 Belgium Nats";

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

// ten
function displayList4(array = []) {
    tenList.innerHTML = '';

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2014 France Nats";

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

        tenList.appendChild(item_element);
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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2014 Australia Nats";

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

        nineList.appendChild(item_element);
    }
}

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);
displayList2(seniors);
displayList3(juniors);
displayList4(tenEvent);
displayList5(fiveEvent);
displayList6(sixEvent);
displayList7(sevenEvent);
displayList8(eightEvent);
displayList9(nineEvent);