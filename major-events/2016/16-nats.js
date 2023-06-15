const masterList = document.querySelector('.uk-masters-ol');
const seniorList = document.querySelector('.uk-seniors-ol');
const juniorList = document.querySelector('.uk-juniors-ol');
const sevenList = document.querySelector('.seven-ol');
const fiveList = document.querySelector('.five-ol');
const sixList = document.querySelector('.six-ol');
const tenList = document.querySelector('.ten-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
    {
        firstName: 'Jordan Palmer',
        sprite1: '../../assets/sprites/yveltal.png',
        sprite2: '../../assets/sprites/zoroark.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/yveltal-ex-shiny.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/yveltal-generations.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/yveltal-fright-night.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/zoroark-break.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/zoroark-stand-in.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/zorua-confuse.png',
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
                cardImg: '../../assets/cards/2014-2016/druddigon.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/jirachi.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/n.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/giovannis-scheme.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/az.png',
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
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/max-elixir.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-rod.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ffb.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/reverse-valley.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/energy/dark-energy-generations.png',
                numImg: '../../assets/07.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-dce.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Shane Quinn',
        sprite1: '../../assets/sprites/bronzong.png',
        sprite2: '../../assets/sprites/genesect.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Michael Kan',
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
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/mew.png',
                numImg: '../../assets/02.png',
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
                cardImg: '../../assets/cards/2014-2016/n.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/teammates.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/az.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
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
                cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/escape-rope.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/target-whistle.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ffb.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-dce.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Blake Davies',
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
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/gallade.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/unown.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/maxie-hidden-ball-trick.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/n.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/xerosic.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/az.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
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
                cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/escape-rope.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/town-map.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ffb.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-dce.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Sameer Sangwan',
        sprite1: '../../assets/sprites/bronzong.png',
        sprite2: '../../assets/sprites/genesect.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Matty Masefield',
        sprite1: '../../assets/sprites/zygarde-complete.png',
        sprite2: '../../assets/sprites/vileplume.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Brendan Vagg',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/giratina-origin.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Daniel Collins',
        sprite1: '../../assets/sprites/jolteon.png',
        sprite2: '../../assets/sprites/garbodor.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
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
        firstName: 'Stephane Ruffe',
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
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/judge.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/teammates.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/az.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
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
                cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/acro-bike.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/escape-rope.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/target-whistle.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/town-map.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/bursting-balloon.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-dce.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Sylvain de la Crompe',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/trevenant.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/trevenant-break.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/trevenant.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/trevenant-nevrous-seed.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/phantump-ascension.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2018-17/wally.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/judge.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/xerosic.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/skyla-bkp.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/az.png',
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
                cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/acro-bike.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-rod.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/bursting-balloon.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/energy/psychic-energy-generations.png',
                numImg: '../../assets/07.png',
            },
    ]
    },
    {
        firstName: 'Alexis Peiffer',
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
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
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
                cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/judge.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/xerosic.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/az.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
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
                cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/acro-bike.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/buddy-buddy-resuce.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/target-whistle.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/town-map.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ffb.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-dce.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Frederic Lesage',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/greninja.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/greninja-break.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/greninja.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/greninja-shuriken.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/frogadier-water-duplicates.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/froakie-bubble.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/jirachi.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/dedenne.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/ace-trainer.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2018-17/wally.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/shauna.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/skyla-bkp.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/delinquent.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/fisherman.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/dive-ball.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/level-ball.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/professors-letter.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-rod.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/rough-seas.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/energy/water-energy-generations.png',
                numImg: '../../assets/08.png'
            },
        ]
    },
    {
        firstName: 'Fabien Pujol',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/giratina-origin.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/giratina-ex.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/latios-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/judge.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/skyla-bkp.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/shauna.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/delinquent.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/cassius.png',
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
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/switch.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/red-card.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ffb.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/sky-field.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-dce.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/energy/double-dragon-energy.png',
                numImg: '../../assets/04.png',
            },
    ]
    },
    {
        firstName: 'Joel Nguyen',
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
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/judge.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/xerosic.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/teammates.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/az.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
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
                cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/acro-bike.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/target-whistle.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/town-map.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ffb.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-dce.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Julien Dalle',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/mewtwo-mega-y.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/mega-mewtwo-ex.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/mewtwo-ex-shatter-shot.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/judge.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/skyla-bkp.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/az.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/max-elixir.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-rod.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/town-map.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/mewtwo-spirit-link.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/shrine-of-memories.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/energy/psychic-energy-generations.png',
                numImg: '../../assets/06.png'
            },
            {
                cardImg: '../../assets/cards/energy/xy-dce.png',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Cedric Gouin',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/manectric-mega.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/m-manectric-ex.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/manectric-ex.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/jolteon-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/raikou.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/jirachi.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/judge.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/az.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/giovannis-scheme.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/delinquent.png',
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
                cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/mega-turbo.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-rod.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/manectric-spirit-link.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/rough-seas.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/energy/lightning-energy-generations.png',
                numImg: '../../assets/07.png',
            },
            {
                cardImg: '../../assets/cards/energy/flash-energy.png',
                numImg: '../../assets/03.png',
            },
    ]
    },
]

