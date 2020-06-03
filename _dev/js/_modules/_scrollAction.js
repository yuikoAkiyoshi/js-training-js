export default function scrollAction() {
  const sectionArea = document.getElementById('scrollAction');

  function animation() {
    const rect = sectionArea.getBoundingClientRect(); // オブジェクトのトップからの距離
    const scroll = window.pageYOffset || document.documentElement.scrollTop; // 現在のスクロール位置
    const target = rect.top + scroll; // ターゲットの位置を取得（var target = $(this).offset().top;)
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // スクロール量を取得（var scroll = $(window).scrollTop();
    const windowHeight = document.documentElement.clientHeight; // ウィンドウの高さを取得

    if (scrollTop > target - windowHeight + 400) {
      sectionArea.classList.add('scrollAction--active');
    } else {
      sectionArea.classList.remove('scrollAction--active');
    }
  }
  window.addEventListener('scroll', () => {
    setTimeout(() => {
      animation();
    }, 250);
  });
}
