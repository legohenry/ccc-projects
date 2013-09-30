$(document).ready(function() {
    $box = $('#box');
    $box.mouseenter(function() {
	$(this).animate({
            height: '+=30px',
	    width: '+=15px'
	});
    });
    $box.mouseleave(function() {
	$(this).animate({
            height: '-=30px',
	    width: '-=15px'
	});
    });
});
