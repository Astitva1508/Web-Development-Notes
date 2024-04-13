const { UnauthorizedError }=require('../errors')
const jwt=require('jsonwebtoken')

const authenticationMiddleware=async(req,res,next)=>{
    const data = req.headers.authorization
    if (!data ||  !(data.startsWith('Bearer '))){
        throw new UnauthorizedError('Token not provided')
    }
    try {
        const token = data.split(' ')[1]
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.user=decoded
        next()
//Way to transfer data from one middleware to other
    }catch(error){
        throw new UnauthorizedError('Invalid login credentials')
    }
}

module.exports=authenticationMiddleware