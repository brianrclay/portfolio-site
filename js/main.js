// PAGE TRANSITIONS
$(document).on('click', 'a', function (e) {
  var href = $(this).attr('href');
  if (!href) return;
  if ($(this).attr('target') === '_blank') return;
  if (href.indexOf('http://') === 0 || href.indexOf('https://') === 0) return;
  if (href.charAt(0) === '#') return;
  if (href.indexOf('mailto:') === 0) return;

  e.preventDefault();
  var dest = href;
  $('body').addClass('page-exit');
  setTimeout(function () {
    window.location.href = dest;
  }, 320);
});

// 3D TILT on work cards
$('.work').on('mousemove', function (e) {
  var rect = this.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  var rx = ((y - rect.height / 2) / (rect.height / 2)) * -6;
  var ry = ((x - rect.width / 2)  / (rect.width  / 2)) *  7;
  $(this).css({
    'transform':  'perspective(700px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) scale(1.025)',
    'transition': 'transform 60ms linear'
  });
}).on('mouseleave', function () {
  $(this).css({ 'transform': '', 'transition': '' });
});

// SCROLL ANIMATIONS — case study sections
if ($('.case-study').length && 'IntersectionObserver' in window) {
  var scrollObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        $(entry.target).addClass('in-view');
        scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  $('.case-study .summary-wrapper, .case-study section').each(function () {
    scrollObserver.observe(this);
  });
}

// LIGHTBOX
var $overlay = $('<div class="lightbox-overlay"><button class="lightbox-close" aria-label="Close image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button><img /></div>');
$('body').append($overlay);

function closeLightbox() {
  $overlay.removeClass('open');
  $('body').css('overflow', '');
}

$('.case-study section img').on('click', function () {
  $overlay.find('img').attr('src', $(this).attr('src'));
  $overlay.addClass('open');
  $('body').css('overflow', 'hidden');
  $overlay.find('.lightbox-close').focus();
});

$overlay.on('click', function (e) {
  if (!$(e.target).closest('img').length) {
    closeLightbox();
  }
});

$(document).on('keydown', function (e) {
  if (e.key === 'Escape' && $overlay.hasClass('open')) {
    closeLightbox();
  }
});

// MOBILE NAV
$('.my-work-dd-toggle').click(function () {
  $('.mobile-nav').toggleClass('open');
  $('.my-work-dd').toggleClass('open');
  $(this).toggleClass('open');
  $('.dd-scrim').toggleClass('open');

  if ($('.mobile-nav').hasClass('open')) {
    $('.my-work-dd a:nth-child(1)').focus();
  }
});

$('.dd-scrim').click(function () {
  $('.mobile-nav').removeClass('open');
  $('.my-work-dd').removeClass('open');
  $('.my-work-dd-toggle').removeClass('open');
  $(this).removeClass('open');
  $('.my-work-dd-toggle').focus();
});

// PASSWORD
var pw = "bclaydesign";

$('.pw-submit').click(function () {
  if ($('#password').val() == pw) {
    $('.checkout-link').show();
    $('.pw-form').remove();
  } else {
    $('.error').show();
  }
});

$('form').submit(function () {
  return false;
});
