
$.fn.slideIn = function(){
	this.show();
	this.css('position','relative');

	this.css('left',this.outerWidth()+ 100 +'px')
	.animate({'left':'0px'}, "fast");
};

$.fn.slideOut = function(){
	this.css('position','relative');
	self = this;

	this.css('left','0px')
	.animate({'left':this.outerWidth()+ 100 + 'px'}, "fast", function(){

		// Need to make modular, understand the closures better for this task
		$('#top-bar-right').hide();
	});
};

$.fn.slideInMenu = function(){
	if(this.attr('id') == 'top-bar-right'){
		if(this.is(':visible')){
			this.slideOut();
			$('#menu-icon-img').attr('src',"/static/images/menu-icon-white2.png");
		}else{
			this.slideIn();
			$('#menu-icon-img').attr('src',"/static/images/x-icon.png");
		}
	}else{
		this.toggle();
	}
};



$(document).ready(function() {
	$('#menu-icon-container').click(function(){
		$('.cto-present-menu').slideInMenu();
	});
});