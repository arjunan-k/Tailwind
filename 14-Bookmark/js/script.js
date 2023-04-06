const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')

tabs.forEach(tab => {
    tab.addEventListener('click', onTabClick)
})

function onTabClick(e) {
    // Deactivate all tabs
    tabs.forEach(tab => {
        tab.children[0].classList.remove('border-softRed', 'border-b-4', 'md:border-b-0')
    })

    // Hide all panels
    panels.forEach(panel => {
        panel.classList.add('hidden')
        panel.classList.remove('flex')
    })

    // Activate a new tab and panel based on target
    e.target.classList.add('border-softRed', 'border-b-4')

    const classString = e.target.getAttribute('data-target')

    document.getElementById('panels')
    .getElementsByClassName(classString)[0].classList.remove('hidden')
    document.getElementById('panels')
    .getElementsByClassName(classString)[0].classList.add('flex')
    
}

// Hamburger
const menu_btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const logo = document.getElementById('logo');

menu_btn.addEventListener('click', toggleBtn)

function toggleBtn() {
    menu_btn.classList.toggle('open')
    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')

    if(menu.classList.contains('flex')) {
        logo.setAttribute('src', './img/logo-bookmark-footer.svg')
    } else {
        logo.setAttribute('src', './img/logo-bookmark.svg')
    }
}