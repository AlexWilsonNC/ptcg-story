const deckbuild1 = document.querySelector('.deckbuild1');
const deckbuild2 = document.querySelector('.deckbuild2');
const deckbuild3 = document.querySelector('.deckbuild3');
const deckbuild4 = document.querySelector('.deckbuild4');
const deckbuild7 = document.querySelector('.deckbuild7');
const deckbuild8 = document.querySelector('.deckbuild8');
const deckbuild85 = document.querySelector('.deckbuild85');
const deckbuildA = document.querySelector('.deckbuilda');
const deckbuildB = document.querySelector('.deckbuildb');
const deckbuildC = document.querySelector('.deckbuildc');
const deckbuildD = document.querySelector('.deckbuildd');
const deckbuildE = document.querySelector('.deckbuilde');
const deckbuildF = document.querySelector('.deckbuildf');
const buildBox1 = document.querySelector('.build-box1');
const buildBox2 = document.querySelector('.build-box2');
const buildBox3 = document.querySelector('.build-box3');
const buildBox4 = document.querySelector('.build-box4');
const buildBox7 = document.querySelector('.build-box7');
const buildBox8 = document.querySelector('.build-box8');
const buildBox85 = document.querySelector('.build-box85');
const buildBoxA = document.querySelector('.build-boxa');
const buildBoxB = document.querySelector('.build-boxb');
const buildBoxC = document.querySelector('.build-boxc');
const buildBoxD = document.querySelector('.build-boxd');
const buildBoxE = document.querySelector('.build-boxe');
const buildBoxF = document.querySelector('.build-boxf');
const descBox1 = document.querySelector('.descrip-box1');
const descBox2 = document.querySelector('.descrip-box2');
const descBox3 = document.querySelector('.descrip-box3');
const descBox4 = document.querySelector('.descrip-box4');
const descBox7 = document.querySelector('.descrip-box7');
const descBox8 = document.querySelector('.descrip-box8');
const descBox85 = document.querySelector('.descrip-box85');
const descBoxA = document.querySelector('.descrip-boxa');
const descBoxB = document.querySelector('.descrip-boxb');
const descBoxC = document.querySelector('.descrip-boxc');
const descBoxD = document.querySelector('.descrip-boxd');
const descBoxE = document.querySelector('.descrip-boxe');
const descBoxF = document.querySelector('.descrip-boxf');

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
function changeToBuild3() {
    deckbuild3.classList.add('dark-bg');
    deckbuild4.classList.remove('dark-bg');
    deckbuild4.classList.add('light-bg');

    buildBox3.style.display = 'flex';
    buildBox4.style.display = 'none';
    descBox3.style.display = 'flex';
    descBox4.style.display = 'none';
}
function changeToBuild4() {
    deckbuild4.classList.add('dark-bg');
    deckbuild3.classList.remove('dark-bg');
    deckbuild3.classList.add('light-bg');

    buildBox4.style.display = 'flex';
    buildBox3.style.display = 'none';
    descBox3.style.display = 'none';
    descBox4.style.display = 'flex';
}

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

function changeToBuildA() {
    deckbuildA.classList.add('dark-bg');
    deckbuildB.classList.remove('dark-bg');
    deckbuildB.classList.add('light-bg');

    buildBoxA.style.display = 'flex';
    buildBoxB.style.display = 'none';
    descBoxA.style.display = 'flex';
    descBoxB.style.display = 'none';
}
function changeToBuildB() {
    deckbuildB.classList.add('dark-bg');
    deckbuildA.classList.remove('dark-bg');
    deckbuildA.classList.add('light-bg');

    buildBoxB.style.display = 'flex';
    buildBoxA.style.display = 'none';
    descBoxA.style.display = 'none';
    descBoxB.style.display = 'flex';
}

function changeToBuildC() {
    deckbuildC.classList.add('dark-bg');
    deckbuildD.classList.remove('dark-bg');
    deckbuildD.classList.add('light-bg');

    buildBoxC.style.display = 'flex';
    buildBoxD.style.display = 'none';
    descBoxC.style.display = 'flex';
    descBoxD.style.display = 'none';
}
function changeToBuildD() {
    deckbuildD.classList.add('dark-bg');
    deckbuildC.classList.remove('dark-bg');
    deckbuildC.classList.add('light-bg');

    buildBoxD.style.display = 'flex';
    buildBoxC.style.display = 'none';
    descBoxC.style.display = 'none';
    descBoxD.style.display = 'flex';
}

function changeToBuildE() {
    deckbuildE.classList.add('dark-bg');
    deckbuildF.classList.remove('dark-bg');
    deckbuildF.classList.add('light-bg');

    buildBoxE.style.display = 'flex';
    buildBoxF.style.display = 'none';
    descBoxE.style.display = 'flex';
    descBoxF.style.display = 'none';
}
function changeToBuildF() {
    deckbuildF.classList.add('dark-bg');
    deckbuildE.classList.remove('dark-bg');
    deckbuildE.classList.add('light-bg');

    buildBoxF.style.display = 'flex';
    buildBoxE.style.display = 'none';
    descBoxE.style.display = 'none';
    descBoxF.style.display = 'flex';
}


deckbuild1.addEventListener('click', changeToBuild1)
deckbuild2.addEventListener('click', changeToBuild2)

deckbuild3.addEventListener('click', changeToBuild3)
deckbuild4.addEventListener('click', changeToBuild4)

deckbuild7.addEventListener('click', changeToBuild7)
deckbuild8.addEventListener('click', changeToBuild8)
deckbuild85.addEventListener('click', changeToBuild85)

deckbuildA.addEventListener('click', changeToBuildA)
deckbuildB.addEventListener('click', changeToBuildB)

deckbuildC.addEventListener('click', changeToBuildC)
deckbuildD.addEventListener('click', changeToBuildD)

deckbuildE.addEventListener('click', changeToBuildE)
deckbuildF.addEventListener('click', changeToBuildF)
