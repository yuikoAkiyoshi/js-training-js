export default function smoothScroll() {
  const smoothScrollBtn = document.getElementById('smoothScroll');
  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  smoothScrollBtn.addEventListener('click', () => {
    goTop();
  });
}
