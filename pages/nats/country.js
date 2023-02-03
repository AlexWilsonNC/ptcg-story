const natSelector = document.querySelector('.open-country-nats');

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

const behind = document.querySelector('.behind-modal3');

natSelector.addEventListener('click', showOtherNats)