// Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") emit named events that cause Function objects ("listeners") to be called.

//We can use an eventEmitter class to emit events that have listeners that listen to those events and as soon as the event is listened to , a callback gets executed

const EventEmitter=require("events");

//creating your own Event Emitter Class
class MyEmitter extends EventEmitter{ }

//init Event object . Event has been created 
const myEmitter=new MyEmitter()

//Event Listeners
myEmitter.on("event",()=>console.log("Event Fired!!"))
myEmitter.on("xyz",()=>console.log("Event xyz Fired!!"))

//Emit Event 
myEmitter.emit("xyz")
myEmitter.emit("event")
//On emitting event , callback inside event listener gets fired

//More in Logger Tutorial