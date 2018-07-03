;$(document).ready(function() {
	var template_video_youtube = $('#template_video_youtube').html();
	$('.filmhead').click(function() {
		var parent = $(this).parent();
		var content = $('.filmcontent', parent);
		if (content.is(':visible')) {
			content.hide(600);
		} else {
			content.show(600);
		}
		var script = $('script', content);
		if (script.length) {
			var video_url = script.html();
			var youtube_iframe = template_video_youtube.replace('/VIDEO_URL_HERE/gi', video_url);
			content.append(youtube_iframe);
			script.remove();
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