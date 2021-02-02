//Open connection to the space database on our locally running instance of MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/27017', { useNewUrlParser: true, useUnifiedTopology: true });

//Notification if database is connected successfully or if a connection error occurs
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log('We\'re connected!')
});

//Schema
import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema(
  {
    location: { type: String, required: true },
    pricePerHour: { type: Number, required: true },
    reserveDate: { type: Date, required: true },
    checkInTime: { startTime: Date, required: true },
    checkOutTime: { endtime: Date, required: true },
    numberOfGuests: { type: Number, required: true },
    occupancyTaxesAndFees: { type: Number, required: true }
  }
)

const reservations = mongoose.model('reservationEntries', reservationSchema);

export default reservation;