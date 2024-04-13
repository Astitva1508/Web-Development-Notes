const pro = new Promise((res,rej)=>{
    const error = false;
    if (!error) res('The code ran without an error')
    else rej('The code failed with an error')
})

//Most basic Way to execute a promise
// pro.then((data)=>console.log(data)).catch((error)=>console.log(error));

//Method 1 to deal with a promise
// Promise.resolve(pro).then(d=>console.log(d)).catch((err)=>console.log(err))

//Method 2 to deal with a promise
// const asyncCodeRunner=async()=>{
//     try{
//     const d = await Promise.resolve(pro)
//     console.log(d)
//     }catch(err){
//     console.log(err)
//     }

// }
// asyncCodeRunner()

//Method 3 to deal with a promise
// const asyncCodeRunner1=async()=>{
//     const d = await Promise.resolve(pro).catch(err=>console.log(err))
//     console.log(d)
// }
// asyncCodeRunner1()

//Method 4 to deal wth a promise
const asyncCodeRunner=async()=>{
    try {
        const d = await pro;
        console.log(d)
    } catch (error) {
        console.log(error)
    }
}

asyncCodeRunner()