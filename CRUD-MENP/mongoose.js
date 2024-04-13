const mongoose=require('mongoose');

const usersSchema=new mongoose.Schema({
    name:String,
    _id:Number,
    email:String,
})

const Users=mongoose.model('User',usersSchema);

module.exports=Users;
