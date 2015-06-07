'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BookingSchema = new Schema({
  ride : {
    type: Schema.ObjectId
  },

  booked_by: {
    type: Schema.ObjectId
  },

  status: {
    type: String,
    default: 'pending'
  },

  booked_at: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('Bookings', BookingSchema);