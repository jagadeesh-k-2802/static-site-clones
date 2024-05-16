const menuBtn = document.getElementById('menu');
const closeBtn = document.getElementById('close');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => sidebar.classList.add('show'));

closeBtn.addEventListener('click', () => {
  sidebar.classList.add('hide');
  setTimeout(() => (sidebar.classList = 'header__sidebar'), 200);
});

window.addEventListener('click', e => {
  e.target === sidebar && sidebar.classList.remove('show');
});
