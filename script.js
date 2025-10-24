// Animation with JS
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }else{
            entry.target.classList.remove("show")
        };
    });
},{});
const Elements = document.querySelectorAll(".container");
const Elements2 = document.querySelectorAll(".about");
const Elements3 = document.querySelectorAll(".Menu");
const Elements4 = document.querySelectorAll(".reservations")
Elements.forEach(el => observer.observe(el));
Elements2.forEach(el => observer.observe(el));
Elements3.forEach(el => observer.observe(el));
Elements4.forEach(el => observer.observe(el));

// Slider Effect
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(changeSlide, 3000); 

// Navbar links click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); 
    const targetId = this.getAttribute('href'); 
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
}); 
