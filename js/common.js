$(function(){
    let wH = window.innerHeight;
    const hd = $(".visual_label_pc");
    let hdH = hd.height();  // inner (패딩) outer (보더)

    function reset() {
        hdH = hd.height();
    }

    $(document).scroll(function(){
        var scroll_bar = $(document).scrollTop();
        var fix_start = $(".visual_container").height() - 60;
        var fix_middle = $(".video_container").height();
        var fix_end =  $(".sns_container")[0].offsetTop + 2400;
        var notice_fix = $(".visual_label_pc");
        if(scroll_bar >= fix_start & scroll_bar <= fix_end){
            notice_fix.addClass("fixed")
            if(scroll_bar >= fix_middle){
                notice_fix.animate({"bottom":"0"},250)
            }
        }else{
            notice_fix.removeClass("fixed")
        }
        $(".ani_top, .ani_left").each(function(){
            let offsetTop = $(this).offset().top - wH;
            //console.log(offsetTop);
            if(scroll_bar > offsetTop) {
                $(this).addClass("fade_in");
            } else {
                $(this).removeClass("fade_in");
            }
        });
    });

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
    $(".mo_depth1 > a").click(function(){
        $(this).parent().parent().siblings().find(".mo_depth2").stop().slideUp(400);
        $(this).next().stop().slideToggle(400);
    });
    $(".mo_ham_on").click(function(){
        $("body").toggleClass("hidden");
        $(".modal").toggleClass("modal_on")
        $(".mo_site_wrap").toggleClass("mo_right");
    })
    $("a").click(function(){
        if($(this).attr("href") == "#") {
            return false;
        }
    });
})