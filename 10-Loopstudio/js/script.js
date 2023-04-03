const menu_btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const menu_link = document.querySelectorAll('#menu a')

menu_btn.addEventListener('click', navToggle)
menu_link.forEach(element => {
    element.addEventListener('click', closeNav);
})

function navToggle() {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
    menu_btn.classList.toggle('open');
}

function closeNav() {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
    menu_btn.classList.toggle('open');
}