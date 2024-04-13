const errorHandler=require('../utils/errorHandler')

module.exports=(err,req,res,next)=>{ 
err.statusCode=err.statusCode||500;
err.message=err.message||'internal server  error';

//cast error handling
if(err.name==='CastError'){
    const message=`Resource not found invalid:${err.path}`

    err=new errorHandler(message,400)//bad request

}
// if(err.name==='TypeError'){
//     const message=`Internal Server Error`

//     err=new errorHandler(message,500)

// }


res.status(err.statusCode).json({
    success:false,
    name:err.name,
    message:err.message
})




}