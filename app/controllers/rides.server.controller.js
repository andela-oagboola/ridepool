'use strict';
var Ride = require('./../models/rides.server.model');

module.exports = {
 //create ride
 addRide: function (req, res) {
  Ride.create(req.body, function (err, ride) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(ride);
    }
  });
 },

 getRides: function (req, res) {
  Ride.find({}, function (err, rides) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rides);
    }
  });
 },

 deleteRide: function(req, res) {
  Ride.delete({'_id': req.params.rideId}, function(err, res) {
    if (err) {
      res.json(err);
    }
    else {
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

 editRide: function (req, res) {
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