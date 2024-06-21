const deckbuild7 = document.querySelector('.deckbuild7');
const deckbuild8 = document.querySelector('.deckbuild8');
const deckbuild85 = document.querySelector('.deckbuild85');

const buildBox7 = document.querySelector('.build-box7');
const buildBox8 = document.querySelector('.build-box8');
const buildBox85 = document.querySelector('.build-box85');

const descBox7 = document.querySelector('.descrip-box7');
const descBox8 = document.querySelector('.descrip-box8');
const descBox85 = document.querySelector('.descrip-box85');

function changeToBuild7() {
    deckbuild7.classList.add('dark-bg');
    deckbuild8.classList.remove('dark-bg');
    deckbuild8.classList.add('light-bg');
    deckbuild85.classList.add('light-bg');
    deckbuild85.classList.remove('dark-bg');

    buildBox7.style.display = 'flex';
    buildBox8.style.display = 'none';
    descBox7.style.display = 'flex';
    descBox8.style.display = 'none';
    descBox85.style.display = 'none';
    buildBox85.style.display = 'none';
}
function changeToBuild8() {
    deckbuild8.classList.add('dark-bg');
    deckbuild7.classList.remove('dark-bg');
    deckbuild7.classList.add('light-bg');
    deckbuild85.classList.add('light-bg');
    deckbuild85.classList.remove('dark-bg');

    buildBox8.style.display = 'flex';
    buildBox7.style.display = 'none';
    descBox7.style.display = 'none';
    descBox8.style.display = 'flex';
    descBox85.style.display = 'none';
    buildBox85.style.display = 'none';
}
function changeToBuild85() {
    deckbuild85.classList.add('dark-bg');
    deckbuild8.classList.add('light-bg');
    deckbuild8.classList.remove('dark-bg');
    deckbuild7.classList.remove('dark-bg');
    deckbuild7.classList.add('light-bg');

    buildBox8.style.display = 'none';
    buildBox7.style.display = 'none';
    descBox7.style.display = 'none';
    descBox8.style.display = 'none';
    descBox85.style.display = 'flex';
    buildBox85.style.display = 'flex';
}

deckbuild7.addEventListener('click', changeToBuild7)
deckbuild8.addEventListener('click', changeToBuild8)
deckbuild85.addEventListener('click', changeToBuild85)
