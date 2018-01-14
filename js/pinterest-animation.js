
$(function() {


	// variable controller
	var controller = new ScrollMagic.Controller();

	
	//homepage navbar scroll effect


	 


	var tweenSunglasses = TweenMax.to(".sunglasses", 1, {y: '-200vh', x: 0});
	var sceneSunglasses = new ScrollMagic.Scene({
							triggerElement: "#hello", 
							triggerHook: "onLeave", 
							duration: "100%"
						})
					.setTween(tweenSunglasses)
					.addTo(controller);	

	var tweenmakeup5 = TweenMax.to(".makeup5", 1, {y: '-100vh', x: 0});
	var scenemakeup5 = new ScrollMagic.Scene({
							triggerElement: "#can_do", 
							triggerHook: .75, 
							duration: "50%"
						})
					.setTween(tweenmakeup5)
					.addTo(controller);	

	var tweenmakeup1 = TweenMax.to(".makeup1", .5, {y: '-100vh', x: 0});
	var scenemakeup1 = new ScrollMagic.Scene({
							triggerElement: "#can_do", 
							triggerHook: .5, 
							duration: "100%"
						})
					.setTween(tweenmakeup1)
					.addTo(controller);	
	var tweenlipstick3 = TweenMax.to(".lipstick3", .5, {y: '-100vh', x: 0});
	var scenelipstick3 = new ScrollMagic.Scene({
							triggerElement: ".search_2", 
							triggerHook: .5, 
							duration: "100%"
						})
					.setTween(tweenlipstick3)
					.addTo(controller);	
	var dw_watch = TweenMax.to(".dw_watch", 1, {y: '-150vh', x: 0});
	var scenedw_watch = new ScrollMagic.Scene({
							triggerElement: ".buyable_visual_results", 
							triggerHook: .5, 
							duration: "100%"
						})
					.setTween(dw_watch)
					.addTo(controller);		

	var lipgloss = TweenMax.to(".lipgloss", 1, {y: '-100vh', x: 0});
	var scenelipgloss = new ScrollMagic.Scene({
							triggerElement: ".product_lightbox", 
							triggerHook: .5, 
							duration: "100%"
						})
					.setTween(lipgloss)
					.addTo(controller);	

	var makeup4 = TweenMax.to(".makeup4", 1, {y: '-100vh', x: 0});
	var scenemakeup4 = new ScrollMagic.Scene({
							triggerElement: ".to_buy_board", 
							triggerHook: .5, 
							duration: "100%"
						})
					.setTween(makeup4)
					.addTo(controller);					

	var tweenblueberry1 = TweenMax.to(".blueberry1", .5, {y: '-100vh', x: 0});
	var sceneblueberry1 = new ScrollMagic.Scene({
							triggerElement: "#ideas", 
							duration: "100%"
						})
					.setTween(tweenblueberry1)
					.addTo(controller);	

	var tweenblueberry2 = TweenMax.to(".blueberry2", .5, {y: '-200vh', x: 0});
	var sceneblueberry2 = new ScrollMagic.Scene({
							triggerElement: "#ideas", 
							duration: "100%"
						})
					.setTween(tweenblueberry2)
					.addTo(controller);		

	var tweenblueberry3 = TweenMax.to(".blueberry3", .5, {y: '-100vh', x: 0});
	var sceneblueberry3 = new ScrollMagic.Scene({
							triggerElement: "#ideas", 
							
							duration: "100%"
						})
					.setTween(tweenblueberry3)
					.addTo(controller);	

	var tweenblueberry4 = TweenMax.to(".blueberry4", .5, {y: '-200vh', x: 0});
	var sceneblueberry4 = new ScrollMagic.Scene({
							triggerElement: "#ideas", 
							triggerHook: .75, 
							duration: "100%"
						})
					.setTween(tweenblueberry4)
					.addTo(controller);	


});
