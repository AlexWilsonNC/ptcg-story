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
        firstName: 'Alex Northey',
        sprite1: '../../assets/sprites/zekrom.png',
        sprite2: '../../assets/sprites/eelektrik.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Karl Blake',
        sprite1: '../../assets/sprites/mismagius.png',
        sprite2: '../../assets/sprites/vileplume.png',
        list: '../../assets/list-icon.png',
        type: 'normal',
        deck: [
            {
              cardImg: '../../assets/cards/2010-2012/mismagius.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2010-2012/misdreavus.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2010-2012/vileplume.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2010-2012/oddish.png',
              numImg: '../../assets/03.png'
            },
            {
              cardImg: '../../assets/cards/2010-2012/darkrai-ex.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2010-2012/mewtwo-ex.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2010-2012/terrakion-nvi.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2010-2012/virizion.png',
              numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/espeon.png',
                numImg: '../../assets/01.png'
              },
              {
                cardImg: '../../assets/cards/2010-2012/eevee-cff.png',
                numImg: '../../assets/01.png'
              },
              {
                cardImg: '../../assets/cards/2010-2012/shaymin-ex-nxd.png',
                numImg: '../../assets/01.png'
              },
            {
              cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
              numImg: '../../assets/01.png'
            },
            {
              cardImg: '../../assets/cards/2010-2012/pichu.png',
              numImg: '../../assets/01.png'
            },
            {
              cardImg: '../../assets/cards/2010-2012/poke-collector.png',
              numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/twins.png',
                numImg: '../../assets/04.png'
              },
            {
              cardImg: '../../assets/cards/2010-2012/pont.png',
              numImg: '../../assets/03.png'
            },
            {
              cardImg: '../../assets/cards/2010-2012/n-bw.png',
              numImg: '../../assets/03.png'
            },
            {
              cardImg: '../../assets/cards/2010-2012/seeker.png',
              numImg: '../../assets/02.png'
            },
            {
              cardImg: '../../assets/cards/2010-2012/cheren.png',
              numImg: '../../assets/01.png'
            },
            {
              cardImg: '../../assets/cards/2010-2012/rare-candy-bw.png',
              numImg: '../../assets/04.png'
            },
            {
              cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
              numImg: '../../assets/04.png'
            },
            {
              cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
              numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/energy/bw-energy-psychic.png',
                numImg: '../../assets/01.png'
              },
            {
              cardImg: '../../assets/cards/energy/prism-energy.png',
              numImg: '../../assets/04.png'
            },
            {
              cardImg: '../../assets/cards/energy/rainbow-energy-hgss.png',
              numImg: '../../assets/04.png'
            },
            {
              cardImg: '../../assets/cards/energy/dce-bw.png',
              numImg: '../../assets/04.png'
            },
          ]
    },
    {
        firstName: 'Sami Sekkoum',
        sprite1: '../../assets/sprites/celebi.png',
        sprite2: '../../assets/sprites/mewtwo.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Matt Blower',
        sprite1: '../../assets/sprites/vanilluxe.png',
        sprite2: '../../assets/sprites/vileplume.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Johnny Hall',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/meganium.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Faisal Khan',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Tommy Roberts',
        sprite1: '../../assets/sprites/empoleon.png',
        sprite2: '../../assets/sprites/terrakion.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Jak S-Armstead',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Fares Sekkoum',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'John Gregory',
        sprite1: '../../assets/sprites/celebi.png',
        sprite2: '../../assets/sprites/mewtwo.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Scot Burgess',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Jake Walvin',
        sprite1: '../../assets/sprites/mewtwo.png',
        sprite2: '../../assets/sprites/eelektrik.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Oliver Barnett',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Samuel Mclewee',
        sprite1: '../../assets/sprites/mewtwo.png',
        sprite2: '../../assets/sprites/terrakion.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Russel Moore',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Charles Barton',
        sprite1: '../../assets/sprites/darkrai.png',
        sprite2: '../../assets/sprites/terrakion.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png',
            },
        ]
    },
]

