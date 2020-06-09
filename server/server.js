const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const port = 3000;

//body parser MW
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

//cors MW
const cors = require('cors');
app.use(cors());

//start websocket connection
io.on('connection', (socket) => {
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
app.use("/api", places());
// app.use("/api", sessions());
// app.use("/api", users());

server.listen(port, () => {
  console.log('listening on *:3000');
});

