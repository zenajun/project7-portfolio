$(function() {
  // Hamburger menu
  $('.menu').click(() => {
    $('ul').toggleClass('active');  
    header();  
  });  // Hamburger menu end viewport height

  const header = () => {
    const $navHeight = $('.header__nav').height();
    const $windowHeight = $(window).height();
    const $heroHeight = Math.floor(100 - ((100 * $navHeight) / $windowHeight));
 
    $('.header__hero').css({
      'height': $heroHeight + 'vh'
    });
  }
  header();
});
