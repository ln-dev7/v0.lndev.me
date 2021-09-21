let toggleMode = document.querySelector('.toggle-mode')
let body = document.querySelector('body')
let headerImg = document.querySelector('.header-img')
let navigationLogo = document.querySelectorAll('.navigation-logo')
let navigationMenu = document.querySelector('.navigation-menu')
toggleMode.addEventListener('click', () => {
    toggleMode.classList.toggle('active')
    body.classList.toggle('active')
    if (body.classList.contains('active')) {
        headerImg.innerHTML = '<img src="img/ln3.png" alt="">'
    } else {
        headerImg.innerHTML = '<img src="img/ln.png" alt="">'
    }
    navigationLogo.forEach(element => {
        element.classList.toggle('active-mode')
    });
    navigationMenu.classList.toggle('active-mode')
})

let navBurger = document.querySelector('.navigation-burger');
let navMenu = document.querySelector('.navigation-menu');

navBurger.addEventListener('click', () => {
    navBurger.classList.toggle('active');
    if(navBurger.classList.contains('active')){
        navMenu.classList.add('active');
    }else{
        navMenu.classList.remove('active');
    }
})
