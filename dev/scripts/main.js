const app = {};

app.hamburger = () => {
  $('#nav-icon3').click(() => {
    $('ul').toggleClass('active slideInDown');
    app.header();  
  });
}

app.closeHamburger = () => {
  $('.header__nav__list__item__link').click(() => {
    $('ul').toggleClass('active');
    app.header();
  });
}

app.header = () => {
  const $navHeight = $('.header__nav').height();
  const $windowHeight = $(window).height();
  const $heroHeight = Math.floor(100 - ((100 * $navHeight) / $windowHeight));

  $('.header__hero').css({
    'height': $heroHeight + 'vh'
  });
}

app.hamburgerAnimate = () => {
  $('#nav-icon3').click(function () {
    $(this).toggleClass('open');
  });
}

app.init = () => {
  app.hamburger();
  app.closeHamburger();
  app.header();
  app.hamburgerAnimate();
}

$(function() {
  app.init();
});
