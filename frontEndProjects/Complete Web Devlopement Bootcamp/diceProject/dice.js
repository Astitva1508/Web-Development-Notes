var ran1=Math.floor(Math.random()*6)+1;
var ran2=Math.floor(Math.random()*6)+1;
var img1="dice"+ran1+".png";
var img2="dice"+ran2+".png";
document.getElementsByTagName("img")[0].src=img1;
document.getElementsByTagName("img")[1].src=img2;
var text = null;
if (ran1>ran2) text = "Player 1 Won";
else if (ran2>ran1) text= "Player 2 Won";
else text="Match Draw" ; 
document.getElementsByTagName("footer")[0].innerHTML= text;
// document.getElementById("img2").setAttribute(src, img2);