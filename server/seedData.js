const faker = require('faker');
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const _ = require("lodash");

//Conneciton URL
const url = "mongodb://localhost:27017";

//Database Name
const dbName = "reservation";

//Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
  assert.equal(null, err);

  const db = client.db(dbName);

  //get access to the relevant collections
  const reservationCollection = db.collection("reservationEntries");

  //make a bunch of fake reservations
  let bunchOfReservations = [];

  for (let i = 0; i < 100; i++) {

    const addressBuild = faker.fake("{{address.streetAddress}}, {{address.city}}, {{address.state}}, {{address.zipCode}}");
    const pricePerNight = faker.random.number({'min': 85, 'max': 154});
    const cleaningFee = 99;
    const covidSurcharge = 29;

    const newReservation = {
      location: addressBuild,
      pricePerNight: pricePerNight,
      cleaningFee: cleaningFee,
      covidSurcharge: covidSurcharge
    }
    bunchOfReservations.push(newReservation);
  }
  reservationCollection.insertMany(bunchOfReservations)
  console.log("Database generated bunch of fake data!");
  client.close();
})

