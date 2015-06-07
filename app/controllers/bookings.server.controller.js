'use strict';
var Booking = require('./../models/bookings.server.model');
var Ride = require('./../models/rides.server.model');

module.exports = {
 //create ride
 create: function (req, res) {
  Booking.create(req.body, function (err, booking) {
    if (err) {
      res.json(err);
    }
    else {
      Ride.findByIdAndUpdate(req.body.ride, {$inc: {seat_number: -1}}, function (err, response) {
        // if (err)
      });
      res.json(booking);
    }
  });
 },

 get: function (req, res) {
  Booking.find({}, function (err, bookings) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(bookings);
    }
  });
 },

 delete: function(req, res) {
  Booking.delete({'_id': req.params.bookingId}, function(err, res) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(res);
    }
  });
 },

 getUnigueBooking: function (req, res) {
  Booking.find({'_id': req.params.bookingId}, function (err, booking) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(booking);
    }
  });
 },

 getBookingByUser: function (req,res) {
  Booking.find({'created_by': req.params.userId}, function(err, bookings) {
    if(err) {
      res.json(err);
    }
    else {
      res.json(bookings);
    }
  });
 },

 edit: function (req, res) {
  Booking.findByIdAndUpdate(req.params.bookingId, req.body, function (err, booking) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(booking);
    }
  });
 }

};