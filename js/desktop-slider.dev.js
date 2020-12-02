"use strict";

$(document).ready(function () {
  $('.desktop-slider').slick({
    prevArrow: '.desktop-prev',
    nextArrow: '.desktop-next',
    centerMode: true,
    centerPadding: '96px',
    cssEase: 'cubic-bezier(.475, .425, 0, .995)',
    responsive: [{
      breakpoint: 800,
      settings: {
        centerMode: false
      }
    }]
  });
});