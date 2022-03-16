const masters = document.querySelector('.masters');
const seniors = document.querySelector('.seniors');
const juniors = document.querySelector('.juniors');
const mastersList = document.querySelector('.masters-ol');
const seniorsList = document.querySelector('.seniors-ol');
const juniorsList = document.querySelector('.juniors-ol');
const mastersMeta = document.querySelector('.masters-meta');
const seniorsMeta = document.querySelector('.seniors-meta');
const juniorsMeta = document.querySelector('.juniors-meta');

function changeToMasters() {
    masters.classList.add('dark-bg');
    seniors.classList.remove('dark-bg');
    seniors.classList.add('light-bg');
    juniors.classList.remove('dark-bg');
    juniors.classList.add('light-bg');
    mastersList.style.display = 'block';
    mastersMeta.style.display = 'block';
    seniorsList.style.display = 'none';
    seniorsMeta.style.display = 'none';
    juniorsList.style.display = 'none';
    juniorsMeta.style.display = 'none';
}
function changeToSeniors() {
    seniors.classList.add('dark-bg');
    masters.classList.remove('dark-bg');
    masters.classList.add('light-bg');
    juniors.classList.remove('dark-bg');
    juniors.classList.add('light-bg');
    mastersList.style.display = 'none';
    mastersMeta.style.display = 'none';
    juniorsList.style.display = 'none';
    juniorsMeta.style.display = 'none';
    seniorsList.style.display = 'block';
    seniorsMeta.style.display = 'block';
}
function changeToJuniors() {
    juniors.classList.add('dark-bg');
    masters.classList.remove('dark-bg');
    masters.classList.add('light-bg');
    seniors.classList.remove('dark-bg');
    seniors.classList.add('light-bg');
    mastersList.style.display = 'none';
    mastersMeta.style.display = 'none';
    seniorsList.style.display = 'none';
    seniorsMeta.style.display = 'none';
    juniorsList.style.display = 'block';
    juniorsMeta.style.display = 'block';
}

masters.addEventListener('click', changeToMasters)
seniors.addEventListener('click', changeToSeniors)
juniors.addEventListener('click', changeToJuniors)