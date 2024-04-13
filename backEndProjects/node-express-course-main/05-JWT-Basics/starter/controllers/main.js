const {UnauthorizedError, BadRequestError }= require("../errors")
const jwt=require('jsonwebtoken')
require('dotenv').config()

const login = async(req,res)=>{
    const {username,password} = req.body
    if (!username || !password){
        throw new BadRequestError("Please provide username and password")
    }
    
    //demo one , created by DB normally
    const id = new Date().getDate()

    //keep payload small for a better user experience
    //id send in payload of jwt(when creating jwt for user) so that later when we get back jwt from user , after verifying the jwt , we have the id to send the resources belonging to that user  
    const token = jwt.sign({username,id},process.env.JWT_SECRET,{expiresIn:'30d'})
    res.status(200).json({msg:'These are your login credentials.Enjoy the life',token})
}



const dashboard=async (req,res)=>{
    
    const secret = Math.floor(Math.random()*100)+1
    res.status(200).json({
        msg: `Hello, ${req.user.username}`,
        secret: `Here is your authorized data, your lucky number is ${secret}`,
      })
}

module.exports={login,dashboard}


// JWT is used for authorization and not authentication
//Consists of header , payload and signature
//Header -> algo(viz used to create the signature) and type(viz JWT) 

//The way JWT works:
//We send in the signup request and get returned a JWT
//We send login request and JWT and then the server verifies it and sends back the dashboard

//jwt.sign() working mechanism:(It is used to create jwt's)
    //First argument is a payload (an object and we can pass whatever we want . However , its not recommended to pass the confidential info )
    //second argument is the jwt secret(a secret string to be stored on the server)
    //Third argument is the 

// Proper JWT Storage (on frontEnd)is an equally important aspect
// Way to send jwt to server for authorization:
// Whenever the user wants to access a protected route or resource, the user agent should send the JWT, typically in the Authorization header using the Bearer schema
// Authorization : Bearer <token>

//This project clearly tells us that as a user , tumhe nahi pata chal raha , par web application me to request ke saath headers me jwt bhej diye gaye aur vo verify ho raha tabhi tumko resource access mil raha