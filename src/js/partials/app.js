$(document).ready(function() {

	/*Hamburger animation toggle*/
	$('.hamburger').click(function(){
		$(this).toggleClass('is-active');
	});

	/*fixed header*/
	$(window).scroll(function(){
		if($(this).scrollTop() > 60) {
			$('.navbar').addClass('fixed-navbar');
		} else {
			$('.navbar').removeClass('fixed-navbar').show('fast');
		};

		$('.navigation a').click(function(){

			$('.active').removeClass('active')
			$(this).closest('a').addClass("active");

			$('html, body').stop().animate({
				scrollTop: $( $(this).attr('href') ).offset().top - 160 }, 250);

			return false
		});
	});
});