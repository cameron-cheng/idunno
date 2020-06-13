const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const fetchPlaces = require('./helpers/fetchPlaces')
const mode = require('./helpers/mode')

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

function makeId() {
  let result           = '';
  const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const charactersLength = characters.length;
  for ( let i = 0; i < 4; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

let users = {};
let results = [];

//Socket.io Lobby
io.on('connection', (socket) => {
  
  let data = {};

  console.log("=================")
  console.log(socket.client.conn.server.clientsCount + " total users connected")
  
  
  // socket.emit("dataSentToRoom", "Hello")

  socket.on('createRoom', (filters, nickname, ackFn) => { 
    const roomId = makeId();
    console.log("filters:", filters)
    socket.join(roomId);
    
    socket.nickname = nickname;
    users[roomId] = [socket.nickname];

    fetchPlaces(filters)
      .then((places) => {data[roomId] = places})
      .then(() => ackFn(roomId))

    console.log("~~~~~~~~~~~~~~~~~~~~")
    console.log('a user connected', socket.id);
    console.log(`*** ${roomId} has ${io.sockets.adapter.rooms[`${roomId}`].length} user ***`);
    console.log("USERS:", users)
    io.in(roomId).emit('usersSentToRoom', users[roomId]);
  })
   
  socket.on('joinRoom', (roomId, nickname, ackFn) => {
    const room = io.sockets.adapter.rooms[roomId];
    if (!room) {
      console.log('roomId doesn\'t exist', roomId)
      ackFn(false);
    } else {
      socket.join(roomId);

      socket.nickname = nickname;
      users[roomId] = [...users[roomId], socket.nickname];

      ackFn(true);
      console.log("~~~~~~~~~~~~~~~~~~~~")
      console.log(`${socket.nickname} joins room ${roomId}`);
      console.log(`*** ${roomId} has ${io.sockets.adapter.rooms[`${roomId}`].length} user ***`);
      console.log("USERS:", users)
      io.in(roomId).emit('usersSentToRoom', users[roomId]);
    }
  });
  
  socket.on('lobbyReady', () => {
    // const hostId = Object.keys(socket.rooms)[0];
    const roomId = Object.keys(socket.rooms)[1];
    
    console.log("DATA:", data[roomId])
    io.in(roomId).emit('dataSentToRoom', data[roomId]);
  })
  
  socket.on('addToResults', (like) => {
    results.push(like);
    console.log("RESULTS:", results);
  });
  
  socket.on('readyForResult', () => {
    const roomId = Object.keys(socket.rooms)[1];
    const winners = mode(results);
    const winner = winners[Math.floor(Math.random() * winners.length)];
    console.log("WINNER:", winner);
    io.in(roomId).emit('resultSentToRoom', winner)
    results = [];
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
