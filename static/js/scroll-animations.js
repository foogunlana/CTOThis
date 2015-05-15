

$(document).ready(function(){
    var navHeight = $('.cto-navbar').outerHeight();
    var endOfPage1 = $('#page1').outerHeight();
    $('.showOnPage2').hide();

    // Scroll button animation
    $(window).scroll(function(){
        var top = $(this).scrollTop();
        if (top >= endOfPage1 - (2*navHeight)) {
            $('.showOnPage2').fadeIn();
        } else {
            $('.showOnPage2').fadeOut();
        }

    });
    
// Click the title on page 2 to scroll to the top of page 1, click the button on page 1 to scroll to the top of page 2
    $('.scrollDown').click(function(){
        $('html, body').animate({scrollTop : endOfPage1 - navHeight},800);
        return false;
    });

    $('#ventures').click(function(){
        $('html, body').animate({scrollTop : $('#page2').outerHeight() + endOfPage1 - navHeight},1000);
        return false;
    });

    $('.scrollVentures').click(function(){
        $('#ventures').click();
        $('#mobile-dropdown-menu').hide();
    });

    $('.scrollDevelopers').click(function(){
        $('.scrollDown').click();
        $('#mobile-dropdown-menu').hide();
    });

    $('.scrollFooter').click(function(){
        $('html, body').animate({scrollTop : $('#page2').outerHeight() + $('#page3').outerHeight() +endOfPage1 - navHeight},1500);
        $('#mobile-dropdown-menu').hide();
        return false;
    });
    
    $('#scrollUp').click(function(){
        $('html, body').animate({scrollTop : 0},1000);
        return false;
    });
});