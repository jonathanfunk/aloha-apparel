$(document).ready(function(){
  $('form').on('submit', function(event){
    event.preventDefault();
    if (($('input[type="email"]').val().length !== 0 )) {
      alert('Form is valid.');
    } else {
      alert('Form is NOT valid.');
    }
  });
});