let juniors = [
    {
        firstName: 'Chrisowalantis Amanatidis',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/manaphy.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/manaphy-ex.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/aegislash-ex.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/articuno.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/regice.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/judge.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/az.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/xerosic.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/max-elixir.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/energy-switch.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-rod.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/ffb.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/rough-seas.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/energy/water-energy-generations.png',
                numImg: '../../assets/12.png'
            },
        ]
    },
    {
        firstName: 'Fatih Akdemir',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/trevenant.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/trevenant-break.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/trevenant.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/phantump-ascension.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2018-17/wally.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/judge.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/xerosic.png',
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
                cardImg: '../../assets/cards/2014-2016/level-ball.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-rod.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/bursting-balloon.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/energy/psychic-energy-generations.png',
                numImg: '../../assets/08.png',
            },
    ]
    },
    {
        firstName: 'Robin Schulz',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/giratina-origin.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/giratina-ex.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/latios-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/judge.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/skyla-bkp.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/shauna.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/delinquent.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/cassius.png',
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
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/switch.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/red-card.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ffb.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/sky-field.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-dce.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/energy/double-dragon-energy.png',
                numImg: '../../assets/04.png',
            },
    ]
    },
    {
        firstName: 'Benedikt Hugo',
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
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/judge.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/teammates.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/az.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
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
                cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/pokemon-catcher-flip.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/escape-rope.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/target-whistle.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/town-map.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ffb.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/parallel-city.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-dce.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Tobias Smutkowski',
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
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/judge.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/teammates.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/az.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
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
                cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/escape-rope.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/target-whistle.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/town-map.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ffb.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-dce.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Jan Baumann',
        sprite1: '../../assets/sprites/latios.png',
        sprite2: '../../assets/sprites/vileplume.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/latios-ex.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/giratina-ex.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/unown.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/vileplume.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/gloom.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/oddish.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/az.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/acro-bike.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/level-ball.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/revitalizer.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/red-card.png',
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
                cardImg: '../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/forest-of-giant-plants.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/energy/psychic-energy-generations.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/energy/double-dragon-energy.png',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Marc Lutz',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/manaphy.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/manaphy-ex.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/aegislash-ex.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/articuno.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/regice.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/judge.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/az.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/xerosic.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/max-elixir.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/energy-switch.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-rod.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/ffb.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/rough-seas.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/energy/water-energy-generations.png',
                numImg: '../../assets/12.png'
            },
        ]
    },
    {
        firstName: 'Marco Haeder',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/manaphy.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/manaphy-ex.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/articuno.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/judge.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/az.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/skyla-bkp.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/fisherman.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/max-elixir.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/energy-switch.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/ffb.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/rough-seas.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/energy/water-energy-generations.png',
                numImg: '../../assets/12.png'
            },
        ]
    },
]

