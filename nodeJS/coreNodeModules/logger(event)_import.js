const Logger=require('./logger(event)_export_demo.js')
const fs=require("fs")
const path = require("path")

const logger = new Logger();

logger.on("event",(data)=>{
    console.log(`Called Listener ${data.id}:${data.msg}`);
    logger.write(data.msg);
})
logger.on("write",(data)=>{
    fs.appendFile(path.join(__dirname,"loggerDetails.txt"),data.id,()=>console.log("data written onto the file"))
})
//A function that writes content of all the people with the message onto the file

logger.log("Hello World");
