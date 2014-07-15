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
});