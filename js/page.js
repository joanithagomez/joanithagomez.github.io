const storageKey = 'theme-preference'

$(document).ready(function() {
  $('#theme-toggle').on('click', function() {
    switchTheme();
  });

  // sync with system changes
  window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', ({ matches: isDark}) => {
    theme.value = isDark ? 'dark' : 'light'
    setPreference();
  })

  reflectPreference();
  stickNav();
  circularAnimation();
  // setNumberOfYears();
});


/**
 * Positions elements in a circular layout around the center of their container.
*/

function circularAnimation() {
  const $circles = $('.circle-item img');
  const containerRect = $('.skills-circle')[0].getBoundingClientRect();
  const containerSize = Math.min(containerRect.width || 400, containerRect.height || 400);
  const radius = (containerSize / 2) * 0.95;
  const numItems = $circles.length;
  const angleStep = (2 * Math.PI) / numItems;

  $circles.each(function(i) {
    const angle = i * angleStep - (Math.PI / 2);
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    $(this).css('left', `calc(50% + ${x}px)`);
    $(this).css('top', `calc(50% + ${y}px)`);
  });
}

function debounce(fn, t) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), t);
  }
}

const handleResize  = debounce(() => {
    circularAnimation();
  }, 250); 

$(window).resize(handleResize);

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


const theme = {
  value: getColorPreference(),
}

function switchTheme() {
  theme.value = theme.value === 'light'
    ? 'dark'
    : 'light';
  setPreference();
}

function getColorPreference() {
  if (localStorage.getItem(storageKey))
    return localStorage.getItem(storageKey)
  else
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
}

function setPreference() {
  localStorage.setItem(storageKey, theme.value)
  reflectPreference();
}

function reflectPreference () {
  document.firstElementChild
    .setAttribute('data-theme', theme.value)

  $('#theme-toggle')?.attr('aria-label', theme.value);
}
