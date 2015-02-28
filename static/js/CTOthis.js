
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

$.fn.beneath = function ($element) {
    // This function simply places an element beneath another
    element_ends = $element.position().top + $element.outerHeight();
    this.css('top', element_ends + 'px');
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
    $('#page2').beneath($('#page1'));

// if on a mobile screen, add this class "show on page 2" which will remove them from the 1st page
    var top_right_bar = $('#top-bar-right');
    var dropdown = $('#mobile-dropdown-menu');
    dropdown.hide();
    top_right_bar.hide();

    if($(window).width() < 640){
        top_right_bar.removeClass('cto-present-menu');
        dropdown.addClass('cto-present-menu');
    }else{
        dropdown.removeClass('cto-present-menu');
        top_right_bar.addClass('cto-present-menu');
    }

// On resizing the page, re-center the main title and the circle button continuously
    $(window).resize(function(){
        $('.main-title').horizontalCenter();
        $('.circle-button').horizontalCenter();
    });


// scroll for container div

});