let sevenEvent = [
    {
        firstName: 'Kevin Ponthieux',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/trevenant.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/trevenant-break.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/trevenant.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/phantump-ascension.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/wobbuffet.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2018-17/wally.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/n.png',
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
                cardImg: '../../assets/cards/2014-2016/level-ball.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-rod.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/eco-arm.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/bursting-balloon.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/weakness-policy.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/energy/psychic-energy-generations.png',
                numImg: '../../assets/05.png',
            },
            {
                cardImg: '../../assets/cards/energy/mystery-energy.png',
                numImg: '../../assets/03.png',
            },
    ]
    },
    {
        firstName: 'Simone Zucchelli',
        sprite1: '../../assets/sprites/bronzong.png',
        sprite2: '../../assets/sprites/genesect.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/bronzong-break.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/bronzong.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/bronzong-metal-fortress.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/bronzor-payback.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/genesect-ex.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/aegislash-ex.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/n.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/az.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/max-elixir.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-rod.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/ffb.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/assault-vest.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/sky-field.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/energy/metal-energy-generations.png',
                numImg: '../../assets/11.png'
            },
        ]
    },
    {
        firstName: 'Nicolo Castignoli',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/greninja.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/greninja-break.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/greninja.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/greninja-shuriken.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/frogadier-water-duplicates.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/froakie-bubble.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/jirachi.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/n.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/ace-trainer.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2018-17/wally.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/skyla-bkp.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/fisherman.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/dive-ball.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/level-ball.png',
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
                cardImg: '../../assets/cards/2014-2016/evosoda.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/bursting-balloon.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/rough-seas.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/energy/water-energy-generations.png',
                numImg: '../../assets/08.png'
            },
        ]
    },
    {
        firstName: 'Simone Soldo',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/greninja.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/greninja-break.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/greninja.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/greninja-shuriken.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/frogadier-water-duplicates.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/froakie-bubble.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/jirachi.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/n.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/ace-trainer.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2018-17/wally.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/fisherman.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/dive-ball.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/level-ball.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/rare-candy.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-rod.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/town-map.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/hard-charm.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/rough-seas.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/energy/water-energy-generations.png',
                numImg: '../../assets/08.png'
            },
        ]
    },
    {
        firstName: 'Riccardo Maganza',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/greninja.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/greninja-break.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/greninja.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/greninja-shuriken.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/frogadier-water-duplicates.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/froakie-bubble.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/jirachi.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/n.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/ace-trainer.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2018-17/wally.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/fisherman.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/dive-ball.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/level-ball.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-rod.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/town-map.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/hard-charm.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/rough-seas.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/energy/water-energy-generations.png',
                numImg: '../../assets/08.png'
            },
        ]
    },
    {
        firstName: 'Simone Canziani',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/vespiquen.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/vespiquen.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/combee.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/unown.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/yveltal-generations.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/yveltal-ex-shiny.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/yveltal-fright-night.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/bunnelby.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/jirachi.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/n.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/judge.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/teammates.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/az.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/xerosic.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/delinquent.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/revitalizer.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/forest-of-giant-plants.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/parallel-city.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/energy/dark-energy-generations.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/energy/xy-dce.png',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Vincenzo Gerardi',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/manaphy.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/manaphy-ex.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/regice.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/glaceon-ex.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/articuno.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/n.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/judge.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/az.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/xerosic.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/max-elixir.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/energy-switch.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-rod.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/ffb.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/rough-seas.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/energy/water-energy-generations.png',
                numImg: '../../assets/12.png'
            },
        ]
    },
    {
        firstName: 'Gianluca Cipriano',
        sprite1: '../../assets/sprites/joltik.png',
        sprite2: '../../assets/sprites/vespiquen.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/pumpkaboo.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/joltik.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/lampent.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/vespiquen.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/combee.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/n.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/teammates.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/xerosic.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/escape-rope.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/target-whistle.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/ffb.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/energy/xy-dce.png',
                numImg: '../../assets/04.png'
            },
        ]
    },
]

