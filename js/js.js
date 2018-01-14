
$(function(){

	
  	if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$(".mobile_video_none").remove();
	}
			
	
	


	// mobile nav
	$("#mobile_nav").click(function(){
		$(this).toggleClass('white');
		$(".left_panel").toggleClass('slide');
		$("body, html").toggleClass('no_scroll');
		if($('.left_panel').hasClass('slide'))	{
			$('body').bind('touchmove', function(e){e.preventDefault()});
		}else{
			$('body').unbind('touchmove');
		}
	});



	$("#main_panel").click(function(){
		if($('.left_panel').hasClass('slide'))	{
			$(".left_panel").removeClass('slide');
			$('#mobile_nav').removeClass('white');
			$("body, html").removeClass('no_scroll');
			$('body').unbind('touchmove');
		};	
	});
	

	
	$(".nav_drawer").click(function(){
		$(this).siblings().removeClass('slide');
		$(this).toggleClass('slide');
	});
	$(".mobile_close").click(function(){
		$(".left_panel").toggleClass('slide');
		$('#mobile_nav').toggleClass('white');
		$("body, html").removeClass('no_scroll');
		$('body').unbind('touchmove')
	});

	$.each($('.carousel_image_container'), function( index, value ) {
		let currentIndex = 0;

		let itemCount = $(this).find('li').length;

		// add the active class to the first item to hide all the others
		$(this).find('li:eq(' + currentIndex + ')').addClass('active');

		$(this).siblings('.pagination').find('.carousel-nav').on('click', function() {
			// debugger;
			let $carousel = $(this).parent().siblings('.carousel_image_container')
			let $active  = $carousel.find('li.active')
			let isNext   = $(this).hasClass('next');
			currentIndex = (currentIndex + (isNext ? 1 : -1)) % itemCount;

			/* go back to the last item if we hit -1 */
			if (currentIndex === -1) {
				currentIndex = itemCount - 1;
			}

			var $next = $carousel.find('li:eq(' + currentIndex + ')');
			$active.addClass(isNext ? 'next-out' : 'prev-out');
			$next.addClass('active').addClass(isNext ? 'next-in' : 'prev-in');
			setTimeout(function() { 
				$active.removeClass('active next-out prev-out');
				$next.removeClass('next-in prev-in')
			});
			return false;
		});

	});


	// //http://codepen.io/agelber/pen/rAuaf
	// var currentIndex = 0,
	// itemCount    = $('.carousel_image_container > li').length;

	// /* add the active class to the first item to hide all the others */
	// // $('.carousel_image_container > li:eq(' + currentIndex + ')').addClass('active');

	// $('.carousel-nav').on('click', function() {
	// 	var $active  = $('.carousel_image_container > li.active'),
	// 			isNext   = $(this).hasClass('next');
	// 	currentIndex = (currentIndex + (isNext ? 1 : -1)) % itemCount;

	// 	/* go back to the last item if we hit -1 */
	// 	if (currentIndex === -1) {
	// 		currentIndex = itemCount - 1;
	// 	}

	// 	var $next = $('.carousel_image_container > li:eq(' + currentIndex + ')');
	// 	$active.addClass(isNext ? 'next-out' : 'prev-out');
	// 	$next.addClass('active').addClass(isNext ? 'next-in' : 'prev-in');
	// 	setTimeout(function() { 
	// 		$active.removeClass('active next-out prev-out');
	// 		$next.removeClass('next-in prev-in')
	// 	});
	// 	return false;
	// });


})

