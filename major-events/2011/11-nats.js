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
        firstName: 'Edward Kuang',
        sprite1: '../../assets/sprites/zekrom.png',
        sprite2: '../../assets/sprites/pachirisu.png',
        list: '../../assets/list-icon.png',
        type: 'lightning',
        deck: [
            {
                 cardImg: '../../assets/cards/2010-2012/zekrom.png',
                numImg: '../../assets/04.png',
            },
            {
                 cardImg: '../../assets/cards/2010-2012/pachirisu.png',
                numImg: '../../assets/02.png',
            },
            {
                 cardImg: '../../assets/cards/2010-2012/shaymin.png',
                numImg: '../../assets/02.png',
            },
            {
                 cardImg: '../../assets/cards/2010-2012/reshiram.png',
                numImg: '../../assets/01.png',
            },
            {
                 cardImg: '../../assets/cards/2010-2012/bouffalant.png',
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
                 cardImg: '../../assets/cards/2010-2012/copycat.png',
                numImg: '../../assets/02.png',
            },
            {
                 cardImg: '../../assets/cards/2010-2012/seeker.png',
                numImg: '../../assets/01.png',
            },
            {
                 cardImg: '../../assets/cards/2010-2012/dual-ball.png',
                numImg: '../../assets/04.png',
            },
            {
                 cardImg: '../../assets/cards/2010-2012/super-scoop-up.png',
                numImg: '../../assets/04.png',
            },
            {
                 cardImg: '../../assets/cards/2010-2012/junk-arm.png',
                numImg: '../../assets/04.png',
            },
            {
                 cardImg: '../../assets/cards/2010-2012/pokegear.png',
                numImg: '../../assets/03.png',
            },
            {
                 cardImg: '../../assets/cards/2010-2012/pluspower-hgss.png',
                numImg: '../../assets/03.png',
            },
            {
                 cardImg: '../../assets/cards/2010-2012/defender.png',
                numImg: '../../assets/03.png',
            },
            {
                 cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
                numImg: '../../assets/03.png',
            },
            {
                 cardImg: '../../assets/cards/2010-2012/energy-retrieval-bw.png',
                numImg: '../../assets/01.png',
            },
            {
                 cardImg: '../../assets/cards/2010-2012/revive.png',
                numImg: '../../assets/01.png',
            },
            {
                 cardImg: '../../assets/cards/energy/hgss-energy-lightning.png',
                numImg: '../../assets/11.png',
            },
            {
                 cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
                numImg: '../../assets/03.png',
            },
        ]
    },
    {
        firstName: 'Reed Mascola',
        sprite1: '../../assets/sprites/kingdra.png',
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
        firstName: 'Charles Dutrisac',
        sprite1: '../../assets/sprites/donphan.png',
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
        firstName: 'Simon Luong',
        sprite1: '../../assets/sprites/magnezone.png',
        sprite2: '../../assets/sprites/emboar.png',
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
        firstName: 'Julian Wong',
        sprite1: '../../assets/sprites/yanmega.png',
        sprite2: '../../assets/sprites/magnezone.png',
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
        firstName: 'Alaric Boone',
        sprite1: '../../assets/sprites/ambipom.png',
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
        firstName: 'Sebastian Crema',
        sprite1: '../../assets/sprites/yanmega.png',
        sprite2: '../../assets/sprites/magnezone.png',
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
        firstName: 'Andrew V',
        sprite1: '../../assets/sprites/yanmega.png',
        sprite2: '../../assets/sprites/magnezone.png',
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
        firstName: 'Juan Lorenzo',
        sprite1: '../../assets/sprites/yanmega.png',
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
        firstName: 'Sebastien P',
        sprite1: '../../assets/sprites/zekrom.png',
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
        firstName: 'Matthew K',
        sprite1: '../../assets/sprites/yanmega.png',
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
        firstName: 'Colman F',
        sprite1: '../../assets/sprites/donphan.png',
        sprite2: '../../assets/sprites/cinccino.png',
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
        firstName: 'Matthew B',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/gengar.png',
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
        sprite1: '../../assets/sprites/magnezone.png',
        sprite2: '../../assets/sprites/emboar.png',
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
        firstName: 'Sean L',
        sprite1: '../../assets/sprites/yanmega.png',
        sprite2: '../../assets/sprites/magnezone.png',
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
        firstName: 'Sebastian S',
        sprite1: '../../assets/sprites/cinccino.png',
        sprite2: '../../assets/sprites/kingdra.png',
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
        firstName: 'Hampus Eriksson',
        sprite1: '../../assets/sprites/mew.png',
        sprite2: '../../assets/sprites/gyarados.png',
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
        firstName: 'Karl Persson',
        sprite1: '../../assets/sprites/sableye.png',
        sprite2: '../../assets/sprites/garchomp.png',
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
        firstName: 'Henrik Reimer',
        sprite1: '../../assets/sprites/luxray.png',
        sprite2: '../../assets/sprites/garchomp.png',
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
        firstName: 'Albert S',
        sprite1: '../../assets/sprites/seviper.png',
        sprite2: '../../assets/sprites/skuntank.png',
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
        firstName: '--',
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
        firstName: 'Yuna',
        sprite1: '../../assets/sprites/umbreon.png',
        sprite2: '../../assets/sprites/scizor.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012/sableye.jpg',
                numImg: '../../assets/04.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2010-2012/umbreon.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2007-2008/eevee-flowers.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/scizor-prime.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/pl.130.scyther.jpg',
                numImg: '../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/uxie.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/mesprit-pbind.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/unown-quick.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/poke-collector.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/seeker.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/bebes-search.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/twins.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/black-belt.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/cyrus-initiative.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/palmers-contribution.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/vs-seeker.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/junk-arm.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/sf.090.poke_healer.jpg',
                numImg: '../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/warp-point.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/super-scoop-up-hgss.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/expert-belt.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/sf.082.conductive_quarry.jpg',
                numImg: '../../assets/02.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/energy/hgss-energy-metal.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/energy/special-metal-energy-hgss.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/energy/darkness-energy-hgss.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/energy/rainbow-energy-hgss.png',
                numImg: '../../assets/01.png',
            },
        ]
    },
]

