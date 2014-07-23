$(function() {
	$('.menu-toggle').click(function() {
		if($('.primary-header').hasClass('mobile-nav-active')) {
			$('.primary-header').removeClass('mobile-nav-active');
		} else {
			$('.primary-header').addClass('mobile-nav-active');
		}
	});

	$('.get-well-options-toggle').click(function(e) {
		e.preventDefault();
		$('.get-well-options').addClass('active');
		$(this).hide();
	});

	if($('.ck-profile-name').width() > 190) {
		$('.ck-profile-header-col-1').addClass('large-name');
	}
});