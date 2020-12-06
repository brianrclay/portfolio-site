"use strict";

$('#menu-toggle').click(function () {
  $('#menu').addClass('open');
  $('#close-menu').addClass('open');
});
$('#close-menu').click(function () {
  $('#menu').removeClass('open');
  $('#close-menu').removeClass('open');
});
$(document).keydown(function (e) {
  // ESCAPE key pressed
  if (e.keyCode == 27) {
    $('#menu').removeClass('open');
    $('#close-menu').removeClass('open');
  }
});
$(document).ready(function () {
  $("a.cta").click(function (event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top
    }, 500);
  });
});