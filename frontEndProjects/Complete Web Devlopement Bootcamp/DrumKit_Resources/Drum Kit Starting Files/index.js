var audios=["sounds/crash.mp3","sounds/kick-bass.mp3","sounds/snare.mp3","sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3",];
var x=[];

for (var i=0;i<document.querySelectorAll(".drum").length;i++){
    x.push(document.querySelectorAll(".drum")[i].innerHTML);
    document.querySelectorAll(".drum")[i].addEventListener("click", function playsound(event){
        // console.log(event);
        y=x.indexOf(this.innerHTML);
        zoomin(this.innerHTML);
        var aud=new Audio(audios[y]);
        aud.play();
    })
}
//Detecting Button Clicks
//Detecting KeyBoard Strokes
document.addEventListener("keypress",function(event){
    zoomin(event.key);
    var z=x.indexOf(event.key);
    if (z!=-1) {
        var aud=new Audio(audios[z]);
        aud.play();
}})

function zoomin(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    },100)
}

