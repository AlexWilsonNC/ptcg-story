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
        firstName: 'Yacine Sekkoum',
        sprite1: '../../assets/sprites/gardevoir.png',
        sprite2: '../../assets/sprites/gallade.png',
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
        firstName: 'Sami Sekkoum',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/garchomp.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2007-2008/md.097.garchomp_lv_x.jpg',
                numImg: '../../assets/01.png',
                exCard: true
            },
            {
                cardImg: '../../assets/cards/2007-2008/mt.009.garchomp.jpg',
                numImg: '../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2007-2008/mt.048.gabite.jpg',
                numImg: '../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: 'https://images.pokemontcg.io/dp2/85_hires.png',
                numImg: '../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2007-2008/claydol.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2007-2008/dp.002.dusknoir.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2007-2008/sw.086.duskull.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2007-2008/cg.005.dugtrio.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2007-2008/sw.085.diglett.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2007-2008/phione.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2007-2008/absol-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2007-2008/rotom.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2007-2008/pachirisu.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2007-2008/chatot.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2007-2008/unown-quick.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2007-2008/celios-network.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2007-2008/tv-reporter.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2007-2008/holon-mentor.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2007-2008/pluspower.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2007-2008/time-space-distortion.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2007-2008/strangth-charm.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2007-2008/crystal-beach.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/energy/lightning-energy-capsule.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/energy/water-energy-capsule.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/energy/fighting-energy-capsule.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/energy/metal-energy-capsule.png',
                numImg: '../../assets/01.png',
            },
        ]
    },
    {
        firstName: 'Tom Hall',
        sprite1: '../../assets/sprites/gardevoir.png',
        sprite2: '../../assets/sprites/gallade.png',
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
        firstName: 'Jem Parks',
        sprite1: '../../assets/sprites/darkrai.png',
        sprite2: '../../assets/sprites/honchkrow.png',
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
        firstName: 'Ben S-Armstead',
        sprite1: '../../assets/sprites/gardevoir.png',
        sprite2: '../../assets/sprites/gallade.png',
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
        firstName: 'Faisal Khan',
        sprite1: '../../assets/sprites/empoleon.png',
        sprite2: '../../assets/sprites/omastar.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2007-2008/dp.120.empoleon_lv_x.jpg',
                numImg: '../../assets/01.png',
                exCard: true
            },
            {
                cardImg: '../../assets/cards/2007-2008/empoleon-dual-splash.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/prinplup.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/piplup.png',
                numImg: '../../assets/04.png',
                radiusCard: true
            },
            {
                cardImg: '../../assets/cards/2007-2008/omastar.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/md.069.omanyte.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2007-2008/claydol.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/unown-quick.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/phione.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/chatot.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/castform.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/bebes-search.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/warp-point.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/helix-fossil.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/energy/water-energy-capsule.png',
                numImg: '../../assets/08.png'
            },
            {
                cardImg: '../../assets/cards/energy/call-energy.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/energy/question-mark.png',
                numImg: '../../assets/06.png'
            },
        ]
    },
    {
        firstName: 'Nick Lote',
        sprite1: '../../assets/sprites/gardevoir.png',
        sprite2: '../../assets/sprites/gallade.png',
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
        firstName: 'Ren Longman',
        sprite1: '../../assets/sprites/empoleon.png',
        sprite2: '../../assets/sprites/bronzong.png',
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
        firstName: 'Scot Harrison',
        sprite1: '../../assets/sprites/gardevoir.png',
        sprite2: '../../assets/sprites/gallade.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2007-2008/gardevoir-lvx.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/gardevoir-psychic-lock.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/gallade.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/kirlia.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/ralts.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/claydol.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/pachirisu.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/phione.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/omastar.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/celios-network.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/oaks-visit.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/windstorm.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/warp-point.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/helix-fossil.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
                numImg: '../../assets/07.png'
            },
            {
                cardImg: '../../assets/cards/energy/fighting-energy-capsule.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/energy/call-energy.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
                numImg: '../../assets/01.png'
            },
        ]
    },
    {
        firstName: 'Ryan Tur',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/empoleon.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2007-2008/dp.120.empoleon_lv_x.jpg',
                numImg: '../../assets/01.png',
                exCard: true
            },
            {
                cardImg: '../../assets/cards/2007-2008/empoleon-dual-splash.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/empoleon-ice-blade.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/prinplup.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/piplup-berry.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/mt.026.gyarados.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2007-2008/magikarp.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/cg.005.dugtrio.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2007-2008/sw.085.diglett.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2007-2008/palkia-lvx.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/palkia.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/claydol.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/pachirisu.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/celios-network.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/bebes-search.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/switch.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/time-space-distortion.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/energy/water-energy-capsule.png',
                numImg: '../../assets/10.png'
            },
            {
                cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/old-energy/holon-energy-wp.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/energy/question-mark.png',
                numImg: '../../assets/02.png'
            },
        ]
    },
    {
        firstName: 'Kirk Clarke',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/darkrai.png',
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
        firstName: 'Simon Humphrey',
        sprite1: '../../assets/sprites/gardevoir.png',
        sprite2: '../../assets/sprites/gallade.png',
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
        firstName: 'Jovan Roberts',
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
        firstName: 'Nitish Doolub',
        sprite1: '../../assets/sprites/empoleon.png',
        sprite2: '../../assets/sprites/omastar.png',
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
        firstName: 'Charlie Holmes',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/infernape.png',
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
        firstName: 'Chris McGivern',
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

let seniors = [
    {
        firstName: 'Nicholas Fotheringham',
        sprite1: '../../assets/sprites/gardevoir.png',
        sprite2: '../../assets/sprites/gallade.png',
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
        firstName: 'Luke Astarita',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/empoleon.png',
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
        sprite2: '../../assets/sprites/empoleon.png',
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
        firstName: 'Jak S-Armstead',
        sprite1: '../../assets/sprites/empoleon.png',
        sprite2: '../../assets/sprites/omastar.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2007-2008/empoleon-dual-splash.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/prinplup.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/piplup.png',
                numImg: '../../assets/04.png',
                radiusCard: true
            },
            {
                cardImg: '../../assets/cards/2007-2008/phione.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/omastar.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/md.069.omanyte.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2007-2008/claydol.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/sw.019.suicune.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2007-2008/chatot.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/celios-network.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/oaks-visit.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/warp-point.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/helix-fossil.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/energy/water-energy-capsule.png',
                numImg: '../../assets/10.png'
            },
            {
                cardImg: '../../assets/cards/energy/call-energy.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
                numImg: '../../assets/02.png'
            },
        ]
    },
]

