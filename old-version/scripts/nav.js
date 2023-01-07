let burger = document.querySelector(".navigation-burger");
let nav = document.querySelector(".navigation");

var lastScrollTop = 0;

window.addEventListener(
  "scroll",
  function () {
    if (!burger.classList.contains("active")) {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        nav.classList.add("fixed");
      }
      if (st < lastScrollTop) {
        nav.classList.remove("fixed");
      }
      if (window.scrollY == 0) {
        nav.classList.remove("fixed");
      }
      lastScrollTop = st;
    }
  },
  false
);

const bodyWrapper = document.querySelector("body");
const close = document.querySelector(".close-menu");

burger.addEventListener("click", (e) => {
  bodyWrapper.classList.add("wrap");
});

close.addEventListener("click", (e) => {
  bodyWrapper.classList.remove("wrap");
});

const itemsMenu = document.querySelectorAll(".wrapper-menu ul li a");
itemsMenu.forEach((element) => {
  element.addEventListener("click", (e) => {
    body.classList.remove("wrap");
  });
});

// When click outside the menu close it
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("wrapper")) {
    bodyWrapper.classList.remove("wrap");
  }
});

// Guirlande de Noël

var date = new Date();
var jour = date.getDate();
var mois = date.getMonth() + 1; // Janvier est le mois 0

if ((mois == 12 && jour >= 1) || (mois == 1 && jour <= 7)) {
  const guirlandes = document.querySelectorAll(".guirlande");
  guirlandes.forEach((guirlande) => {
    guirlande.style.display = "block";
  });
} else {
  const guirlandes = document.querySelectorAll(".guirlande");
  guirlandes.forEach((guirlande) => {
    guirlande.style.display = "none";
  });
}
