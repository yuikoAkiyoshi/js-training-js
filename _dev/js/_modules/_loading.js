export default function loadingAction() {
  const loading = document.getElementById('loading');
  const wrapper = document.getElementById('wrapper');
  const loadingDots = document.getElementsByClassName('loading__dot');

  // 変数の定義
  const lastNum = loadingDots.length;
  let currentNum = 0;
  // 関数の定義
  function removeActiveClass() {
    for (let i = 0; i < lastNum; i += 1) {
      loadingDots[i].className = 'loading__dot';
    }
  }
  function addActiveClass() {
    loadingDots[currentNum].classList.add('loading__dot--active');
  }
  function changeSlide() {
    removeActiveClass();
    addActiveClass();
  }

  // 発火処理
  let timeoutId;
  function startTimer() {
    timeoutId = setInterval(() => {
      if (currentNum === lastNum) {
        changeSlide();
        currentNum = 0;
      } else {
        changeSlide();
        currentNum += 1;
      }
    }, 500);
  }
  function stopTimer() {
    clearInterval(timeoutId);
  }

  // 実行
  window.addEventListener('load', () => {
    startTimer();
    setTimeout(() => {
      loading.classList.add('loading--hidden');
      wrapper.classList.add('wrapper--show');
      stopTimer();
    }, 2500);
  });
  // リロードするを押すとリロード
  const reloadBtn = document.getElementById('reload');
  reloadBtn.addEventListener('click', () => {
    window.location.reload();
  });
}
