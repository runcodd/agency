$(function() {

	// Custom JS
  $(window).scroll(function () {
    var wScroll = $(this).scrollTop();
      if(wScroll > 30){
        $('.header').css({
          'background-color':'rgba(0,0,0,0.7)'
        });
      }
      else {
        $('.header').css({
          'background-color':'transparent'
        });
      }
  });


});
