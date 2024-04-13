const notFound=(req,res)=>{
    res.status(404).send('The requested Route does not exist')
}

module.exports=notFound;