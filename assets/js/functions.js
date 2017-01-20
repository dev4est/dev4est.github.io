// @codekit-prepend "/vendor/TweenLite.min.js";
// @codekit-prepend "/vendor/TimelineLite.min.js";


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
    
/***************** Smooth Scroll ******************/
  
  $('a[href*="#"]:not([href="#0"])').click(function(ev) {
	  
	  ev.preventDefault();
		
		if ($('.navigation__container').hasClass('navigation__container--is-open')) {
			navigationToggle();
		}
			
		var target = $(this).attr('href');
		
		TweenLite.to(window, 1, {scrollTo: target});
		
	});    

});