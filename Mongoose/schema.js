const express = require('express')
const app = express()



const connect = async ()=>{
    await mongoose.connect('localhost:').then(()=>console.log('Connected to database'))
    app.listen(3000,()=>console.log('Server listening on PORT 3000'))
}

connect()

