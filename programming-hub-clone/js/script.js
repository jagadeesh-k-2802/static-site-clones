const video = document.getElementById('video');
const playBtn = document.getElementById('play-btn');
const tabs = document.getElementById('tabs');
const tabContent = document.getElementById('tab-content');
const tabUnderline = document.getElementById('tab-underline');

// Play Video
playBtn.addEventListener('click', () => {
  video.setAttribute('controls', 'true');
  video.play();
  video.requestFullscreen();
  playBtn.remove();
});

// Setup Owl Carousel For Blog Posts
$(document).ready(() => {
  $('.owl-carousel').owlCarousel({
    dots: false,
    nav: false,
    items: 3,
    margin: 10,
    responsive: {
      0: { items: 1 },
      576: {items: 2},
      768: { items: 3 }
    }
  });

  $('.awards-carousel').owlCarousel({
    dots: false,
    nav: false,
    items: 1,
    margin: 10
  });

  // Custom Prev/Next Buttons
  const owl = $('.owl-carousel');
  $('#carousel-left').click(() => owl.trigger('prev.owl.carousel'));
  $('#carousel-right').click(() => owl.trigger('next.owl.carousel'));
});

// Tabs
tabs.addEventListener('click', e => {
  Array.from(tabs.children).forEach(el => {
    el.classList.remove('active');
  });

  const tab = e.target;
  const id = +tab.id.split('-')[1] - 1;

  // Ripple
  const circle = document.createElement('span');
  const diameter = Math.max(tab.clientWidth, tab.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${e.clientX - (tab.offsetLeft + radius)}px`;
  circle.style.top = `${e.clientY - (tab.offsetTop + radius)}px`;
  circle.classList.add('ripple');

  const ripple = tab.getElementsByClassName('ripple')[0];

  if (ripple) {
    ripple.remove();
  }

  tab.appendChild(circle);

  tab.classList.add('active');
  tabContent.style.transform = `translate(${-100 * id}%, 0px)`;

  const pixelsToMove = (tabContent.clientWidth / 3) * id;
  tabUnderline.style.transform = `translateX(${pixelsToMove}px)`;
});
