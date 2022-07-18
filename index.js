const cardTouch = document.querySelectorAll('.pokemon-card2');
// const cardImage = document.querySelectorAll('.pok-card-small2');
const darkBackground = document.querySelector('.behind-large-card');

const deckbuild1 = document.querySelectorAll('.deckbuild1');
const deckbuild2 = document.querySelectorAll('.deckbuild2');
const buildBox1 = document.querySelectorAll('.build-box1');
const buildBox2 = document.querySelectorAll('.build-box2');
const descBox1 = document.querySelectorAll('.descrip-box1');
const descBox2 = document.querySelectorAll('.descrip-box2');

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

// function changeToBuild1() {
//     deckbuild1.classList.add('dark-bg');
//     deckbuild2.classList.remove('dark-bg');
//     deckbuild2.classList.add('light-bg');

//     buildBox1.style.display = 'flex';
//     buildBox2.style.display = 'none';
//     descBox1.style.display = 'flex';
//     descBox2.style.display = 'none';
// }

// function changeToBuild2() {
//     deckbuild2.classList.add('dark-bg');
//     deckbuild1.classList.remove('dark-bg');
//     deckbuild1.classList.add('light-bg');

//     buildBox2.style.display = 'flex';
//     buildBox1.style.display = 'none';
//     descBox1.style.display = 'none';
//     descBox2.style.display = 'flex';
// }

{/* <button class="deckbuild1" data-targetButton="theIdOfTheButtonBesideThis" data-targetOn="idOfImgToShow"  data-targetOff="idOfImgToHide"></button>

document.querySelectorAll('.deckbuild1').forEach(elem => elem.addEventListener('click', () => {
    elem.classList.add('dark-bg');
    elem.getAttribute("data-targetButton").classList.remove('dark-bg');
    elem.getAttribute("data-targetButton").classList.add('light-bg');

    document.getElementById(elem.getAttribute("data-targetOn")).style.display = 'flex';
    document.getElementById(data-targetOff).style.display = 'none';
    descBox1.style.display = 'flex';
    descBox2.style.display = 'none';
}))
document.querySelectorAll('.deckbuild2').forEach(elem => elem.addEventListener('click', () => {
    deckbuild2.classList.add('dark-bg');
    deckbuild1.classList.remove('dark-bg');
    deckbuild1.classList.add('light-bg');

    buildBox2.style.display = 'flex';
    buildBox1.style.display = 'none';
    descBox1.style.display = 'none';
    descBox2.style.display = 'flex';
})) */}

// deckbuild1.addEventListener('click', changeToBuild1)
// deckbuild2.addEventListener('click', changeToBuild2)