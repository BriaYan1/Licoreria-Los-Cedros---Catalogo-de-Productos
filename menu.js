openMenu = document.querySelector('#open')
closeMenu = document.querySelector('#close')
menu = document.querySelector('#menu')

openMenu.addEventListener('click', () => {
    menu.classList.add('visible')
})

closeMenu.addEventListener('click', () => {
    menu.classList.remove('visible')
})