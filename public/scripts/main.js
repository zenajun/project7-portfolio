'use strict';

var app = {};

app.hamburger = function () {
  $('#nav-icon3').click(function () {
    $('ul').toggleClass('active');
  });
};

app.closeHamburger = function () {
  $('.header__nav__list__item__link').click(function () {
    $('ul').removeClass('active');
    $('#nav-icon3').removeClass('open');
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
  app.hamburgerAnimate();
  app.smoothScroll();
};

$(function () {
  app.init();
});