let fiveEvent = [
    {
        firstName: 'Tamao Cameron',
        sprite1: '../../assets/sprites/vespiquen.png',
        sprite2: '../../assets/sprites/vileplume.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
                {
                    cardImg: '../../assets/cards/2014-2016/vespiquen.png',
                    numImg: '../../assets/04.png',
                },
                {
                    cardImg: '../../assets/cards/2014-2016/combee.png',
                    numImg: '../../assets/04.png',
                },
                {
                    cardImg: '../../assets/cards/2014-2016/vileplume.png',
                    numImg: '../../assets/03.png',
                },
                {
                    cardImg: '../../assets/cards/2014-2016/gloom.png',
                    numImg: '../../assets/04.png',
                },
                {
                    cardImg: '../../assets/cards/2014-2016/oddish.png',
                    numImg: '../../assets/04.png',
                },
                {
                    cardImg: '../../assets/cards/2014-2016/unown.png',
                    numImg: '../../assets/04.png',
                },
                {
                    cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                    numImg: '../../assets/04.png',
                },
                {
                    cardImg: '../../assets/cards/2014-2016/bunnelby.png',
                    numImg: '../../assets/01.png',
                },
                {
                    cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                    numImg: '../../assets/02.png',
                },
                {
                    cardImg: '../../assets/cards/2014-2016/judge.png',
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
                    cardImg: '../../assets/cards/2014-2016/mistys-determination-bkp.png',
                    numImg: '../../assets/01.png',
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
                    cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
                    numImg: '../../assets/03.png',
                },
                {
                    cardImg: '../../assets/cards/2014-2016/acro-bike.png',
                    numImg: '../../assets/03.png',
                },
                {
                    cardImg: '../../assets/cards/2014-2016/level-ball.png',
                    numImg: '../../assets/02.png',
                },
                {
                    cardImg: '../../assets/cards/2014-2016/float-stone.png',
                    numImg: '../../assets/02.png',
                },
                {
                    cardImg: '../../assets/cards/2014-2016/forest-of-giant-plants.png',
                    numImg: '../../assets/04.png',
                },
                {
                    cardImg: '../../assets/cards/energy/xy-dce.png',
                    numImg: '../../assets/04.png',
                },
        ]
    },
    {
        firstName: 'Scott Burgess',
        sprite1: '../../assets/sprites/yveltal.png',
        sprite2: '../../assets/sprites/zoroark.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/yveltal-generations.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/yveltal-ex-shiny.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/zoroark-stand-in.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/zorua-confuse.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/unown.png',
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
                cardImg: '../../assets/cards/2014-2016/gallade.png',
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
                cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/maxie-hidden-ball-trick.png',
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
                cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professors-letter.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/reverse-valley.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/energy/dark-energy-generations.png',
                numImg: '../../assets/06.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-dce.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Oliver Barnett',
        sprite1: '../../assets/sprites/yveltal.png',
        sprite2: '../../assets/sprites/zoroark.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/yveltal-generations.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/yveltal-fright-night.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/zoroark-break.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/zoroark-stand-in.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/zorua-confuse.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/druddigon.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/giovannis-scheme.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ace-trainer.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/judge.png',
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
                cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/target-whistle.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/reverse-valley.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/energy/dark-energy-generations.png',
                numImg: '../../assets/06.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-dce.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Daniel Melrose',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/trevenant.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/trevenant-break.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/trevenant.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/trevenant-nevrous-seed.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/phantump-ascension.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/wobbuffet.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2018-17/wally.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/judge.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/delinquent.png',
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
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-rod.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/bursting-balloon.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/weakness-policy.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/energy/psychic-energy-generations.png',
                numImg: '../../assets/06.png',
            },
            {
                cardImg: '../../assets/cards/energy/mystery-energy.png',
                numImg: '../../assets/01.png',
            },
    ]
    },
    {
        firstName: 'Charles Barton',
        sprite1: '../../assets/sprites/joltik.png',
        sprite2: '../../assets/sprites/vespiquen.png',
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
                cardImg: '../../assets/cards/2014-2016/vespiquen.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/combee.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/judge.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/teammates.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/az.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
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
                cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/acro-bike.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/escape-rope.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/target-whistle.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/town-map.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ffb.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-dce.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Richard Cherry',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/greninja.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/greninja-break.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/greninja.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/frogadier-water-duplicates.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/froakie-bubble.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/jirachi.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/dedenne.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/ace-trainer.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2018-17/wally.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/skyla-bkp.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/shauna.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/delinquent.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/fisherman.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/dive-ball.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/level-ball.png',
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
                cardImg: '../../assets/cards/2014-2016/evosoda.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/rough-seas.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/energy/water-energy-generations.png',
                numImg: '../../assets/08.png'
            },
        ]
    },
    {
        firstName: 'Joseph Phillip',
        sprite1: '../../assets/sprites/joltik.png',
        sprite2: '../../assets/sprites/vespiquen.png',
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
                cardImg: '../../assets/cards/2014-2016/vespiquen.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/combee.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/unown.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/judge.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/teammates.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
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
                cardImg: '../../assets/cards/2014-2016/target-whistle.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/town-map.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/parallel-city.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-dce.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Thomas Stephenson',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/trevenant.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/trevenant-break.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/trevenant.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/trevenant-nevrous-seed.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/phantump-ascension.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/wobbuffet.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2018-17/wally.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/judge.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/delinquent.png',
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
                cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
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
                cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/red-card.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-rod.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/bursting-balloon.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/head-ringer.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/energy/psychic-energy-generations.png',
                numImg: '../../assets/08.png',
            },
            {
                cardImg: '../../assets/cards/energy/mystery-energy.png',
                numImg: '../../assets/02.png',
            },
    ]
    },
]

