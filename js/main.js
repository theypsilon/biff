;$(document).ready(function() {
	$('.filmhead').click(function() {
		var parent = $(this).parent();
		var content = $(".filmcontent", parent);
		if (content.is(":visible")) {
			content.hide(600);
		} else {
			content.show(600);
		}
	});
	var movies = $('.movies');
	var trailers = $('.trailers');
	var chat = $('.chat');
	window.show_movies = function() {
		movies.show(1000);
		trailers.hide(1000);
		chat.hide(1000);
	};
	window.show_trailers = function() {
		movies.hide(1000);
		trailers.show(1000);
		chat.hide(1000);
	};
	window.show_chat = function() {
		movies.hide(1000);
		trailers.hide(1000);
		chat.show(1000);
	};
});