'use strict';

var app = {};

app.hamburger = function () {
  $('#nav-icon3').click(function () {
    $('ul').toggleClass('active slideInDown');
    app.header();
  });
};

app.closeHamburger = function () {
  $('.header__nav__list__item__link').click(function () {
    $('ul').toggleClass('active');
    app.header();
  });
};

app.header = function () {
  var $navHeight = $('.header__nav').height();
  var $windowHeight = $(window).height();
  var $heroHeight = Math.floor(100 - 100 * $navHeight / $windowHeight);

  $('.header__hero').css({
    'height': $heroHeight + 'vh'
  });
};

app.hamburgerAnimate = function () {
  $('#nav-icon3').click(function () {
    $(this).toggleClass('open');
  });
};

app.init = function () {
  app.hamburger();
  app.closeHamburger();
  app.header();
  app.hamburgerAnimate();
};

$(function () {
  app.init();
});