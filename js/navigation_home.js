$( window ).on( "load", function(){
	var sublink_vertical_offsets = {};
	var sublink_vertical_offsets_second = {};
	// var mainlink_vertical_offsets = {};
	$('.section li').each(function() {
		let id = $( this ).attr('id');
		let text = $(this).text();
		let selector = "h3:contains('"+text+"')";
		let content = $(selector)
		if (content.length != 0) {
			let content_top = Math.floor($(selector).offset().top);
			sublink_vertical_offsets[content_top] = $(this);
			$(this).click(function(){
				$('html,body').animate({
		            scrollTop: content_top
		        }, 500);
			});
		}
	});
	$('.section_second li').each(function() {
		let id = $( this ).attr('id');
		let text = $(this).text();
		let selector = "h3:contains('"+text+"')";
		let content = $(selector)
		if (content.length != 0) {
			let content_top = Math.floor($(selector).offset().top);
			sublink_vertical_offsets_second[content_top] = $(this);
			$(this).click(function(){
				$('html,body').animate({
		            scrollTop: content_top
		        }, 500);
			});
		}
	});
	
	$('.section a').each(function() {
		let id = $( this ).attr('id');
		let text = $(this).text();
		let selector = "h2:contains('"+text+"')";
		let content = $(selector)
		if (content.length != 0) {
			let content_top = Math.floor($(selector).offset().top);
			sublink_vertical_offsets[content_top] = $(this);
			$(this).click(function(){
				$('html,body').animate({
		            scrollTop: content_top 
		        }, 500);
			});
		}
	});
	$('.section_second a').each(function() {
		let id = $( this ).attr('id');
		let text = $(this).text();
		let selector = "h2:contains('"+text+"')";
		let content = $(selector)
		if (content.length != 0) {
			let content_top = Math.floor($(selector).offset().top);
			sublink_vertical_offsets_second[content_top] = $(this);
			$(this).click(function(){
				$('html,body').animate({
		            scrollTop: content_top 
		        }, 500);
			});
		}
	});

	function setNavPosition() {
		var scrollPos = $(window).scrollTop();	

		// SUBLINK START
		let sublink_keys = Object.keys(sublink_vertical_offsets).map(function(n) {
			return parseInt(n)
		});
		let sublink_key = null;
		$.each(sublink_keys, function(i, num) {
			if (scrollPos + 200 >= num) {
				sublink_key = num;
			}
		});

		$('.section').each(function() {
			$(this).removeClass('active');
		});
		$('.section li').each(function() {
			$(this).removeClass('active');
		});
		$('.section a').each(function() {
			$(this).removeClass('active');
		});
		$('.section_second').each(function() {
			$(this).removeClass('active');
		});
		$('.section_second li').each(function() {
			$(this).removeClass('active');
		});
		$('.section_second a').each(function() {
			$(this).removeClass('active');
		});

		if (!!sublink_key) {
			// debugger;
			sublink_vertical_offsets[sublink_key].parents('.section').addClass('active');
			sublink_vertical_offsets[sublink_key].addClass('active');
			sublink_vertical_offsets_second[sublink_key].parents('.section_second').addClass('active');
			sublink_vertical_offsets_second[sublink_key].addClass('active');
		}
	}

	setNavPosition();
	// debugger;
	// console.log(mainlink_vertical_offsets);
	$(window).bind('scroll', function() {
		setNavPosition();

		// MAINLINK START
		// let mainlink_keys = Object.keys(mainlink_vertical_offsets).map(function(n) {
		// 	return parseInt(n)
		// });
		// let mainlink_key = null;
		// $.each(mainlink_keys, function(i, num) {
		// 	if (scrollPos >= num) {
		// 		mainlink_key = num;
		// 	}
		// });
		// $('.section a').each(function() {
		// 	$(this).removeClass('active');
		// });
		// $('li.section').each(function() {
		// 	$(this).removeClass('active');
		// });

		// if (!!mainlink_key) {
		// mainlink_vertical_offsets[mainlink_key].addClass('active');
		// 	mainlink_vertical_offsets[mainlink_key].parent().addClass('active');
		// }

	});
} );
