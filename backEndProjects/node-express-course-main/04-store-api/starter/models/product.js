const mongoose= require('mongoose')

const productSchema = new mongoose.Schema({
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.5
    },
    createdAt:{
        type:Date,
        default:Date.now()  //To set up the todays date as default
    },
    name:{
        type:String,
        required:[true,'Product name must be provided']
    },
    price:{
        type:Number,
        required:[true,'product price must be provided']
    },
    company:{
        type:String,
        //Company can take only a few selected values . For that validation in Mongoose , use code given below.Also , we can set up a custom error message if he value provided does not match the values allowed by us
        enum:{
            values:['ikea','liddy','caressa','marcos'],
            message:'{VALUE} is not supported'
        }
    }
})

module.exports=mongoose.model('product',productSchema);