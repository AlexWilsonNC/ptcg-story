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
        firstName: 'Sami Sekkoum',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/kingdra.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2008-2010/la.007.kingdra.jpg',
                numImg: '../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2008-2010/la.070.seadra.jpg',
                numImg: '../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2008-2010/la.102.horsea.jpg',
                numImg: '../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2008-2010/claydol.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/crobat.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/uxie.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/unown-guard.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/skuntank-sp.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/bebes-search.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/rare-candy-2008.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/super-scoop-up-2007.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/warp-point.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/energy/water-energy-capsule.png',
                numImg: '../../assets/08.png',
            },
        ]
    },
    {
        firstName: 'Andy Stone',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/gengar.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2008-2010/gengar-fainting-spell.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/haunter-smog.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/gastly.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/ge.103.cresselia_lv_x.jpg',
                numImg: '../../assets/01.png',
                exCard: true
            },
            {
                cardImg: '../../assets/cards/2008-2010/cresselia.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/claydol.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/crobat.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/unown-guard.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/uxie.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/pachirisu.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/looker.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/bebes-search.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/rare-candy-2008.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/poke-turn.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/warp-point.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/pl.111.miasma_valley.jpg',
                numImg: '../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
                numImg: '../../assets/09.png'
            },
            {
                cardImg: '../../assets/cards/energy/call-energy.png',
                numImg: '../../assets/03.png'
            }
        ]
    },
    {
        firstName: 'Yacine Sekkoum',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/kingdra.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2008-2010',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Johvan ',
        sprite1: '../../assets/sprites/dialga.png',
        sprite2: '../../assets/sprites/palkia.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2008-2010',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Nitish Doolub',
        sprite1: '../../assets/sprites/gardevoir.png',
        sprite2: '../../assets/sprites/weavile.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2008-2010',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Tom Hall',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/kingdra.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2008-2010',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Ian Elliot',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/gengar.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2008-2010/gengar-fainting-spell.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/haunter-smog.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/gastly.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/ge.103.cresselia_lv_x.jpg',
                numImg: '../../assets/01.png',
                exCard: true
            },
            {
                cardImg: '../../assets/cards/2008-2010/cresselia.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/claydol.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/crobat.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/unown-guard.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/uxie.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/pachirisu.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/looker.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/bebes-search.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/rare-candy-2008.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/poke-turn.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/warp-point.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/pl.111.miasma_valley.jpg',
                numImg: '../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
                numImg: '../../assets/09.png'
            },
            {
                cardImg: '../../assets/cards/energy/call-energy.png',
                numImg: '../../assets/03.png'
            }
        ]
    },
    {
        firstName: 'Aydenn ',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/kingdra.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2008-2010',
                numImg: '../../assets/04.png'
            },
        ]
    },
]

let seniors = [
    {
        firstName: 'Nicholas Fotheringham',
        sprite1: '../../assets/sprites/dialga.png',
        sprite2: '../../assets/sprites/palkia.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2008-2010/dialga-lvx.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/dialga-g.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/palkia-lvx-lost-cyclone.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/palkia-sp.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/claydol.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/bronzong.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/unown-guard.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/uxie.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/mesprit-pbind.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/azelf.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/crobat.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/bebes-search.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/poke-turn.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/power-spray.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/warp-point.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/premier-ball.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/energy-gain.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/energy/water-energy-capsule.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/energy/metal-energy-capsule.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/energy/metal-energy-special-dp.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/energy/call-energy.png',
                numImg: '../../assets/03.png'
            },
        ]
    },
    {
        firstName: 'Samuel McLewee',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/gengar.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2008-2010',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Adam Hawkins',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/magnezone.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
            cardImg: '../../assets/cards/2008-2010/la.142.magnezone_lv_x.jpg',
            numImg: '../../assets/01.png',
            exCard: true
        },
        {
            cardImg: '../../assets/cards/2008-2010/sf.006.magnezone.jpg',
            numImg: '../../assets/02.png',
            oldCard: true
        },
        {
            cardImg: '../../assets/cards/2008-2010/sf.005.magnezone.jpg',
            numImg: '../../assets/01.png',
            oldCard: true
        },
        {
            cardImg: '../../assets/cards/2008-2010/sf.042.magneton.jpg',
            numImg: '../../assets/02.png',
            oldCard: true
        },
        {
            cardImg: '../../assets/cards/2008-2010/sf.066.magnemite.jpg',
            numImg: '../../assets/02.png',
            oldCard: true
        },
        {
            cardImg: '../../assets/cards/2008-2010/sf.067.magnemite.jpg',
            numImg: '../../assets/02.png',
            oldCard: true
        },
        {
            cardImg: '../../assets/cards/2008-2010/claydol.png',
            numImg: '../../assets/02.png'
        },
        {
            cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
            numImg: '../../assets/02.png'
        },
        {
            cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
            numImg: '../../assets/01.png'
        },
        {
            cardImg: '../../assets/cards/2008-2010/uxie.png',
            numImg: '../../assets/02.png'
        },
        {
            cardImg: '../../assets/cards/2008-2010/la.031.jirachi.jpg',
            numImg: '../../assets/03.png',
            oldCard: true
        },
        {
            cardImg: '../../assets/cards/2008-2010/azelf.png',
            numImg: '../../assets/01.png'
        },
        {
            cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
            numImg: '../../assets/03.png'
        },
        {
            cardImg: '../../assets/cards/2008-2010/bebes-search.png',
            numImg: '../../assets/03.png'
        },
        {
            cardImg: '../../assets/cards/2008-2010/felicitys-drawing.png',
            numImg: '../../assets/02.png'
        },
        {
            cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
            numImg: '../../assets/02.png'
        },
        {
            cardImg: '../../assets/cards/2008-2010/rare-candy-2008.png',
            numImg: '../../assets/03.png'
        },
        {
            cardImg: '../../assets/cards/2008-2010/warp-point.png',
            numImg: '../../assets/03.png'
        },
        {
            cardImg: '../../assets/cards/2008-2010/premier-ball.png',
            numImg: '../../assets/02.png'
        },
        {
            cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
            numImg: '../../assets/02.png'
        },
        {
            cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
            numImg: '../../assets/02.png'
        },
        {
            cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
            numImg: '../../assets/02.png'
        },
        {
            cardImg: '../../assets/cards/energy/lightning-energy-capsule.png',
            numImg: '../../assets/07.png'
        },
        {
            cardImg: '../../assets/cards/energy/metal-energy-capsule.png',
            numImg: '../../assets/04.png'
        },
        {
            cardImg: '../../assets/cards/energy/metal-energy-special-dp.png',
            numImg: '../../assets/04.png'
        },
        ]
    },
    {
        firstName: 'Luke P',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/kingdra.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2008-2010',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Luke Burke',
        sprite1: '../../assets/sprites/honchkrow.png',
        sprite2: '../../assets/sprites/toxicroak.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2008-2010',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Alex N',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/magnezone.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2008-2010',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Robert O',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/kingdra.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2008-2010',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Fares Sekkoum',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/tyranitar.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2008-2010',
                numImg: '../../assets/04.png'
            },
        ]
    },
]

