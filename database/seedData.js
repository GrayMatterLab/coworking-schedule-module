const faker = require('faker');
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const _ = require("lodash");

//Conneciton URL
const url = "mongodb://localhost:27017";

//Database Name
const dbName = "Reservation";

//Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
  assert.equal(null, err);

  const db = client.db(dbName);

  //get access to the relevant collections
  const reservationCollection = db.collection("reservations");

  //make a bunch of fake reservations
  let bunchOfReservations = [];

  for (let i = 0; i < 1000000; i++) {

    const addressBuild = faker.fake("{{address.streetAddress}}, {{address.city}}, {{address.state}}, {{address.zipCode}}");
    const pricePerHour = faker.finance.amount();
    const reserveDate = faker.date.future();
    const checkInTime = faker.time.recent();
    const checkOutTime = faker.time.recent();
    const numberOfGuests = faker.random.number();
    const occupancyTaxesAndFees = faker.finance.amount();

    const newReservation = {
      location: addressBuild,
      pricePerHour: pricePerHour,
      reserveDate: reserveDate,
      checkInTime: checkInTime,
      checkOutTime: checkOutTime,
      numberOfGuests: numberOfGuests,
      occupancyTaxesAndFees: occupancyTaxesAndFees
    }
    bunchOfReservations.push(newReservation);
  }
  reservationCollection.insertMany(bunchOfReservations)
  console.log("Database generated bunch of fake data!");
  client.close();
})

