$(document).ready(function(){
  $('form').on('submit', function(event){
    event.preventDefault();
    if ( $('input[type="email"]').val() == '' ) {
      alert('Please enter a valid email address.');
    } else {
      alert('Thank you for subscribing!');
    }
  });
});
