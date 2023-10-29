const mastersBtn = document.querySelector('.mastersBtn');
const seniorsBtn = document.querySelector('.seniorsBtn');
const juniorsBtn = document.querySelector('.juniorsBtn');
const extrasBtn = document.querySelector('.extrasBtn');

const mastersList = document.querySelector('.masters-ol');
const seniorsList = document.querySelector('.seniors-ol');
const juniorsList = document.querySelector('.juniors-ol');
const extrasList = document.querySelector('.extras-ol');

function changeToMasters() {
    mastersBtn.classList.add('dark-bg');

    seniorsBtn.classList.remove('dark-bg');
    seniorsBtn.classList.add('light-bg');

    juniorsBtn.classList.remove('dark-bg');
    juniorsBtn.classList.add('light-bg');

    extrasBtn.classList.remove('dark-bg');
    extrasBtn.classList.add('light-bg');

    mastersList.style.display = 'block';

    seniorsList.style.display = 'none';

    juniorsList.style.display = 'none';

    extrasList.style.display = 'none';
}
function changeToSeniors() {
    seniorsBtn.classList.add('dark-bg');

    mastersBtn.classList.remove('dark-bg');
    mastersBtn.classList.add('light-bg');

    juniorsBtn.classList.remove('dark-bg');
    juniorsBtn.classList.add('light-bg');

    extrasBtn.classList.remove('dark-bg');
    extrasBtn.classList.add('light-bg');

    mastersList.style.display = 'none';

    juniorsList.style.display = 'none';

    seniorsList.style.display = 'block';

    extrasList.style.display = 'none';
}
function changeToJuniors() {
    juniorsBtn.classList.add('dark-bg');

    mastersBtn.classList.remove('dark-bg');
    mastersBtn.classList.add('light-bg');

    seniorsBtn.classList.remove('dark-bg');
    seniorsBtn.classList.add('light-bg');

    extrasBtn.classList.remove('dark-bg');
    extrasBtn.classList.add('light-bg');

    mastersList.style.display = 'none';

    seniorsList.style.display = 'none';

    juniorsList.style.display = 'block';

    extrasList.style.display = 'none';
}
function changeToExtras() {
    extrasBtn.classList.add('dark-bg');

    mastersBtn.classList.remove('dark-bg');
    mastersBtn.classList.add('light-bg');

    seniorsBtn.classList.remove('dark-bg');
    seniorsBtn.classList.add('light-bg');

    juniorsBtn.classList.remove('dark-bg');
    juniorsBtn.classList.add('light-bg');

    mastersList.style.display = 'none';

    seniorsList.style.display = 'none';

    juniorsList.style.display = 'none';

    extrasList.style.display = 'block';
}

mastersBtn.addEventListener('click', changeToMasters)
seniorsBtn.addEventListener('click', changeToSeniors)
juniorsBtn.addEventListener('click', changeToJuniors)
extrasBtn.addEventListener('click', changeToExtras)
