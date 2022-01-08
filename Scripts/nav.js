let burger = document.querySelector('.navigation-burger');
let nav = document.querySelector('.navigation');

var lastScrollTop = 0;

window.addEventListener(
  "scroll",
  function () {
    if (!(burger.classList.contains("active"))) {
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