
const navIcon = document.querySelector('.navbar-toggler');
const navigation = document.querySelector('aside');
const body = document.querySelector('body');
const kv = document.querySelector('.p-kv');

function initMbMobile(){
navIcon.addEventListener('click', function() {
    this.classList.toggle('is-active'); 
    navigation.classList.toggle('is-active');
  });
}

function addNavClass(){
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".navigation").addClass("scrolled");
    } else {
        $(".navigation").removeClass("scrolled");
    }
});
     
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
    dots: false,
    draggable: true,
    cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
     
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

function CheckListed( txtSearch ) {
  var objList = document.getElementById("dataListNetworkCountries");



  for (var i = 0; i < objList.options.length; i++) {
   
   if ( objList.options[i].value.trim().toUpperCase() == txtSearch.trim().toUpperCase() ) {
   var networkUrl = objList.options[i].dataset.url;

     $('#learnMore').attr("href", `network/`+ networkUrl )
      $('.is-covered').show();
      $('.is-not-covered').hide();
      $('.js-networktext').hide();
      return true ;
    }
   }

   $('.is-not-covered').show();
   $('.is-covered').hide();
   $('.js-networktext').hide();

   if (  txtSearch.trim().length == 0 ) {
     $('.is-covered').hide();
    $('.is-not-covered').hide();
    $('.js-networktext').show();
  }

     return false ; // text does not matched ;
     
 }


 function animatePageTitle(){
  
  const pageTitleBg = document.querySelector('.p-page-title__bg');
  const pageTitleText = document.querySelector('.p-page-title__header');
  if(pageTitleBg){
    gsap.to(pageTitleBg, {
      autoAlpha: 1,
      duration: 0.5,
      ease: "power1.in"
    });
    gsap.to(pageTitleText, {
      autoAlpha: 1,
      onComplete: initSectionAnimation
    })
  } else if (pageTitleText) {
    gsap.to(pageTitleText, {
      autoAlpha: 1,
      duration: 0.5,
      ease: "power1.in",
      onComplete: initSectionAnimation
    })
  } else {
    initSectionAnimation();
  }
 

 }

 function initSectionAnimation() {
  function scrollReveal(item){
    gsap.fromTo(item, {
      yPercent: 20,
      autoAlpha: 0,
      ease: "power1.inOut",
    },{
      autoAlpha: 1,
      duration: 1,
      yPercent: 0,
      scrollTrigger: {
        trigger: item,
        start: 'top 80%', 
        toggleActions: "play none none reverse ",  
     
    }
    });
    
  }
  function scrollStagger(itemContainer, item){
    gsap.fromTo(item, {
      yPercent: 20,
      autoAlpha: 0,
    },{
      autoAlpha: 1,
      yPercent: 0,
      
      stagger: {
        from: "start",
        ease: "back.easein",
        amount: 0.6
      },
      scrollTrigger: {
        trigger: itemContainer,
        start: 'top 80%', 
        toggleActions: "play none none reverse ",  
     
    }
    });
  }

  
  
  gsap.utils.toArray('.p-section').forEach(section => {

      // get the items
      const contentLeft = section.querySelector('.c-content-left');
      const contentRight = section.querySelector('.c-content-right');
 
      const imgBreakMain = document.querySelector('.js-grow');

    const staggerParent = section.querySelector('.js-st-p');
    const staggerChild = section.querySelectorAll('.js-st-c');


      const heading = section.querySelector('.c-heading');
      const headings = section.querySelectorAll('.c-heading');
      const testimonial = section.querySelector('.c-voiceSlider');

 

      const itemRow = gsap.utils.toArray('.js-in');

    
      // tween for Title
    
    if (contentLeft) {
        scrollReveal(contentLeft);
    }
    if (contentRight) {
      scrollReveal(contentRight);
    }
    
      
    itemRow.forEach(itemrowItem => {
      gsap.fromTo(itemrowItem, {
        yPercent: 20,
        autoAlpha: 0,
        ease: "power1.inOut",
      },{
        autoAlpha: 1,
        duration: 1,
        yPercent: 0,
        scrollTrigger: {
          trigger: itemrowItem,
          start: 'top 80%', 
          toggleActions: "play none none reverse ",  
       
      }
      })
      });
   


    if (imgBreakMain) {
      gsap.fromTo(imgBreakMain, {
        scale: 0.8,
        ease: "power2.in",
      },{
      
        scale: 1,
        scrollTrigger: {
          trigger: imgBreakMain,
          start: 'bottom bottom', 
          toggleActions: "play none none reverse ",  
          scrub: true,
       //   markers: {startColor: "orange", endColor: "blue", fontSize: "18px", fontWeight: "bold", indent: 20}
      }
      });
    }
    if (staggerParent) {
      scrollStagger(staggerParent, staggerChild);
    }
   
    if (heading) {
      scrollReveal(headings);
    }

    if(testimonial){
      scrollReveal(testimonial);
    }
  
  

  });

}

function navAnim(){
  gsap.to('.navigation', {
    ease: Power1.easeIn,
    duration: 0.6,
    autoAlpha: 1,
    y: 0
});
}

function initKv(){
  var tl = gsap.timeline({
    ease: "power1.in",
    duration: 1
  });

  tl
  .to(".p-kv__img", {
  autoAlpha: 1
}, '-=0.5')
  .fromTo(".p-kv__lead", {
    autoAlpha: 0,
    y: '20'
}, {
  autoAlpha: 1,
  y: 0
})

.to(".p-logo-bank", {
    autoAlpha: 1
}, '+=0.2'); 

}


$(document).ready(function(){
 if (kv) {
    initKv();

    $('.is-covered').hide();
    $('.is-not-covered').hide();

  }

  addNavClass();
  logoSlider();
  projectSlider();
  voiceSlider();
  initMbMobile();
 
  navAnim();
  animatePageTitle();
  

});