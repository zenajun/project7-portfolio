'use strict';

var app = {};

app.hamburger = function () {
  $('.menu').click(function () {
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
app.init = function () {
  app.hamburger();
  app.header();
};

$(function () {
  app.init();
});