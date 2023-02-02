const masterList = document.querySelector('.uk-masters-ol');
const seniorList = document.querySelector('.uk-seniors-ol');
const juniorList = document.querySelector('.uk-juniors-ol');
const fourList = document.querySelector('.four-ol');
const fiveList = document.querySelector('.five-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
    {
        firstName: 'Jordan Palmer',
        sprite1: '../../../assets/sprites/yveltal.png',
        sprite2: '../../../assets/sprites/zoroark.png',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016/yveltal-ex-shiny.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/yveltal-generations.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/yveltal-fright-night.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/zoroark-break.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/zoroark-stand-in.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/zorua-confuse.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/seismitoad-ex.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/druddigon.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/jirachi.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/n.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/giovannis-scheme.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/az.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/max-elixir.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/super-rod.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/muscle-band.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/ffb.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/reverse-valley.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/energy/dark-energy-generations.png',
                numImg: '../../../assets/07.png',
            },
            {
                cardImg: '../../../assets/cards/energy/xy-dce.png',
                numImg: '../../../assets/04.png',
            },
        ]
    },
    {
        firstName: 'Shane Quinn',
        sprite1: '../../../assets/sprites/bronzong.png',
        sprite2: '../../../assets/sprites/genesect.png',
        list: '../../../assets/hyphen.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Michael Kan',
        sprite1: '../../../assets/sprites/joltik.png',
        sprite2: '../../../assets/sprites/pumpkaboo.png',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016/pumpkaboo.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/joltik.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/lampent.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/mew.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/n.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/teammates.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/az.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/puzzle-of-time.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/startling-megaphone.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/target-whistle.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/ffb.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/energy/xy-dce.png',
                numImg: '../../../assets/04.png',
            },
    ]
    },
    {
        firstName: 'Blake Davies',
        sprite1: '../../../assets/sprites/joltik.png',
        sprite2: '../../../assets/sprites/pumpkaboo.png',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016/pumpkaboo.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/joltik.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/lampent.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/shaymin-ex.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/gallade.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/unown.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/professor-sycamore.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/maxie-hidden-ball-trick.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/lysandre.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/n.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/xerosic.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/hex-maniac.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/az.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/vs-seeker.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/puzzle-of-time.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/ultra-ball.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/battle-compressor.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/trainers-mail.png',
                numImg: '../../../assets/04.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/escape-rope.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/town-map.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/ffb.png',
                numImg: '../../../assets/02.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/float-stone.png',
                numImg: '../../../assets/01.png',
            },
            {
                cardImg: '../../../assets/cards/2014-2016/deminsion-valley.png',
                numImg: '../../../assets/03.png',
            },
            {
                cardImg: '../../../assets/cards/energy/xy-dce.png',
                numImg: '../../../assets/04.png',
            },
    ]
    },
    {
        firstName: 'Sameer Sangwan',
        sprite1: '../../../assets/sprites/bronzong.png',
        sprite2: '../../../assets/sprites/genesect.png',
        list: '../../../assets/hyphen.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Matty Masefield',
        sprite1: '../../../assets/sprites/zygarde-complete.png',
        sprite2: '../../../assets/sprites/vileplume.png',
        list: '../../../assets/hyphen.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Brendan Vagg',
        sprite1: '../../../assets/sprites/seismitoad.png',
        sprite2: '../../../assets/sprites/giratina-origin.png',
        list: '../../../assets/hyphen.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'Daniel Collins',
        sprite1: '../../../assets/sprites/jolteon.png',
        sprite2: '../../../assets/sprites/garbodor.png',
        list: '../../../assets/hyphen.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
]

