// On pageload functions...
$(document).ready(function() {
	// initializing our variables, self explanatory...
	let navPos = $('#page-wrap').position();
	navPos = navPos.top - 65;
	let winWidth = $(window).width();
	let i = 0;

	// Initializing the AOS Library
	AOS.init();

	// Navbar button onclick function...
	$('.navbar-toggler').click(() => {
		// immediately increment i
		i++;
		if (i==1){
			// this will change the text to an 'x' if i was 0, menu is open
			$('.navbar-toggler-mb').text('X');
		} else {
			// if i was incremented past 1, reset to 0, we know menu is closed
			i=0;
			$('.navbar-toggler-mb').text('menu');
		}
	});

	if(winWidth<500) {
		// manual overrides for padding on home section
		$('#home-sec3 .col-md-4').removeClass('p50');
		$('#home-sec3 .col-md-4').addClass('p20');
	}

	// page redirects
	$('.hvr-pop').click(() => {
		window.location.href = 'https://www.codeberry.ca/projects/wilkrog/contact.html';
	});
});