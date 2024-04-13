var i =0;
var value=document.querySelector(".value")

document.querySelector(".null").addEventListener("click",function(){
    i=0;
    value.innerHTML=i;
})
document.querySelector(".add").addEventListener("click",function(){
    i+=1;
    value.innerHTML=i;
})
document.querySelector(".minus").addEventListener("click",function(){
    i-=1;
    value.innerHTML=i;
})