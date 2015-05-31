'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var RideSchema = new Schema({
  created_by: {
    type: Schema.ObjectId
  },
  origin: {
    type: String
  },
  destination: {
    type: String
  },
  seat_number: {
    type: Number
  },
  departure_time: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  price: {
    type: Number
  }
});
module.exports = mongoose.model('Rides', RideSchema);