const monthToggleBtn = document.querySelector('#month-toggle-btn');
const yearToggleBtn = document.querySelector('#year-toggle-btn');

const pricePlansMonthly = document.querySelector('.pricing__plans--monthly');
const pricePlansYearly = document.querySelector('.pricing__plans--yearly');

const heroVideoPlayBtn = document.querySelector('.video__btn-container');
const vimeoPlayer = document.querySelector('.video__vimeo-player');

heroVideoPlayBtn.addEventListener('click', () => {
  vimeoPlayer.classList.remove('hide');
  vimeoPlayer.setAttribute('allow', 'autoplay; fullscreen');
});

monthToggleBtn.addEventListener('click', () => {
  if (monthToggleBtn.classList.contains('time-switch__btn--inactive')) {
    monthToggleBtn.classList.replace(
      'time-switch__btn--inactive',
      'time-switch__btn--active'
    );

    yearToggleBtn.classList.replace(
      'time-switch__btn--active',
      'time-switch__btn--inactive'
    );

    pricePlansMonthly.classList.remove('hide');
    pricePlansYearly.classList.add('hide');
  }
});

yearToggleBtn.addEventListener('click', () => {
  if (yearToggleBtn.classList.contains('time-switch__btn--inactive')) {
    yearToggleBtn.classList.replace(
      'time-switch__btn--inactive',
      'time-switch__btn--active'
    );

    monthToggleBtn.classList.replace(
      'time-switch__btn--active',
      'time-switch__btn--inactive'
    );

    pricePlansYearly.classList.remove('hide');
    pricePlansMonthly.classList.add('hide');
  }
});
