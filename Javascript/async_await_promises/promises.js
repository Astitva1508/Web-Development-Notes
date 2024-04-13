const pro=new Promise((res,rej)=>{
    const error = false
    if (!error){
        res('Mera Bharat Mahaan Hai')
    }
    else{
        rej('Still Mera Bharat Mahaan hai')
    }
})

// pro.then((d)=>console.log(d)).catch((err)=>console.log(err)) //returns 'Mera Bharat Mahaan Hai'

const asyncAwaitSugarCoating=async(pro)=>{
    try{
        const d = await pro
        console.log(d)
        return d
    }catch(error){
        console.log(error)
    }
}
// asyncAwaitSugarCoating(pro)  //prints Mera Bharat Mahaan Hai
//However an asynchronous function always returns a promise therefore d is returned as a promise from the function 
//So to get to execute that promise , we again need a .then and .catch chain
const d = asyncAwaitSugarCoating(pro);
d.then((data)=>console.log(data))


// asyncAwaitSugarCoating(pro).then((d)=>{console.log(d)}) returns 'Mera Bharat Mahaan Hai'
// Promise.resolve(asyncAwaitSugarCoating(pro))   returns 'Mera Bharat Mahaan Hai'

const awa=async()=>{
    const d = await asyncAwaitSugarCoating(pro)
    console.log(d)
}
// awa()