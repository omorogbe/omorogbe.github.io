/*-----------------------------------------------------------------------------------
/*
/* Main JS
/*
-----------------------------------------------------------------------------------*/

(function ($) {

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */
	$(window).load(function () {

		// will first fade out the loading animation 
		$("#loader").fadeOut("slow", function () {

			// will fade out the whole DIV that covers the website.
			$("#preloader").delay(300).fadeOut("slow");

		});

	})

	/*---------------------------------------------------- */
	/* Final Countdown Settings
	------------------------------------------------------ */
	var finalDate = '2021/04/01';

	$('div#counter').countdown(finalDate)
		.on('update.countdown', function (event) {

			$(this).html(event.strftime('<span>%D <em>days</em></span>' +
				'<span>%H <em>hours</em></span>' +
				'<span>%M <em>minutes</em></span>' +
				'<span>%S <em>seconds</em></span>'));

		});

	/*----------------------------------------------------*/
	/*  Placeholder Plugin Settings
	------------------------------------------------------ */
	$('input').placeholder()


	/*----------------------------------------------------- */
	/* Modals
	------------------------------------------------------- */
	$('.modal-toggles ul').on('click', 'a', function (e) {

		var html = $('html'),
			main = $('main, footer'),
			footer = $('footer'),
			curMod = $(this).attr('href'),
			modal = $(curMod),
			modClose = modal.find('#modal-close');

		main.fadeOut(500, function () {
			$('html,body').scrollTop(0);
			modal.addClass('is-visible');
		});

		e.preventDefault();

		// for old ie
		if (html.hasClass('oldie')) {

			$(document).on('click', "#modal-close", function (evt) {
				$('html,body').scrollTop(0);
				modal.removeClass('is-visible');
				setTimeout(function () {
					main.fadeIn(500);
				}, 500);

				evt.preventDefault();
			});

		}
		// other browsers
		else {

			modClose.on('click', function (evt) {
				$('html,body').scrollTop(0);
				modal.removeClass('is-visible');
				setTimeout(function () {
					main.fadeIn(500);
				}, 500);

				evt.preventDefault();
			});

		}

	});

	/*---------------------------------------------------- */
	/* Owl Carousel
	------------------------------------------------------ */
	$("#owl-slider").owlCarousel({
		navigation: false,
		pagination: true,
		items: 3,
		navigationText: false
	});


	/*----------------------------------------------------*/
	/* FitText Settings
	------------------------------------------------------ */
	setTimeout(function () {

		$('main h1, #mod-about h1').fitText(1.1, { minFontSize: '28px', maxFontSize: '38px' });

	}, 100);


	var mailChimpURL = 'us19-ca378fbdaa-b8379a12bc@inbound.mailchimp.com'


	$('#mc-form').ajaxChimp({

		language: 'es',
		url: mailChimpURL

	});

	// Mailchimp translation
	//
	//  Defaults:
	//	 'submit': 'Submitting...',
	//  0: 'We have sent you a confirmation email',
	//  1: 'Please enter a value',
	//  2: 'An email address must contain a single @',
	//  3: 'The domain portion of the email address is invalid (the portion after the @: )',
	//  4: 'The username portion of the email address is invalid (the portion before the @: )',
	//  5: 'This email address looks fake or invalid. Please enter a real email address'

	$.ajaxChimp.translations.es = {
		'submit': 'Submitting...',
		0: '<i class="fa fa-check"></i> We have sent you a confirmation email',
		1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
		2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
		3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
		4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
		5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
	}




})(jQuery);