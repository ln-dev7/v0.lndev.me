const navBurger = document.querySelector('.navigation-burger');
const navMenu = document.querySelector('.navigation-menu');

navBurger.addEventListener('click', () => {
    navBurger.classList.toggle('burger-active');
    if(navBurger.classList.contains('burger-active')){
        navMenu.classList.add('burger-active');
    }else{
        navMenu.classList.remove('burger-active');
    }
})