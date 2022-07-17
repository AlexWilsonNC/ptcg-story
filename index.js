const cardTouch = document.querySelectorAll('.pokemon-card2');
// const cardImage = document.querySelectorAll('.pok-card-small2');
const darkBackground = document.querySelector('.behind-large-card');

const deckbuild1 = document.querySelector('.deckbuild1');
const deckbuild2 = document.querySelector('.deckbuild2');
const buildBox1 = document.querySelector('.build-box1');
const buildBox2 = document.querySelector('.build-box2');
const descBox1 = document.querySelector('.descrip-box1');
const descBox2 = document.querySelector('.descrip-box2');

cardTouch.forEach(card => {
    card.addEventListener('click', () => {
        card.querySelector('.pok-card-small2').classList.add('large-card');
        darkBackground.style.display = 'block';
        if (card.querySelector('.pok-card-small2').classList.contains('large-card')) {
            darkBackground.addEventListener('click', () => {
                card.querySelector('.pok-card-small2').classList.remove('large-card');
                darkBackground.style.display = 'none';
            })
        }
    })
});

function changeToBuild1() {
    deckbuild1.classList.add('dark-bg');
    deckbuild2.classList.remove('dark-bg');
    deckbuild2.classList.add('light-bg');

    buildBox1.style.display = 'flex';
    buildBox2.style.display = 'none';
    descBox1.style.display = 'flex';
    descBox2.style.display = 'none';
}

function changeToBuild2() {
    deckbuild2.classList.add('dark-bg');
    deckbuild1.classList.remove('dark-bg');
    deckbuild1.classList.add('light-bg');

    buildBox2.style.display = 'flex';
    buildBox1.style.display = 'none';
    descBox1.style.display = 'none';
    descBox2.style.display = 'flex';
}

deckbuild1.addEventListener('click', changeToBuild1)
deckbuild2.addEventListener('click', changeToBuild2)