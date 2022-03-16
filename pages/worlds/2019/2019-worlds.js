const list = document.querySelector('.masters-ol');

let masters = [
  {
    firstName: 'Henry Brand',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/mewtwo.png',
    sprite2: '../../../assets/sprites/mew.png',
    list: '../../../assets/list-icon.jpg'
  },
  {
    firstName: 'Shintaro Ito',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../assets/sprites/blacephalon.png',
    sprite2: '../assets/sprites/naganadel.png',
    list: '../../../assets/list-icon.jpg'
  },
]

function displayList(array = []) {
  list.innerHTML = '';

  for (let i = 0; i < array.length; i++) {
    let item = array[i];

    let item_element = document.createElement('li');
    item_element.classList.add('player-list-hover');

    let title = document.createElement('li');
    title.classList.add('results-list-item');
    let playerName = document.createElement('div');
    playerName.classList.add('name-n-flag');

    let flagImg = document.createElement('img');
    flagImg.classList.add('flag-size');
    document.querySelectorAll('flag-size').src = item.flag;
    
    playerName.innerHTML = item.flag + " " + item.firstName;

    item_element.appendChild(title);
    title.appendChild(playerName);

    if (item.list === '../../../assets/list-icon.jpg') {
      item_element.addEventListener('click', function () {
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
        document.querySelector('.playerName').innerHTML = item.firstName;
      })
    }

    // let cs = document.createElement('div');
    // cs.classList.add('item-point');
    // cs.innerHTML = item.csPoints;

    // item_element.appendChild(cs);

    list.appendChild(item_element);
  }
}

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

modalX.addEventListener('click', () => {
  modal.style.display = 'none';
  behind.style.display = 'none';
})
behind.addEventListener('click', () => {
  modal.style.display = 'none';
  behind.style.display = 'none';
})

// window.onload = 
displayList(masters);
