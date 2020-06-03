export default function calusel() {
  const dropdownItems = document.getElementsByClassName('dropdown__item');
  const dropdownSubItems = document.getElementsByClassName('dropdown__subItem');
  function changeDropdownMenu(n) {
    dropdownItems[n].addEventListener('mouseover', () => {
      dropdownItems[n].classList.add('dropdown__item--active');
      dropdownSubItems[n].classList.add('dropdown__subItem--active');
    });
    dropdownItems[n].addEventListener('mouseout', () => {
      dropdownItems[n].classList.remove('dropdown__item--active');
      dropdownSubItems[n].classList.remove('dropdown__subItem--active');
    });
  }
  changeDropdownMenu(0);
  changeDropdownMenu(1);
  changeDropdownMenu(2);
  changeDropdownMenu(3);
}
