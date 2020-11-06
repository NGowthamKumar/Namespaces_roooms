const io = require('socket.io-client');

let socket = io.connect("http://localhost:8000/games");

socket.on("welcome", (wel_msg) => { console.log(wel_msg); });

socket.emit("joinRoom","Pubg");

socket.on("newUser", (user_msg) => { 
    console.log(user_msg);
});

socket.on("success",(success_msg) => {
    console.log(success_msg);
});

socket.on("err", (error_msg) => {
    console.log(error_msg);
});

socket.emit("colour","blue"); 

socket.on("selected_colour", (colour_msg) => { 
    console.log(colour_msg); 
});