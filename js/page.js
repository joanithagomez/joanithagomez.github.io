$(document).ready(function() {
  // $('#too-bright').on('click', () => {
  //  console.log('too bright')
  // });

  // const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  // darkModeMediaQuery.addEventListener('change', (e) => {
  //   const darkModeOn = e.matches;
  //   console.log(`Dark mode is ${darkModeOn ? '🌒 on' : '☀️ off'}.`);
  // });
  
  setNumberOfYears();
});

function setNumberOfYears() {
  const startYear = 2019;
  const currentYear = new Date().getFullYear();
  $('#numberOfYears').text(currentYear - startYear);
}

// function switchMode() {
//   $(document.documentElement).toggleClass('dark');
//   console.log("switch")
// }