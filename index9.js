const cardTouch = document.querySelectorAll('.pokemon-card2');
// const cardImage = document.querySelectorAll('.pok-card-small2');
const darkBackground = document.querySelector('.behind-large-card');

const deckbuild1 = document.querySelector('.deckbuild1');
const deckbuild2 = document.querySelector('.deckbuild2');
const deckbuild3 = document.querySelector('.deckbuild3');
const deckbuild4 = document.querySelector('.deckbuild4');
const deckbuild5 = document.querySelector('.deckbuild5');
const deckbuild6 = document.querySelector('.deckbuild6');
const deckbuild7 = document.querySelector('.deckbuild7');
const deckbuild8 = document.querySelector('.deckbuild8');
const deckbuildA = document.querySelector('.deckbuilda');
const deckbuildB = document.querySelector('.deckbuildb');
const deckbuildC = document.querySelector('.deckbuildc');
const deckbuildD = document.querySelector('.deckbuildd');
const deckbuildE = document.querySelector('.deckbuilde');
const deckbuildF = document.querySelector('.deckbuildf');
const deckbuildG = document.querySelector('.deckbuildg');
const deckbuildH = document.querySelector('.deckbuildh');
const buildBox1 = document.querySelector('.build-box1');
const buildBox2 = document.querySelector('.build-box2');
const buildBox3 = document.querySelector('.build-box3');
const buildBox4 = document.querySelector('.build-box4');
const buildBox5 = document.querySelector('.build-box5');
const buildBox6 = document.querySelector('.build-box6');
const buildBox7 = document.querySelector('.build-box7');
const buildBox8 = document.querySelector('.build-box8');
const buildBoxA = document.querySelector('.build-boxa');
const buildBoxB = document.querySelector('.build-boxb');
const buildBoxC = document.querySelector('.build-boxc');
const buildBoxD = document.querySelector('.build-boxd');
const buildBoxE = document.querySelector('.build-boxe');
const buildBoxF = document.querySelector('.build-boxf');
const buildBoxG = document.querySelector('.build-boxg');
const buildBoxH = document.querySelector('.build-boxh');
const descBox1 = document.querySelector('.descrip-box1');
const descBox2 = document.querySelector('.descrip-box2');
const descBox3 = document.querySelector('.descrip-box3');
const descBox4 = document.querySelector('.descrip-box4');
const descBox5 = document.querySelector('.descrip-box5');
const descBox6 = document.querySelector('.descrip-box6');
const descBox7 = document.querySelector('.descrip-box7');
const descBox8 = document.querySelector('.descrip-box8');
const descBoxA = document.querySelector('.descrip-boxa');
const descBoxB = document.querySelector('.descrip-boxb');
const descBoxC = document.querySelector('.descrip-boxc');
const descBoxD = document.querySelector('.descrip-boxd');
const descBoxE = document.querySelector('.descrip-boxe');
const descBoxF = document.querySelector('.descrip-boxf');
const descBoxG = document.querySelector('.descrip-boxg');
const descBoxH = document.querySelector('.descrip-boxh');


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

// cardTouch.forEach(card => {
//     card.addEventListener('click', () => {
//         card.querySelector('.pok-card-small2').classList.add('large-card');
//         darkBackground.forEach(dbg => dbg.style.display = 'block');
//         if (card.querySelector('.pok-card-small2').classList.contains('large-card')) {
//             darkBackground.forEach(dbg => dbg.addEventListener('click', () => {
//                 card.querySelector('.pok-card-small2').classList.remove('large-card');
//                 darkBackground.forEach(dbg => dbg.style.display = 'none');
//             })
//         )}
//     })
// });

// document.querySelectorAll('.deckbuild1').forEach(elem => elem.addEventListener('click', () => {
//     elem.classList.add('dark-bg');
//     elem.getAttribute("data-targetButton").classList.remove('dark-bg');
//     elem.getAttribute("data-targetButton").classList.add('light-bg');

//     document.getElementById(elem.getAttribute("data-targetOn")).style.display = 'flex';
//     document.getElementById(data-targetOff).style.display = 'none';
//     descBox1.style.display = 'flex';
//     descBox2.style.display = 'none';
// }))
// document.querySelectorAll('.deckbuild2').forEach(elem => elem.addEventListener('click', () => {
//     deckbuild2.classList.add('dark-bg');
//     deckbuild1.classList.remove('dark-bg');
//     deckbuild1.classList.add('light-bg');

//     buildBox2.style.display = 'flex';
//     buildBox1.style.display = 'none';
//     descBox1.style.display = 'none';
//     descBox2.style.display = 'flex';
// })) 

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

function changeToBuildG() {
    deckbuildG.classList.add('dark-bg');
    deckbuildH.classList.remove('dark-bg');
    deckbuildH.classList.add('light-bg');

    buildBoxG.style.display = 'flex';
    buildBoxH.style.display = 'none';
    descBoxG.style.display = 'flex';
    descBoxH.style.display = 'none';
}
function changeToBuildH() {
    deckbuildH.classList.add('dark-bg');
    deckbuildG.classList.remove('dark-bg');
    deckbuildG.classList.add('light-bg');

    buildBoxH.style.display = 'flex';
    buildBoxG.style.display = 'none';
    descBoxG.style.display = 'none';
    descBoxH.style.display = 'flex';
}

deckbuild1.addEventListener('click', changeToBuild1)
deckbuild2.addEventListener('click', changeToBuild2)
deckbuild3.addEventListener('click', changeToBuild3)
deckbuild4.addEventListener('click', changeToBuild4)
deckbuild5.addEventListener('click', changeToBuild5)
deckbuild6.addEventListener('click', changeToBuild6)
deckbuild7.addEventListener('click', changeToBuild7)
deckbuild8.addEventListener('click', changeToBuild8)
deckbuildA.addEventListener('click', changeToBuildA)
deckbuildB.addEventListener('click', changeToBuildB)
deckbuildC.addEventListener('click', changeToBuildC)
deckbuildD.addEventListener('click', changeToBuildD)
deckbuildE.addEventListener('click', changeToBuildE)
deckbuildF.addEventListener('click', changeToBuildF)
deckbuildG.addEventListener('click', changeToBuildG)
deckbuildH.addEventListener('click', changeToBuildH)
