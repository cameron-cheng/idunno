const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const port = 3000;

//body parser MW
const bodyParser = require("body-parser");
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}))

//start websocket connection
io.on('connection', (socket) => {
  console.log(io)
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
  socket.on('SEND_TIME', function(data){
    //here the data object is correct
    socket.emit('RECEIVE_MESSAGE', data); //sending back to client
  })
  socket.on("userReady", (userReady) => {
    console.log(userReady)
  })
});

//import routes
const places = require("./routes/places");
const sessions = require("./routes/sessions");
const users = require("./routes/users");

//Routes 
server.use("/api", places());
server.use("/api", sessions());
server.use("/api", users());

server.listen(3000, () => {
  console.log('listening on *:3000');
});

