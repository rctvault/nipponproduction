const kv = document.querySelector('.p-kv');
function logoSlider(){
    $('.p-bank-slider').slick({
        arrows: false,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplaySpeed: 0,
        cssEase: 'linear',
        speed: 6000,
        variableWidth: true,
        pauseOnHover: true,
        responsive: [
        {
            breakpoint: 1300,
            settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            
            }
        },
        
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,


            }
        }
        
        ]
    });

    }

    $(document).ready(function(){
        if (kv) {
            initKv();
        
            $('.is-covered').hide();
            $('.is-not-covered').hide();
            $('.is-perhaps-covered').hide();
        
          }
        logoSlider();
      });