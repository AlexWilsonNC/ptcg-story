const natSelector = document.querySelector('.open-country-nats');
const natSelector2015 = document.querySelector('.open-country-nats2015');
const natSelector2014 = document.querySelector('.open-country-nats2014');
const natSelector2013 = document.querySelector('.open-country-nats2013');
const natSelector2010 = document.querySelector('.open-country-nats2010');

function showOtherNats() {

    document.querySelector('.hidden-nat1').style.display = 'block';
    document.querySelector('.hidden-nat2').style.display = 'block';


    document.querySelector('.behind-modal3').style.display = 'block';

    behind.addEventListener('click', () => {
        behind.style.display = 'none';
        document.querySelector('.hidden-nat1').style.display = 'none';
        document.querySelector('.hidden-nat2').style.display = 'none';
    })

}
function showOtherNats2015() {

    document.querySelector('.hidden-nat2015-1').style.display = 'block';
    document.querySelector('.hidden-nat2015-2').style.display = 'block';


    document.querySelector('.behind-modal3').style.display = 'block';

    behind.addEventListener('click', () => {
        behind.style.display = 'none';
        document.querySelector('.hidden-nat2015-1').style.display = 'none';
        document.querySelector('.hidden-nat2015-2').style.display = 'none';
    })

}
function showOtherNats2014() {

    document.querySelector('.hidden-nat2014-1').style.display = 'block';
    document.querySelector('.hidden-nat2014-2').style.display = 'block';


    document.querySelector('.behind-modal3').style.display = 'block';

    behind.addEventListener('click', () => {
        behind.style.display = 'none';
        document.querySelector('.hidden-nat2014-1').style.display = 'none';
        document.querySelector('.hidden-nat2014-2').style.display = 'none';
    })

}
function showOtherNats2013() {

    document.querySelector('.hidden-nat2013-1').style.display = 'block';
    document.querySelector('.hidden-nat2013-2').style.display = 'block';


    document.querySelector('.behind-modal3').style.display = 'block';

    behind.addEventListener('click', () => {
        behind.style.display = 'none';
        document.querySelector('.hidden-nat2013-1').style.display = 'none';
        document.querySelector('.hidden-nat2013-2').style.display = 'none';
    })

}
function showOtherNats2010() {

    document.querySelector('.hidden-nat20101').style.display = 'block';
    document.querySelector('.hidden-nat20102').style.display = 'block';


    document.querySelector('.behind-modal3').style.display = 'block';

    behind.addEventListener('click', () => {
        behind.style.display = 'none';
        document.querySelector('.hidden-nat20101').style.display = 'none';
        document.querySelector('.hidden-nat20102').style.display = 'none';
    })

}

const behind = document.querySelector('.behind-modal3');

natSelector.addEventListener('click', showOtherNats)
natSelector2015.addEventListener('click', showOtherNats2015)
natSelector2014.addEventListener('click', showOtherNats2014)
natSelector2013.addEventListener('click', showOtherNats2013)
natSelector2010.addEventListener('click', showOtherNats2010)