let seniors = [
    {
        firstName: 'Patricia Walsh',
        sprite1: '../../assets/sprites/darkrai.png',
        sprite2: '../../assets/sprites/mewtwo.png',
        list: '../../assets/list-icon.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012/darkrai-ex.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/mewtwo-ex.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/terrakion-nvi.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/smeargle.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/shaymin.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/pont.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/n-bw.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/dark-patch.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/junk-arm.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/ultra-ball-bw.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/switch-bw.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/pluspower.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/energy-switch-bw.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/random-receiver.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/dual-ball.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/eviolite.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/energy/bw-energy-dark.png',
                numImg: '../../assets/07.png',
            },
            {
                cardImg: '../../assets/cards/energy/bw-energy-fighting.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/energy/dce-bw.png',
                numImg: '../../assets/03.png',
            },
        ]
    },
    {
        firstName: 'Javier Favilli',
        sprite1: '../../assets/sprites/darkrai.png',
        sprite2: '../../assets/sprites/mewtwo.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Daniel Facciabene',
        sprite1: '../../assets/sprites/darkrai.png',
        sprite2: '../../assets/sprites/weavile.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Hernan Gilardino',
        sprite1: '../../assets/sprites/darkrai.png',
        sprite2: '../../assets/sprites/terrakion.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012/darkrai-ex.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/terrakion-nvi.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/smeargle.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/shaymin.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/n-bw.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/bianca.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/junk-arm.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/dark-patch.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/ultra-ball-bw.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/lost-remover.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/super-scoop-up.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/random-receiver.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/max-potion-bw.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/super-rod-bw.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/exp-share.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/dark-claw.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/energy/bw-energy-dark.png',
                numImg: '../../assets/08.png',
            },
            {
                cardImg: '../../assets/cards/energy/bw-energy-fighting.png',
                numImg: '../../assets/05.png',
            },
        ]
    },
]

let juniors = [
    {
        firstName: 'Curtis Lyon',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/entei.png',
        list: '../../assets/list-icon.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012/entei-ex.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/mewtwo-ex.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/terrakion-nvi.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/smeargle.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/shaymin.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/n-bw.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/pont.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/potion-bw.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/junk-arm.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/switch-bw.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/ultra-ball-bw.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/heavy-ball-bw.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/random-receiver.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/energy-search.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/energy-switch-bw.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/max-potion-bw.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/pluspower.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/lost-remover.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/eviolite.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/energy/bw-energy-fire.png',
                numImg: '../../assets/07.png',
            },
            {
                cardImg: '../../assets/cards/energy/bw-energy-fighting.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/energy/dce-bw.png',
                numImg: '../../assets/02.png',
            },
        ]
    },
    {
        firstName: 'Mike Martindale',
        sprite1: '../../assets/sprites/zekrom.png',
        sprite2: '../../assets/sprites/eelektrik.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Adrian Loke',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/darkrai.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Zach Lesage',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/darkrai.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Alaric M-Boone',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/vileplume.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Lourence Singh',
        sprite1: '../../assets/sprites/zekrom.png',
        sprite2: '../../assets/sprites/eelektrik.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Matt Koo',
        sprite1: '../../assets/sprites/celebi.png',
        sprite2: '../../assets/sprites/mewtwo.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Aaron Rozbicki',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/darkrai.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png',
            },
        ]
    },
]

let tenEvent = [
    {
        firstName: 'Kevin N',
        sprite1: '../../assets/sprites/zekrom.png',
        sprite2: '../../assets/sprites/machamp.png',
        list: '../../assets/list-icon.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012/zekrom-ex.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/zekrom.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/machamp-prime.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/machamp.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/machoke.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/machop.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/lucario-nxd.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/riolu.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/terrakion-nvi.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/mewtwo-ex.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/regigigas-ex.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/tornadus.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/pont.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/poke-collector.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/team-rockets-trickery.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/interviewers-question.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/cilan.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/switch-bw.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/energy-switch-bw.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/alph-lithograph-hgss.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
                numImg: '../../assets/08.png',
            },
            {
                cardImg: '../../assets/cards/energy/bw-energy-fighting.png',
                numImg: '../../assets/07.png',
            },
            {
                cardImg: '../../assets/cards/energy/dce-bw.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/energy/prism-energy.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/energy/rescue-energy.png',
                numImg: '../../assets/01.png',
            },
        ]
    },
    {
        firstName: 'Simon Z',
        sprite1: '../../assets/sprites/durant.png',
        sprite2: '../../assets/sprites/blank.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Patrick L',
        sprite1: '../../assets/sprites/zekrom.png',
        sprite2: '../../assets/sprites/eelektrik.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Alexander P',
        sprite1: '../../assets/sprites/zekrom.png',
        sprite2: '../../assets/sprites/eelektrik.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png',
            },
        ]
    },
]

