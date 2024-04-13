const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

function random(){
    return Math.floor(Math.random()*4);
}

var ran=random();
document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("main").style.backgroundColor=colors[ran];
    document.querySelector("span").textContent=colors[ran];
})

document.querySelector(".btn").addEventListener("click",function(){
    var ran1=random();
    document.querySelector("main").style.backgroundColor=colors[ran1];
    document.querySelector("span").textContent=colors[ran1];
})