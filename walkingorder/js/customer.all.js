$(function(){
    var notClickedBorder = '1px solid rgb(238, 238, 238)';
    var clickedBorder = '1px solid #FF8000';

    var notClickedBackground = 'rgb(250, 250, 250)';
    var clickedBackground = '#FF8000';

    // 다 ㄲㅈㄲㅈ
    $('.menu_main li a').on('click',function(){
        $('.menu_main li a').css('border',notClickedBorder);
        $('.menu_main li a').css('background-color',notClickedBackground);
    })

    $('a[data-stats-id=all]').on('click',function(){
        $('.detail-page').hide();
        $('.detail-all').show();

       
        $('a[data-stats-id=all]').css('border',clickedBorder);
        $('a[data-stats-id=all]').css('background-color',clickedBackground);

    })

    $('a[data-stats-id=kakaotalk]').on('click',function(){
        $('.detail-page').hide();
        $('.detail-kakaotalk').show();

        $('a[data-stats-id=kakaotalk]').css('border',clickedBorder);
        $('a[data-stats-id=kakaotalk]').css('background-color',clickedBackground);
    })

    $('a[data-stats-id=FAQ]').on('click',function(){
        $('.detail-page').hide();
        $('.detail-faq').show();

        $('a[data-stats-id=FAQ]').css('border',clickedBorder);
        $('a[data-stats-id=FAQ]').css('background-color',clickedBackground);
    })

    $('a[data-stats-id=notice]').on('click',function(){
        $('.detail-page').hide();
        $('.detail-notice').show();

        $('a[data-stats-id=notice]').css('border',clickedBorder);
        $('a[data-stats-id=notice]').css('background-color',clickedBackground);
    })

    $('a[data-stats-id=event]').on('click',function(){
        $('.detail-page').hide();
        $('.detail-event').show();

        $('a[data-stats-id=event]').css('border',clickedBorder);
        $('a[data-stats-id=event]').css('background-color',clickedBackground);


    })
})

