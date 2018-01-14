// code from
// https://codepen.io/the_ruther4d/pen/aEGAJ

$(function(){

  var ll = $('.lazy');
  var lh = []
  var wscroll = 0;
  var wh = $(window).height();

  function update_offsets(){
    $('.lazy').each(function(){
      var x = $(this).offset().top;
      lh.push(x);
    });
  };

  function lazy() {
    wscroll = $(window).scrollTop();
    for(i = 0; i < lh.length; i++){
      if(lh[i] <= wscroll + (wh - 200)){
        $('.lazy').eq(i).addClass('loaded');
      };
    };
  };

  // Page Load
  update_offsets();
  lazy();

  $(window).on('scroll',function(){
    lazy();
  });
})