let sixEvent = [
    {
        firstName: 'Rose Gregson',
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
        firstName: 'Joshua Richards',
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
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/gallade.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/judge.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/teammates.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/maxie-hidden-ball-trick.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
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
                cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/town-map.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/ffb.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/energy/xy-dce.png',
                numImg: '../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'David Mathias',
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
        firstName: 'Josh Toulmin',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/mewtwo-mega-y.png',
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
        firstName: 'Yasin Balela',
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
        firstName: 'Kyle Guest',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/rayquaza-mega.png',
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
        firstName: 'Jack Culkin',
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
        firstName: 'Lucinda Barton',
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
        firstName: 'Filipp L',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/serperior.png',
        list: '../../assets/list-icon.png',
        type: 'grass',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/serperior.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/servine.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/snivy.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/miltank.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/mew.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/n.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/az.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/xerosic.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/level-ball.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/super-rod.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/ffb.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/forest-of-giant-plants.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/energy/xy-energy-grass.png',
                numImg: '../../assets/05.png'
            },
            {
                cardImg: '../../assets/cards/energy/xy-dce.png',
                numImg: '../../assets/03.png'
            },
        ]
    },
    {
        firstName: 'Luca S',
        sprite1: '../../assets/sprites/rayquaza-mega.png',
        sprite2: '../../assets/sprites/jolteon.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016/m-rayquaza-ex-colorless.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/rayquaza-ex-ros.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/rayquaza-ex-ros-dragon.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/jolteon-ex.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/n.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/skyla-bkp.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/xerosic.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/az.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/mega-turbo.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/escape-rope.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/rayquaza-spirit-link.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2014-2016/sky-field.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/energy/xy-dce.png',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Simon F',
        sprite1: '../../assets/sprites',
        sprite2: '../../assets/sprites',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Tom Z',
        sprite1: '../../assets/sprites',
        sprite2: '../../assets/sprites',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Dominij W',
        sprite1: '../../assets/sprites',
        sprite2: '../../assets/sprites',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Karl W',
        sprite1: '../../assets/sprites',
        sprite2: '../../assets/sprites',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Lukas P',
        sprite1: '../../assets/sprites',
        sprite2: '../../assets/sprites',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2014-2016',
                numImg: '../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Günther K',
        sprite1: '../../assets/sprites',
        sprite2: '../../assets/sprites',
        // list: '../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        type: 'dark',
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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2016 Australia Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2016 France Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2016 Germany Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2016 Italy Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2016 UK Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2016 UK Nats";

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

// ten
function displayList10(array = []) {
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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2016 Austria Nats";

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

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);
displayList2(seniors);
displayList3(juniors);
displayList4(sevenEvent);
displayList5(fiveEvent);
displayList6(sixEvent);
displayList10(tenEvent);