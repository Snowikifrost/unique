(function ($) {
  $(document).ready(function () {
    new WOW().init();
$('.logo').on('click',function(){
  $('body,html').animate({
    scrollTop:0
  },600);
});

    if($(window).width() < 758){
      $('.one-works-container').on('click',function(){
        $(this).find('.title-hover').hasClass('showed') ?  $(this).find('.title-hover').css({
          opacity: 0
        }).removeClass('showed') : $(this).find('.title-hover').css({
          opacity:0.9
        }).addClass('showed');
        
       
       
      });
    }


    //Адаптивное меню
    $('.menu-trigger').click(function(){
      $('nav ul').slideToggle(500);
      if($(this).hasClass('clicked-menu')){
        $(this).removeClass('clicked-menu');
      } else{
        $(this).addClass('clicked-menu');
      }
      });
    $(window).resize(function(){
      if ($(window).width() > 501) {
        $('nav ul').removeAttr('style')
      }
    });
    


    //Плавный скролл
    var nav = $('nav .container ul');
    nav.find('li a').on('click', function (e) {
      var linkTrgt = $($(this).attr('href'));
      if (linkTrgt.length > 0) {
        e.preventDefault();
        var offset = linkTrgt.offset().top;
        $('body, html').animate({
          scrollTop: offset - 50
        }, 750);
        if($('.menu-trigger').hasClass('clicked-menu')){
          $('.menu-trigger').removeClass('clicked-menu');
          $('nav ul').slideUp(500);
        };
      }
    });
    $('.scroll-top').on('click', function (e) {
      e.preventDefault;
      $('html, body').animate({
        scrollTop: '0px'
      }, 800);
    });
    $('.header-block a').on('click', function (e) {
      e.preventDefault;
      let offtop = $('#offer').offset().top;
      $('html, body').animate({
        scrollTop: offtop + 'px'
      }, 900);
    }); 

    //Яндекс Карты
    $.fn.MapsInit = function () {

      var lpMapOptions = {
        center: [53.904230, 27.566923],
        zoom: 14,
        controls: []
      }
      lpMapOptions.behaviors = [];
      var lpMap = new ymaps.Map('map', lpMapOptions);

      var lpPlacemark = new ymaps.Placemark(lpMapOptions.center, {
        hintContent: 'Мы могли бы находиться здесь',
        balloonContentHeader: 'ЯКомпания',
        balloonContentBody: 'портфолио карта',
        balloonContentFooter: '...'
      });

      lpMap.geoObjects.add(lpPlacemark);
    }
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

    //карусель цитат
    $(".owl-carousel-container").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      nav: true,
      navText: ['<i class="fas fa-caret-square-left"></i>', '<i class="fas fa-caret-square-right"></i>']
    });
    $(".owl-carousel-logos").owlCarousel({
      loop: true,
      responsive : {
        0 : {
            items:1
        },
        540 : {
          items:2
        },
        1300 : {
          items:3
            
        } 
        
      },
      nav: true,
      margin: 15,
      navText: ['<i class="fas fa-caret-square-left"></i>', '<i class="fas fa-caret-square-right"></i>']
    });

    //Включение паралакса
    if($(window).width() > 758){
      var rellax = new Rellax('.header-block', {
        speed: -3
      });
    }

    //Круглые прогресс бары
    var graph = new Chartist.Pie('.ch-rts1', {
      series: [60, 300]
    }, {
      donut: true,
      donutWidth: 10,
      donutSolid: true,
      startAngle: 0,
      total: 360,
      showLabel: false
    });
    var graphb = new Chartist.Pie('.ch-rts2', {
      series: [100, 260]
    }, {
      donut: true,
      donutWidth: 10,
      donutSolid: true,
      startAngle: 0,
      total: 360,
      showLabel: false
    });
    var graphc = new Chartist.Pie('.ch-rts3', {
      series: [200, 160]
    }, {
      donut: true,
      donutWidth: 10,
      donutSolid: true,
      startAngle: 0,
      total: 360,
      showLabel: false
    });
    var graphx = new Chartist.Pie('.ch-rts4', {
      series: [60, 300]
    }, {
      donut: true,
      donutWidth: 10,
      donutSolid: true,
      startAngle: 0,
      total: 360,
      showLabel: false
    });
    var graphe = new Chartist.Pie('.ch-rts6', {
      series: [40, 320]
    }, {
      donut: true,
      donutWidth: 10,
      donutSolid: true,
      startAngle: 0,
      total: 360,
      showLabel: false
    });
    var grapha = new Chartist.Pie('.ch-rts5', {
      series: [290, 70]
    }, {
      donut: true,
      donutWidth: 10,
      donutSolid: true,
      startAngle: 90,
      total: 360,
      showLabel: false
    });

    //ПОП АП 
    $('.pop-up-read').magnificPopup({
      type: 'inline'
  });
  $('button').on('click',function(){
    ($(this).hasClass('owl-next') || $(this).hasClass('owl-prev')  )? '':alert('thanks for clicking');
    
  })
  });
})(jQuery);