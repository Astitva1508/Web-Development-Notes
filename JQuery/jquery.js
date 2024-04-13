// Doubts: Anomalies with usage of JQuery


// $("h1").css("color","red"); wont work.
// $("h1")[0].style.color="red"; works

//Selecting Jquery Elements
// 1. To Select h1 : 
// in Js , document.querySelector("h1")
// using JQuery , $("h1");

// 2. to select all buttons
// in Js  , document.querySelectorAll("button")
// using JQuery , $("button");

// Common Doubt aayega , clear there only : Basically , its not querySelector  , but querySelectorAll. Mtlb jitne bhi us matching ki queries hongi , sab select ho jaengi aur jo kucch bhi apply karoge (e.g. .css("color","red")) wo saare par apply ho jaegi.

// $("h1").css("color","red");
// $("h1").css("color"); returns the current color of h1
// $("h1").addClass("class-name"); appends class class-name to h1
// $("h1").addClass("class-name1 class-name2"); appends classes to h1
// $("h1").removeClass("class-name"); removes class class-name to h1
// $("h1").hasClass("class-name"); checks if h1 has given class 

// Text of selected element using JQuery
// $("h1").text("new-text-that-you-want-to-add")  equivalent to textcontent of Js
// $("h1").html("new-text-that-you-want-to-add")  equivalent to innerHTML to Js

// Manipulating Attributes with JQuery
$("h1").attr("attribute-name") //returns the value of attribute 
$("h1").attr("attribute-name","set-value-of-attribute") //sets the value of attribute 
// Note that class is also an HTML attribute
$('h1').attr("class") //returns all the class associated with h1  If there are multiple h1 , it returns class only of first h1 . 

//Adding Event Listeners to HTML ELements using JQuery
$("h1").click(function(){
    $("h1").css("property-name","property-value");
})

// To add an event listener to all the buttons , code goes as :
$("button").click(function(){
    // bss dikkat tab hai jab har button ka apna alag code ho 
    // tab thoda aur jyaada customize krna padega 
})
$(document).keypress(function(key){
    var z = key.key;
    // $("h1").text(z);
})

//Instead of using .click or .keypress , go ahead with this code :  
$(document).on("event-that-we-want-to-detect",function(){

})

//Adding and Removing Elements with JQuery
$("h1").before("html-that-you-want-to-add") //adds an html element before selected element
$("h1").after("html-that-you-want-to-add") //adds an html element after selected element
$("h1").prepend("<p>Hello World Before</p>") //adds an html element within selected element as first parent child i.e right after the opening tag
$("div").append("<p>Hello world! After</p>") //adds an html element within selected element as last parent child i.e right before the closing tag
$("h1").remove() //removes the selected element

// Website Animations with JQuery
// Most of these animations are mostly used with EventListener
$("h1").hide()  //hides the selected element (instantaneously)
$("h1").show()  //shows the selected element (instantaneously)
$("h1").toggle()  //toggles between hide and show for the selected element

$("h1").fadeOut()  //hides the selected element slowly by firstly decreasing its opacity
$("h1").fadeIn() //shows the selected element slowly by gradually increasing its opacity
$("h1").fadeToggle() //wahi bakchodi
$("h1").slideUp() //collapses the selected element
$("h1").slidedown() //uncollapsed the selected element
$("h1").slideToggle() //wahi bakchodi  //Useful for dropdownMenu

//To have a greater control over the animations , dont use pre-built ones but :
$("h1").animate({/*CSS-that-you-want-to-animate-to-not-in-quotation-marks*/}) 
//It allows us to write custom CSS that you want to gradually animate towards. Inside the parenthesis , insert curly braces and add CSS . However , we can only add CSS that has a numeric value 

//Chaining Multiple Animations
$("h1").slideUp().slideDown().animate({width:"20px"}); //all the animations happen in order
