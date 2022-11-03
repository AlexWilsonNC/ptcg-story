const deckbuild1 = document.querySelector('.deckbuild1');
const deckbuild2 = document.querySelector('.deckbuild2');
const deckbuild3 = document.querySelector('.deckbuild3');
const deckbuild4 = document.querySelector('.deckbuild4');
const deckbuild5 = document.querySelector('.deckbuild5');
const deckbuild6 = document.querySelector('.deckbuild6');
const deckbuild7 = document.querySelector('.deckbuild7');
const deckbuild8 = document.querySelector('.deckbuild8');
const deckbuild9 = document.querySelector('.deckbuild9');
const deckbuild10 = document.querySelector('.deckbuild10');
const deckbuild105 = document.querySelector('.deckbuild105');
const deckbuild106 = document.querySelector('.deckbuild106');
const deckbuild100 = document.querySelector('.deckbuild100');
const deckbuild200 = document.querySelector('.deckbuild200');
const deckbuildA = document.querySelector('.deckbuilda');
const deckbuildB = document.querySelector('.deckbuildb');
const buildBox1 = document.querySelector('.build-box1');
const buildBox2 = document.querySelector('.build-box2');
const buildBox3 = document.querySelector('.build-box3');
const buildBox4 = document.querySelector('.build-box4');
const buildBox5 = document.querySelector('.build-box5');
const buildBox6 = document.querySelector('.build-box6');
const buildBox7 = document.querySelector('.build-box7');
const buildBox8 = document.querySelector('.build-box8');
const buildBox100 = document.querySelector('.build-box100');
const buildBox200 = document.querySelector('.build-box200');
const buildBox9 = document.querySelector('.build-box9');
const buildBox10 = document.querySelector('.build-box10');
const buildBox105 = document.querySelector('.build-box105');
const buildBox106 = document.querySelector('.build-box106');
const descBox100 = document.querySelector('.descrip-box100');
const descBox200 = document.querySelector('.descrip-box200');
const buildBoxA = document.querySelector('.build-boxa');
const buildBoxB = document.querySelector('.build-boxb');
const descBox1 = document.querySelector('.descrip-box1');
const descBox2 = document.querySelector('.descrip-box2');
const descBox3 = document.querySelector('.descrip-box3');
const descBox4 = document.querySelector('.descrip-box4');
const descBox5 = document.querySelector('.descrip-box5');
const descBox6 = document.querySelector('.descrip-box6');
const descBox7 = document.querySelector('.descrip-box7');
const descBox8 = document.querySelector('.descrip-box8');
const descBox9 = document.querySelector('.descrip-box9');
const descBox10 = document.querySelector('.descrip-box10');
const descBox105 = document.querySelector('.descrip-box105');
const descBox106 = document.querySelector('.descrip-box106');
const descBoxA = document.querySelector('.descrip-boxa');
const descBoxB = document.querySelector('.descrip-boxb');

function changeToBuild100() {
    deckbuild100.classList.add('dark-bg');
    deckbuild200.classList.remove('dark-bg');
    deckbuild200.classList.add('light-bg');

    buildBox100.style.display = 'flex';
    buildBox200.style.display = 'none';
    descBox100.style.display = 'flex';
    descBox200.style.display = 'none';
}
function changeToBuild200() {
    deckbuild200.classList.add('dark-bg');
    deckbuild100.classList.remove('dark-bg');
    deckbuild100.classList.add('light-bg');

    buildBox200.style.display = 'flex';
    buildBox100.style.display = 'none';
    descBox100.style.display = 'none';
    descBox200.style.display = 'flex';
}

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
function changeToBuild7() {
    deckbuild7.classList.add('dark-bg');
    deckbuild8.classList.remove('dark-bg');
    deckbuild8.classList.add('light-bg');

    buildBox7.style.display = 'flex';
    buildBox8.style.display = 'none';
    descBox7.style.display = 'flex';
    descBox8.style.display = 'none';
}
function changeToBuild8() {
    deckbuild8.classList.add('dark-bg');
    deckbuild7.classList.remove('dark-bg');
    deckbuild7.classList.add('light-bg');

    buildBox8.style.display = 'flex';
    buildBox7.style.display = 'none';
    descBox7.style.display = 'none';
    descBox8.style.display = 'flex';
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

deckbuild1.addEventListener('click', changeToBuild1)
deckbuild2.addEventListener('click', changeToBuild2)
deckbuild3.addEventListener('click', changeToBuild3)
deckbuild4.addEventListener('click', changeToBuild4)
deckbuild5.addEventListener('click', changeToBuild5)
deckbuild6.addEventListener('click', changeToBuild6)
deckbuild7.addEventListener('click', changeToBuild7)
deckbuild8.addEventListener('click', changeToBuild8)
deckbuild9.addEventListener('click', changeToBuild9)
deckbuild10.addEventListener('click', changeToBuild10)
deckbuild105.addEventListener('click', changeToBuild105)
deckbuild106.addEventListener('click', changeToBuild106)
deckbuildA.addEventListener('click', changeToBuildA)
deckbuildB.addEventListener('click', changeToBuildB)

deckbuild100.addEventListener('click', changeToBuild100)
deckbuild200.addEventListener('click', changeToBuild200)