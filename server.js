// Server.js is our entry point of out API
// BASIC REQUIRED SETUP
// *******************************************************************************

// Call the required packages

var express = require("express"); // call express package
var app = express(); // configure app with express
var bodyParser = require("body-parser");

// configure app to use Body Parser
// this will let us get the data from a POST

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var port = process.env.PORT || 8080; // set port 8080 to execute out API

// ROUTES FOR OUR API

// ###############################################################################

var router = express.Router();

// test our route

router.get("/", function (req, res) {
  res.json({ message: "hooray! welcome to our REST API" });
});

// More routes will be added bellow here

// REGISTER OUR ROUTES

app.use("/api", router);

// START THE SERVER
app.listen(port);
console.log("Something awesome magic happens on port " + port);
