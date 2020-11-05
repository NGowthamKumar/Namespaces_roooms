const io = require('socket.io-client');

let socket = io.connect("http://localhost:8000/games");

socket.on("welcome",(msg) =>  {
    console.log("Received : ", msg);
})

socket.emit("joinRoom", "Pubg");

socket.on("newUser", (msg)=>{
    console.log(msg);
})

socket.on("success",(msg)=>{
    console.log(msg);
});

socket.on("err", (msg)=>{
    console.log(msg);
})