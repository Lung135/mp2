// Write any custom javascript functions here

$(document).ready(function(){
	//carousel
  $('.carousel').slick({
  infinite: true,
  speed: 250,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        //infinite: true
      }
    }
  ]
});

  	//Smooth Scrolling
	$(function() {
		$('#nav-links li a').click(function() {
			console.log("click registered");
			var target = $(this.hash);
			console.log(target);
			// if(($(this.hash)).length && $(this.hash) == "#hello") {
			// 	$("html, body").animate({scrollTop: $(this.hash).offset().top}, 1000);
			// 	return false;
			// }
			if(($(this.hash)).length) {
				$("html, body").animate({scrollTop: $(this.hash).offset().top - 54}, 1000);
				return false;
			}
		});
	});

	$(window).on('scroll', function(e) {
		var currPos = $(document).scrollTop();
		console.log("curr:" + currPos);
		var about = $('#about').offset().top;
		var work = $('#work').offset().top;
		var photos = $('#photos').offset().top;
		var work = $('#contact').offset().top;
		// console.log(currPos);
		var offset = 54;
		var white = '#fff'
		var highlight = '#00ccff';
		console.log(work);
		console.log(photos);
		if(currPos < about - offset) {
			$('#nav-links li a[href="#hello"]').css('color', highlight);
			$('#nav-links li :not(a[href="#hello"])').css('color', white);
		}
		else if(currPos < work - offset) {
			$('#nav-links li a[href="#about"]').css('color', highlight);
			$('#nav-links li :not(a[href="#about"])').css('color', white);
		}
		else if(currPos < photos - offset) {
			$('#nav-links li a[href="#work"]').css('color', highlight);
			$('#nav-links li :not(a[href="#work"])').css('color', white);
		}
		else if(currPos < contacts - offset) {
			$('#nav-links li a[href="#photos"]').css('color', highlight);
			$('#nav-links li :not(a[href="#photos"])').css('color', white);
		}

		//check if at bottom http://stackoverflow.com/questions/3898130/check-if-a-user-has-scrolled-to-the-bottom
		if(currPos + $(window).height() >= $(document).height()) {
			$('#nav-links li a[href="#contact"]').css('color', highlight);
			$('#nav-links li :not(a[href="#contact"])').css('color', white);
		}
	});

	//Magellan
	//var elem = new Foundation.Magellan($('navbar'));

	//navbar
	// (function($) {

	// 	$('#header__icon').click(function(e){
	// 		e.preventDefault();
	// 		$('body').toggleClass('with--sidebar');
	// 	});
    
 //    $('#site-cache').click(function(e){
 //      $('body').removeClass('with--sidebar');
 //    });

	// })(jQuery);

});