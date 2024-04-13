class Person{
    constructor(name,age){
        this.name=name,
        this.age=age;
    }
    greeting(){
        console.log("Good Morning ! "+this.name);
    }
}

class SportsPerson{
    constructor(name,age,experience){
        this.name=name,
        this.age=age,
        this.anubhav=experience
    }
}

var x=10;


// To export this js file (or any of its functionalities) 
module.exports = Person;

// then you can import in another file


//This whole file is wrapped inside a module wrapper
(function (exports,require,module,__filename,__dirname){})

console.log(__dirname);

// ToDo's:
// 1. Importing and Exporting multiple bits of code from the same file 