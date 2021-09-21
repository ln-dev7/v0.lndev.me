let toggleMode = document.querySelector('.toggle-mode')
let body = document.querySelector('body')
let headerImg = document.querySelector('.header-img')
let navigationLogo = document.querySelector('.navigation-logo')
toggleMode.addEventListener('click', ()=>{
    toggleMode.classList.toggle('active')
    body.classList.toggle('active')
    if (body.classList.contains('active')) {
        headerImg.innerHTML = '<img src="img/ln3.png" alt="">'
    } else {
        headerImg.innerHTML = '<img src="img/ln.png" alt="">'
    }
    navigationLogo.classList.toggle('active')
})
