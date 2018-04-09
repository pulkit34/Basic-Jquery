 $('.text').on({
        mouseenter: function(){
            $(this).css("color", "black");
        },  
        mouseleave: function(){
            $(this).css("color", "white");
        }

    });
$('.menu').click(function(){
	
	
	$('.text').animate({
		
		width: 'toggle'
	});
	
});