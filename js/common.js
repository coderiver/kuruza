$(document).ready(function() {

	// sub-menu
	
	$(".menu__item").hover(
		function(){
			$(this).find('.sub-menu').addClass('is-active');
			$(this).find('.menu-link').addClass('is-active');
		},
		function(){
			$(this).find('.sub-menu').removeClass('is-active');
			$(this).find('.menu-link').removeClass('is-active');
		}
	);

	// masonry bricks

	$('.masonry').masonry({
	  columnWidth: 368,
	  itemSelector: '.post',
	  cornerStampSelector: '.sidebar'
	});

	// search
	
	$(".search").hover(
		function(){
			$(this).addClass('is-active');
			$(this).parent().find(".menu__item").css('margin', '0 23px');
		},
		function(){
			$(this).removeClass('is-active');
			$(this).parent().find(".menu__item").css('margin', '0 38px')
		}
	);

	// scroll pane

	jQuery(function(){
        jQuery('.scroll-pane').jScrollPane();
    });

    // sticky top-menu

    function menu_scroll() {
    	var position = $(".topper").offset().top;
    	var	position_off = $(".topper-wrap").offset().top;

    	if ($(window).scrollTop() >= position) {
    		$(".topper").addClass('fixed');
    	}
    	if ($(window).scrollTop() <= position_off){
    		$(".topper").removeClass('fixed');
    	}
    	else {}
    } 
     
    menu_scroll();

    $(window).scroll(function(){
      	menu_scroll();
    });
    $(window).resize(function(){
    	menu_scroll();
    });

});