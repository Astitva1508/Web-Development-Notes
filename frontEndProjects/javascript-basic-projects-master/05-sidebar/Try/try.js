let cross=document.querySelector(".cross");
let toggle=document.querySelector(".nav-toggle");

toggle.addEventListener("click",function(){
    // console.log(toggle);
    document.querySelector(".sidebar").classList.toggle("sidebarshow");
})
cross.addEventListener("click",function(){
    // console.log(toggle);
    document.querySelector(".sidebar").classList.remove("sidebarshow");
    // document.querySelector(".nav-toggle").classList.remove("toggleshow");    
    document.querySelector(".nav-toggle").classList.remove("toggleshow");    
})

