$(document).ready(function () {

    // ---------- JavaScript for the header nav bar ----------

    // add click function to drop down sub menu items if screen width < 960px (mobile view)
    if ($(window).width() < 960) {
        $('.sub-btn').click(function () {
            $(this).next('.sub-menu').slideToggle(300, 'linear');
        }); // end click
        $('.menu-icon, .close-btn').attr('tabindex', 0); // make hamburger menu button focusable on tabbing through menu
    }

    // update nav functions on window resize
    $(window).resize(function () {
        if ($(window).width() < 960) {
            $('.sub-btn').unbind('click');
            $('.sub-btn').bind('click', function () {
                $(this).next('.sub-menu').slideToggle(300, 'linear');
            }); // end click
            $('.menu-icon, .close-btn').attr('tabindex', 0); // make hamburger menu button focusable on tabbing through menu
        } else {
            // remove click event from menu items if window width > 960px (desktop view)
            // default is to hover on menu item to drop down sub menus
            $('.sub-btn').unbind('click');
            $('.menu-icon, .close-btn').attr('tabindex', -1); // make hamburger menu button unfocusable on tabbing through menu
        };
    }); // end resize

    // open nav menu on click for mobile
    $('.menu-btn').on('click', function () {
        $('.menu').addClass("active");
        $('.menu-icon').attr('tabindex', -1); // make hamburger menu button unfocusable on tabbing through menu
        $('.close-btn').attr('tabindex', 0); // make close button focusable on tabbing through menu
        $('.menu-btn').fadeOut(700);
        $('.close-btn').hide();
        $('.close-btn').delay(400).fadeIn(700);
        $('.sub-menu').hide();
    }); // end click

    // close nav menu on click for mobile
    $('.close-btn').on('click', function () {
        $('.menu').removeClass('active');
        $('.menu-icon, .close-btn').attr('tabindex', 0); // make hamburger menu button focusable on tabbing through menu
        $('.close-btn').attr('tabindex', -1); // make close button unfocusable on tabbing through menu
        $('.close-btn').fadeOut(700);
        $('.menu-btn').fadeIn(700);

    }); // end click

    // to make the menu icon usable with keyboard only
    $('.menu-icon, .close-btn').on('keyup', function (event) {
        event.preventDefault();
        if (event.keyCode == 13 || event.keyCode == 32) {
            document.activeElement.click();
        }
    });
    // ---------- end header nav menu JavaScript ----------



}); // end ready