$(document).ready(function() {
 
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 100) {
      $(".nav-bar").addClass("shrink");
    } else {
      $(".nav-bar").removeClass("shrink");
    }
  });

  $('#menu').on('click', () => {
    if ($('#menu').attr('class') === 'menubtn') {
      $(".menubtn").addClass("responsive");
      console.log(true);
    }
    else {
      console.log($('#menu').attr('class'));
      $(".menubtn").removeClass("responsive");
    }
  });

});
