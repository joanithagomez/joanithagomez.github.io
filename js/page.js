$(document).ready(function() {
  // $('#too-bright').on('click', () => {
  //  console.log('too bright')
  // });

  // const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  // darkModeMediaQuery.addEventListener('change', (e) => {
  //   const darkModeOn = e.matches;
  //   console.log(`Dark mode is ${darkModeOn ? '🌒 on' : '☀️ off'}.`);
  // });
  stickNav();
  setNumberOfYears();
});

function stickNav() {
  let lastScroll = 0;
  $(window).scroll((event) => {
    let currentScroll = $(this).scrollTop();
    if (currentScroll <= 0) {
      $('.navbar ul').removeClass('box-shadow');
    } else {
      $('.navbar ul').addClass('box-shadow');
    }

    if (currentScroll - lastScroll < 0) {
      $( ".navbar" ).removeClass('hide');
      $( ".navbar" ).addClass('slide-down');
    } else {
      $( ".navbar" ).addClass('hide');
      $( ".navbar" ).removeClass('slide-down');
    }
    lastScroll = currentScroll;
  })
}
function setNumberOfYears() {
  const startYear = 2019;
  const currentYear = new Date().getFullYear();
  $('#numberOfYears').text(currentYear - startYear);
}

// function switchMode() {
//   $(document.documentElement).toggleClass('dark');
//   console.log("switch")
// }