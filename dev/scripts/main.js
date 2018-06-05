const app = {};

app.hamburger = () => {
  $('#nav-icon3').click(() => {
    $('ul').toggleClass('active');
    app.header();  
  });
}

app.closeHamburger = () => {
  $('.header__nav__list__item__link').click(() => {
    $('ul').removeClass('active');
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

app.smoothScroll = () => {
  $("a").on('click', function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    } 
  });
}

app.init = () => {
  app.hamburger();
  app.closeHamburger();
  app.header();
  app.hamburgerAnimate();
  app.smoothScroll();
}

$(function() {
  app.init();
});
