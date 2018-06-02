'use strict';

$(function () {
  // Hamburger menu
  $('.menu').click(function () {
    $('ul').toggleClass('active');
    header();
  }); // Hamburger menu end viewport height

  var header = function header() {
    var $navHeight = $('.header__nav').height();
    var $windowHeight = $(window).height();
    var $heroHeight = Math.floor(100 - 100 * $navHeight / $windowHeight);

    $('.header__hero').css({
      'height': $heroHeight + 'vh'
    });
  };
  header();
});