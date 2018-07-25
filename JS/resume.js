
$(document).ready(function() {

	// function showHeadline() {
	// 	$('.intro h1').fadeIn(500, function () {
	// 		$('.intro h2').delay(1000).fadeIn(500);
	// 	});
	// };

	// showHeadline();

	(function () {
		$('.intro h1').fadeIn(500, function () {
			$('.intro h2').delay(1000).fadeIn(500);
		});
	})();

	// $('.intro h1').hide();
	// $('.intro h1').fadeIn(3000);

	// $('.intro h2').hide();
	// $('.intro h2').fadeIn(8000);

	$('a[href^="#"]').on('click', function(event) {

	    var target = $(this.getAttribute('href'));

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }

	});


	$('ul').find('a').click(function(){
	    var $href = $(this).attr('href');
	    var $anchor = $('#'+$href).offset();
		$('body').animate({ scrollTop: $anchor.top }, 3000);
	    return false;
	});


	$(document).ready(function() {
		$('#previous').on('click', function() {
			$('#im_' + currentImage).stop().fadeOut(1);
			decreaseImage();
			$('#im_' + currentImage).stop().fadeIn(1);
		});
		$('#next').on('click', function() {
			$('#im_' + currentImage).stop().fadeOut(1);
			increaseImage();
			$('#im_' + currentImage).stop().fadeIn(1);
		});

		var currentImage = 1;
		var totalImages = 5;

		function increaseImage() {
			++currentImage;
			if(currentImage > totalImages) {
				currentImage = 1;
			}
		}

		function decreaseImage() {
			--currentImage;
			if(currentImage < 1) {
				currentImage = totalImages;
			}
		}
	});
}); //End ready


