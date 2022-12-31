const mouse = document.querySelector("#mouse");

window.addEventListener("mousemove", (e) => {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
});

const links = document.querySelectorAll("a");
links.forEach((element) => {
  element.addEventListener("mouseover", (e) => {
    mouse.classList.add("mouse-hover");
  });
  element.addEventListener("mouseout", (e) => {
    mouse.classList.remove("mouse-hover");
  });
});
