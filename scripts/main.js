$(window).on("load", function() {

    var app = new Vue({
        el: '#playerList',
        data: {
            players: [
                {
                    "id": 1,
                    "name": "Jakob",
                    "elo": 10
                },
                {
                    "id": 2,
                    "name": "Zach",
                    "elo": 10
                },
                {
                    "id": 3,
                    "name": "Brennan",
                    "elo": 10
                }
            ]
        },
        computed: {
            "numPlayers": function() {
                if (app === undefined){
                    return 0;
                } else {
                    var len = app.players.length
                    return len;
                }
            }
        },
        methods: {
            "changePlayerName": function(id) {
                var guy = app.players.filter(d => d.id === id)[0]
                guy.name = $("#"+id).val()
                console.log(guy)
                console.log(app.players)
            },
            "addPlayer": function() {

                var template = {
                    "id": 4,
                    "name": "Enter a name...",
                    "elo": 0
                }

                app.players.push(template);

                console.log("player added")
            }
        }

    })


    setInterval(function(){ 
        $('.pre-loader').addClass('exit');
    }, 300);
    



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
    // Anims specific to the home page
    TweenMax.staggerFromTo([".intro-text-line","#work-title",".project-card"], .9, {opacity:0, y:50}, {opacity:1, y:0, ease: Power3.easeInOut}, 0.05);
    
    TweenMax.staggerFromTo(".top-nav-item", .7, {opacity:0, y:25}, {opacity:1, y:0, ease: Power2.easeInOut}, 0.05);
    TweenMax.fromTo(".profile-card-container .bottom-card", ".profile-card-container .top-card", 0.4, {opacity:0, x:12, y:12, rotation:6}, {opacity:1, x:0, y:0,  rotation:0, ease: Power2.easeInOut}, 0.55);
    TweenMax.fromTo(".profile-card-container .top-card", 0.95, {opacity:0, y:50}, {opacity:1, y:0, ease: Power2.easeInOut}, 0.55);
    
    //Anims specific to the portfolio item pages
    TweenMax.staggerFromTo([".project-start--container",".portfolio-item-title",".portfolio-item-info-list","p.portfolio-item",".portfolio-item-nav"], 0.9, {opacity:0, y:50}, {opacity:1, y:0, ease: Power3.easeInOut}, 0.05);
    //TweenMax.staggerFromTo(".menu-btn", .7, {opacity:0, y:-50}, {opacity:1, y:0}, 0.15);
    TweenMax.fromTo([".menu-btn",".left-link-block"], 0.7, {opacity:0}, {opacity:1, ease: Power4.easeInOut});


});