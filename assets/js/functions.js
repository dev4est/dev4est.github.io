
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
  
/*****************Nav Href # ******************/
  
  $('a[href*="#"]:not([href="#0"])').click(function(ev) {
		
		if ($('.navigation__container').hasClass('navigation__container--is-open')) {
			navigationToggle();
		}
		
	});

  /***************** Work Carousel ******************/
  
  $('.last-projects__navigation-el').click(function() {
	  
	  var $this = $(this),
	  		position = $this.parent().children().index($this);
	  		
	  $this.parent().children().removeClass('last-projects__navigation-el--active');
	  $this.addClass('last-projects__navigation-el--active');
	  $('.last-projects__list').children().removeClass('last-projects__list-el--active');
	  $('.last-projects__list').children().eq(position).addClass('last-projects__list-el--active');
	  
  });

});
