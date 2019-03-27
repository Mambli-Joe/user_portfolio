$(function() {
//NAV
$(".nav-btn").on("click",function(){
	$('.menu').toggleClass("show");
  });

	// Custom SLIDER MY WORK

	$(function() {
		$('.toggles button').click(function(){
		 var get_id = this.id;
		 var get_current = $('.posts .' + get_id);
	 
		 $('.post').not(get_current).hide(500);
		 get_current.show(500);
		});
	 
		$('#showall').click(function() {
		 $('.post').show(500);
		});
	 });

	 //OWL CAROUSEL
	 $('.owl-carousel.testimonial-carousel').owlCarousel({
		nav: true,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		dots: false,
		responsive: {
		  0: {
			items: 1,
		  },
		  875: {
			items: 2,
			}
			
		}
	  });

	  //COUNTER
		$(".num").counterUp({delay:10,time:1000});
		
	//LOADER

	$(window).on('load', function(){
		$('#preloader').fadeOut('slow');
	});

	//BACK TO TOP BTN

	$(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('#topBtn').fadeIn();
    } else{
      $('#topBtn').fadeOut();
    }
  });

  $("#topBtn").click(function(){
    $('html ,body').animate({scrollTop : 0},800);
	});

	//WOW ANIMATE
	new WOW().init();
//SROLL BTN

jQuery('a').click(function(){
	jQuery('html, body').animate({
			scrollTop: jQuery( jQuery(this).attr('href') ).offset().top
	}, 1000);
	return false;
}); 

	//END FUNCTION READY
});
