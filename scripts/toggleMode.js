let don = document.querySelector('.don')
let donClose = document.querySelector('.don-close')
let modal = document.querySelector('#modal')

don.addEventListener('click', () => {
    modal.classList.add('active')
})
donClose.addEventListener('click', () => {
    modal.classList.remove('active')
})

// Gestion du dark-mode 
let body = document.querySelector('body')
let toggleMode = document.querySelector('.toggle-mode')

toggleMode.addEventListener('click', () => {
    body.classList.toggle('active')
})

// Menu burger
let navBurger = document.querySelector('.navigation-burger');
let navMenu = document.querySelector('.navigation-menu');

navBurger.addEventListener('click', () => {
    navBurger.classList.toggle('active');
    if (navBurger.classList.contains('active')) {
        navMenu.classList.add('active');
    } else {
        navMenu.classList.remove('active');
    }
})

// Boutton remonter en haut
window.addEventListener('scroll', (e) => {
    let arrow = document.querySelector('.arrow');
    arrow.classList.toggle('arrow-hidde', window.scrollY > (screen.height) / 2);
})