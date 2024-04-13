function bmo(age){
    console.log("The years you have left on the planet are: "+age);
}

//Class to create an object
class Sports{
    constructor(studentName,age,studentRollNumber,percentage){
        this.studentName=studentName,
        this.age=age,
        this.rollNo=studentRollNumber,
        this.percentage=percentage,
        this.bmo=function(){   //defining a function inside a constructor
            bmo(age);
        }
    }
    bmo1(){
        console.log(this.studentName+this.rollNo); //parameters passed to constructor method cant be used here
    }
};

//Constructor Function to create an object
function SportsStudentCreator(studentName,age,studentRollNumber,percentage){
    this.studentName=studentName,
    this.age=age,
    this.rollNo=studentRollNumber,
    this.bmo=function(age){
        console.log("The years you have left on the planet are: "+age);
    }
}
//Alternative way to create methods for objects for using constructor function
//In this way , methods are not created for every object instance
SportsStudentCreator.prototype.bmo=function(age){
    console.log("The years you have left on planet are: "+age);
}

//Creating Objects using the various ways possible

//First Method-> creating a custom object directly using function definition
const sportsStudent1 = {
    studentName : "Astitva Dubey",
    age:19,
    rollNo: "21BCS015",
    percentage:99 
};

//Second Method-> creating an object with the use of class
const sportsStudent2=new Sports("Arihant",19,"21BCS015",98);

//This is not a new way, it just creates a vacant object with the value of properties undefined
const sportsStudent3=new Sports();


//Third Method-> creating an object using a constructor function 
const sportsStudent4=new SportsStudentCreator("Ashish Kumar", 21, "22BCS015",100);




//Destructuring a JS Object 
const bio={
    firstName:"Astitva",
    lastName:"Dubey",
    age:30,
    hobbies:["Chess","Football","Tennis"],
    address:{
        street:"Civil Lines",
        houseNumber:20,
        city:"Fathepur"
    }
};
// Destructuring -> meaning pulling properties out of object as actual variables, however , they still remain as properties to js objects
const {firstName,lastName, address}=bio; 
const { address:{city,street}}=bio;   //Destructuring embedded objects


//array of objects
const bios=[
    {
        firstName:"Ashish",
        lastName:"Kumar",
        age:30,
    },
    {
        firstName:"Vaibhav",
        lastName:"Pandey",
        age:25,
    },
    {
        firstName:"Astitva",
        lastName:"Dubey",
        age:19,
    }
]

//for-of method
// for (let i of bios){
//     console.log(i);
// }

//for each method 
// bios.forEach(function(bio){
//     console.log(bio.firstName);
// })

//map method
bio_map=bios.map(function(bio){
    return bio.firstName;
});

//filter method
bio_filter=bios.filter(function(bio){
    return bio.age>22;
})
//Alternatively
bio_filter=bios.filter(bio=>{
    if (bio.age>22) return true;
});
;

//sort method 
//Understanding the result of sort function based on the return values nature(being positive , negative or zero) 
bio_sort=bios.sort((first,second)=>{
    if (first.firstName.length>second.firstName.length){
        return 1
    }else{
        return -1
    }
})
//The above method sorts according to the first names in the ascending order

//reduce
bio_sumOfAges=bios.reduce((sum,bio)=>sum+bio.age,0);


//Chaining Array Methods to get the desired output
//The below method returns only those firstNames that have age > 22 .
bio_filter_map=bios.filter(function(bio){
    return bio.age>22;
}).map(function(bio1){
    return bio1.firstName;
});

bio_map_reduce=bios.map((bio)=>bio.age).reduce((total,age)=>total+age,0);
//The above written line of code does the same thing as array bio_sumOfAges


//Arrow Functions
const addTwoNums=(num1,num2)=>num1+num2;
//need not use return keyword if curly braces are omitted 
//name of the function is written as const functionName
//For a single line of code inside function , we dont need to use the curly braces
//Need not use round braces for a single parameter

//Arrow functions are pretty useful while defining anonymous functions . e.g
// bios.forEach((bio)=>console.log(bio.firstName));

// Doubts-> 1. Higher Order Functions
//          2. This keyword

//Array Methods->map,filter,reduce,find,findIndex,some,sort,forEach,for_of

//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.