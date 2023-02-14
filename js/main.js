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
        // autoplay: {
        // delay: 5000,
        // disableOnInteraction: false,
        // },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
        // breakpoints: {
        // 768: {
        // slidesPerView: 2,  //브라우저가 768보다 클 때
        // spaceBetween: 0,
        // centeredSlides:false,
        // },
        // 950: {
        // slidesPerView: 3,  //브라우저가 768보다 클 때
        // spaceBetween: 0,
        // centeredSlides:false,
        // },
        // 1280: {
        // slidesPerView: 4,  //브라우저가 1278보다 클 때
        // spaceBetween: 20,
        // centeredSlides:false,
        // },
        // },
    });
})