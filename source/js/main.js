const navMenu = document.querySelector('.menu-list');
const mainNav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMenu.classList.remove('main-nav--nojs');

if (navMenu.classList.contains('menu-list--opened')) {
  navMenu.classList.remove('menu-list--opened');
  navMenu.classList.add('menu-list--closed');
};

if (navMenu.classList.contains('main-nav--opened')) {
  mainNav.classList.remove('main-nav--opened');
  mainNav.classList.add('main-nav--closed');
};


navToggle.addEventListener('click', function() {
  if (navMenu.classList.contains('menu-list--closed')) {
    navMenu.classList.remove('menu-list--closed');
    navMenu.classList.add('menu-list--opened');
    mainNav.classList.add('main-nav--opened');
  }

  else {
    navMenu.classList.add('menu-list--closed');
    navMenu.classList.remove('menu-list--opened');
    mainNav.classList.remove('main-nav--opened');
  }
});
