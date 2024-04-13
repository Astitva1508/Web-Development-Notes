class myOwnPromise{
    constructor(initialfunction){
        this.callback=()=>{}  //callback naam ka ek method introduce kiya joki abhi koi function ko store nahi kar rha
        setTimeout(()=>initialfunction(this.callback),0)
        //writing this line of code makes the first argument of setTimeout a function call which is wrong code
        //We have got a way around
    }
    then(fn){//Agar koi then function present hai, to initial function ke argument me wo chala jaega
        this.callback=fn
    }
}

const paromise = new myOwnPromise((res)=>{
    console.log('a');
    res()
})
paromise.then(()=>{
    console.log("Mera BHarat Mahaan Hai")
})




class MyPromise{
    constructor(initialFunction){
        this.initialFunction=initialFunction
    }
    then(nextFn){
        return new MyPromise((afterNextFunction)=>{

        })
    }
}

// https://medium.com/@paabrown/the-hardest-thirty-lines-of-code-ive-ever-written-implementing-the-promise-class-in-js-ae7a36d77ed6





// A promise can be created using the Promise constructor function, which takes a callback function as an argument, and invokes it with arguments (parameters of the callback) “resolve” and “reject”, which in turn are actually functions that should be invoked within the callback, taking the result of the callback as their arguments

// One way to think of it is an object that “contains” the results of a (usually asynchronous) function, and can access those results via its .then and .catch methods


//Callback Understanding
// whenever a function is called (whether inside constructor or independently ), its  parameters must be things that are defined

// const romise = new Promise((res,rej)=>{
//     res(3)
// });

// romise.then((msg)=>{
//     console.log(msg);
// })

// console.log(romise)