const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/../client/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Mongo connection
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "reservation";

//Test API GET request
app.get('/', (req, res) => {
  res.send('Received successful GET test request!')
})

//Test API POST request
app.post('/', (req, res) => {
  res.send('Received successful POST test request!')
})

// This request retrieves all the data from the database
app.get('/api/reservation', (req, res) => {
  MongoClient.connect(url, function (err, client) {
    const db = client.db(dbName);
    const reservationCollection = db.collection("reservationEntries");

    reservationCollection.find({}).toArray()
      .then((result) => {
        res.send(result)
        console.log(result)
        // client.close()
      })
      .catch((err) => {
        console.log(err)
        // client.close()
      })
    client.close()
  })
})

module.exports = app;