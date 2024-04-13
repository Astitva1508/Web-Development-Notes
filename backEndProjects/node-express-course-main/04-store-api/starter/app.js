require('dotenv').config() ; 
require('express-async-errors') ;
//With the use of this package , we need not call next() to go to our next (error-handling) middleware in the stack . Instead we just need to throw the error and rest will be taken care of by the package
//Also we need not wrap all of our code inside the asyncWrapper function as in previous project

const express = require('express') ;
const app = express() ;
const connectDB = require('./db/connect') ;
const router=require('./routes/products') ;
const notFoundMiddleware= require('./middleware/not-found') ;
const errorHandlerMiddleware=require('./middleware/error-handler') ;

app.use(express.json()) ;

app.get('/',(req,res)=>{
    res.send('<h1>Store API</h1><a href="/api/v1/products">Products Route</a>')
})

app.use('/api/v1/products',router)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000 ;

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT,()=>{
            console.log(`Server listening on PORT ${PORT} ...`)
        })
    } catch (error) {
        console.log(error);
    }
}

start();