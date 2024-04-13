//This is the js file to dynamically add all the data in the products.json to the database
require('dotenv').config() //To get the URL
// const mongoose= require('mongoose');
//We dont need mongoose to work on the products model
const connectDB=require('./db/connect'); //To establish a connection to the database
const products = require('./models/product');
const jsonProducts=require('./products.json')

const start = async() =>{
    try {
        await connectDB(process.env.MONGO_URI)
        await products.deleteMany();
        await products.create(jsonProducts);
        console.log('Successfully added all the products to the database')    
        process.exit(0)//0 means everything went well
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

start();

