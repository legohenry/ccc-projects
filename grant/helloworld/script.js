$(document).ready(function() {
    $box = $('#box');
    $box.mouseenter(function() {
	$(this).animate({
            height: '+=30px',
	    width: '+=30px'
	});
    });
    $box.mouseleave(function() {
	$(this).animate({
            height: '-=30px',
	    width: '-=30px'
	});
    });
});
