$(function() {
	$("div[data-liffect] .ck-profile-photo-thumb").each(function (i) {
	    $(this).attr("style", "-webkit-animation-delay:" + i * 35 + "ms;"
	            + "-moz-animation-delay:" + i * 35 + "ms;"
	            + "-o-animation-delay:" + i * 35 + "ms;"
	            + "animation-delay:" + i * 35 + "ms;");
	    if (i == $("div[data-liffect] .ck-profile-photo-thumb").size() -1) {
	        $("div[data-liffect]").addClass("play");
	    }
	});

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