const express = require('express');
const app = express()
const mongoose  = require('mongoose')

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/Jossa',()=>console.log('Connected to Database'))

const roundSchema = new mongoose.Schema({
    Institute:{
        type:String,
        required:true,
    },
    AcademicProgramName:{
        type:String,
        required:true,
    },
    Quota:{
        type:String,
        required:true,
    },
    SeatType:{
        type:String,
        required:true,
    },
    Gender:{
        type:String,
        required:true,
    },
    OpeningRank:{
        type:Number,
        required:true,
    },
    ClosingRank:{
        type:Number,
        required:true,
    }
})

const applicableQuotas={
    'OPEN':['OPEN','OPEN (PwD)','EWS (PwD)','EWS','OBC-NCL','OBC-NCL (PwD)','SC','SC (PwD)','ST (PwD)','ST'],
    'GEN-EWS':['EWS','EWS (PwD)'],
    'OBC-NCL':['OBC-NCL','OBC-NCL (PwD)'],
    'SC':['SC','SC (PwD)'],
    'ST':['ST (PwD)','ST'],
    'OPEN (PwD)':['OPEN (PwD)','EWS (PwD)','OBC-NCL (PwD)',,'SC (PwD)','ST (PwD)'],
}

let inputQuota = 'OPEN';
let isPwD = true ; 
Quota = inputQuota+isPwD?(' (PwD)'):'';


const Round6 = mongoose.model('round6',roundSchema)

const inputRank=10395

app.use('/',async(req,res)=>{
    const avalaibleNITs = await Round6.aggregate([
        {
            $match:{
                Institute:/(National Institute of Technology)|(Shibpur)/i,
                ClosingRank:{$gt:inputRank}
            },
        },
        {
            $project:{_id:0}
        }
    ]).exec()

    res.status(200).json({count:avalaibleNITs.length,details:avalaibleNITs})
})

app.listen(3000,()=>console.log('Server connected to PORT 3000'))

//Regex to get all the IITs
// const IITB = await Round6.find({
//         Institute:/Indian Institute +of Technology/i}).distinct('Institute').exec()

//Regex to find all the IIT's
// const IITB = await Round6.find({Institute:/Indian Institute of Information Technology/i,}).distinct('Institute').exec()

//Regex to find all the NIT's
// const IITB = await Round6.find({Institute:/(National Institute of Technology)|(Shibpur)/i}).distinct('Institute').exec()

//Regex to find all GFTI's
// const regEx = /(Indian Institute +of Technology)|(Indian Institute of Information Technology)|(National Institute of Technology)|(Shibpur)/i
// const IITB = await Round6.find({Institute:{$not:regEx}}).distinct('Institute').exec()

//Avaliable NIT's Opening and Closing Rank
// const avalaibleNITs = await Round6.aggregate([
//         {$match:{
//             Institute:/(National Institute of Technology)|(Shibpur)/i,
//             SeatType:'OPEN',
//             Gender:{$eq:'Gender-Neutral'},
//             // OpeningRank:{$lt:inputRank},
//             ClosingRank:{$gt:inputRank},
//             Quota:'OS',
//             AcademicProgramName:/Computer Science/ig
//             }
//         },
//         {
//             $project:{Institute:1,ClosingRank:1,Quota:1,AcademicProgramName:1}
//         },
//         {$group:{
//             _id:{Institute:'$Institute'},
//             Branches:{$push:{Degree:'$AcademicProgramName'}},
//             count:{$sum:1}
//         },
//         }
//     ]).exec()


//Seeing all the avaliable Quotas in the colleges
// const avalaibleNITs = await Round6.aggregate([
//         {
//             $match:{Institute:/(National Institute of Technology)|(Shibpur)/i,}
//         },
//         {
//             $project:{Institute:1,AcademicProgramName:1,Quota:1,_id:0}
//         },
//         {
//             $group:{
//                 _id:{Institute:'$Institute',Branch:'$AcademicProgramName'},
//                 uniqueCount: {$addToSet: "$Quota"},
//             }
//         },
//     ])

//Seeing all the avaliable SeatTypes in College




