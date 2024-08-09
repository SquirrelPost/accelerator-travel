const mainNav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

const initOverlay = () => {
  document.body.classList.add('page-body--overlay');
};

const removeOverlay = () => {
  document.body.classList.remove('page-body--overlay');
};

const onNavToggleClick = () => {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
    initOverlay();
  } else {
    mainNav.classList.remove('main-nav--opened');
    mainNav.classList.add('main-nav--closed');
    removeOverlay();
  }
};

const initNav = () => {
  navToggle.addEventListener('click', onNavToggleClick);
};

export { initNav };
