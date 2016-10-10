$(document).ready(function(){

  // Navigation Smooth Scroll
  var offset = $("header").height();
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - offset
        }, 1000);
        return false;
      }
    }
  });

  // Email Validator
  $('form').on('submit', function(event){
    event.preventDefault();
    if ( $('input[type="email"]').val() == '' ) {
      alert('Please enter a valid email address.');
    } else {
      alert('Thank you for subscribing!');
    }
  });

  // Shopping Cart Counter
  $('.addCart').click(function() {
    $('.counter').fadeIn('fast').html(function(i, val) { return val*1+1 });
  });

});
