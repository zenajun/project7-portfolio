const app = {};

app.hamburger = () => {
  $('#nav-icon3').click(() => {
    $('ul').toggleClass('active');
  });
}

app.closeHamburger = () => {
  $('.header__nav__list__item__link').click(() => {
    $('ul').removeClass('active');
    $('#nav-icon3').removeClass('open');
  });
}

app.hamburgerAnimate = () => {
  $('#nav-icon3').click(function () {
    $(this).toggleClass('open');
  });
}

app.footerCopy = () => {
  const date = new Date();
  const year = date.getFullYear();
  const span = $('span.year')
  span.text(year)  
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
  app.hamburgerAnimate();
  app.smoothScroll();
  app.footerCopy();
}

$(function() {
  app.init();
});
