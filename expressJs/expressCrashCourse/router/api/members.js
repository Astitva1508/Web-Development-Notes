//Putting all of our similar routes into the single file

const express=require('express');
const router = express.Router()
const members= require('../../relation')

//Since we have the routes specified in the index.js , they act as home routes here 

//Get all members
router.get('/',(req,res)=>{
    res.json(members);
})

//Get a single member , :id is a url parameter (path parameter)
router.get('/:id',(req,res,next)=>{
    //:id is a path parameter . There are 3 types of parameters
    // res.json(members[req.params.id])
    const found = members.some((member)=>member.id==req.params.id)
    if (found){
        res.json(members.filter(member=>member.id==req.params.id))
    }
    else{
        res.status(400).send("The requested data entry does not exist")
//400 is a bad request
    }
})

//Create a Member (using form submission/fetch API / Axios)
router.post('/',(req,res)=>{
    const newMember={
        id:req.body.id,
        name:req.body.name,
        __v:0,
        age:req.body.id
    }
    
    if (!newMember.name || !newMember.age){
        return res.status(400).json({msg:'Please include a name and an email',request:'Bad request'})
    }
    members.push(newMember)
    res.status(200).json(members)
})


router.put('/:id',(req,res)=>{

    const found = members.some((member)=>member.id===parseInt(req.params.id))
    if (found){
        updMember=req.body
        console.log(updMember)
        members.forEach((member)=>{
            if (member.id===parseInt(req.params.id)){
                member.name = updMember.name?updMember.name:member.name
                member.age = updMember.age?updMember.age:member.age
                res.json({msg:'member updated', member})
            }
        })
    }
    else{
        res.status(400).json({"msg":"Poor Request Type . Cannot Fetch Data"})
    }
})

router.delete('/:id',(req,res)=>{
    const found = members.some((member)=>{member.id===parseInt(req.params.id)})
    if (found){
        
    }
    else{
        res.status(400).json({msg:'Poor Request Type' , status:400})
    }
})


module.exports= router
//This file will be run in the index.js using the middleware