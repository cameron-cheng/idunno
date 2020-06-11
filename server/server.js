const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const fetchPlaces = require('./fetchPlaces')

const port = 3000;


//body parser MW
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

//cors MW
const cors = require('cors');
app.use(cors());

const initializeRoom  = function() {

}

let data = {}

function makeId() {
  let result           = '';
  const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const charactersLength = characters.length;
  for ( let i = 0; i < 4; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


//Socket.io Lobby
io.on('connection', (socket) => {
  
  console.log("=================")
  console.log(socket.client.conn.server.clientsCount + " total users connected")
  
  
  // socket.emit("dataSentToRoom", "Hello")

  socket.on('createRoom', (filters, ackFn) => { //change ignore to filters/query
    const roomId = makeId();
    console.log("filters:", filters)
    socket.join(roomId);

    fetchPlaces(filters)
      .then((places) => {data[roomId] = places})
      .then(() => ackFn(roomId))

    console.log("~~~~~~~~~~~~~~~~~~~~")
    console.log('a user connected', socket.id);
    console.log(`*** ${roomId} has`, io.sockets.adapter.rooms[`${roomId}`].length, "user");

  })

  socket.on('lobbyReady', () => {
    // const hostId = Object.keys(socket.rooms)[0];
    const roomId = Object.keys(socket.rooms)[1];

    console.log("DATA:", data[roomId])
    io.in(roomId).emit('dataSentToRoom', data[roomId]);
  })

  socket.on('joinRoom', (roomId, ackFn) => {
   const room = io.sockets.adapter.rooms[roomId];
    if (!room) {
      console.log('roomId doesn\'t exist', roomId)
      ackFn(false);
    } else {
      socket.join(roomId);
      ackFn(true);
      console.log("~~~~~~~~~~~~~~~~~~~~")
      console.log(socket.id, ' joins room', roomId);
      console.log(`*** ${roomId} has`, io.sockets.adapter.rooms[`${roomId}`].length, "user");
      console.log("~~~~~~~~~~~~~~~~~~~~")
    }
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

//import routes
const sessions = require("./routes/sessions");

//Routes 
// app.use("/api", sessions());

server.listen(port, () => {
  console.log('listening on *:3000');
});
