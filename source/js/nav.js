const mainNav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const siteLinks = document.querySelectorAll('.site__link');

const initOverlay = () => {
  document.body.classList.add('page-body--overlay');
};

const removeOverlay = () => {
  document.body.classList.remove('page-body--overlay');
};

const showNav = () => {
  mainNav.classList.remove('main-nav--closed');
  mainNav.classList.add('main-nav--opened');
  initOverlay();
};

const hideNav = () => {
  mainNav.classList.remove('main-nav--opened');
  mainNav.classList.add('main-nav--closed');
  removeOverlay();
};

const onNavToggleClick = () => {
  if (mainNav.classList.contains('main-nav--closed')) {
    showNav();
  } else {
    hideNav();
  }
};

const onSiteLinkClick = () => {
  hideNav();
};

const initNav = () => {
  navToggle.addEventListener('click', onNavToggleClick);
  siteLinks?.forEach((link) => {
    link.addEventListener('click', onSiteLinkClick);
  });
};

export { initNav };
