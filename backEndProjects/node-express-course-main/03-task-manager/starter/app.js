const express=require('express');
const app=express() ;
const PORT = process.env.PORT || 3000 ; 
const tasks = require('./routes/tasks') ;
//If we have a function in a module where the function is executed immediately , then to execute the function from the main file , we only need to import the entire module(without assigning it to a variable)
// require('./db/connect')
const connnectDB=require('./db/connect')
require('dotenv').config()  //Thats the way to get access to all the secret variables..
// by simply using the syntax process.env.<variable_name>
const notFound=require('./middleware/notfound')
const errorHandler  = require('./middleware/error-handler')

//Static Files Serving Middleware
app.use(express.static('./public'));

//Body-Parser Middleware
app.use(express.json());


//Routes Middleware
app.use('/api/v1/tasks',tasks); 

//Passing Middleware for file not found.This middleware must be put at last 
app.use(notFound);

//Passing in the middleware for error Handling
app.use(errorHandler)
//This is the way to set up custom errorHandler in Express.(It has 4 arguments)


const start = async()=>{
    try {
        await connnectDB(process.env.MONGO_URI)  //await used only when a promise is to be returned (neater way than .then and catch)
        app.listen(PORT,()=>{
            console.log(`Server listening on PORT ${PORT}...`);
        })        
    } catch (error) {
        console.log(error);
    }
}

start()


//What makes more sense is that we first connect to the database and later if the connection was successful , connect to the server.In the otherwise case , we stop our application
//For that we dont run .then and .catch directly onto the mongoose.connect but run mongoose.connect inside a function and invoke function inside app.js