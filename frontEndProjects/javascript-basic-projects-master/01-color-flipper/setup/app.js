const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

document.querySelector(".btn").addEventListener("click",color);

function color(){
    var random=Math.floor(Math.random()*4);
    var ran_col=colors[random];
    document.querySelector("body").style.background=ran_col;
    document.querySelector("span").innerHTML=ran_col;
}