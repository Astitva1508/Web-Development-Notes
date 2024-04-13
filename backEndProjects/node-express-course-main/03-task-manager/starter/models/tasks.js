const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        // required:true
        required:[true,'Must not be empty'],
        trim:true,
        maxlength:[20,'Must be less than 20 characters']
    },
    completed:{
        type:Boolean,
        default:false
    }
})



module.exports= mongoose.model('Task',TaskSchema);


//Validators are a very important part of the schema as well as a very large topic . 