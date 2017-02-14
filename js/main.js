$('.dr-left, .dr-right').click(function(){
    if($('.dr-left, .dr-right').hasClass('active')){
        $('.dr-left, .dr-right').removeClass('active')
    } else {
        $('.dr-left, .dr-right').addClass('active')
    }
});