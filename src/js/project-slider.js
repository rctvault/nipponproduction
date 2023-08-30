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
  $(document).ready(function(){
    projectSlider();
  });