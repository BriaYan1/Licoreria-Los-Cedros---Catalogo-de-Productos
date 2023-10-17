const openMenu = document.querySelector('#open');
const closeMenu = document.querySelector('#close');
const menu = document.querySelector('#menu');

openMenu.addEventListener('click', () => {
    menu.classList.add('opened');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('opened');
});
