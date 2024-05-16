// Slick Carousel
$(document).ready(() => {
  $('.stories-section__slick').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: null,
    nextArrow: null,
    infinite: true,
    draggable: false,
    customPaging: () => '<span class="dot"></span>',
    speed: 2000,
    centerPadding: '20px',
    centerMode: true,
    slidesToShow: 1
  });
});

// Sidemenu
const menu = document.getElementById('menu');
const closeMenu = document.getElementById('close-menu');
const sidemenu = document.getElementById('sidemenu');

menu.addEventListener('click', () => {
  sidemenu.style.transform = 'translateX(0)';
});

closeMenu.addEventListener('click', () => {
  sidemenu.style.transform = 'translateX(-100%)';
});

// Sticky Header
const header = document.querySelector('.sticky-header');
const headerOffset = header.offsetTop;

window.onscroll = () => {
  if (window.pageYOffset > headerOffset) {
    header.classList.add('show');
  } else {
    header.classList.remove('show');
  }
};
