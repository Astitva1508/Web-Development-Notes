const express = require('express');
const app = express()
const router = express.Router()
const  {get,getSingle,post,put,patch,deleteIt } = require('../../logic')

//Get Request  -> fetch all records
router.get('/',get)

//Post Request -> fetch specific record
router.get('/:id',getSingle)

//Post Request
router.post('/',post)

router.put('/:id',put)

router.patch('/:id',patch)

router.delete('/:id',deleteIt)

module.exports=router;