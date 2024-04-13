// Scope of var 
    // When declared locally inside a function , it is accesible only inside the function
    // When declared globally , acccesible inside all the functions and __main 
    // When declared inside conditional/looping blocks , still accesible inside all functions and __main

var x = 3;
const dec=()=>{
    var y = 4
    console.log(y)
    console.log(x)
}
dec()
if (true) {
    var z = 5
    console.log(x) 
}

console.log(z)

// If you create a variable using var / let / const inside a function , they are all local variables and can only be accessed inside the function
// If you create a variable using var / let / const outside a function , they are all global variables and can be accessed anywhere isnide the file
// If you create a variable using let / const inside a code block(conditional/Looping) , they are local to that code block and can only be accessed inside the code block

// ProTip : Avoid using var 