$(document).ready(function() {

	// sub-menu
	
    function sub_menu(){
        var sub_menu_width = $(".menu").outerWidth();
        var sub_menu_margin = (-sub_menu_width / 2);
        if($(window).width() > 800){
            $(".sub-menu").css({
                'width': sub_menu_width,
                'margin-left': sub_menu_margin
            });
        }
       
    }
    sub_menu();

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

	// menu dropdown
    
    var drop = $(".drop-menu");
	
    function drop_menu(){
		drop.click(function(){
			$(this).next(".nav .menu").toggleClass("is-active");
			$(this).parent(".nav").toggleClass("is-open");
		});	
	}
	
	drop_menu();
	
    function drop_reset(){
       if($(window).width() >= 800){
            drop.next(".menu").removeClass("is-active");
            drop.parent().removeClass("is-open");
        } 
    }
    
    drop_reset();

	// masonry bricks

	$('.masonry').masonry({
	  	itemSelector: '.post',
	  	stamp: '.sidebar'
	});

	// search
	

	$(".search input").focus(function() {
		$(this).addClass('is-active');
		$(this).parents('nav').find(".menu__item").addClass('narrow');
        $(".js-logo-opacity").addClass('is-hidden');
	});
	$(".search input").blur(function(){
		$(this).removeClass('is-active');
		$(this).parents('nav').find(".menu__item").removeClass('narrow');
        $(".js-logo-opacity").removeClass('is-hidden');
	});

	// scroll pane

    function search_dropdown(){
        if ($(".scroll-pane").length > 0){
            $('.scroll-pane').jScrollPane({
                reinitialise: true
            }); 
        }
    }
	
    search_dropdown();

    //sidebar show/hide

    $(".sidebar-btn").click(function(){
        $(".sidebar").toggleClass('is-open');
    });

    // sticky elements

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
    
    var header_height = $(".topper-wrap").outerHeight();

    function author_scroll() {
    	var position2 = $(".js-article-block").offset().top;
    	var	position_off2 = $(".article").offset().top;
    	var pos_left = $(".article").offset().left + 770;

    	if ($(window).scrollTop() >= position2 - header_height) {
    		$(".js-article-block").addClass('fixed');
    		$(".js-article-block").css('left', pos_left);
    	}
    	if ($(window).scrollTop() <= position_off2 - header_height){
    		$(".js-article-block").removeClass('fixed');
    		$(".js-article-block").css('left', 770);
    	}
    	else {}
    }
	

    function info_scroll() {
    	var position3 = $(".js-article-info").offset().top;
    	var	position_off3 = $(".article").offset().top;
    	var pos_left2 = $(".article").offset().left + 778;
        var pos_width = $(".article").offset().left;

        $(".js-article-info").css('width', pos_width);
    	
        if ($(window).scrollTop() >= position3 - header_height) {
    		$(".js-article-info").addClass('fixed');
    		$(".js-article-info").css('right', pos_left2);
            
    	}
    	if ($(window).scrollTop() <= position_off3 - header_height){
    		$(".js-article-info").removeClass('fixed');
    		$(".js-article-info").css('right', 778);
    	}
    	else {}
    }
	
	if ($(".article").length >0 && $(window).width() >= 1080){
    	info_scroll();
    	author_scroll();
    }

    // show/hide fashion sidebar

    $(".fashion__bg").hide();
    
    function fashion_hide(){
        $(".js-fashion-show").click(function(){
            $(".l-fashion__sidebar").toggleClass('is-open');
            $(".fashion__bg").toggle();
        });
    }
    fashion_hide();


    $(window).scroll(function(){
      	if ($(".js-topper-wrap").length >0 ){
    		menu_scroll();
    	}
    	if ($(".article").length >0 && $(window).width() >= 1080){
    		author_scroll();
    		info_scroll();
    	}
        if ($(".menu").length >0 ){
            sub_menu();
        }
    });
    $(window).resize(function(){
    	if ($(".js-topper-wrap").length >0 ){
    		menu_scroll();
    	}
    	if ($(".article").length >0 && $(window).width() >= 1080){
    		author_scroll();
    		info_scroll();
    	}
        if ($(".menu").length >0 ){
            sub_menu();
        }
        drop_reset();
        search_dropdown();
    });

});