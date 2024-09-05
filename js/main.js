$('.my-work-dd-toggle').click(function(){
  $('.mobile-nav').toggleClass('open')
  $('.my-work-dd').toggleClass('open')
  $(this).toggleClass('open')
  $('.dd-scrim').toggleClass('open')

  if($('.mobile-nav').hasClass('open')){
    $('.my-work-dd a:nth-child(1)').focus();
  }
})

$('.dd-scrim').click(function(){
  $('.mobile-nav').removeClass('open')
  $('.my-work-dd').removeClass('open')
  $('.my-work-dd-toggle').removeClass('open')
  $(this).removeClass('open')

  $('.my-work-dd-toggle').focus();
})