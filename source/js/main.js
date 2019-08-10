//Реализация выпадающего окна на мобильной версии сайта
var navMain = document.querySelector('.main-nav');
var navUser = document.querySelector('.user-nav');
var navToogle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');
navUser.classList.remove('user-nav--nojs');
navToogle.classList.remove('menu-toggle--nojs');

navToogle.addEventListener('click', function () {
  if (navToogle.classList.contains('menu-toggle--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navUser.classList.remove('user-nav--closed');
    navUser.classList.add('user-nav--opened');
    navToogle.classList.remove('menu-toggle--closed');
    navToogle.classList.add("menu-toggle--opened");
  } else {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
    navUser.classList.remove('user-nav--opened');
    navUser.classList.add('user-nav--closed');
    navToogle.classList.remove("menu-toggle--opened");
    navToogle.classList.add('menu-toggle--closed');
  }
});
