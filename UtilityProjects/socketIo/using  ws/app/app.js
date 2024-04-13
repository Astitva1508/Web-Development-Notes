const socket = new WebSocket('ws://localhost:8080')

//listen for messages

socket.onmessage=(recieve)=>{
    console.log('Message from server: ',recieve.data)
}

document.querySelector('.btn').addEventListener('click',()=>{
    console.log('Button gets clicked')
    socket.send('We are connected to the webSocket')
})