let seniors = [
    {
        firstName: 'eeee',
        sprite1: '../../../assets/sprites',
        sprite2: '../../../assets/sprites',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'eeee',
        sprite1: '../../../assets/sprites',
        sprite2: '../../../assets/sprites',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'eeee',
        sprite1: '../../../assets/sprites',
        sprite2: '../../../assets/sprites',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'eeee',
        sprite1: '../../../assets/sprites',
        sprite2: '../../../assets/sprites',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'eeee',
        sprite1: '../../../assets/sprites',
        sprite2: '../../../assets/sprites',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'eeee',
        sprite1: '../../../assets/sprites',
        sprite2: '../../../assets/sprites',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'eeee',
        sprite1: '../../../assets/sprites',
        sprite2: '../../../assets/sprites',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'eeee',
        sprite1: '../../../assets/sprites',
        sprite2: '../../../assets/sprites',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
]

let juniors = [
    {
        firstName: 'eeee',
        sprite1: '../../../assets/sprites',
        sprite2: '../../../assets/sprites',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'eeee',
        sprite1: '../../../assets/sprites',
        sprite2: '../../../assets/sprites',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'eeee',
        sprite1: '../../../assets/sprites',
        sprite2: '../../../assets/sprites',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'eeee',
        sprite1: '../../../assets/sprites',
        sprite2: '../../../assets/sprites',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'eeee',
        sprite1: '../../../assets/sprites',
        sprite2: '../../../assets/sprites',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'eeee',
        sprite1: '../../../assets/sprites',
        sprite2: '../../../assets/sprites',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'eeee',
        sprite1: '../../../assets/sprites',
        sprite2: '../../../assets/sprites',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'eeee',
        sprite1: '../../../assets/sprites',
        sprite2: '../../../assets/sprites',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
]

let fourEvent = [
    {
        firstName: 'eeee',
        sprite1: '../../../assets/sprites',
        sprite2: '../../../assets/sprites',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'eeee',
        sprite1: '../../../assets/sprites',
        sprite2: '../../../assets/sprites',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'eeee',
        sprite1: '../../../assets/sprites',
        sprite2: '../../../assets/sprites',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'eeee',
        sprite1: '../../../assets/sprites',
        sprite2: '../../../assets/sprites',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'eeee',
        sprite1: '../../../assets/sprites',
        sprite2: '../../../assets/sprites',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'eeee',
        sprite1: '../../../assets/sprites',
        sprite2: '../../../assets/sprites',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'eeee',
        sprite1: '../../../assets/sprites',
        sprite2: '../../../assets/sprites',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'eeee',
        sprite1: '../../../assets/sprites',
        sprite2: '../../../assets/sprites',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
]

let fiveEvent = [
    {
        firstName: 'eeee',
        sprite1: '../../../assets/sprites',
        sprite2: '../../../assets/sprites',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'eeee',
        sprite1: '../../../assets/sprites',
        sprite2: '../../../assets/sprites',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'eeee',
        sprite1: '../../../assets/sprites',
        sprite2: '../../../assets/sprites',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'eeee',
        sprite1: '../../../assets/sprites',
        sprite2: '../../../assets/sprites',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'eeee',
        sprite1: '../../../assets/sprites',
        sprite2: '../../../assets/sprites',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'eeee',
        sprite1: '../../../assets/sprites',
        sprite2: '../../../assets/sprites',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'eeee',
        sprite1: '../../../assets/sprites',
        sprite2: '../../../assets/sprites',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
            },
        ]
    },
    {
        firstName: 'eeee',
        sprite1: '../../../assets/sprites',
        sprite2: '../../../assets/sprites',
        list: '../../../assets/list-icon.png',
        type: 'dark',
        deck: [
            {
                cardImg: '../../../assets/cards/2014-2016',
                numImg: '../../../assets/04.png'
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

        if (item.list === '../../../assets/list-icon.png') {
            console.log('hey')
            item_element.addEventListener('click', function () {
                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2010 UK Nats";

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

        if (item.list === '../../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2014 Worlds";

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

        if (item.list === '../../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2014 Worlds";

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

        if (item.list === '../../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2014 Worlds";

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

        if (item.list === '../../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2014 Worlds";

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

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);
displayList2(seniors);
displayList3(juniors);
displayList4(fourEvent);
displayList5(fiveEvent);