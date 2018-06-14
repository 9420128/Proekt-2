$(document).ready(function(){
  var touch = $('.nav__btn');
  var menu = $('.nav__ul'); 
 
  $(touch).on('click', function(e) {
    e.preventDefault();
    menu.toggleClass('nav__ul_active');
    $(this).toggleClass('nav__btn_active');
  });
  $(window).resize(function(){
    var wid = $(window).width();
    if(wid > 960 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
});
//menu.slideToggle();