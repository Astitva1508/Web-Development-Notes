const WebSocket = require('ws');
const server = new WebSocket.Server({port:8080})
const express = require('express')
const app = express()
var StringDecoder = require('string_decoder').StringDecoder;

server.on('connection',socket=>{
    console.log('The code is working till now')
    socket.on('message',message=>{ //For listening to messages
//Send a message back to the client
    var decoder = new StringDecoder('utf8');
    console.log('This is life, sometimes the code works and sometimes it doesnt. But we must strive to make it work')
    const messageDecoded = decoder.write(message)
    console.log(messageDecoded)
    socket.send(`Roger send that ${message}`)
    })
})    
