const express = require ("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const pool = require("../server/db")

const index = require("./routes/index");
const invitation = require("./routes/invitation");

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("Server running on port", port)
});


//views

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

//body parser MW

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

//cors MW
app.use(cors())

//Routes

//Sending filters Index Route

//Send Invitation Route
app.use("/api", invitation)

//Users joining lobby Route

//Session Route

// Display Results Route