$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() != 0) {
			$("#ButtonOnTop").fadeIn();
		} else {
			$("#ButtonOnTop").fadeOut();
		}
	});
	$("#ButtonOnTop").click(function () {
		$("body, html").animate({ scrollTop: 0 }, 700);
	});
});
