// JavaScript Document
$(function(){

$(window).scroll(function (){
    $('.fadein').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100){
              $(this).addClass('scrollin');
            }
        });
    });

});

$(function(){
  $('a[href^="#"]').on("click", function() {
  var speed = 700;
  var adjust = 50;
  var href= $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top - adjust;
  $('body,html').animate({scrollTop:position}, speed, 'swing');
  return false;
  });
});

$(function(){

  $("#menubtn").click(function(){
    $("#list").slideToggle();
  });

});

$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},300); //0.3秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(500);
	},4000); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});

$(function(){
  var _window = $(window),
    _header = $('.menu'),
    heroBottom;
 
_window.on('scroll',function(){
    heroBottom = $('.menu').height();
    if(_window.scrollTop() > heroBottom){
        _header.addClass('transform');   
    }
    else{
        _header.removeClass('transform');   
    }
});
 
_window.trigger('scroll');
})
