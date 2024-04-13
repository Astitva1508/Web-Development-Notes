//jshint esversion: 6
const express  = require("express") ; //requiring expressJs

const app=express(); //simply a function that represents express module

//get method allows us to specify what should happen when a browser gets in touch with our server and makes a get request
//parameters : first -> location of the get request 
//             seconod -> callback function with 2 parameters that tells the server what to do when the request happens
app.get("/",function(request,response){
    response.send("<h1>Namaste India</h1>")
})
//Above written code specifies what should happen when someone makes a get request to the home route represented by "/" 
//This method enables us to add multiple pages to the website

app.get("/contacts",function(req,res){
    res.send("<h3>Mera Bharat Mahaan Hai</h3><p>this is the widespread beauty of being an India that you are entitled to literally everything")
})

app.get("/about",function(req,res){
    res.send("<h2>Hey There , The person on the other end of the spectrum , You are literslly communicating with the best programmer in the history of mankind")
})

app.listen(3000,function(){  //listens on a specific port for any http requests that get sent to our server
    console.log("server started on port 3000");
}) 

//Server does a lot of code proessing and makes sure that we run the code on our backend rather than the frontend.
