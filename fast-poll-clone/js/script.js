// Show Fixed Header On Scroll
const fixedHeader = document.querySelector('.fixed-header');
const headerOffset = fixedHeader.offsetTop;

window.onscroll = () => {
  if (window.pageYOffset - 1000 > headerOffset) {
    fixedHeader.classList.add('visible');
  } else {
    fixedHeader.classList.remove('visible');
  }
};

// Mobile Menu
const menuBtn = document.getElementById('menu-btn');
const mobileNav = document.getElementById('mobile-nav');

menuBtn.addEventListener('click', () => {
  const animationOptions = { duration: 300, iterations: 1 };
  menuBtn.classList.toggle('is-open');
  document.body.classList.toggle('no-scroll');

  if (mobileNav.style.display === 'flex') {
    const player = mobileNav.animate(
      [{ opacity: '1' }, { opacity: '0' }],
      animationOptions
    );

    player.onfinish = () => (mobileNav.style.display = 'none');
  } else {
    mobileNav.animate([{ opacity: '0' }, { opacity: '1' }], animationOptions);
    mobileNav.style.display = 'flex';
  }
});
