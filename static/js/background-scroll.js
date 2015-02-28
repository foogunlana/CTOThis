$(document).ready(function(){
	$('body').each(function(){
        var $bgobj = $(this); // assigning the object
        var xPos = $(this).css('backgroundPosition').split(' ')[0];
        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / 10*$bgobj.data('speed'));
            // Put together our final background position
            var coords = xPos + ' ' + yPos + 'px';
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        });
    });
});
