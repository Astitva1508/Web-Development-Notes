const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose');
const { type } = require('os');
const { runInNewContext } = require('vm');
const url = 'mongodb://localhost:27017/usersDB'
mongoose.connect(url,()=>{
    console.log('Mongoose database is successfully connected to the localhost')
})

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use('/users', require('./routes/api/users'));

app.listen(PORT,()=>{
    console.log('Server is up and running on port 3000')
})