const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function random(){
    var ran= Math.floor(Math.random()*16)
    return hex[ran];
}

function hexcolor(){
    var a="#";
    for (var i=0;i<6;i++){
        a+=random();
    }
    return a;
}

document.querySelector(".btn").addEventListener("click",color);

function color(){
    ran_col=hexcolor();
    document.querySelector("body").style.background=ran_col;
    document.querySelector("span").innerHTML=ran_col;
}