export default function hamburger() {
  const menuBtn = document.getElementById('menuBtn');
  const headerMenu = document.getElementById('header__menu');
  const headerMenuCover = document.getElementById('header__menuCover');

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('menuBtn--open');
    headerMenu.classList.toggle('header__menu--show');
    headerMenuCover.classList.toggle('header__menuCover--show');
  });
}
