const http = require('http').createServer();
const io = require('socket.io')(http);

let games = ["Pubg", "COD" , "MiniMiltia"];

io
    .of("/games")                           //namespace
    .on("connection", (socket) => {
        console.log("new client connected...");
        socket.emit("welcome", "Welcome to game section");
        socket.on('joinRoom', (room) => {         
            if (games.includes(room)){ 
                socket.join(room);
                io
                    .of("/games")           //to() - to send the msg to all the users in the room except us.
                    .to(room)               //in() - to send the msg to all the users in the room including us.
                    .emit("newUser", "New user joined the room " + room);                 
                return socket.emit("success", "Successfully joined the room");       
            }
            else { 
                return socket.emit("err", "Room not found"); 
            }
        });
        socket.on("colour",(colour) => {
            socket.emit("selected_colour",`your colour is ${colour}`);
        });
    });

http.listen(8000, () => { console.log("Running on port 8000...")});