let juniors = [
    {
        firstName: 'Cameron Dilley',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/dialga.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2008-2010',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Christopher Fotheringham',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/kingdra.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2008-2010/la.007.kingdra.jpg',
                numImg: '../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2008-2010/la.070.seadra.jpg',
                numImg: '../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2008-2010/la.102.horsea.jpg',
                numImg: '../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2008-2010/claydol.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/uxie.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/unown-guard.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/bebes-search.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/bucks-training.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/rare-candy-2008.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/poke-drawer-plus.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/warp-point.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/pluspower.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/pokedex.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/md.079.dawn_stadium.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/energy/water-energy-capsule.png',
                numImg: '../../assets/11.png',
            },
            {
                cardImg: '../../assets/cards/energy/call-energy.png',
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
                cardImg: '../../assets/cards/2008-2010',
                numImg: '../../assets/04.png'
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
                cardImg: '../../assets/cards/2008-2010',
                numImg: '../../assets/04.png'
            },
        ]
    },
]

let tenEvent = [
    {
        firstName: 'Tom Zhan',
        sprite1: '../../assets/sprites/azelf.png',
        sprite2: '../../assets/sprites/mesprit.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2008-2010',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Jonas Prohaska',
        sprite1: '../../assets/sprites/dialga.png',
        sprite2: '../../assets/sprites/mewtwo.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2008-2010',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Luca Schuster',
        sprite1: '../../assets/sprites/leafeon.png',
        sprite2: '../../assets/sprites/glaceon.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2007-2008/leafeon-lvx.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/rr.045.leafeon.jpg',
                numImg: '../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2007-2008/glaceon-lvx.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/glaceon.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/md.020.glaceon.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2008-2010/md.034.vaporeon.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2007-2008/eevee-flowers.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/sf.032.bibarel.jpg',
                numImg: '../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2008-2010/sf.054.bidoof.jpg',
                numImg: '../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2008-2010/sw.073.venomoth.jpg',
                numImg: '../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2008-2010/sw.116.venonat.jpg',
                numImg: '../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2008-2010/unown-guard.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/md.013.rotom_.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/bebes-search.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/ar.090.professor_oaks_visit.jpg',
                numImg: '../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2008-2010/bucks-training.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/premier-ball.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/warp-point.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/switch-2007.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/pl.107.level_max.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2008-2010/md.079.dawn_stadium.jpg',
                numImg: '../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/energy/grass-energy-capsule.png',
                numImg: '../../assets/07.png'
            },
            {
                cardImg: '../../assets/cards/energy/water-energy-capsule.png',
                numImg: '../../assets/07.png'
            },
            {
                cardImg: '../../assets/cards/energy/call-energy.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/energy/warp_energy.jpg',
                numImg: '../../assets/01.png'
            },
        ]
    },
    {
        firstName: 'Fillip Lausch',
        sprite1: '../../assets/sprites/darkrai.png',
        sprite2: '../../assets/sprites/venomoth.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2008-2010',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Samuel ',
        sprite1: '../../assets/sprites/gliscor.png',
        sprite2: '../../assets/sprites/rampardos.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2008-2010',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Patrick Li',
        sprite1: '../../assets/sprites/giratina-origin.png',
        sprite2: '../../assets/sprites/leafeon.png',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2008-2010',
                numImg: '../../assets/04.png'
            },
        ]
    },
]

let fiveEvent = [
    {
        firstName: 'eeee',
        sprite1: '../../assets/sprites',
        sprite2: '../../assets/sprites',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2008-2010',
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
        // list: '../../assets/sprites/blank.png',
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
        // list: '../../assets/sprites/blank.png',
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
        // list: '../../assets/sprites/blank.png',
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
        // list: '../../assets/sprites/blank.png',
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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2009 UK Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2011 Sweden Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2009 UK Nats";

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

// four
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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2009 Austria Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2011 France Nats";

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