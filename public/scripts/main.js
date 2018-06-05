'use strict';

var app = {};

app.hamburger = function () {
  $('#nav-icon3').click(function () {
    $('ul').toggleClass('active');
    app.header();
  });
};

app.closeHamburger = function () {
  $('.header__nav__list__item__link').click(function () {
    $('ul').removeClass('active');
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

app.smoothScroll = function () {
  $("a").on('click', function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
};

app.init = function () {
  app.hamburger();
  app.closeHamburger();
  app.header();
  app.hamburgerAnimate();
  app.smoothScroll();
};

$(function () {
  app.init();
});