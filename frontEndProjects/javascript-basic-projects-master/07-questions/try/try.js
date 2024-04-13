
let click=document.getElementsByClassName("btn");
let hide=document.querySelectorAll(".hide");

// console.log(hide[0]);

document.querySelector(".btn").addEventListener("click",function(){
    document.querySelector(".hide").classList.add(".hide");
});
