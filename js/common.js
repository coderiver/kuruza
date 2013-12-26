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
	  	columnWidth: 361,
	  	gutter: 10,
	  	itemSelector: '.post',
	  	stamp: '.sidebar'
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

	if ($(".scroll-pane").length >0 ){
        $('.scroll-pane').jScrollPane();
    } 
	

    // sticky top-menu

    function menu_scroll() {
    	var position = $(".js-topper").offset().top;
    	var	position_off = $(".topper-wrap").offset().top;

    	if ($(window).scrollTop() >= position) {
    		$(".js-topper").addClass('fixed');
    	}
    	if ($(window).scrollTop() <= position_off){
    		$(".js-topper").removeClass('fixed');
    	}
    	else {}
    } 
    
    if ($(".js-topper-wrap").length >0 ){
    	menu_scroll();
    } 
    

    $(window).scroll(function(){
      	if ($(".js-topper-wrap").length >0 ){
    		menu_scroll();
    	}
    });
    $(window).resize(function(){
    	if ($(".js-topper-wrap").length >0 ){
    		menu_scroll();
    	}
    });

    //sticky article info
    // var stickyPanelSettings = {
    //     // Use this to set the top margin of the detached panel.
    //     topPadding: 44,
 
    //     // This class is applied when the panel detaches.
    //     afterDetachCSSClass: "",
 
    //     // When set to true the space where the panel was is kept open.
    //     savePanelSpace: true,
 
    //     // Event fires when panel is detached
    //     // function(detachedPanel, panelSpacer){....}
    //     onDetached: null,
 
    //     // Event fires when panel is reattached
    //     // function(detachedPanel){....}
    //     onReAttached: null,
 
    //     // Set this using any valid jquery selector to 
    //     // set the parent of the sticky panel.
    //     // If set to null then the window object will be used.
    //     parentSelector: null
    // };
    
    // $(".article__author").stickyPanel(stickyPanelSettings);

});