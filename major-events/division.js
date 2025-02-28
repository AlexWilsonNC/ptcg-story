const mastersBtn = document.querySelector('.mastersBtn');
const seniorsBtn = document.querySelector('.seniorsBtn');
const juniorsBtn = document.querySelector('.juniorsBtn');
const fourBtn = document.querySelector('.fourBtn');

const mastersList = document.querySelector('.masters-ol');
const seniorsList = document.querySelector('.seniors-ol');
const juniorsList = document.querySelector('.juniors-ol');


function changeToMasters() {
    mastersBtn.classList.add('dark-bg');
    seniorsBtn.classList.remove('dark-bg');
    seniorsBtn.classList.add('light-bg');
    juniorsBtn.classList.remove('dark-bg');
    juniorsBtn.classList.add('light-bg');
    fourBtn.classList.remove('dark-bg');
    fourBtn.classList.add('light-bg');
    mastersList.style.display = 'block';
    seniorsList.style.display = 'none';
    juniorsList.style.display = 'none';
    fourList.style.display = 'none';
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
    juniorsList.style.display = 'none';
    seniorsList.style.display = 'block';
    fourList.style.display = 'none';
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
    seniorsList.style.display = 'none';
    juniorsList.style.display = 'block';
    fourList.style.display = 'none';
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
    seniorsList.style.display = 'none';
    juniorsList.style.display = 'none';
    fourList.style.display = 'block';
}

mastersBtn.addEventListener('click", changeToMasters)
seniorsBtn.addEventListener('click", changeToSeniors)
juniorsBtn.addEventListener('click", changeToJuniors)
fourBtn.addEventListener('click", changeToFour)
