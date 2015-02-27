
// jQuery functions for centering elements on html
$.fn.verticalCenter = function () {
    this.css("position","absolute");
    this.css("top", Math.max(44,($(window).height() - $(this).outerHeight()) / 2) + "px");
};

$.fn.horizontalCenter = function () {
    this.css("position","absolute");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
};

$.fn.center = function () {
    this.horizontalCenter();
    this.verticalCenter();
};

$(document).ready(function(){

// first centre the CTO This title and the button underneath
    var main_title_top = $('.main-title').position().top;
    var main_title_height = $('.main-title').outerHeight();
    var main_title_bottom = main_title_top + main_title_height + 20;

    $('.main-title').center();
    $('.circle-button').horizontalCenter();

// Resize page1 div and start page2 div according to the end of the button
    var navHeight = $('.cto-navbar').outerHeight();

    var circle_height = $('.circle-button').outerHeight();
    var endOfPage1 = Math.max(main_title_bottom + (circle_height + 50),$(window).height());
    var circle_top = endOfPage1 - circle_height;

    // Put circle at the bottom if the page is big enough
    if(circle_top > main_title_bottom){
        $('.circle-button').css('top',circle_top);
    } else {
        $('.circle-button').css('top', main_title_bottom + 'px');
    }

    $('#page1').outerHeight(endOfPage1);
    $('#page2').css('top',(endOfPage1 + 'px'));

// if on a mobile screen, add this class "show on page 2" which will remove them from the 1st page
    if($(window).width() < 640){
        $('#top-bar-right').addClass('showOnPage2');
    }

    $('.showOnPage2').hide();

// Scroll button animation
    var pageBottom = $('#page2').position().top;

    $(window).scroll(function(){
        var top = $(this).scrollTop();
        if (top >= pageBottom - (2*navHeight)) {
            $('.showOnPage2').fadeIn();
        } else {
            $('.showOnPage2').fadeOut();
        }

    });
    
// Click the title on page 2 to scroll to the top of page 1, click the button on page 1 to scroll to the top of page 2
    $('.scrollDown').click(function(){
        $('html, body').animate({scrollTop : pageBottom - navHeight},800);
        return false;
    });
    
    $('#scrollUp').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

// On resizing the page, re-center the main title and the circle button continuously
    $(window).resize(function(){
        $('.main-title').horizontalCenter();
        $('.circle-button').horizontalCenter();
    });

// scroll background slow motion animation
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