// Server.js is our entry point of out API
// BASIC REQUIRED SETUP
// *******************************************************************************

// Call the required packages

const express = require("express"); // call express package
const app = express(); // configure app with express
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
const { Collection } = require("mongoose");
const CONNECTION_URL = "mongodb://localhost:27017";
const DATABASE_NAME = "accounting_department";
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
// connecting to MongoDB database
app.listen(port, () => {
  MongoClient.connect(
    CONNECTION_URL,
    {
      useNewUrlParser: true,
    },
    (error, client) => {
      if (error) {
        throw error;
      }
      database = client.db(DATABASE_NAME);
      collection = database.collection("Personal");
      console.log("Connected to " + DATABASE_NAME + " !");
    }
  );
});
console.log("Something awesome magic happens on port " + port);
