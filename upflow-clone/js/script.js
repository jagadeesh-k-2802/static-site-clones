// Set Dynamic Year
const dynamicYear = document.querySelector('.dynamic-year');
dynamicYear.textContent = new Date().getFullYear();

// Animate Header On Scroll
const header = document.querySelector('.main-header');
const headerOffset = header.offsetTop;

window.onscroll = () => {
  if (window.pageYOffset > headerOffset) {
    header.classList.add('sticky-header');
  } else {
    header.classList.remove('sticky-header');
  }
};

