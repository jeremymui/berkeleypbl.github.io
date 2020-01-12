$("#scroll-down").click(function() {
  $('html, body').animate({
    scrollTop: $('.header').prop("scrollHeight") - 65
  }, 'slow');
  return false;
})
