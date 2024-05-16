const headerDownloadBtn = document.getElementById('header-download-btn');
const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menu-btn');
const productivity = document.getElementById('productivity');

const productivityOffset = productivity.offsetTop;

menuBtn.addEventListener('click', () => {
  sidebar.classList.add('show');
});

window.addEventListener('click', e => {
  if (e.target === sidebar) {
    sidebar.classList.add('hide');
    setTimeout(() => (sidebar.className = 'header__sidebar'), 200);
  }
});

window.onscroll = () => {
  if (window.pageYOffset > productivityOffset - 10) {
    headerDownloadBtn.classList.add('show');
  } else {
    headerDownloadBtn.classList.remove('show');
  }
};
