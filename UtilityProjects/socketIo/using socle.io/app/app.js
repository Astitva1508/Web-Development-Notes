//Using CDN , the io object(socket io client library) is globally avaliable in the browser

const socket = io('ws://localhost:8080') 

socket.on('message',text=>{
    const el = document.createElement('li');
    el.innerHTML = text
    document.querySelector('ul').appendChild(el)
//The code till now listens for the messages from the server and feeds them to the ui
}) 

document.querySelector('button').addEventListener('click',()=>{
    const text = document.querySelector('input').value
    socket.emit('message',text)
})