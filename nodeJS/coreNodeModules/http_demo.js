const http=require("http")

//create a server object
http.createServer((req,res)=>{
    res.write("Namaste India"); //outputs to the browser
    res.end();//you can even put your HTML here 
}).listen(3000,()=>console.log("Server Running"));
















//ToDo's:
//Understanding the working of callback function