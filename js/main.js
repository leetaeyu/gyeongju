$(function(){
    var nightSwiper = new Swiper(".night_swiper", {
        spaceBetween:0,
        speed:800,
        centeredSlides: true,
        infinite:true,
        loop:true,
        effect : 'fade',
        fadeEffect: { 
            crossFade: true 
        },
        autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
    });
})