let juniors = [
    {
        firstName: 'Daniel Cohen',
        sprite1: '../../assets/sprites/mew.png',
        sprite2: '../../assets/sprites/gyarados.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
        {
            cardImg: '../../assets/cards/2010-2012/mew-prime.png',
            numImg: '../../assets/02.png',
        },
        {
            cardImg: '../../assets/cards/2008-2010/gyarados.png',
            numImg: '../../assets/03.png',
        },
        {
            cardImg: '../../assets/cards/2008-2010/magikarp.png',
            numImg: '../../assets/04.png',
        },
        {
            cardImg: '../../assets/cards/2010-2012/smeargle.png',
            numImg: '../../assets/04.png',
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
            cardImg: '../../assets/cards/2008-2010/azelf.png',
            numImg: '../../assets/01.png',
        },
        {
            cardImg: '../../assets/cards/2008-2010/mesprit-pbind.png',
            numImg: '../../assets/01.png',
        },
        {
            cardImg: '../../assets/cards/2008-2010/sableye-overgear.png',
            numImg: '../../assets/01.png',
        },
        {
            cardImg: '../../assets/cards/2008-2010/regice.png',
            numImg: '../../assets/01.png',
        },
        {
            cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
            numImg: '../../assets/01.png',
        },
        {
            cardImg: '../../assets/cards/2008-2010/combee.png',
            numImg: '../../assets/01.png',
        },
        {
            cardImg: '../../assets/cards/2008-2010/unown-quick.png',
            numImg: '../../assets/01.png',
        },
        {
            cardImg: '../../assets/cards/2008-2010/poke-collector.png',
            numImg: '../../assets/04.png',
        },
        {
            cardImg: '../../assets/cards/2010-2012/seeker.png',
            numImg: '../../assets/03.png',
        },
        {
            cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
            numImg: '../../assets/02.png',
        },
        {
            cardImg: '../../assets/cards/2008-2010/looker.png',
            numImg: '../../assets/01.png',
        },
        {
            cardImg: '../../assets/cards/2008-2010/bebes-search.png',
            numImg: '../../assets/01.png',
        },
        {
            cardImg: '../../assets/cards/2010-2012/sages-training.png',
            numImg: '../../assets/01.png',
        },
        {
            cardImg: '../../assets/cards/2010-2012/junk-arm.png',
            numImg: '../../assets/04.png',
        },
        {
            cardImg: '../../assets/cards/2008-2010/poke-turn.png',
            numImg: '../../assets/02.png',
        },
        {
            cardImg: '../../assets/cards/2008-2010/poke-rescue.png',
            numImg: '../../assets/02.png',
        },
        {
            cardImg: '../../assets/cards/2008-2010/warp-point.png',
            numImg: '../../assets/02.png',
        },
        {
            cardImg: '../../assets/cards/2008-2010//luxury-ball.png',
            numImg: '../../assets/01.png',
        },
        {
            cardImg: '../../assets/cards/2008-2010/vs-seeker.png',
            numImg: '../../assets/01.png',
        },
        {
            cardImg: '../../assets/cards/2008-2010/expert-belt.png',
            numImg: '../../assets/02.png',
        },
        {
            cardImg: '../../assets/cards/2008-2010/energy-gain.png',
            numImg: '../../assets/01.png',
        },
        {
            cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
            numImg: '../../assets/03.png',
        },
        {
            cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
            numImg: '../../assets/02.png',
        },
        {
            cardImg: '../../assets/cards/energy/warp_energy.jpg',
            numImg: '../../assets/02.png',
        },
        {
            cardImg: '../../assets/cards/energy/rescue-energy.png',
            numImg: '../../assets/02.png',
        },
        ]
    },
    {
        firstName: 'Long Dao',
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
        firstName: 'Sandro Pirkheim',
        sprite1: '../../assets/sprites/machamp.png',
        sprite2: '../../assets/sprites/umbreon.png',
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
        firstName: 'Dominik Faist',
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
]

