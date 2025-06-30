 function toggleForms() {
      const login = document.getElementById("loginForm");
      const signup = document.getElementById("signupForm");
      login.classList.toggle("hidden");
      signup.classList.toggle("hidden");
    }


//  this using the sidebar function 

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const body = document.body;

  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");

  // Disable scroll when sidebar is active
  if (sidebar.classList.contains("active")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
}

// This are the slider section code in a Javascript 
let currentIndex = 0;
const slider = document.getElementById('sliderImages');
const slides = document.querySelectorAll('.slider-img img');
const totalSlides = slides.length;

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}vw)`;
}

function changeSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) currentIndex = totalSlides - 1;
  if (currentIndex >= totalSlides) currentIndex = 0;

  showSlide(currentIndex);
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}, 3000);


//  There are Top Deals section Code 
const leftBtn = document.querySelector('.btn-1');
const rightBtn = document.querySelector('.btn-2');
const track = document.getElementById('carousel-track');

const scrollAmount = 150 * 3;

leftBtn.addEventListener('click', () => {
  track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
  track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

function scrollProducts(direction) {
  const container = document.getElementById('product-carousel');
  const card = container.querySelector('.product-img');
  const cardWidth = card.offsetWidth + 20;
  container.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
}

// this is  bottom to Top moving Scroll click button 

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}