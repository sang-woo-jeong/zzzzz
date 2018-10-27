function a(event){
  var x = event.clientX;
  var y = event.clientY;
  console.log(event);
  document.querySelector(".gd").innerHTML = `Vertical DATA<br/>
                                            >>>> N ${x} ${x/29} ${x/31}<br/>
                                            Horizontal DATA<br/>
                                            >>>> W ${y} ${y/29} ${y/31}<br/>
                                            isTrusted : ${event.Trusted} screenX : ${event.screenX} screenY : ${event.screenY}` ;

};

function li(num){
  var bar = document.querySelectorAll(".bar");
  setInterval(function(){
    for(var i = 0; i<bar.length;i++){
      var barHeight = Math.random()*num*50;
      bar[i].style.height = barHeight+"px";
    }
  },500)

  document.querySelector(`.server${num}`).innerHTML = `${num} - ONLINE ------------------------------ 200`;
  document.querySelector(`.server${num}`).style.color = "#00dbd3";
  var selected = document.querySelectorAll(`.lense${num}`);
  selected[0].style.animationPlayState ="running";
  selected[1].style.animationPlayState ="running";
  setTimeout(function(){
    document.querySelector(".globe").setAttribute("src","./img/3.gif");
  },6000);
  setTimeout(function(){
    bomb.setAttribute("src","./img/5.gif");
  },9000);
  setTimeout(function(){
    war.setAttribute("src","./img/6.gif");
  },12000);
};
