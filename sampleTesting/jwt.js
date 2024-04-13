const jwt = require('jsonwebtoken')

const start = async()=>{
    const token = await jwt.sign({'_id':1234532},'merabharatmahaanhai')
    console.log(token)
}

start()