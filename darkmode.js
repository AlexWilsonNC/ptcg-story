
const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
const topnavr = document.getElementById('top-navr');
const menu = document.getElementById('menu');
const menuToggle = document.getElementById('menuToggle');
const navleftr = document.getElementById('nav-leftr');
toggle.onclick = function(){
    toggle.classList.toggle('darkon')
    body.classList.toggle('darkon')
    topnavr.classList.toggle('darkon')
    menu.classList.toggle('darkon')
    menuToggle.classList.toggle('darkon')
    navleftr.classList.toggle('darkon')
}