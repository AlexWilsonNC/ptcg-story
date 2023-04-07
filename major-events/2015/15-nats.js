const masterList = document.querySelector('.uk-masters-ol');
const seniorList = document.querySelector('.uk-seniors-ol');
const juniorList = document.querySelector('.uk-juniors-ol');
const sevenList = document.querySelector('.seven-ol');
const fiveList = document.querySelector('.five-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
    {
        firstName: 'Andrew Tandianus',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/shaymin-sky.png',
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
        firstName: 'Marcus Raj',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/slurpuff.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/slurpuff.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/swirlix.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/n-promo.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/az.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ghetsis.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/xerosic.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandres-trump-card.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/computer-search.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
                numImg: '../../assets/04.png',
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
                cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/head-ringer.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/energy/dce-xy1.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Jordan Palmer',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/shaymin-sky.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/munna.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/n-promo.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/colress.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/xerosic.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandres-trump-card.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/computer-search.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/acro-bike.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/town-map-bw.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/head-ringer.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/energy/dce-xy1.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Shaun Murphy',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/manectric-mega.png',
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
        firstName: 'Mohamad Razak',
        sprite1: '../../assets/sprites/raichu.png',
        sprite2: '../../assets/sprites/crobat.png',
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
        firstName: 'Harley Mangan',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/manectric-mega.png',
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
        firstName: 'Victor Yi',
        sprite1: '../../assets/sprites/raichu.png',
        sprite2: '../../assets/sprites/leafeon.png',
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
        firstName: 'Cale Vickery',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/shaymin-sky.png',
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
        firstName: 'Thomas Vernier',
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
                cardImg: '../../assets/cards/2014-2016/mew-ex-ltr.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/deoxys-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
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
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
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
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/energy-switch.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/escape-rope.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/switch.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professors-letter.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/tool-retriever.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-energy-grass.png',
                numImg: '../../assets/10.png',
            },
            {
                cardImg: '../../assets/cards/energy/energy-plasma.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Stéphane Ivanoff',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/slurpuff.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/slurpuff.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/swirlix.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/xerosic.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/n-promo.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/cassius.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandres-trump-card.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/rock-guard.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/acro-bike.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../assets/02.png',
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
                cardImg: '../../assets/cards/2014-2016/silent-lab.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/energy/dce-xy1.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Cedric Gouin',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/slurpuff.png',
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
        firstName: 'Eric Pujol',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/slurpuff.png',
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
        firstName: 'Christophe Caron',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/exeggutor.png',
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
        firstName: 'Florent Planard',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/flareon.png',
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
        firstName: 'Heddi Brahmi',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/slurpuff.png',
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
        firstName: 'Jean-Baptiste Henard',
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

let juniors = [
    {
        firstName: 'David Sturm',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/flareon.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/flareon-plasma.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/leafeon.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/glaceon-plasma.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/eevee-signs-of-evo.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/audino.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/empoleon.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ditto.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/deoxys-ex.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/exeggcute.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/n-promo.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/archie-ace-in-hole.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandres-trump-card.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/computer-search.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/acro-bike.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/silver-bangle.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-energy-grass.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-energy-water.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/energy/dce-xy1.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Niklas L-Rappel',
        sprite1: '../../assets/sprites/bronzong.png',
        sprite2: '../../assets/sprites/aegislash.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/bronzong.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/bronzor.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/aegislash-ex.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/dialga-ex.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
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
                cardImg: '../../assets/cards/2014-2016/colress.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ghetsis.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/az.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/computer-search.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/switch.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
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
                cardImg: '../../assets/cards/2014-2016/steel-shelter.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-energy-metal.png',
                numImg: '../../assets/08.png',
            },
            {
                cardImg: '../../assets/cards/energy/dce-xy1.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Fatih Akdemir',
        sprite1: '../../assets/sprites/gardevoir-mega.png',
        sprite2: '../../assets/sprites/aromatisse.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/xerneas.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/m-gardevoir-ex-prc.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/gardevoir-ex-sts.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/aromatisse.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/spritzee-sweet-scent.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/spiritomb.png',
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
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/colress.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandres-trump-card.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/computer-search.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/gardevoir-spirit-link.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/fairy-garden.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-energy-fairy.png',
                numImg: '../../assets/12.png',
            },
        ]
    },
    {
        firstName: 'Karl Peters',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/slurpuff.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/slurpuff.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/swirlix.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/xerosic.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/n-promo.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/cassius.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandres-trump-card.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/computer-search.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/acro-bike.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/02.png',
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
                cardImg: '../../assets/cards/2014-2016/head-ringer.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/energy/dce-xy1.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Friedrich Illbruck',
        sprite1: '../../assets/sprites/joltik.png',
        sprite2: '../../assets/sprites/pumpkaboo.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/pumpkaboo.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/joltik.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lampent.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/mew-ex-ltr.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/empoleon.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/boufallant-sap-sipper.png',
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
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/archie-ace-in-hole.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandres-trump-card.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/computer-search.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/acro-bike.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/switch.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/escape-rope.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-energy-water.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/energy/dce-xy1.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Markus Jakob',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/crobat.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/crobat.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/golbat.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/zubat-free-flight.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
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
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/colress.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/az.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/xerosic.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ghetsis.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandres-trump-card.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/computer-search.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/03.png',
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
                cardImg: '../../assets/cards/energy/xy-energy-water.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/energy/dce-xy1.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Ole Stognief',
        sprite1: '../../assets/sprites/landorus-therian.png',
        sprite2: '../../assets/sprites/crobat.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/landorus-ex.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/crobat.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/golbat.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/zubat-free-flight.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/hawlucha.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lucario-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/dedenne.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
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
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/korrina.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/az.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/computer-search.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/repeat-ball.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/fighting-stadium.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-energy-fighting.png',
                numImg: '../../assets/05.png',
            },
            {
                cardImg: '../../assets/cards/energy/strong-energy.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Robin Schulz',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/slurpuff.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/slurpuff.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/swirlix.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/xerosic.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/n-promo.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandres-trump-card.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/computer-search.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/acro-bike.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
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
                cardImg: '../../assets/cards/2014-2016/switch.png',
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
                cardImg: '../../assets/cards/2014-2016/head-ringer.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/energy/dce-xy1.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
]

let sevenEvent = [
    {
        firstName: 'Chase Moloney',
        sprite1: '../../assets/sprites/bronzong.png',
        sprite2: '../../assets/sprites/aegislash.png',
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
        firstName: 'Matthew Koo',
        sprite1: '../../assets/sprites/raichu.png',
        sprite2: '../../assets/sprites/crobat.png',
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
        firstName: 'Aneil Saini',
        sprite1: '../../assets/sprites/landorus-therian.png',
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
        firstName: 'Rob Davies',
        sprite1: '../../assets/sprites/yveltal.png',
        sprite2: '../../assets/sprites/crobat.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/yveltal.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/crobat.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/golbat.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/zubat-free-flight.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/leafeon.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/eevee-signs-of-evo.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/absol-plasma.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
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
                cardImg: '../../assets/cards/2014-2016/colress.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/az.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/repeat-ball.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/silver-bangle.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-energy-dark.png',
                numImg: '../../assets/11.png',
            },
        ]
    },
    {
        firstName: 'Ciaran Farah',
        sprite1: '../../assets/sprites/raichu.png',
        sprite2: '../../assets/sprites/crobat.png',
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
        firstName: 'Jason Greenberg',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/crobat.png',
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
        firstName: 'Andrew Estrada',
        sprite1: '../../assets/sprites/landorus-therian.png',
        sprite2: '../../assets/sprites/crobat.png',
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
        firstName: 'Chris Venier',
        sprite1: '../../assets/sprites/raichu.png',
        sprite2: '../../assets/sprites/crobat.png',
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
        firstName: 'Felippo Colamorea',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/garbodor.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
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
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/n-promo.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ghetsis.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/az.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/xerosic.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandres-trump-card.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/computer-search.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/head-ringer.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/weakness-policy.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/energy/dce-xy1.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: '--',
        sprite1: '../../assets/sprites/seismitoad.png',
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
        firstName: '--',
        sprite1: '../../assets/sprites/joltik.png',
        sprite2: '../../assets/sprites/pumpkaboo.png',
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
        firstName: 'Kim Pobega',
        sprite1: '../../assets/sprites/exeggutor.png',
        sprite2: '../../assets/sprites/garbodor.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/exeggutor.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/exeggcute.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/garbodor-ltr.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/trubbish-pound.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/virizion-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/n-promo.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/az.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/wally.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/xerosic.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandres-trump-card.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/computer-search.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
                numImg: '../../assets/02.png',
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
                cardImg: '../../assets/cards/energy/xy-energy-grass.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/energy/dce-xy1.png',
                numImg: '../../assets/03.png',
            },
        ]
    },
    {
        firstName: '--',
        sprite1: '../../assets/sprites/raichu.png',
        sprite2: '../../assets/sprites/crobat.png',
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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2015 Australia Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2015 France Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2015 Germany Nats";

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

// seven
function displayList4(array = []) {
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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2015 Canada Nats";

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
        console.log('meep')

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2015 Italy Nats";

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

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);
displayList2(seniors);
displayList3(juniors);
displayList4(sevenEvent);
displayList5(fiveEvent);