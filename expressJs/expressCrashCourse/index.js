const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;


//express.static(//foldername) makes a folder static to server . Thats the way for our server to serve up static files
//After using this function , we can refer to all the files inside the folder set as static using a relative URL which is relative to the public folder  


//Serving Static Files
app.use(express.static(path.join(__dirname,'public'))) 

//Body Parser MiddleWare
//The first one is for Content-Type:'application/json'
app.use(express.json())

//This one is for url-encoded data(i.e. of the type of form submission)
app.use(express.urlencoded({extended:false}))

app.use('/api/members' , require('./router/api/members'))
//This command instructs server to run the middleware at the members.js when cleint hits at api/members

//res.json()//res.render() if we had a template engine//res.send()//res.sendFile()

//We can access parts of url with the request object
//req.protocol(), req.get('host'), req.originalUrl()

app.listen(PORT,()=>console.log(`Server up and running on the ${PORT}`))





//How to know the existing collections in a database and insert data into them, if we dont know their schema
//Types of API parameters

// third party package called moment deals with date and time formatting

//How to post form data using postman 