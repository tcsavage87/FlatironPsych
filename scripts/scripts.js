$(document).ready(function() {
	$('#accordion').find('.accordion-toggle').click(function() {
		$(this).toggleClass('active');
		$(this).next().slideToggle('fast');
		$('.accordion-toggle').not($(this)).removeClass('active');
		$('.accordion-content').not($(this).next()).slideUp('fast');
	});
});