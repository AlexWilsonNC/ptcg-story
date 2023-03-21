const mastersBtn = document.querySelector('.mastersBtn');
const seniorsBtn = document.querySelector('.seniorsBtn');
const juniorsBtn = document.querySelector('.juniorsBtn');
const fourBtn = document.querySelector('.fourBtn');

const mastersList = document.querySelector('.masters-ol');
const seniorsList = document.querySelector('.seniors-ol');
const juniorsList = document.querySelector('.juniors-ol');

const mastersMeta = document.querySelector('.masters-meta');
const seniorsMeta = document.querySelector('.seniors-meta');
const juniorsMeta = document.querySelector('.juniors-meta');
const fourMeta = document.querySelector('.four-meta');

function changeToMasters() {
    mastersBtn.classList.add('dark-bg');
    seniorsBtn.classList.remove('dark-bg');
    seniorsBtn.classList.add('light-bg');
    juniorsBtn.classList.remove('dark-bg');
    juniorsBtn.classList.add('light-bg');
    fourBtn.classList.remove('dark-bg');
    fourBtn.classList.add('light-bg');
    mastersList.style.display = 'block';
    mastersMeta.style.display = 'flex';
    seniorsList.style.display = 'none';
    seniorsMeta.style.display = 'none';
    juniorsList.style.display = 'none';
    juniorsMeta.style.display = 'none';
    fourList.style.display = 'none';
    fourMeta.style.display = 'none';
}
function changeToSeniors() {
    seniorsBtn.classList.add('dark-bg');
    mastersBtn.classList.remove('dark-bg');
    mastersBtn.classList.add('light-bg');
    juniorsBtn.classList.remove('dark-bg');
    juniorsBtn.classList.add('light-bg');
    fourBtn.classList.remove('dark-bg');
    fourBtn.classList.add('light-bg');
    mastersList.style.display = 'none';
    mastersMeta.style.display = 'none';
    juniorsList.style.display = 'none';
    juniorsMeta.style.display = 'none';
    seniorsList.style.display = 'block';
    seniorsMeta.style.display = 'flex';
    fourList.style.display = 'none';
    fourMeta.style.display = 'none';
}
function changeToJuniors() {
    juniorsBtn.classList.add('dark-bg');
    mastersBtn.classList.remove('dark-bg');
    mastersBtn.classList.add('light-bg');
    seniorsBtn.classList.remove('dark-bg');
    seniorsBtn.classList.add('light-bg');
    fourBtn.classList.remove('dark-bg');
    fourBtn.classList.add('light-bg');
    mastersList.style.display = 'none';
    mastersMeta.style.display = 'none';
    seniorsList.style.display = 'none';
    seniorsMeta.style.display = 'none';
    juniorsList.style.display = 'block';
    juniorsMeta.style.display = 'flex';
    fourList.style.display = 'none';
    fourMeta.style.display = 'none';
}
function changeToFour() {
    fourBtn.classList.add('dark-bg');
    mastersBtn.classList.remove('dark-bg');
    mastersBtn.classList.add('light-bg');
    seniorsBtn.classList.remove('dark-bg');
    seniorsBtn.classList.add('light-bg');
    juniorsBtn.classList.remove('dark-bg');
    juniorsBtn.classList.add('light-bg');
    mastersList.style.display = 'none';
    mastersMeta.style.display = 'none';
    seniorsList.style.display = 'none';
    seniorsMeta.style.display = 'none';
    juniorsList.style.display = 'none';
    juniorsMeta.style.display = 'none';
    fourList.style.display = 'block';
    fourMeta.style.display = 'flex';
}

mastersBtn.addEventListener('click', changeToMasters)
seniorsBtn.addEventListener('click', changeToSeniors)
juniorsBtn.addEventListener('click', changeToJuniors)
fourBtn.addEventListener('click', changeToFour)
