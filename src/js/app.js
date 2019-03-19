(function ($) {
    $(document).ready(function () {

        //Липкое меню
        let FixedMenu = function () {
            let scrollig = $(document).scrollTop();
            if (scrollig >= 750) {
                $('nav').addClass('fixed');
            } else {
                $('nav').removeClass('fixed');
            }
        }
        FixedMenu();
        $(document).on('scroll resize', FixedMenu);


    });
})(jQuery);