const button96 = document.querySelector('.button-1996');
const content96 = document.querySelector('.content-1996');
const button97 = document.querySelector('.button-1997');
const content97 = document.querySelector('.content-1997');
const button98 = document.querySelector('.button-1998');
const content98 = document.querySelector('.content-1998');
const button99 = document.querySelector('.button-1999');
const content99 = document.querySelector('.content-1999');
const button00 = document.querySelector('.button-2000');
const content00 = document.querySelector('.content-2000');
let isClicked = true;


function tl96() {
    if (isClicked) {
        content96.style.display = 'none';
        isClicked = false;
    } else {
        content96.style.display = 'flex';
        isClicked = true;
    }
}
function tl97() {
    if (isClicked) {
        content97.style.display = 'flex';
        isClicked = false;
    } else {
        content97.style.display = 'none';
        isClicked = true;
    }
}
function tl98() {
    if (isClicked) {
        content98.style.display = 'flex';
        isClicked = false;
    } else {
        content98.style.display = 'none';
        isClicked = true;
    }
}
function tl99() {
    if (isClicked) {
        content99.style.display = 'flex';
        isClicked = false;
    } else {
        content99.style.display = 'none';
        isClicked = true;
    }
}
function tl00() {
    if (isClicked) {
        content00.style.display = 'flex';
        isClicked = false;
    } else {
        content00.style.display = 'none';
        isClicked = true;
    }
}


button96.addEventListener('click', tl96)
button97.addEventListener('click', tl97)
button98.addEventListener('click', tl98)
button99.addEventListener('click', tl99)
button00.addEventListener('click', tl00)
