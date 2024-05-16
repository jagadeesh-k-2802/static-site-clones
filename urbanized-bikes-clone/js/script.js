const menu = document.getElementById('menu');
const sidemenu = document.getElementById('sidemenu');
const slide = document.getElementById('slide');
const slideText = document.getElementById('slide-text');

// AOS
AOS.init({ offset: 120, once: true });

// Menu Button
menu.addEventListener('click', () => {
  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
    menu.classList.add('collapsing');
    sidemenu.style.transform = 'translateX(-100%)';
    setTimeout(() => menu.classList.remove('collapsing'), 300);
  } else {
    menu.classList.add('show');
    sidemenu.style.transform = 'translateX(0)';
  }
});

// Slide
const setSlideHeight = () => {
  if (window.innerWidth >= 980) {
    slide.style.height = '100%';
  } else {
    slide.style.height = `${window.innerWidth / 1.5}px`;
  }
};

document.addEventListener('DOMContentLoaded', setSlideHeight);
window.addEventListener('resize', setSlideHeight);

let slideNum = 1;

setInterval(() => {
  const previousSlide = slide.querySelector('.hero-section__slider__img');

  const nextSlide = document.createElement('div');
  nextSlide.className = 'hero-section__slider__img';
  nextSlide.style.animation = 'slideFromRight 2s ease-in-out';

  if (slideNum === 3) {
    slideNum = 1;
  } else {
    slideNum++;
  }

  nextSlide.style.backgroundImage = `url(/img/slide-${slideNum}.jpg)`;
  slide.appendChild(nextSlide);
  previousSlide.style.animation = 'slideToLeft 2s ease-in-out';
  setTimeout(() => previousSlide.remove(), 2000);
}, 5000);
