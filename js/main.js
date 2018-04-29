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
	var button_movies = $('.button-movies');
	var button_trailers = $('.button-trailers');
	var selected_button = undefined;
	window.show_movies = function() {
		movies.show(1000);
		trailers.hide(1000);
		button_movies.addClass('button-pushed');
		button_trailers.removeClass('button-pushed');
	};
	window.show_trailers = function() {
		movies.hide(1000);
		trailers.show(1000);
		button_movies.removeClass('button-pushed');
		button_trailers.addClass('button-pushed');
	};
});