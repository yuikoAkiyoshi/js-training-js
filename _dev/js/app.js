import hamburger from './_modules/_hamburger';
import tab from './_modules/_tab';
import modalWindow from './_modules/_modal';
import dropdown from './_modules/_dropdown';
import clusel from './_modules/_clusel';
import smoothScroll from './_modules/_smoothScroll';
import scrollAction from './_modules/_scrollAction';
import loadingAction from './_modules/_loading';

$(() => {
  loadingAction();
  hamburger();
  tab();
  modalWindow();
  dropdown();
  clusel();
  smoothScroll();
  scrollAction();
});
