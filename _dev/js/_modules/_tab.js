export default function tab() {
  const tabs = document.getElementsByClassName('tab__item');
  const tabContents = document.getElementsByClassName('tab__content');

  function removeActive() {
    for (let i = 0; i < tabs.length; i += 1) {
      tabs[i].className = 'tab__item';
      tabContents[i].className = 'tab__content';
    }
  }

  function changeTab(n) {
    tabs[n].addEventListener('click', () => {
      if (tabs[n].classList.contains('tab__item--active') === false) {
        removeActive();
        tabs[n].classList.add('tab__item--active');
        tabContents[n].classList.add('tab__content--active');
      }
    });
  }
  changeTab(0);
  changeTab(1);
  changeTab(2);
  changeTab(3);
}
