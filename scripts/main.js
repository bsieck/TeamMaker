$(window).on("load", function() {
//$( document ).ready(function() {

    setInterval(function(){ 
        $('.pre-loader').addClass('exit');
    }, 300);
    


	// // Entrance Anims 
	// $('#login-container').addClass('entrance-anim ');

    // $('#about-link').hover(
    //     function() {
    //     	$("#about-box").toggleClass("filled");
    //     }
    // );

    // $('#contact-link').hover(
    //     function() {
    //         $("#contact-box").toggleClass("filled");
    //     }
    // );

    // $('#card-1 a.missing-corner-btn').hover(
    //     function() {
    //         $("#card-1 .card-text").toggleClass("expanded");
    //         $("#card-1 .card-text h3").toggleClass("active");
    //     }
    // );

    // $('#card-4 a.missing-corner-btn').hover(
    //     function() {
    //         $("#card-4 .card-text").toggleClass("expanded");
    //         $("#card-4 .card-text h3").toggleClass("active");
    //     }
    // );

	// setTimeout(function(){
	// 	$("#card-1").addClass("anim-in")
	// 	//console.log("test");
	// }, 300);
    // setTimeout(function(){
    //     $("#card-2").addClass("anim-in")
    //     //console.log("test");
    // }, 400);
    // setTimeout(function(){
    //     $("#card-3").addClass("anim-in")
    //     //console.log("test");
    // }, 500);
    // setTimeout(function(){
    //     $("#card-4").addClass("anim-in")
    //     //console.log("test");
    // }, 300);

    // $('.chat-title-bar button').click(function() {

    //     $('#chat-module--container').toggleClass('closed');
    //     $('#chat-text-input').focus();
    // });

    function formatDate12Hour(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }


    

    $(document).keypress(function(e) {
        
    });

	var scrollVal = 0;

	$( window ).on('resize', function(){
		screenWidth = $(window).width();
	    if (screenWidth > 1018) {
		
		} 
		
	});

    var workLink = $(".menu-work-link");
    var aboutLink = $(".menu-work-link");
    var contactLink = $(".menu-work-link");
    var workTitle = $(".section-title-work");

	// $(".app--container").scroll(function() {
    //     console.log($(".app--container").scrollTop());
    // })

    workLink.click(function() {

        // $(".app--container").animate({
        //     scrollTop: $(".section-title-work").offset().top
        // }, 300);
        $('.menu-btn').toggleClass("expanded");

    });

    aboutLink.click(function() {
        console.log("clicked");
        $('.menu-btn').toggleClass("expanded");
    });
    contactLink.click(function() {
        console.log("clicked");
        $('.menu-btn').toggleClass("expanded");
    });


    var menuClosed = true;
	var menuBtn = $('.menu-btn.shown');
	var menuBars = $('.menu-btn.shown .bars');
	// var closeBtn = $('.menu-btn.expanded .bars');

	menuBars.click(function() {
        $('.menu-btn').toggleClass("expanded");
    });

    // menubars.click(function() {
    //     if(!menuClosed) {
    //         $('.menu-btn').toggleClass("expanded");
    //         menuClosed = !menuClosed;
    //         console.log("closed: "+menuClosed);
    //     } 
    // });

    // menuBtnOpen.click(function() {
    //     if(!menuClosed) {
    //         $('.menu-btn.shown.expanded').removeClass("expanded");
    //         menuClosed = true;
    //     } 
    // });

    // menuBtnOpen.click(function() {
    //     if(menuClosed) {
    //         $('.menu-btn').addClass("expanded");
    //         menuClosed = false;
    //     } else {
    //         $('.menu-btn').removeClass("expanded");
    //         menuClosed = true;
    //     }
    // });

    

    $(".menu--container ul li").mouseenter(function() {
        var currentItem = $(this);
        currentItem.closest("a::after").css({backgroundColor: "#ffe"});
    });

    // $(".menu-container ul li").mouseleave(function(this) {
    //     $(this).find("a:after").addClass("menu-enter");
    // });

    

    

    // closeBtn.click(function() {
    //     menuBtn.removeClass("expanded");
    // });

    // Anims specific to the home page
    TweenMax.staggerFromTo([".intro-text-line","#work-title",".project-card"], .9, {opacity:0, y:50}, {opacity:1, y:0, ease: Power3.easeInOut}, 0.05);
    
    TweenMax.staggerFromTo(".top-nav-item", .7, {opacity:0, y:25}, {opacity:1, y:0, ease: Power2.easeInOut}, 0.05);
    TweenMax.fromTo(".profile-card-container .bottom-card", ".profile-card-container .top-card", 0.4, {opacity:0, x:12, y:12, rotation:6}, {opacity:1, x:0, y:0,  rotation:0, ease: Power2.easeInOut}, 0.55);
    TweenMax.fromTo(".profile-card-container .top-card", 0.95, {opacity:0, y:50}, {opacity:1, y:0, ease: Power2.easeInOut}, 0.55);
    
    //Anims specific to the portfolio item pages
    TweenMax.staggerFromTo([".project-start--container",".portfolio-item-title",".portfolio-item-info-list","p.portfolio-item",".portfolio-item-nav"], 0.9, {opacity:0, y:50}, {opacity:1, y:0, ease: Power3.easeInOut}, 0.05);
    //TweenMax.staggerFromTo(".menu-btn", .7, {opacity:0, y:-50}, {opacity:1, y:0}, 0.15);
    TweenMax.fromTo([".menu-btn",".left-link-block"], 0.7, {opacity:0}, {opacity:1, ease: Power4.easeInOut});

    // Scroll queued anims

    // var scroll = 0;

    // $(".app--container").scroll(function() {
    //     scroll = $(".app--container").scrollTop(); 
    //     console.log("Scroll: "+scroll);
    // })
    
    // Scroll anims for Mockstarket 
    var page = 'mockstarket';

    if(page == 'mockstarket' && scroll > 0) {

        if(scroll >= 1380) {

        }
    }


});