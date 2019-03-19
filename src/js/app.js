(function($){
    $(document).ready(function(){

//Липкое меню
        $(document).on('scroll resize',function(){
            let scrollig = $(document).scrollTop();
            
            if(scrollig >= 750){
                $('nav').addClass('fixed');
            } else {
                $('nav').removeClass('fixed');
            }
        })



    });
})(jQuery);