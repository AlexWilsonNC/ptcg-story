const deckbuild1 = document.querySelector('.deckbuild1');
const deckbuild2 = document.querySelector('.deckbuild2');
const deckbuild3 = document.querySelector('.deckbuild3');
const deckbuild4 = document.querySelector('.deckbuild4');
const deckbuild5 = document.querySelector('.deckbuild5');
const deckbuild6 = document.querySelector('.deckbuild6');
const deckbuild65 = document.querySelector('.deckbuild65');
const deckbuild7 = document.querySelector('.deckbuild7');
const deckbuild8 = document.querySelector('.deckbuild8');
const deckbuild85 = document.querySelector('.deckbuild85');
const deckbuild9 = document.querySelector('.deckbuild9');
const deckbuild10 = document.querySelector('.deckbuild10');
const deckbuildA = document.querySelector('.deckbuilda');
const deckbuildB = document.querySelector('.deckbuildb');
const deckbuildC = document.querySelector('.deckbuildc');
const deckbuildD = document.querySelector('.deckbuildd');
const deckbuildE = document.querySelector('.deckbuilde');
const deckbuildF = document.querySelector('.deckbuildf');
const deckbuildG = document.querySelector('.deckbuildg');
const deckbuildH = document.querySelector('.deckbuildh');
const deckbuildH1 = document.querySelector('.deckbuildh1');
const deckbuildO = document.querySelector('.deckbuildO');
const deckbuildP = document.querySelector('.deckbuildP');
const deckbuildQ = document.querySelector('.deckbuildQ');
const deckbuildR = document.querySelector('.deckbuildR');
const deckbuildS = document.querySelector('.deckbuildS');
const deckbuildT = document.querySelector('.deckbuildT');
const deckbuildU = document.querySelector('.deckbuildU');
const deckbuildV = document.querySelector('.deckbuildV');
const deckbuildW = document.querySelector('.deckbuildW');

const buildBox1 = document.querySelector('.build-box1');
const buildBox2 = document.querySelector('.build-box2');
const buildBox3 = document.querySelector('.build-box3');
const buildBox4 = document.querySelector('.build-box4');
const buildBox5 = document.querySelector('.build-box5');
const buildBox6 = document.querySelector('.build-box6');
const buildBox65 = document.querySelector('.build-box65');
const buildBox7 = document.querySelector('.build-box7');
const buildBox8 = document.querySelector('.build-box8');
const buildBox85 = document.querySelector('.build-box85');
const buildBox9 = document.querySelector('.build-box9');
const buildBox10 = document.querySelector('.build-box10');
const buildBoxA = document.querySelector('.build-boxa');
const buildBoxB = document.querySelector('.build-boxb');
const buildBoxC = document.querySelector('.build-boxc');
const buildBoxD = document.querySelector('.build-boxd');
const buildBoxE = document.querySelector('.build-boxe');
const buildBoxF = document.querySelector('.build-boxf');
const buildBoxG = document.querySelector('.build-boxg');
const buildBoxH = document.querySelector('.build-boxh');
const buildBoxH1 = document.querySelector('.build-boxh1');
const buildBoxO = document.querySelector('.build-boxO');
const buildBoxP = document.querySelector('.build-boxP');
const buildBoxQ = document.querySelector('.build-boxQ');
const buildBoxR = document.querySelector('.build-boxR');
const buildBoxS = document.querySelector('.build-boxS');
const buildBoxT = document.querySelector('.build-boxT');
const buildBoxU = document.querySelector('.build-boxU');
const buildBoxV = document.querySelector('.build-boxV');
const buildBoxW = document.querySelector('.build-boxW');

