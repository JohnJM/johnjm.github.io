//Old DOM jQuery
$(document).ready(function() { 
	$(window).scroll(function() {
  	if($(document).scrollTop() > 20)  {
    	$('.header').addClass('headerScroll2');
      $('.myheader').addClass('orangeUnderline2'); 

    }
    else {
    $('.header').removeClass('headerScroll2');
    $('.myheader').removeClass('orangeUnderline2');

    }
  });
});

  $(document).ready(function() {
  	$(window).scroll(function() {
    	if(
        $(document).scrollTop() > 20 &&
        ($(window).width() < 540) &&
        ($(window).width() > 335) &&
        ($(window).height() > 800)
      ){
        $('.header').addClass('headerScroll');
        $('.myheader').addClass('orangeUnderline');
        $('.mobileLogo').addClass('flyUplogo');
        setTimeout(logoDisplayNone, 1860);
      }
      else {
      $('.header').removeClass('headerScroll');
      $('.myheader').removeClass('orangeUnderline');
      }
    });

  function logoDisplayNone(){
    $('.mobileLogo').addClass('displayNone');
    $('.mobileLogo').removeClass('flyUplogo');
    $('.heyqt').addClass('top50');
  }
});

$(document).ready(function() {
    if(
      ($(window).width() < 540) &&
      ($(window).height() < 800)
    ){
      $('.mobileLogo').addClass('displayNone');
      $('.heyqt').addClass('top50');
    }
});
