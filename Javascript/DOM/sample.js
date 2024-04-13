document;
document.getElementById ; //returns a single element 
document.getElementsByClassName ; //returns a list of classes
document.getElementsByTagName ;  // returns a list of tags
document.firstElementChild ; 
document.lastElementChild ; 
document.lastChild.style.property ;  // property in Js and CSS have different name . In Js we dont use - and use camelCasing
document.querySelector("css selector").css("property","value") ;
document.lastChild.innerHtml = "Astitva Dubey";
document.querySelector("ul").click();  //its argument is css selector and returns only the first matching item instead of list .
document.getElementsByTagName("a").onclick();
document.querySelectorAll()   //returns a list 

// To make a webpage dynamic what we do is :
    // Jitni bhi CSS hai usko stylesheet me rakho defined under styles and when you want to apply one style 
    document.querySelector("element").classList.add("class_name");  //.classlist returns a list of all classes associated with that element
    document.querySelector("element").classList.remove("class_name");  //
    document.querySelector("element").classList.toggle("class_name");  //

// Difference between innerHTML() and .textcontent() ; .textcontent accesses only text whereas innnerHTML() accesses the entire HTML inside including tags . 

document.querySelector("element").attributes; //returns all attributes values associated in list format 
document.querySelector("element").getAttribute("attribute name"); //returns particular attribute value
document.querySelector("element").setAttribute("attribute name","changed value"); //changes particular attribute value

// document.querySelector("css selector").addEventListener("event", function_call_without_parenthesis) ;
                                        //  OR 
// document.querySelector("css selector").addEventListener("event", function(){
    // function content;
// });   //This is anonymous function

// Concept of Higher Order Functions
// Concept of Debugger 

// Constructor Variable Definition:
var friends ={
    name:"Astitva Dubey",
    age:19,
    passion:"Football"
} ; 

//Concept of Constructer Function:
Definiton:
    function FunctionName(name,age,yearsOfExperience){            //Function Name should begin with capital.Thats the way of defining a constructor function 
        this.name=name;
        this.age=age;
        this.yearsOfExperience=yearsOfExperience;
        this.clean=function(){            
            clean();
        }
    }
//These functions are called using the keyword new.
//Those properties of objects which are function are called as methods

// To call the above function 
var a =new FunctionName("Riya",19,12,);

//Run To See
document.addEventListener("keydown",function(event){
    console.log(event);
    event.currentTarget.parentElement.parentElement
})

// Higher Order Functions:
// Definition: You cant use function arguments and you only have to type functions name 
// Function Call: You can 
    //    (i) Either pass a function name in case the function is already defined.You cant pass the function with parenthesis as then it does not pass the function but the returned value from the function
    //    (ii)Pass a complete function definition with parameters and everything.
    //    (iii)Pass an anonymous function.

// To incorporate Jquery
/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>  at end of body */
// To check if Jquery ready: type this inside js file
$(document).ready(function(){
    //Type all the JS
})

