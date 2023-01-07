const scrollIndicator = document.querySelector(".scroll-indicator");
const content = document.querySelector("body");
const footer = document.querySelector(".footer");

const orbserver = new IntersectionObserver(handleIntersect);
orbserver.observe(content);

function handleIntersect(entries) {
  const el = entries[0];
  if (el.isIntersecting) {
    window.addEventListener("scroll", indicatorAnimation);
  } else {
    window.removeEventListener("scroll", indicatorAnimation);
  }
}

function indicatorAnimation() {
  if (window.scrollY > content.offsetTop) {
    const percentage = (
      ((window.scrollY - content.offsetTop) /
        (content.scrollHeight - footer.scrollHeight)) *
      100
    ).toFixed(2);
    scrollIndicator.style.transform = `scaleX(${percentage / 100})`;
    console.log(content.scrollHeight);
  } else {
    scrollIndicator.style.transform = `scaleX(0)`;
  }
}