const descBox1 = document.querySelector('.descrip-box1');
const descBox2 = document.querySelector('.descrip-box2');
const descBox3 = document.querySelector('.descrip-box3');
const descBox4 = document.querySelector('.descrip-box4');
const descBox5 = document.querySelector('.descrip-box5');
const descBox6 = document.querySelector('.descrip-box6');
const descBox65 = document.querySelector('.descrip-box65');
const descBox7 = document.querySelector('.descrip-box7');
const descBox8 = document.querySelector('.descrip-box8');
const descBox85 = document.querySelector('.descrip-box85');
const descBox9 = document.querySelector('.descrip-box9');
const descBox10 = document.querySelector('.descrip-box10');
const descBoxA = document.querySelector('.descrip-boxa');
const descBoxB = document.querySelector('.descrip-boxb');
const descBoxC = document.querySelector('.descrip-boxc');
const descBoxD = document.querySelector('.descrip-boxd');
const descBoxE = document.querySelector('.descrip-boxe');
const descBoxF = document.querySelector('.descrip-boxf');
const descBoxG = document.querySelector('.descrip-boxg');
const descBoxH = document.querySelector('.descrip-boxh'); 
const descBoxH1 = document.querySelector('.descrip-boxh1'); 
const descBoxO = document.querySelector('.descrip-boxO'); 
const descBoxP = document.querySelector('.descrip-boxP'); 
const descBoxQ = document.querySelector('.descrip-boxQ'); 
const descBoxR = document.querySelector('.descrip-boxR'); 
const descBoxS = document.querySelector('.descrip-boxS'); 
const descBoxT = document.querySelector('.descrip-boxT'); 
const descBoxU = document.querySelector('.descrip-boxU'); 
const descBoxV = document.querySelector('.descrip-boxV'); 
const descBoxW = document.querySelector('.descrip-boxW'); 

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
    deckbuild65.classList.add('light-bg');
    deckbuild65.classList.remove('dark-bg');

    buildBox5.style.display = 'flex';
    buildBox6.style.display = 'none';
    descBox5.style.display = 'flex';
    descBox6.style.display = 'none';
    descBox65.style.display = 'none';
    buildBox65.style.display = 'none';
}
function changeToBuild6() {
    deckbuild6.classList.add('dark-bg');
    deckbuild5.classList.remove('dark-bg');
    deckbuild5.classList.add('light-bg');
    deckbuild65.classList.add('light-bg');
    deckbuild65.classList.remove('dark-bg');

    buildBox6.style.display = 'flex';
    buildBox5.style.display = 'none';
    descBox5.style.display = 'none';
    descBox6.style.display = 'flex';
    descBox65.style.display = 'none';
    buildBox65.style.display = 'none';
}
function changeToBuild65() {
    deckbuild65.classList.add('dark-bg');
    deckbuild6.classList.add('light-bg');
    deckbuild6.classList.remove('dark-bg');
    deckbuild5.classList.remove('dark-bg');
    deckbuild5.classList.add('light-bg');

    buildBox6.style.display = 'none';
    buildBox5.style.display = 'none';
    descBox5.style.display = 'none';
    descBox6.style.display = 'none';
    descBox65.style.display = 'flex';
    buildBox65.style.display = 'flex';
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

function changeToBuild9() {
    deckbuild9.classList.add('dark-bg');
    deckbuild10.classList.remove('dark-bg');
    deckbuild10.classList.add('light-bg');

    buildBox9.style.display = 'flex';
    buildBox10.style.display = 'none';
    descBox9.style.display = 'flex';
    descBox10.style.display = 'none';
}
function changeToBuild10() {
    deckbuild10.classList.add('dark-bg');
    deckbuild9.classList.remove('dark-bg');
    deckbuild9.classList.add('light-bg');

    buildBox10.style.display = 'flex';
    buildBox9.style.display = 'none';
    descBox9.style.display = 'none';
    descBox10.style.display = 'flex';
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
    deckbuildH1.classList.add('light-bg');
    deckbuildH1.classList.remove('dark-bg');

    buildBoxG.style.display = 'flex';
    buildBoxH.style.display = 'none';
    descBoxG.style.display = 'flex';
    descBoxH.style.display = 'none';
    descBoxH1.style.display = 'none';
    buildBoxH1.style.display = 'none';
}
function changeToBuildH() {
    deckbuildH.classList.add('dark-bg');
    deckbuildG.classList.remove('dark-bg');
    deckbuildG.classList.add('light-bg');
    deckbuildH1.classList.add('light-bg');
    deckbuildH1.classList.remove('dark-bg');

    buildBoxH.style.display = 'flex';
    buildBoxG.style.display = 'none';
    descBoxG.style.display = 'none';
    descBoxH.style.display = 'flex';
    descBoxH1.style.display = 'none';
    buildBoxH1.style.display = 'none';
}
function changeToBuildH1() {
    deckbuildH1.classList.add('dark-bg');
    deckbuildH.classList.add('light-bg');
    deckbuildH.classList.remove('dark-bg');
    deckbuildG.classList.remove('dark-bg');
    deckbuildG.classList.add('light-bg');

    buildBoxH.style.display = 'none';
    buildBoxG.style.display = 'none';
    descBoxG.style.display = 'none';
    descBoxH.style.display = 'none';
    descBoxH1.style.display = 'flex';
    buildBoxH1.style.display = 'flex';
}

function changeToBuildO() {
    deckbuildO.classList.add('dark-bg');
    deckbuildP.classList.remove('dark-bg');
    deckbuildP.classList.add('light-bg');
    deckbuildQ.classList.add('light-bg');
    deckbuildQ.classList.remove('dark-bg');

    buildBoxO.style.display = 'flex';
    buildBoxP.style.display = 'none';
    descBoxO.style.display = 'flex';
    descBoxP.style.display = 'none';
    descBoxQ.style.display = 'none';
    buildBoxQ.style.display = 'none';
}
function changeToBuildP() {
    deckbuildP.classList.add('dark-bg');
    deckbuildO.classList.remove('dark-bg');
    deckbuildO.classList.add('light-bg');
    deckbuildQ.classList.add('light-bg');
    deckbuildQ.classList.remove('dark-bg');

    buildBoxP.style.display = 'flex';
    buildBoxO.style.display = 'none';
    descBoxO.style.display = 'none';
    descBoxP.style.display = 'flex';
    descBoxQ.style.display = 'none';
    buildBoxQ.style.display = 'none';
}
function changeToBuildQ() {
    deckbuildQ.classList.add('dark-bg');
    deckbuildP.classList.add('light-bg');
    deckbuildP.classList.remove('dark-bg');
    deckbuildO.classList.remove('dark-bg');
    deckbuildO.classList.add('light-bg');

    buildBoxP.style.display = 'none';
    buildBoxO.style.display = 'none';
    descBoxO.style.display = 'none';
    descBoxP.style.display = 'none';
    descBoxQ.style.display = 'flex';
    buildBoxQ.style.display = 'flex';
}

function changeToBuildR() {
    deckbuildR.classList.add('dark-bg');
    deckbuildS.classList.remove('dark-bg');
    deckbuildS.classList.add('light-bg');

    buildBoxR.style.display = 'flex';
    buildBoxS.style.display = 'none';
    descBoxR.style.display = 'flex';
    descBoxS.style.display = 'none';
}
function changeToBuildS() {
    deckbuildS.classList.add('dark-bg');
    deckbuildR.classList.remove('dark-bg');
    deckbuildR.classList.add('light-bg');

    buildBoxS.style.display = 'flex';
    buildBoxR.style.display = 'none';
    descBoxR.style.display = 'none';
    descBoxS.style.display = 'flex';
}

function changeToBuildT() {
    deckbuildT.classList.add('dark-bg');
    deckbuildU.classList.remove('dark-bg');
    deckbuildU.classList.add('light-bg');

    buildBoxT.style.display = 'flex';
    buildBoxU.style.display = 'none';
    descBoxT.style.display = 'flex';
    descBoxU.style.display = 'none';
}
function changeToBuildU() {
    deckbuildU.classList.add('dark-bg');
    deckbuildT.classList.remove('dark-bg');
    deckbuildT.classList.add('light-bg');

    buildBoxU.style.display = 'flex';
    buildBoxT.style.display = 'none';
    descBoxT.style.display = 'none';
    descBoxU.style.display = 'flex';
}

function changeToBuildV() {
    deckbuildV.classList.add('dark-bg');
    deckbuildW.classList.remove('dark-bg');
    deckbuildW.classList.add('light-bg');

    buildBoxV.style.display = 'flex';
    buildBoxW.style.display = 'none';
    descBoxV.style.display = 'flex';
    descBoxW.style.display = 'none';
}
function changeToBuildW() {
    deckbuildW.classList.add('dark-bg');
    deckbuildV.classList.remove('dark-bg');
    deckbuildV.classList.add('light-bg');

    buildBoxW.style.display = 'flex';
    buildBoxV.style.display = 'none';
    descBoxV.style.display = 'none';
    descBoxW.style.display = 'flex';
}

deckbuild1.addEventListener('click", changeToBuild1)
deckbuild2.addEventListener('click", changeToBuild2)

deckbuild3.addEventListener('click", changeToBuild3)
deckbuild4.addEventListener('click", changeToBuild4)

deckbuild5.addEventListener('click", changeToBuild5)
deckbuild6.addEventListener('click", changeToBuild6)
deckbuild65.addEventListener('click", changeToBuild65)

deckbuild7.addEventListener('click", changeToBuild7)
deckbuild8.addEventListener('click", changeToBuild8)
deckbuild85.addEventListener('click", changeToBuild85)

deckbuild9.addEventListener('click", changeToBuild9)
deckbuild10.addEventListener('click", changeToBuild10)

deckbuildA.addEventListener('click", changeToBuildA)
deckbuildB.addEventListener('click", changeToBuildB)

deckbuildC.addEventListener('click", changeToBuildC)
deckbuildD.addEventListener('click", changeToBuildD)

deckbuildE.addEventListener('click", changeToBuildE)
deckbuildF.addEventListener('click", changeToBuildF)

deckbuildG.addEventListener('click", changeToBuildG)
deckbuildH.addEventListener('click", changeToBuildH)
deckbuildH1.addEventListener('click", changeToBuildH1)

deckbuildO.addEventListener('click", changeToBuildO)
deckbuildP.addEventListener('click", changeToBuildP)
deckbuildQ.addEventListener('click", changeToBuildQ)

deckbuildR.addEventListener('click", changeToBuildR)
deckbuildS.addEventListener('click", changeToBuildS)

deckbuildT.addEventListener('click", changeToBuildT)
deckbuildU.addEventListener('click", changeToBuildU)

deckbuildV.addEventListener('click", changeToBuildV)
deckbuildW.addEventListener('click", changeToBuildW)
