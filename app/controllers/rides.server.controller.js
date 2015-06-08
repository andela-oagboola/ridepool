'use strict';
var Ride = require('./../models/rides.server.model');
var Booking = require('./../models/bookings.server.model');

module.exports = {
 //create ride
 create: function (req, res) {
  Ride.create(req.body, function (err, ride) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(ride);
    }
  });
 },

 get: function (req, res) {
  Ride.find({}, function (err, rides) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rides);
    }
  });
 },

 delete: function(req, res) {
  var rideId = req.params.rideId;
  Ride.remove({'_id': rideId}, function(err, res) {
    if (err) {
      res.json(err);
    }
    else {
      Booking.remove({'ride': rideId}, function (err, affected) {});
      res.json(res);
    }
  });
 },

 getUnigueRide: function (req, res) {
  Ride.find({'_id': req.params.rideId}, function (err, ride) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(ride);
    }
  });
 },

 getRideByUser: function (req,res) {
  Ride.find({'created_by': req.params.userId}, function(err, rides) {
    if(err) {
      res.json(err);
    }
    else {
      res.json(rides);
    }
  });
 },

 edit: function (req, res) {
  Ride.findByIdAndUpdate(req.params.rideId, req.body, function (err, ride) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(ride);
    }
  });
 }

};