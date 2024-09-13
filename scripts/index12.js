const deckbuild1 = document.querySelector('.deckbuild1');
const deckbuild2 = document.querySelector('.deckbuild2');
const deckbuild9 = document.querySelector('.deckbuild9');
const deckbuild10 = document.querySelector('.deckbuild10');
const deckbuild105 = document.querySelector('.deckbuild105');
const deckbuild106 = document.querySelector('.deckbuild106');
const deckbuild107 = document.querySelector('.deckbuild107');

const buildBox1 = document.querySelector('.build-box1');
const buildBox2 = document.querySelector('.build-box2');
const buildBox9 = document.querySelector('.build-box9');
const buildBox10 = document.querySelector('.build-box10');
const buildBox105 = document.querySelector('.build-box105');
const buildBox106 = document.querySelector('.build-box106');
const buildBox107 = document.querySelector('.build-box107');

const descBox1 = document.querySelector('.descrip-box1');
const descBox2 = document.querySelector('.descrip-box2');
const descBox9 = document.querySelector('.descrip-box9');
const descBox10 = document.querySelector('.descrip-box10');
const descBox105 = document.querySelector('.descrip-box105');
const descBox106 = document.querySelector('.descrip-box106'); 
const descBox107 = document.querySelector('.descrip-box107'); 

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

function changeToBuild9() {
    deckbuild9.classList.add('dark-bg');
    deckbuild10.classList.remove('dark-bg');
    deckbuild10.classList.add('light-bg');
    deckbuild105.classList.add('light-bg');
    deckbuild105.classList.remove('dark-bg');
    deckbuild106.classList.add('light-bg');
    deckbuild106.classList.remove('dark-bg');
    deckbuild107.classList.add('light-bg');
    deckbuild107.classList.remove('dark-bg');

    buildBox9.style.display = 'flex';
    buildBox10.style.display = 'none';
    descBox9.style.display = 'flex';
    descBox10.style.display = 'none';
    descBox105.style.display = 'none';
    buildBox105.style.display = 'none';
    descBox106.style.display = 'none';
    buildBox106.style.display = 'none';
    descBox107.style.display = 'none';
    buildBox107.style.display = 'none';
}
function changeToBuild10() {
    deckbuild10.classList.add('dark-bg');
    deckbuild9.classList.remove('dark-bg');
    deckbuild9.classList.add('light-bg');
    deckbuild105.classList.add('light-bg');
    deckbuild105.classList.remove('dark-bg');
    deckbuild106.classList.add('light-bg');
    deckbuild106.classList.remove('dark-bg');
    deckbuild107.classList.add('light-bg');
    deckbuild107.classList.remove('dark-bg');

    buildBox10.style.display = 'flex';
    buildBox9.style.display = 'none';
    descBox9.style.display = 'none';
    descBox10.style.display = 'flex';
    descBox105.style.display = 'none';
    buildBox105.style.display = 'none';
    descBox106.style.display = 'none';
    buildBox106.style.display = 'none';
    descBox107.style.display = 'none';
    buildBox107.style.display = 'none';
}
function changeToBuild105() {
    deckbuild105.classList.add('dark-bg');
    deckbuild10.classList.add('light-bg');
    deckbuild10.classList.remove('dark-bg');
    deckbuild9.classList.remove('dark-bg');
    deckbuild9.classList.add('light-bg');
    deckbuild106.classList.remove('dark-bg');
    deckbuild106.classList.add('light-bg');
    deckbuild107.classList.add('light-bg');
    deckbuild107.classList.remove('dark-bg');

    buildBox10.style.display = 'none';
    buildBox9.style.display = 'none';
    descBox9.style.display = 'none';
    buildBox106.style.display = 'none';
    descBox106.style.display = 'none';
    descBox10.style.display = 'none';
    descBox105.style.display = 'flex';
    buildBox105.style.display = 'flex';
    descBox107.style.display = 'none';
    buildBox107.style.display = 'none';
}
function changeToBuild106() {
    deckbuild106.classList.add('dark-bg');
    deckbuild10.classList.add('light-bg');
    deckbuild10.classList.remove('dark-bg');
    deckbuild9.classList.remove('dark-bg');
    deckbuild9.classList.add('light-bg');
    deckbuild105.classList.add('light-bg');
    deckbuild105.classList.remove('dark-bg');
    deckbuild107.classList.add('light-bg');
    deckbuild107.classList.remove('dark-bg');

    buildBox10.style.display = 'none';
    buildBox9.style.display = 'none';
    descBox9.style.display = 'none';
    descBox10.style.display = 'none';
    descBox106.style.display = 'flex';
    buildBox106.style.display = 'flex';
    descBox105.style.display = 'none';
    buildBox105.style.display = 'none';
    descBox107.style.display = 'none';
    buildBox107.style.display = 'none';
}
function changeToBuild107() {
    deckbuild107.classList.add('dark-bg');
    deckbuild10.classList.add('light-bg');
    deckbuild10.classList.remove('dark-bg');
    deckbuild9.classList.remove('dark-bg');
    deckbuild9.classList.add('light-bg');
    deckbuild105.classList.add('light-bg');
    deckbuild105.classList.remove('dark-bg');
    deckbuild106.classList.remove('dark-bg');
    deckbuild106.classList.add('light-bg');

    buildBox10.style.display = 'none';
    buildBox9.style.display = 'none';
    descBox9.style.display = 'none';
    descBox10.style.display = 'none';
    descBox107.style.display = 'flex';
    buildBox107.style.display = 'flex';
    buildBox106.style.display = 'none';
    descBox106.style.display = 'none';
    descBox105.style.display = 'none';
    buildBox105.style.display = 'none';
}


deckbuild1.addEventListener('click", changeToBuild1)
deckbuild2.addEventListener('click", changeToBuild2)

deckbuild9.addEventListener('click", changeToBuild9)
deckbuild10.addEventListener('click", changeToBuild10)
deckbuild105.addEventListener('click", changeToBuild105)
deckbuild106.addEventListener('click", changeToBuild106)
deckbuild107.addEventListener('click", changeToBuild107)