let fiveEvent = [
    {
        firstName: 'Stefan W',
        sprite1: '../../assets/sprites/terrakion.png',
        sprite2: '../../assets/sprites/landorus.png',
        list: '../../assets/list-icon.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012/terrakion-nvi.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/landorus.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/smeargle.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/shaymin.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/tyrogue-col.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/poke-collector.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/pont.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/n-bw.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/black-belt.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/dual-ball.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/junk-arm.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/lost-remover.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/switch-bw.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/pluspower.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/super-rod-bw.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/eviolite.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/exp-share.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/energy/bw-energy-fighting.png',
                numImg: '../../assets/11.png',
            },
        ]
    },
    {
        firstName: 'Samuel Z',
        sprite1: '../../assets/sprites/reshiram.png',
        sprite2: '../../assets/sprites/typhlosion.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Matthias M',
        sprite1: '../../assets/sprites/mew.png',
        sprite2: '../../assets/sprites/yanmega.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Daniel C',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/durant.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png',
            },
        ]
    },
]

let sixEvent = [
    {
        firstName: 'Andreas S',
        sprite1: '../../assets/sprites/celebi.png',
        sprite2: '../../assets/sprites/mewtwo.png',
        list: '../../assets/list-icon.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012/celebi-prime.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/terrakion-nvi.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/mewtwo-ex.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/tornadus.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/regigigas-ex.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/shaymin-ex-nxd.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/smeargle.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/pont.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/poke-collector.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/n-bw.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/cilan.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/junk-arm.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/dual-ball.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/switch-bw.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/revive.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/super-rod-bw.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/eviolite.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/skyarrow-bridge.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/energy/bw-energy-grass.png',
                numImg: '../../assets/07.png'
            },
            {
                cardImg: '../../assets/cards/energy/bw-energy-fighting.png',
                numImg: '../../assets/05.png'
            },
            {
                cardImg: '../../assets/cards/energy/dce-bw.png',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Daniel F',
        sprite1: '../../assets/sprites/zekrom.png',
        sprite2: '../../assets/sprites/eelektrik.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Lukas P',
        sprite1: '../../assets/sprites/zekrom.png',
        sprite2: '../../assets/sprites/eelektrik.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Alexander M',
        sprite1: '../../assets/sprites/reshiram.png',
        sprite2: '../../assets/sprites/typhlosion.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png'
            },
        ]
    },
]

let sevenEvent = [
    {
        firstName: 'Steven Mao',
        sprite1: '../../assets/sprites/celebi.png',
        sprite2: '../../assets/sprites/mewtwo.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Dennis Seebürger',
        sprite2: '../../assets/sprites/mewtwo.png',
        sprite1: '../../assets/sprites/terrakion.png',
        list: '../../assets/list-icon.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012/terrakion-nvi.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/mewtwo-ex.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/shaymin.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/tornadus-ex.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/smeargle.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/n-bw.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/pont.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/junk-arm.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/dual-ball.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/pluspower.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/switch-bw.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/random-receiver.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/super-scoop-up.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/exp-share.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/energy/bw-energy-fighting.png',
                numImg: '../../assets/09.png'
            },
            {
                cardImg: '../../assets/cards/energy/dce-bw.png',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Daniel Hetzel',
        sprite1: '../../assets/sprites/celebi.png',
        sprite2: '../../assets/sprites/mewtwo.png',
        list: '../../assets/list-icon.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012/celebi-prime.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/mewtwo-ex.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/tornadus-ex.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/pont.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/n-dex.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/pluspower.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/dual-ball.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/junk-arm.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/switch-bw.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/random-receiver.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/energy-retrieval-bw.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/eviolite.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/skyarrow-bridge.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/energy/bw-energy-grass.png',
                numImg: '../../assets/10.png'
            },
            {
                cardImg: '../../assets/cards/energy/dce-bw.png',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Janik Reimers',
        sprite1: '../../assets/sprites/celebi.png',
        sprite2: '../../assets/sprites/mewtwo.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Lutz R',
        sprite1: '../../assets/sprites/darkrai.png',
        sprite2: '../../assets/sprites/tornadus.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Thomas Werth',
        sprite1: '../../assets/sprites/mew.png',
        sprite2: '../../assets/sprites/accelgor.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Sabine G',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/donphan.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Benjamin Cheynubrata',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/darkrai.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
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
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
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
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012',
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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2012 UK Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2012 Argentina Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2012 Canada Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2012 Austria Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2012 Austria Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2012 Austria Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2012 Germany Nats";

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