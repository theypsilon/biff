;$(document).ready(function() {
	$('.filmhead').click(function() {
		var parent = $(this).parent();
		var content = $(".filmcontent", parent);
		if (content.is(":visible")) {
			content.hide();
		} else {
			content.show();
		}
	});
	var movies = $('.movies');
	var trailers = $('.trailers');
	var chat = $('.chat');
	window.show_movies = function() {
		movies.show();
		trailers.hide();
		chat.hide();
	};
	window.show_trailers = function() {
		movies.hide();
		trailers.show();
		chat.hide();
	};
	window.show_chat = function() {
		movies.hide();
		trailers.hide();
		chat.show();
	};
});