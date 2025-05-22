const mongoose = require('mongoose');

const parkingLotSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  capacity: { type: Number, required: true },
  available: { type: Number, required: true }
});

module.exports = mongoose.model('ParkingLot', parkingLotSchema);