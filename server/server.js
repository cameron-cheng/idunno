const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);


const port = 3000;

function makeId() {
  let result           = '';
  const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const charactersLength = characters.length;
  for ( let i = 0; i < 4; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

//body parser MW
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

//cors MW
const cors = require('cors');
app.use(cors());

//Socket.io Lobby
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('createRoom', (ignore, ackFn) => {
    const roomId = makeId();
    socket.join(roomId);
    console.log("Created RoomId", roomId);
    ackFn(roomId);
    // socket.emit('roomCreated', roomId);
  })
  socket.on()
  
  socket.on('joinRoom', (roomId, ackFn) => {
   const room = io.sockets.adapter.rooms[roomId];
    if (!room) {
      console.log('roomId doesn\'t exist', roomId)
      ackFn(false);
    } else {
      socket.join(roomId);
      ackFn(true)
      console.log('client joins room', roomId);
    }
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

//import routes
const sessions = require("./routes/sessions");
const users = require("./routes/users");

//Routes 
// app.use("/api", sessions());
// app.use("/api", users());

server.listen(port, () => {
  console.log('listening on *:3000');
});
