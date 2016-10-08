$(document).ready(function(){
  $('form').on('submit', function(event){
    event.preventDefault();
    if ( $('input[type="email"]').val() == '' ) {
      alert('Please enter a valid email address.');
    } else {
      alert('Thank you for subscribing!');
    }
  });

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

});
