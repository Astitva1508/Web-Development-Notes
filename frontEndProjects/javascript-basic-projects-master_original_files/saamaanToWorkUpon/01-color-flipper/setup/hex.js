const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


function random(){
    return Math.floor(Math.random()*16);
}
function hexa(){
    var ran="#";
    for (var i =0;i<6;i++){
        ran+=hex[random()];
    }
    console.log(ran);
    return ran;
}
document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("main").style.backgroundColor=hexa();
    document.querySelector("span").textContent=hexa();
})

document.querySelector(".btn").addEventListener("click",function(){
    document.querySelector("main").style.backgroundColor=hexa();
    // console.log(document.querySelector("main").style.backgroundColor);
    document.querySelector("span").textContent=hexa();
})