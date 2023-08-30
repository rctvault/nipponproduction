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
    voiceSlider();
  });