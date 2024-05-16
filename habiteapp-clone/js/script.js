// Animate Header On Scroll
const header = document.querySelector('.header');
const headerOffset = header.offsetTop;

window.onscroll = () => {
  if (window.pageYOffset - 150 > headerOffset) {
    if (!header.classList.contains('sticky-header')) {
      header.classList.add('sticky-header');
    }
  } else {
    header.classList.remove('sticky-header');
  }
};

// Menu Button
const menuBtn = document.querySelector('.nav__menu-btn');
const mobileNav = document.querySelector('.wrapper__mobile-nav');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('nav__menu-btn--show');
  mobileNav.classList.toggle('wrapper__mobile-nav--show');

  if (!menuBtn.classList.contains('nav__menu-btn--show')) {
    menuBtn.classList.add('nav__menu-btn--collapsing');

    setTimeout(
      () => menuBtn.classList.remove('nav__menu-btn--collapsing'),
      500
    );
  }

  if (!mobileNav.classList.contains('wrapper__mobile-nav--show')) {
    mobileNav.classList.add('wrapper__mobile-nav--collapsing');

    setTimeout(
      () => mobileNav.classList.remove('wrapper__mobile-nav--collapsing'),
      300
    );
  }
});
