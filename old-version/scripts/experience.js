const faqs = document.querySelectorAll(".faq-card");
faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active')
  })
});