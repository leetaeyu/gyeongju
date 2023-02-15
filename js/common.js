$(function(){
    $(".depth1 > li > a").mouseenter(function(){
        $(this).parent().siblings().find("a").removeClass("on");
        $(".hd_wrap").removeClass("active");
        $(".depth2").removeClass("boxon");
    });
    $(".depth_on1").mouseenter(function(){
        $(this).parent().parent().siblings(".depth2").removeClass("boxon");
        $(this).addClass("on");
        $(".hd_wrap").addClass("active");
        $(this).parent().parent().siblings(".depth2_1").addClass("boxon");
    });
    $(".depth_on2").mouseenter(function(){
        $(this).parent().parent().siblings(".depth2").removeClass("boxon");
        $(this).addClass("on")
        $(".hd_wrap").addClass("active");
        $(this).parent().parent().siblings(".depth2_2").addClass("boxon");
    });
    $(".depth_on5").mouseenter(function(){
        $(this).parent().parent().siblings(".depth2").removeClass("boxon");
        $(this).addClass("on")
        $(".hd_wrap").addClass("active");
        $(this).parent().parent().siblings(".depth2_5").addClass("boxon");
    });
    $(".depth2").mouseleave(function(){
        $(".depth1 > li > a").removeClass("on");
        $(".hd_wrap").removeClass("active");
        $(".depth2").removeClass("boxon");
    });


    $(".ham_on").click(function(){
        $("body").toggleClass("hidden");
        $(".site_container").toggleClass("siteon");
    })
})