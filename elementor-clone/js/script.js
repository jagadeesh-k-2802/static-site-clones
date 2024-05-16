const SIZES = {
  SM: 600,
  MD: 768,
  LG: 1024
};

const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const menuDrawer = document.getElementById('menu-drawer');

menuBtn.addEventListener('click', () => {
  closeBtn.style.display = 'block';
  menuBtn.style.display = 'none';
  menuDrawer.style.transform = 'scaleY(1)';
});

closeBtn.addEventListener('click', () => {
  menuBtn.style.display = 'block';
  closeBtn.style.display = 'none';
  menuDrawer.style.transform = 'scaleY(0)';
});

// Carousels
const heroSwiper = new Swiper('#hero-swiper', {
  watchOverflow: true,
  loop: true,
  pagination: { el: '#hero-swiper-pagination' },
  breakpoints: {
    [SIZES.SM]: { slidesPerView: 1, spaceBetween: 20 },
    [SIZES.MD]: { slidesPerView: 2, spaceBetween: 30 },
    [SIZES.LG]: { slidesPerView: 3, spaceBetween: 40 }
  }
});

const showcaseSwiper = new Swiper('#showcase-swiper', {
  autoplay: { delay: 3000 },
  effect: 'fade',
  watchOverflow: true,
  loop: true
});

const testimonialsSwiper = new Swiper('#testimonials-swiper', {
  autoplay: { delay: 3000, disableOnInteraction: false },
  pagination: { el: '#testimonials-pagination' },
  loop: true,
  breakpoints: {
    [SIZES.SM]: { slidesPerView: 1, spaceBetween: 20 },
    [SIZES.MD]: { slidesPerView: 1, spaceBetween: 20 },
    [SIZES.LG]: { slidesPerView: 3, spaceBetween: 20 }
  }
});
