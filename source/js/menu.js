var nav = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var headerTop = document.querySelector('.header__top');
var header = document.querySelector('.header--index');

nav.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (nav.classList.contains('main-nav--closed')) {
    nav.classList.remove('main-nav--closed');
    nav.classList.add('main-nav--opened');
    headerTop.style.backgroundColor = '#283645';
    header.classList.remove('header--bg-top');
    header.classList.add('header--bg-center');
  } else {
    nav.classList.add('main-nav--closed');
    nav.classList.remove('main-nav--opened');
    headerTop.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    header.classList.add('header--bg-top');
    header.classList.remove('header--bg-center');
  }
});
