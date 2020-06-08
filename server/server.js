const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);



app.get('/', (req, res) => {
  // res.sendFile(__dirname + '/server.html');
});

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


http.listen(3000, () => {
  console.log('listening on *:3000');
});




// const express = require ("express");
// const path = require("path");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const pool = require("../server/db")

// const index = require("./routes/index");
// const invitation = require("./routes/invitation");

// const app = express();
// const port = 3000;

// app.listen(port, () => {
//   console.log("Server running on port", port)
// });


// //views

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");
// app.engine("html", require("ejs").renderFile);

// //body parser MW

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}))

// //cors MW
// app.use(cors())

// //Routes

// //Sending filters Index Route

// //Send Invitation Route
// app.use("/api", invitation)

// //Users joining lobby Route

// //Session Route

// // Display Results Route