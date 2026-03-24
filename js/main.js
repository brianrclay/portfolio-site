// LIGHTBOX
var $overlay = $('<div class="lightbox-overlay"><button class="lightbox-close" aria-label="Close image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button><img /></div>');
$('body').append($overlay);

function closeLightbox() {
  $overlay.removeClass('open');
  $('body').css('overflow', '');
}

$('.case-study section img').on('click', function() {
  $overlay.find('img').attr('src', $(this).attr('src'));
  $overlay.addClass('open');
  $('body').css('overflow', 'hidden');
  $overlay.find('.lightbox-close').focus();
});

$overlay.on('click', function(e) {
  if (!$(e.target).closest('img').length) {
    closeLightbox();
  }
});

$(document).on('keydown', function(e) {
  if (e.key === 'Escape' && $overlay.hasClass('open')) {
    closeLightbox();
  }
});

// MOBILE NAV
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

var pw = "bclaydesign"

$('.pw-submit').click(function(){
  
  if ($('#password').val() == pw) {
    $('.checkout-link').show();
    $('.pw-form').remove();
  } else{
    $('.error').show()
  }
})

$('textarea').keyup(function(e){
  alert('hi')
  if ($('#password').val() == pw) {
    $('.checkout-link').show();
    $('.pw-form').remove();
  } else{
    $('.error').show()
  }
});

$('form').submit(function () {
  return false;
 });