x=0;
y=document.getElementById("value");
document.querySelector(".decrease").addEventListener("click",function(){
    x-=1;
    y.innerHTML=x;
    color();
});
document.querySelector(".increase").addEventListener("click",function(){
    x+=1;
    y.innerHTML=x;
    color();

});
document.querySelector(".reset").addEventListener("click",function(){
    x=0;
    y.innerHTML=0;
    color();
});

function color(){
    if (x>0) y.style.color="red";
    else if (x<0) y.style.color="green";
    else y.style.color="black";
// if (getElementById("value").innerHTML>0) document.getElementById("value").style.color="red";
}