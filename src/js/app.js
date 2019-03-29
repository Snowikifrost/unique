(function ($) {
    $(document).ready(function () {
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
            items: 4,
            loop: true,
            nav: true,
            margin: 15,
            navText: ['<i class="fas fa-caret-square-left"></i>', '<i class="fas fa-caret-square-right"></i>']
        });
        //Включение паралакса
        var rellax = new Rellax('.header-block', {
            speed: -3
        });
        var graph = new Chartist.Pie('.ch-rts1', {
            series: [60,300]
          }, {
            donut: true,
            donutWidth: 10,
            donutSolid: true,
            startAngle: 0,
            total: 360,
            showLabel: false
          });
          var graphb = new Chartist.Pie('.ch-rts2', {
              series: [100,260]
            }, {
              donut: true,
              donutWidth: 10,
              donutSolid: true,
              startAngle: 0,
              total: 360,
              showLabel: false
            });
            var graphc = new Chartist.Pie('.ch-rts3', {
                series: [200,160]
              }, {
                donut: true,
                donutWidth: 10,
                donutSolid: true,
                startAngle: 0,
                total: 360,
                showLabel: false
              });
              var graphx = new Chartist.Pie('.ch-rts4', {
                  series: [60,300]
                }, {
                  donut: true,
                  donutWidth: 10,
                  donutSolid: true,
                  startAngle: 0,
                  total: 360,
                  showLabel: false
                });
                var graphe = new Chartist.Pie('.ch-rts6', {
                    series: [40,320]
                  }, {
                    donut: true,
                    donutWidth: 10,
                    donutSolid: true,
                    startAngle: 0,
                    total: 360,
                    showLabel: false
                  });
                  var grapha = new Chartist.Pie('.ch-rts5', {
                      series: [290,70]
                    }, {
                      donut: true,
                      donutWidth: 10,
                      donutSolid: true,
                      startAngle: 90,
                      total: 360,
                      showLabel: false
                    });
    });
})(jQuery);