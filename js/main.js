// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Contact Form Fake Submit (frontend only)
const form = document.querySelector(".contact-form");
if(form){
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you! Our team will contact you shortly.");
    form.reset();
  });
}
