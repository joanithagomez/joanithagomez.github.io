$(document).ready(function() {

  $('.title-container').velocity("transition.slideDownBigIn");

  $('.img-container').velocity("transition.slideDownBigIn", {
    display: "block"
  });
  $('.about-text').velocity("transition.slideDownBigIn", {
    display: "flex"
  });
  var state = "closed";

  function closeNavbar() {
    $('.menu-overlay').velocity('transition.slideRightBigOut');
    state = "closed";
  }


  $('.nav-icon').on('click', function(event) {
    event.stopPropagation();

    var handle = function() {
      closeNavbar();
      $("body").off(".validator");
    };


    if (state === "closed") {

      $('.menu-overlay').velocity('transition.slideRightBigIn');
      $('body').on("click.validator", handle);
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


  $('.say-hello').on("click", function() {
    closeNavbar();
    $('html, body').animate({
      scrollTop: $(".contact-page").offset().top
    }, 1000);
  });
});
