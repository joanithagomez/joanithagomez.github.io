$(document).ready(function() {
 
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 100) {
      $(".nav-bar").addClass("shrink");
    } else {
      $(".nav-bar").removeClass("shrink");
    }
  });

});
