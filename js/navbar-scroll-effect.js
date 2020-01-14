// Scrolling Effect

function controlNavbarColor() {
  if (5 * $(window).scrollTop() > $(window).height()) {
    $('header nav').addClass('bg-dark');
  } else {
    $('header nav').removeClass('bg-dark');
  }
}

$(window).on("scroll", function() {
  controlNavbarColor();
})

$(document).ready(function() {
  controlNavbarColor();
})

$("header nav .navbar-collapse a.dropdown-item").click(function() {
  if (window.matchMedia("(max-width: 991.98px)").matches) {
    $('.navbar-toggler').click();
  }
})
