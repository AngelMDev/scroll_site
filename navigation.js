jQuery(document).ready(function($){
	var contentSections = $('section'),
		navigationItems = $('#cd-vertical-nav a');

	//updateNavigation();
	// $(window).on('scroll', function(){
	// 	updateNavigation();
	// });

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
		smoothScroll($(this.hash));
		
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
		smoothScroll($(this.hash));
    });

	$(".scroll-icon").click(function() {
		smoothScroll(currentSection);
	});

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top+5},
        	800
        );
	}
});