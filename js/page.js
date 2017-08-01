$(document).ready(function() {

  $('.title-container').velocity("transition.slideDownBigIn");

  $('.img-container').velocity("transition.slideDownBigIn");
  $('.about-text').velocity("transition.slideDownBigIn", {
    display: "flex"
  });
  var state = "closed";

  function closeNavbar() {

    $(".menu").velocity("transition.fadeOut", {
      duration: 300
    });
    $(".menu-overlay").velocity({
      width: "0%"
    }, {
      duration: 300
    });
    state = "closed";
  }

  $(window).on("scroll", function() {
    if (($(window).scrollTop() > 780) && ($(window).scrollTop() < 2700)) {
      $(".side-bar").addClass("on-blue");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $(".side-bar").removeClass("on-blue");
    }
  });

  $('.nav-icon').on('click', function(event) {
    event.stopPropagation();

    var handle = function() {
      closeNavbar();
      $("body").off(".validator");
    };


    if (state === "closed") {


      if ($(window).width() <= 768) {
        $('.menu-overlay').velocity({
          width: "80%"
        });
      } else {
        $('.menu-overlay').velocity({
          width: "30%"
        });
      }
      $(".menu").velocity("transition.fadeIn");

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
