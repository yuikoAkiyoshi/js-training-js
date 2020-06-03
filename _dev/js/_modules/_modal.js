export default function modalWindow() {
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const modal = document.getElementById('modal__window');
  const mask = document.getElementById('modal__mask');

  open.addEventListener('click', () => {
    modal.className = 'modal__window';
    mask.className = 'modal__mask';
  });
  close.addEventListener('click', () => {
    modal.className = 'modal__window--hidden';
    mask.className = 'modal__mask--hidden';
  });
  mask.addEventListener('click', () => {
    close.click();
  });
}
