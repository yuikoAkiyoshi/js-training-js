export default function clusel() {
  // 要素の取得
  const slides = document.getElementsByClassName('slide');
  const dot = document.getElementsByClassName('dot');

  // ここから自動再生
  // 変数の定義
  const lastNum = slides.length - 1;
  let currentNum = 0;
  // 関数の定義
  function removeActiveClass() {
    for (let i = 0; i <= lastNum; i += 1) {
      slides[i].className = 'slide';
      dot[i].className = 'dot';
    }
  }
  function addActiveClass() {
    slides[currentNum].classList.add('slide--active');
    dot[currentNum].classList.add('dot--active');
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
    }, 2000);
  }
  // 消火処理
  function stopTimer() {
    clearInterval(timeoutId);
  }
  // 発火
  startTimer();

  // ここから手動切り替え
  // ドットがクリックされた時の処理
  function dotClick(n) {
    dot[n].addEventListener('click', () => {
      if (dot[n].classList.contains('dot--active') === false) {
        stopTimer();
        currentNum = n;
        changeSlide();
        startTimer();
      }
    });
  }
  // &__実行
  dotClick(0);
  dotClick(1);
  dotClick(2);
  dotClick(3);

  // ここから次へ前へボタン
  // 前へ
  const prev = document.getElementById('prev');
  prev.addEventListener('click', () => {
    removeActiveClass();
    currentNum -= 1;
    if (currentNum < 0) {
      currentNum = lastNum;
    }
    addActiveClass();
  });
  // 次へ
  const next = document.getElementById('next');
  next.addEventListener('click', () => {
    removeActiveClass();
    currentNum += 1;
    if (currentNum > lastNum) {
      currentNum = 0;
    }
    addActiveClass();
  });
}