let fourEvent = [
    {
        firstName: 'Rudolf Hoffmann',
        sprite1: '../../assets/sprites/luxray.png',
        sprite2: '../../assets/sprites/garchomp.png',
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
        firstName: 'Tobias Thesing',
        sprite1: '../../assets/sprites/magnezone.png',
        sprite2: '../../assets/sprites/steelix.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
                {
                    cardImg: '../../assets/cards/2008-2010/la.142.magnezone_lv_x.jpg',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/magnezone-prime.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/sf.006.magnezone.jpg',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/sf.042.magneton.jpg',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/sf.066.magnemite.jpg',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/steelix-prime.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/onix.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/spiritomb.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/blissey.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/chansey.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/uxie.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/azelf.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/skuntank-sp.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/ditto-dna.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/poke-collector.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/bebes-search.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/twins.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/palmers-contribution.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/warp-point.png',
                numImg: '../../assets/01.png',
            },
                {
                    cardImg: '../../assets/cards/2010-2012/ud.073.energy_exchanger.jpg',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/expert-belt.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/ruins-of-alph.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/rr.094.sunyshore_city_gym.jpg',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/energy/hgss-energy-lightning.png',
                numImg: '../../assets/03.png',
            },
                {
                    cardImg: '../../assets/cards/energy/cl.087.metal_energy.jpg',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/energy/call-energy.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/energy/warp_energy.jpg',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/energy/rainbow-energy-hgss.png',
                numImg: '../../assets/01.png',
            },
        ]
    },
    {
        firstName: 'Sebastian Grüwel',
        sprite1: '../../assets/sprites/vileplume.png',
        sprite2: '../../assets/sprites/gengar.png',
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
        firstName: 'Sandro Althaus',
        sprite1: '../../assets/sprites/mew.png',
        sprite2: '../../assets/sprites/gyarados.png',
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
        firstName: 'Nikola Vakarelov',
        sprite1: '../../assets/sprites/magnezone.png',
        sprite2: '../../assets/sprites/regirock.png',
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
        firstName: 'Vincent Azzolin',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/gyarados.png',
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
        firstName: 'Vanessa Duflot',
        sprite1: '../../assets/sprites/luxray.png',
        sprite2: '../../assets/sprites/garchomp.png',
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
        firstName: 'Mathieu Lingelser',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/magnezone.png',
        list: '../../assets/list-icon.png',
        type: 'lightning',
        deck: [
            {
                cardImg: '../../assets/cards/2010-2012/magnezone-prime.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/sf.006.magnezone.jpg',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/sf.042.magneton.jpg',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/sf.066.magnemite.jpg',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/electrode-prime.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/voltorb-shiny.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/unown-retire.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/unown-quick.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/regice.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/spiritomb.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/uxie.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/azelf.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/poke-collector.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/palmers-contribution.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/poke-drawer-plus.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/pokedex.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
                numImg: '../../assets/04.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/junk-arm.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/poke-rescue.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2010-2012/pokemon-communication-hgss.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/expert-belt.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/2008-2010/rr.094.sunyshore_city_gym.jpg',
                numImg: '../../assets/01.png',
            },
            {
                cardImg: '../../assets/cards/energy/hgss-energy-lightning.png',
                numImg: '../../assets/08.png',
            },
            {
                cardImg: '../../assets/cards/energy/cyclone-energy-dp.png',
                numImg: '../../assets/03.png',
            },
            {
                cardImg: '../../assets/cards/energy/call-energy.png',
                numImg: '../../assets/02.png',
            },
            {
                cardImg: '../../assets/cards/energy/warp_energy.jpg',
                numImg: '../../assets/02.png',
            },
        ]
    },
    {
        firstName: 'Stéphane Ruffe',
        sprite1: '../../assets/sprites/luxray.png',
        sprite2: '../../assets/sprites/garchomp.png',
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
        firstName: 'Fabien Garnier',
        sprite1: '../../assets/sprites/mew.png',
        sprite2: '../../assets/sprites/gyarados.png',
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
        firstName: 'Anaïs ',
        sprite1: '../../assets/sprites/vileplume.png',
        sprite2: '../../assets/sprites/gengar.png',
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
        firstName: 'Cedric Gouin',
        sprite1: '../../assets/sprites/gyarados.png',
        sprite2: '../../assets/sprites/exeggutor.png',
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
        firstName: 'Patricia Walsh',
        sprite1: '../../assets/sprites/luxray.png',
        sprite2: '../../assets/sprites/garchomp.png',
        list: '../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/luxray.jpg',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/garchomp-lvx.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/garchomp-c.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/uxie.png',
                numImg: '../../assets/03.png'
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
                cardImg: '../../assets/cards/2008-2010/ambipom.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/bronzong.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/dragonite.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
                numImg: '../../assets/01.png',
                oldCard: true
            },
            {
                cardImg: '../../assets/cards/2008-2010/chatot.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/unown-quick.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/poke-collector.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/bebes-search.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/pont.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/twins.png',
                numImg: '../../assets/01.png'
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
                cardImg: '../../assets/cards/2008-2010/sp-radar.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2010-2012/junk-arm.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/energy-gain.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/2008-2010/expert-belt.png',
                numImg: '../../assets/01.png'
            },
            {
                cardImg: '../../assets/cards/energy/hgss-energy-lightning.png',
                numImg: '../../assets/03.png'
            },
            {
                cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
                numImg: '../../assets/02.png'
            },
            {
                cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
                numImg: '../../assets/04.png'
            },
            {
                cardImg: '../../assets/cards/energy/call-energy.png',
                numImg: '../../assets/03.png'
            },
        ]
    },
    {
        firstName: 'Javier Favilli',
        sprite1: '../../assets/sprites/luxray.png',
        sprite2: '../../assets/sprites/garchomp.png',
        list: '../../assets/list-icon.png',
        // list: '../../assets/sprites/blank.png',
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
        firstName: 'Diego Cassiraga',
        sprite1: '../../assets/sprites/dialga.png',
        sprite2: '../../assets/sprites/garchomp.png',
        list: '../../assets/list-icon.png',
        // list: '../../assets/sprites/blank.png',
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
        firstName: 'Martin Garcia',
        sprite1: '../../assets/sprites/luxray.png',
        sprite2: '../../assets/sprites/garchomp.png',
        list: '../../assets/list-icon.png',
        // list: '../../assets/sprites/blank.png',
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
        firstName: 'eeee',
        sprite1: '../../assets/sprites',
        sprite2: '../../assets/sprites',
        list: '../../assets/list-icon.png',
        // list: '../../assets/sprites/blank.png',
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
        list: '../../assets/list-icon.png',
        // list: '../../assets/sprites/blank.png',
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
        list: '../../assets/list-icon.png',
        // list: '../../assets/sprites/blank.png',
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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2011 Canada Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2011 Austria Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2011 Germany Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2011 Argentina Nats";

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
displayList4(fourEvent);
displayList5(fiveEvent);
displayList6(sixEvent);
displayList7(sevenEvent);
displayList8(eightEvent);
displayList9(nineEvent);