// Scrolling Effect

function controlNavbarColor() {
  if (5 * $(window).scrollTop() > $(window).height()) {
    $('nav').addClass('bg-dark');
  } else {
    $('nav').removeClass('bg-dark');
  }
}

$(window).on("scroll", function() {
  controlNavbarColor();
})

$(document).ready(function() {
  controlNavbarColor();
})
