
require('dotenv').config()
require('express-async-errors')

//Requiring Express
const express = require('express')
const app=express()

//Requiring Middlewares
const errorHandlerMiddleware= require('./middleware/error-handler')
const notFoundMiddleware = require('./middleware/not-found')

//Connecting to Database
const connectDB = require('./db/connect')

//Requiring routes
const Router = require('./routes/main')

app.use(express.static('./public'))

app.use(express.json())


app.use('/api/v1',Router)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const port = process.env.PORT || 3000
const start =async()=>{
  try {
    //connectDB(url)
    app.listen(port,()=>console.log(`Server is running on PORT ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()
