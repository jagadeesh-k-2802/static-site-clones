// Animate Header On Scroll
const header = document.querySelector('.header');
const headerOffset = header.offsetTop;

window.onscroll = () => {
  if (window.pageYOffset - 140 > headerOffset && window.innerWidth >= 768) {
    header.classList.add('hide-notice');
  } else {
    header.classList.remove('hide-notice');
  }
};
