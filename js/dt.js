<!--
  window.onload = function(){
    setTimeout(function(){
      scrollTo(0,0);
    },100)
  }
  $(document).ready(function(){
    var i = 0;
    function displayTransition(){
      var delta = 0;
      var displayHeight = document.querySelector(".sec1").clientHeight;
      $(window).on("mousewheel",function(e){
        var delta = e.originalEvent.wheelDelta;
        if(delta<0){
          if($("html,body").is(":animated")){
            return;
          }else{
            i++;
            if(i>$("section").length-1){
              i=$("section").length-1;
            }
            $("html").stop().animate({scrollTop:i*displayHeight},600);
          }
        }else if(delta>0){
          if($("html,body").is(":animated")){
            return;
          }else{
            i--;
            if(i<0)i=0;
            $("html").stop().animate({scrollTop:i*displayHeight},600);
          }
        }
      })
    }
    displayTransition();
  })
//-->
