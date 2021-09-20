// Menu burger 

const burger = document.querySelector(".header-burger");
const menu = document.querySelector(".header-nav");

burger.addEventListener("click", ()=>{
    burger.classList.toggle("active");
    menu.classList.toggle("active");
});

//

//

// const textAnim = document.querySelector('h1');

// new Typewriter(textAnim, {
//     loop: true,
//     //deleteSpeed: 20 // Vitesse a laquelle le text s'efface
// })
// //.changeDelay(20) 
// .typeString("Hey moi c'est LN,")
// .pauseFor(1000)
// .typeString('<span style="color: #eb0404"> Dev FrontEnd.</span>')
// .pauseFor(1000)
// .deleteChars(13)
// .typeString('<span style="color: #04eb51"> Passioné de la programmation.</span>')
// .pauseFor(1000)
// .deleteChars(30)
// .typeString('<span style="color: #04ebdf"> Gamer PES.</span>')
// .pauseFor(1000)
// .deleteChars(10)
// .typeString('<span style="color: #edf104"> super social :).</span>')
// .pauseFor(10000)
// .start()

//

// Gestion du header au scroll
window.addEventListener('scroll', (e)=>{
    let header = document.querySelector('.header');
    let header_arrow = document.querySelector('.header-arrow');
    let header_burger = document.querySelector('.header-burger');
    header.classList.toggle('sticky', window.scrollY > 0);
    header_arrow.classList.toggle('arrow-hide', window.scrollY > 0);
    header_burger.classList.toggle('burger-show', window.scrollY > 0);
})
// Le rond qui suit le souris
const cursor = document.querySelector('.cursor');
const cursor2 = document.querySelector('.cursor2');

document.addEventListener('mouseover', (e)=>{
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px";
});
//




