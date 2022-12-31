// Gestion du dark-mode 
let body = document.querySelector('body')
let toggleMode = document.querySelector('.toggle-mode')

toggleMode.addEventListener('click', () => {
    body.classList.toggle('dark-mode')
})

// Boutton remonter en haut
window.addEventListener('scroll', (e) => {
    let arrow = document.querySelector('.arrow');
    arrow.classList.toggle('arrow-hidde', window.scrollY > (screen.height) / 2);
})