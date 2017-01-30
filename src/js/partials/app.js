$(document).ready(function() {
	var body = $('body');
	var bodyOverflow = function() {
		body.toggleClass('overflow-hidden');
	};

	$(window).on('load', function(){
		var preloader = $('#preloader');
		var spinner = preloader.find('.spinner');

		preloader.delay(500).fadeOut('fast');
	});

	/*Hamburger animation toggle*/

	$('.hamburger').click(function(){
		$(this).toggleClass('is-active');
		$(".navigation-list").toggleClass('flex');
		bodyOverflow();
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
				scrollTop: $( $(this).attr('href') ).offset().top - 50 }, 250);

			return false
		});
	});

	$('.blog-slider').slick({
		mobileFirst: false,
		slidesToShow: 1,
		speed: 150,
		infinite: true,
		accessibility: false,
		arrows: false,
		dots: true
	});

	$('.accordion-ctrl').click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).next().stop().slideUp({duration: 150});
		} else {
			$(this).addClass('active');
			$(this).next().stop().slideDown({duration: 150});
		}
	});

	$('.form-control').focus(function(){
		$(this).parent().addClass('focused');
	});

	$('input#name, input#email, textarea#message').blur(function(){

		var id = $(this).attr('id');
		var val = $(this).val();

		switch(id) {
			case 'name':
				var rv_name = /^[a-zA-Zа-яёА-ЯЁ\s]+$/;   //regExp для определения букв

				if(val.length > 2 && val != '' && rv_name.test(val)) {
					$(this).removeClass('error').addClass('not-error');
					$(this).parent().removeClass('has-feedback has-error').addClass('has-feedback has-succsess');
				} else {
					$(this).removeClass('not-error').addClass('error');
					$(this).parent().removeClass('has-feedback has-succsess').addClass('has-feedback has-error');
				}
				break;

			case 'email':
				var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;

				if(val.length > 2 && val != '' && rv_email.test(val)) {
					$(this).removeClass('error').addClass('not-error');
					$(this).parent().removeClass('has-feedback has-error').addClass('has-feedback has-succsess');
				} else {
					$(this).removeClass('not-error').addClass('error');
					$(this).parent().removeClass('has-feedback has-succsess').addClass('has-feedback has-error');
				}
				break;

			case 'message':
				if(val.length > 5 && val != '') {
					$(this).removeClass('error').addClass('not-error');
					$(this).parent().removeClass('has-feedback has-error').addClass('has-feedback has-succsess');
				} else {
					$(this).removeClass('not-error').addClass('error');
					$(this).parent().removeClass('has-feedback has-succsess').addClass('has-feedback has-error');
				}
				break;
		}
		if($('.not-error').length === 3) {
			$('.button').removeClass('disabled');
		}
	});
});