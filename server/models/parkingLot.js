const mongoose = require("mongoose");

const parkinglotSchema = new mongoose.Schema({
  name: { type: String, required: true },
  total: { type: Number, required: true },
  numOfEntries: { type: Number, required: true },
  averageOccupancy: { type: Number, default: 0, required: true },
});

const ParkingLot = mongoose.model("ParkingLot", parkinglotSchema);
module.exports = ParkingLot;
