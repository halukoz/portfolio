jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');
    $(window).on('load', function() {
        $('.level-bar-inner').each(function() {
          var itemWidth = $(this).data('level');
          $(this).animate({
              width: itemWidth
        }, 800);
    });

		// This function provide go to top when the user click the buttom (right bottom).
		$(window).scroll(function() {
			if ($(this).scrollTop() >= 50) {
				$('#return-to-top').fadeIn(200);
			} else {
				$('#return-to-top').fadeOut(200);
			}
		});

		$('#return-to-top').click(function() {
			$('body,html').animate({
				scrollTop : 0
			}, 500);
		});
    });
});
