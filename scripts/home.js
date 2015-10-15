/* Smooth scroll for anchor links*/

$(document).ready(function() {
  $('a[href*=#]').each(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname
    && this.hash.replace(/#/,'') ) {
      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
       if ($target) {
         var targetOffset = $target.offset().top;
         $(this).click(function() {
           $('html, body').animate({scrollTop: targetOffset}, 400);
           return false;
         });
      }
    }
  });
   $('.page-up').click(function(){
            $('html, body').animate({ scrollTop: 0 }, 400);
            return false;
   });
});



/* Loads sticky header */

function sticky_relocate() {

  var windowTop = $(window).scrollTop();
  var divTop = $('#nav-anchor').offset().top;
  
  if (windowTop > divTop) {
    $('#nav').addClass('stick');
    $('#nav-placeholder').css({display: 'block'});
    $('.page-up').css({opacity: '1' , display: 'block' });
  } else {
    $('#nav').removeClass('stick');
    $('#nav-placeholder').css({display: 'none'});
     $('.page-up').css({opacity: '0' });
  }
}

$(function() {
  $(window).scroll(sticky_relocate);
  sticky_relocate();
});


/* Work Carousel */

$(document).ready(function(){
  $('.bxslider3').bxSlider({
    slideWidth: 300,
    minSlides: 1,
    maxSlides: 3,
    moveSlides: 1,
    slideMargin: 30
  });
});