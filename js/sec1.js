function countDown(){
  var countDown = document.querySelector(".countDown");
  var cdm = document.querySelector(".m");
  var cds = document.querySelector(".s");
  var cdms = document.querySelector(".ms");
  var cdmin = 9;
  var cdsec = 59;
  var cdmsec = 59;
  setInterval(function(){
    cdmsec--;
    if(cdmsec<0) {
      cdmsec=59;
      cdsec--;
      if(cdsec<0){
        cdsec=59;
        cdmin--;
        if(cdmin<0){
          alert();
        }
      }
    }
    cdms.innerHTML = cdmsec;
    cds.innerHTML = cdsec;
    cdm.innerHTML = cdmin;
  },20)
}
  var lylicwrap = document.querySelector(".lylic");
function lylic(num){
  var s=0;
  if(s==0){
    var p = num;
    var lylic =
    `Buy it, Use it, Break it, Fix it,
    Trash it, Change it, Mail, Upgrade it,
    Charge it, Point it, Zoom it, Press it,
    Snap it, Work it, Quick, Erase it,
    Write it, Cut it, Paste it, Save it,
    Load it, Check it, Quick, Rewrite it,
    Plug it, Play it, Burn it, Rip it,
    Drag and, Drop it, Zip, Unzip it,
    Lock it, Fill it, Curl it, Find it,
    View it, Code it, Jam, Unlock it,
    Surf it, Scroll it, Pose it, Click it,
    Cross it, Crack it, Twitch, Update it,
    Name it, Read it, Tune it, Print it,
    Scan it, Send it, Fax, Rename it,
    Touch it, Bring it, Pay it, Watch it,
    Turn it, Leave it, Stop, Format it`;
    var splitLylic = lylic.split(",");
      var st = setInterval(function(e){
      p++;
      if(p>-1) lylicwrap.innerHTML = splitLylic[p];
      if(p==64){
        p=-1;
        lylicwrap.innerHTML = "";
        clearInterval(st);
        e.preventDefault();
      }
      },465);
  }
}
function timeline(){
  setTimeout(function(){
    countDown();
    bgm.play();
  },465)
  var o = -1;
  var tl = setInterval(function(){
    o++;
    if(o==0) lylic(-1);
    if(o==67) lylicwrap.innerHTML = "Technologic";
    if(o==69) lylicwrap.innerHTML = "";
    if(o==71) lylicwrap.innerHTML = "Technologic";
    if(o==73) lylicwrap.innerHTML = "";
    if(o==75) lylicwrap.innerHTML = "Technologic";
    if(o==77) lylicwrap.innerHTML = "";
    if(o==79) lylicwrap.innerHTML = "Technologic";
    if(o==81) lylicwrap.innerHTML =  lylicwrap.innerHTML = "<img width='200px' src='./img/2.gif'/>";
    if(o==82) clearInterval(tl);
  },465)
}
