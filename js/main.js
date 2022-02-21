$(document).ready(function(){

    $(".dp1").mouseenter(function(){
        $(".sub").stop().slideDown();
    });
    $("header").mouseleave(function(){
        $(".sub").stop().slideUp();
    });

    $('.main_visual_imgs').slick({
        autoplay:true,
        arrows:false,
        dots:true,
        fade: true,
        speed: 300,
    });
    $('.minislide').slick({
        autoplay:true,
        arrows:false,
        dots:true,
        fade: true,
        speed: 400,
    });
    $('.codi').slick({
        autoplay:true,
        arrows:false,
        dots:true,
        fade: true,
        speed: 200,
    });
    

    $("game_info ul li").mouseenter(function(){
        $(this).addClass("big");
    })
    .mouseleave(function(){
        $(this).removeClass("big");
    })

      
});

