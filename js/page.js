$(document).ready(function() {

  $('.title-container').velocity("transition.slideDownBigIn");

  var state = "closed";

  function closeNavbar() {
    $('.menu-overlay').velocity('transition.slideRightBigOut');
    state = "closed";
  }
  $('.navigation').on('click', function() {
    if (state === "closed") {
      $('.menu-overlay').velocity('transition.slideRightBigIn');
      state = "open";
    } else {
      closeNavbar();
    }
  });
  $('.home').on("click", function() {
    closeNavbar();
    $('html, body').animate({
      scrollTop: $(".title-container").offset().top
    }, 1000);
  });

  $('.work').on("click", function() {
    closeNavbar();

    $('html, body').animate({
      scrollTop: $(".work-container").offset().top
    }, 1000);

  });
  $('.say-hello').on("click", function() {
    closeNavbar();
    $('html, body').animate({
      scrollTop: $(".contact-page").offset().top
    }, 1000);
  });
});
