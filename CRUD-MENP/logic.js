const Users = require('./mongoose')
const mongoose=require('mongoose')

const get=async (req,res)=>{
    Users.find((err,data)=>{
        if (err) {
            console.log(err)
            res.json({message:err})
        }
        else res.status(200).json(data);
    })
}

const getSingle=async (req,res)=>{
    const id = req.params.id;
    Users.findOne({_id:id},(err,data)=>{
        if (err) {
            console.log(err);
            res.status(500).json({msg:'Internal Server Error. Wait for it to get fixed '})
        }
        else res.status(200).json(data);
    })
}

const post=async(req,res)=>{
    const _id=req.body.id
    if (!_id){
        return res.status(400).json({msg:'Poor Request Type . must give the id field for adding'})
    }
    const data = await Users.find({}).exec()
    let found = data.some((d)=>d._id == _id)
    if (found){
        return res.status(400).json('Use Put Request to update the already existing fields')
    }else{
        const user =new Users( {_id:req.body._id , name:req.body.name , email:req.body.email})
        await user.save()
        Users.find({},(err,data)=>{
            res.json(data);
        })
    }
}

const put =async (req,res)=>{
    const _id = req.params.id
    // const data = await Users.find({}).exec()
    const post = await Users.findById(_id).exec();
    if (post){
        await Users.deleteOne({_id:req.params.id})
    }
    const user =new Users( {_id:req.params.id , name:req.body.name , email:req.body.email})
    await user.save()
    Users.find({},(err,data)=>{
        res.json(data);
    })
}

const patch =async(req,res)=>{
    const updData=req.body ;
    const _id= req.params.id ;
    const data = await Users.find({}).exec()
    let found = data.some((d)=>d._id == _id)
    if (found){
        const record = data.filter((d)=> d._id==_id)
        const name = updData.name?updData.name:record.name;
        const email = updData.email?updData.email:record.email;
        const user = new Users({
            _id,name,email
        })
        await Users.deleteOne({_id})
        await user.save()
        Users.find({},(err,data)=>{
            res.json(data);
        })
    }
    else{
        const user = {_id, name:updData.name , email:updData.email};
        const user2 = new Users(user)
        await user2.save()
        Users.find({},(err,data)=>{
            res.json(data);
        })
    }
}

const deleteIt =async(req,res)=>{
const _id= req.params.id;
    const data = await Users.find({}).exec()
    let found = data.some((d)=>d._id == _id)
    if (found){
        await Users.deleteOne({_id:_id})
        Users.find({},(err,data)=>{
            res.json(data);
        })
    }
    else{
        res.status(400).json('The requested data entry does not exist');
    }
}


module.exports= {get,getSingle,post,put,patch,deleteIt }

//use try/catch with async/await
//use .then/.catch with promises
//use (err,data) with callbacks

//Use of env and cors package -> later