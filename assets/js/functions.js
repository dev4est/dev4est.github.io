$(document).ready(function() {

/***************** Responsive Nav ******************/

  $('.navigation__burger').click(function() {
	  
	  navigationToggle();
	  
  });
  
  function navigationToggle() {
	  
	  $('.navigation__burger').toggleClass('navigation__burger--is-open');
	  $('.navigation__container').toggleClass('navigation__container--is-open');
	  $('html, body').toggleClass('scroll-lock');
	  
  }
   
});