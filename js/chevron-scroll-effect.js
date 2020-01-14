$("#scroll-down").click(function() {
  $('html, body').animate({
    scrollTop: $('.header').prop("scrollHeight")
  });
  return false;
})
