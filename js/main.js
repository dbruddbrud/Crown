$(document).ready(function(){

    $('.top_btn').click(function(){
        $('html').animate({
            scrollTop: 0
        })
    })

    $('.menu_4>li').click(function(){
        $('.menu_4>li').removeClass('on');
        $(this).addClass('on');
        return false;
    })

    $('.menu_4>li:nth-child(1)').click(function(){
        $('.con_wrap_4>a:nth-child(1)').css({
            display: 'block'
        })

        $('.con_wrap_4>a:nth-child(2)').css({
            display: 'none'
        })

        $('.con_wrap_4>a:nth-child(3)').css({
            display: 'none'
        })

        $('#arrow1').css({
            display: 'block'
        })

        $('#arrow2').css({
            display: 'none'
        })

        $('#arrow3').css({
            display: 'none'
        })

    })

    
    $('.menu_4>li:nth-child(2)').click(function(){
        $('.con_wrap_4>a:nth-child(2)').css({
            display: 'block',
        })

        $('.con_wrap_4>a:nth-child(1)').css({
            display: 'none'
        })

        $('.con_wrap_4>a:nth-child(3)').css({
            display: 'none'
        })

        $('#arrow2').css({
            display: 'block'
        })

        $('#arrow1').css({
            display: 'none'
        })

        $('#arrow3').css({
            display: 'none'
        })
    })

    
    $('.menu_4>li:nth-child(3)').click(function(){
        $('.con_wrap_4>a:nth-child(3)').css({
            display: 'block'
        })

        $('.con_wrap_4>a:nth-child(1)').css({
            display: 'none'
        })

        $('.con_wrap_4>a:nth-child(2)').css({
            display: 'none'
        })

        $('#arrow3').css({
            display: 'block'
        })

        $('#arrow1').css({
            display: 'none'
        })

        $('#arrow2').css({
            display: 'none'
        })
    })

})//end