const kv = document.querySelector('.p-kv');

function initKv(){
var tl = gsap.timeline({
    ease: "power1.in",
    duration: 0.2
});

tl

.fromTo(".p-kv__lead", {
    autoAlpha: 0,
    y: '20'
}, {
autoAlpha: 1,
y: 0
})

.to(".p-logo-bank", {
    autoAlpha: 1
}, '-=0.2'); 

}
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

function projectSlider(){
    $('.c-worksSlider').slick({
      arrows: false,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      fade: true,
      dots: true,
      cssEase: 'linear',
    })
  }

  function voiceSlider(){
    $('.c-voiceSlider').slick({
      arrows: true,
      autoplay: false,
      speed: 400,
      dots: true,
      draggable: true,
      cssEase: 'linear',
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
       
       
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false
  
          }
        }
      
      ]
    })
    
  }

$(document).ready(function(){
  //initKv();
    logoSlider();
    projectSlider();
    voiceSlider();
});