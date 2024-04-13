const EventEmitter=require("events")
const uuid=require("uuid");
//uuid used to generate a random id 

class Logger extends EventEmitter{
    log(msg){
        //call event (when log function is fired)
        this.emit("event",{id:uuid.v4(),msg:msg})
        // this.emit("event",{id:uuid.v4(),msg})  //This code does the same thing as above code
        //this keyword pertains to the Logger class and emit is the method of the EventEmitter class.emit method can only be applied to an EventEmitter Object or its extensions (as Logger here)
    }
    write(msg){
        this.emit("write",{id:uuid.v4(),msg})
    }
}

module.exports = Logger;

//ToDo;s
//1. What is a Logger?
