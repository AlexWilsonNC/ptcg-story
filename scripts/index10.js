const deckbuild1 = document.querySelector('.deckbuild1');
const deckbuild2 = document.querySelector('.deckbuild2');
const deckbuild3 = document.querySelector('.deckbuild3');
const deckbuild4 = document.querySelector('.deckbuild4');
const deckbuild5 = document.querySelector('.deckbuild5');
const deckbuild6 = document.querySelector('.deckbuild6');
const deckbuild9 = document.querySelector('.deckbuild9');
const deckbuild10 = document.querySelector('.deckbuild10');
const deckbuild105 = document.querySelector('.deckbuild105');
const deckbuild106 = document.querySelector('.deckbuild106');
const deckbuildA = document.querySelector('.deckbuilda');
const deckbuildB = document.querySelector('.deckbuildb');
const deckbuildC = document.querySelector('.deckbuildc');
const deckbuildD = document.querySelector('.deckbuildd');

const buildBox1 = document.querySelector('.build-box1');
const buildBox2 = document.querySelector('.build-box2');
const buildBox3 = document.querySelector('.build-box3');
const buildBox4 = document.querySelector('.build-box4');
const buildBox5 = document.querySelector('.build-box5');
const buildBox6 = document.querySelector('.build-box6');
const buildBox9 = document.querySelector('.build-box9');
const buildBox10 = document.querySelector('.build-box10');
const buildBox105 = document.querySelector('.build-box105');
const buildBox106 = document.querySelector('.build-box106');
const buildBoxA = document.querySelector('.build-boxa');
const buildBoxB = document.querySelector('.build-boxb');
const buildBoxC = document.querySelector('.build-boxc');
const buildBoxD = document.querySelector('.build-boxd');

const descBox1 = document.querySelector('.descrip-box1');
const descBox2 = document.querySelector('.descrip-box2');
const descBox3 = document.querySelector('.descrip-box3');
const descBox4 = document.querySelector('.descrip-box4');
const descBox5 = document.querySelector('.descrip-box5');
const descBox6 = document.querySelector('.descrip-box6');
const descBox9 = document.querySelector('.descrip-box9');
const descBox10 = document.querySelector('.descrip-box10');
const descBox105 = document.querySelector('.descrip-box105');
const descBox106 = document.querySelector('.descrip-box106'); 
const descBoxA = document.querySelector('.descrip-boxa');
const descBoxB = document.querySelector('.descrip-boxb');
const descBoxC = document.querySelector('.descrip-boxc');
const descBoxD = document.querySelector('.descrip-boxd');

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
function changeToBuild5() {
    deckbuild5.classList.add('dark-bg');
    deckbuild6.classList.remove('dark-bg');
    deckbuild6.classList.add('light-bg');

    buildBox5.style.display = 'flex';
    buildBox6.style.display = 'none';
    descBox5.style.display = 'flex';
    descBox6.style.display = 'none';
}
function changeToBuild6() {
    deckbuild6.classList.add('dark-bg');
    deckbuild5.classList.remove('dark-bg');
    deckbuild5.classList.add('light-bg');

    buildBox6.style.display = 'flex';
    buildBox5.style.display = 'none';
    descBox5.style.display = 'none';
    descBox6.style.display = 'flex';
}
function changeToBuild9() {
    deckbuild9.classList.add('dark-bg');
    deckbuild10.classList.remove('dark-bg');
    deckbuild10.classList.add('light-bg');
    deckbuild105.classList.add('light-bg');
    deckbuild105.classList.remove('dark-bg');
    deckbuild106.classList.add('light-bg');
    deckbuild106.classList.remove('dark-bg');

    buildBox9.style.display = 'flex';
    buildBox10.style.display = 'none';
    descBox9.style.display = 'flex';
    descBox10.style.display = 'none';
    descBox105.style.display = 'none';
    buildBox105.style.display = 'none';
    descBox106.style.display = 'none';
    buildBox106.style.display = 'none';
}
function changeToBuild10() {
    deckbuild10.classList.add('dark-bg');
    deckbuild9.classList.remove('dark-bg');
    deckbuild9.classList.add('light-bg');
    deckbuild105.classList.add('light-bg');
    deckbuild105.classList.remove('dark-bg');
    deckbuild106.classList.add('light-bg');
    deckbuild106.classList.remove('dark-bg');

    buildBox10.style.display = 'flex';
    buildBox9.style.display = 'none';
    descBox9.style.display = 'none';
    descBox10.style.display = 'flex';
    descBox105.style.display = 'none';
    buildBox105.style.display = 'none';
    descBox106.style.display = 'none';
    buildBox106.style.display = 'none';
}
function changeToBuild105() {
    deckbuild105.classList.add('dark-bg');
    deckbuild10.classList.add('light-bg');
    deckbuild10.classList.remove('dark-bg');
    deckbuild9.classList.remove('dark-bg');
    deckbuild9.classList.add('light-bg');
    deckbuild106.classList.remove('dark-bg');
    deckbuild106.classList.add('light-bg');

    buildBox10.style.display = 'none';
    buildBox9.style.display = 'none';
    descBox9.style.display = 'none';
    buildBox106.style.display = 'none';
    descBox106.style.display = 'none';
    descBox10.style.display = 'none';
    descBox105.style.display = 'flex';
    buildBox105.style.display = 'flex';
}
function changeToBuild106() {
    deckbuild106.classList.add('dark-bg');
    deckbuild10.classList.add('light-bg');
    deckbuild10.classList.remove('dark-bg');
    deckbuild9.classList.remove('dark-bg');
    deckbuild9.classList.add('light-bg');
    deckbuild105.classList.add('light-bg');
    deckbuild105.classList.remove('dark-bg');

    buildBox10.style.display = 'none';
    buildBox9.style.display = 'none';
    descBox9.style.display = 'none';
    descBox10.style.display = 'none';
    descBox106.style.display = 'flex';
    buildBox106.style.display = 'flex';
    descBox105.style.display = 'none';
    buildBox105.style.display = 'none';
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

deckbuild1.addEventListener('click', changeToBuild1)
deckbuild2.addEventListener('click', changeToBuild2)

deckbuild3.addEventListener('click', changeToBuild3)
deckbuild4.addEventListener('click', changeToBuild4)

deckbuild5.addEventListener('click', changeToBuild5)
deckbuild6.addEventListener('click', changeToBuild6)

deckbuild9.addEventListener('click', changeToBuild9)
deckbuild10.addEventListener('click', changeToBuild10)
deckbuild105.addEventListener('click', changeToBuild105)
deckbuild106.addEventListener('click', changeToBuild106)

deckbuildA.addEventListener('click', changeToBuildA)
deckbuildB.addEventListener('click', changeToBuildB)

deckbuildC.addEventListener('click', changeToBuildC)
deckbuildD.addEventListener('click', changeToBuildD)