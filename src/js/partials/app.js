$(document).ready(function() {

	/*Hamburger animation toggle*/
	$('.hamburger').click(function(){
		$(this).toggleClass('is-active');
	});

	$(window).scroll(function(){
		if($(this).scrollTop() > 60) {
			$('.navbar').addClass('fixed-navbar');
		} else {
			$('.navbar').removeClass('fixed-navbar').show('fast');
		}
	});

});