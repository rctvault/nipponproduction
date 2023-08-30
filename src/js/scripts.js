
const navIcon = document.querySelector('.navbar-toggler');
const mbNav = document.querySelector('aside');
const navigation = document.querySelector('nav');
const body = document.querySelector('body');


function initMbMobile(){
  const html = document.querySelector('html');
  navIcon.addEventListener('click', function() {
    this.classList.toggle('is-active'); 
    mbNav.classList.toggle('is-active');
    navigation.classList.toggle('is-active');
    html.classList.toggle('no-scrolling');
  });

}

function addNavClass(){
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
      navigation.classList.add("scrolled");
    } else {
      navigation.classList.remove("scrolled");
    }
});
     
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
    
      yPercent: 0,
      scrollTrigger: {
        trigger: item,
        start: 'top 80%', 
       
     
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
        yPercent: 0,
        scrollTrigger: {
          trigger: itemrowItem,
          start: 'top 80%', 
         
       
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


$(document).ready(function(){
  addNavClass();
  initMbMobile();
  navAnim();
  animatePageTitle();
});