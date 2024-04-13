const http = require('http').createServer()

const io = require('socket.io')(http,{cors:'*'})

io.on('connection',socket=>{
//Firstly we established the connection
    console.log('A user connected')
    socket.on('message',message=>{
//Listening for messages
        console.log(message)
        io.emit('message',`${socket.id.substr(0,2)} said ${message}`)
//Emitting message for all the clients
    })
})

http.listen(8080,()=>console.log('Server is up and running on PORT 8080'))