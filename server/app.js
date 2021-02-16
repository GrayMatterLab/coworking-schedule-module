const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/../client/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Mongo connection
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "location";

//Test API GET request
app.get('/', async (req, res) => {
  res.status(200)
  res.send('Received successful POST test request!')
})

//Test API POST request
app.post('/', async (req, res) => {
  res.status(200)
  res.json({message: 'Received successful POST test request!'})
})

// This request retrieves all the data from the database
app.get('/api/locations', (req, res) => {
  MongoClient.connect(url, function (err, client) {
    const db = client.db(dbName);
    const locationCollection = db.collection("locationEntries");

    locationCollection.find({}).toArray()
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

app.post('/api/reservation', (req,res) => {
  MongoClient.connect(url, function(err, client) {
    const db = client.db(dbName);
    const reservationCollection = db.collection("reservationEntries");
    reservationCollection.insertOne({
      locations: req.body.locations,
      pricePerNight: req.body.pricePerNight,
      cleaningFee: req.body.cleaningFee,
      covidSurcharge: req.body.covidSurcharge,
      occupTaxNFee: req.body.occupTaxNFee,
      timeInSel: req.body.timeInSel,
      timeOutSel: req.body.timeOutSel,
      reserveStartDate: req.body.reserveStartDate,
      reserveEndDate: req.body.reserveEndDate
    })
      .then((result) => {
        res.send(result)
        res.status(200)
        console.log(result)
      })
      .catch((err) => {
        console.log(err)
      })
    client.close()
  })
})

module.exports = app;