$(function(){
    let wH = window.innerHeight;
    let scTop = 0;


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



    $(document).scroll(function(){
        scTop = $(document).scrollTop();
        $(".ani_top, .ani_left, .visual_label_pc").each(function(){
            let offsetTop = $(this).offset().top - wH;
            //console.log(offsetTop);
            if(scTop > offsetTop) {
                $(this).addClass("fade_in");
            } else {
                $(this).removeClass("fade_in");
            }
        });
    });
})