let juniors = [
    {
        firstName: 'Aaron C',
        sprite1: '../../assets/sprites/gardevoir.png',
        sprite2: '../../assets/sprites/gallade.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2007-2008/gardevoir-lvx.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/gardevoir-psychic-lock.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/gallade.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/kirlia.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/ralts.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/furret.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/sentret.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/claydol.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/dusknoir.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/duskull.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/tauros.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/celios-network.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/warp-point.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/windstorm.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/strangth-charm.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/lake-boundary.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
                numImg: '../../assets/05.png'
            },
            {
                cardImg: '../../assets/cards/energy/fighting-energy-capsule.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/energy/cyclone-energy-dp.png',
                numImg: '../../assets/02.png'
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
        firstName: 'Finn Looft',
        sprite1: '../../assets/sprites/absol.png',
        sprite2: '../../assets/sprites/gallade.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2008-2010/absol.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/gallade.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/gardevoir-lvx.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/df.093.gardevoir_ex.jpg',
                numImg: '../../assets/01.png',
                exCard: true
            },
            {
                cardImg: '../../assets/cards/2008-2010/gardevoir-psychic-lock.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/kirlia.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/ralts-smack.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/ralts-hypnosis.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/claydol.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/celios-network.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/castaway.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/felicitys-drawing.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/elms-training-method.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/warp-point.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/windstorm.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/strangth-charm.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
                numImg: '../../assets/05.png'
            },
            {
                cardImg: '../../assets/cards/energy/fire-energy-capsule.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/energy/fighting-energy-capsule.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/energy/dark-energy-capsule.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/energy/scramble-energy.png',
                numImg: '../../assets/02.png'
            },
        ]
    },
    {
        firstName: 'Tobias Thesing',
        sprite1: '../../assets/sprites/empoleon.png',
        sprite2: '../../assets/sprites/bronzong.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2007-2008/dp.120.empoleon_lv_x.jpg',
                numImg: '../../assets/01.png',
                exCard: true
            },
            {
                cardImg: '../../assets/cards/2007-2008/empoleon-dual-splash.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/prinplup.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/piplup.png',
                numImg: '../../assets/03.png',
                radiusCard: true
            },
            {
                cardImg: '../../assets/cards/2007-2008/bronzong.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/bronzor.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/claydol.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/pachirisu.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/phione.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/absol-ex.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/omastar.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/celios-network.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/bebes-search.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/warp-point.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/windstorm.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/pk.085.mysterious_fossil.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2007-2008/battle-fronteir.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/energy/water-energy-capsule.png',
                numImg: '../../assets/07.png'
            },
            {
                cardImg: '../../assets/cards/energy/call-energy.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
                numImg: '../../assets/03.png'
            },
        ]
    },
    {
        firstName: 'Karl Peters',
        sprite1: '../../assets/sprites/gardevoir.png',
        sprite2: '../../assets/sprites/gallade.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2007-2008/gardevoir-lvx.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/gardevoir-psychic-lock.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/gallade.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/kirlia.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/ralts.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/claydol.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/dusknoir.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/sw.086.duskull.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2007-2008/latios-delta.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/latias.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/celios-network.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/bebes-search.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/pluspower.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/warp-point.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/lake-boundary.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/energy/call-energy.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/energy/cyclone-energy-dp.png',
                numImg: '../../assets/01.png'
            },
        ]
    },
    {
        firstName: 'Robin Gimbel',
        sprite1: '../../assets/sprites/gardevoir.png',
        sprite2: '../../assets/sprites/gallade.png',
        // // list../../../assets/list-icon.png',
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
        firstName: 'Andrea Ceolin',
        sprite1: '../../assets/sprites/magmortar.png',
        sprite2: '../../assets/sprites/togekiss.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2007-2008/magmortar-lvx.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/magmortar.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/magmar.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/ge.011.togekiss.jpg',
                numImg: '../../assets/03.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2007-2008/df.011.togetic.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2007-2008/togepi.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/pachirisu.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/claydol.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/mew-star.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/bebes-search.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/celios-network.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/crystal-beach.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/energy/fire-energy-capsule.png',
                numImg: '../../assets/17.png'
            },
        ]
    },
    {
        firstName: 'Alessandro Cremascoli',
        sprite1: '../../assets/sprites/banette.png',
        sprite2: '../../assets/sprites/gorebyss.png',
        // //  list: '../../../assets/list-icon.png',
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
        firstName: 'Simone Soldo',
        sprite1: '../../assets/sprites/gardevoir.png',
        sprite2: '../../assets/sprites/gallade.png',
        // //  list: '../../../assets/list-icon.png',
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
        firstName: 'Fabrizio Cremascoli',
        sprite1: '../../assets/sprites/banette.png',
        sprite2: '../../assets/sprites/gorebyss.png',
        // //  list: '../../../assets/list-icon.png',
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
        firstName: 'Arco O',
        sprite1: '../../assets/sprites/empoleon.png',
        sprite2: '../../assets/sprites/omastar.png',
        list: '../../assets/list-icon.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2007-2008/empoleon-dual-splash.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/prinplup.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/piplup.png',
                numImg: '../../assets/04.png',
                radiusCard: true
            },
            {
                cardImg: '../../assets/cards/2008-2010/md.026.omastar.jpg',
                numImg: '../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2008-2010/md.069.omanyte.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2008-2010/md.012.phione.jpg',
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
                cardImg: '../../assets/cards/2007-2008/bronzong.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/bronzor.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/md.091.helix_fossil.jpg',
                numImg: '../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2007-2008/celios-network.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/bebes-search.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/warp-point-2007.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/energy/water-energy-capsule.png',
                numImg: '../../assets/07.png'
            },
            {
                cardImg: '../../assets/cards/energy/call-energy.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
                numImg: '../../assets/03.png'
            },
        ]
    },
    {
        firstName: 'Lia van B',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/empoleon.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2008-2010',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Maurice v.d. B',
        sprite1: '../../assets/sprites/gardevoir.png',
        sprite2: '../../assets/sprites/gallade.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2008-2010',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Jonathan A',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/machamp.png',
        list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2008-2010',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Anna Schipper',
        sprite1: '../../assets/sprites/empoleon.png',
        sprite2: '../../assets/sprites/omastar.png',
        list: '../../assets/list-icon.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2007-2008/empoleon-dual-splash.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/prinplup.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/piplup.png',
                numImg: '../../assets/04.png',
                radiusCard: true
            },
            {
                cardImg: '../../assets/cards/2008-2010/md.026.omastar.jpg',
                numImg: '../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2008-2010/md.069.omanyte.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2008-2010/md.012.phione.jpg',
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
                cardImg: '../../assets/cards/2007-2008/bronzong.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/bronzor.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/md.091.helix_fossil.jpg',
                numImg: '../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2007-2008/celios-network.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/bebes-search.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/warp-point-2007.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/energy/water-energy-capsule.png',
                numImg: '../../assets/07.png'
            },
            {
                cardImg: '../../assets/cards/energy/call-energy.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
                numImg: '../../assets/03.png'
            },
        ]
    },
]

let sevenEvent = [
    {
        firstName: 'eeee',
        sprite1: '../../assets/sprites',
        sprite2: '../../assets/sprites',
        // // list../../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        // list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2008-2010',
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
        // // list../../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        // list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2008-2010',
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
        // // list../../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        // list: '../../assets/sprites/blank.png',
        type: 'normal',
        deck: [
            {
                cardImg: '../../assets/cards/2008-2010',
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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2008 UK Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2008 UK Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2008 Australia Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2008 Germany Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2008 Netherlands Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2008 Italy Nats";

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